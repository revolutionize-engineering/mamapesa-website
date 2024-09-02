import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between px-[5rem] py-[3rem]">
      <h1>© 2024 MamaPesa. All rights reserved.</h1>
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
  );
};

export default Footer;

// #000000 (Black)
// #571C0E (Dark Brown)
// #E18E2A (Orange)
