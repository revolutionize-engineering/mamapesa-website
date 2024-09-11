import React from "react";
import { CheckCircle } from "@phosphor-icons/react";
import ImageHero from "../assets/ImageHero.jpg";

const Hero = () => {
  return (
    /*Background Image*/
    <div className="relative w-full min-h-[43rem] md:min-h-96 h-full overflow-hidden">
      <img
        src={ImageHero}
        alt="Background"
        className=" hidden lg:block w-full min-h-[43rem] md:min-h-96 md:object-cover object-center"
      />

      <main
        className="absolute top-0 bottom-0 md:top-[8rem] md:bottom-auto md:left-[5rem]
         flex flex-col lg:flex-row items-center lg:justify-between
       mt-10 p-6 bg-opacity-60 md:bg-opacity-70 bg-white shadow-[0px_0px_8px_rgba(0,0,0,0.3)]
        md:rounded-lg w-full md:max-w-[40rem]"
      >
        <div className="flex flex-col items-center w-full">
          <h1 className="text-[24px] mt-[5.1rem] md:mt-0 md:text-4xl font-montserrat font-semibold mb-6">
            Unlocking Financial Inclusion For Women in Africa{" "}
          </h1>
          <ul className="list-none space-y-2 md:space-y-6">
            <li className="flex">
              <div>
                <CheckCircle size={32} className="mr-2 fill-green-500" />
              </div>
              <span className="font-semibold text-lg">
                Pay once, get expert financial advice with MamaPesa AI
              </span>
            </li>

            <li className="flex items-center">
              <CheckCircle size={32} className="mr-2 fill-green-500" />
              <span className="font-semibold text-lg">
                Loans at 0% interest rate
              </span>
            </li>

            <li className="flex items-center">
              <CheckCircle size={32} className="mr-2 fill-green-500" />
              <span className="font-semibold text-lg">
                Goal oriented asset savings{" "}
              </span>
            </li>

            <li className="flex items-center">
              <CheckCircle size={32} className="mr-2 fill-green-500" />
              <span className="font-semibold text-lg">Group savings </span>
            </li>

            <li className="flex items-center">
              <CheckCircle size={32} className="mr-2 fill-green-500" />
              <span className="font-semibold text-lg">
                Additional services{" "}
              </span>
            </li>
          </ul>
          <div className="w-full flex justify-center">
            <a href="#getapp">
              <button
                className=" font-semibold text-white py-4 px-12 my-6 rounded-xl
              hover:bg-[#7a2713] bg-[#571C0E] transition-colors duration-300"
              >
                Get our app
              </button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
