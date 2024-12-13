"use client";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn"; // Ensure you have this utility or define it

export const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return <FloatingDockContainer items={items} className={className} />;
};

const FloatingDockContainer = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue<number>(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 gap-2 md:gap-[0.65rem] items-end justify-center rounded-2xl bg-white/30 backdrop-blur-md dark:bg-neutral-800/30 dark:backdrop-blur-2xl dark:backdrop-filter px-0 md:px-3 pb-3 fixed bottom-9 left-1/2 -translate-x-1/2 z-50 shadow-xl transition-all duration-300 ease-in-out",
        className,
        "w-[53%] sm:w-[28%] xl:w-[15%] "
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue<number>;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Correctly using usePathname to get the current path

  // Detect if the device is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define the transforms and springs even if not used on mobile
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 70, 40]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 35, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 35, 20]
  );

  const width = useSpring(isMobile ? 50 : widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(isMobile ? 50 : heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(isMobile ? 20 : widthTransformIcon, {
    mass: 0.1,
    stiffness: 100,
    damping: 12,
  });
  const heightIcon = useSpring(isMobile ? 20 : heightTransformIcon, {
    mass: 0.1,
    stiffness: 100,
    damping: 12,
  });

  // Tooltip display logic
  const handleTouch = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    setHovered(true);
    setTimeout(() => setHovered(false), 1500); // Tooltip appears for 1.5s on mobile touch
  };

  const isActive = pathname === href; // Check if the current path matches the href

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        onTouchStart={handleTouch} // Simulate hover with touch
        className={cn(
          "aspect-square rounded-2xl bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative shadow-md",
          isActive && "border border-transparent"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              transition={{ duration: 0.3 }}
              className={cn(
                "px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs shadow-lg",
                isActive && "dark:text-sky-400 dark:bg-neutral-900"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn(
            "flex items-center justify-center",
            isActive && "dark:text-sky-300" // Change icon color if active
          )}
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
