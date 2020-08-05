import React from 'react'

import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Card.css';

const Card = (props) => {
  const listData = props.data

  return (
    <div className="card_area">
      <div className="wrap_image">
        <FontAwesomeIcon className="image_icon" icon={faHome} />

      </div>
      <div className="card_text card_title">{listData.name}</div>
      <div className="card_text">Gender: {listData.gender}</div>
    </div>
  );
};

export default Card;
