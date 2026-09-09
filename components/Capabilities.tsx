"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Layout, PenTool, Server, Smartphone, GitBranch, Triangle } from "lucide-react";
import { GithubIcon } from "./Hero";

type Skill = {
  id: string;
  name: string;
  years: string;
  level: string;
  description: string;
  icon: any;
  position: string; // Tailwind absolute classes
};

const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    years: "03 years",
    level: "Advanced",
    description: "I use React to build complex interactive product interfaces.",
    icon: Layout,
    position: "bottom-[30%] right-[10%]"
  },
  {
    id: "nextjs",
    name: "Next.js",
    years: "02 years",
    level: "Advanced",
    description: "Building production-ready, server-rendered applications and API routes.",
    icon: Layout,
    position: "top-[10%] left-[10%]"
  },
  {
    id: "reactnative",
    name: "React Native",
    years: "01 year",
    level: "Intermediate",
    description: "Building cross-platform mobile experiences.",
    icon: Smartphone,
    position: "bottom-[10%] right-[30%]"
  },
  {
    id: "typescript",
    name: "TypeScript",
    years: "01 year",
    level: "Advanced",
    description: "Writing strictly typed, scalable frontend architecture.",
    icon: Code2,
    position: "top-[40%] left-[30%]"
  },
  {
    id: "javascript",
    name: "JavaScript",
    years: "04 years",
    level: "Advanced",
    description: "Deep understanding of core JS and async programming.",
    icon: Code2,
    position: "top-[25%] right-[25%]"
  },
  {
    id: "graphql",
    name: "GraphQL",
    years: "01 year",
    level: "Intermediate",
    description: "Designing efficient data fetching APIs and schemas.",
    icon: Database,
    position: "top-[15%] right-[15%]"
  },
  {
    id: "rest",
    name: "REST API",
    years: "03 years",
    level: "Advanced",
    description: "Integrating and consuming traditional backend services.",
    icon: Server,
    position: "bottom-[15%] left-[40%]"
  },
  {
    id: "figma",
    name: "Figma",
    years: "01 year",
    level: "Intermediate",
    description: "Translating wireframes into high-fidelity component libraries.",
    icon: PenTool,
    position: "bottom-[40%] left-[5%]"
  },
  {
    id: "sass",
    name: "Sass",
    years: "03 years",
    level: "Advanced",
    description: "Writing modular and maintainable CSS pre-processor styling.",
    icon: PenTool,
    position: "bottom-[20%] left-[20%]"
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    years: "03 years",
    level: "Advanced",
    description: "Rapidly building custom user interfaces with utility classes.",
    icon: PenTool,
    position: "top-[30%] left-[40%]"
  },
  {
    id: "git",
    name: "Git",
    years: "04 years",
    level: "Advanced",
    description: "Version control, branching strategies, and collaborative workflows.",
    icon: GitBranch,
    position: "top-[45%] right-[35%]"
  },
  {
    id: "github",
    name: "GitHub",
    years: "04 years",
    level: "Advanced",
    description: "Source code management and CI/CD.",
    icon: GithubIcon,
    position: "top-[10%] right-[40%]"
  },
  {
    id: "vercel",
    name: "Vercel",
    years: "02 years",
    level: "Intermediate",
    description: "Deploying and managing frontend infrastructure.",
    icon: Triangle,
    position: "bottom-[35%] left-[35%]"
  },
  {
    id: "threejs",
    name: "three.js",
    years: "01 year",
    level: "Intermediate",
    description: "Creating 3D web graphics and interactive animations.",
    icon: Layout,
    position: "bottom-[5%] right-[5%]"
  }
];

export function Capabilities() {
  const [lockedId, setLockedId] = useState<string | null>(null);

  return (
    <section id="capabilities" className="grid-container py-16 md:py-24">
      <div className="mb-24">
        <span className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-4 block">
          05 / TECHNICAL CAPABILITY
        </span>
        <h2 className="display-m text-[var(--text-primary)] max-w-2xl">
          The tools are only useful when you know what to do with them.
        </h2>
      </div>

      {/* The Chaotic Field */}
      <div className="relative w-full h-[600px] md:h-[800px] border border-[var(--border)] bg-[var(--surface-secondary)]/30 rounded-xl overflow-hidden mb-16 md:mb-24">
        {skills.map((skill) => (
          <ChaoticBox 
            key={skill.id} 
            skill={skill} 
            isLocked={lockedId === skill.id}
            onToggleLock={() => setLockedId(lockedId === skill.id ? null : skill.id)}
          />
        ))}
      </div>

      {/* Structured Lists */}
      <div className="grid-12">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 mb-12">
          <h4 className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-6">FRAMEWORKS</h4>
          <ul className="space-y-3 body-base text-[var(--text-primary)] font-medium">
            <li>React</li>
            <li>Next.js</li>
            <li>React Native</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3 mb-12">
          <h4 className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-6">LANGUAGES</h4>
          <ul className="space-y-3 body-base text-[var(--text-primary)] font-medium">
            <li>TypeScript</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3 mb-12">
          <h4 className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-6">DATA & API</h4>
          <ul className="space-y-3 body-base text-[var(--text-primary)] font-medium">
            <li>GraphQL</li>
            <li>REST API</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3 mb-12">
          <h4 className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-6">DESIGN & STYLING</h4>
          <ul className="space-y-3 body-base text-[var(--text-primary)] font-medium">
            <li>Figma</li>
            <li>Sass</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3 mb-12">
          <h4 className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-6">DEVOPS & TOOLS</h4>
          <ul className="space-y-3 body-base text-[var(--text-primary)] font-medium">
            <li>Git</li>
            <li>GitHub</li>
            <li>Vercel</li>
            <li>three.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ChaoticBox({ skill, isLocked, onToggleLock }: { skill: Skill, isLocked: boolean, onToggleLock: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;
  
  const isActive = isHovered || isLocked;

  return (
    <motion.div
      className={`absolute ${skill.position} cursor-pointer z-10`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onToggleLock}
      animate={{ 
        zIndex: isActive ? 50 : 10 
      }}
    >
      <motion.div
        className="relative flex flex-col items-start bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-sm"
        initial={false}
        animate={{
          width: isActive ? 280 : "auto",
          height: isActive ? 200 : "auto",
          padding: isActive ? "24px" : "12px 20px",
          backgroundColor: isActive ? "var(--color-brand)" : "var(--surface)",
          borderColor: isActive ? "var(--color-brand)" : "var(--border)",
          color: isActive ? "var(--color-white)" : "var(--text-primary)",
          borderRadius: isActive ? "12px" : "6px",
          scale: isActive ? 1.05 : 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="flex items-center space-x-3 w-full">
          {isActive && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="shrink-0">
              <Icon className="w-6 h-6 text-[var(--color-cream)]" />
            </motion.div>
          )}
          {!isActive && <span className="w-2 h-2 rounded-sm bg-[var(--text-primary)] mr-2 shrink-0" />}
          
          <span className="font-display font-medium text-lg whitespace-nowrap">
            {skill.name}
          </span>
        </div>

        {isActive && (
          <motion.div 
            className="mt-6 flex flex-col w-full h-full justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex justify-between items-center micro text-[var(--color-cream-soft)] mb-2">
              <span>{skill.years}</span>
              <span>{skill.level}</span>
            </div>
            
            <div className="w-full h-1 bg-black/20 rounded-full mb-4 overflow-hidden">
              <div 
                className="h-full bg-[var(--color-cream)]" 
                style={{ width: skill.level === 'Advanced' ? '90%' : '60%' }}
              />
            </div>

            <p className="micro text-[var(--color-off-white)] leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
