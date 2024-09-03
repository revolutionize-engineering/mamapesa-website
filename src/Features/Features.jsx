import React from "react";
import FeatureCard from "./components/FeatureCard";
import mamapesaChatbot from "../assets/mamapesaChatbot.png";
import GoalOrientedSavings from "../assets/GoalOrientedSavings.png";
import groupSavings from "../assets/groupSavings.png";
import interest from "../assets/interest.png";
import airtimePurchase from "../assets/airtimePurchase.png";

const Features = ({ imagePos }) => {
  return (
    <div className=" mx-auto py-8">
      <h1 className="text-4xl font-semibold px-[4.5rem]">Mamapesa Features</h1>
      <div>
        {/* card */}
        <FeatureCard
          content={
            <p className="text-3xl font-semibold font-opensans ">
              Personalized <span className="text-[#E18E2A]">Financial</span>{" "}
              <span className="text-[#571C0E]">Guidance</span> using Mamapesa
              chatbot
            </p>
          }
          image={mamapesaChatbot}
          imagePos="right"
        />
        <FeatureCard
          content={
            <p className="text-3xl font-semibold font-opensans ">
              Business <span className="text-[#E18E2A]">asset savings</span>{" "}
              tailored to your <span className="text-[#571C0E]">goals</span>
            </p>
          }
          image={GoalOrientedSavings}
          imagePos="right"
          type="interest"
        />
        <FeatureCard
          content={
            <p className="text-3xl font-semibold font-opensans ">
              Get <span className="text-[#E18E2A]">interest-free</span>{" "}
              <span className="text-[#571C0E]">loans</span> with Mamapesa
            </p>
          }
          image={interest}
          imagePos="right"
          // reason: image was bigger than the rest so I introduced this to help
          type="interest"
        />
        <FeatureCard
          content={
            <p className="text-3xl font-semibold font-opensans ">
              <span className="text-[#E18E2A]">Group savings</span> for a common
              <span className="text-[#571C0E]"> goal</span> or asset
            </p>
          }
          image={groupSavings}
          imagePos="right"
          type="interest"
        />
        <FeatureCard
          content={
            <p className="text-3xl font-semibold font-opensans ">
              {" "}
              Convenient
              <span className="text-[#571C0E]"> extra services</span> like
              in-app <span className="text-[#E18E2A]">airtime purchases</span>
            </p>
          }
          image={airtimePurchase}
          imagePos="right"
          type="interest"
        />
      </div>
    </div>
  );
};

export default Features;
