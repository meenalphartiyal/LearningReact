import React from "react";
import './Header.css';
import logo from "./utilities/react-logo.png";
import user from "./utilities/user-icon.png";

const Header = () => {
  return (
    <div className="header">
			<div className="header-logo">
				<img src={logo} alt='react logo' />
			</div>
			<div className="header-srchbar">
				<input type='text' placeholder="Search"/>
			</div>
			<div className="header-user">
				<img src={user} alt='user' />	
			</div>
    </div>
	);
};

export default Header;
