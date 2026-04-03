"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const mobileContactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
      if (mobileContactRef.current && !mobileContactRef.current.contains(event.target as Node)) {
        // Mobile contact tooltips usually close when the whole menu closes, 
        // but we can handle it here if needed.
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = ["Home", "About", "Projects", "Services"];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-out pl-6 pr-4 py-2.5 sm:pl-8 sm:pr-4 w-full max-w-6xl rounded-full border ${
          isScrolled 
            ? "bg-black/70 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(255,26,26,0.15)]" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className="text-2xl font-black tracking-widest text-white hover:opacity-80 transition-opacity duration-300"
            >
              ACE<span className="text-red-500">.</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex justify-center items-center space-x-10">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-[13px] uppercase tracking-[0.15em] font-semibold text-gray-400 hover:text-white transition-colors duration-300 relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(255,26,26,0.8)]"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden md:block relative" ref={contactRef}>
              <button 
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="relative overflow-hidden group border border-white/20 hover:border-red-500 text-[12px] uppercase tracking-widest font-bold text-white rounded-full px-6 py-3 transition-all duration-500"
              >
                <span className="absolute inset-0 w-full h-full bg-red-600 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
              </button>

              {/* Desktop Tooltip */}
              <div className={`absolute top-full right-0 mt-4 w-64 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl transition-all duration-300 origin-top-right ${
                isContactOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}>
                <div className="flex flex-col space-y-1">
                  <a href="https://wa.me/1234567890" target="_blank" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">WhatsApp</span>
                      <span className="text-gray-400 text-[10px] uppercase tracking-wider">Chat with me</span>
                    </div>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">Phone</span>
                      <span className="text-gray-400 text-[10px] uppercase tracking-wider">Call directly</span>
                    </div>
                  </a>
                  <a href="mailto:hello@example.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">Email</span>
                      <span className="text-gray-400 text-[10px] uppercase tracking-wider">Send a message</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-500 transition-colors focus:outline-none z-[70] relative" 
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          {/* Mobile Links */}
          <ul className="flex flex-col items-center space-y-8">
            {navItems.map((item, index) => (
              <li 
                key={item}
                className={`transition-all duration-700 delay-[${index * 100}ms] ${
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl sm:text-4xl font-black uppercase tracking-[0.2em] text-white hover:text-red-500 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className={`w-full transition-all duration-700 delay-500 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="flex flex-col space-y-4 w-full max-w-[280px] mx-auto">
              <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold text-center">Let's Connect</span>
              <div className="grid grid-cols-1 gap-3">
                <a href="https://wa.me/1234567890" target="_blank" className="flex items-center justify-center gap-4 border border-white/10 bg-white/5 rounded-2xl py-4 hover:border-red-500/50 transition-all">
                  <FaWhatsapp className="w-6 h-6 text-green-500" />
                  <span className="text-white font-bold uppercase tracking-wider text-xs">WhatsApp</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center justify-center gap-4 border border-white/10 bg-white/5 rounded-2xl py-4 hover:border-red-500/50 transition-all">
                  <FiPhone className="w-6 h-6 text-blue-500" />
                  <span className="text-white font-bold uppercase tracking-wider text-xs">Phone Call</span>
                </a>
                <a href="mailto:hello@example.com" className="flex items-center justify-center gap-4 border border-white/10 bg-white/5 rounded-2xl py-4 hover:border-red-500/50 transition-all">
                  <FiMail className="w-6 h-6 text-red-500" />
                  <span className="text-white font-bold uppercase tracking-wider text-xs">Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
