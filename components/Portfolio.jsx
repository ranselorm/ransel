import React from "react";
import SubHeading from "./ui/SubHeading";
import Heading from "./Heading";

const images = [
  {
    img: "/web2.jpg",
  },
  {
    img: "/web3.jpg",
  },
  {
    img: "/web4.jpg",
  },
];

const Portfolio = () => {
  return (
    <section className="text-black mt-[200px]">
      <article className="w-full text-center font-primary flex flex-col items-center gap-y-4 mb-12">
        <SubHeading text="Portfolio List" />
        <Heading text="Captivating Portfolio" />
        <p className="text-[14px] w-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          debitis nam nesciunt praesentium expedita, commodi non voluptas,
        </p>
      </article>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6">
        {images.map((image, index) => (
          <div className="lg:w-[350px] h-[350px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center text-center gap-y-4 overflow-hidden">
            <img
              src={image.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
