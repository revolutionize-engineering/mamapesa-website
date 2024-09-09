import React from "react";
import mamaPesaLogo from "../../assets/smallLogo.png";

const ChatBubble = ({ type, message }) => {
  return (
    <div
      className={` w-full flex ${
        type === "user" ? "justify-between w-full" : ""
      } `}
    >
      <div></div>
      <div
        className={`flex gap-4 md:my-[1rem] ${
          type === "user" ? "w-[85%] p-[1rem] justify-end" : ""
        }`}
      >
        <div>
          <div
            className={`size-[2.5rem] rounded-full bg-gray-200 border-[1px] border-gray-300 overflow-hidden ${
              type === "user" ? "hidden" : ""
            }`}
          >
            <img
              src={mamaPesaLogo}
              alt="mamaPesa Logo"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div>
          <p
            className={` ${
              type === "user" ? "bg-gray-100" : ""
            } p-4 rounded-3xl`}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
