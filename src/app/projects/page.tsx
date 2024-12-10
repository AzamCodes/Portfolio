import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { projects } from "../../../data";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    // <div className="min-h-screen min-w-full py-8 md:py-12  px-4 flex items-center flex-col justify-center">
    //   <h2 className="text-3xl pb-6 md:text-5xl md:pb-7">Projects</h2>
    //   <div className="grid max-w-7xl col-span-1 xl:grid-cols-2 gap-4">
    //     {projects.map((proj) => (
    //       <Link
    //         key={proj.id}
    //         href={`/projects/${proj.id}`}
    //         proj={proj.id}
    //         passHref
    //       >
    //         <ProjectCard proj={proj} />
    //       </Link>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Projects;
