import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
 
  return (
    <div className="header">
        <div className='header__left'>
        <span className="header_left1">Home</span>
        <span className="header_left1">About</span>

        </div>
      <div className="header__center">
        <p>Fast Fix</p>
      </div>

      <div className="header__nav">
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <div className="header__option">
         
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          </Link>

          <div className="header__option">
            <span className="header__optionLineOne">Services</span>
          </div>
        


          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;