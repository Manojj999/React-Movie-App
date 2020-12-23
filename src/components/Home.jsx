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

const Home = () => {
    const[state , setState] =useState({movies:[]});
    const[loading , setLoading] = useState(false);
    const[error , setError] = useState(false);
    console.log(state);

    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);

        // try{
        //     const result = await (await fetch(endpoint)).json();
            
        // }
        // cache(error){
        //   console.log("error",error)
        // }
        // setLoading(false);

    }
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
