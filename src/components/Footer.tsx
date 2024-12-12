import React from "react";
import { liveProjects, socialLinks, usefulLinks } from "../../data";
import Link from "next/link";
import Newsletter from "./Newsletter";
import FooterTime from "./FooterTime";

const Footer = () => {
  return (
    <div className="relative px-4 md:px-8 rounded-2xl  py-6 border-transparent  bg-black/85 border backdrop-filter backdrop-blur-lg bg-opacity-10  shadow-lg md:py-12 mb-4 md:mb-8 mx-3 md:mx-8  overflow-hidden font-agrandir-regular">
      {/* Torchlight Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-[25rem] h-40 bg-white opacity-20 blur-[120px] rounded-full pointer-events-none" />

      {/* Centered Line Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-white rounded-full opacity-80" />

      <div className="text-lg sm:text-3xl font-agrandir-bold font-medium mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#7d7d7d] to-[#242424]">
        <span>Before you go,</span>
        <br />
        <span>check out these links</span>
      </div>

      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-[18px]">
          {/* Useful Links */}
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="font-agrandir-bold text-sm md:text-base text-white pb-2">
              USEFUL
            </h1>
            {usefulLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-[#898989] text-xs md:text-sm w-fit inline-block transition-colors duration-300 ease-in-out hover:text-gray-50 font-agrandir-regular"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="font-agrandir-bold text-sm md:text-base text-white pb-2">
              SOCIALS
            </h1>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#898989] text-xs md:text-sm w-fit inline-block transition-colors duration-300 ease-in-out hover:text-gray-50 font-agrandir-regular"
              >
                {social.name}
              </Link>
            ))}
          </div>

          {/* Live Projects */}
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="font-agrandir-bold text-sm md:text-base text-white pb-2">
              LIVE PROJECTS
            </h1>
            {liveProjects.map((project) => (
              <Link
                key={project.name}
                href={project.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#898989] text-xs md:text-sm w-fit inline-block transition-colors duration-300 ease-in-out hover:text-gray-50 font-agrandir-regular"
              >
                {project.name}
              </Link>
            ))}
          </div>

          {/* Newsletter Component */}
          <Newsletter />
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] mx-auto w-full" />
      </div>

      <div className="flex items-center justify-between mt-[18px] text-[#898989] font-agrandir-regular">
        <span className="text-xs md:text-sm">
          @2024 Azam Shaikh. All Rights Reserved.
        </span>

        <FooterTime />
      </div>
    </div>
  );
};

export default Footer;
