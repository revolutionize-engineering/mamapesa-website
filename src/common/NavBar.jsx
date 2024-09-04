import React, { useState } from "react";
import mamapesalogo from "../assets/mamapesalogo.png";
import { List, X } from "phosphor-react";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className="fixed top-0 z-40 w-full h-[4rem] flex items-center justify-between px-[1rem]  md:px-[5rem] border-t-[1px]
      border-gray-300 border-b-[1px] bg-white "
      >
        <div className=" w-[8rem] h-fit">
          <img
            src={mamapesalogo}
            alt="mamapesa logo"
            className="w-full h-full"
          />
        </div>
        {/* menu bar to toggle the navbar */}
        <button
          onClick={() => setNavBarOpen((current) => !current)}
          className="border-[1px] border-gray-400 p-[0.2rem] hover:bg-gray-200 rounded-lg md:hidden"
        >
          <List size={25} className={`${navBarOpen ? "hidden" : ""}`} />
          <X size={25} className={`${navBarOpen ? "" : "hidden"}`} />
        </button>
        {/* for desktop */}
        <div className="uppercase gap-10 hidden md:flex font-semibold">
          <a href="#features">
            <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300">
              Features
            </p>
          </a>
          <a href="#contactus">
            <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300">
              Contact us
            </p>
          </a>
        </div>
      </div>
      {/* for mobile */}
      <div
        className={`fixed top-[3.4rem] z-30 bg-white w-full h-[5rem] ${
          navBarOpen ? "" : "-translate-y-full"
        } transition-transform duration-500 px-1 text-sm font-medium`}
      >
        <a href="#features" onClick={() => setNavBarOpen(false)}>
          <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100 py-2 px-3">
            Features
          </p>
        </a>
        <a href="#contactus" onClick={() => setNavBarOpen(false)}>
          <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100 py-2 px-3">
            Contact us
          </p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
