"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "EMBY",
    description: "Learning infrastructure for medical students.",
    tags: ["Next.js", "TypeScript", "AI"],
    personality: "technical / educational / dense",
    theme: "bg-[var(--surface-secondary)]"
  },
  {
    id: "02",
    title: "HIDAAYAH",
    description: "Software designed to help Muslims connect deeper with the Qur'an.",
    tags: ["React Native", "Expo", "SQLite"],
    personality: "quiet / contemplative / elegant",
    theme: "bg-[var(--color-cream-soft)]"
  },
  {
    id: "03",
    title: "MAMASAFE",
    description: "Medication safety and clinical decision support.",
    tags: ["PostgreSQL", "Next.js", "Healthcare API"],
    personality: "clinical / precise / trustworthy",
    theme: "bg-[var(--color-brand-soft)]/10"
  },
  {
    id: "04",
    title: "DISTINCT PATTERNS",
    description: "E-commerce infrastructure for men's fashion.",
    tags: ["Shopify", "React", "Tailwind"],
    personality: "editorial / commercial / expressive",
    theme: "bg-[var(--surface-secondary)]"
  },
  {
    id: "05",
    title: "FIKR QURAN ACADEMY",
    description: "A learning platform for local and international Qur'an students.",
    tags: ["Next.js", "Vercel", "Stripe"],
    personality: "educational / human / community-driven",
    theme: "bg-[var(--color-cream-soft)]"
  }
];

export function SelectedWork() {
  return (
    <section id="work" className="grid-container py-32 md:py-48">
      <div className="mb-24">
        <span className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-4 block">
          03 / SELECTED WORK
        </span>
        <h2 className="display-m text-[var(--text-primary)] max-w-2xl">
          Proof.
        </h2>
      </div>

      <div className="flex flex-col space-y-32">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article 
      className="group relative border-t border-[var(--border)] pt-8 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Header Row */}
      <div className="flex justify-between items-baseline mb-8">
        <div className="flex items-baseline space-x-6 md:space-x-12">
          <motion.span 
            className="font-display text-[var(--text-secondary)] text-xl md:text-3xl"
            animate={{ 
              color: isHovered ? "var(--color-brand)" : "var(--text-secondary)",
              y: isHovered ? -4 : 0
            }}
          >
            {project.id}
          </motion.span>
          <h3 className="display-m text-[var(--text-primary)]">{project.title}</h3>
        </div>
        <motion.div 
          animate={{ rotate: isHovered ? 45 : 0, color: isHovered ? "var(--color-brand)" : "var(--text-primary)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ArrowUpRight className="w-8 h-8" />
        </motion.div>
      </div>

      {/* Image & Details */}
      <div className="grid-12">
        {/* Large Product Visual */}
        <div className="col-span-12 lg:col-span-8 relative">
          <motion.div 
            className={`w-full aspect-[16/9] ${project.theme} rounded-lg overflow-hidden border border-[var(--border)] relative`}
            animate={{ 
              filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Geometric Teal Element (Moves on hover) */}
            <motion.div 
              className="absolute w-16 h-16 bg-brand opacity-0 mix-blend-multiply"
              initial={{ x: -100, y: -100, rotate: 0 }}
              animate={{ 
                opacity: isHovered ? 0.2 : 0,
                x: isHovered ? 40 : -100,
                y: isHovered ? 40 : -100,
                rotate: isHovered ? 45 : 0
              }}
              transition={{ duration: 0.8, type: "spring" }}
            />
          </motion.div>
        </div>

        {/* Hover Metadata (Slides in) */}
        <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0 flex flex-col justify-end lg:pl-12">
          <p className="body-large text-[var(--text-primary)] mb-8">
            {project.description}
          </p>

          <div className="overflow-hidden">
            <motion.div 
              className="flex flex-col space-y-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: isHovered ? 0 : 50, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="micro px-3 py-1 border border-[var(--border)] rounded-full text-[var(--text-secondary)]">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="micro text-[var(--text-muted)] italic">
                {project.personality}
              </span>
              <div className="pt-4">
                <span className="micro font-bold text-brand uppercase tracking-widest flex items-center">
                  VIEW CASE STUDY <ArrowUpRight className="w-3 h-3 ml-2" />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
