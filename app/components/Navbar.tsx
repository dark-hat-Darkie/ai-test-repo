'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
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

          {/* Navigation Links (Desktop) */}
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

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* CTA Button (Desktop only) */}
            <a
              href="#get-started"
              className="hidden md:inline-flex btn-gradient px-5 py-2 rounded-lg text-sm font-semibold text-white glow-sm"
            >
              Get Started
            </a>

            {/* Hamburger Button (Mobile only) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-300"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mobile-menu-overlay" onClick={closeMobileMenu}>
          <div
            className="mobile-menu-panel glass border-t border-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg text-base text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg text-base text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
              >
                How It Works
              </a>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg text-base text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg text-base text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
              >
                Contact
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block px-4 py-3 rounded-lg text-base text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
              >
                GitHub
              </a>
              <div className="pt-4 border-t border-white/5">
                <a
                  href="#get-started"
                  onClick={closeMobileMenu}
                  className="block w-full btn-gradient px-5 py-3 rounded-lg text-sm font-semibold text-white text-center glow-sm"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
