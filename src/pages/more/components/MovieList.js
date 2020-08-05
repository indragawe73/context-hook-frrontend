import React from 'react'

import { faPlay, faCar, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './MovieList.css';

const MovieList = (props) => {
  let listStatus = props.status
  return (
    <div className="movie_card_area">
      <div className="movie_wrap_card">
          {listStatus === 'movie'  ? 
            <React.Fragment>
              <div className="movie_wrap_image">
                <FontAwesomeIcon className="movie_image_icon" icon={faPlay} />
              </div>
              <div className="movie_card_title">Film</div>
            </React.Fragment>
            : listStatus === 'vehicles' ?
            <React.Fragment>
              <div className="movie_wrap_image_yellow">
                <FontAwesomeIcon className="movie_image_icon" icon={faCar} />
              </div>
              <div className="movie_card_title">Vehicles</div>
            </React.Fragment>
            :
            <React.Fragment>
              <div className="movie_wrap_image">
                <FontAwesomeIcon className="movie_image_icon" icon={faStar} />
              </div>
              <div className="movie_card_title">Starships</div>
            </React.Fragment>
          }

      </div>
    </div>
  );
};

export default MovieList;
