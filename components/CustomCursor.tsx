"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide default cursor globally on desktop sizes
    const style = document.createElement('style');
    style.innerHTML = `
      @media (min-width: 768px) {
        * { cursor: none !important; }
      }
    `;
    document.head.appendChild(style);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: "#ffffff",
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      backgroundColor: "#ffffff",
    }
  };

  return (
    <>
      {/* Outer Magnetic Blend Trail */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-[99999]"
        style={{ mixBlendMode: "difference" }}
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.1
        }}
      />
      {/* Exact Core Dot */}
      <motion.div 
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full pointer-events-none z-[99999] transition-opacity duration-300 shadow-[0_0_10px_rgba(255,26,26,0.5)]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
}
