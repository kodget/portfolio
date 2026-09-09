"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { NavigationSignal } from "@/components/NavigationSignal";
import { CustomCursor } from "@/components/CustomCursor";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function DistinctPatternsCaseStudy() {
  return (
    <main className="bg-[var(--surface-secondary)] min-h-screen text-[var(--text-primary)] selection:bg-[var(--color-brand)] selection:text-[var(--color-off-white)] relative pb-32 overflow-hidden">
      <CustomCursor />
      <NavigationSignal />
      
      {/* Top Nav */}
      <div className="fixed top-0 w-full z-50 p-6 mix-blend-difference text-white pointer-events-none">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/#work" className="pointer-events-auto magnetic flex items-center gap-2 hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-display font-bold uppercase tracking-widest text-sm">Back</span>
          </Link>
        </div>
      </div>

      <div className="grid-container pt-32 md:pt-48">
        
        {/* 01 - HERO */}
        <header className="mb-32">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6">Distinct Patterns</h1>
            <p className="text-2xl md:text-3xl text-[var(--text-secondary)] font-display max-w-3xl leading-tight mb-16">
              Bringing an Afro-centric fashion brand from idea to digital storefront.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-8 border-y border-[var(--border)]">
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">ROLE</span>
              <span className="text-sm">Project Coordination<br/>Product Design<br/>Frontend Engineering</span>
            </div>
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">CONTRIBUTION</span>
              <span className="text-sm">Product Direction<br/>Design & Frontend Development<br/>Team Coordination & Handoff</span>
            </div>
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">STACK</span>
              <span className="text-sm">Next.js<br/>TypeScript<br/>Tailwind CSS</span>
            </div>
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">LINKS</span>
              <div className="flex flex-col gap-1">
                <Link href="#" className="text-sm flex items-center hover:text-[var(--color-brand)] transition-colors magnetic w-fit">Live Product <ArrowUpRight className="w-3 h-3 ml-1"/></Link>
              </div>
            </div>
          </FadeIn>

          {/* HERO VISUAL */}
          <FadeIn delay={0.4} className="relative w-full aspect-[4/5] md:aspect-[16/10] rounded-2xl md:rounded-[2rem] border border-[var(--border)] overflow-hidden flex items-center justify-center bg-[var(--surface)]">
            <div className="relative w-full h-full">
              <Image 
                src="/images/project-screenshots/distinct-patterns/distinct-patterns.png" 
                alt="Distinct Patterns Interface" 
                fill 
                className="object-cover object-top"
              />
            </div>
          </FadeIn>
        </header>

        {/* 02 - THE PROBLEM */}
        <section className="grid-12 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <span className="micro text-[var(--text-muted)] sticky top-32">01 — THE PROBLEM</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">How do you turn a fashion brand into an experience people want to explore?</h3>
              <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                <p>Distinct Patterns was more than a request to build an online store. The goal was to create a digital presence for a fashion brand that celebrates African fabrics while presenting them through a contemporary lens.</p>
                <p>That meant translating the brand's identity into an experience that could communicate culture, style, quality, and individuality while still making it easy for customers to discover and explore products.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 03 - THE SOLUTION */}
        <section className="grid-12 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <span className="micro text-[var(--text-muted)] sticky top-32">02 — THE SOLUTION</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">I coordinated the journey from concept to storefront.</h3>
              <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                <p>I coordinated Distinct Patterns from the initial idea through product direction, design, development, and handoff.</p>
                <p>I worked with my team to shape the experience and collaborated directly on building the frontend using Next.js, TypeScript, and Tailwind CSS. The result was a complete fashion storefront built around discovery: a strong brand-led homepage, curated collections, new arrivals, product browsing, and supporting experiences for customers to explore the brand.</p>
                <p>Rather than treating design and development as separate phases, I helped keep both aligned around the same product and brand vision.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 04 - THE CHALLENGE */}
        <section className="grid-12 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <span className="micro text-[var(--text-muted)] sticky top-32">03 — THE CHALLENGE</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">The challenge was turning brand identity into interaction.</h3>
              <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                <p>A fashion website can technically function while still feeling completely wrong for the brand.</p>
                <p>The interesting part was deciding how the visual identity, product hierarchy, imagery, typography, and navigation should work together to create the feeling of the brand online. At the same time, the team had to translate those decisions into reusable frontend structures and a responsive experience.</p>
                <p>Coordinating across idea, design, and development taught me to think about the product as one continuous system—not a collection of handoffs.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 05 - OUTCOME */}
        <section className="grid-12 mb-32">
          <div className="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-5">
            <FadeIn>
              <div className="p-8 md:p-12 bg-[var(--surface-secondary)] rounded-2xl border border-[var(--border)]">
                <p className="text-xl md:text-2xl font-display text-[var(--text-primary)] leading-tight mb-6">From a concept to a complete digital brand experience.</p>
                <p className="text-[var(--text-secondary)] text-lg mb-8">
                  Distinct Patterns gave me the opportunity to work across the entire product lifecycle rather than only the frontend layer. I helped coordinate the project from its earliest concept through design, collaborative implementation, and final handoff, while also contributing directly to the frontend.
                </p>
                <div className="pt-8 border-t border-[var(--border)]">
                  <p className="text-sm text-[var(--text-muted)] uppercase tracking-widest mb-4">The takeaway</p>
                  <p className="text-xl font-display text-[var(--color-brand)]">Good execution isn't just about building what was designed. It's about keeping the original idea coherent as it moves from a thought, to a design, to something people can actually use.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Footer Navigation */}
        <section className="border-t border-[var(--border)] py-12 flex justify-between items-center">
          <Link href="/#work" className="magnetic flex items-center gap-2 hover:text-[var(--color-brand)] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-display uppercase tracking-widest text-sm">Back to Work</span>
          </Link>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="magnetic flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
            <span className="font-display uppercase tracking-widest text-sm">Back to Top</span>
          </button>
        </section>
      </div>
    </main>
  );
}
