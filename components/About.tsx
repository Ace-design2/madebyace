"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMonitor, FiCode, FiLayout, FiZap,
  FiBriefcase, FiUsers, FiAward, FiCpu,
  FiArrowRight
} from "react-icons/fi";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFramer, SiNodedotjs, SiGit, SiFirebase, SiPython, SiMysql,
  SiHtml5, SiCss, SiJavascript
} from "react-icons/si";
import { motion } from "framer-motion";

// Helper components for modularity
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If entering from the top (scrolling up), we don't want the slide animation.
          if (entry.boundingClientRect.top < 100) {
            setShouldAnimate(false);
          } else {
            setShouldAnimate(true);
          }
          setIsVisible(true);
        } else {
          // Reset when it leaves the viewport (either top or bottom)
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible && shouldAnimate ? `${delay}ms` : '0ms' }}
      className={`${shouldAnimate ? 'transition-all duration-700 ease-out' : 'transition-none'} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const SectionHeading = ({ eyebrow, title, accent }: { eyebrow?: string; title: string; accent: string }) => (
  <FadeIn>
    <div className="flex flex-col items-center text-center space-y-4">
      {eyebrow && (
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
      )}
      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-marags font-black text-black dark:text-white tracking-tighter uppercase leading-none transition-colors duration-500">
        {title} <span className="text-primary">{accent}</span>
      </h3>
      <div className="w-16 h-[3px] bg-primary/50" />
    </div>
  </FadeIn>
);

const StatCard = ({ stat }: { stat: { number: string; label: string; icon: React.ReactNode } }) => {
  const numMatch = stat.number.match(/(\d+)/);
  const targetNum = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = stat.number.replace(/[0-9]/g, '');

  const [count, setCount] = useState(targetNum);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setCount(targetNum);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    // Dynamically adjust duration so smaller counts don't feel agonizingly slow
    // e.g., 2 takes 500ms, 100 takes 1500ms
    const duration = Math.min(1500, Math.max(500, targetNum * 20));

    const animateFn = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);

      // Use a much smoother easeOut (Cubic or Quad) so it doesn't "hang"
      // on the second-to-last number like an exponential curve does.
      const easeOut = 1 - Math.pow(1 - progressRatio, 3); // Cubic ease out

      // Use Math.round instead of floor so it reaches the final integer naturally
      const currentCount = Math.round(easeOut * targetNum);

      setCount(currentCount);

      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(animateFn);
      } else {
        setCount(targetNum);
      }
    };

    setCount(0);
    animationFrame = requestAnimationFrame(animateFn);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered, targetNum]);

  return (
    <div
      className="relative bg-black/5 dark:bg-[#0A0A0A] p-6 rounded-xl text-center group hover:shadow-[0_0_35px_rgba(255,26,26,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base inactive border */}
      <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-xl transition-colors duration-500 pointer-events-none group-hover:border-transparent z-0"></div>

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
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          pathLength="100"
          strokeDasharray="100"
          className="text-primary [stroke-dashoffset:100] group-hover:[stroke-dashoffset:0] transition-all duration-700 ease-out"
        />
      </svg>

      <div className="relative z-10">
        <div className="mb-3 text-primary text-2xl flex justify-center group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
        <div className="text-3xl font-bold text-black dark:text-white mb-1 transition-colors">
          {count}{suffix}
        </div>
        <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">{stat.label}</div>
      </div>
    </div>
  );
};

export default function About() {
  const stats = [
    { number: "10+", label: "Projects Completed", icon: <FiBriefcase /> },
    { number: "2+", label: "Years Experience", icon: <FiAward /> },
    { number: "20+", label: "Technologies Used", icon: <FiCpu /> },
    { number: "100%", label: "Happy Clients", icon: <FiUsers /> },
  ];

  const skills = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" />, desc: "High-performance applications" },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, desc: "Type-safe, robust code" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, desc: "Server-side excellence" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, desc: "Modern utility styling" },
    { name: "UI Design", icon: <FiLayout className="text-primary" />, desc: "Clean, aesthetic layouts" },
    { name: "Figma", icon: <SiFramer className="text-[#F24E1E]" />, desc: "Visual storytelling" },
    { name: "API Integration", icon: <FiCode className="text-primary" />, desc: "Seamless data flow" },
    { name: "Optimization", icon: <FiZap className="text-yellow-400" />, desc: "Speed and performance" },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" />, desc: "Dynamic backend logic" },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, desc: "Real-time cloud infrastructure" },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, desc: "Reliable data architecture" },
    { name: "Git", icon: <SiGit className="text-[#F05032]" />, desc: "Modern version control" },
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
    { name: "Python", icon: <SiPython /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];

  const timeline = [
    { year: "2024", title: "Began Professional Web Development", desc: "Started crafting custom React and Next.js applications for full-stack projects." },
    { year: "2025", title: "Built Multiple Client Websites", desc: "Delivered complex e-commerce and portfolio solutions for international brands." },
    { year: "2026", title: "Started Web Design Agency", desc: "Leading a boutique agency focused on delivering high-end digital products." },
  ];

  const facts = [
    { label: "Based in", value: "Lagos, NG" },
    { label: "Focus", value: "Design & Dev" },
  ];

  const strengths = [
    { title: "Modern UI Design", desc: "Visually considered interfaces that read as premium and hold up under scrutiny.", icon: <FiMonitor /> },
    { title: "Fast Performance", desc: "Every byte optimized so your site loads before the visitor loses patience.", icon: <FiZap /> },
    { title: "Clean Code", desc: "Scalable, maintainable, type-safe — built to survive the next three years, not just launch day.", icon: <FiCode /> },
  ];

  return (
    <section id="about" className="relative w-full bg-white dark:bg-black text-black dark:text-white pt-0 pb-16 md:pb-24 overflow-hidden selection:bg-red-500/30 transition-colors duration-500">

      {/* Background Decorative Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[150px] mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-0 lg:px-12 space-y-24 md:space-y-32">

        {/* 1. Who I Am — Profile + Bio */}
        <div id="who-i-am" className="space-y-12 md:space-y-16">
          <SectionHeading title="WHO I" accent="AM" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center w-full">
            {/* Left Column Text Content */}
            <FadeIn delay={200}>
              <div className="flex flex-col items-start text-left gap-8 z-10 w-full max-w-xl relative mx-auto lg:mx-0">
                {/* Statement */}
                <p className="font-marags text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white leading-[1.15] transition-colors duration-500">
                  I&rsquo;m <span className="text-primary">Segun Showunmi</span> — known in the industry as Ace.
                </p>

                {/* Description */}
                <div className="flex flex-col items-start text-left space-y-5 text-base sm:text-lg text-gray-700 dark:text-[#B3B3B3] font-medium leading-relaxed transition-colors duration-500">
                  <p>
                    I design and build agency-level digital products that sit at the intersection of aesthetic craft and technical precision.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                    I sweat the details most people skip: performance budgets, accessible interactions, pixel-accurate execution. That&rsquo;s the difference between a site that looks finished and one that feels considered.
                  </p>
                </div>

                {/* Quick facts */}
                <div className="grid grid-cols-3 gap-6 w-full pt-6 border-t border-black/10 dark:border-white/10">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-1.5">{fact.label}</p>
                      <p className="text-sm sm:text-base font-bold text-black dark:text-white">{fact.value}</p>
                    </div>
                  ))}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-1.5">Status</p>
                    <p className="text-sm sm:text-base font-bold text-primary flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                      </span>
                      Available
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Column Cinematic Image frame */}
            <FadeIn delay={300}>
               <div className="relative w-full flex justify-center lg:justify-end z-0">
                  {/* Glow Behind Image */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

                  <div className="relative w-full max-w-[380px] lg:max-w-[420px] aspect-[4/5] rounded-[20px] bg-gray-100 dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl group transition-colors duration-500">
                    <Image
                      src="/img/IMG_6723.jpg"
                      alt="Segun Showunmi — Ace"
                      fill
                      className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      priority
                    />
                    {/* Internal frame gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-90" />
                    <div className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-[20px] pointer-events-none group-hover:border-primary/40 group-hover:shadow-[inset_0_0_50px_rgba(255,26,26,0.15)] transition-all duration-500" />

                    {/* Cinematic caption tag */}
                    <div className="absolute bottom-5 left-5 z-10">
                      <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                        Segun &middot; Ace
                      </span>
                    </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>

        {/* 2. Core Strengths — an editorial index, not another card grid */}
        <div className="space-y-12">
          <SectionHeading title="CORE" accent="STRENGTHS" />
          <div className="bg-black/5 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 dark:divide-white/10">
              {strengths.map((strength, index) => (
                <FadeIn key={index} delay={index * 100} className="h-full">
                  <div className="group relative h-full overflow-hidden p-8 md:p-10 transition-colors duration-500 hover:bg-primary/5">
                    {/* Ghost index numeral */}
                    <span className="font-marags absolute -top-3 right-4 text-8xl font-black text-black/[0.04] dark:text-white/[0.06] group-hover:text-primary/10 transition-colors duration-500 select-none leading-none pointer-events-none">
                      0{index + 1}
                    </span>

                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        {strength.icon}
                      </div>
                      <h4 className="text-xl font-bold text-black dark:text-white mb-3 tracking-tight transition-colors">{strength.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-base font-medium transition-colors">{strength.desc}</p>
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Stats / Achievements Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 100}>
              <StatCard stat={stat} />
            </FadeIn>
          ))}
        </div>

        {/* 4. Skills Grid — even, calm, no jigsaw spans */}
        <div id="core-skills" className="space-y-12">
          <SectionHeading title="CORE" accent="SKILLS" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="relative h-full flex flex-col overflow-hidden bg-black/5 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 p-6 rounded-xl group hover:border-primary/40 hover:shadow-[0_0_25px_rgba(255,26,26,0.15)] transition-all duration-500">
                  <span className="absolute inset-0 w-full h-full bg-red-600 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 -translate-x-[105%] group-hover:translate-x-0"></span>

                  <div className="relative z-10 text-3xl mb-4">{skill.icon}</div>
                  <div className="relative z-10 mt-auto">
                    <h4 className="font-bold text-lg text-black dark:text-white group-hover:text-white mb-1 transition-colors tracking-tight">{skill.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/90 leading-snug transition-colors">{skill.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* 5. Tools & Technologies Stack */}
        <FadeIn>
          <div
            className="bg-white dark:bg-black border-y border-black/10 dark:border-white/10 py-10 overflow-hidden relative group transition-colors duration-500"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            <div className="flex animate-marquee hover:pause-on-hover gap-12 items-center whitespace-nowrap px-6 w-max">
              {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-black/5 dark:bg-black border border-black/10 dark:border-white/10 rounded-full hover:border-primary/40 hover:shadow-[0_0_15px_rgba(255,26,26,0.2)] transition-all duration-300 group/item">
                  <span className="text-2xl text-black dark:text-white opacity-70 group-hover/item:opacity-100 group-hover/item:text-primary transition-colors">{tech.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 6. Experience Timeline — horizontal roadmap on desktop, vertical on mobile */}
        <div className="space-y-12">
          <SectionHeading title="THE" accent="JOURNEY" />

          {/* Desktop: horizontal roadmap */}
          <div className="hidden md:grid grid-cols-3 gap-8 relative">
            <div className="absolute top-[7px] left-[calc(100%/6)] right-[calc(100%/6)] h-[2px] bg-primary/30" />
            {timeline.map((item, index) => (
              <FadeIn key={index} delay={index * 120}>
                <div className="relative text-center group">
                  <div className="relative z-10 flex justify-center mb-6">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_15px_rgba(255,26,26,0.6)] ring-4 ring-white dark:ring-black group-hover:scale-150 transition-transform duration-500" />
                  </div>
                  <div className="text-primary font-black text-xl mb-2">{item.year}</div>
                  <h4 className="text-lg font-bold text-black dark:text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[260px] mx-auto transition-colors">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden max-w-xl mx-auto w-full">
            <div className="border-l-2 border-primary/30 space-y-10 ml-4">
              {timeline.map((item, index) => (
                <FadeIn key={index} delay={index * 100}>
                  <div className="relative pl-8 group">
                    <div className="absolute left-[-7px] top-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(255,26,26,0.6)] group-hover:scale-150 transition-transform duration-500" />
                    <div className="text-primary font-black text-lg mb-1">{item.year}</div>
                    <h4 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* 7. Personal Quote Block */}
        <FadeIn>
          <div className="pt-4 md:pt-8 pb-0 flex flex-col items-center text-center relative px-6">
            <div className="absolute top-0 text-9xl text-black/5 dark:text-primary/10 font-serif -translate-y-1/2 select-none transition-colors duration-500">“</div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold italic text-black dark:text-white max-w-4xl leading-snug relative z-10 transition-colors duration-500">
              &ldquo;I build web experiences that are fast, reliable, and designed to make an impact. My goal is to satisfy client needs and provide advisory services when required.&rdquo;
            </h4>
            <div className="w-20 h-1 bg-primary mt-12 mb-10 rounded-full" />

            {/* Design Process CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href="/design-process"
                className="group relative overflow-hidden px-5 md:px-8 py-3 md:py-4 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full inline-flex items-center gap-2 md:gap-3 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(255,26,26,0.15)]"
              >
                <span className="absolute inset-0 w-full h-full bg-red-600 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></span>
                <span className="relative z-10 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Read my design process</span>
                <FiArrowRight className="relative z-10 w-3.5 h-3.5 md:w-4 md:h-4 text-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </motion.div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
