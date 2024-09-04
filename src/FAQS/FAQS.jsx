import { CaretRight } from "phosphor-react";
import React from "react";
import Accordion from "./components/Accordion";

const FAQS = () => {
  return (
    <div className="py-[6rem] bg-[rgba(225,142,42,0.1)] md:grid grid-cols-[0.5fr,1fr] flex flex-col">
      <div className="px-[1rem] md:px-[5rem] font-montserrat">
        <h1 className="text-[24px] md:text-[32px] text-left  font-semibold   ">
          MamaPesa - Your Questions Answered
        </h1>
        <p className={` text-[16px] mt-4 text-left`}>
          Curious about MamaPesa? Explore our frequently asked questions to find
          answers to common queries. If you can&apos;t find what you&apos;re
          looking for, feel free to reach out to us directly.
        </p>
        <a href="#contactus">
          <button
            className="px-5 py-3 rounded-3xl bg-[#E18E2A] hover:bg-[#c7771f]
          font-semibold text-white transition-colors duration-300 mt-8 w-full md:w-fit"
          >
            Contact us
          </button>
        </a>
      </div>
      <div className="mt-8 md:mt-0">
        <div className="w-full flex justify-center font-montserrat h-full ">
          <div className=" w-[90%] h-full flex flex-col ">
            <Accordion
              question="How does MamaPesa empower women financially?"
              answer="MamaPesa facilitates financial empowerment for women by providing access
             to tailored financial services, including financing options for income-generating
              assets, utility management, and a wealth of educational content aimed at fostering
               financial literacy and independence."
            />
            <Accordion
              question="Is my financial information secure with MamaPesa?"
              answer="Absolutely. We prioritize the security and confidentiality of your
             financial information. Our app employs advanced encryption technologies and follows
              industry best practices to ensure the protection of your sensitive data."
            />
            <Accordion
              question="What types of income-generating assets can be financed through the app?"
              answer="MamaPesa supports the financing of a diverse range of income-generating assets,
             such as small business ventures, education-related expenses, and career development initiatives."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
