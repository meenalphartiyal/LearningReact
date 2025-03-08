import React from "react";
import logo from "../../asset/logo.png";
import cart from "../../asset/cart.png";
import { Link } from "react-router";
import bgimg from "../../asset/background.jpg";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

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
            <li className="relative w-[35px] cursor-pointer">
              <Link to="/cart">
                <div className="absolute w-6 h-6 left-6 -top-2 shadow-2xl bg-amber-400 rounded-full flex items-center justify-center">
                  {cartItems.reduce((acc, curr) => (acc += curr.quantity), 0) ||
                    0}
                </div>
                <img src={cart} alt="cart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
