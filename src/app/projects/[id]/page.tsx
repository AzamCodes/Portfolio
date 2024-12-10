"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
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
        duration: 1,
        ease: "easeOut",
      }}
    >
      {/* X Icon for Navigation */}
      <motion.button
        className="fixed top-8 left-8 p-4 z-50 bg-[rgba(255,255,255,0.2)] p-2 rounded-full backdrop-blur-md text-white hover:bg-gray-800 transition"
        initial={{ opacity: 1, scale: 1 }} // Start with full opacity and normal scale
        animate={{
          opacity: isXClicked ? 0 : 1, // Fade out when clicked
          scale: isXClicked ? 0 : 1, // Scale down when clicked
        }}
        transition={{ duration: 0.4 }} // Smooth transition
        onClick={handleXClick}
      >
        <X size={24} />
      </motion.button>

      <h1 className="text-4xl font-agrandirGrandHeavy mb-4 text-green-400">
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
      <p className="text-lg mb-6 max-w-2xl font-agrandirTextBold text-gray-400">
        {project.desc}
      </p>

      {/* Core Features Section */}
      <div className="w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-agrandirGrandHeavy tracking-wide mb-4 text-white">
          Core Features
        </h2>
        <ul className="list-disc list-inside space-y-3 font-agrandirRegular">
          {project.coreFeatures && project.coreFeatures.length > 0 ? (
            project.coreFeatures.map((feature, index) => (
              <li key={index} className="text-lg leading-relaxed">
                {feature}
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
            <Btn className="flex relative items-center">
              Visit{" "}
              <ExternalLink
                size={15}
                className="absolute  top-[11px] right-9"
              />
            </Btn>
            {/* <button className="bg-[rgba(255,255,255,0.2)] text-xl items-center flex gap-2 text-white py-2 px-4 rounded-full backdrop-blur-md hover:bg-blue-600 transition">
              <ExternalLink />
            </button> */}
          </Link>
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition">
              <Github />
            </button>
          </Link>
          <Link href={`/projects/${projects[nextProjectIndex].id}`}>
            <button className="flex items-center justify-center bg-blue-600 text-white gap-2 py-3 px-3 rounded-lg hover:bg-blue-700 transition">
              Next Project <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IndividualProject;
