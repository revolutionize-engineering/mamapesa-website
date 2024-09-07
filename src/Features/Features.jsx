import React from "react";
import FeatureCard from "./components/FeatureCard";
import chatbot from "../assets/chatbot.png";

const Features = ({ imagePos }) => {
  return (
    <div className=" mx-auto py-8" id="features-section">
      <h1 className="text-4xl font-semibold px-[4.5rem]">Mamapesa Features</h1>
      <div>
        {/* card */}
        <FeatureCard
          content={
            <p className="text-4xl font-semibold font-opensans ">
              Personalized <span className="text-[#E18E2A]">Financial</span>{" "}
              <span className="text-[#571C0E]">Guidance</span> using Mamapesa
              chatbot
            </p>
          }
          image={chatbot}
          imagePos="right"
        />
        <FeatureCard
          content={
            <p className="text-4xl font-semibold font-opensans ">
              Personalized <span className="text-[#E18E2A]">Financial</span>{" "}
              <span className="text-[#571C0E]">Guidance</span> using Mamapesa
              chatbot
            </p>
          }
          image={chatbot}
          imagePos="right"
        />
        <FeatureCard
          content={
            <p className="text-4xl font-semibold font-opensans ">
              Personalized <span className="text-[#E18E2A]">Financial</span>{" "}
              <span className="text-[#571C0E]">Guidance</span> using Mamapesa
              chatbot
            </p>
          }
          image={chatbot}
          imagePos="right"
        />
      </div>
    </div>
  );
};

export default Features;
