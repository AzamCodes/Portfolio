"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBriefcase,
  IconCode,
  IconHome,
  IconTools,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation"; // Corrected hook usage

export function FloatingNav() {
  const pathname = usePathname(); // Get the current path

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome
          className={`h-6 w-6 md:h-full md:w-full ${
            pathname === "/"
              ? "dark:text-gradient-to-t dark:from-[rgba(164,202,227,1)] dark:to-[rgba(221,235,243,0.7)]"
              : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <IconBriefcase
          className={`h-6 w-6 md:h-full md:w-full ${
            pathname === "/projects"
              ? "dark:text-gradient-to-t dark:from-[rgba(164,202,227,1)] dark:to-[rgba(221,235,243,0.7)]"
              : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
      href: "/projects",
    },
    {
      title: "Services",
      icon: (
        <IconTools className="h-6 w-6 md:h-full md:w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#", // Add correct link for Services
    },
    {
      title: "Tech Stack",
      icon: (
        <IconCode className="h-6 w-6 md:h-full md:w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#", // Add correct link for Tech Stack
    },
     {
      title: "Blogs",
      icon: (
        <IconHome
          className={`h-6 w-6 md:h-full md:w-full ${
            pathname === "/"
              ? "dark:text-gradient-to-t dark:from-[rgba(164,202,227,1)] dark:to-[rgba(221,235,243,0.7)]"
              : "text-neutral-500 dark:text-neutral-300"
          }`}
        />
      ),
      href: "/",
    }
  ];

  return (
    <div className="fixed bottom-16 inset-x-0 mx-auto z-50 flex justify-center">
      <FloatingDock items={links} />
    </div>
  );
}
