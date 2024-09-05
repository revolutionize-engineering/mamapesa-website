import React from "react";

const Card = ({ svg, title, desc }) => {
  return (
    <div className="p-5 md:p-10 w-full border-[1px] border-[#571C0E]">
      <div>
        <div className="w-[2.5rem]">
          <img src={svg} alt="" className="w-full h-full" />
        </div>
      </div>
      <p className="text-2xl md:text-[22px] mb-5 font-opensans font-semibold">
        {title}
      </p>
      <p className="text-[15px]">{desc}</p>
    </div>
  );
};

export default Card;
