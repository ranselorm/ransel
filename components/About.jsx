import Image from "next/image";
import { BsSend } from "react-icons/bs";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="text-black/90 font-main -mt-[150px] px-4 lg:px-[150px] lg:py-[30px]">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center">
        <div className="w-full md:w-12/12">
          <article className="flex flex-col items-start gap-y-4">
            <div>
              <h2 className="text-[18px] font-semibold font-primary">
                About Me
              </h2>
              <div className="w-[40px] h-[2px] bg-[#008b8b]" />
            </div>
            <div className="text-[15px] font-semibold">
              <p>
                Hello there, I'm Randy, also known as [ransel]. My passion
                revolves around crafting applications for the web with a proven
                expertise in building robust and responsive web applications
                using React and Next.js.
              </p>
              <p className="my-4">
                Fullstack proficiency with a strong focus on creating seamless
                user interfaces and delightful user experiences.
              </p>
              <p>
                <span className="mr-1">My Toolkit includes</span>
                React.js | Next.js | JavaScript | TypeScript | HTML | CSS |
                Tailwind CSS | Node.js | Express.js | Restful APIs | MongoDB |
                Git
              </p>
              <p className="my-4">
                Beyond the realm of development, you'll likely find me immersing
                myself in a captivating book, engaging in thrilling video games.
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
