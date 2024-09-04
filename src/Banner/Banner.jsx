import React from "react";

const EmpowerWomen = ({ image, title, desc }) => {
  return (
    <div className="h-[86vh] flex flex-col md:flex-row px-[1rem] md:px-[4.2rem] md:mb-[8rem] mt-[5rem] md:mt-0">
      <div className="h-full md:w-[90%] overflow-hidden rounded-lg md:rounded-none">
        <img src={image} alt="woman" className="w-full h-full" />
      </div>
      <div className="h-full w-full ">
        <div className="h-full w-full md:px-[5rem] flex flex-col md:justify-center mt-[2rem] md:mt-0">
          <h1 className="text-[24px] md:text-[35px] font-montserrat text-left font-semibold">
            {title}
          </h1>
          <p className="text-[18px] mt-5 md:mt-4 text-left">{desc}</p>
          <button
            className="px-5 py-3 rounded-3xl border-[1px] text-[#E18E2A] border-[#E18E2A] hover:bg-gray-200
          font-semibold transition-colors duration-300 mt-10 w-fit"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmpowerWomen;
