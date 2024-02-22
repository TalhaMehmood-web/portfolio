import React from "react";
import career from "../assets/Careers-img.png";
import career2 from "../assets/2.jpg";
import "../styles/About.css";
import Button from "../components/Button";
const About = () => {
  return (
    <div className="px-10 py-2 flex-1 flex justify-between ">
      <div className=" hidden 988px:flex items-start   about-left">
        <img src={career} className="w-full  " alt="" />
      </div>
      <div className="flex-1 flex flex-col text-[#EA4343]  justify-around py-4  px-8 items-start ">
        <div className=" text-4xl font-bold ">
          <p className="text-xl font-semibold ">About Me</p>
          <p className=" my-2 text-6xl">
            <span className="text-white mr-3 ">I'm</span>
            <span>Talha Mehmood</span>
          </p>
          <p className="flex flex-col my-4 text-6xl">
            <span className="text-white mt-2">Web</span>
            <span className="text">Developer</span>
          </p>
        </div>
        <div className="  w-full  text-white font-bold text-4xl my-2 ">
          <p className=" ">Based in Lahore,Pakistan</p>
        </div>
        <div className="text-[#B0ACB8] text-[1.1rem] flex-1 justify-between flex flex-col ">
          <ol>
            <li>
              <p>
                I am proficient MERN Stack Developer Graduated from UET Taxila
                in year 2k22. Right after my graduation I have did a Boot Camp
                with Game Train Lahore sponsored by Government of Austria where
                i have acquired all the relevant skills.
              </p>
            </li>
            <li>
              <p>
                Having 1 year of professional experience including 3 months
                internship with The Hexaa, Lahore and job experience of 9 months
                with Newbays, Karachi I am now expanding my skill set and
                currently learning Next.js, MySQL and TypeScript.
              </p>
            </li>
            <li>
              {" "}
              <p>
                As far as my future endeavors are concern, I will look towards
                adding MEAN Stack in my skill and will further explore Data
                Science{" "}
                {
                  "(Python,Machine Learning, Tableau, Matplotlib, PowerBi, NumPy, Pandas )"
                }
                for complete Data Engineer
              </p>
            </li>
          </ol>
        </div>
        <div className="mt-1">
          <Button
            style={
              "border-[#EA4343] text-white bg-[#EA4343] hover:bg-transparent"
            }
            text={"Download CV "}
            icon={"fa-file-arrow-down"}
          />
        </div>
      </div>
      <div className=" hidden 988px:flex  h-full items-end  about-right">
        <img src={career2} className="w-full  rounded-md " alt="" />
      </div>
    </div>
  );
};

export default About;
