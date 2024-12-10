"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";

const iconComponents = {
  FaReact: dynamic(() => import("react-icons/fa").then((mod) => mod.FaReact)),
  SiNextdotjs: dynamic(() =>
    import("react-icons/si").then((mod) => mod.SiNextdotjs)
  ),
  SiMongodb: dynamic(() =>
    import("react-icons/si").then((mod) => mod.SiMongodb)
  ),
  FaNodeJs: dynamic(() => import("react-icons/fa").then((mod) => mod.FaNodeJs)),
  SiExpress: dynamic(() =>
    import("react-icons/si").then((mod) => mod.SiExpress)
  ),
  RiTailwindCssFill: dynamic(() =>
    import("react-icons/ri").then((mod) => mod.RiTailwindCssFill)
  ),
  FaGitAlt: dynamic(() => import("react-icons/fa").then((mod) => mod.FaGitAlt)),
  FaGithub: dynamic(() => import("react-icons/fa").then((mod) => mod.FaGithub)),
  SiPrisma: dynamic(() => import("react-icons/si").then((mod) => mod.SiPrisma)),
};

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = iconComponents[item.iconName]; // Dynamically import icon
        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-lg w-full p-4 overflow-hidden bg-black group-hover:ring-2  ring-purple-500 relative z-20 transition-all duration-500">
              <div className="py-10 z-50 relative space-y-5 cursor-pointer">
                {Icon && <Icon className="w-8 h-8 text-center mx-auto" />}
                <p className="text-3xl font-semibold text-center text-gray-200">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
