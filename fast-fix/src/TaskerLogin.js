import React, { useState } from "react";
import { auth, db } from "./firebase";
import { useHistory } from "react-router-dom";
import "./TaskerLogin.css";
function TaskerLogin() {
  const history = useHistory();
  
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    db.collection("serviceproviders").add({
      name: name,
      service: service,
      email: email,
      password: password,
    });
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        if (auth) {
          history.push("/");

         /* alert("Message has been submitted!");*/
        }
      })
      .catch((error) => {
        alert(error.message);
      });
    setName("");
    setService("");
    setEmail("");
  };

  return (
    <div className="tasker_auth">
      <div className="tasker_container">
        <h1></h1>
        <form>
          <h5>Your Name</h5>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h5>Services you offer</h5>

          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
          <h5>Your Email</h5>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Your Password</h5>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} className="tasker_loginButton">
            Sign In
          </button>
        </form>
        <button onClick={register} className="tasker_registerButton">
          Register as a Tasker
        </button>
      </div>
    </div>
  );
}

export default TaskerLogin;
