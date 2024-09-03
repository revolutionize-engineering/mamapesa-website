import React, { useState } from "react";

const FeedBackInput = ({ title, placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <div
      className={`${
        title === "Description" ? "mt-7" : ""
      } bg-[#FFE4E1] w-full p-3 rounded-lg`}
    >
      <p className="text-[15px] font-semibold">{title}</p>
      {title === "Description" && (
        <textarea
          rows={6}
          className="w-full bg-transparent outline-none mt-1 text-[16px] text-myGray"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder={placeholder}
          required
        ></textarea>
      )}
      {title !== "Description" && (
        <input
          className="w-full bg-transparent outline-none mt-1 text-[16px] text-myGray"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default FeedBackInput;
