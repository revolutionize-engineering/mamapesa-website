import React, { useState } from "react";
import mamapesalogo from "../assets/mamapesalogo.png";
import { List, X } from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="relative">
      <div
        className="fixed top-0 z-40 w-full h-[4rem] flex items-center justify-between px-[1rem]  md:px-[5rem] border-t-[1px]
      border-gray-300 border-b-[1px] bg-white "
      >
        <NavLink to="/">
          <div className=" w-[8rem] h-fit">
            <img
              src={mamapesalogo}
              alt="mamapesa logo"
              className="w-full h-full"
            />
          </div>
        </NavLink>
        {/* menu bar to toggle the navbar */}
        <button
          onClick={() => setNavBarOpen((current) => !current)}
          className={`border-[1px] border-gray-400 p-[0.2rem] hover:bg-gray-200 rounded-lg
           md:hidden ${pathname === "/mamapesa-ai" ? "hidden" : ""}`}
        >
          <List size={25} className={`${navBarOpen ? "hidden" : ""}`} />
          <X size={25} className={`${navBarOpen ? "" : "hidden"}`} />
        </button>
        {/* for desktop */}
        <div
          className={`uppercase gap-10 hidden items-center font-semibold ${
            pathname === "/mamapesa-ai" ? "hidden" : "md:flex"
          }`}
        >
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
          <a href="#getapp" onClick={() => setNavBarOpen(false)}>
            <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100 py-2 px-3">
              Get app
            </p>
          </a>
          <a href="#faqs" onClick={() => setNavBarOpen(false)}>
            <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100 py-2 px-3">
              FAQs
            </p>
          </a>
          <a href="/mamapesa-ai" onClick={() => setNavBarOpen(false)}>
            <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100 py-2 px-3">
              MamaPesa AI
            </p>
        </a>
        </div>
      </div>
      {/* for mobile */}
      <div
        className={`fixed top-[4.0rem] z-30 bg-white w-full h-[12rem] pt-4 ${
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
        <a href="#getapp" onClick={() => setNavBarOpen(false)}>
          <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100 py-2 px-3">
            Get app
          </p>
        </a>
        <a href="#faqs" onClick={() => setNavBarOpen(false)}>
          <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100 py-2 px-3">
            FAQs
          </p>
        </a>
        <a href="/mamapesa-ai" onClick={() => setNavBarOpen(false)}>
            <p className="hover:text-gray-500 cursor-pointer transition-colors duration-300 hover:bg-gray-100 py-2 px-3">
              MamaPesa AI
            </p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
