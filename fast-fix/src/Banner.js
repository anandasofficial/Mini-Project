import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Banner.css";
import Card from "./Card";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1>On-Demand Quality Services</h1>
        <Button>Become a Tasker</Button>
      </div>
    </div>
  );
}

export default Banner;
