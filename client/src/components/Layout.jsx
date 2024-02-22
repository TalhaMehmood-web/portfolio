import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex min-h-[calc(100vh-82px)] w-full bg-[#0000003f]">
        {<Outlet />}
      </div>
    </div>
  );
};

export default Layout;
