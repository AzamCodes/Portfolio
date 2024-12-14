"use client";

import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import React, { useState } from "react";

export const HoverEffectBox = ({
  children,
  color = "blue", // Default color
}: {
  children: React.ReactNode;
  color?: "blue" | "green" | "purple" | "instagram" | "white";
}) => {
  const radius = 150; // Size of the gradient
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Map color prop to specific rgba values
  const colorMap: Record<string, string> = {
    blue: "rgba(59, 130, 246, 0.3)", // Tailwind's blue-500
    green: "rgba(34, 197, 94, 0.3)", // Tailwind's green-500
    purple: "rgba(168, 85, 247, 0.3)", // Tailwind's purple-500
    instagram: "rgba(225, 48, 108, 0.3)",
    white: "rgba(0, 0, 0, 0.6)",
  };

  const gradientColor = colorMap[color] || colorMap["blue"];

  const gradient = useMotionTemplate`
    radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 80%)
  `;

  return (
    <motion.div
      className="relative p-3 sm:p-6 rounded-[inherit] shadow-md overflow-hidden bg-inherit"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? gradient : "transparent",
        transition: "background 0.4s ease-in-out", // Smooth transition
      }}
    >
      {children}
    </motion.div>
  );
};
