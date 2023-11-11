import React from "react";

const Button = ({ text, icon, fill, styles }) => {
  return (
    <button
      className={`${
        fill ? "text-white bg-[#008b8b]" : "bg-transparent text-black"
      } py-[10px] px-[15px] transition-all duration-300 rounded-xl text-[16px] flex items-center gap-x-2 border-2 border-secondary`}
    >
      <span>{text}</span>
      <span className="font-medium text-[18px]">{icon}</span>
    </button>
  );
};

export default Button;
