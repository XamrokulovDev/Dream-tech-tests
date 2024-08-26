import React from "react";
// import icons 
import { BsBoxArrowLeft } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import FrontendTest from "../FrontendTest";
import BackendTest from "../BackendTest";

const Admin = () => {
  return (
    <>
      <nav className="bg-black py-4 relative">
        <div className="container flex justify-between items-center">
          <div className=""></div>
          <NavLink to={"/"}>
            <BsBoxArrowLeft className="text-4xl text-white absolute top-[23%] cursor-pointer left-3"/>
          </NavLink>
          <button className="bg-green-500 px-4 py-1 text-white flex items-center rounded-md gap-1"><p className="text-md uppercase font-medium">Qo'shish</p><FaPlus className="text-md text-white"/></button>
        </div>
      </nav>
      <div className="">
        <FrontendTest />
        <BackendTest />
      </div>
    </>
  );
};

export default Admin;