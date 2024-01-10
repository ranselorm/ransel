import Heading from "./Heading";
import SubHeading from "./ui/SubHeading";
// import { BsArrowRight } from "react-icons/bs";

import { services } from "@/data";

const Services = () => {
  return (
    <section className="py-[50px] text-black font-main flex flex-col items-center justify-center lg:px-[150px] px-4">
      <article className="flex flex-col items-center mb-20 bg-red-300 w-full h-[300px] bg-banner bg-center bg-cover relative rounded-xl overflow-hidden">
        <div className="z-10 text-white flex flex-col items-center justify-center   mt-[90px] md:mt-10 px-2">
          <SubHeading text="Services List" />
          <Heading text="Crafting innovative solutions for you" />
        </div>
        <div className="bg-black absolute inset-0 bg-opacity-75 z-2" />
      </article>
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center gap-y-[70px] lg:gap-6 lg:-mt-[150px]">
        {services.map((service, index) => (
          <div
            className="relative lg:w-[230px] h-[240px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 px-4 pt-8"
            key={index}
          >
            <h4 className="font-bold text-[18px]">{service.title}</h4>
            <p className="text-[14px]">{service.desc}</p>
            {/* <p className="p-3 bg-gray-300 rounded-full">
            <BsArrowRight className="" />
          </p> */}
            <div className="bg-[#008b8b] absolute top-0 p-5 rounded-full -mt-[30px] shadow-lg text-white">
              {service.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
