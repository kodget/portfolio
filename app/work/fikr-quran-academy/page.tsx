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

export default function FikrQuranAcademyCaseStudy() {
  return (
    <main className="bg-[#1A2E35] min-h-screen text-[#F4F4F5] selection:bg-[var(--color-brand)] selection:text-[var(--color-off-white)] relative pb-32 overflow-hidden">
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6">Fikr Quran Academy</h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-display max-w-3xl leading-tight mb-16">
              Turning a Qur'an education service into a complete digital experience.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-8 border-y border-white/10">
            <div>
              <span className="micro text-gray-500 block mb-2">ROLE</span>
              <span className="text-sm">Product Design<br/>Frontend Engineering<br/>Full Product Ownership</span>
            </div>
            <div>
              <span className="micro text-gray-500 block mb-2">CONTRIBUTION</span>
              <span className="text-sm">Product Direction<br/>UX/UI Design<br/>Frontend Development<br/>Responsive Design & Deployment</span>
            </div>
            <div>
              <span className="micro text-gray-500 block mb-2">SCOPE</span>
              <span className="text-sm">Designed and built<br/>the entire application.</span>
            </div>
            <div>
              <span className="micro text-gray-500 block mb-2">LINKS</span>
              <div className="flex flex-col gap-1">
                <Link href="#" className="text-sm flex items-center hover:text-[var(--color-brand)] transition-colors magnetic w-fit">Live Product <ArrowUpRight className="w-3 h-3 ml-1"/></Link>
              </div>
            </div>
          </FadeIn>

          {/* HERO VISUAL */}
          <FadeIn delay={0.4} className="relative w-full aspect-[4/5] md:aspect-[16/10] rounded-2xl md:rounded-[2rem] border border-white/10 overflow-hidden flex items-center justify-center bg-[#112025]">
            <div className="relative w-full h-full">
              <Image 
                src="/images/project-screenshots/fikr-quran-academy/fikr-quran-academy.png" 
                alt="Fikr Quran Academy Interface" 
                fill 
                className="object-cover object-top"
              />
            </div>
          </FadeIn>
        </header>

        {/* 02 - THE PROBLEM */}
        <section className="grid-12 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <span className="micro text-gray-500 sticky top-32">01 — THE PROBLEM</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">A good learning service still needs a good digital experience.</h3>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>Fikr Quran Academy provides personalised Qur'an education, but communicating that experience online requires more than simply putting information on a website.</p>
                <p>Prospective students and parents need to understand what is offered, find the right programme, evaluate the learning process, understand the commitment, and know exactly how to get started.</p>
                <p>The challenge was turning all of that into a single experience that felt trustworthy, clear, and easy to navigate.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 03 - THE SOLUTION */}
        <section className="grid-12 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <span className="micro text-gray-500 sticky top-32">02 — THE SOLUTION</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">I designed and built the entire experience from the ground up.</h3>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-8">
                <p>I took Fikr Quran Academy from concept to a complete web experience, owning the product and frontend across the project. I structured the information architecture, designed the interface, and built the application from the ground up.</p>
                <p>The experience brings together:<br/>Academy positioning → Programmes → Admissions → Pricing → FAQ → Enrolment → Contact</p>
                <p>The result is a product that doesn't simply describe the academy—it guides a prospective student from discovering Fikr to understanding it to taking action.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 04 - THE CHALLENGE */}
        <section className="grid-12 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <span className="micro text-gray-500 sticky top-32">03 — THE CHALLENGE</span>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight mb-8">Making a lot of information feel simple.</h3>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>An online academy has a surprising amount of information to communicate: programmes, curricula, schedules, pricing, admissions, expectations, FAQs, and contact pathways.</p>
                <p>The challenge was organising all of this without making the experience feel like a long information document.</p>
                <p>I focused on hierarchy, progressive disclosure, clear calls to action, and consistent visual patterns so users could quickly understand: What is Fikr? Is it right for me? How does it work? How much does it cost? How do I begin?</p>
                <p>That meant treating the interface not just as a collection of sections, but as a guided journey toward enrolment.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 05 - OUTCOME */}
        <section className="grid-12 mb-32">
          <div className="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-5">
            <FadeIn>
              <div className="p-8 md:p-12 bg-[#112025] rounded-2xl border border-white/10">
                <p className="text-xl md:text-2xl font-display text-white leading-tight mb-6">One person. One product. End to end.</p>
                <p className="text-gray-400 text-lg mb-8">
                  Fikr Quran Academy gave me the opportunity to own the complete digital product rather than a single layer of it. I was responsible for taking the idea through product structure, interface design, implementation, refinement, and deployment, building the entire experience myself.
                </p>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">The takeaway</p>
                  <p className="text-xl font-display text-[var(--color-brand)]">The best frontend work happens when you understand the product deeply enough to make good decisions before you start writing the code.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Footer Navigation */}
        <section className="border-t border-white/10 py-12 flex justify-between items-center">
          <Link href="/#work" className="magnetic flex items-center gap-2 hover:text-[var(--color-brand)] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-display uppercase tracking-widest text-sm">Back to Work</span>
          </Link>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="magnetic flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
            <span className="font-display uppercase tracking-widest text-sm">Back to Top</span>
          </button>
        </section>
      </div>
    </main>
  );
}
