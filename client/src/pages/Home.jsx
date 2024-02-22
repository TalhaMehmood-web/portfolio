import React, { useState } from "react";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import Typer from "../components/TypeAnimation";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const textArray = [
    " Full Stack Developer",
    2000,
    "MERN Stack Developer",
    1000,
    "Skills : React Js",
    2000,
    "Skills : React Redux",
    1300,
    "Skills : React Query",
    1300,
    "Skills : Responsive Designs",
    1300,
    "Skills : Node Js",
    1300,
    "Skills : Express Js",
    1300,
    "Skills : MongoDb",
    1300,
    "Skills : Tailwind CSS",
    1300,
    "Skills : JavaScript",
    1300,
    "Skills : Version Control Git",
    1300,
  ];

  return (
    <>
      <div className="  988px:grid 988px:grid-cols-3  flex flex-1 px-10 py-4 flex-col justify-between h-[80vh] 988px:h-full   ">
        <div className="flex flex-col justify-between h-full    988px:col-span-2 ">
          <div className=" text-[2.6rem]  630px:text-6xl 988px:text-6xl  flex flex-1 justify-around flex-col   font-semibold ">
            <p>Hello I,m</p>
            <p className="text-[#EA4343] text  988px:text-8xl">Talha Mehmood</p>
            <Typer textArray={textArray} />
          </div>
          <div>
            <Button
              style={
                "border-[#EA4343] text-white bg-[#EA4343] hover:bg-transparent"
              }
              text={"Say Hello"}
              icon={"fa-envelope"}
              handleClick={() => navigate("/contact")}
            />
          </div>
          <div className="mt-6">
            <p>talhamehmood991@gmail.com</p>
          </div>
        </div>
        <div className=" hidden border-rose-500/20  988px:flex  flex-1 items-center mover-another-x infinite-move-in-X  another-before before   ">
          <img
            className="w-full object-cover rounded-xl   "
            src={`${image}`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
// hover:translate-x-20 transition-all duration-500 ease-in-out
export default Home;
