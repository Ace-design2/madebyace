"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navItems = ["Home", "About", "Projects", "Services", "Contact"];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 ease-in-out px-6 py-4 sm:px-8 w-full max-w-[1000px] rounded-full border ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(8,24,86,0.08)] border-[#081856]/10" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center w-full">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wider text-[#081856]"
        >
          Ace
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-[#081856] font-medium opacity-80 hover:opacity-100 transition-opacity relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#081856] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button className="text-[#081856] focus:outline-none" aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        </div>
      </nav>
    </div>
  );
}
