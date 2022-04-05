import React, { useState, useEffect } from "react";
import './TaskDescription.css';
import { useParams } from "react-router-dom";
import { db } from "./firebase";

function TaskDescription() {
    const { taskerId } = useParams();
    const [taskerDetails, setTaskerDetails] = useState("");
  
 useEffect(() => {
     if (taskerId) {
         db.collection('ServiceProviders')
         .onSnapshot((snapshot) =>
         setTaskerDetails(
             snapshot.docs.map((doc) => ({
                 id: doc.id,
                 name: doc.data().name,
             }))
         )
         )
     }
 })

     
         
    return (
    <div className='description'>
        <div className='description__container'>
            <div className='description__header'>
            </div>
        </div>
        
    
        <div className='description__f'>
            <p>Tell us about your task. 
                We use these details to show
                 Taskers in your area who fit 
                 your needs.</p>
        </div>
        <div className='description__middle'>
            <h3>Home Repair</h3>
            <div className='description__location'>
                <h3>Your Location</h3>
                <p>description</p>
                <input type="text"></input>
            </div>
            <div className='middle__details'>
                <h1>Middle</h1>
            </div>
            </div>
        </div>
  )
}

export default TaskDescription