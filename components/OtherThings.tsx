"use client";

import { motion } from "framer-motion";
import { BookOpen, Camera, Edit3 } from "lucide-react";

export function OtherThings() {
  return (
    <section id="other" className="grid-container py-32 md:py-48 overflow-hidden bg-[var(--surface-secondary)]/20">
      <div className="mb-24">
        <span className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-4 block">
          08 / OTHER THINGS
        </span>
        <h2 className="display-m text-[var(--text-primary)] max-w-2xl">
          Life outside the IDE.
        </h2>
      </div>

      <div className="relative min-h-[600px] w-full flex flex-col md:block">
        
        {/* Item 1: Writing */}
        <motion.div 
          className="md:absolute md:top-[10%] md:left-[10%] bg-[var(--color-white)] border border-[var(--color-mist)] shadow-sm p-6 max-w-xs rotate-[-2deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <Edit3 className="w-5 h-5 text-[var(--color-brand)]" />
            <span className="font-display font-medium text-[var(--text-primary)]">Writing</span>
          </div>
          <p className="body-small text-[var(--text-secondary)] italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </motion.div>

        {/* Item 2: Running */}
        <motion.div 
          className="md:absolute md:top-[30%] md:right-[15%] bg-[var(--color-cream-soft)] border border-[var(--border)] shadow-sm p-4 pb-12 max-w-[240px] rotate-[3deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-square bg-[var(--surface-secondary)] rounded-sm mb-4 flex items-center justify-center">
            <Camera className="w-8 h-8 text-[var(--text-muted)] opacity-50" />
          </div>
          <span className="font-display font-medium text-[var(--text-primary)] block text-center">5K Mornings</span>
        </motion.div>

        {/* Item 3: Reading */}
        <motion.div 
          className="md:absolute md:bottom-[10%] md:left-[35%] bg-[var(--color-white)] border-l-4 border-[var(--color-brand)] shadow-sm p-6 max-w-sm rotate-[-1deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="w-5 h-5 text-[var(--color-brand)]" />
            <span className="font-display font-medium text-[var(--text-primary)]">Currently Reading</span>
          </div>
          <ul className="space-y-2 body-small text-[var(--text-secondary)]">
            <li>The Design of Everyday Things</li>
            <li>Thinking, Fast and Slow</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
