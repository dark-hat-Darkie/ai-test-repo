import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ai-purple-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & branding */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg btn-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xs">X</span>
            </div>
            <span className="text-lg font-semibold text-white">X-Force</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="#features"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
            >
              How It Works
            </a>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} X-Force. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
