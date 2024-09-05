import React from "react";
import { VscSend } from "react-icons/vsc";
import ContactMeDetail from "./components/ContactMeDetail";
import FeedBackInput from "./components/FeedBackInput";

const ContactUs = () => {
  return (
    <>
      <p id="contactus" className=""></p>
      <div className="w-full mt-[5rem] md:mt-[8rem]">
        <div className="w-[85%] md:w-[58%] pb-[8rem] mx-auto ">
          <h1 className="text-[25px] md:text-[32px] font-montserrat font-semibold text-center text-[#571C0E]">
            Contact us
          </h1>
          <h1 className="text-center text-[16px] text-[#571C0E]">
            Get in touch
          </h1>
          <div className="md:flex justify-between gap-10 mt-[2rem] md:mt-[5rem] overflow-x-hidden">
            {/* left start */}
            <div className="mb-[4rem] w-[full]">
              <ContactMeDetail title="Phone" detail="(+254) 123456789" />
              <ContactMeDetail
                title="E-mail"
                detail="dukatechsolutions@gmail.com"
              />
              <ContactMeDetail title="Location" detail="Nairobi, Kenya" />
            </div>
            {/* left end */}
            {/* right start */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className=" w-full overflow-x-hidden"
            >
              <div className="w-full flex flex-col md:flex-row gap-6 mb-7">
                <FeedBackInput title="Name" placeholder="Name" />
                <FeedBackInput title="Email" placeholder="Your Email Address" />
              </div>
              <FeedBackInput title="Subject" placeholder="Subject" />
              <FeedBackInput title="Description" placeholder="Message" />
              <button
                className="mt-12 text-[14px] md:text-[15px] px-5 py-5 rounded-lg bg-[#E18E2A] hover:bg-[#c7771f]
              transition-colors duration-300 text-white flex items-center font-button gap-2"
              >
                <span>Send message</span>
                <span className="text-[16px] md:text-[18px]">
                  <VscSend />
                </span>
              </button>
            </form>
            {/* right end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
