import React from 'react';
import {StyledMovieThumb} from '../styles/StyledMovieThumb'
import  { Link} from '@reach/router'
import PropTypes from 'prop-types';

const MovieThumb = ({image,movieId,clickable}) => {
    return(
        <StyledMovieThumb>
            {
                clickable 
                ? (
                    <Link to={`/${movieId}`}>

                    <img className="clickable" src={image} alt={"MovieThumb"} />
                    </Link>
                )
                :(
                    <img src={image}  alt={"MovieThumb"} />
                )
            }
        </StyledMovieThumb>
    )
}

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId:PropTypes.number,
    clickable:PropTypes.bool
  };
  
export default MovieThumb;