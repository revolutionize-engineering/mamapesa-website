import React from "react";

const FeatureCard = ({ image, imagePos, content, type }) => {
  return (
    <div
      className={`flex flex-col md:flex-row py-[3.5rem] px-[1.4rem] md:px-[4.5rem]   ${
        type == "interest" ? "gap-4 md:gap-[11.5rem]" : "gap-4"
      }`}
    >
      <div
        className={` md:w-[40%] flex items-center  ${
          imagePos == "right" ? "md:order-1" : "md:order-2"
        }`}
      >
        {content}
      </div>
      <div
        className={` md:w-[40%] ${
          imagePos == "right" ? "md:order-2" : "md:order-1"
        }`}
      >
        {/* the image */}
        <div
          className={` ${
            type == "interest"
              ? "w-[13rem] ml-[4.5rem] md:ml-0 md:mt-0 md:w-[25rem]"
              : "w-[18rem] mt-[2rem] md:mt-0 md:w-[38rem] pr-0 md:pr-8"
          } `}
        >
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
