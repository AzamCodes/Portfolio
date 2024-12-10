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
          "bg-white dark:bg-gradient-to-t dark:from-[#7e1cda] dark:to-[rgba(221,235,243,0.7)] text-black dark:text-white font-bold text-lg border-purple-400 dark:border-[inherit]",
          className
        )}
      >
        {children}
      </Button>
    </div>
  );
}
