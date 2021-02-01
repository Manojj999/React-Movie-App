import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { calcTime, convertMoney } from "../../helpers";
import { StyledMovieInfoBar } from "../styles/StyledMovieInfoBar";
import PropTypes from 'prop-types';


const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <StyledMovieInfoBar>
      <div className='movieinfobar-content'>
        <div className='movieinfobar-content-col'>
          <FontAwesomeIcon className='fa-time' name=' clock-o' size='2x' />
          <span className='movieinfobar-info'>
            Running Time: {calcTime(time)}
          </span>
        </div>

        <div className='movieinfobar-content-col'>
          <FontAwesomeIcon className='fa-budget' name='money' size='2x' />
          <span className='movieinfobar-info'>
            Budget: {convertMoney(budget)}
          </span>
        </div>

        <div className='movieinfobar-content-col'>
          <FontAwesomeIcon className='fa-revenue' name='ticket' size='2x' />
          <span className='movieinfobar-info'>
            Revenue: {convertMoney(revenue)}
          </span>
        </div>
      </div>
    </StyledMovieInfoBar>
  );
};

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget:PropTypes.number,
  revenue:PropTypes.number
};

export default MovieInfoBar;
