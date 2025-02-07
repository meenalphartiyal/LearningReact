import React, { useState } from "react";
import logo from "../../asset/logo.png";
import cart from "../../asset/cart.png";
import { Link } from "react-router";

export const Header = () => {
  const [btn, setBtn] = useState("Login");
  const toggleBtn = () => {
    if(btn === 'Login')
      setBtn("Logout");
    else
      setBtn("Login");
  }
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  // console.log("Header Component");

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