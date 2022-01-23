import './SearchPage.css';
import React, { useState, useEffect } from "react";

import { Button } from "@material-ui/core";
import Services from './Services';
import { db } from "./firebase";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

    const [services, setServices] = useState([]);
    useEffect(() => {
      db.collection('services').onSnapshot(snapshot => (
        setServices(snapshot.docs.map(doc => doc.data()))
      ))
    }, [])
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <Button variant="outlined">Moving Services</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
                <input type="text" className='search_button' onChange={(e) => {setSearchTerm(e.target.value);
}}></input>
            </div>
            {services.filter(({title}) => {
              if (searchTerm === "") {
                return title;
              }
              else if (title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
              ) {
                return title;
              }
             
            }).map(({id, src, title, description, price}) => (

          <Services
           src={src}
           location="Private room in center of London"
           title={title}
           description={description}
           star={4.73}
           price={price}
           total="£117 total"
           />
           ))}
           
          
         
          
          
        </div>
    )
}

export default SearchPage