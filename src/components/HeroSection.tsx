"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { HeroHighlight } from "./ui/hero-highlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import DateDisplay from "./DateDisplay";
import { Button } from "./ui/moving-border";
import { Linkedin, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Starts from below
      animate={{ opacity: 1, y: 0 }} // Moves to the final position
      transition={{
        duration: 1, // Duration of 1 second
        ease: "easeOut", // Smooth ease-out for natural deceleration
      }}
      className="relative flex items-center justify-center min-h-[85vh] w-full bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] antialiased"
    >
      <div className="absolute top-4 right-8 md:top-14 md:right-16 z-10 text-white text-sm">
        <DateDisplay />
      </div>
      {/* Spotlights */}
      <Spotlight
        className="-top-14 -left-6 md:-left-20 md:-top-20 h-full"
        fill="purple"
      />
      {/* <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" /> */}
      {/* <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}

      <HeroHighlight>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="relative flex items-center justify-center mb-8">
            {/* Badge Positioned Above the Image */}
            <div className="absolute top-[-5.6rem] z-20 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-gray-700 shadow-lg py-3 px-6 flex items-center justify-center space-x-3">
              {/* Status Indicator with a Custom Pulse Animation */}
              <div className="w-2 h-2 absolute left-5 top-4 rounded-full bg-green-500 animate-pulse-fast"></div>

              {/* Text inside the Badge */}
              <span className="relative text-black dark:text-white font-agrandirTextBold text-sm md:text-sm">
                Available For Work
              </span>
            </div>

            {/* Image with Professional Styling */}
            <div className="relative rounded-full border-4 border-gray-200 dark:border-purple-600 shadow-lg overflow-hidden flex items-center justify-center w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <Image
                src="/admin.jpg"
                width={250}
                height={250}
                alt="author image"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text and Generate Text Effect Animation */}
          <div className="flex flex-col items-center px-4 text-center font-agrandirTextBold z-10">
            {/* Introductory short tagline */}
            <p className="uppercase font-agrandirGrandLight tracking-widest text-xs text-center text-blue-100 ">
              Crafting Scalable Web Solutions
            </p>

            {/* Main heading with text animation */}
            <TextGenerateEffect
              words="Building Modern, Efficient, and Scalable Digital Experiences"
              className="text-center text-2xl md:text-4xl font-agrandirGrandHeavy lg:text-5xl"
            />
            {/* Short, impactful paragraph below the heading */}
            <p className="md:tracking-wider font-agrandirRegular mb-4 text-lg md:text-lg lg:text-lg text-neutral-700 dark:text-white">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A957F7] to-[#E7D2FF] font-agrandirTextBold">
                Azam
              </span>
              , a Full-Stack Web Developer, passionate about building
              high-performance, responsive web applications with the latest
              technologies.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-start md:justify-between w-full">
              <div className="flex gap-3 items-center md:order-1 order-2 flex-wrap">
                <span className="text-xl">Say Hello</span>
                <span className="bg-[#111111] cursor-pointer p-3 rounded-full transition-colors duration-300 hover:bg-purple-500">
                  <Linkedin size={25} />
                </span>
                <span className="bg-[#111111] cursor-pointer p-3 rounded-full transition-colors duration-300 hover:bg-purple-500">
                  <Instagram size={25} />
                </span>
              </div>
              <div className="md:order-2 order-1 w-full md:w-auto">
                <Button
                  onClick={() =>
                    (window.location.href = "mailto:contact@azamportfolio.com")
                  }
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </HeroHighlight>
    </motion.div>
  );
};

export default HeroSection;
