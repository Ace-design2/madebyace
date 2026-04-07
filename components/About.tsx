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
    <section id="about" className="relative w-full bg-white dark:bg-black text-black dark:text-white pt-0 pb-10 md:pb-16 overflow-hidden selection:bg-red-500/30 transition-colors duration-500">
      
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-[10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 -right-[10%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[150px] mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-0 lg:px-12 space-y-16 md:space-y-24">
        
        {/* 1. Who I Am Profile Panel - Hero Cinematic Layout */}
        <div id="who-i-am" className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center w-full pt-8 md:pt-20">
          
          {/* Left Column Text Content */}
          <FadeIn delay={200}>
            <div className="flex flex-col items-start gap-8 z-10 w-full max-w-xl relative mx-auto lg:mx-0">
               
               {/* Designer Badge */}
               <div className="flex items-center gap-3 px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full w-fit">
                 <span className="relative flex h-1.5 w-1.5">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500 shadow-[0_0_8px_rgba(255,26,26,0.8)]"></span>
                 </span>
                 <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 dark:text-gray-300">Designer & Developer</span>
               </div>

               {/* Headline Title */}
               <div className="space-y-4">
                 <h3 className="text-5xl sm:text-6xl lg:text-7xl font-marags font-black text-black dark:text-white tracking-tighter uppercase leading-none text-left transition-colors duration-500">
                   WHO I <br/><span className="text-red-600 dark:text-red-500">AM</span>
                 </h3>
                 <div className="w-16 h-[3px] bg-red-600/50" />
               </div>
               
               {/* Description */}
               <div className="space-y-6 text-lg sm:text-xl max-w-[500px] text-gray-700 dark:text-[#B3B3B3] font-medium leading-relaxed text-left transition-colors duration-500">
                 <p>
                   I build cinematic, agency-level digital products. My work sits exclusively at the intersection of aesthetic brilliance and technical precision.
                 </p>
                 <p className="text-gray-500 dark:text-gray-500 text-base">
                   With a deep focus on user experience and seamless performance, I help ambitious brands stand out in a crowded digital landscape through bold design and pristine architecture.
                 </p>
               </div>
               
               {/* Signature */}
               <div className="pt-4 text-left">
                 <p className="text-black dark:text-white font-black italic text-2xl tracking-wide transition-colors duration-500">— Ace</p>
               </div>
            </div>
          </FadeIn>

          {/* Right Column Cinematic Image frame */}
          <FadeIn delay={400}>
             <div className="relative w-full flex justify-center lg:justify-end z-0">
                {/* Glow Behind Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="relative w-full max-w-[420px] lg:max-w-[500px] aspect-[4/5] rounded-[2.5rem] bg-gray-100 dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl group transition-colors duration-500">
                  <Image 
                    src="/img/IMG_6723.jpg" 
                    alt="Ace Profile" 
                    fill 
                    className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    priority
                  />
                  {/* Internal frame gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/80 via-black/5 dark:via-black/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-[2.5rem] pointer-events-none group-hover:border-red-500/40 group-hover:shadow-[inset_0_0_50px_rgba(255,26,26,0.2)] transition-all duration-500" />
                </div>
             </div>
          </FadeIn>
        </div>

        {/* 2. Stats / Achievements Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="relative bg-black/5 dark:bg-[#0A0A0A] p-6 rounded-2xl text-center group hover:shadow-[0_0_35px_rgba(255,26,26,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                {/* Base inactive border */}
                <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-2xl transition-colors duration-500 pointer-events-none group-hover:border-transparent z-0"></div>
                
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
                  <div className="text-3xl font-bold text-black dark:text-white mb-1 transition-colors">{stat.number}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-500 group-hover:text-red-600 dark:group-hover:text-red-500/80 transition-colors">{stat.label}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 3. Skills Grid */}
        <div id="core-skills" className="space-y-12">
          <FadeIn>
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-marags font-black text-black dark:text-white tracking-tighter uppercase leading-none text-center transition-colors duration-500">
              Core <br className="sm:hidden" /><span className="text-red-600 dark:text-red-500">Skills</span>
            </h3>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="bg-black/5 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 p-6 rounded-2xl group hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,26,26,0.2)] hover:-translate-y-2 transition-all duration-500">
                  <div className="mb-4 text-3xl group-hover:scale-110 transition-transform duration-500">{skill.icon}</div>
                  <h4 className="text-lg font-bold text-black dark:text-white mb-2 transition-colors">{skill.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 leading-snug">{skill.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 4. Tools & Technologies Stack */}
        <FadeIn>
          <div className="bg-white dark:bg-black border-y border-black/10 dark:border-white/10 py-10 overflow-hidden relative group transition-colors duration-500">
            <div className="flex animate-scroll hover:pause gap-12 items-center whitespace-nowrap px-6">
              {[...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="flex items-center gap-3 px-6 py-3 bg-black/5 dark:bg-black border border-black/10 dark:border-white/10 rounded-full hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(255,26,26,0.3)] transition-all duration-300 group/item">
                  <span className="text-xl text-black dark:text-white opacity-70 group-hover/item:opacity-100 group-hover/item:text-red-600 dark:group-hover/item:text-red-500 transition-colors">{tech.icon}</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
            {/* Custom scroll animation in globals.css is needed, but we'll use a flex/gap for now */}
          </div>
        </FadeIn>

        {/* 5. Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-12 md:mt-20">
          <FadeIn>
            <div className="space-y-12">
              <h3 className="text-3xl font-marags font-bold tracking-tight text-black dark:text-white transition-colors">The <span className="text-red-600 dark:text-red-500">Journey</span></h3>
              <div className="border-l-2 border-red-500/30 space-y-12 ml-4">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-10 group">
                    <div className="absolute left-[-7px] top-1.5 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,26,26,0.8)] group-hover:scale-150 transition-transform duration-500" />
                    <div className="text-red-600 dark:text-red-500 font-black text-xl mb-1">{item.year}</div>
                    <h4 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* 6. Core Strengths / Services Cards */}
          <div className="space-y-12">
             <FadeIn>
               <h3 className="text-3xl font-marags font-bold tracking-tight lg:text-right text-black dark:text-white transition-colors">Core <span className="text-red-600 dark:text-red-500">Strengths</span></h3>
             </FadeIn>
             <div className="grid grid-cols-1 gap-6">
                {strengths.map((strength, index) => (
                  <FadeIn key={index} delay={index * 150}>
                    <div className="bg-black/5 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 p-8 rounded-[1.5rem] flex gap-6 group hover:shadow-[0_0_30px_rgba(255,26,26,0.15)] hover:border-red-500/30 transition-all duration-500">
                      <div className="flex-shrink-0 w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-500 text-2xl group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                        {strength.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors">{strength.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{strength.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
             </div>
          </div>
        </div>

        {/* 7. Personal Quote Block */}
        <FadeIn>
          <div className="pt-12 md:pt-20 pb-0 flex flex-col items-center text-center relative px-6">
            <div className="absolute top-0 text-9xl text-black/5 dark:text-red-500/10 font-serif -translate-y-1/2 select-none transition-colors duration-500">“</div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold italic text-black dark:text-white max-w-4xl leading-snug relative z-10 transition-colors duration-500">
              "I build digital experiences that are fast, reliable, and designed to make an impact. My goal is to transform blank pixels into cinematic masterpieces."
            </h4>
            <div className="w-20 h-1 bg-red-600 mt-12 rounded-full" />
          </div>
        </FadeIn>



      </div>
    </section>
  );
}
