import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const ProjectCard = ({ project }: any) => {
  return (
    <CardContainer className="group" style={{ perspective: "1000px" }}>
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-3xl p-3 border">
        {/* Dots Above the Image */}
        <div className="flex gap-1 py-[0.35rem] pb-3 px-2">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <CardItem
                key={index}
                translateZ="50"
                className="w-[0.45rem] h-[0.45rem] rounded-full bg-[#e9dede] will-change-transform"
              />
            ))}
        </div>

        {/* Image */}
        <CardItem
          translateZ="80"
          className="relative w-full h-[400px] overflow-hidden rounded-md will-change-transform"
        >
          <Image
            className="rounded-lg transition-transform duration-300 ease-in-out will-change-transform hover:scale-110"
            layout="fill"
            objectFit="cover"
            src={project.img}
            alt={project.title}
          />
        </CardItem>

        {/* Tags Below Title and Description */}
        <div className="flex items-center pt-4 gap-2 pb-3 px-3">
          {project.tags.map((tag, index) => (
            <CardItem
              key={index}
              translateZ="60"
              className="text-[0.75rem] bg-[#171718] py-1 px-2 border border-gray-500 rounded-xl will-change-transform"
            >
              {tag}
            </CardItem>
          ))}
        </div>

        {/* Title and Description */}
        <CardItem
          translateZ="60"
          className="flex flex-col px-3 py-4 will-change-transform"
        >
          <h3 className="text-2xl font-bold antialiased pb-2">
            {project.title}
          </h3>
          <p className="truncate text-gray-300 text-sm">{project.shortdesc}</p>
        </CardItem>

        {/* Arrow Icon at Bottom Right */}
        <CardItem
          translateZ="40"
          className="absolute bottom-8 right-6 flex items-end will-change-transform"
        >
          <IoIosArrowRoundForward
            className="-rotate-45 transform transition-transform duration-300 ease-in-out will-change-transform group-hover:rotate-0"
            size={36}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
