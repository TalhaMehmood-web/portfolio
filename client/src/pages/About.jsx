import React from "react";
import career from "../assets/Careers-img.png";
import "../styles/About.css";
const About = () => {
  return (
    <div className="px-10 py-4 flex justify-between ">
      <div className=" hidden 988px:flex  about-left">
        <img src={career} className="w-full  " alt="" />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default About;
