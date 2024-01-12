import Image from "next/image";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="text-black/90 font-main lg:-mt-[150px] mt-8 px-4 lg:px-[150px] text-center md:text-left">
      <div className="flex flex-col-reverse gap-y-8 md:flex-row-reverse items-center">
        <div className="w-full md:w-12/12">
          <article className="flex flex-col md:items-start items-center gap-y-4">
            <div>
              <h2 className="text-[18px] font-semibold font-primary">
                About Me
              </h2>
              <div className="w-[40px] h-[2px] bg-primary" />
            </div>
            <div className="text-[15px] font-semibold">
              <p>
                Hey there! I'm Randy, but you can call me [ranselorm]. I make
                web applications that work super smooth and looks great, thanks
                to my skills with React and Next.js.
              </p>
              <p className="my-4">
                Fullstack proficiency ensuring that every click leads you to a
                page that not only works like a charm but also delights the eye.
              </p>
              <p>
                <span className="mr-1">My Toolkit includes</span>
                React.js | Next.js | JavaScript | TypeScript | HTML | CSS |
                Tailwind CSS | Node.js | Express.js | Restful APIs | MongoDB |
                Git
              </p>
              <p className="my-4">
                When I'm not writing code or engineering a project, you might
                catch me lost in a good book or winning at video games. If you
                think you're good at games, wait till you play against me.
                Patrick could testify!
                <span>😊</span>
              </p>
            </div>
            {/* <Skills /> */}
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
