import './SearchPage.css';
import React, { useState, useEffect } from "react";

import { Button } from "@material-ui/core";
import Services from './Services';
import { db } from "./firebase";

function SearchPage() {
    const [services, setServices] = useState([]);
    useEffect(() => {
      db.collection('services').onSnapshot(snapshot => (
        setServices(snapshot.docs.map(doc => doc.data()))
      ))
    }, [])
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {services.map(({id, src, title, description, price}) => (

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
           <Services
           img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
           location="Private room in center of London"
           title="Stay at this spacious Edwardian House"
           description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
           star={4.73}
           price="£30 / night"
           total="£117 total"/>
          
         
          
          
        </div>
    )
}

export default SearchPage