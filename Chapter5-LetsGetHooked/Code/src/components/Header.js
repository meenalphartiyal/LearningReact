import React from "react";
import logo from "../../asset/logo.png";
import cart from "../../asset/cart.png";

export const Header = () => {
  return (
    <div className="hdr">
      <div className="nav">
        <div className="nav-logo">
          <img src={logo} alt="app logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <img src={cart} alt="cart" />
            </li>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;