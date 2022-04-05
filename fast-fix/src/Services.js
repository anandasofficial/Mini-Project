import React, { useState, useEffect } from "react";
import "./Services.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";

function Services({
  name,
  id,
  src,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const history = useHistory();
  const [services, setServices] = useState([]);

  const selectCategory = () => {
    if (id) {
        history.push(`/categories/${id}`)
        db.collection("services")
        .onSnapshot((snapshot) => 
        setServices(snapshot.docs.map((doc) => doc.data())))
    } else {
        history.push('/');
    }
  }
  const [state, dispatch] = useStateValue();

  const { categoryId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        src: src,
        price: price,
        location: location,
        title: title,
        description: description,
      },
    });
  };
  useEffect(() => {
    if (categoryId) {
      db.collection("categories")
        .doc(categoryId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
  }, [categoryId]);
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
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{location}</h2>
            <p>
              <Button className="cartbutton" onClick={addToCart}>
                Add to Cart
              </Button>
            </p>

            <p>
              <Button onClick={selectCategory} >View</Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
