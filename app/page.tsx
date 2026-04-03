import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiChevronDown } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#081856] relative selection:bg-[#081856]/10">
      <Navbar />

      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 sm:px-12 sm:py-32 transition-all">
        {/* Profile Image Container */}
        <div className="mb-8 relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[180px] lg:h-[180px] animate-fade-in animate-float opacity-0">
          <div className="absolute inset-0 rounded-full border-2 border-[#081856]/10 shadow-[0_8px_30px_rgb(8,24,86,0.12)] overflow-hidden bg-[#081856]/5">
            <Image
              src="/img/my avi.png"
              alt="Profile"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 180px"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-[1.15] tracking-tight max-w-4xl opacity-0 animate-fade-in animation-delay-200">
          Designing Clean, Modern<br className="hidden sm:block" /> Digital Experiences
        </h1>

        {/* Supporting Text */}
        <p className="mt-8 text-center text-lg sm:text-xl opacity-0 animate-fade-in animation-delay-300 max-w-[600px] text-[#081856]/70 font-medium leading-relaxed">
          I design and build responsive websites that are fast, user-friendly, and focused on delivering real results.
        </p>

        {/* Call to action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto opacity-0 animate-fade-in animation-delay-400">
          <Link
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#081856] text-white font-medium rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-center"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-[#081856] text-[#081856] font-medium rounded-full hover:bg-[#081856] hover:text-white transition-all duration-300 text-center"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex items-center justify-center gap-8 opacity-0 animate-fade-in animation-delay-500">
          <Link href="https://github.com" target="_blank" className="text-[#081856]/60 hover:text-[#081856] hover:-translate-y-1 transition-all duration-300">
            <FiGithub className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-[#081856]/60 hover:text-[#081856] hover:-translate-y-1 transition-all duration-300">
            <FiLinkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-[#081856]/60 hover:text-[#081856] hover:-translate-y-1 transition-all duration-300">
            <FiTwitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="mailto:hello@example.com" className="text-[#081856]/60 hover:text-[#081856] hover:-translate-y-1 transition-all duration-300">
            <FiMail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_1s_cubic-bezier(0.16,1,0.3,1)_800ms_forwards]">
          <div className="animate-bounce text-[#081856]/40 hover:text-[#081856] transition-colors cursor-pointer">
            <FiChevronDown className="w-7 h-7" />
          </div>
        </div>
      </main>

      <About />
      <Projects />
    </div>
  );
}
