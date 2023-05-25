import React from "react";
import menu from "../Assets/icon-hamburger.svg";
import logo from "../Assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-hero-mobile bg-no-repeat h-screen w-full bg-top bg-contain lg:bg-hero-desktop lg:bg-cover lg:bg-center">
        <div className="flex px-5 py-9 items-center space-x-20">
          <img src={menu} alt="hamburger" />
          <img src={logo} alt="room logo" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
