import Image from "next/image";
import Button from "./ui/Button";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="mt-[20px] h-screen font-main px-4 lg:px-[150px] lg:py-[30px]">
      <div className="flex items-center flex-col lg:flex-row justify-between">
        <article className="w-full lg:w-12/12 flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-y-6 text-primary font-semibold">
          <h4 className="text-[18px]">
            Hello there<span className="text-xl">&#x1F44B;</span>,
          </h4>
          <h2 className="text-3xl">
            Lorem ipsum dolor
            <span className="ml-2 text-secondary">adipisicing.</span>
          </h2>
          <p className="text-[16px] lg:w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas
            corrupti aspernatur reprehenderit neque sequi adipisci expedita
            cupiditate. ipsam quia in accusantium ducimus. Odit at odio, nemo
            dolores amet adipisci!
          </p>
          <div className="flex items-center gap-x-6">
            {/* <Button text="Contact" fill={true} icon={<AiOutlineSend />} /> */}
            <Button text="Contact" fill={true} icon={<BsArrowRight />} />

            <Button text="Portfolio" />
          </div>
        </article>
        <div className="lg:w-1/2 w-full flex justify-end mt-10 lg:mt-0">
          <div className="relative w-[360px] h-[360px]">
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
