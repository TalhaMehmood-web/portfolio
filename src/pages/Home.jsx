import React from "react";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="grid grid-cols-3 min-h-[calc(90vh-82px)] px-10 py-3 ">
        <div className="flex flex-col justify-between  col-span-2 ">
          <div className="text-4xl flex flex-1 justify-around flex-col   font-semibold ">
            <p>Hello I,m</p>
            <p className="text-[#EA4343] text-3xl 988px:text-8xl">
              Talha Mehmoo
            </p>
            <p className="text-5xl">Creative Developer</p>
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
        <div className="invisible 988px:visible flex flex-1 items-center before move-in-y    ">
          <img
            className="w-full opacity-[70%]   object-cover rounded-xl before infinite-move-in-X "
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
