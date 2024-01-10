import React from "react";

const Button = ({ text, icon, fill, styles }) => {
  return (
    <button
      className={`${
        fill ? "text-white bg-[#008b8b]" : "bg-transparent text-black"
      } py-[5px] px-[17px] transition-all duration-300 rounded-md text-[16px] flex items-center justify-center border-2 border-[#008b8b]`}
    >
      <span>{text}</span>
      {icon && <span className="font-medium text-[18px]">{icon}</span>}
    </button>
  );
};

export default Button;
