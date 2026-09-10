import { ArrowLeft, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ResumeActions } from "@/components/ResumeActions";

export const metadata = {
  title: "Resume | Muhammad Ajuwon",
  description: "Muhammad Ajuwon's Resume - Front-End React Developer",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-24 md:pt-32 pb-24 px-5 print:pt-0 print:pb-0 print:bg-white print:text-black">
      <div className="max-w-[850px] mx-auto bg-[var(--surface)] border border-[var(--border)] rounded-xl p-8 md:p-12 shadow-sm print:border-none print:shadow-none print:p-0 print:max-w-full">
        
        {/* Action Bar (Hidden when printing) */}
        <div className="flex items-center justify-between mb-12 print:hidden">
          <Link href="/" className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--color-brand)] transition-colors">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-display text-xs md:text-sm tracking-widest uppercase">Back</span>
          </Link>
          <ResumeActions />
        </div>

        {/* Resume Content */}
        <div className="font-sans text-[var(--text-primary)] print:text-black leading-relaxed">
          
          {/* Header */}
          <header className="mb-10 pb-6 border-b border-[var(--border)] print:border-gray-300">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight text-[var(--color-brand-deep)] print:text-[#00545B]">
              MUHAMMAD AJUWON
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-4 text-[var(--text-secondary)] print:text-gray-700">
              Frontend Engineer
            </h2>
            
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-[var(--text-muted)] print:text-gray-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Lagos, Nigeria | Remote
              </span>
              <a href="mailto:ajuwonmuhammad99@gmail.com" className="flex items-center gap-1.5 hover:text-[var(--color-brand)] print:text-black">
                <Mail className="w-4 h-4" /> ajuwonmuhammad99@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" /> +234 7041911443
              </span>
              <a href="https://linkedin.com/in/muhammad-ajuwon-242698260" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[var(--color-brand)] print:text-black">
                <ExternalLink className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-lg font-display font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3 print:text-[#006870]">
              Summary
            </h3>
            <p className="text-[var(--text-secondary)] print:text-gray-800">
              Front-End Developer with 4+ years of hands-on experience translating design systems into accessible, high-performance web applications. Experienced in modern React frameworks, REST API integrations, accessibility (WCAG), React Native, Typescript, NextJs and secure frontend practices. Strong collaborator with designers, backend engineers, and product teams to deliver scalable and functional digital experiences.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <h3 className="text-lg font-display font-bold uppercase tracking-widest text-[var(--color-brand)] mb-4 print:text-[#006870]">
              Work Experience
            </h3>
            <div className="space-y-6">
              
              <div className="print:block">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Frontend Engineer | Mamasafe</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Lagos, Nigeria | Nov 2025</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Developed and currently managing a platform that validates drug usage and checks for risky drug to drug interactions and teratogenic risks in pregnant women.</li>
                </ul>
              </div>

              <div className="print:block">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Junior Front end Developer | Nexatage Technology Limited</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Lagos, Nigeria | Nov 2024 – Present</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Built 30+ reusable react components using NextJS and tailwind.</li>
                  <li>Co-developed the company's internal SaaS product alongside designers and back end engineers.</li>
                  <li>Improved page performance by ~35% through optimization strategies.</li>
                  <li>Integrated REST APIs and managed frontend states.</li>
                  <li>Reduced UI related bugs by ~40% via component standardization.</li>
                </ul>
              </div>

              <div className="print:block">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Front end Developer | Washwisee</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Lagos, Nigeria | Sept 2024 – Nov 2024</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Collaborated with UI/UX designers to develop and optimize a laundry platform's user interface for launch readiness.</li>
                </ul>
              </div>

              <div className="print:block">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Front end Developer Intern | Smart Edge Hub</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Lagos, Nigeria | Sept 2022 – Mar 2023</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Designed and implemented responsive landing pages while learning frontend development.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h3 className="text-lg font-display font-bold uppercase tracking-widest text-[var(--color-brand)] mb-4 print:text-[#006870]">
              Projects
            </h3>
            <div className="space-y-6">
              
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Frontend Engineer | EMBY</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Next.js, Tailwind, TypeScript, AI</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Developed learning infrastructure for medical students with payment integration via Paystack.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Frontend Engineer | HIDAAYAH</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">TypeScript, PWA, Next.js, Three.js</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Built software designed to help Muslims connect deeper with the Qur'an featuring 3D experiences.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Frontend Engineer | DISTINCT PATTERNS</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Next.js, Tailwind, React Native</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Created robust e-commerce infrastructure for men's fashion and editorial content.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Frontend Engineer | FIKR QURAN ACADEMY</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Next.js, Tailwind, TypeScript</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Developed a modern learning platform for local and international Qur'an students with secure payments.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Front end Engineer | AWS Community day Hackathon</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Lagos, Nigeria | Oct 2025</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Built a claims verification tool (Veritas AI) leveraging AWS and React, enhancing automation accuracy for the insurance sector; awarded first runner up winner among competing teams.</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Software Engineer | Flow Hackathon</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Lagos, Nigeria | Oct 2025</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Developed a vertical paid tasks platform using React and TypeScript, enabling domain and non-domain experts to monetize their skills.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Frontend Engineer | Orodata Science Healthtech Hackathon</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Lagos, Nigeria | Nov 2025</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Built ilerAI, a smart PHC management system specifically for the reality of the Nigerian healthcare sector. Won the hack-a-thon.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">Frontend Engineer | Lagos Impact Hackathon</h4>
                  <span className="text-sm font-medium text-[var(--text-muted)] print:text-gray-600">Lagos, Nigeria | Dec 2025</span>
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-[var(--text-secondary)] print:text-gray-800 marker:text-[var(--color-brand)]">
                  <li>Built Optic Gov, an AI and Blockchain powered infrastructure governance protocol for monitoring and evaluation, ensuring that contracted projects proceed to completion and restoring the trust of citizens of Nigeria in the government.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education & Other */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Left Column */}
            <div>
              <section className="mb-8">
                <h3 className="text-lg font-display font-bold uppercase tracking-widest text-[var(--color-brand)] mb-4 print:text-[#006870]">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold">ALX Africa – Lagos, Nigeria</h4>
                      <span className="text-sm font-medium text-[var(--text-muted)]">2025</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] print:text-gray-800">Frontend Prodev - Software Engineering</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold">Jonas Schmedtmann</h4>
                      <span className="text-sm font-medium text-[var(--text-muted)]">2024</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] print:text-gray-800">Zero to Advanced frontend developer</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold">McKinsey Forward Program</h4>
                      <span className="text-sm font-medium text-[var(--text-muted)]">2024</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] print:text-gray-800">Professional Foundations</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold">Cisco Networking Academy</h4>
                      <span className="text-sm font-medium text-[var(--text-muted)]">2024</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] print:text-gray-800">English for IT Level 1 & 2</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold">Brad Traversy Crash Course</h4>
                      <span className="text-sm font-medium text-[var(--text-muted)]">2022</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] print:text-gray-800">HTML5 and CSS3</p>
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-lg font-display font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3 print:text-[#006870]">
                  Volunteer Activities
                </h3>
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold">Student Ambassador, Cowrywise</h4>
                    <span className="text-sm font-medium text-[var(--text-muted)]">Nov 2024 - Present</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] print:text-gray-800">Actively coordinating with other ambassadors in my school to raise awareness about financial literacy with cowrywise.</p>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div>
              <section className="mb-8">
                <h3 className="text-lg font-display font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3 print:text-[#006870]">
                  Skills
                </h3>
                <div className="space-y-4 text-sm text-[var(--text-secondary)] print:text-gray-800">
                  <div>
                    <span className="font-bold text-[var(--text-primary)] print:text-black">Technical: </span> 
                    HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, Redux, Context API, Tailwind CSS, SCSS, REST APIs, GraphQL, React Native, Git & GitHub, Framer Motion, PWA development, Agile workflow.
                  </div>
                  <div>
                    <span className="font-bold text-[var(--text-primary)] print:text-black">Soft Skills: </span> 
                    Relationship and wellbeing, problem solving, critical thinking, adaptability, research, writing, teamwork, project management, growth mindset, storytelling, effective communication.
                  </div>
                  <div>
                    <span className="font-bold text-[var(--text-primary)] print:text-black">Tools: </span> 
                    Google Workspace (Drive, Sheets, Docs, Slides, Sites).
                  </div>
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-lg font-display font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3 print:text-[#006870]">
                  Interests
                </h3>
                <p className="text-sm text-[var(--text-secondary)] print:text-gray-800">
                  Nature & Wildlife Conservation, Philosophy, Literature, Writing, Reading, Poetry.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-lg font-display font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3 print:text-[#006870]">
                  Languages
                </h3>
                <ul className="text-sm space-y-1 text-[var(--text-secondary)] print:text-gray-800">
                  <li><span className="font-bold text-[var(--text-primary)] print:text-black">English:</span> Professional</li>
                  <li><span className="font-bold text-[var(--text-primary)] print:text-black">Arabic:</span> Intermediate</li>
                  <li><span className="font-bold text-[var(--text-primary)] print:text-black">French:</span> Beginner</li>
                </ul>
              </section>
            </div>
            
          </div>
          
        </div>
      </div>
    </main>
  );
}
