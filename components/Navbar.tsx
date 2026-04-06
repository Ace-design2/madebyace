"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiHome } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useLoading } from "@/context/LoadingContext";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useLoading();

  useEffect(() => {
    const handleScroll = () => {
      // Updated scroll spy logic for new section IDs
      const sections = [
        { id: "hero", label: "Home" },
        { id: "who-i-am", label: "About" },
        { id: "core-skills", label: "Skills" },
        { id: "projects", label: "Work" },
      ];
      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // More sensitive check for hero section at the top
          const threshold = sections[i].id === "hero" ? 100 : 400;
          if (rect.top <= threshold) {
            current = sections[i].label.toLowerCase();
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsContactOpen(false);
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const offset = 100; // Extra spacing for top margin
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1500; // Slower duration for cinematic feel
    let start: number | null = null;

    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeOutQuint(percentage));
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
    setIsContactOpen(false);
  };

  const navItems = [
    { label: <FiHome className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, id: "hero", tracking: "home" },
    { label: "About", id: "who-i-am", tracking: "about" },
    { label: "Skills", id: "core-skills", tracking: "skills" },
    { label: "Work", id: "projects", tracking: "work" },
  ];

  return (
    <div className={`fixed top-4 sm:top-6 left-0 right-0 z-[100] flex justify-center px-2 pointer-events-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoading ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"}`}>
      {/* Pill Container */}
      <nav className="pointer-events-auto px-2 sm:px-3 py-2 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full inline-flex justify-center items-center gap-1 sm:gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20">

        {/* Nav Links */}
        <div className="flex items-center gap-0.5 sm:gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.tracking;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full flex justify-center items-center transition-all duration-300 ${
                  isActive ? "bg-red-600/90 shadow-[0_0_15px_rgba(255,26,26,0.5)]" : "hover:bg-white/10"
                }`}
              >
                <span className={`text-[9px] sm:text-xs tracking-widest uppercase flex items-center justify-center transition-colors duration-300 ${
                  isActive ? "text-white font-bold" : "text-gray-300 font-medium"
                }`}>
                  {typeof item.label === "string" ? item.label : (
                    <span className={isActive ? "text-white" : "text-gray-300"}>
                      {item.label}
                    </span>
                  )}
                </span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 sm:h-5 bg-white/20 mx-1.5 sm:mx-3 rounded-full"></div>

        {/* Let's Talk CTA */}
        <div className="relative" ref={contactRef}>
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className={`relative overflow-hidden group border rounded-full px-3 sm:px-5 py-1.5 sm:py-2 flex justify-center items-center transition-all duration-500 ${
              isContactOpen ? "border-red-500 bg-red-600 shadow-[0_0_15px_rgba(255,26,26,0.4)]" : "border-white/20 hover:border-red-500"
            }`}
          >
            <span className={`absolute inset-0 w-full h-full bg-red-600 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 ${
              isContactOpen ? "translate-x-0" : "-translate-x-[105%] group-hover:translate-x-0"
            }`}></span>
            <span className="relative z-10 text-white text-[9px] sm:text-xs font-bold tracking-widest uppercase transition-colors duration-300">Let’s Talk</span>
          </button>

          {/* Contact Tooltip Dropdown */}
          <div
            className={`absolute top-full right-0 mt-4 w-60 sm:w-64 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-2 shadow-2xl transition-all duration-300 origin-top-right ${
              isContactOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="flex flex-col space-y-1">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <FaWhatsapp className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold">WhatsApp</span>
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider">Chat with me</span>
                </div>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <FiPhone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold">Phone</span>
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider">Call directly</span>
                </div>
              </a>
              <a href="mailto:hello@example.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <FiMail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold">Email</span>
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider">Send a message</span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
}
