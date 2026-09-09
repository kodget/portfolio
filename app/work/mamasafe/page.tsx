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

export default function MamaSafeCaseStudy() {
  return (
    <main className="bg-[var(--color-brand-soft)]/10 min-h-screen text-[var(--text-primary)] selection:bg-[var(--color-brand)] selection:text-[var(--color-off-white)] relative pb-32 overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6">MamaSafe</h1>
            <p className="text-2xl md:text-3xl text-[var(--text-secondary)] font-display max-w-3xl leading-tight mb-16">
              Building maternal-health technology with both sides of the problem in mind.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-8 border-y border-[var(--border)]">
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">ROLE</span>
              <span className="text-sm">Frontend Engineering<br/>Product Design<br/>Medical Domain Expertise</span>
            </div>
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">CONTRIBUTION</span>
              <span className="text-sm">Frontend Development<br/>Product Refinement<br/>Medical/Clinical Input</span>
            </div>
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">TEAM</span>
              <span className="text-sm">Multidisciplinary<br/>healthtech team</span>
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
                src="/images/project-screenshots/mamasafe/mamasafe.jpeg" 
                alt="MamaSafe Interface" 
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
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">Maternal healthcare decisions don't happen in isolation.</h3>
              <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                <p>In maternal care, seemingly simple decisions can depend on clinical context, medication safety, patient history, timing, and access to reliable information.</p>
                <p>We wanted to explore how technology could help make these decisions safer and more accessible, particularly in settings where healthcare resources can be limited.</p>
                <p>As a medical student working on the product, I was able to contribute not only from an engineering perspective, but from an understanding of how these problems appear within healthcare itself. That shaped the way we approached the product from the beginning.</p>
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
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">Designing the product with both the system and the patient in mind.</h3>
              <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                <p>I contributed to building MamaSafe's frontend while also helping refine the product idea, user experience, and feature direction. My medical background became part of the product-development process.</p>
                <p>It helped us question assumptions, identify clinically important details, and make product decisions that might not be obvious from the interface alone.</p>
                <p>The result was a healthtech product where the technology wasn't designed independently of the healthcare problem. The clinical context helped shape the technology.</p>
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
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">The hardest decisions were the ones users couldn't see.</h3>
              <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                <p>Building MamaSafe wasn't only about making the interface clear. Some of the most important decisions happened beneath the surface: determining what information mattered, how clinical concepts should be represented, what the system should ask or surface, and where technical choices could affect the quality of the healthcare experience.</p>
                <p>My cross-domain perspective allowed me to contribute to those decisions from both sides. I could think about what is technically possible, and simultaneously what actually makes sense in a clinical context.</p>
                <p>That intersection became one of my biggest contributions to the product.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 05 - OUTCOME */}
        <section className="grid-12 mb-32">
          <div className="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-5">
            <FadeIn>
              <div className="p-8 md:p-12 bg-[var(--surface-secondary)] rounded-2xl border border-[var(--border)]">
                <p className="text-xl md:text-2xl font-display text-[var(--text-primary)] leading-tight mb-6">MamaSafe showed me the power of being able to speak two languages: technology and healthcare.</p>
                <p className="text-[var(--text-secondary)] text-lg mb-8">
                  I contributed to turning the product idea into a working frontend while helping the team refine the experience through a medical lens. The project ultimately went beyond a prototype exercise and became a recognised healthtech solution, winning the Harvard Chan Global Health Hackathon 2026.
                </p>
                <div className="pt-8 border-t border-[var(--border)]">
                  <p className="text-sm text-[var(--text-muted)] uppercase tracking-widest mb-4">The takeaway</p>
                  <p className="text-xl font-display text-[var(--color-brand)]">The strongest healthcare technology isn't created by adding technology to healthcare. It is created when technology is shaped by a deep understanding of the clinical reality it serves.</p>
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
