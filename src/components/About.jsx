import React from "react";
import darkImg from "../Assets/image-about-dark.jpg";
import lightImg from "../Assets/image-about-light.jpg";

const About = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row items-center ">
        <img src={darkImg} alt="furniture" />
        <div className="px-10 text-sm py-10 lg:py-0">
          <h2 className="font-bold uppercase tracking-[5px] text-lg mb-2">
            About our furniture
          </h2>
          <p className="leading-5 text-veryDarkGray">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img src={lightImg} alt="furniture" />
      </main>
    </>
  );
};

export default About;
