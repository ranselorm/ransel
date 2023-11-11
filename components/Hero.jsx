import React from "react";
import Button from "./ui/Button";
import { AiOutlineSend } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="mt-[20px]">
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <div className="border w-full lg:w-1/2 flex flex-col  items-center lg:items-start justify-center text-center lg:text-left gap-y-6 text-primary font-secondary">
          <h4>
            Hello there<span className="text-xl">&#x1F44B;</span>,
          </h4>
          <h2 className="text-3xl">
            Lorem ipsum dolor, sit amet consectetur
            <span className="ml-2 text-secondary">
              adipisicing elit. Porro, nostrum dolorem.
            </span>
          </h2>
          <p className="text-[16px] lg:w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas
            corrupti aspernatur reprehenderit neque sequi adipisci expedita
            cupiditate aut distinctio consequatur a commodi sunt odio iste
            pariatur et, ut minus?
          </p>
          <div className="flex items-center gap-x-6">
            <Button text="Contact Me" fill={true} icon={<AiOutlineSend />} />
            <Button text="Hire Me" icon={<AiOutlineSend />} />
          </div>
        </div>
        {/* <div className="bg-yellow-300 w-1/2">2</div> */}
      </div>
    </section>
  );
};

export default Hero;
