import React, { useState } from "react";
import HeroImage from "./elements/HeroImage";
import LoadMoreBt from "./elements/LoadMoreBt";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";
import MovieThumb from "./elements/MovieThumb";
import Grid from "./elements/Grid";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config";
import { useHomeFetch } from "./Hooks/useHomeFetch";
import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");
 

  if (error) return <div>Something went Wrong</div>;

  if (!movies[0]) {
    return <Spinner />;
  }

  return (
    <div>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? "Search Result" : "Result Movies"}>
        {movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      <MovieThumb />
      <Spinner />
      <LoadMoreBt />
    </div>
  );
};
export default Home;
