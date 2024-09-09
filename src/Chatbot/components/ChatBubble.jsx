import React from "react";
import mamaPesaLogo from "../../assets/smallLogo.png";

const ChatBubble = ({ type }) => {
  return (
    <div
      className={` w-full flex ${type === "user" ? "justify-end w-full" : ""} `}
    >
      <div
        className={`flex gap-4 my-[1rem] ${
          type === "user" ? "w-[85%] p-[1rem]" : ""
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
            To scroll a div to the bottom in your React app, you can use the
            useRef hook to get a reference to the div and then use the
            scrollIntoView method to scroll to the bottom. Here's a simple
            implementation:
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
