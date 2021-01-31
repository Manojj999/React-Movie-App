import React from "react";

//Components

import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Navigation from "./elements/Navigation";
import Spinner from "./elements/Spinner";
//import { useHomeFetch } from './Hooks/useHomeFetch';


import { useMovieFetch } from "./Hooks/useMovieFetch";
import NotFound from "./NotFound";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);
  console.log("Movie ==> ", movie);

  if (error) return <NotFound />;

  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar 
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}


       />
      <Grid header="Actors">
      {movie.actors.map(actor =>  (
        <Actor key={actor.credit_id} actor={actor} />
      ))}
        
      </Grid>
    </>
  );
};

export default Movie;
