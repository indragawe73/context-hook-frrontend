import React from 'react'

import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './DetailCard.css';

const DetailCard = (props) => {
  const data = props.dataList

  return (
    <div className="detail_card_area">
      <div className="detail_wrap_image">
        <FontAwesomeIcon className="detail_image_icon" icon={faHome} />
      </div>
      <div className="detail_wrap_text">
        { data ?
          <React.Fragment>
            <div className="detail_card_text"> height: {data.height} </div>
            <div className="detail_card_text"> Mass: {data.mass} </div>
            <div className="detail_card_text"> Hair Color: {data.hair_color} </div>
            <div className="detail_card_text"> Skin Color: {data.skin_color} </div>
            <div className="detail_card_text"> Birth Year: {data.birth_year} </div>
            <div className="detail_card_text"> Gender: {data.gender} </div>
          </React.Fragment>
          : null
        }
      </div>

    </div>
  );
};

export default DetailCard;
