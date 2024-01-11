import Image from "next/image";

const skills = [
  {
    icon: "/ht.png",
    name: "HTML",
  },
  {
    icon: "/css.png",
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
    <div className="h-[80px] flex justify-center items-center flex-col gap-y-6 w-4/12 max-md:w-full mt-[80px] md:mt-[150px] mx-auto text-black">
      <div className="flex flex-col items-start gap-y-4">
        <div>
          <h2 className="text-[18px] font-semibold font-primary">Skills</h2>
          <div className="w-[20px] h-[2px] bg-[#008b8b]" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-[40px] gap-y-6 drop-shadow-md">
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
    </div>
  );
};

export default Skills;
