"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Simple scroll spy logic
      const sections = ["about", "skills", "projects"];
      let current = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section's top is closer to or past the center, it's active
          if (rect.top <= 300) {
            current = sections[i];
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize
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

  const navItems = ["About", "Skills", "Projects"];

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-[100] flex justify-center px-2 pointer-events-none">
      {/* Pill Container */}
      <nav className="pointer-events-auto px-2 sm:px-3 py-2 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full inline-flex justify-center items-center gap-1 sm:gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300">

        {/* Nav Links */}
        <div className="flex items-center gap-0.5 sm:gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full flex justify-center items-center transition-all duration-300 ${
                  isActive ? "bg-red-600/90 shadow-[0_0_15px_rgba(255,26,26,0.5)]" : "hover:bg-white/10"
                }`}
              >
                <span className={`text-[9px] sm:text-xs tracking-widest uppercase ${
                  isActive ? "text-white font-bold" : "text-gray-300 font-medium"
                }`}>
                  {item}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 sm:h-5 bg-white/20 mx-1.5 sm:mx-3 rounded-full"></div>

        {/* Let's Talk CTA */}
        <div className="relative" ref={contactRef}>
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="relative overflow-hidden group border border-white/20 hover:border-red-500 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 flex justify-center items-center transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-red-600 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></span>
            <span className="relative z-10 text-white text-[9px] sm:text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors duration-300">Let’s Talk</span>
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
