"use client";
import React, { FunctionComponent, ElementType } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/utils/cn";

type ButtonProps<T extends ElementType> = {
  borderRadius?: string;
  children: React.ReactNode;
  as?: T;
  containerClassName?: string;
  duration?: number;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export function Button<T extends ElementType = "button">({
  borderRadius = "0.75rem",
  children,
  as,
  containerClassName,
  duration,
  className,
  ...otherProps
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl rounded-2xl h-12 w-44 sm:h-14 sm:w-40 p-[3px] overflow-hidden border border-purple-400",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...(otherProps as React.ComponentPropsWithoutRef<T>)}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "absolute inset-0 rounded-full bg-[rgba(255,255,255,0.8)] border border-black/5",
              "shadow-[0_0_10px_8px_rgba(255,255,255,0.8)]"
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative  border border-inherit backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-xl antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
          backgroundColor: "#21D4FD",
          backgroundImage: "linear-gradient(315deg, #21D4FD 0%, #B721FF 100%)",
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder: FunctionComponent<{
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: string | number | boolean | React.ReactNode;
}> = ({ children, duration = 3600, rx, ry, ...otherProps }) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...(otherProps as React.SVGProps<SVGSVGElement>)}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default function Framer({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
