import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronDown } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import MouseGlow from "@/components/MouseGlow";
import TypewriterHeadline from "@/components/TypewriterHeadline";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-red-500/30">
      <MouseGlow />
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#B30000]/20 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <main className="relative flex flex-col lg:grid lg:grid-cols-3 items-center min-h-[100vh] px-6 py-32 sm:px-12 transition-all max-w-[1400px] mx-auto z-10 w-full gap-12 lg:gap-8 overflow-hidden lg:overflow-visible">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-1 z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-10 lg:gap-24 w-full max-w-xl mx-auto lg:mx-0 order-1">
          {/* Headline */}
          <TypewriterHeadline />

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl opacity-0 animate-fade-in animation-delay-300 max-w-[600px] text-[#B3B3B3] leading-relaxed m-0">
            I design and build high-performance websites and applications that combine modern design, speed, and seamless user experience.
          </p>

          {/* Call to action buttons horizontally stacked */}
          <div className="flex flex-row items-center justify-start gap-4 w-full sm:w-auto opacity-0 animate-fade-in animation-delay-400 m-0">
            <Link
              href="#work"
              className="bg-red-600 text-white font-[12px] sm:font-bold rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-md hover:shadow-[0_0_25px_rgba(255,26,26,0.8)] transition-all duration-300 text-center flex-1 sm:flex-none text-sm sm:text-base"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="relative overflow-hidden group border border-red-500 text-red-500 font-[12px] sm:font-bold rounded-full px-4 sm:px-8 py-3 sm:py-4 text-center flex-1 sm:flex-none text-sm sm:text-base"
            >
              <span className="absolute inset-0 w-full h-full bg-red-500 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Me</span>
            </Link>
          </div>
        </div>

        {/* Center Column: Large Background Image */}
        <div className="lg:col-span-1 z-0 order-2 w-full flex justify-center items-center pointer-events-none mt-8 lg:mt-0">
          <div className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[650px] lg:h-[650px] max-w-[90vw] animate-fade-in opacity-0 z-0 mx-auto">
            <div className="absolute inset-0 rounded-full border-2 border-red-500 shadow-[0_0_120px_rgba(255,26,26,0.6)] overflow-hidden bg-black/30 backdrop-blur-sm">
              <Image
                src="/img/my avi.png"
                alt="Profile"
                fill
                priority
                className="object-cover"

                sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 650px"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Social Icons & Scroll Indicator */}
        <div className="relative lg:col-span-1 z-10 flex flex-col items-center lg:items-end justify-center w-full h-full order-3 mt-12 lg:mt-0 opacity-0 animate-fade-in animation-delay-500">
          <div className="flex flex-row lg:flex-col items-center lg:items-end gap-6 mb-auto lg:mb-0 lg:py-20">
            <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300">
              <FiGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300">
              <FiLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300">
              <FiTwitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:hello@example.com" target="_blank" className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300">
              <FiMail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          {/* Scroll Indicator - Aligned with icons */}
          <div className="lg:absolute lg:bottom-12 flex flex-col items-center gap-3 opacity-0 animate-[fade-in_1s_cubic-bezier(0.16,1,0.3,1)_1200ms_forwards] mt-12 lg:mt-0">
            <span className="text-[10px] uppercase tracking-[0.3em] text-red-500 [writing-mode:vertical-lr] font-bold">Scroll</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-red-500/0 via-red-500 to-red-500 relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-1.5 h-1.5 border-r border-b border-red-500 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10 bg-black">
        <About />
        <Projects />
      </div>
    </div>
  );
}
