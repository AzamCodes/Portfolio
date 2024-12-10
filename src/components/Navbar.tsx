"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "#projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Services",
      link: "#services",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative flex justify-center items-center">
      <FloatingNav navItems={navItems} />
      {/* <DummyContent /> */}
    </div>
    // <div
    //   className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    // >
    //   <Menu setActive={setActive}>
    //     <div className="relative w-full flex gap-4 items-center justify-center">
    //       <Link href={"/"}>
    //         <MenuItem setActive={setActive} item="Home">
    //           Home
    //         </MenuItem>
    //       </Link>
    //       <Link href={"/about"}>
    //         <MenuItem setActive={setActive} item="About">
    //           About
    //         </MenuItem>
    //       </Link>
    //       <MenuItem setActive={setActive} item="Skills">
    //         Skills
    //       </MenuItem>
    //       <MenuItem setActive={setActive} active={active} item="Projects">
    //         <div className="  text-sm grid grid-cols-2 gap-10 p-4">
    //           <ProductItem
    //             title="Algochurn"
    //             href="https://algochurn.com"
    //             src="https://assets.aceternity.com/demos/algochurn.webp"
    //             description="Prepare for tech interviews like never before."
    //           />
    //           <ProductItem
    //             title="Tailwind Master Kit"
    //             href="https://tailwindmasterkit.com"
    //             src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
    //             description="Production ready Tailwind css components for your next project"
    //           />
    //           <ProductItem
    //             title="Moonbeam"
    //             href="https://gomoonbeam.com"
    //             src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
    //             description="Never write from scratch again. Go from idea to blog in minutes."
    //           />
    //           <ProductItem
    //             title="Rogue"
    //             href="https://userogue.com"
    //             src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
    //             description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
    //           />
    //         </div>
    //       </MenuItem>
    //     </div>
    //   </Menu>
    // </div>
  );
};

export default Navbar;
