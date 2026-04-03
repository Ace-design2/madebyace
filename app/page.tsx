import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronDown } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-red-500/30">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#B30000]/20 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <main className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-[100vh] px-6 py-32 sm:px-12 transition-all max-w-6xl mx-auto z-10 w-full gap-12 lg:gap-8">
        
        {/* Content Container (Left side) */}
        <div className="flex-1 flex flex-col items-start text-left w-full mt-8 lg:mt-0">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.15] tracking-tight max-w-2xl opacity-0 animate-fade-in animation-delay-200">
            Building <span className="text-red-500">Powerful</span><br className="hidden sm:block" /> Digital Experiences
          </h1>

          {/* Supporting Text */}
          <p className="mt-8 text-lg sm:text-xl opacity-0 animate-fade-in animation-delay-300 max-w-[600px] text-[#B3B3B3] leading-relaxed">
            I design and build high-performance websites and applications that combine modern design, speed, and seamless user experience.
          </p>

          {/* Call to action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-start justify-start gap-4 w-full sm:w-auto opacity-0 animate-fade-in animation-delay-400">
            <Link
              href="#work"
              className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-bold rounded-full shadow-md hover:shadow-[0_0_25px_rgba(255,26,26,0.8)] transition-all duration-300 text-center"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 text-center"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="mt-12 flex items-center justify-start gap-6 opacity-0 animate-fade-in animation-delay-500 w-full">
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
            <Link href="mailto:hello@example.com" className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300">
              <FiMail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        {/* Profile Image Container (Right side) */}
        <div className="relative flex-shrink-0 w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px] animate-fade-in animate-float opacity-0">
          <div className="absolute inset-0 rounded-full border-2 border-red-500 shadow-[0_0_40px_rgba(255,26,26,0.6)] overflow-hidden bg-black/20">
            <Image
              src="/img/my avi.png"
              alt="Profile"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 130px, (max-width: 1024px) 160px, 200px"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_1s_cubic-bezier(0.16,1,0.3,1)_800ms_forwards]">
          <div className="animate-bounce text-red-500 hover:text-red-400 transition-colors cursor-pointer">
            <FiChevronDown className="w-7 h-7" />
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
