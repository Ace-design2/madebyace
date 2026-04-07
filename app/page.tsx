"use client";

import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronDown, FiArrowRight, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import TypewriterHeadline from "@/components/TypewriterHeadline";

import { useLoading } from "@/context/LoadingContext";
import { animateScroll } from "@/lib/scroll";

export default function Home() {
  const { isLoading } = useLoading();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative selection:bg-red-500/30 flex flex-col transition-colors duration-500">
      <MouseGlow />
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-400/10 dark:bg-red-500/20 rounded-full blur-[100px] dark:blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse transition-all duration-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-800/5 dark:bg-[#B30000]/20 rounded-full blur-[120px] dark:blur-[150px] mix-blend-multiply dark:mix-blend-screen transition-all duration-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)] transition-colors duration-500"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <main id="hero" className="flex-1 relative flex flex-col lg:grid lg:grid-cols-3 items-center min-h-[100vh] px-6 py-20 md:py-32 sm:px-12 transition-all max-w-[1600px] mx-auto z-10 w-full gap-12 lg:gap-8 overflow-hidden lg:overflow-visible">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ y: -80, opacity: 0 }}
          animate={isLoading ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-1 z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:gap-10 w-full max-w-xl mx-auto lg:mx-0 order-1"
        >
          <div className="flex flex-col items-center lg:items-start gap-2">
            {/* Availability Badge */}
            <div className="flex items-center gap-3 px-3 py-1.5 bg-red-500/5 border border-red-500/10 rounded-full w-fit animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500 shadow-[0_0_8px_rgba(255,26,26,0.8)]"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-red-500/80">Available for new projects</span>
            </div>

            {/* Headline */}
            <TypewriterHeadline />
          </div>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl max-w-[600px] text-gray-700 dark:text-[#B3B3B3] font-medium leading-relaxed m-0 transition-colors duration-500">
            I design and build high-performance websites and applications that combine modern design, speed, and seamless user experience.
          </p>

          {/* Call to action buttons horizontally stacked */}
          <div className="flex flex-row items-center justify-start gap-4 w-full sm:w-auto m-0">
            <Link
              href="#projects"
              className="bg-red-600 text-white font-[12px] sm:font-bold rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-md hover:shadow-[0_0_25px_rgba(255,26,26,0.8)] transition-all duration-300 text-center flex-1 sm:flex-none text-sm sm:text-base flex items-center justify-center gap-2 group"
            >
              <span>View My Work</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <button
               onClick={() => {
                 const target = document.getElementById('contact');
                 if (target) {
                   const bodyRect = document.body.getBoundingClientRect().top;
                   const elementRect = target.getBoundingClientRect().top;
                   animateScroll(elementRect - bodyRect, 1500);
                 }
               }}
              className="relative overflow-hidden group border border-red-500 text-red-500 font-[12px] sm:font-bold rounded-full px-4 sm:px-8 py-3 sm:py-4 text-center flex-1 sm:flex-none text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 w-full h-full bg-red-500 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                Contact Me
                <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Center Column: Large Background Image */}
        <motion.div 
          initial={{ y: 150, opacity: 0, scale: 0.5 }}
          animate={isLoading ? { y: 150, opacity: 0, scale: 0.5 } : { y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-1 z-0 order-2 w-full flex justify-center items-center pointer-events-none mt-8 lg:mt-0"
        >
          <div className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[240px] h-[240px] sm:w-[240px] sm:h-[240px] md:w-[340px] md:h-[340px] lg:w-[420px] lg:h-[420px] xl:w-[520px] xl:h-[520px] 2xl:w-[600px] 2xl:h-[600px] max-w-[90vw] z-0 mx-auto">
            {/* Pulsing Rings Background - Subtler Pulse */}
            {[1.2, 1.8, 2.4].map((scale, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-red-500/30"
                animate={{ 
                  scale: [1, scale],
                  opacity: [0.35, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.4,
                  ease: "easeOut",
                }}
              />
            ))}

            <div className="absolute inset-0 rounded-full border-2 border-red-500 dark:shadow-[0_0_120px_rgba(255,26,26,0.6)] shadow-[0_0_60px_rgba(255,26,26,0.2)] overflow-hidden bg-white/30 dark:bg-black/30 backdrop-blur-sm z-10 transition-all duration-500">
              <Image
                src="/img/my-avi-2.png"
                alt="Profile"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 600px"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Column: Social Icons & Scroll Indicator */}
        <motion.div 
          initial={{ y: -80, opacity: 0 }}
          animate={isLoading ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative lg:col-span-1 z-10 flex flex-col items-center lg:items-end justify-center w-full h-full order-3 mt-12 lg:mt-0"
        >
          <div className="flex flex-col items-center gap-12">
            {/* Top Trailing Line - Pulsing Downwards */}
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 80 }}
              transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
              className="w-[1px] bg-red-500/20 relative overflow-hidden rounded-full hidden lg:block"
            >
              <motion.div 
                animate={{ 
                  height: ["0%", "30%", "30%", "0%"],
                  top: ["0%", "0%", "70%", "100%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute left-0 w-full bg-red-500 shadow-[0_0_15px_rgba(255,26,26,0.6)]"
              />
            </motion.div>

            {/* Social Icons Stack - Centered horizontally to line */}
            <div className="bg-black/5 dark:bg-white/[0.03] backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full px-8 py-3 sm:px-10 sm:py-4 lg:px-4 lg:py-8 shadow-[0_4px_15px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500">
              <div className="flex flex-row lg:flex-col items-center gap-6 lg:gap-8">
                <Link href="https://github.com" target="_blank" className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 hover:scale-110 transition-all duration-300">
                  <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 hover:scale-110 transition-all duration-300">
                  <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://twitter.com" target="_blank" className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 hover:scale-110 transition-all duration-300">
                  <FiTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="mailto:hello@example.com" target="_blank" className="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 hover:scale-110 transition-all duration-300">
                  <FiMail className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            {/* Scroll Indicator - Bottom Tether */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-red-500 [writing-mode:vertical-lr] font-bold mb-2 group-hover:text-white transition-colors duration-300">Scroll</span>
                <div className="w-[1px] h-24 bg-red-500/20 relative overflow-hidden rounded-full">
                  <motion.div 
                    animate={{ 
                      height: ["0%", "40%", "40%", "0%"],
                      top: ["0%", "0%", "60%", "100%"],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute left-0 w-full bg-red-500 shadow-[0_0_15px_rgba(255,26,26,0.8)]"
                  />
                </div>
                <motion.div
                  animate={{ 
                    y: [0, 4, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <FiChevronDown className="w-5 h-5 text-red-500 -mt-1 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </main>

      <div className="relative z-10 bg-transparent flex-none">
        <About />
        <Projects />
      </div>
      
      {/* Footer Section placed at the bottom */}
      <div id="contact" className="relative z-10 w-full mt-auto shrink-0 flex-none bg-transparent">
        <Footer />
      </div>

    </div>
  );
}
