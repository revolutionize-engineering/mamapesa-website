import React from "react";
import mamapesalogo from "../assets/mamapesalogo.png";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full h-[4rem] flex items-center justify-between px-[5rem] border-t-[1px] border-gray-300 border-b-[1px]  ">
      <div className="w-[11rem] h-fit">
        <img src={mamapesalogo} alt="mamapesa logo" className="w-full h-full" />
      </div>
      <div className="flex uppercase gap-10 font-semibold">
        <p className="hover:text-gray-400 cursor-pointer transition-colors duration-300">
          Services
        </p>
        <p className="hover:text-gray-400 cursor-pointer transition-colors duration-300">
          About us
        </p>
      </div>
    </div>
  );
};

export default NavBar;
