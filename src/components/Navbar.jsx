import React from "react";
import menu from "../Assets/icon-hamburger.svg";
import logo from "../Assets/logo.svg";
import close from "../Assets/icon-close.svg";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className=" bg-hero-mobile bg-no-repeat h-[70vh] w-full bg-top bg-contain lg:bg-hero-desktop lg:bg-cover lg:bg-center">
        <div className="flex px-5 py-9 items-center space-x-20 lg:hidden">
          <img
            src={menu}
            alt="hamburger"
            onClick={() => setShowNav(!showNav)}
          />
          <img src={logo} alt="room logo" />
        </div>
        <div className="hidden lg:flex items-center gap-24 px-28 py-9">
          <img src={logo} alt="room logo" />
          <ul className="flex space-x-7 sm:space-x-10 font-bold text-white">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        {showNav && (
          <div className="bg-black bg-opacity-50 w-full h-screen">
            <div className="flex items-center justify-between absolute top-0 left-0 px-5 py-9 bg-white w-full lg:hidden">
              <div>
                <img
                  src={close}
                  alt="close menu"
                  onClick={() => setShowNav(!showNav)}
                />
              </div>
              <ul className="flex space-x-7 sm:space-x-10 font-bold">
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
