"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FiMonitor, FiCode, FiLayout, FiZap, 
  FiBriefcase, FiUsers, FiAward, FiCpu,
  FiChevronRight, FiGithub, FiFigma, FiGlobe
} from "react-icons/fi";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiFramer, SiNodedotjs, SiGit, SiFirebase 
} from "react-icons/si";

// Helper components for modularity
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default function About() {
  const [isMobileBioOpen, setIsMobileBioOpen] = useState(false);
  const stats = [
    { number: "50+", label: "Projects Completed", icon: <FiBriefcase /> },
    { number: "5+", label: "Years Experience", icon: <FiAward /> },
    { number: "20+", label: "Technologies Used", icon: <FiCpu /> },
    { number: "100%", label: "Happy Clients", icon: <FiUsers /> },
  ];

  const skills = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" />, desc: "High-performance applications" },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, desc: "Type-safe robust code" },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, desc: "Server-side excellence" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, desc: "Modern utility styling" },
    { name: "UI Design", icon: <FiLayout className="text-[#FF1A1A]" />, desc: "Clean aesthetic layouts" },
    { name: "Figma", icon: <SiFramer className="text-[#F24E1E]" />, desc: "Visual storytelling" },
    { name: "API Integration", icon: <FiCode className="text-red-400" />, desc: "Seamless data flow" },
    { name: "Optimization", icon: <FiZap className="text-yellow-400" />, desc: "Speed and performance" },
  ];

  const techStack = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Figma", icon: <SiFramer /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ];

  const timeline = [
    { year: "2026", title: "Started Web Design Agency", desc: "Leading a boutique agency focused on high-end cinematic digital products." },
    { year: "2025", title: "Built Multiple Client Websites", desc: "Delivered complex e-commerce and portfolio solutions for international brands." },
    { year: "2024", title: "Began Professional Web Development", desc: "Started crafting custom React and Next.js applications for full-stack projects." },
  ];

  const strengths = [
    { title: "Modern UI Design", desc: "Creating visually stunning, agency-level interfaces that capture attention instantly.", icon: <FiMonitor /> },
    { title: "Fast Performance", desc: "Optimizing every byte to ensure your website loads in the blink of an eye.", icon: <FiZap /> },
    { title: "Clean Code", desc: "Writing scalable, maintainable, and type-safe code that stands the test of time.", icon: <FiCode /> },
  ];

  return (
    <section id="about" className="relative w-full bg-black text-white py-32 pt-0 overflow-hidden selection:bg-red-500/30">
      
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-[10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 -right-[10%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[150px] mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-0 lg:px-12 space-y-24">
        
        {/* Section Header */}
        <FadeIn>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              About <span className="text-red-500">Me</span>
            </h2>
            <div className="w-24 h-[3px] bg-red-600 rounded-full" />
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mt-6">
              Crafting powerful digital experiences through design, development, and obsessive attention to detail.
            </p>
          </div>
        </FadeIn>

        {/* 1. About Profile Panel */}
        <FadeIn delay={200}>
          <div className="relative w-full h-[450px] md:h-[650px] bg-black border border-white/5 rounded-[2.5rem] overflow-hidden group shadow-2xl transition-all duration-700">
            {/* Background Image Container - Shrinks on desktop hover, dims on mobile bio open */}
            <div className={`absolute inset-y-0 left-0 w-full md:group-hover:w-[55%] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-10 ${isMobileBioOpen ? 'opacity-40' : 'opacity-100'}`}>
              <Image 
                src="/img/IMG_6723.jpg" 
                alt="Ace Profile" 
                fill 
                className="object-cover grayscale"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-700" />
            </div>

            {/* Mobile Bio Toggle Button (Only visible on mobile) */}
            <button 
              onClick={() => setIsMobileBioOpen(true)}
              className={`md:hidden absolute bottom-8 right-8 z-[30] bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-4 font-black uppercase tracking-widest text-[10px] shadow-2xl flex items-center gap-2 transition-all duration-500 hover:scale-105 active:scale-95 ${isMobileBioOpen ? 'translate-y-20 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
            >
              Who I Am
              <FiChevronRight className="w-4 h-4 text-red-500" />
            </button>
            
            {/* Content Overlay Sidebar (Bottom-fixed on mobile, right-sliding on desktop) */}
            <div className={`absolute bottom-0 md:inset-y-0 right-0 w-full md:w-[45%] bg-[#0A0A0A]/95 md:bg-black/95 backdrop-blur-2xl z-20 border-t md:border-t-0 md:border-l border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center h-full p-8 md:p-14
              ${isMobileBioOpen ? 'translate-y-0 opacity-100' : 'translate-y-full md:translate-y-0 opacity-0 md:opacity-100 translate-x-0 md:translate-x-full md:group-hover:translate-x-0'}
            `}>
              {/* Close Button for Mobile Bio */}
              <button 
                onClick={() => setIsMobileBioOpen(false)}
                className="md:hidden absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="space-y-4">
                <h3 className={`text-3xl md:text-5xl font-black text-white tracking-tighter uppercase transition-all duration-700 delay-100 
                  ${isMobileBioOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100'}
                `}>
                  Who I <span className="text-red-500">Am</span>
                </h3>
                <div className={`w-16 md:w-20 h-[3px] bg-white transition-all duration-700 delay-200
                  ${isMobileBioOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100'}
                `} />
              </div>
              
              <div className={`space-y-6 text-white/95 text-base md:text-xl font-medium leading-relaxed transition-all duration-700 delay-300
                ${isMobileBioOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100'}
              `}>
                <p>
                  I am a high-end web designer and developer who specializes in building cinematic, agency-level digital products. My work sits at the intersection of aesthetic brilliance and technical precision.
                </p>
                <p className="hidden sm:block opacity-80 font-normal">
                  With a deep focus on user experience and performance, I help brands and individuals stand out in a crowded digital landscape through bold design and clean, scalable code.
                </p>
              </div>
              
              <div className={`pt-4 md:pt-6 transition-all duration-700 delay-500
                ${isMobileBioOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100'}
              `}>
                <p className="text-white font-black italic text-xl md:text-2xl tracking-wide">— Ace</p>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mt-1">Designer & Developer</p>
              </div>

              {/* Red Glow Detail inside sidebar */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-400/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            </div>

            {/* Hover Indicator Text - Only show on desktop */}
            <div className="absolute bottom-10 left-10 text-white/40 text-[10px] uppercase tracking-[0.5em] font-black group-hover:opacity-0 transition-opacity duration-300 pointer-events-none hidden md:flex items-center gap-4">
              <span className="w-8 h-px bg-white/20" />
              <span>Hover for Bio</span>
            </div>
          </div>
        </FadeIn>

        {/* 2. Stats / Achievements Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="relative bg-[#0A0A0A] p-6 rounded-2xl text-center group hover:shadow-[0_0_25px_rgba(255,26,26,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Base inactive border */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl transition-colors duration-500 pointer-events-none group-hover:border-transparent z-0"></div>
                
                {/* SVG Progress Border */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    rx="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    pathLength="100"
                    strokeDasharray="100"
                    className="text-red-500 [stroke-dashoffset:100] group-hover:[stroke-dashoffset:0] transition-all duration-700 ease-out"
                  />
                </svg>

                <div className="relative z-10">
                  <div className="mb-3 text-red-500 text-2xl flex justify-center group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-red-500/80 transition-colors">{stat.label}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 3. Skills Grid */}
        <div className="space-y-12">
          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Core <span className="text-red-500">Skills</span></h3>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-2xl group hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,26,26,0.2)] hover:-translate-y-2 transition-all duration-500">
                  <div className="mb-4 text-3xl group-hover:scale-110 transition-transform duration-500">{skill.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{skill.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 4. Tools & Technologies Stack */}
        <FadeIn>
          <div className="bg-black border-y border-white/10 py-10 overflow-hidden relative group">
            <div className="flex animate-scroll hover:pause gap-12 items-center whitespace-nowrap px-6">
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="flex items-center gap-3 px-6 py-3 bg-black border border-white/10 rounded-full hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(255,26,26,0.3)] transition-all duration-300 group/item">
                  <span className="text-xl group-hover/item:text-red-500 transition-colors">{tech.icon}</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-400 group-hover/item:text-white transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
            {/* Custom scroll animation in globals.css is needed, but we'll use a flex/gap for now */}
          </div>
        </FadeIn>

        {/* 5. Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <FadeIn>
            <div className="space-y-12">
              <h3 className="text-3xl font-bold tracking-tight">The <span className="text-red-500">Journey</span></h3>
              <div className="border-l-2 border-red-500/30 space-y-12 ml-4">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-10 group">
                    <div className="absolute left-[-7px] top-1.5 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,26,26,0.8)] group-hover:scale-150 transition-transform duration-500" />
                    <div className="text-red-500 font-black text-xl mb-1">{item.year}</div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed max-w-lg">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 6. Core Strengths / Services Cards */}
          <div className="space-y-12">
             <FadeIn>
               <h3 className="text-3xl font-bold tracking-tight lg:text-right">Core <span className="text-red-500">Strengths</span></h3>
             </FadeIn>
             <div className="grid grid-cols-1 gap-6">
                {strengths.map((strength, index) => (
                  <FadeIn key={index} delay={index * 150}>
                    <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-[1.5rem] flex gap-6 group hover:shadow-[0_0_30px_rgba(255,26,26,0.15)] hover:border-red-500/30 transition-all duration-500">
                      <div className="flex-shrink-0 w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-500 text-2xl group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                        {strength.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{strength.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{strength.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
             </div>
          </div>
        </div>

        {/* 7. Personal Quote Block */}
        <FadeIn>
          <div className="py-20 flex flex-col items-center text-center relative px-6">
            <div className="absolute top-0 text-9xl text-red-500/10 font-serif -translate-y-1/2 select-none">“</div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold italic text-white max-w-4xl leading-snug relative z-10">
              "I build digital experiences that are fast, reliable, and designed to make an impact. My goal is to transform blank pixels into cinematic masterpieces."
            </h4>
            <div className="w-20 h-1 bg-red-600 mt-12 rounded-full" />
          </div>
        </FadeIn>

        {/* 8. Call-To-Action Banner */}
        <FadeIn>
          <div className="relative rounded-[2.5rem] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-[#2a0000] z-0" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,26,26,0.05)_0%,transparent_70%)]" />
            <div className="relative z-10 p-12 md:p-20 text-center space-y-10">
              <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight max-w-2xl mx-auto">
                Ready to build something <span className="text-red-500">powerful</span> together?
              </h3>
              <div className="flex justify-center">
                <Link
                  href="#contact"
                  className="bg-red-600 text-white font-black uppercase tracking-widest rounded-full px-12 py-5 shadow-[0_0_40px_rgba(255,26,26,0.3)] hover:shadow-[0_0_60px_rgba(255,26,26,0.6)] hover:-translate-y-1.5 transition-all duration-500"
                >
                  Let's Work Together
                </Link>
              </div>
            </div>
            {/* Animated background lines */}
            <div className="absolute border border-white/5 top-10 left-10 right-10 bottom-10 rounded-[1.5rem] pointer-events-none" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
