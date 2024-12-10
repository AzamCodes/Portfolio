// components/ScrollLink.tsx
"use client"; // Ensure this runs on the client side

import { Link as ScrollLink } from "react-scroll";

interface ScrollLinkProps {
  to: string; // ID of the target section
  children: React.ReactNode;
  className?: string;
}

const ScrollLinkComponent: React.FC<ScrollLinkProps> = ({
  to,
  children,
  className,
}) => {
  return (
    <ScrollLink
      to={to}
      smooth={true} // Enables smooth scrolling
      duration={800} // Scroll duration in milliseconds
      offset={-50} // Adjusts final scroll position to account for fixed navbar
      className={className} // For custom styling
      spy={true} // Updates active class
    >
      {children}
    </ScrollLink>
  );
};

export default ScrollLinkComponent;
