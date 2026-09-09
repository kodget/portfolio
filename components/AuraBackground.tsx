"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function AuraBackground() {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  
  // Slower, more fluid spring for the aura
  const springConfig = { damping: 50, stiffness: 100, mass: 1.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e: MouseEvent) => {
      // Center the huge orb (width is 800)
      cursorX.set(e.clientX - 400); 
      cursorY.set(e.clientY - 400);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* The main colorful orb */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none opacity-40 dark:opacity-30"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle at center, rgba(236, 72, 153, 0.8) 0%, rgba(168, 85, 247, 0.6) 30%, rgba(59, 130, 246, 0.4) 60%, transparent 80%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Secondary contrasting orb for more depth */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 dark:opacity-30"
        style={{
          x: smoothX,
          y: smoothY,
          marginLeft: "100px",
          marginTop: "100px",
          background: "radial-gradient(circle at center, rgba(20, 184, 166, 0.6) 0%, rgba(234, 179, 8, 0.4) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.3, 0.8, 1.2, 1],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
