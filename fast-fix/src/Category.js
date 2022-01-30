import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import Services from "./Services";
import CategoryOption from "./CategoryOption";
import './Category.css';

function Category() {
  const { categoryId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomServices, setRoomServices] = useState([]);
  useEffect(() => {
    if (categoryId) {
      db.collection("categories")
        .doc(categoryId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("categories")
    .doc(categoryId)
    .collection("services")
    .onSnapshot((snapshot) => 
    setRoomServices(snapshot.docs.map((doc) => doc.data()))
    );
  }, [categoryId]);
  return (
    <div className="category">
        <div className="category_container">
      <h1>{roomDetails?.name}</h1>
        </div>
        {roomServices.map(({ id, src, location, title, description, price}) => (
        <Services
        id={id}
        src={src}
        location={location}
        title={title}
        description={description}
        price={price}
         />

        ))}

    </div>
  );
}

export default Category;
