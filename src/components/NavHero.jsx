import React from "react";
import arrow from "../Assets/icon-arrow.svg";

const NavHero = () => {
  return (
    <>
      <div className="px-10 text-sm py-10 lg:py-0">
        <h1 className="font-bold text-4xl mb-2">
          Discover innovative ways to decorate
        </h1>
        <p className="leading-5 text-veryDarkGray">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div className="flex items-center mt-5 gap-5">
          <button className="tracking-[10px] uppercase">Shop now</button>
          <img src={arrow} alt="arrow icon" />
        </div>
      </div>
    </>
  );
};

export default NavHero;
