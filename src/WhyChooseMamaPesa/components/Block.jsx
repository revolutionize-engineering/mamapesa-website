import React from "react";

const Block = ({ image, title, desc }) => {
  return (
    <div className="  md:w-[22rem] flex flex-col items-center gap-3">
      <div className="w-[7.5rem] h-[5.5rem] bg-transparent">
        <img src={image} alt="title" className="w-full h-full" />
      </div>
      <p className="text-xl font-medium font-montserrat">{title}</p>
      <p className=" font-medium font-montserrat text-center text-[16px]">
        {desc}
      </p>
    </div>
  );
};

export default Block;
