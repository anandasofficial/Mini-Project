import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./UserAuth.css";
import { Button } from "@material-ui/core";


function UserAuth() { 
  const history = useHistory();
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

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="user_auth">
      <div className="user_container">
        <h1></h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={register} className="user_loginButton">
            Register
          </button>
        </form>
        <p>
        Already have an account? <strong onClick={signIn}>Sign In</strong>

        </p>
        
      </div>
    </div>
  );
}

export default UserAuth;