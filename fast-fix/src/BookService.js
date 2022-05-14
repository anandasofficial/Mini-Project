import React, { useState, useEffect } from "react";
import "./BookService.css";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import Taskers from "./Taskers";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import TaskerLogin from "./TaskerLogin";
import { Button } from "@material-ui/core";

function BookService() {
  const { taskerId } = useParams();
  const [taskers, setTaskers] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    if (taskerId) {
      db.collection("ServiceProviders")
        .doc(taskerId)
        .onSnapshot((snapshot) => setTaskers(snapshot.data()));
    }
  });
const saveDetails = () => {
  if(taskerId) {
    db.collection("ServiceProviders")
    .doc(taskerId)
    .collection("ServiceRequests").add({
      name : name,
      phone : phone,
      pincode: pincode,
      locality: locality,
      address: address,
      city: city,
      state: state,
    });
    setName("");
    setPhone("");
    setPincode("");
    setLocality("");
    setAddress("");
    setCity("");
    setState("");
  }
};
  return (
    <div className="BookService">
      <div className="BookService__container">
        <div className="BookService__containerMiddle">
          <h1>Describe Your Task</h1>
          <div className="containerMiddle__p">
            <h2>{taskers?.service}</h2>
            <p>Scroll to begin</p>
            <h1>
              <FaLongArrowAltDown />
            </h1>
          </div>
          <div className="socialMedia__icons">
            <p>
              <FaFacebookF />
            </p>
            <p>
              <FaPinterestP />
            </p>
            <p>
              <FaTwitter />
            </p>
          </div>
        </div>
        <div className="BookService__bottom">
          <div className="BookService__bottomLeft">
            <img src={taskers?.src}></img>
          </div>
          <div className="BookService__bottomRight">
            <h1></h1>
            <div className="bottomRight__details">
              <h2>
               {taskers?.name}
              </h2>
              <div className="bottomRight__inputs">
                <h3>Add Your Task Location</h3>
                <form>
                  <input
                    type=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  ></input>
                  <input type=""  
                  value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   placeholder="Phone"></input>
                </form>
              </div>
              <div className="bottomRight__inputs">
                <form>
                  <input type="" 
                   value={pincode}
                   onChange={(e) => setPincode(e.target.value)}
                  placeholder="Pincode"></input>
                  <input type=""
                   value={locality}
                   onChange={(e) => setLocality(e.target.value)}
                  placeholder="Locality"></input>
                </form>
              </div>
              <div className="bottomRight__inputsTwo">
                <form>
                  <input type="" 
                   value={address}
                   onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"></input>
                </form>
                <div className="bottomRight__inputs">
                  <form>
                    <input type=""
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                   placeholder="City"></input>
                    <input type="" 
                     value={state}
                     onChange={(e) => setState(e.target.value)}
                    placeholder="State"></input>
                  </form>
                  <Button onClick={saveDetails}>Save</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookService;
