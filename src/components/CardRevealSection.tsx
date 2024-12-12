"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { FaTools, FaPuzzlePiece, FaRocket } from "react-icons/fa"; // Import your icons

const cardData = [
  {
    title: "Technical Expertise",
    icon: <FaTools className="h-10 w-10 text-green-400" />,
    description:
      "Proficient in full-stack development with Next.js, TypeScript, and Tailwind CSS. Creating seamless, responsive, and scalable web applications.",
    containerClass: "bg-emerald-900",
    animationSpeed: 5.1,
  },
  {
    title: "Problem-Solving",
    icon: <FaPuzzlePiece className="h-10 w-10 text-yellow-400" />,
    description:
      "Passionate about tackling complex challenges. Turning ideas into reality with efficient code and innovative solutions.",
    containerClass: "bg-black",
    animationSpeed: 3,
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
  },
  {
    title: "Continuous Growth",
    icon: <FaRocket className="h-10 w-10 text-blue-400" />,
    description:
      "Committed to lifelong learning and staying updated with modern technologies. Striving for excellence in every project I undertake.",
    containerClass: "bg-sky-600",
    animationSpeed: 3,
    colors: [[125, 211, 252]],
  },
];

const CardRevealSection = () => {
  return (
    <div id="services" className="py-24 mx-auto bg-[#000000]">
      <h1 className="text-3xl md:text-5xl font-agrandirGrandHeavy pb-8 md:pb-12 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F0F0F0] to-[#DADADA] text-center">
        Explore My Talents
      </h1>
      <div className="max-w-[70rem] flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
          >
            <CanvasRevealEffect
              animationSpeed={card.animationSpeed}
              containerClassName={card.containerClass}
              colors={card.colors ?? [[0, 255, 255]]}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center space-y-4">
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="max-w-xs">{card.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Card = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border rounded-lg border-black/[0.2] group flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[28rem] overflow-hidden"
    >
      {/* Reveal Effect */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon and Title/Description */}
      <div className="relative z-20 flex items-center justify-center w-full h-full">
        {/* Icon (centered) */}
        <div className="group-hover:-translate-y-4 group-hover:opacity-0 transition duration-200 flex items-center justify-center absolute inset-0">
          {icon}
        </div>

        {/* Title and Description */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-4">
          <h2 className="text-2xl font-agrandirTextBold opacity-0 group-hover:opacity-100 transition duration-200">
            {title}
          </h2>
          <p className="max-w-xs opacity-0 group-hover:opacity-100 font-agrandirNarrow transition duration-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardRevealSection;
