"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navItems = ["Home", "About", "Projects", "Services", "Contact"];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-out px-6 py-4 sm:px-8 w-full max-w-6xl rounded-full border ${
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
            <Link 
              href="#contact" 
              className="hidden md:flex relative overflow-hidden group border border-white/20 hover:border-red-500 text-[12px] uppercase tracking-widest font-bold text-white rounded-full px-6 py-3 transition-all duration-500"
            >
              <span className="absolute inset-0 w-full h-full bg-red-600 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
            </Link>

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
          <div className={`transition-all duration-700 delay-500 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <Link 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="relative overflow-hidden group border-2 border-red-500 text-[14px] sm:text-[16px] uppercase tracking-widest font-black text-white rounded-full px-10 py-5 transition-all duration-500 block text-center"
            >
              <span className="absolute inset-0 w-full h-full bg-red-600 -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Let's Talk</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
