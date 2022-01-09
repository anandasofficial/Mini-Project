import React, { useState, useEffect } from "react";
import './Services.css';
import { db } from "./firebase";
import Card from './Card';
function Services() {
    const [services, setServices] = useState([]);
  useEffect(() => {
    db.collection("services").onSnapshot((snapshot) =>
      setServices(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
    return (
        <div className='service'>
               

            <div className='service_container'>
                <h1>Services</h1>
                <div className='service_section'>
                {services.map(({ src, title, description, price }) => (
          <Card
            id="1"
            src={src}
            title={title}
            description={description}
            price={price}
          />
        ))}
                </div>
            </div>
        </div>
    )
}

export default Services
