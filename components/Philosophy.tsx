"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section id="about" className="grid-container py-32 md:py-48 flex flex-col justify-center">
      {/* Thesis Statement */}
      <div className="max-w-[1200px] mb-24">
        <motion.h2 
          className="display-l text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          I build interfaces that make complex systems feel simple.
        </motion.h2>
        
        <motion.p 
          className="body-large text-[var(--text-secondary)] max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Frontend engineer focused on building reliable, high-performance interfaces for ambitious products.
        </motion.p>
      </div>

      {/* Evidence Rail */}
      <motion.div 
        className="w-full border-t border-b border-[var(--border)] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1 }}
      >
        <div className="flex w-full group py-12">
          {/* Duplicated for seamless marquee effect */}
          {[1, 2].map((groupIndex) => (
            <div 
              key={groupIndex}
              className="flex shrink-0 min-w-full justify-around items-center animate-[marquee_20s_linear_infinite] group-hover:[animation-play-state:paused]"
            >
              <EvidenceItem number="05" text="HACKATHONS WON" />
              <EvidenceItem number="04" text="YEARS BUILDING" />
              <EvidenceItem number="30+" text="PRODUCT EXPERIMENTS" />
              <EvidenceItem number="07" text="INDUSTRIES TOUCHED" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Industries */}
      <motion.div 
        className="mt-8 flex flex-wrap justify-center md:justify-between items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {["E-COMMERCE", "HEALTHTECH", "FAITH", "GOVTECH", "EDUTECH", "FINTECH"].map((industry) => (
          <span key={industry} className="micro text-[var(--text-muted)] tracking-widest uppercase">
            {industry}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function EvidenceItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-12 md:px-24">
      <span className="display-m text-[var(--text-primary)] mb-2 leading-none">
        {number}
      </span>
      <span className="micro text-[var(--text-secondary)] text-center tracking-widest max-w-[120px]">
        {text}
      </span>
    </div>
  );
}
