"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiSearch, FiTarget, FiLayout, FiCode, FiZap, FiCheckCircle, FiSun, FiMoon } from "react-icons/fi";
import { SiFramer } from "react-icons/si";
import { useTheme } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { useLoading } from "@/context/LoadingContext";

// Simple FadeIn component for the page
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function DesignProcessPage() {
  const { isLoading } = useLoading();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const processes = [
    {
      step: "01",
      title: "Discovery & Research",
      desc: "Every successful project begins with understanding. In this phase, I take time to learn about your business, audience, and goals. I analyze competitors, identify opportunities, and gather the insights needed to build a strong foundation for the project. This ensures that every design decision is intentional and aligned with real user needs.",
      icon: <FiSearch />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      desc: "Once the research is complete, I create a clear roadmap for the project. This includes defining the structure, user flow, features, and overall direction of the website or product. Careful planning helps prevent confusion, reduces revisions, and ensures the final result is efficient, scalable, and focused on achieving your business objectives.",
      icon: <FiTarget />,
      color: "from-purple-500/20 to-transparent"
    },
    {
      step: "03",
      title: "Visual Design",
      desc: "With a solid plan in place, I design the visual experience. This is where creativity meets usability. I craft layouts, typography, colors, and interactions that reflect your brand while maintaining clarity and ease of use. The goal is to create a modern, visually appealing interface that users enjoy interacting with.",
      icon: <SiFramer />,
      color: "from-red-600/20 to-transparent"
    },
    {
      step: "04",
      title: "Modern Development",
      desc: "After the design is approved, I bring it to life using modern technologies and best practices. I focus on clean code, performance, responsiveness, and accessibility to ensure the website works seamlessly across devices and browsers. The result is a fast, reliable, and scalable digital product built for real-world use.",
      icon: <FiCode />,
      color: "from-emerald-500/20 to-transparent"
    },
    {
      step: "05",
      title: "Optimisation & Delivery",
      desc: "Before launch, I test, refine, and optimize every detail. This includes performance improvements, responsiveness checks, and final adjustments to ensure everything runs smoothly. Once the project is ready, I deliver a polished product and provide support to ensure long-term success.",
      icon: <FiZap />,
      color: "from-yellow-400/20 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative selection:bg-red-500/30 flex flex-col transition-colors duration-500 overflow-x-hidden">
      <MouseGlow />

      {/* Persistent Navigation Overlay at the Top */}
      <div className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
        <FadeIn className="pointer-events-auto flex items-center gap-2 md:gap-3">
          <Link 
            href="/#about" 
            className="flex items-center gap-2 md:gap-3 px-5 md:px-6 py-2.5 md:py-3 bg-red-600 border border-red-500 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white hover:bg-red-700 hover:shadow-[0_8px_32px_rgba(255,26,26,0.4)] transition-all group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform w-3 md:w-3.5 h-3 md:h-3.5" />
            Back to About
          </Link>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 md:w-11 h-10 md:h-11 rounded-full flex justify-center items-center bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-red-500/50 hover:shadow-[0_8px_32px_rgba(255,26,26,0.3)] transition-all group"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <FiSun className="w-3.5 md:w-4 h-3.5 md:h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
              ) : (
                <FiMoon className="w-3.5 md:w-4 h-3.5 md:h-4 text-gray-600 group-hover:text-red-500 transition-colors" />
              )}
            </button>
          )}
        </FadeIn>
      </div>

      {/* Background Decorative Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-[10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 -right-[10%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[150px] mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-5 mix-blend-overlay" />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-8 mb-20 md:mb-32">
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-marags font-black tracking-tighter uppercase leading-none">
              My Design <br/><span className="text-red-600 dark:text-red-500">Process</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-[#B3B3B3] max-w-2xl leading-relaxed font-medium">
              A structured, user-focused approach that turns ideas into functional, modern digital experiences.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="w-24 h-1 bg-red-600 rounded-full" />
          </FadeIn>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 md:space-y-24 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-[1px] bg-red-600/20 -translate-x-1/2 hidden md:block" />
          
          {processes.map((process, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Desktop Center Point */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-[0_0_15px_rgba(255,26,26,0.8)] z-20 hidden md:block" />
              
              {/* Content Side */}
              <FadeIn delay={index * 0.1} className="w-full md:w-1/2">
                <div className={`p-8 md:p-12 rounded-[2.5rem] bg-black/5 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 relative overflow-hidden group hover:border-transparent transition-all duration-500 shadow-xl ${index % 2 !== 0 ? 'md:text-right md:items-end flex flex-col' : ''}`}>
                  
                  {/* SVG Progress Border */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      rx="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      pathLength="100"
                      strokeDasharray="100"
                      className="text-red-500 [stroke-dashoffset:100] group-hover:[stroke-dashoffset:0] transition-all duration-700 ease-out"
                    />
                  </svg>

                  {/* Subtle Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="relative z-10">
                    <div className={`text-sm font-black text-red-600 mb-4 tracking-[0.3em] font-mono`}>{process.step}</div>
                    <div className={`w-14 h-14 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-500 text-3xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                      {process.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4 tracking-tight transition-colors">{process.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base font-medium transition-colors">
                      {process.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              {/* Spacer for other side on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
