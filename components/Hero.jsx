import Image from "next/image";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="flex items-center lg:h-screen font-main px-4 lg:px-[150px] lg:py-[30px]"
      id="home"
    >
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <article className="w-full lg:w-12/12 flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-y-6 text-primary font-semibold">
          <h4 className="text-[18px]">
            Hello there<span className="text-xl">&#x1F44B;</span>,
          </h4>
          <h2 className="text-3xl">
            I'm <span className="text-gradient-primary">Randy</span>, a
            FullStack Developer.
          </h2>
          <p className="text-[16px] lg:w-10/12 font-semibold">
            Specialized in MERN Stack, I welcome you to my world of innovative
            web applications development. Let's create something great together!
          </p>
          <div className="flex items-center gap-x-6">
            <button className="bg-primary px-4 py-1 rounded text-white hover:bg-none hover:text-black">
              Portfolio
            </button>
          </div>
          <div className="flex items-center gap-4 text-[23px] text-gradient-primary">
            <FaLinkedin className="shadow-lg  cursor-pointer bg-primary" />
            <FaTwitterSquare className="shadow-lg bg-primary cursor-pointer" />
            <FaGithubSquare className="shadow-lg bg-primary  cursor-pointer" />
          </div>
        </article>
        <div className="lg:w-1/2 w-full md:flex md:justify-center lg:justify-end mt-10 lg:mt-0 hidden ">
          <div className="relative w-[320px] h-[320px]">
            <Image
              src="/shape3.png"
              alt=""
              className="w-full h-full object-cover drop-shadow-2xl"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
