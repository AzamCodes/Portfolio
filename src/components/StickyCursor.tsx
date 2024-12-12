"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";

export default function StickyCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);
  const cursorSize = isHovered ? 16 : 12;

  // Mouse position values
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // Set hover state on mouse enter/leave
  const manageMouseOver = () => setIsHovered(true);
  const manageMouseLeave = () => {
    setIsHovered(false);
    animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 });
  };

  useEffect(() => {
    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    };
    document.addEventListener("mousemove", manageMouseMove);
    document.addEventListener("mouseenter", manageMouseOver);
    document.addEventListener("mouseleave", manageMouseLeave);

    return () => {
      document.removeEventListener("mousemove", manageMouseMove);
      document.removeEventListener("mouseenter", manageMouseOver);
      document.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, [cursorSize, mouse.x, mouse.y]);

  return (
    <div className="cursorContainer">
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          width: cursorSize,
          height: cursorSize,
          borderRadius: "50%", // Ensure the shape stays circular
          backgroundColor: "white", // Customize as needed
          position: "fixed", // Ensure it's positioned correctly
          pointerEvents: "none", // Prevent cursor interference
          transformOrigin: "center",
        }}
        className="cursor"
        ref={cursor}
      ></motion.div>
    </div>
  );
}
