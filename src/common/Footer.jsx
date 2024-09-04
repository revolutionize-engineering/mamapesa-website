import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import React from "react";
import smallLogo from "../assets/smallLogo.png";

const Footer = () => {
  return (
    <div className="px-[2rem] md:px-[4.5rem]">
      <div className="flex flex-col md:flex-row items-center py-[2rem] md:py-0 gap-3 md:gap-0 justify-between px-[1rem] md:px-[5rem]  border-b-[1px] border-b-[#571C0E]">
        <div className="w-[5.3rem] md:w-[5rem]">
          <img
            src={smallLogo}
            alt="small Mamapesa logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex gap-4 items-center">
          <FacebookLogo
            size={22}
            weight="fill"
            className="cursor-pointer hover:text-[#E18E2A] transition-colors duration-300"
          />
          <TwitterLogo
            size={22}
            weight="fill"
            className="cursor-pointer hover:text-[#E18E2A] transition-colors duration-300"
          />
          <LinkedinLogo
            size={22}
            weight="fill"
            className="cursor-pointer hover:text-[#E18E2A] transition-colors duration-300"
          />
          <InstagramLogo
            size={22}
            weight="fill"
            className="cursor-pointer hover:text-[#E18E2A] transition-colors duration-300"
          />
        </div>
      </div>
      <div className="py-[1rem] text-[14px] pb-[2rem] flex flex-col items-center justify-center">
        <h1 className="mt-5">© 2024 MamaPesa. All rights reserved.</h1>
        <div className="flex gap-3 mt-5">
          <a
            href=""
            className="underline hover:text-blue-500 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href=""
            className="underline hover:text-blue-500 transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// #000000 (Black)
// #571C0E (Dark Brown)
// #E18E2A (Orange)
