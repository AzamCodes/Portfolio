"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import { cn } from "@/utils/cn"; // Utility for merging class names

interface BtnProps {
  children?: React.ReactNode;
  className?: string;
  borderRadius?: string;
}

export function Btn({ children, className, borderRadius }: BtnProps) {
  return (
    <div>
      <Button
        borderRadius={borderRadius || "0.75rem"}
        className={cn(
          "text-black dark:text-white font-bold text-lg  dark:border-[inherit] bg-gradient-to-br from-[#21D4FD] to-[#B721FF]",
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
}
