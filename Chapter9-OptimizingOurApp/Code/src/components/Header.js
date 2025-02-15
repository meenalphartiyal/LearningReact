import React, { useState } from "react";
import logo from "../../asset/logo.png";
import cart from "../../asset/cart.png";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="hdr">
      <div className="nav">
        <div className="nav-logo">
          <Link to='/'>
            <img src={logo} alt="app logo" />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><img src={cart} alt="cart" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;