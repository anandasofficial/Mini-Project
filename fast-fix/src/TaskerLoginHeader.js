import React from "react";
import "./TaskerLoginHeader.css";
import { Link } from "react-router-dom";

function TaskerLoginHeader() {
  return (
    <div className="login">
      
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="login_headerLeft">
        <h1>FF</h1>
      </div>
    </Link>

    <div className="login_headerRight">
      <h1>Sign up as a partner on Fast Fix</h1>
    </div>
  </div>

  );
}

export default TaskerLoginHeader;
