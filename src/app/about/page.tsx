import React from "react";
import { cn } from "@/utils/cn";
import { BentoGrid } from "@/components/ui/bento-grid";

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    classprovide: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    classprovide: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    classprovide: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    classprovide: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    classprovide: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    classprovide: "lg:col-span-2 md:col-span-3 bg-red-500 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

const About = () => {
  return (
    <div className="">
      <BentoGrid
      // className="grid bg-blue-200 grid-cols-5 grid-rows-5 gap-4"
      // style={{ gridAutoRows: "minmax(60px, auto)" }}
      >
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`${item.classprovide} row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4`}
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className={`${item.imgClassName} object-cover`}
              />
            )}
            <div className={`flex ${item.titleClassName}`}>
              <h2 className="font-bold">{item.title}</h2>
            </div>
            {item.description && (
              <p className="mt-2 text-sm">{item.description}</p>
            )}
          </div>
        ))}
      </BentoGrid>
    </div>
  );
};

export default About;
