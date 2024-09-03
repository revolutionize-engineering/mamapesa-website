import React from "react";

const FeatureCard = ({ image, imagePos, content }) => {
  return (
    <div className="flex gap-4 mt-5 py-[3.5rem] px-[4.5rem]">
      <div
        className={` w-[40%] flex items-center  ${
          imagePos == "right" ? "order-1" : "order-2"
        }`}
      >
        {content}
      </div>
      <div
        className={` w-[40%] ${imagePos == "right" ? "order-2" : "order-1"}`}
      >
        {/* the image */}
        <div className="w-[38rem] ">
          <img src={image} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
