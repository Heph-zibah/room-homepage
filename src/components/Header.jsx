import React from "react";
import Navbar from "./Navbar";
import NavHero from "./NavHero";

const Header = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row ">
        <Navbar className="flex-1" />
        <NavHero className="flex-2" />
      </div>
    </>
  );
};

export default Header;
