import React from "react";
import Heading from "./Heading";
import SubHeading from "./ui/SubHeading";
import { BiSolidUserCheck } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "./ui/Button";

const data = [
  {
    icon: <BiSolidUserCheck />,
    title: "Expertise in React/Next.js",
    desc: "I have a proven track record of successfully developing dynamic and responsive web applications using React and Next.js",
  },
  {
    icon: <AiOutlineCheckCircle />,
    title: "Results-Driven Approach",
    desc: " Dedicated to delivering projects on time and within budget. Providing innovative solutions tailored to your specific needs.",
  },
  {
    icon: <AiOutlineCheckCircle />,
    title: "Great Communication",
    desc: "Open and transparent communication to keep you informed at every stage of the project",
  },
  {
    icon: <AiOutlineCheckCircle />,
    title: "Feedback Integration",
    desc: "Actively seek and integrate client feedback, fostering a continuous improvement mindset.",
  },
];

const ChooseMe = () => {
  return (
    <section className="text-black font-primary">
      <div className="flex items-center flex-col gap-6 lg:flex-row justify-center">
        <article className="w-full lg:w-2/5 text-center lg:text-left font-primary flex flex-col justify-start lg:items-start items-center gap-y-4">
          <SubHeading text="Why Choose Me?" />
          <Heading text="Why Hire Me For Your Next Project?" />
          <p className="text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            debitis nam nesciunt praesentium expedita, commodi non voluptas,
            accusamus reiciendis dolor quibusdam, fugiat error tempora qui harum
            ea natus soluta nemo.
          </p>
          <Button text="Hire Me" fill={true} />
        </article>
        <div className="w-full lg:w-3/5 flex items-center justify-center flex-col lg:flex-row flex-wrap gap-10">
          {data.map((d, index) => (
            <div
              key={index}
              className=" lg:w-2/5 flex flex-col justify-center gap-y-2 shadow-lg h-[200px] p-4 rounded-lg"
            >
              <span className="text-[30px] font-bold text-[#008b8b]">
                {d.icon}
              </span>
              <span className="font-bold">{d.title}</span>
              <span className="text-[14px]">{d.desc}</span>
            </div>
          ))}
          {/* <p className="w-2/5 flex flex-col gap-y-2">
            <span>
              <GrCloudComputer className="text-[30px] text-[#008b8b]" />
            </span>
            <span className="font-bold">Expertise in React/Next.js</span>
            <span>
              I have a proven track record of successfully developing dynamic
              and responsive web applications using React and Next.js
            </span>
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ChooseMe;
