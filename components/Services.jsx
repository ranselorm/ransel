import Heading from "./Heading";
import SubHeading from "./ui/SubHeading";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Services = () => {
  return (
    <section className="lg:-mt-[100px] py-[50px] text-black font-medium font-primary flex flex-col items-center justify-center">
      <article className="flex flex-col items-center mb-20">
        <SubHeading text="Services List" />
        <Heading text="Crafting innovative solutions for you" />
      </article>
      <div className=" w-full flex flex-col lg:flex-row flex-wrap justify-center gap-4">
        <div className="relative lg:w-[260px] h-[280px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 px-4 pt-8">
          <h4 className="font-bold text-[18px]">Landing Page</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            voluptate rerum aut, voluptates doloribus expedita eum{" "}
          </p>
          <p className="p-3 bg-gray-300 rounded-full">
            <BsArrowRight className="" />
          </p>
          <div className="bg-[#008b8b] absolute top-0 p-5 rounded-full -mt-[30px] shadow-lg">
            <HiOutlineDesktopComputer className="text-white" />
          </div>
        </div>
        <div className="relative lg:w-[260px] h-[280px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 px-4 pt-8">
          <h4 className="font-bold text-[18px]">Landing Page</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            voluptate rerum aut, voluptates doloribus expedita eum{" "}
          </p>
          <p className="p-3 bg-gray-300 rounded-full">
            <BsArrowRight className="" />
          </p>
          <div className="bg-[#008b8b] absolute top-0 p-5 rounded-full -mt-[30px] shadow-lg">
            <HiOutlineDesktopComputer className="text-white" />
          </div>
        </div>
        <div className="relative lg:w-[260px] h-[280px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 px-4 pt-8">
          <h4 className="font-bold text-[18px]">Landing Page</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            voluptate rerum aut, voluptates doloribus expedita eum{" "}
          </p>
          <p className="p-3 bg-gray-300 rounded-full">
            <BsArrowRight className="" />
          </p>
          <div className="bg-[#008b8b] absolute top-0 p-5 rounded-full -mt-[30px] shadow-lg">
            <HiOutlineDesktopComputer className="text-white" />
          </div>
        </div>
        <div className="relative lg:w-[260px] h-[280px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 px-4 pt-8">
          <h4 className="font-bold text-[18px]">Landing Page</h4>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            voluptate rerum aut, voluptates doloribus expedita eum{" "}
          </p>
          <p className="p-3 bg-gray-300 rounded-full">
            <BsArrowRight className="" />
          </p>
          <div className="bg-[#008b8b] absolute top-0 p-5 rounded-full -mt-[30px] shadow-lg">
            <HiOutlineDesktopComputer className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
