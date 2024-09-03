import React from "react";
import MamapesaMockUp from "../assets/MamapesaMockUp.png";

const DownLoadApp = () => {
  return (
    <>
      <div className="grid grid-cols-2 py-[2.5rem] font-montserrat bg-[#E18E2A] text-white">
        <div className="px-[5rem] pt-[14%]">
          <h1 className="text-4xl font-bold">
            Unlock Financial Freedom with MamaPesa
          </h1>
          <p className="my-8">
            Discover a world of financial possibilities tailored for women at
            MamaPesa. Our app is designed to empower you on your journey to
            financial independence. From financing income-generating assets to
            managing utility services and accessing valuable financial tips,
            we're here to support your goals. Take control of your finances
            today – download MamaPesa and embark on a transformative financial
            journey.
          </p>
          <button
            className="px-10 py-4 rounded-lg bg-[#571C0E] hover:bg-[#7a2713]
         font-semibold text-white transition-colors duration-300"
          >
            Get App
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[20rem]">
            <img
              src={MamapesaMockUp}
              alt="Mamapesa MockUp"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownLoadApp;
