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
              className="group relative px-3 py-1.5 rounded transition text-[#800000] overflow-hidden"
              style={{ minWidth: '100px', display: 'inline-block' }}
            >
              <span className="absolute top-0 left-0 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '0%'}} />
              <span className="absolute top-0 left-1/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '33.33%'}} />
              <span className="absolute top-0 left-2/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '66.66%'}} />
              <span className="absolute bottom-0 left-0 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '0%'}} />
              <span className="absolute bottom-0 left-1/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '33.33%'}} />
              <span className="absolute bottom-0 left-2/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '66.66%'}} />
              <span className="relative z-10">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/menu"
              className="group relative px-3 py-1.5 rounded transition text-[#800000] overflow-hidden"
              style={{ minWidth: '100px', display: 'inline-block' }}
            >
              <span className="absolute top-0 left-0 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '0%'}} />
              <span className="absolute top-0 left-1/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '33.33%'}} />
              <span className="absolute top-0 left-2/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '66.66%'}} />
              <span className="absolute bottom-0 left-0 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '0%'}} />
              <span className="absolute bottom-0 left-1/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '33.33%'}} />
              <span className="absolute bottom-0 left-2/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '66.66%'}} />
              <span className="relative z-10">Menu</span>
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="group relative px-3 py-1.5 rounded transition text-[#800000] overflow-hidden"
              style={{ minWidth: '100px', display: 'inline-block' }}
            >
              <span className="absolute top-0 left-0 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '0%'}} />
              <span className="absolute top-0 left-1/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '33.33%'}} />
              <span className="absolute top-0 left-2/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '66.66%'}} />
              <span className="absolute bottom-0 left-0 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '0%'}} />
              <span className="absolute bottom-0 left-1/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '33.33%'}} />
              <span className="absolute bottom-0 left-2/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '66.66%'}} />
              <span className="relative z-10">About Us</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="group relative px-3 py-1.5 rounded transition text-[#800000] overflow-hidden"
              style={{ minWidth: '100px', display: 'inline-block' }}
            >
              <span className="absolute top-0 left-0 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '0%'}} />
              <span className="absolute top-0 left-1/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '33.33%'}} />
              <span className="absolute top-0 left-2/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '66.66%'}} />
              <span className="absolute bottom-0 left-0 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '0%'}} />
              <span className="absolute bottom-0 left-1/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '33.33%'}} />
              <span className="absolute bottom-0 left-2/3 w-1/3 h-0 bg-[#FFAA33] group-hover:h-1/2 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-0" style={{left: '66.66%'}} />
              <span className="relative z-10">Contact</span>
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
