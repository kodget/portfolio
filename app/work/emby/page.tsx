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

export default function EmbyCaseStudy() {
  return (
    <main className="bg-[var(--surface)] min-h-screen text-[var(--text-primary)] selection:bg-[var(--color-brand)] selection:text-[var(--color-off-white)] relative pb-32 overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6">Emby</h1>
            <p className="text-2xl md:text-3xl text-[var(--text-secondary)] font-display max-w-3xl leading-tight mb-16">
              Building a learning platform around the problems students actually experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-8 border-y border-[var(--border)]">
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">ROLE</span>
              <span className="text-sm">Product Strategy<br/>Product Design<br/>Frontend Engineering</span>
            </div>
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">TIMELINE</span>
              <span className="text-sm">MVP Completed<br/>Pre-launch</span>
            </div>
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">STACK</span>
              <span className="text-sm">Next.js, TypeScript<br/>Tailwind CSS, REST APIs</span>
            </div>
            <div>
              <span className="micro text-[var(--text-muted)] block mb-2">LINKS</span>
              <div className="flex flex-col gap-1">
                <Link href="#" className="text-sm flex items-center hover:text-[var(--color-brand)] transition-colors magnetic w-fit">Live Product <ArrowUpRight className="w-3 h-3 ml-1"/></Link>
                <Link href="#" className="text-sm flex items-center hover:text-[var(--color-brand)] transition-colors magnetic w-fit">View Project <ArrowUpRight className="w-3 h-3 ml-1"/></Link>
              </div>
            </div>
          </FadeIn>

          {/* LAYERED COMPOSITION VISUAL */}
          <FadeIn delay={0.4} className="relative w-full aspect-[4/5] md:aspect-[16/10] bg-[var(--surface-secondary)] rounded-2xl md:rounded-[2rem] border border-[var(--border)] overflow-hidden flex items-center justify-center p-4 md:p-12">
            <div className="relative w-full h-full max-w-5xl flex flex-col items-center justify-center">
              
              {/* Back Layer (Flashcards & Quiz) */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
                className="absolute top-0 md:top-10 w-[80%] md:w-[60%] aspect-video bg-[var(--surface)] shadow-2xl rounded-xl border border-[var(--border)] overflow-hidden z-10 flex flex-col"
              >
                <div className="h-8 bg-[var(--border)] w-full flex items-center px-4"><div className="flex gap-2"><div className="w-2 h-2 rounded-full bg-red-400"/><div className="w-2 h-2 rounded-full bg-yellow-400"/><div className="w-2 h-2 rounded-full bg-green-400"/></div></div>
                <div className="flex-1 flex items-center justify-center bg-black/5 text-[var(--text-secondary)] font-display tracking-widest text-sm uppercase">FLASHCARDS & QUIZ</div>
              </motion.div>

              {/* Main Layer (EMBY) */}
              <motion.div 
                initial={{ y: 100, scale: 0.95, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 50 }}
                className="relative w-[95%] md:w-[80%] aspect-square bg-[var(--surface)] shadow-2xl shadow-black/20 rounded-xl md:rounded-2xl border border-[var(--border)] overflow-hidden z-20"
              >
                <Image 
                  src="/images/project-screenshots/emby/emby.png" 
                  alt="Emby Interface" 
                  fill 
                  className="object-cover object-top"
                />
              </motion.div>

              {/* Front Layer (AI Assistant) */}
              <motion.div 
                initial={{ y: 50, x: 50, opacity: 0 }} animate={{ y: 0, x: 0, opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-0 md:-bottom-10 right-0 md:right-10 w-[60%] md:w-[40%] aspect-[3/2] bg-[var(--surface)] shadow-2xl rounded-xl border border-[var(--border)] overflow-hidden z-30 flex flex-col"
              >
                <div className="h-8 bg-[var(--border)] w-full flex items-center px-4"><span className="text-xs font-medium text-[var(--text-secondary)]">AI ASSISTANT</span></div>
                <div className="flex-1 p-4 bg-gradient-to-b from-[var(--surface)] to-[var(--surface-secondary)] border-t border-[var(--border)]">
                  <div className="w-3/4 h-2 bg-[var(--border)] rounded mb-3"></div>
                  <div className="w-full h-2 bg-[var(--border)] rounded mb-3"></div>
                  <div className="w-5/6 h-2 bg-[var(--border)] rounded"></div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </header>

        {/* 02 - THE CONTEXT */}
        <section className="grid-12 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <span className="micro text-[var(--text-muted)] sticky top-32">02 — THE PROBLEM</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">Medical school has endless content, but a severe lack of feedback.</h3>
              <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                <p>Students can spend hours reading lecture slides and textbooks, but have almost zero visibility into their actual weaknesses until a final exam exposes them.</p>
                <p>When I talked with my classmates, a pattern emerged: they didn't need another place to store PDFs. They needed a better feedback loop to test what they actually knew.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 03 - THE SOLUTION */}
        <section className="grid-12 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <span className="micro text-[var(--text-muted)] sticky top-32">03 — THE SOLUTION</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">Building a continuous feedback loop.</h3>
              <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                <p>I led the product strategy, design, and frontend engineering to build Emby—a platform focused entirely on turning study material into active practice.</p>
                <p>The core interface was designed to support a single, connected flow:</p>
              </div>
              
              <div className="flex flex-wrap gap-4 py-8 text-sm font-display tracking-widest text-[var(--text-primary)] font-semibold border-y border-[var(--border)]">
                <span>STUDY</span> <span className="text-[var(--text-muted)]">→</span>
                <span>TEST KNOWLEDGE</span> <span className="text-[var(--text-muted)]">→</span>
                <span>DISCOVER GAPS</span> <span className="text-[var(--text-muted)]">→</span>
                <span className="text-[var(--color-brand)]">REINFORCE</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 04 - THE CHALLENGE */}
        <section className="grid-12 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <span className="micro text-[var(--text-muted)] sticky top-32">04 — THE CHALLENGE</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">Translating noise into a focused component architecture.</h3>
              <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed">
                <p>The hardest part of building Emby wasn't writing the Next.js or Tailwind code. It was deciding what <em>not</em> to build.</p>
                <p>User research generates a massive wishlist. I had to filter the noise and translate raw requirements into a maintainable frontend system. Instead of treating every request as a new screen, I built a modular component architecture that prioritized exactly three things:</p>
                
                <ul className="space-y-4 py-6 font-display tracking-widest text-sm font-semibold text-[var(--text-primary)]">
                  <li className="flex justify-between items-center border-b border-[var(--border)] pb-2"><span>1. WHERE AM I?</span></li>
                  <li className="flex justify-between items-center border-b border-[var(--border)] pb-2"><span>2. WHAT CAN I DO HERE?</span></li>
                  <li className="flex justify-between items-center border-b border-[var(--border)] pb-2 text-[var(--color-brand)]"><span>3. WHAT SHOULD I DO NEXT?</span></li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 05 - OUTCOME */}
        <section className="grid-12 mb-32">
          <div className="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-5">
            <FadeIn>
              <div className="p-8 md:p-12 bg-[var(--surface-secondary)] rounded-2xl border border-[var(--border)]">
                <p className="text-xl md:text-2xl font-display text-[var(--text-primary)] leading-tight mb-6">Emby is currently pre-launch with an active waitlist.</p>
                <p className="text-[var(--text-secondary)] text-lg mb-8">
                  Building it reinforced a critical lesson: a frontend interface doesn't exist independently of the system behind it.
                </p>
                <div className="pt-8 border-t border-[var(--border)]">
                  <p className="text-sm text-[var(--text-muted)] uppercase tracking-widest mb-4">The takeaway</p>
                  <p className="text-xl font-display text-[var(--color-brand)]">Good frontend engineering isn't just about building screens that look good—it's about shaping systems that have a reason to exist.</p>
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
