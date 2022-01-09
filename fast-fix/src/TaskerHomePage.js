import React, { useState } from "react";
import { useHistory } from "react-router";
import { db } from "./firebase";
import "./TaskerHomePage.css";
function TaskerHomePage() {
  const history = useHistory();

  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
    
  const submit = (e) => {
    e.preventDefault();

    db.collection("services").add({
      src: src,
      title: title,
      description: description,
      price: price,
    })
    .then(() => {
      history.push("/");
    })
  }
  return (
    <div className="user_auth">
      <div className="user_container">
        <h1></h1>
        <form>
          <h5>src</h5>
          <input
            type="text"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
          />
          <h5>Title</h5>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h5>Description</h5>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
           <h5>Price</h5>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit" onClick={submit} className="user_loginButton">
            Sign In
          </button>
        </form>
          
      </div>
    </div>
  );
}

export default TaskerHomePage;
