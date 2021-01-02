import React from 'react'

//Components

import Actor from './elements/Actor';
import Grid from './elements/Grid';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Navigation from './elements/Navigation';
import Spinner from './elements/Spinner';
//import { useHomeFetch } from './Hooks/useHomeFetch';


import {useMovieFetch } from './Hooks/useMovieFetch'

const Movie = ({movieId}) => {

    const [movie,loading,error] = useMovieFetch(movieId)
    console.log("Movie ==> ",movie)
    return (
        <>
             <Navigation />
             <MovieInfo />
             <MovieInfoBar />
             <Grid>
                 <Actor />
             </Grid>
             <Spinner />
        </>
    )
}

export default Movie;