import { ArrowUp } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./components/ChatBubble";
import instance from "../axios/instance";

const Chatbot = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleMakePrompt = async (e) => {
    e.preventDefault();
    setMessages((current) => [
      ...current,
      { message: userPrompt, type: "user" },
    ]);

    try {
      const response = await instance.post("accounts/chat/", {
        query: userPrompt,
      });
      setMessages((current) => [
        ...current,
        { message: response.data, type: "bot" },
      ]);
    } catch (err) {
      alert("An error occurred", err);
    }
  };

  return (
    <div className="pt-[4rem] w-full h-screen overflow-hidden">
      <div className="md:w-[80%] h-full mx-auto flex flex-col ">
        {/* upper div with the chat messages */}
        <div className="w-full h-full overflow-y-scroll overflow-x-hidden scrollbleChat px-[1rem] md:px-[12rem]">
          {messages &&
            messages.map((message, index) => {
              return (
                <ChatBubble
                  key={index}
                  type={message.type}
                  message={message.message}
                />
              );
            })}
          {/* <ChatBubble type="user" /> */}
          {/* Dummy div to scroll to */}
          <div ref={bottomRef} />
        </div>
        {/* the bottom section for USER INPUT */}
        <div className=" w-full h-[6rem] flex items-center ">
          <form
            onSubmit={handleMakePrompt}
            className="h-[3rem] w-[96%] md:w-[80%] mx-auto relative"
          >
            <input
              type="text"
              className="bg-gray-100 pl-10 w-full h-full rounded-3xl outline-none"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              placeholder="Message Mamapesa AI..."
            />
            {/* send button */}
            <button
              className={`size-[2rem] rounded-full absolute right-2 top-1/2 -translate-y-1/2 
            grid place-items-center text-white ${
              userPrompt === "" ? "bg-gray-300" : "bg-[#E18E2A]"
            }`}
              disabled={userPrompt === ""}
            >
              <ArrowUp size={23} weight="bold" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
