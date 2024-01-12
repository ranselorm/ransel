import Image from "next/image";

const skills = [
  {
    icon: "/ht.png",
    name: "HTML",
  },
  {
    icon: "/c.png",
    name: "CSS",
  },
  {
    icon: "/js.png",
    name: "JavaScript",
  },
  {
    icon: "/ts.png",
    name: "TypeScript",
  },
  {
    icon: "/react.png",
    name: "React",
  },
  {
    icon: "/tw.png",
    name: "Tailwindcss",
  },
  {
    icon: "/node.png",
    name: "Node",
  },
  {
    icon: "/git.png",
    name: "Git",
  },
  {
    icon: "/firebase.png",
    name: "Firebase",
  },
  // {
  //   icon: "/mongo.png",
  //   name: "MongoDB",
  // },
];
const Skills = () => {
  return (
    <section className="h-[80px] flex justify-center items-center flex-col gap-y-6 w-4/12 max-md:w-full mx-auto text-black md:my-[200px] my-[150px] font-main">
      <article className="flex flex-col items-center gap-y-4 mb-2 px-4 md:px-0">
        <div>
          <h2 className="text-[18px] font-semibold font-primary">Skills</h2>
          <div className="w-[20px] h-[2px] bg-primary" />
        </div>
        <p className="text-[15px] text-center">
          Skills, tools, and technologies that I handle better than a game
          controller.
        </p>
      </article>
      <div className="flex flex-wrap justify-center items-center gap-7 drop-shadow-md px-1">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-y-2">
            <div className="relative w-[30px] md:w-[40px] h-[30px] md:h-[40px] flex flex-col">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
