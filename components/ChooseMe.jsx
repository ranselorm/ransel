import React from "react";
import Heading from "./Heading";
import SubHeading from "./ui/SubHeading";
import { GrCloudComputer } from "react-icons/gr";

const ChooseMe = () => {
  return (
    <section className="text-black">
      <div className="flex items-center gap-6">
        <article className="w-full lg:w-1/2 text-center lg:text-left font-primary">
          <SubHeading text="Why Choose Me?" />
          <Heading text="Why Hire Me For Your Next Project?" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            debitis nam nesciunt praesentium expedita, commodi non voluptas,
            accusamus reiciendis dolor quibusdam, fugiat error tempora qui harum
            ea natus soluta nemo.
          </p>
        </article>
        <div className="w-full lg:w-1/2 flex items-center flex-wrap justify-between ">
          <p>
            <span>icon</span>
            <span>Heding</span>
            <span>text</span>
          </p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </div>
      </div>
    </section>
  );
};

export default ChooseMe;
