import React, { useState } from "react";
import logo from "../../asset/logo.png";
import cart from "../../asset/cart.png";

export const Header = () => {
  const [btn, setBtn] = useState("Login");
  const toggleBtn = () => {
    if(btn === 'Login')
      setBtn("Logout");
    else
      setBtn("Login");
  }

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
            <li><button type="button" className="login-btn" onClick={toggleBtn}>{btn}</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;