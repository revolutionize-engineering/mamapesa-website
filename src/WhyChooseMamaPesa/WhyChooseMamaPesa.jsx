import React from "react";
import Block from "./components/Block";
import AIBot from "../assets/AIBot.png";
import savings from "../assets/savings.png";
import interestFree from "../assets/interestFree.png";

const WhyChooseMamaPesa = () => {
  return (
    <>
      <div className="bg-[rgba(225,142,42,0.1)] py-[7rem] px-[1rem]">
        <h1 className="text-[25px] md:text-[32px] font-montserrat font-semibold md:text-center text-[#571C0E]">
          Why choose Mamapesa as your financial app?
        </h1>
        <p className="text-center text-[16px] text-[#571C0E]">
          Offers loans and savings for assets to help grow your business
        </p>
        <div className="md:grid md:grid-cols-3 flex flex-col justify-center gap-8 mx-auto mt-[4.8rem]">
          <Block
            image={AIBot}
            title={" Financial Guidance using AI"}
            desc={
              "Receive tailored advice from our AI to optimize your savings and loan options."
            }
          />
          <Block
            image={savings}
            title={"Goal-Oriented Asset Savings"}
            desc={"Achieve your business goals by saving for essential assets."}
          />
          <Block
            image={interestFree}
            title={"Interest-Free Lending"}
            desc={"Enjoy loans without the burden of interest charges."}
          />
        </div>
      </div>
      <p id="getapp" className=""></p>
    </>
  );
};

export default WhyChooseMamaPesa;
