import Image from "next/image";
import { BsSend } from "react-icons/bs";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="text-black/90 font-main -mt-[150px] px-4 lg:px-[150px] lg:py-[30px]">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center">
        <div className="w-full md:w-9/12">
          <article className="flex flex-col items-start gap-y-4 text-[17.5px]">
            <div>
              <h2 className="text-[20px] font-semibold font-primary">
                About Me
              </h2>
              <div className="w-[40px] h-[2px] bg-[#008b8b]" />
            </div>
            <div>
              <p>
                Hello there, I'm Randy, also known as [ransel]. My passion
                revolves around crafting applications for the web.
              </p>
              <p className="my-4">
                I wielda diverse set of languages including HTML, CSS,
                JavaScript. When it comes to frameworks, I'm well-versed in the
                likes of ReactJS, Node.js, Django, and React Native.
              </p>
            </div>
            <Skills />
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
