import React from 'react'

import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './MovieCard.css';

const MovieCard = (props) => {
  const data = props.dataList
  const pageName = props.type

  return (
    <div className="detail_card_area">
      <div className="detail_wrap_image">
        <FontAwesomeIcon className="detail_image_icon" icon={faPlay} />
      </div>
      <div className="detail_wrap_text">
        { data ?
          pageName === 'movie' ?

            <React.Fragment>
              <div className="detail_card_text"> Episode id: {data.episode_id} </div>
              <div className="detail_card_text"> Director: {data.director} </div>
              <div className="detail_card_text"> Producer: {data.producer} </div>
              <div className="detail_card_text"> Release on: {data.release_date} </div>
              <div className="detail_card_text"> Opening Crawl: {data.opening_crawl} </div>
            </React.Fragment>

          : pageName === 'vehicles' ?

            <React.Fragment>
              <div className="detail_card_text"> Name: {data.name} </div>
              <div className="detail_card_text"> Model: {data.model} </div>
              <div className="detail_card_text"> Manufacturer: {data.manufacturer} </div>
              <div className="detail_card_text"> Crew: {data.crew} </div>
              <div className="detail_card_text"> Passengers: {data.passengers} </div>
              <div className="detail_card_text"> Consumables: {data.consumables} </div>
              <div className="detail_card_text"> Vehicles Length : {data.length} </div>
            </React.Fragment>

          : pageName === 'starships' ?

            <React.Fragment>
              <div className="detail_card_text"> Model: {data.model} </div>
              <div className="detail_card_text"> Manufacturer: {data.manufacturer} </div>
              <div className="detail_card_text"> Length: {data.length} </div>
              <div className="detail_card_text"> Max atmosphering speed: {data.max_atmosphering_speed} </div>
              <div className="detail_card_text"> Crew: {data.crew} </div>
              <div className="detail_card_text"> Passengers: {data.passengers} </div>
              <div className="detail_card_text"> Starship class: {data.starship_class} </div>
            </React.Fragment>

          : null

        : null }
      </div>

    </div>
  );
};

export default MovieCard;
