"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";

export function Mantra() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    other: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nWhat I want to build:\n${formData.project}\n\nAdditional Information:\n${formData.other}`
    );
    window.location.href = `mailto:ajuwonmuhammad99@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="bg-[var(--color-ink)] text-[var(--color-off-white)] py-16 md:py-24 flex flex-col justify-between min-h-screen">
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
        
        {/* Contact Form Section */}
        <motion.div 
          className="max-w-2xl mx-auto w-full mt-24 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 text-center">
            <h3 className="h4 text-[var(--color-white)] mb-2">Let's build something.</h3>
            <p className="body-small text-[var(--color-slate)]">Tell me about yourself and what you're working on.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-slate)]/50 py-3 text-[var(--color-white)] focus:outline-none focus:border-[var(--color-brand)] transition-colors peer"
                  placeholder=" "
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <label htmlFor="name" className="absolute left-0 top-3 text-[var(--color-slate)] peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-brand)] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base cursor-text">
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-[var(--color-slate)]/50 py-3 text-[var(--color-white)] focus:outline-none focus:border-[var(--color-brand)] transition-colors peer"
                  placeholder=" "
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
                <label htmlFor="email" className="absolute left-0 top-3 text-[var(--color-slate)] peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-brand)] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base cursor-text">
                  Your Email
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea 
                id="project"
                required
                rows={3}
                className="w-full bg-transparent border-b border-[var(--color-slate)]/50 py-3 text-[var(--color-white)] focus:outline-none focus:border-[var(--color-brand)] transition-colors peer resize-none"
                placeholder=" "
                value={formData.project}
                onChange={e => setFormData({...formData, project: e.target.value})}
              ></textarea>
              <label htmlFor="project" className="absolute left-0 top-3 text-[var(--color-slate)] peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-brand)] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base cursor-text">
                What do you want to build?
              </label>
            </div>

            <div className="relative">
              <textarea 
                id="other"
                rows={2}
                className="w-full bg-transparent border-b border-[var(--color-slate)]/50 py-3 text-[var(--color-white)] focus:outline-none focus:border-[var(--color-brand)] transition-colors peer resize-none"
                placeholder=" "
                value={formData.other}
                onChange={e => setFormData({...formData, other: e.target.value})}
              ></textarea>
              <label htmlFor="other" className="absolute left-0 top-3 text-[var(--color-slate)] peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[var(--color-brand)] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base cursor-text">
                Any other information?
              </label>
            </div>

            <button 
              type="submit"
              className="w-full md:w-auto bg-[var(--color-white)] text-[var(--color-ink)] hover:bg-[var(--color-brand)] hover:text-[var(--color-white)] transition-colors duration-300 px-8 py-4 flex items-center justify-center font-display font-medium tracking-wide mt-4"
            >
              SEND MESSAGE <Send className="w-4 h-4 ml-2" />
            </button>
          </form>
        </motion.div>
        
      </div>

      <footer className="grid-container pt-16 md:pt-24 pb-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-slate)] pt-8">
          <div className="flex items-center space-x-8 mb-8 md:mb-0">
            <a href="mailto:ajuwonmuhammad99@gmail.com" className="micro text-[var(--color-slate)] hover:text-[var(--color-brand)] transition-colors flex items-center">
              EMAIL <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ajuwon-242698260/" className="micro text-[var(--color-slate)] hover:text-[var(--color-brand)] transition-colors flex items-center">
              LINKEDIN <ArrowUpRight className="w-3 h-3 ml-1" />
            </a>
            <a href="https://github.com/kodget" className="micro text-[var(--color-slate)] hover:text-[var(--color-brand)] transition-colors flex items-center">
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
