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
    name: "JS",
  },
  {
    icon: "/ts.png",
    name: "TS",
  },
  {
    icon: "/react.png",
    name: "React",
  },
  {
    icon: "/tw.png",
    name: "Tailwind",
  },
];
const Skills = () => {
  return (
    <div className="h-[80px] flex justify-start items-center w-full">
      <div className="flex flex-wrap justify-start items-center gap-x-[40px] gap-y-5 drop-shadow-md">
        {skills.map((skill, index) => (
          <div
            className="relative w-[30px] md:w-[35px] h-[30px] md:h-[35px]"
            key={index}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
