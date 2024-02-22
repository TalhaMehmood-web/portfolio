import React, { useState } from "react";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import Typer from "../components/TypeAnimation";

const Home = () => {
  const navigate = useNavigate();

  const textArray = [
    " Full Stack Developer",
    1000,
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
      <div className=" min-h-[calc(100vh-82px)] bg-[#0000003f] 988px:px-10 py-3 px-3 ">
        <div className="988px:grid 988px:grid-cols-3  flex flex-col justify-between h-[80vh] 988px:h-full   ">
          <div className="flex flex-col justify-between h-full    988px:col-span-2 ">
            <div className=" text-[2.6rem]  630px:text-6xl 988px:text-6xl  flex flex-1 justify-around flex-col   font-semibold ">
              <p>Hello I,m</p>
              <p className="text-[#EA4343] text  988px:text-8xl">
                Talha Mehmood
              </p>
              <Typer textArray={textArray} />
            </div>
            <div>
              <button
                onClick={() => navigate("/contact")}
                className="border-2 flex items-center transition-all duration-300 ease-linear text-xl font-semibold border-[#ec4747] rounded-md px-3 py-2 hover:bg-transparent bg-[#EA4343] "
              >
                <p>Say Hello</p>
                <i class="fa-solid fa-envelope ml-2"></i>
              </button>
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
      </div>
    </>
  );
};
// hover:translate-x-20 transition-all duration-500 ease-in-out
export default Home;
