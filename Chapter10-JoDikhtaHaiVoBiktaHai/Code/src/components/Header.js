import React from "react";
import logo from "../../asset/logo.png";
import cart from "../../asset/cart.png";
import { Link } from "react-router";
import bgimg from "../../asset/background.jpg";

export const Header = () => {
  return (
    <div className="relative flex flex-col h-auto bg-no-repeat bg-contain">
      <img
        className="w-full h-full object-contain"
        src={bgimg}
        alt="background image"
      />
      <div className="absolute w-full flex items-center justify-between py-[15px] px-[20px]">
        <div>
          <Link to="/">
            <img className="w-[120px]" src={logo} alt="app logo" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center px-[25px] list-none text-white">
            <li className="p-[10px] text-xl text-white font-medium">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-[10px] text-xl text-white font-medium">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="p-[10px] text-xl text-white font-medium">
              <Link to="/login">Login</Link>
            </li>
            <li className="w-[35px] cursor-pointer">
              <img src={cart} alt="cart" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
