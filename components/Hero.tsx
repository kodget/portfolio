"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center grid-container pt-32 pb-16">
      {/* Top indicator */}
      <div className="absolute top-32 right-5 md:right-10 xl:right-16 flex items-center space-x-2">
        <span className="micro text-[var(--text-secondary)] uppercase tracking-wider">
          Available for selected projects
        </span>
        <span className="w-2 h-2 rounded-full bg-[var(--color-brand-active)] animate-pulse" />
      </div>

      <div className="grid-12 flex-1 items-center">
        {/* Social Links - Left Column */}
        <div className="col-span-12 md:col-span-2 hidden md:flex flex-col space-y-6">
          <SocialLink number="01" name="X" href="https://x.com" />
          <SocialLink number="02" name="LinkedIn" href="https://linkedin.com" />
          <SocialLink number="03" name="Hashnode" href="https://hashnode.com" />
        </div>

        {/* Center/Right Content */}
        <div className="col-span-12 md:col-span-10 grid-12 items-center">
          
          {/* Typography */}
          <div className="col-span-12 lg:col-span-7 z-10">
            <motion.h1 
              className="display-xl text-[var(--text-primary)] leading-[0.85] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              MUHAMMAD<br />
              <span className="ml-0 md:ml-12 lg:ml-24">AJUWON</span>
            </motion.h1>
            
            <motion.div 
              className="ml-0 md:ml-12 lg:ml-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="micro text-[var(--text-secondary)] tracking-widest uppercase">
                Frontend Engineer
              </h2>
            </motion.div>

            {/* Mobile Socials */}
            <div className="flex md:hidden items-center space-x-6 mt-12">
              <Link href="https://x.com" className="micro text-[var(--text-secondary)] hover:text-brand">X</Link>
              <Link href="https://linkedin.com" className="micro text-[var(--text-secondary)] hover:text-brand">LinkedIn</Link>
              <Link href="https://hashnode.com" className="micro text-[var(--text-secondary)] hover:text-brand">Hashnode</Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="col-span-12 lg:col-span-5 mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-[320px] aspect-[4/5] rounded-[28px] overflow-hidden border border-[var(--border)] cursor-pointer"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ 
                y: -6,
                boxShadow: "0 0 50px rgba(0,104,112,0.18)",
                borderColor: "var(--color-brand)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Image Container with Parallax Effect */}
              <motion.div 
                className="absolute inset-0 w-full h-full bg-[var(--surface-secondary)]"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div 
                  className="w-full h-full bg-gradient-to-b from-stone-400 to-stone-800 transition-all duration-700 ease-out"
                  style={{
                    filter: isHovered ? "grayscale(0%) contrast(1.1)" : "grayscale(90%) contrast(1.2) sepia(10%) hue-rotate(180deg)",
                  }}
                />
              </motion.div>

              {/* Perimeter Glow/Line indicator (appears on hover) */}
              <motion.div 
                className="absolute inset-0 rounded-[28px] border-2 border-[var(--color-brand)] pointer-events-none"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.95
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid-12 items-end mt-24">
        <div className="col-span-12 md:col-span-6">
          <Link 
            href="/resume.pdf" 
            className="group inline-flex flex-col items-start p-4 -ml-4 rounded-lg hover:bg-[var(--color-brand)]/5 transition-colors duration-300"
          >
            <div className="flex items-center text-[var(--text-primary)] font-display font-medium leading-none mb-1">
              DOWNLOAD
            </div>
            <div className="flex items-center text-[var(--text-primary)] font-display font-medium leading-none group-hover:text-[var(--color-brand)] transition-colors">
              RESUME
              <span className="ml-2 relative overflow-hidden w-4 h-4 flex items-center justify-center">
                <ArrowDown className="w-4 h-4 absolute transition-transform duration-300 group-hover:translate-y-4" />
                <ArrowUpRight className="w-4 h-4 absolute -translate-y-4 -translate-x-4 transition-transform duration-300 group-hover:translate-y-0 group-hover:translate-x-0" />
              </span>
            </div>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-end">
          <span className="micro text-[var(--text-muted)] flex flex-col items-center animate-bounce">
            Scroll to explore
            <ArrowDown className="w-4 h-4 mt-2" />
          </span>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ number, name, href }: { number: string; name: string; href: string }) {
  return (
    <Link href={href} className="group flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative">
      <span className="micro mr-4 w-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute left-0">
        {number}
      </span>
      <span className="micro ml-8 group-hover:ml-0 transition-all duration-300 flex items-center">
        {name}
        <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </span>
    </Link>
  );
}
