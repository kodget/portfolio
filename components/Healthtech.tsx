"use client";

import { motion } from "framer-motion";
import { Stethoscope, Syringe, Pill, HeartPulse, Microscope, TestTube, Cross, Activity, ClipboardPlus, FlaskConical, Dna, Bandage, Bone, Ambulance } from "lucide-react";

export function Healthtech() {
  return (
    <section id="healthcare" className="relative bg-[var(--color-cream)] overflow-hidden py-16 md:py-24 min-h-screen">
      
      {/* Abstract Clinical Interface Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(var(--color-brand-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-soft) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* ECG-like trace and measurement lines mock */}
        <svg className="absolute w-full h-full stroke-brand-soft fill-none opacity-50" preserveAspectRatio="none">
          <path d="M0,200 L100,200 L120,150 L140,250 L160,180 L180,200 L1000,200" strokeWidth="2" />
          <line x1="50" y1="0" x2="50" y2="100%" strokeDasharray="4 4" strokeWidth="1" />
          <line x1="80vw" y1="0" x2="80vw" y2="100%" strokeDasharray="4 4" strokeWidth="1" />
        </svg>

        {/* Scattered Clinical Icons */}
        <div className="absolute inset-0 opacity-40 text-[var(--color-brand)]">
          <Stethoscope className="absolute top-[5%] left-[5%] w-32 h-32 rotate-12" />
          <Syringe className="absolute top-[25%] right-[10%] w-24 h-24 -rotate-45" />
          <Pill className="absolute bottom-[20%] left-[15%] w-20 h-20 rotate-45" />
          <HeartPulse className="absolute top-[50%] right-[25%] w-40 h-40 rotate-12 opacity-60" />
          <Microscope className="absolute bottom-[10%] right-[10%] w-28 h-28 -rotate-12" />
          <TestTube className="absolute top-[35%] left-[20%] w-16 h-16 rotate-45" />
          <Cross className="absolute top-[10%] right-[35%] w-20 h-20 rotate-12" />
          
          {/* Newly added items */}
          <Activity className="absolute top-[70%] left-[8%] w-28 h-28 -rotate-12" />
          <ClipboardPlus className="absolute bottom-[30%] right-[15%] w-24 h-24 rotate-6" />
          <FlaskConical className="absolute top-[15%] left-[30%] w-20 h-20 -rotate-12" />
          <Dna className="absolute top-[40%] right-[40%] w-32 h-32 rotate-90 opacity-50" />
          <Bandage className="absolute bottom-[5%] left-[40%] w-16 h-16 rotate-45" />
          <Bone className="absolute top-[80%] right-[45%] w-20 h-20 -rotate-45" />
          <Ambulance className="absolute top-[20%] right-[20%] w-32 h-32 rotate-6 opacity-30" />
        </div>
      </div>

      <div className="grid-container relative z-10">
        <div className="mb-16 md:mb-24">
          <span className="micro text-[var(--color-brand-deep)] tracking-widest uppercase mb-4 block">
            04 / HEALTHCARE
          </span>
          <h2 className="display-l text-[var(--color-ink)] max-w-4xl leading-tight">
            I use software to make healthcare safer, faster and more accessible.
          </h2>
        </div>

        {/* Floating Clinical Panels */}
        <div className="relative min-h-[800px] w-full">
          
          <ClinicalPanel 
            title="ILERAI"
            subtitle="ACCESS TO CARE"
            description="Digital access to care for underserved populations."
            position="left-0 top-0"
            delay={0}
          />

          <ClinicalPanel 
            title="PHARMCHAIN"
            subtitle="DRUG AUTHENTICATION"
            description="A drug-counterfeit detection system."
            position="right-0 md:right-[10%] top-[150px]"
            delay={0.2}
          />

          <ClinicalPanel 
            title="MAMASAFE"
            subtitle="MEDICATION SAFETY"
            description="Medication safety and clinical decision support."
            position="left-0 md:left-[20%] top-[400px]"
            delay={0.4}
          />

          {/* Materna (Highlight Panel) */}
          <motion.div 
            className="absolute left-0 md:left-auto md:right-0 top-[650px] w-full md:w-[600px] bg-[var(--color-white)] border border-[var(--color-mist)] p-8 md:p-12 shadow-[0_20px_40px_rgba(0,104,112,0.08)] rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex justify-between items-center mb-12 border-b border-[var(--color-mist)] pb-4">
              <h3 className="h3 text-[var(--color-ink)] tracking-tight">MATERNA</h3>
              <div className="flex items-center space-x-2 bg-[var(--color-brand)]/10 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse" />
                <span className="micro text-[var(--color-brand-deep)] font-bold">BUILDING NOW</span>
              </div>
            </div>
            
            <div className="aspect-video w-full bg-[var(--color-brand-soft)]/20 mb-8 rounded flex items-center justify-center">
               <span className="font-display text-[var(--color-brand-deep)] opacity-50">[ clinical interface visualization ]</span>
            </div>

            <p className="body-large text-[var(--color-ink)] font-medium">
              Making maternal care easier, faster, more affordable and more connected.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ClinicalPanel({ title, subtitle, description, position, delay }: { title: string, subtitle: string, description: string, position: string, delay: number }) {
  return (
    <motion.div 
      className={`absolute ${position} w-[300px] md:w-[380px] bg-[var(--color-off-white)] border border-[var(--color-brand-soft)]/30 p-6 shadow-sm`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="border-b border-[var(--color-mist)] pb-3 mb-4">
        <h3 className="h4 text-[var(--color-ink)] tracking-tight">{title}</h3>
        <span className="micro text-[var(--color-brand-deep)] tracking-widest block mt-1">{subtitle}</span>
      </div>
      
      <div className="h-[120px] w-full bg-[var(--color-mist)]/30 mb-4 flex items-center justify-center border border-[var(--color-mist)]/50">
        {/* Mock interface visual */}
        <svg className="w-full h-full stroke-[var(--color-brand-soft)] fill-none opacity-40 p-4" viewBox="0 0 100 50">
          <rect x="0" y="10" width="100" height="30" rx="2" />
          <line x1="10" y1="20" x2="40" y2="20" />
          <line x1="10" y1="30" x2="70" y2="30" />
        </svg>
      </div>
      
      <p className="body-small text-[var(--color-slate)]">
        {description}
      </p>
    </motion.div>
  );
}
