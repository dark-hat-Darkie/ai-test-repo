'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center glow-sm">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              X-Force
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              How It Works
            </a>
            <Link
              href="/about"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#get-started"
            className="btn-gradient px-5 py-2 rounded-lg text-sm font-semibold text-white glow-sm"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
