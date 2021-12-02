import React from "react";
import "./Header.css";


import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
 
  return (
    <div className="header">
        <div className='header__left'>
        </div>
      <div className="header__center">
        <p>Fast Fix</p>
      </div>

      <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo"></span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
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