import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import './TaskerDetails.css';
import Taskers from './Taskers';
function TaskerDetails() {
    const [taskers, setTaskers] = useState([]);

    useEffect(() => {
        db.collection('ServiceProviders')
        
        .onSnapshot(snapshot => (
            setTaskers(snapshot.docs.map(doc => doc.data()))

        ))
    }, [])
       
  return (
    <div>
      <div className="SearchButton__tas">
        <form>
        <input type="text">

        </input>
        </form>
      </div>
       {taskers.map(({name, taskerId, price, src, phone, service, city}) => (
           <Taskers 
           taskerId={taskerId}
           name={name}
           src={src}
           phone={phone}
           service={service}
           city={city}
           price={price}
           />
       ))}
    </div>
  )
}

export default TaskerDetails