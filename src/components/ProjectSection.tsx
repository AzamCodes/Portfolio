import Link from "next/link";
import { projects } from "../../data";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const ProjectSection = () => {
  return (
    <div
      id="projects"
      className="py-24 bg-[#000000] flex items-center justify-center flex-col"
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-agrandirGrandHeavy pb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F0F0F0] to-[#DADADA]">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl px-4">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} passHref>
            <DirectionAwareHover
              imageUrl={project.img}
              className="relative h-64 sm:h-80 w-full"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
            </DirectionAwareHover>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
