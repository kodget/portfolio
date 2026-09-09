"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center grid-container pt-16 md:pt-24 pb-16">
      
      {/* Top indicator */}
      <div className="absolute top-16 md:top-24 right-5 md:right-10 xl:right-16 flex items-center space-x-2">
        <span className="micro text-[var(--text-secondary)] uppercase tracking-wider">
          Available for selected projects
        </span>
        <span className="w-2 h-2 rounded-full bg-[var(--color-brand-active)] animate-pulse" />
      </div>

      {/* Main Content Stack */}
      <div className="flex flex-col items-center z-10 w-full mt-16 md:mt-0">
        
        {/* Name (Centered, Bold) */}
        <div className="flex flex-col items-center mb-12 text-reveal z-20">
          {["MUHAMMAD", "AJUWON"].map((word, wordIndex) => (
            <div key={word} className="flex overflow-hidden">
              {word.split("").map((letter, i) => (
                <motion.h1
                  key={i}
                  className="text-[18vw] md:text-[14vw] lg:text-[13vw] font-display font-bold text-center text-[var(--text-primary)] leading-[0.85] tracking-tighter"
                  initial={{ y: "100%", opacity: 0, rotate: 10 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 2.2 + (wordIndex * 0.1) + (i * 0.05) // Delays after preloader
                  }}
                >
                  {letter}
                </motion.h1>
              ))}
            </div>
          ))}
        </div>

        {/* Profile Picture (Centered) */}
        <motion.div
          className="magnetic relative w-full max-w-[280px] md:max-w-[320px] aspect-[4/5] rounded-[28px] overflow-hidden border border-[var(--border)] cursor-none mb-12 z-20"
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
            <Image
              src="/images/profilephoto.png"
              alt="Muhammad Ajuwon"
              fill
              className="object-cover transition-all duration-700 ease-out"
              style={{
                filter: isHovered ? "grayscale(0%) contrast(1.1)" : "grayscale(90%) contrast(1.2) sepia(10%) hue-rotate(180deg)",
              }}
              priority
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

        {/* Social Media Links (Icons, Centered) */}
        <motion.div 
          className="flex items-center justify-center space-x-6 md:space-x-8 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
        >
          <SocialIcon icon={XIcon} href="https://x.com" />
          <SocialIcon icon={LinkedinIcon} href="https://linkedin.com" />
          <SocialIcon icon={GithubIcon} href="https://github.com/kodget" />
          <SocialIcon icon={BookOpen} href="https://hashnode.com" />
        </motion.div>
        
        <motion.h2 
          className="micro text-[var(--text-secondary)] tracking-widest uppercase mt-8 text-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9, duration: 0.8 }}
        >
          Frontend Engineer
        </motion.h2>

      </div>

      {/* Bottom Row */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-24 z-20">
        <Link 
          href="/resume.pdf" 
          className="magnetic group inline-flex flex-col items-start p-4 rounded-lg hover:bg-[var(--color-brand)]/5 transition-colors duration-300 mb-8 md:mb-0 cursor-none"
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
        
        <span className="micro text-[var(--text-muted)] flex flex-col items-center animate-bounce">
          Scroll to explore
          <ArrowDown className="w-4 h-4 mt-2" />
        </span>
      </div>
    </section>
  );
}

function SocialIcon({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <Link 
      href={href} 
      className="magnetic text-[var(--text-secondary)] hover:text-[var(--color-brand)] transition-colors duration-300 p-2 cursor-none"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-6 h-6 md:w-7 md:h-7" />
    </Link>
  );
}

export const GithubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
