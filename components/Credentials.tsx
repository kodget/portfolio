"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const credentials = [
  {
    year: "2026",
    title: "ALX ProDev",
    subtitle: "Frontend Engineering",
    link: "https://example.com/alx-prodev"
  },
  {
    year: "2026",
    title: "ALX Professional Foundations",
    subtitle: "",
    link: "https://example.com/alx-foundations"
  },
  {
    year: "2026",
    title: "McKinsey Forward",
    subtitle: "",
    link: "https://example.com/mckinsey"
  }
];

export function Credentials() {
  return (
    <section id="credentials" className="grid-container py-32 md:py-48">
      <div className="mb-24">
        <span className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-4 block">
          06 / CREDENTIALS
        </span>
        <h2 className="display-m text-[var(--text-primary)] max-w-2xl">
          The formal stuff.
        </h2>
      </div>

      <div className="flex flex-col space-y-0 border-t border-[var(--border)]">
        {credentials.map((cred, i) => (
          <CredentialRow key={i} cred={cred} index={i} />
        ))}
      </div>
    </section>
  );
}

function CredentialRow({ cred, index }: { cred: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group flex flex-col md:flex-row md:items-center py-12 border-b border-[var(--border)] relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="md:w-32 mb-4 md:mb-0">
        <span className="font-display text-[var(--text-secondary)]">{cred.year}</span>
      </div>
      
      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-col">
          <h3 className="h4 text-[var(--text-primary)] group-hover:text-brand transition-colors duration-300">
            {cred.title}
          </h3>
          {cred.subtitle && (
            <span className="body-small text-[var(--text-secondary)] mt-1">{cred.subtitle}</span>
          )}
        </div>
        
        <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href={cred.link} className="flex items-center text-[var(--text-primary)] hover:text-brand transition-colors">
            <span className="micro font-bold tracking-widest uppercase mr-2">CERTIFICATE</span>
            <span className="micro tracking-widest flex items-center">
              ↗ VERIFY
            </span>
          </Link>
        </div>
      </div>
      
      {/* Background slide effect */}
      <div 
        className={`absolute inset-0 bg-[var(--surface-secondary)]/50 -z-10 transition-transform duration-500 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}
      />
    </motion.div>
  );
}
