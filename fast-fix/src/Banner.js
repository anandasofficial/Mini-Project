import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Banner.css";
import Card from "./Card";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1>Banner Content</h1>
        <div className="banner_left">
          <div className="banner_right"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
