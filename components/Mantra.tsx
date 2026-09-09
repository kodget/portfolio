"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Mantra() {
  return (
    <section className="bg-[var(--color-ink)] text-[var(--color-off-white)] py-32 md:py-48 flex flex-col justify-between min-h-screen">
      <div className="grid-container flex-1 flex flex-col justify-center">
        
        <motion.div
          className="max-w-[1400px] mx-auto w-full group cursor-default relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          {/* Subtle glow behind text on hover */}
          <div className="absolute inset-0 bg-[var(--color-brand)] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700" />
          
          <h2 className="text-[12vw] md:text-[8vw] font-display font-bold leading-[0.85] tracking-tighter text-[var(--color-cream-soft)]/90 group-hover:text-[var(--color-white)] transition-colors duration-700 text-center">
            I BUILD INTERFACES THAT MAKE COMPLEX SYSTEMS FEEL SIMPLE.
          </h2>
        </motion.div>
        
      </div>

      <footer className="grid-container pt-32 pb-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-slate)] pt-8">
          <div className="flex items-center space-x-8 mb-8 md:mb-0">
            <a href="mailto:hello@example.com" className="micro text-[var(--color-slate)] hover:text-[var(--color-brand)] transition-colors flex items-center">
              EMAIL <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
            <a href="https://linkedin.com" className="micro text-[var(--color-slate)] hover:text-[var(--color-brand)] transition-colors flex items-center">
              LINKEDIN <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
            <a href="https://github.com" className="micro text-[var(--color-slate)] hover:text-[var(--color-brand)] transition-colors flex items-center">
              GITHUB <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
          </div>
          
          <div className="micro text-[var(--color-slate)] text-center md:text-right">
            © {new Date().getFullYear()} MUHAMMAD. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </section>
  );
}
