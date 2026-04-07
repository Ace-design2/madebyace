"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowUp, FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { animateScroll } from "@/lib/scroll";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }) + " (WAT)");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    animateScroll(0, 1500);
  };

  return (
    <footer className="relative w-full bg-white dark:bg-black text-black dark:text-white pt-16 md:pt-40 pb-12 overflow-hidden selection:bg-red-500/30 transition-colors duration-500">
      
      {/* Cinematic Red Underglow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[70%] h-[400px] bg-red-600/10 blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[50%] h-[300px] bg-red-900/30 blur-[120px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none z-0" />

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent transition-colors duration-500" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Massive Typography section */}
        <div className="w-full flex flex-col items-center text-center space-y-6 md:space-y-10 mb-16 md:mb-32">
          <p className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-sm animate-pulse shadow-sm">Have an idea?</p>
          <h2 className="text-[14vw] md:text-[11vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black to-black/20 dark:from-white dark:to-white/10 select-none drop-shadow-2xl hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default">
            LET&apos;S WORK
          </h2>
          <div className="pt-6 md:pt-12">
            <Link 
              href="mailto:hello@example.com"
              className="group relative inline-flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest px-10 md:px-14 py-4 md:py-6 rounded-full overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,26,26,0.3)] hover:-translate-y-2"
            >
              <span className="absolute inset-0 w-full h-full bg-red-600 translate-y-[105%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 rounded-full" />
              <span className="relative z-10 text-[10px] md:text-[12px] text-white dark:text-black group-hover:text-white transition-colors duration-300">Start a Project</span>
            </Link>
          </div>
        </div>

        {/* Links & Info Grid */}
        <div className="w-full border-t border-black/5 dark:border-white/5 pt-12 pb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 transition-colors duration-500">
          
          {/* Local Time */}
          <div className="flex flex-col space-y-2">
            <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Local Time</p>
            <p className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base flex items-center gap-2 transition-colors duration-500">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_10px_rgba(255,26,26,0.8)]"></span>
               </span>
               Lagos, Nigeria — {time || "Loading..."}
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col space-y-3">
            <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold md:text-right">Socials</p>
            <div className="flex items-center gap-6 md:justify-end">
              <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-red-500 hover:-translate-y-1 transition-all duration-300">
                <FiGithub className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-red-500 hover:-translate-y-1 transition-all duration-300">
                <FiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-red-500 hover:-translate-y-1 transition-all duration-300">
                <FiTwitter className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:hello@example.com" className="text-gray-400 hover:text-red-500 hover:-translate-y-1 transition-all duration-300">
                <FiMail className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Strip */}
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-6 border-t border-black/5 dark:border-white/5 pt-8 transition-colors duration-500">
          <p className="text-gray-500 text-[10px] md:text-xs font-medium uppercase tracking-widest text-center md:text-left transition-colors duration-500">
            © {new Date().getFullYear()} Crafted by <span className="text-black dark:text-white font-black transition-colors duration-500">ACE.</span> All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 group text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Back to Top</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(255,26,26,0.5)] transition-all duration-500">
              <FiArrowUp className="w-4 h-4 md:w-5 md:h-5 text-gray-500 dark:text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
