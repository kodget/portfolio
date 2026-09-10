"use client";

import { Printer, Download } from "lucide-react";

export function ResumeActions() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex items-center space-x-3 md:space-x-4">
      <button 
        onClick={handlePrint}
        className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--color-brand)] transition-colors"
        aria-label="Print or Save as PDF"
      >
        <Printer className="w-4 h-4 md:w-5 md:h-5" />
        <span className="font-display text-xs tracking-widest uppercase hidden md:inline-block">Print</span>
      </button>
      
      <a 
        href="/resume.pdf" 
        download="Muhammad-Ajuwon-Resume.pdf"
        className="flex items-center space-x-2 bg-[var(--text-primary)] text-[var(--background)] px-4 py-2 rounded-sm hover:bg-[var(--color-brand)] hover:text-white transition-colors"
      >
        <Download className="w-4 h-4" />
        <span className="font-display text-xs tracking-widest uppercase">PDF Version</span>
      </a>
    </div>
  );
}
