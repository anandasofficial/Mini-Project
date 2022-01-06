import React, { useState } from "react";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function TaskerLogin() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("serviceproviders")
      .add({
        name: name,
        phone: phone,
        service: service,
        email: email,
      })
      .then(() => {
        history.push("/");

        alert("Message has been submitted!");
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setPhone("");
    setService("");
    setEmail("");
  };

  return (
    <div className="user_auth">
      <div className="user_container">
        <h1></h1>
        <form onSubmit={handleSubmit}>
          <h5>Your Name</h5>
          <input
            placeholder="Enter your name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Phone Number</h5>

          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <h5>Services you offer</h5>

          <input
            type="text"
            placeholder="Enter your Service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
                    <h5>Your Email</h5>

          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="user_loginButton">
            Sign In
          </button>
        </form>
        <button onClick="" className="user_registerButton">
          Create your Fast Fix Account
        </button>
      </div>
    </div>
  );
}

export default TaskerLogin;
