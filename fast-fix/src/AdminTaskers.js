import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminViewService.css";
import "./AdminTaskers.css";
import { db } from "./firebase";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Taskers from './Taskers';
import { Button } from '@material-ui/core';
import TaskDescription from './TaskDescription';

function AdminTaskers() {
  const [servicePro, setServicePro] = useState([]);
  const [roomDetails, setRoomDetails] = useState("");

  const [serviceProviders, setServiceProviders] = useState([]);
const [taskData, setTaskersData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { taskerId } = useParams();
  const history = useHistory();
  const [review, setReview] = useState([]);

  const [taskers, setTaskers] = useState([]);
  useEffect(() => {
    if (taskerId) {
      db.collection("ServiceProviders")
        .doc(taskerId)
        .onSnapshot((snapshot) => setTaskers(snapshot.data()));
    }
    db.collection("ServiceProviders")
    .onSnapshot((snapshot) => 
    setTaskersData (
      snapshot.docs.map((doc) => ({
        taskerId: doc.id,
        data: doc.data(),
      }))
    )
    )
  }, [taskerId]);
  useEffect(() => {
    db.collection("ServiceProviders")
    .onSnapshot((snapshot) =>
      setTaskers(snapshot.docs.map((doc) => doc.data()))
    );
  });
 useEffect(() => {
   db.collection("ServiceProviders")
   .onSnapshot((snapshot) => 
   
   setServicePro (
     snapshot.docs.map((doc) => ({
       taskerId: doc.id,
       data: doc.data(),
     }))
   ))
    
 }, [taskerId])
 useEffect(() => {
   if (taskerId) {
     db.collection("ServiceProviders")
     .doc(taskerId)
     .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
   }
   db.collection("ServiceProviders")
   .onSnapshot((snapshot) =>
   setServiceProviders (
     snapshot.docs.map((doc) => ({
       taskerId: doc.id,
       name: doc.data().name,
       service: doc.data().service,
       phone: doc.data().phone,
       description: doc.data().description,
       src: doc.data().src,


     }))
   )
   )
 },[taskerId])
  const viewTasker = (taskerId) => {
    if(taskerId){
      history.push(`/bookservice/${taskerId}`);
    } else {
      console.log("");
    }
  };
  return (
    <div className="adminPage">
      <div className="adminPage__container">
        <AdminSidebar />
        <div className="adminPage__Right">
          <div className="Right__above">
            <h4>
              <input
                type="text"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                placeholder="Search Taskers"
              ></input>
            </h4>

            <h4>Sign In</h4>
          </div>
          <div className="adminCategoryRight__below">
            <div className="Right__belowOneCategory">
              <div className="belowOneCategory__heading">
                <h4>Service Providers</h4>
                <div className="adminViewService__below">
                  <table className="table__admin">
                    <tr>
                      <th>Profile</th>
                      <th>Name</th>
                      <th>Service</th>
                      <th>Phone</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                    {serviceProviders
                      .filter(({ name }) => {
                        if (searchTerm === "") {
                          return name;
                        } else if (
                          name
                            .toLowerCase()
                            .includes(searchTerm.toLocaleLowerCase())
                        ) {
                          return name;
                        }
                      })
                      .map(({taskerId, name, service, phone, src, description }) => (
                        <tr key={taskerId}>
                          <td>
                            <img src={src}></img>
                          </td>
                          <td onClick={() => {viewTasker(taskerId);}}
                        >{name}</td>
                          <td>{service}</td>
                          <td>{phone}</td>
                          <td>{description}</td>
                          <td><Button onClick={() => {viewTasker(taskerId);}}>View</Button></td>
                          <td></td>
                        </tr>
                      ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTaskers;
