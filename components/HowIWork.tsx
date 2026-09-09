"use client";

import { motion } from "framer-motion";

const journeySteps = [
  {
    title: "Understand the Goal",
    description: "Every great system starts with clarity. I dive deep into the business objectives, user needs, and the core problem we're trying to solve.",
  },
  {
    title: "Research and Design",
    description: "Exploring the problem space, looking at prior art, and designing interfaces that balance aesthetics with usability.",
  },
  {
    title: "Perfectly Translate Design to UI",
    description: "I pride myself on pixel-perfect execution, ensuring the frontend accurately reflects the intended design without compromising on responsiveness.",
  },
  {
    title: "Building the Frontend Architecture",
    description: "Constructing scalable, maintainable, and performant codebases using modern tools like React, Next.js, and TypeScript.",
  },
  {
    title: "Human-Centred Design",
    description: "Continuously iterating based on how real people use the product, keeping accessibility and performance at the forefront.",
  },
];

export function HowIWork() {
  return (
    <section id="how-i-work" className="grid-container py-16 md:py-24 relative overflow-hidden">
      <div className="mb-24">
        <span className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-4 block">
          08 / HOW I WORK
        </span>
        <h2 className="display-m text-[var(--text-primary)] max-w-2xl">
          The typical journey of building frontend systems.
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--border)] md:-translate-x-1/2" />

        <div className="flex flex-col space-y-16">
          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Node Marker */}
                <div className="absolute left-[15px] md:left-1/2 top-2 w-[11px] h-[11px] bg-[var(--surface)] border-2 border-[var(--color-brand)] rounded-full -translate-x-[5px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,104,112,0.5)]" />

                <div className={`pl-12 md:pl-0 md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <h3 className="font-display font-medium text-xl md:text-2xl text-[var(--text-primary)] mb-3">
                    <span className="text-[var(--color-brand)] mr-3 opacity-60">0{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="body-base text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
