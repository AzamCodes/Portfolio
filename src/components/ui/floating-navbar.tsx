"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() || 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0); // Show on scroll up, hide on scroll down
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed top-5 inset-x-0 mx-auto max-w-[22rem] sm:max-w-lg  z-50 px-4 backdrop-blur-lg bg-white/30 dark:bg-black/30 rounded-full border border-white/20 p-2 py-3 sm:p-3 sm:py-4 shadow-lg",
            className
          )}
        >
          {/* Desktop Navigation */}
          <div className="hidden sm:flex justify-center">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "dark:text-white text-neutral-600 hover:text-neutral-400 px-4 transition-opacity duration-300",
                  hoveredIndex !== null && hoveredIndex !== idx
                    ? "opacity-40"
                    : "opacity-100"
                )}
              >
                {navItem.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}

          <div className="sm:hidden flex justify-between py-1 px-2 items-center">
            <Link
              href="/"
              className="text-sm font-agrandirTextBold dark:text-white"
            >
              <b>
                Azam<span className="text-purple-600">Dev</span>
              </b>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-neutral-600 dark:text-white"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[51px] max-w-[540px] inset-x-4  dark:bg-black/75 rounded-lg shadow-sm sm:hidden backdrop-blur "
              >
                <ul className="flex flex-col p-4 space-y-3">
                  {navItems.map((navItem, idx) => (
                    <li
                      key={`mobile-link-${idx}`}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Link
                        href={navItem.link}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          "block py-2 text-neutral-700 dark:text-white transition-opacity duration-300 hover:text-neutral-500",
                          hoveredIndex !== null && hoveredIndex !== idx
                            ? "opacity-40"
                            : "opacity-100"
                        )}
                      >
                        {navItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
