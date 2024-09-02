import { CaretRight } from "phosphor-react";
import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setAccordionOpen((current) => !current)}
        className="flex items-center gap-1 cursor-pointer mt-10"
      >
        <CaretRight
          size={12}
          className={`${
            accordionOpen ? "rotate-90" : ""
          } transition-transform duration-300 text-[#E18E2A]`}
          weight="bold"
        />
        <p className="text-[20px] font-medium text-[#571C0E]">{question}</p>
      </div>
      <div
        className={`font-opensans text-[16px] pl-6 ${
          accordionOpen ? "" : "hidden"
        } mt-4`}
      >
        {answer}
      </div>
    </>
  );
};

export default Accordion;
