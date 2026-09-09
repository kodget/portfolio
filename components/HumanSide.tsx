"use client";

import { motion } from "framer-motion";

const values = [
  { id: "01", text: "PROBLEM SOLVING", span: "col-span-12 md:col-span-8" },
  { id: "02", text: "ADAPTABILITY", span: "col-span-12 md:col-span-4" },
  { id: "03", text: "COLLABORATION", span: "col-span-12 md:col-span-4" },
  { id: "04", text: "EFFECTIVE COMMUNICATION", span: "col-span-12 md:col-span-8" },
  { id: "05", text: "GOAL-ORIENTED", span: "col-span-12 md:col-span-4" },
  { id: "06", text: "CRITICAL THINKING", span: "col-span-12 md:col-span-4" },
  { id: "07", text: "RELATIONSHIPS", span: "col-span-12 md:col-span-4" },
];

export function HumanSide() {
  return (
    <section id="capabilities" className="grid-container py-16 md:py-24">
      <div className="mb-16 md:mb-24">
        <span className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-4 block">
          07 / PERSONAL AND PROFESSIONAL VALUES
        </span>
        <h2 className="display-m text-[var(--text-primary)] max-w-2xl">
          The foundation of how I operate.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {values.map((val, i) => (
          <motion.div
            key={val.id}
            className={`${val.span} group border border-[var(--border)] bg-[var(--surface-secondary)]/10 hover:bg-[var(--color-brand)] transition-colors duration-500 p-8 md:p-12 min-h-[160px] md:min-h-[200px] flex flex-col justify-between`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <span className="micro text-[var(--text-muted)] group-hover:text-[var(--color-brand-soft)] transition-colors duration-500">
              {val.id}
            </span>
            <h3 className="h3 text-[var(--text-primary)] group-hover:text-[var(--color-white)] transition-colors duration-500 mt-8">
              {val.text}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
