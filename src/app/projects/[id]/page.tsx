"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { notFound, useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { projects } from "../../../../data"; // Ensure this imports updated project data
import ShimmerSlider from "@/components/ButtonSlider";
import { Btn } from "@/components/Button";

const IndividualProject = () => {
  const { id } = useParams();
  const router = useRouter(); // To handle navigation
  const [isXClicked, setIsXClicked] = useState(false); // State to control X button click animation
  const projectId = Number(id);
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return notFound();
  }

  const currentIndex = projects.findIndex((proj) => proj.id === projectId);
  const nextProjectIndex = (currentIndex + 1) % projects.length;

  const handleXClick = () => {
    setIsXClicked(true); // Trigger the animations
    setTimeout(() => {
      router.push("/"); // Navigate after animation
    }, 1000); // Ensure navigation happens after the animation
  };

  return (
    <motion.div
      className="relative min-h-screen py-16 px-6 overflow-hidden flex flex-col items-center bg-black text-gray-300"
      initial={{ scale: 1 }}
      animate={{
        scale: isXClicked ? 0.8 : 1, // Scale out content
        opacity: isXClicked ? 0 : 1, // Fade out content
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* X Icon for Navigation */}
      <motion.button
        className="fixed top-3 p-3 sm:top-8 left-3 sm:left-8 sm:p-4 z-50 bg-[rgba(255,255,255,0.2)] rounded-full backdrop-blur-md text-white hover:bg-gray-800 transition"
        initial={{ opacity: 1, scale: 1 }} // Start with full opacity and normal scale
        animate={{
          opacity: isXClicked ? 0 : 1, // Fade out when clicked
          scale: isXClicked ? 0.8 : 1, // Scale down when clicked
        }}
        transition={{ duration: 0.8 }} // Smooth transition
        onClick={handleXClick}
      >
        <X className="text-sm sm:text-[24px]" />
      </motion.button>

      <h1 className="text-2xl sm:text-4xl font-agrandirGrandHeavy mb-4 text-transparent bg-[linear-gradient(160deg,_#0093E9_0%,_#80D0C7_100%)] bg-clip-text">
        {project.title}
      </h1>

      <Image
        src={project.img}
        alt={project.title}
        width={600}
        height={300}
        className="rounded-lg mb-6"
      />
      <div className="py-8">
        <ShimmerSlider tags={project.tags || []} />
      </div>
      <p className="text-lg mb-6 max-w-2xl font-agrandirTextBold text-gray-200">
        {project.desc}
      </p>

      {/* Core Features Section */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-agrandirGrandHeavy tracking-wide mb-4 text-transparent bg-[linear-gradient(160deg,_#0093E9_0%,_#80D0C7_100%)] bg-clip-text">
          Core Features
        </h2>

        <ul className="list-none space-y-4 font-agrandirTextBold text-gray-300">
          {project.coreFeatures && project.coreFeatures.length > 0 ? (
            project.coreFeatures.map((feature, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 text-lg leading-relaxed"
              >
                <span className="text-lg">{feature}</span>
              </li>
            ))
          ) : (
            <li className="text-lg leading-relaxed text-gray-500">
              No core features available.
            </li>
          )}
        </ul>
      </div>

      {/* Floating Buttons with Framer Motion */}
      <motion.div
        className="fixed font-agrandirTextBold bottom-10 transform -translate-x-1/2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <Link
            href={project.prevlink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Btn className="flex relative items-center justify-center gap-2 text-sm md:text-base py-2 px-3 md:py-3 md:px-4 hover:opacity-95 transition">
              <span className="hidden text-lg pt-1 md:inline">Visit</span>
              <ExternalLink size={18} />
            </Btn>
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[linear-gradient(315deg,_#FFDEE9_0%,_#B5FFFC_100%)] text-black py-2 px-3 md:py-3 md:px-4 rounded-lg transition flex items-center gap-2 justify-center hover:opacity-95">
              <span className="hidden text-lg pt-1 md:inline">Github</span>
              <Github className="text-sm" />
            </button>
          </Link>
          <Link href={`/projects/${projects[nextProjectIndex].id}`}>
            <button className="flex items-center justify-center bg-[linear-gradient(315deg,_#21D4FD_0%,_#B721FF_100%)] text-white gap-2 py-2 px-3 md:py-3 md:px-4 rounded-lg transition hover:opacity-95">
              <span className="hidden text-lg pt-1 md:inline">
                Next Project
              </span>
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IndividualProject;
