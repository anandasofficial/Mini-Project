import React, { useState, useEffect } from "react";
import "./TaskDescription.css";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { Button } from "@material-ui/core";
import Taskers from "./Taskers";
import Review from "./Review";
function TaskDescription({id}) {
  const { taskerId } = useParams();
  const [taskers, setTaskers] = useState([]);
  const [description, setDescription] = useState("");
  const [review, setReview] = useState([]);
  const history = useHistory();

  const selectCategory = () => {
    if(taskerId){
      history.push(`/bookservice/${taskerId}`);
    } else {
      console.log("");
    }
  };
  useEffect(() => {
    db.collection("ServiceProviders")
      .doc(taskerId)
      .collection("reviews")
      .onSnapshot((snapshot) =>
        setReview(snapshot.docs.map((doc) => doc.data()))
      );
  }, [taskerId]);

  const submitReview = (e) => {
    e.preventDefault();
    if (taskerId) {
      db.collection("ServiceProviders")
        .doc(taskerId)
        .collection("reviews")
        .add({
          description: description,
        });
    }
    setDescription("");
  };
  useEffect(() => {
    if (taskerId) {
      db.collection("ServiceProviders")
        .doc(taskerId)
        .onSnapshot((snapshot) => setTaskers(snapshot.data()));
    }
  });

  return (
    <div className="description">
      <div className="description__container">
        <div className="description__left">
          <img src={taskers?.src}></img>
        </div>
        <div className="description__right">
          <h1>{taskers?.name}</h1>
          <div className="description__rightService">
            <h3>{taskers?.service}</h3>
            <h3>₹{taskers?.price}/hr</h3>
          </div>
          <p>Reviews</p>

          <p>{taskers?.description}</p>
          <div className="description__upperButton">
            <Button className="button__a">Add To Cart</Button>

            <div className="description__lowerButton">
              <Button onClick={selectCategory}>Book Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="description__button">
        <h2>Reviews</h2>
      </div>
        </div>
     
  );
}

export default TaskDescription;
