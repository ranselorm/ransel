import React from "react";

const Button = ({ text, icon }) => {
  return (
    <button className="py-1.5 px-2.5 bg-transparent border-2 border-black hover:bg-black hover:text-white transition-all duration-300 rounded-md text-black text-[16px] flex items-center gap-x-2">
      <span>{text}</span>
      <span>{icon}</span>
    </button>
  );
};

export default Button;
