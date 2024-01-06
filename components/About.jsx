import Image from "next/image";
import { BsSend } from "react-icons/bs";

const About = () => {
  return (
    <section className="px-4 md:px-10 text-black/90 font-main">
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-9/12">
          <article className="flex flex-col gap-y-5 text-[17.5px]">
            <div>
              <h2 className="text-[20px] font-semibold font-primary">
                About Me
              </h2>
              <div className="w-[40px] h-[2px] bg-[#008b8b]" />
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, quidem reprehenderit alias consequatur omnis
                laudantium, iure vel aliquid saepe nam accusamus tempora totam
                voluptates voluptatum sapiente, sunt possimus adipisci debitis?
              </p>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                amet accusantium nesciunt, sapiente delectus magnam possimus
                facilis unde est dolores explicabo eligendi temporibus quaerat
                neque harum perferendis sunt tempora rem.
              </p>
            </div>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit saepe
              ut excepturi iure quis perspiciatis nam aperiam qui inventore
              unde, quod eum? Ex hic earum blanditiis delectus dolorem odit
              veniam.
            </p> */}

            <button className="bg-[#008b8b] text-white py-[6px] px-4 text-[16px] rounded-md border-2 border-secondary hover:bg-transparent hover:text-black transition hover:border-secondary w-full md:w-max hidden md:flex">
              Let's Connect
            </button>
          </article>
        </div>
        <div className="w-full md:w-9/12 flex justify-center">
          <div className="relative w-full md:w-9/12 h-[450px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/sel.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
