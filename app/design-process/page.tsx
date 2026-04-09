"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiSearch, FiTarget, FiLayout, FiCode, FiZap, FiCheckCircle } from "react-icons/fi";
import { SiFramer } from "react-icons/si";
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

  const processes = [
    {
      step: "01",
      title: "Discovery & Research",
      desc: "Every great product starts with understanding. I dive deep into your brand, goals, and target audience to define the core problem we are solving.",
      icon: <FiSearch />,
      color: "from-blue-500/20 to-transparent"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      desc: "Mapping out the user journey, information architecture, and technical roadmap. We align on the vision before a single pixel is moved.",
      icon: <FiTarget />,
      color: "from-purple-500/20 to-transparent"
    },
    {
      step: "03",
      title: "Visual Design",
      desc: "This is where the magic happens. I craft high-fidelity, cinematic interfaces in Figma that are both aesthetically stunning and functionally intuitive.",
      icon: <SiFramer />,
      color: "from-red-600/20 to-transparent"
    },
    {
      step: "04",
      title: "Modern Development",
      desc: "Transforming designs into high-performance, responsive code. Using Next.js and Framer Motion to ensure the experience is fluid and fast.",
      icon: <FiCode />,
      color: "from-emerald-500/20 to-transparent"
    },
    {
      step: "05",
      title: "Optimization & Delivery",
      desc: "Final polish—performance tuning, SEO optimization, and rigorous testing to ensure your product is ready to make a global impact.",
      icon: <FiZap />,
      color: "from-yellow-400/20 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative selection:bg-red-500/30 flex flex-col transition-colors duration-500 overflow-x-hidden">
      <MouseGlow />
      <Navbar />

      {/* Background Decorative Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-[10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-1/4 -right-[10%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[150px] mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-5 mix-blend-overlay" />
      </div>

      <main className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-8 mb-20 md:mb-32">
          <FadeIn>
            <Link 
              href="/#about" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-red-500 hover:border-red-500/50 transition-all mb-8 group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to About
            </Link>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-marags font-black tracking-tighter uppercase leading-none">
              My Design <br/><span className="text-red-600 dark:text-red-500">Process</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-[#B3B3B3] max-w-2xl leading-relaxed font-medium">
              A systematic approach to building cinematic digital products that merge aesthetic brilliance with technical precision.
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
                <div className={`p-8 md:p-12 rounded-[2.5rem] bg-black/5 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 relative overflow-hidden group hover:border-red-500/40 transition-all duration-500 shadow-xl ${index % 2 !== 0 ? 'md:text-right md:items-end flex flex-col' : ''}`}>
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

        {/* Final CTA Section */}
        <FadeIn delay={0.4} className="mt-32 md:mt-48 text-center bg-black/5 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-[3rem] p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-red-600/[0.02] dark:bg-red-600/5 group-hover:bg-red-600/10 transition-colors duration-700" />
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-6xl font-marags font-black tracking-tight uppercase leading-tight">
              Ready to create <br/>something <span className="text-red-600 dark:text-red-500">Legendary?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg md:text-xl font-medium">
              Transform your digital presence with a design process optimized for results.
            </p>
            <Link
              href="/#contact"
              className="bg-red-600 text-white font-bold rounded-full px-10 py-5 shadow-xl hover:shadow-[0_0_35px_rgba(255,26,26,0.6)] transition-all duration-300 uppercase tracking-widest text-sm flex items-center gap-3 group/btn"
            >
              Start Your Project
              <FiCheckCircle className="w-5 h-5 group-hover/btn:scale-125 transition-transform" />
            </Link>
          </div>
          
          {/* Decorative Background Icon */}
          <div className="absolute -bottom-10 -right-10 text-black/5 dark:text-white/5 group-hover:text-red-600/10 transition-colors duration-700 pointer-events-none">
            <FiZap className="text-[20rem] rotate-12" />
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
