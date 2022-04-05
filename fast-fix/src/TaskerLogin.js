import React, { useState } from "react";
import { auth, db } from "./firebase";
import { useHistory } from "react-router-dom";
import "./TaskerLogin.css";
function TaskerLogin() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  };

  return (
    <div className="tasker_auth">
      <div className="tasker_container">
        <h1>Sign up as a partner on Fast Fix</h1>
        <form>
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
          <button onClick={register} className="tasker_loginButton">
            Register as a Tasker
          </button>
        </form>
        <div className="signin__div">
          <p>
            Already have an account? <strong onClick={signIn}>Sign In</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskerLogin;
