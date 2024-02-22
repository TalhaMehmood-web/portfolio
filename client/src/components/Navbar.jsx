import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const routeName = location.pathname;
  const navigators = [
    {
      text: "Home",
      route: "/",
    },
    {
      text: "About",
      route: "/about",
    },
    {
      text: "Skills",
      route: "/skills",
    },
    {
      text: "Services",
      route: "/services",
    },
    {
      text: "Contact",
      route: "/contact",
    },
  ];

  const [activeLink, setActiveLink] = useState("/");
  const [expand, setExpand] = useState(false);

  const handleNavLinkClick = (clickedRoute) => {
    if (clickedRoute === routeName) {
      setActiveLink(clickedRoute);
    }
  };
  useEffect(() => {
    setActiveLink(routeName);
  }, [routeName]);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div className="grid grid-cols-3 h-[82px] relative 988px:static bg-white 988px:bg-transparent 988px:grid-cols-4 justify-between px-5   988px:justify-around items-center border-y py-4 988px:py-0  border-y-[#ea434325]">
      <div className="col-span-2 flex 988px:justify-center text-2xl 988px:text-3xl font-semibold 988px:text-white text-[#EA4343]  ">
        <p className="text-[#EA4343] shadow-rose-500">
          <span className="text-black 988px:text-white">Talha</span>
          <span className="ml-3 drop-shadow-2xl">Mehmood</span>
        </p>
      </div>
      <div className="  hidden  988px:col-span-2 988px:flex justify-around text-lg font-semibold">
        {navigators?.map((item, index, array) => (
          <div
            key={index}
            className="   border border-transparent hover:border-[#b95353b0] hover:bg-[#b95353b0] transition-all duration-300 ease-in rounded-full w-[5rem] h-[5rem] flex justify-center items-center"
          >
            <NavLink
              to={item.route}
              onClick={() => handleNavLinkClick(item.route)}
              className={`cursor-pointer hover:text-[#EA4343]  rounded-full   ${
                activeLink === item.route ? "text-[#EA4343]" : ""
              }  `}
              key={index}
            >
              {item.text}
            </NavLink>
          </div>
        ))}
      </div>
      <div onClick={handleExpand} className="988px:hidden  flex justify-end">
        <i
          className={`fa-solid ${
            expand ? "fa-xmark" : "fa-bars"
          } text-2xl text-[#EA4343]`}
        ></i>
      </div>
      <div
        className={`absolute  flex flex-col justify-around px-4 988px:hidden top-[4rem] bg-slate-100 shadow-lg w-full ${
          expand ? "h-[12rem] " : "h-[0rem]"
        }  transition-all duration-300 ease-out `}
      >
        {navigators.map((item, index) => (
          <NavLink
            key={index}
            to={item.route}
            onClick={() => handleNavLinkClick(index)}
            className={`transition-all duration-700 ease-in-out ${
              expand ? "block " : "hidden"
            }  cursor-pointer hover:text-[#EA4343]  rounded-full   ${
              activeLink === item.route ? "text-[#EA4343]" : "text-black"
            }  `}
          >
            {item.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
