import Heading from "./Heading";
import SubHeading from "./ui/SubHeading";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Services = () => {
  return (
    <section className="py-[50px] text-black font-main flex flex-col items-center justify-center lg:px-[150px] ">
      <article className="flex flex-col items-center mb-20 bg-red-300 w-full h-[300px] bg-banner bg-center bg-cover relative rounded-xl overflow-hidden">
        <div className="z-10 text-white flex flex-col items-center justify-center mt-10">
          <SubHeading text="Services List" />
          <Heading text="Crafting innovative solutions for you" />
        </div>
        <div className="bg-black absolute inset-0 bg-opacity-75 z-2" />
      </article>
      <div className=" w-full flex flex-col lg:flex-row flex-wrap justify-center gap-10 lg:gap-6 -mt-[150px]">
        <div className="relative lg:w-[230px] h-[240px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 px-4 pt-8">
          <h4 className="font-bold text-[18px]">Web Applications</h4>
          <p className="text-[14px]">
            Creating responsive, dynamic web apps using MongoDB, Express.js,
            React.js, and Node.js.
          </p>
          <p className="p-3 bg-gray-300 rounded-full">
            <BsArrowRight className="" />
          </p>
          <div className="bg-[#008b8b] absolute top-0 p-5 rounded-full -mt-[30px] shadow-lg">
            <HiOutlineDesktopComputer className="text-white" />
          </div>
        </div>
        <div className="relative lg:w-[230px] h-[240px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 px-4 pt-8">
          <h4 className="font-bold text-[18px]">Landing Page</h4>
          <p className="text-[14px]">
            Developing high-converting and responsive landing pages with a focus
            on user engagement.
          </p>
          <p className="p-3 bg-gray-300 rounded-full">
            <BsArrowRight className="" />
          </p>
          <div className="bg-[#008b8b] absolute top-0 p-5 rounded-full -mt-[30px] shadow-lg">
            <HiOutlineDesktopComputer className="text-white" />
          </div>
        </div>
        <div className="relative lg:w-[230px] h-[240px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 px-4 pt-8">
          <h4 className="font-bold text-[18px]">API Integration</h4>
          <p className="text-[14px]">
            Building and connecting RESTful APIs for seamless data exchange and
            functionality.
          </p>
          <p className="p-3 bg-gray-300 rounded-full">
            <BsArrowRight className="" />
          </p>
          <div className="bg-[#008b8b] absolute top-0 p-5 rounded-full -mt-[30px] shadow-lg">
            <HiOutlineDesktopComputer className="text-white" />
          </div>
        </div>
        <div className="relative lg:w-[230px] h-[240px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 px-4 pt-8">
          <h4 className="font-bold text-[18px]">SEO Practices</h4>
          <p className="text-[14px]">
            Enhancing website visibility using search engine optimization
            techniques for better ranking.
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
