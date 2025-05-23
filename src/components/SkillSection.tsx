import { HoverEffect } from "./ui/card-hover-effect";
interface SkillSectionProps {
  id: string;
}

const SkillSection: React.FC<SkillSectionProps> = ({ id }) => {
  const skills: {
    title: string;
    iconName:
      | "FaReact"
      | "SiNextdotjs"
      | "SiMongodb"
      | "FaNodeJs"
      | "SiExpress"
      | "RiTailwindCssFill"
      | "FaGitAlt"
      | "FaGithub"
      | "SiPrisma";
  }[] = [
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
    <div id={id} className="py-24  mx-auto bg-[#000000]">
      <h1 className="text-4xl md:text-5xl font-agrandirGrandHeavy uppercase tracking-wider pb-4 md:pb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F0F0F0] to-[#DADADA] text-center">
        Skills
      </h1>
      <div className="max-w-5xl mx-auto text-white px-4 md:px-8">
        <HoverEffect items={skills} className="your-class-name" />
      </div>
    </div>
  );
};

export default SkillSection;
