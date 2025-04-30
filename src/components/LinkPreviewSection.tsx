"use client";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

const LinkPreviewSection = () => {
  return (
    <div className="flex justify-center bg-black text-white z-10 items-center h-[40rem] flex-col px-6">
      {/* Introduction Section */}
      <p className="text-neutral-800 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview
          url="https://nextjs.org"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-blue-500"
        >
          Next.js
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://www.typescriptlang.org"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-blue-500"
        >
          TypeScript
        </LinkPreview>{" "}
        are the core technologies I use to build modern, performant web
        applications.
      </p>

      {/* Tailored Message for Portfolio */}
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit my portfolio{" "}
        <LinkPreview
          url="https://azamdev.vercel.app"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-blue-500"
        >
          to explore my full-stack projects
        </LinkPreview>{" "}
        that showcase my expertise in{" "}
        <LinkPreview url="https://tailwindcss.com" className="font-bold">
          Tailwind CSS
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview url="https://reactjs.org" className="font-bold">
          React.js
        </LinkPreview>{" "}
        with a focus on creating beautiful, responsive user interfaces.
      </p>

      {/* Call to Action */}
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mt-6">
        Discover how I build dynamic, user-friendly websites using{" "}
        <LinkPreview
          url="https://www.nodejs.org"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-500 to-yellow-500"
        >
          Node.js
        </LinkPreview>{" "}
        for back-end development and{" "}
        <LinkPreview
          url="https://www.mongodb.com"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-500"
        >
          MongoDB
        </LinkPreview>{" "}
        for database management. I combine these technologies to create
        seamless, scalable web applications.
      </p>
    </div>
  );
};

export default LinkPreviewSection;
