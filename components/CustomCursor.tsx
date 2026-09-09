"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [hoverType, setHoverType] = useState<"link" | "text" | "default">("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor globally on mount
    document.body.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); 
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isLink = target.closest("a") || target.closest("button") || target.closest(".magnetic");
      const isText = target.tagName?.toLowerCase() === "h1" || target.tagName?.toLowerCase() === "h2" || target.classList.contains("text-reveal");

      if (isLink) {
        setHoverType("link");
      } else if (isText) {
        setHoverType("text");
      } else {
        setHoverType("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 1)",
      border: "0px solid rgba(255, 255, 255, 0)",
      mixBlendMode: "difference" as const,
    },
    link: {
      scale: 3, // 16 * 3 = 48px
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: "1px solid rgba(255, 255, 255, 1)", // Scales up visually to ~3px
      mixBlendMode: "difference" as const,
    },
    text: {
      scale: 9, // ~144px
      backgroundColor: "rgba(255, 255, 255, 1)",
      border: "0px solid rgba(255, 255, 255, 0)",
      mixBlendMode: "difference" as const,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden md:block border-white"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      variants={variants}
      animate={hoverType}
      transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
    />
  );
}
