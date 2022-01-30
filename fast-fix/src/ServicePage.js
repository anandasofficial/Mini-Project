import "./SearchPage.css";
import React, { useState, useEffect } from "react";

import { Button } from "@material-ui/core";
import Services from "./Services";
import { db } from "./firebase";
import CategoryOption from './CategoryOption';

function ServicePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    db.collection('categories').onSnapshot(snapshot => (
      setCategories (
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    ))
    db.collection("services").orderBy("title", "asc").onSnapshot((snapshot) =>
      setServices(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        {categories.map(channel => (
       <CategoryOption 
       name = {channel.name}
       id = {channel.id}
       />

        ))}
        <input
          type="text"
          className="search_button"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
      </div>
      {services
        .filter(({ title }) => {
          if (searchTerm === "") {
            return title;
          } else if (
            title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          ) {
            return title;
          }
        })
        .map(({ id, src, location, title, description, price }) => (
          <Services
            src={src}
            id={id}
            location={location}
            title={title}
            description={description}
            star={4.73}
            price={price}
            total="£117 total"
          />
        ))}
    </div>
  );
}

export default ServicePage;
