"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

// Magnetic effect component with 3D transformation
export default function Framer({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement to calculate x, y offset for 3D effect
  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  // Reset position to center on mouse leave
  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{
        position: "relative",
        perspective: "1500px", // Create a 3D space
      }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{
        x,
        y,
        rotateX: -y / 15, // 3D effect tilt on Y-axis
        rotateY: x / 15, // 3D effect tilt on X-axis
        scale: 1.05, // Slight zoom in for a magnetic pull effect
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
        restDelta: 0.01,
      }}
    >
      {children}
    </motion.div>
  );
}
