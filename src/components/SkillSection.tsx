import { FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { HoverEffect } from "./ui/card-hover-effect";
import { SiExpress, SiMongodb, SiNextdotjs, SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillSection = () => {
  const skills = [
    { title: "React", iconName: "FaReact" },
    { title: "Next JS", iconName: "SiNextdotjs" },
    { title: "MongoDB", iconName: "SiMongodb" },
    { title: "NodeJS", iconName: "FaNodeJs" },
    { title: "ExpressJS", iconName: "SiExpress" },
    { title: "Tailwind CSS", iconName: "RiTailwindCssFill" },
    { title: "Git", iconName: "FaGitAlt" },
    { title: "GitHub", iconName: "FaGithub" },
    { title: "Prisma", iconName: "SiPrisma" },
  ];

  return (
    <div id="skills" className="py-24  mx-auto bg-[#000000]">
      <h1 className="text-4xl md:text-5xl font-agrandirGrandHeavy tracking-wider pb-4 md:pb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F0F0F0] to-[#DADADA] text-center">
        Skills
      </h1>
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
};

export default SkillSection;
