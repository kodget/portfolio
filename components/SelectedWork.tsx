"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "EMBY",
    description: "Learning infrastructure for medical students.",
    tags: ["Next.js", "Tailwind", "TypeScript", "AI", "Paystack"],
    personality: "technical / educational / dense",
    theme: "bg-[var(--surface-secondary)]",
    href: "/work/emby",
    image: "/images/project-screenshots/emby/emby.png"
  },
  {
    id: "02",
    title: "HIDAAYAH",
    description: "Software designed to help Muslims connect deeper with the Qur'an.",
    tags: ["TypeScript", "PWA", "Next.js", "Three.js", "3D"],
    personality: "quiet / contemplative / elegant",
    theme: "bg-[var(--color-cream-soft)]",
    href: "/work/hidaayah",
    image: "/images/project-screenshots/hidaayah/hidaayah-1.png"
  },
  {
    id: "03",
    title: "MAMASAFE",
    description: "Medication safety and clinical decision support.",
    tags: ["React", "Tailwind", "API Integration"],
    personality: "clinical / precise / trustworthy",
    theme: "bg-[var(--color-brand-soft)]/10",
    href: "/work/mamasafe",
    image: "/images/project-screenshots/mamasafe/mamasafe.jpeg"
  },
  {
    id: "04",
    title: "DISTINCT PATTERNS",
    description: "E-commerce infrastructure for men's fashion.",
    tags: ["Next.js", "Tailwind", "JavaScript", "React Native"],
    personality: "editorial / commercial / expressive",
    theme: "bg-[var(--surface-secondary)]",
    href: "/work/distinct-patterns",
    image: "/images/project-screenshots/distinct-patterns/distinct-patterns.png"
  },
  {
    id: "05",
    title: "FIKR QURAN ACADEMY",
    description: "A learning platform for local and international Qur'an students.",
    tags: ["Next.js", "Tailwind", "TypeScript", "Paystack"],
    personality: "educational / human / community-driven",
    theme: "bg-[var(--color-cream-soft)]"
  }
];

export function SelectedWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="work" ref={containerRef} className="relative pb-[10vh]">
      <div className="grid-container pt-16 md:pt-24 mb-8">
        <span className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-4 block">
          03 / SELECTED WORK
        </span>
        <h2 className="display-m text-[var(--text-primary)] max-w-2xl">
          Proof.
        </h2>
      </div>

      <div className="flex flex-col relative w-full">
        {projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05);
          return (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              totalLength={projects.length}
              progress={scrollYProgress} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, totalLength, progress, targetScale }: any) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate when this specific card should start scaling down
  // It should start scaling down when the *next* card hits the top of the viewport
  const startProgress = index / totalLength;
  const scale = useTransform(progress, [startProgress, 1], [1, targetScale]);
  
  // Fade to 0.5 to simulate shadow/depth. 
  // It won't bleed because the next card will completely cover it.
  const opacity = useTransform(progress, [startProgress, 1], [1, 0.5]);

  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0 px-4 md:px-8">
      <motion.article 
        style={{ scale, opacity, transformOrigin: "top center" }}
        className="group relative w-full max-w-7xl mx-auto h-[80vh] flex flex-col justify-between overflow-hidden cursor-pointer bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 md:p-12 shadow-2xl shadow-black/5"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Massive Background Architecture */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0">
          <span className="font-display font-bold text-[180px] md:text-[250px] leading-none opacity-[0.04] text-[var(--text-primary)] select-none">
            {project.id}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none">
          {/* Top Row: Title & Metadata */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <h3 className="text-4xl md:text-6xl font-display font-medium text-[var(--text-primary)] mb-4 relative inline-block">
                {project.title}
                {/* Teal Underline Animation */}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1.5 bg-[var(--color-brand)]"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? "100%" : 0 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                />
              </h3>
              <p className="text-lg md:text-2xl text-[var(--text-secondary)] font-medium max-w-xl">
                {project.description}
              </p>
            </div>

            {/* Hover Metadata */}
            <motion.div 
              className="hidden lg:flex flex-col items-end text-right"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 15 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex gap-2 mb-3">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="micro px-4 py-1.5 border border-[var(--border)] rounded-full text-[var(--text-secondary)] bg-[var(--surface-secondary)]">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="micro text-[var(--text-muted)] italic">{project.personality}</span>
            </motion.div>
          </div>

          {/* Bottom Row: Image & Custom Button */}
          <div className="flex-1 flex flex-col md:flex-row items-end justify-between gap-8 mt-12 h-full">
            {/* Cinematic Image Container */}
            <div className="w-full md:w-2/3 h-full max-h-[400px] relative rounded-xl md:rounded-2xl overflow-hidden border border-[var(--border)] bg-black shadow-xl">
              <motion.div 
                className="w-full h-full absolute inset-0 mix-blend-overlay bg-[var(--color-brand)] pointer-events-none z-10"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: isHovered ? 0 : 0.4 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="w-full h-full relative"
                initial={{ filter: "grayscale(100%) brightness(0.6) contrast(1.2)" }}
                animate={{ 
                  filter: isHovered ? "grayscale(0%) brightness(1) contrast(1)" : "grayscale(100%) brightness(0.6) contrast(1.2)"
                }}
                transition={{ duration: 0.6 }}
              >
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover object-top" 
                  />
                ) : (
                  <div className={`w-full h-full ${project.theme} opacity-50`} />
                )}
              </motion.div>
            </div>

            {/* Explore Button */}
            <div className="w-full md:w-1/3 flex justify-end pb-4">
              <div className="relative flex items-center gap-6">
                <div className="flex flex-col text-right font-display uppercase tracking-widest text-sm md:text-lg leading-tight font-semibold text-[var(--text-primary)]">
                  <span>Explore</span>
                  <span>Project</span>
                </div>
                
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <motion.div 
                    className="absolute inset-0 bg-[var(--color-brand)] rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 0.15 : 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                  />
                  <motion.div
                    animate={{ 
                      x: isHovered ? 8 : 0,
                      y: isHovered ? -8 : 0,
                      color: isHovered ? "var(--color-brand)" : "var(--text-primary)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowUpRight strokeWidth={1.5} className="w-12 h-12 md:w-16 md:h-16" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Make the whole card clickable if it has a link */}
        {project.href && (
          <Link href={project.href} className="absolute inset-0 z-20 pointer-events-auto" aria-label={`View ${project.title}`} />
        )}
      </motion.article>
    </div>
  );
}
