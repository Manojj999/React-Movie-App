import React,{useState,useEffect} from "react";
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


const Home = () => {
   const [{state,loading,error},fetchMovies] = useHomeFetch();
   console.log("State=>" , state )


  return (
    <div>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBt />
    </div>
  );
};
export default Home;
