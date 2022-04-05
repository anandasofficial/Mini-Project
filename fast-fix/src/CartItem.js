import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./CartItem.css";
import { useStateValue } from "./StateProvider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
function CartItem({ id, src, title, description, price }) {
  const history = useHistory();

  const [{ basket }, dispatch] = useStateValue();
 
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const print = () => {
console.log("Heeeeeeey");
  };
  return (
    <div className="searchResult">
      <img src={src} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <div className="service__price">
            <p>$</p>
            <p>{price}</p>
            <p>/hour</p>
          </div>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong></strong>
            </p>
          </div>

          <div className="cart__Button">
            <Button onClick={removeFromCart}>Remove from Cart</Button>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
