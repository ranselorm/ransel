import React from "react";
import { PiHandFistLight } from "react-icons/pi";

const Connect = () => {
  return (
    <section className="px-[150px]">
      <div className="bg-[#002244] px-4 h-[150px] mb-[200px] flex items-center justify-center text-white font-main rounded-lg">
        <div className="flex items-center justify-between gap-x-8">
          <div className="text-[25px] font-bold capitalize">
            Start a project
          </div>
          <div className="w-5/12 text-center">
            Looking to collaborate? Let's schedule a chat. I'll bring the tea,
            you bring the ideas!
          </div>
          <div>
            <button className="bg-primary px-2 py-1 rounded text-white flex items-center gap-1">
              <PiHandFistLight />
              <span className="text-[14px]">Let's do this</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
