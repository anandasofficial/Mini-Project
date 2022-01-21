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

  const [nameError, setNameError] = useState("");
  const [serviceError, setServiceError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        history.push("/taskerhomepage");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      db.collection("services").add({
        name: name,
        service: service,
        email: email,
        password: password,
      });
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          if (auth) {
            history.push("/taskerhomepage");

          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  const formValidation = () => {
    const nameError = {};
    const serviceError = {};
    const emailError = {};
    const passwordError = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    let isValid = true;
    if (!name) {
      nameError.nameNill = "Username is required!";
    }
    if (!service) {
      serviceError.serviceNill = "Service is required!";
    }
    if(!email) {
      emailError.emailNill = "Email is required!";

    } else if (!regex.test(email)) {
      emailError.emailNot = "This is not a valid eamil format!";
    }
if(!password) {
  passwordError.passwordNill = "Password is required!";

}else if((password.length < 4) ) {
passwordError.passwordLength = "password must be more than 4 characters";
}
    setNameError(nameError);
    setServiceError(serviceError);
    setEmailError(emailError);
    setPasswordError(passwordError);
    return isValid;
  };

  return (
    <div className="tasker_auth">
      <div className="tasker_container">
        <h1>Sign up as a partner on Fast Fix</h1>
        <form>
          <h5>Your Name</h5>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {Object.keys(nameError).map((key) => {
            return <div style={{ color: "red", fontFamily: "monospace " }}>{nameError[key]}</div>;
          })}
          <h5>Services you offer</h5>

          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
          {Object.keys(serviceError).map((key) => {
            return <div style={{ color: "red", fontFamily: "monospace " }}>{serviceError[key]}</div>;
          })}
         

          <h5>Your Email</h5>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {Object.keys(emailError).map((key) => {
            return <div style={{ color: "red", fontFamily: "monospace " }}>{emailError[key]}</div>;
          })}
          <h5>Your Password</h5>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {Object.keys(passwordError).map((key) => {
            return <div style={{ color: "red", fontFamily: "monospace " }}>{passwordError[key]}</div>;
          })}
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