import { useEffect, useState } from "react";
import { POPULAR_BASE_URL } from "../../config";

export const useHomeFetch = (searchTerm) => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadMore = endpoint.search("page");

    try {
      const result = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],
        heroImage: prev.heroImage || result.results[0], // result.results[0] =>  This will contain first hero Image of Movies
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (sessionStorage.homeState) {
      // console.log("grabing from Session Storage")

      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      //console.log("grabing from Api")

      fetchMovies(POPULAR_BASE_URL);
    }
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      console.log("writing to Session Storage");
      sessionStorage.setItem("homeState", JSON.stringify(state)); // pass name of state that persist in session storage
    }
  }, [searchTerm, state]);

  return [{ state, loading, error }, fetchMovies];
};
