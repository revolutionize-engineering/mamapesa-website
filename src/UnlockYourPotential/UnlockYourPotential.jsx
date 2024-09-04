import React from "react";
import Wallet from "../assets/Wallet.png";
import ProtectFuture from "../assets/ProtectFuture.png";
import EmpowerYourself from "../assets/EmpowerYourself.png";

const UnlockYourPotential = () => {
  return (
    <div className="mb-[7rem] mt-[2rem]">
      <h1 className="text-[24px] md:text-[40px] font-montserrat text-center font-semibold">
        Unlock Your Potential Today
      </h1>
      <p className="md:text-[18px] mt-5 md:mt-4 text-center">
        Secure funding for income-generating ventures
      </p>
      <div className="w-full mt-[5rem]">
        <div className="flex flex-col md:flex-row md:h-[97vh] justify-between w-[92%] md:w-[85%] gap-8 mx-auto ">
          <div className="border-[1px] border-[#571C0E] h-full w-full flex flex-col justify-between">
            <div>
              <img src={Wallet} alt="wallet" className="w-full h-full" />
            </div>
            <div className="w-full h-full">
              <div className="h-full w-full md:px-[4rem] flex flex-col md:justify-center mt-[2rem] md:mt-0 px-[1.2rem]">
                <h1 className="text-[20px] md:text-[35px] font-montserrat text-left font-semibold">
                  Empowering Women&apos;s Financial Independence
                </h1>
                <p className="text-[16px] mt-5 md:mt-4 text-left">
                  MamaPesa offers microloans to women, helping them finance
                  income-generating assets and achieve economic independence.
                </p>
                <button
                  className="px-5 py-3 rounded-3xl border-[1px] text-[#E18E2A] border-[#E18E2A] hover:bg-gray-200
          font-semibold transition-colors duration-300 my-[2rem] md:mt-10 w-fit"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className=" md:h-[97vh] w-full flex flex-col justify-between gap-8">
            {/* upper block */}
            <div className="h-[16rem] md:h-[20rem] w-full border-[1px] border-[#571C0E] flex md:flex-1">
              {/* left part with image */}
              <div className=" h-full w-[50%] flex-1">
                <img
                  src={ProtectFuture}
                  alt="protect your future"
                  className="w-full h-full"
                />
              </div>
              {/* right part */}
              <div className=" h-full w-[50%] ">
                <div className="h-full w-full md:px-[1.2rem] flex flex-col justify-center md:mt-0 px-[1rem]">
                  <h1 className="text-[16px] md:text-2xl font-montserrat text-left font-semibold">
                    Protect Your Future
                  </h1>
                  <p className="text-[16px] mt-1 md:mt-4 text-left">
                    Safeguard against unexpected events with our comprehensive
                    insurance options. Get covered today!
                  </p>
                </div>
              </div>
            </div>

            {/* lower block */}
            <div className="h-[16rem] w-full border-[1px] border-[#571C0E] flex md:flex-1">
              {/* left part with image */}
              <div className=" h-full w-[50%] flex-1">
                <img
                  src={EmpowerYourself}
                  alt="protect your future"
                  className="w-full h-full"
                />
              </div>
              {/* right part */}
              <div className=" h-full w-[50%] ">
                <div className="h-full w-full md:px-[1.2rem] flex flex-col justify-center md:mt-0 px-[1rem]">
                  <h1 className="text-[16px] md:text-2xl font-montserrat text-left font-semibold">
                    Empower Yourself Financially
                  </h1>
                  <p className="text-[16px] mt-1 md:mt-4 text-left">
                    Gain the skills and knowledge you need to make smart
                    financial decisions. Enroll in our courses now!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockYourPotential;
