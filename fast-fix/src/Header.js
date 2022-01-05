import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">

      <div className="header__left">
        <span className="header_left1">Become a Tasker</span>

        <span className="header_left2">About</span>
      </div>

      <div className="header__center">
        <p>Fast Fix</p>
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'} style={{ textDecoration: "none" }}>
        <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Services</span>
        </div>

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
