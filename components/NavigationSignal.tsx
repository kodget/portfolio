"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function NavigationSignal() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Find the current section based on scroll position
      const sections = document.querySelectorAll("section");
      let current = 1;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        // If the section's top is in the upper half of the screen
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          current = index + 1; // Assuming the first section is 1
        }
      });
      
      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-50 mix-blend-difference hidden md:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <div className="flex items-center space-x-4 text-[var(--color-cream-soft)]">
        <span className="font-display font-medium text-lg tracking-widest">M</span>
        <span className="w-8 h-[1px] bg-[var(--color-cream-soft)] opacity-50" />
        <span className="micro tracking-widest">0{currentSection}</span>
      </div>
    </motion.div>
  );
}
