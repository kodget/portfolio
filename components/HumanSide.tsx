"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const capabilities = [
  { text: "PROBLEM SOLVING", size: "text-[5vw] md:text-[64px]", x: "10%", y: "15%", weight: 1.5 },
  { text: "ADAPTABILITY", size: "text-[4vw] md:text-[48px]", x: "50%", y: "30%", weight: 0.8 },
  { text: "CRITICAL THINKING", size: "text-[6vw] md:text-[80px]", x: "20%", y: "55%", weight: 2 },
  { text: "COLLABORATION", size: "text-[3.5vw] md:text-[40px]", x: "65%", y: "70%", weight: 0.5 },
  { text: "RELATIONSHIPS", size: "text-[4.5vw] md:text-[56px]", x: "35%", y: "85%", weight: 1.2 },
];

export function HumanSide() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1 based on window center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="capabilities" className="grid-container py-32 md:py-48 overflow-hidden">
      <div className="mb-24 relative z-20">
        <span className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-4 block">
          07 / HOW I WORK
        </span>
      </div>

      <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center">
        {isClient && capabilities.map((cap, i) => (
          <ConstellationWord 
            key={i} 
            cap={cap} 
            index={i} 
            smoothMouseX={smoothMouseX} 
            smoothMouseY={smoothMouseY} 
          />
        ))}
      </div>
    </section>
  );
}

function ConstellationWord({ cap, index, smoothMouseX, smoothMouseY }: any) {
  // Each word moves slightly differently based on its "weight"
  const xTransform = useTransform(smoothMouseX, [-1, 1], [-20 * cap.weight, 20 * cap.weight]);
  const yTransform = useTransform(smoothMouseY, [-1, 1], [-20 * cap.weight, 20 * cap.weight]);
  
  return (
    <motion.div
      className={`absolute font-display font-medium text-[var(--text-primary)] whitespace-nowrap opacity-90 hover:opacity-100 hover:text-[var(--color-brand)] transition-colors duration-500 cursor-default ${cap.size}`}
      style={{
        left: cap.x,
        top: cap.y,
        x: xTransform,
        y: yTransform,
      }}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 0.9, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.15 }}
    >
      {cap.text}
    </motion.div>
  );
}
