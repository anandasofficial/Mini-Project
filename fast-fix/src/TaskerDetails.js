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
       {taskers.map(({name, src, phone, service, city}) => (
           <Taskers 
           name={name}
           src={src}
           phone={phone}
           service={service}
           city={city}
           />
       ))}
    </div>
  )
}

export default TaskerDetails