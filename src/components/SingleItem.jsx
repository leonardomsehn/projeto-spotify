import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const SingleItem = ({ id, name, image, banner, artist }) => {
  return (
    <div className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt="Henrique & Juliano"
          />
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>

      <div className="single-item_texts">
        <div className="single-item__2lines">
          <p className="single-item_title">{name}</p>
          <p className="single-item_type">{artist ?? "Artista"}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
