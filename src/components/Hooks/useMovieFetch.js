import { useCallback, useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config";
// import Movie from '../movie'

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);
    try {
      const endPoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endPoint)).json();
      // console.log("Results =>",result)
      const creditsEndpoints = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditResult = await (await fetch(creditsEndpoints)).json();
      //console.log("CreditDetails =>",creditResult)

      const directors = creditResult.crew.filter(
        (member) => member.job === "Director"
      );

      setState({
        ...result,
        actors: creditResult.cast,
        directors,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    if (localStorage[movieId]) {
      setState(JSON.parse(localStorage[movieId]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, movieId]);

  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return [state, loading, error];
};
