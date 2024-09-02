import React from "react";
import chatbot from "../assets/chatbot.png";

const Features = () => {
  return (
    <div className="w-[90%] mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-5">Mamapesa Features</h1>
      <div>
        {/* card */}
        <div className="flex justify-">
          <div className=" w-[40%] flex items-center">
            <p className="text-4xl font-semibold font-opensans ">
              Personalized <span className="text-[#E18E2A]">Financial</span>{" "}
              <span className="text-[#571C0E]">Guidance</span> using Mamapesa
              chatbot
            </p>
          </div>
          <div className=" w-full">
            {/* the image */}
            <div className="w-[38rem]">
              <img src={chatbot} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
