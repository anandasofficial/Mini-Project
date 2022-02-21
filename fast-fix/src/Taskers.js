import React from "react";
import "./Taskers.css";
import { Button } from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Taskers({name,
  id,
  src,
  phone,
  service,
  city,
  location,
  title,
  description,
  star,
  price,
  total}) {
  return (
    <div className="taskers">
      <img src={src} alt="" />
      <FavoriteBorderIcon className="taskers__heart" />

      <div className="taskers__info">
        <div className="taskers__infoTop">
          <div className="taskers__price">
            <p></p>
            <p>{price}</p>
            <p></p>
          </div>
          <h2>{name}</h2>
          <p>____</p>
          <h3>Featured Skills</h3>
          <p>{service}</p>
        </div>

        <div className="taskers__infoBottom">
          <div className="taskers__stars">
            <StarIcon className="taskers__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="taskers__price">
            <h2>{location}</h2>
            <p>
              
            </p>

            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Taskers;