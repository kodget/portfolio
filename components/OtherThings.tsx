"use client";

import { motion } from "framer-motion";
import { BookOpen, Camera, Edit3, Trophy, Globe, Coffee, Map, Heart, Stethoscope } from "lucide-react";

export function OtherThings() {
  return (
    <section id="other" className="grid-container py-16 md:py-24 overflow-hidden bg-[var(--surface-secondary)]/20">
      <div className="mb-24">
        <span className="micro text-[var(--text-secondary)] tracking-widest uppercase mb-4 block">
          09 / OTHER THINGS
        </span>
        <h2 className="display-m text-[var(--text-primary)] max-w-2xl">
          Life outside the IDE.
        </h2>
      </div>

      <div className="relative min-h-[900px] w-full flex flex-col md:block">
        
        {/* Item 1: Writing */}
        <motion.div 
          className="md:absolute md:top-[5%] md:left-[10%] bg-[var(--color-white)] border border-[var(--color-mist)] shadow-sm p-6 max-w-xs rotate-[-2deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300 z-10"
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
          className="md:absolute md:top-[25%] md:right-[15%] bg-[var(--color-cream-soft)] border border-[var(--border)] shadow-sm p-4 pb-12 max-w-[240px] rotate-[3deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="aspect-square bg-[var(--surface-secondary)] rounded-sm mb-4 flex items-center justify-center">
            <Camera className="w-8 h-8 text-[var(--text-muted)] opacity-50" />
          </div>
          <span className="font-display font-medium text-[var(--text-primary)] block text-center">5K Mornings</span>
        </motion.div>

        {/* Item 3: Languages */}
        <motion.div 
          className="md:absolute md:top-[15%] md:right-[40%] bg-[var(--surface)] border border-[var(--border)] shadow-sm p-5 max-w-[280px] rotate-[-1deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300 z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <Globe className="w-5 h-5 text-[var(--color-brand)]" />
            <span className="font-display font-medium text-[var(--text-primary)]">Languages</span>
          </div>
          <ul className="space-y-1 body-small text-[var(--text-secondary)]">
            <li>English (Fluent)</li>
            <li>Arabic (Intermediate)</li>
            <li>French (Beginner)</li>
          </ul>
        </motion.div>

        {/* Item 4: Cooking */}
        <motion.div 
          className="md:absolute md:top-[45%] md:left-[5%] bg-[var(--color-white)] border border-[var(--color-mist)] shadow-sm p-5 max-w-[250px] rotate-[2deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <Coffee className="w-5 h-5 text-[var(--color-brand)]" />
            <span className="font-display font-medium text-[var(--text-primary)]">Cooking</span>
          </div>
          <p className="body-small text-[var(--text-secondary)]">
            Experimental chef. I rarely follow the recipe exactly.
          </p>
        </motion.div>

        {/* Item 5: Real Madrid */}
        <motion.div 
          className="md:absolute md:top-[50%] md:right-[25%] bg-[var(--color-white)] border-t-4 border-[#00529F] shadow-sm p-5 max-w-[220px] rotate-[-3deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300 z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3">
            <Trophy className="w-5 h-5 text-[#00529F]" />
            <span className="font-display font-medium text-[#00529F]">Hala Madrid!</span>
          </div>
          <p className="body-small text-[var(--text-secondary)] mt-2">
            Passionate Real Madrid fan.
          </p>
        </motion.div>

        {/* Item 6: Long Walks */}
        <motion.div 
          className="md:absolute md:bottom-[20%] md:left-[15%] bg-[var(--surface)] border border-[var(--border)] shadow-sm p-5 max-w-[260px] rotate-[1deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <Map className="w-5 h-5 text-[var(--color-brand)]" />
            <span className="font-display font-medium text-[var(--text-primary)]">Unplugging</span>
          </div>
          <p className="body-small text-[var(--text-secondary)]">
            Nothing clears the mind like a very long walk with no particular destination.
          </p>
        </motion.div>

        {/* Item 7: Helping People */}
        <motion.div 
          className="md:absolute md:bottom-[25%] md:right-[5%] bg-[var(--color-cream-soft)] border border-[var(--border)] shadow-sm p-5 max-w-[240px] rotate-[-2deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="font-display font-medium text-[var(--text-primary)]">Community</span>
          </div>
          <p className="body-small text-[var(--text-secondary)]">
            I love helping people out, whether it's debugging code or sharing advice.
          </p>
        </motion.div>

        {/* Item 8: Reading */}
        <motion.div 
          className="md:absolute md:bottom-[5%] md:left-[45%] bg-[var(--color-white)] border-l-4 border-[var(--color-brand)] shadow-sm p-6 max-w-sm rotate-[-1deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300 z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
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

        {/* Item 9: Medicine */}
        <motion.div 
          className="md:absolute md:top-[75%] md:left-[35%] bg-[var(--color-cream-soft)] border border-[var(--border)] shadow-sm p-5 max-w-[240px] rotate-[4deg] mb-8 md:mb-0 hover:rotate-0 hover:shadow-md transition-all duration-300 z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <Stethoscope className="w-5 h-5 text-[var(--color-brand)]" />
            <span className="font-display font-medium text-[var(--text-primary)]">Med Student</span>
          </div>
          <p className="body-small text-[var(--text-secondary)]">
            Balancing the art of coding with the study of medicine.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
