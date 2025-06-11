import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-lg rounded-b-2xl transition-all duration-300">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center">
          <Logo />
        </div>
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link
              href="/"
              className="group px-3 py-1.5 rounded relative text-[#800000] transition-colors duration-200"
              style={{ minWidth: '100px', display: 'inline-block' }}
            >
              <span className="relative z-10">Home</span>
              <span className="pointer-events-none absolute left-0 bottom-1 w-0 h-0.5 bg-[#FFAA33] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className="group px-3 py-1.5 rounded relative text-[#800000] transition-colors duration-200"
              style={{ minWidth: '100px', display: 'inline-block' }}
            >
              <span className="relative z-10">Menu</span>
              <span className="pointer-events-none absolute left-0 bottom-1 w-0 h-0.5 bg-[#FFAA33] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="group px-3 py-1.5 rounded relative text-[#800000] transition-colors duration-200"
              style={{ minWidth: '100px', display: 'inline-block' }}
            >
              <span className="relative z-10">About Us</span>
              <span className="pointer-events-none absolute left-0 bottom-1 w-0 h-0.5 bg-[#FFAA33] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="group px-3 py-1.5 rounded relative text-[#800000] transition-colors duration-200"
              style={{ minWidth: '100px', display: 'inline-block' }}
            >
              <span className="relative z-10">Contact</span>
              <span className="pointer-events-none absolute left-0 bottom-1 w-0 h-0.5 bg-[#FFAA33] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <button className="p-2">
            <span className="block w-6 h-0.5 bg-[#800000] mb-1"></span>
            <span className="block w-6 h-0.5 bg-[#800000] mb-1"></span>
            <span className="block w-6 h-0.5 bg-[#800000]"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
