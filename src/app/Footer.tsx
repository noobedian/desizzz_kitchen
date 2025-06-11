import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#FFF8E7] to-[#FFEDD5] px-4 py-6 shadow-[0_2px_12px_0_rgba(255,170,51,0.08)]">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 md:gap-0">
        {/* Logo and Info */}
        <div className="flex-1 flex flex-col items-center justify-center md:items-start md:justify-center px-4 py-2">
          <Logo />
          <span className="text-xs text-gray-500 mt-2 text-center md:text-left">
            &copy; {new Date().getFullYear()} Desizzz Kitchen.
            <br className="md:hidden" /> All rights reserved.
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-2">
          <h4 className="font-semibold text-[#800000] mb-2 text-base tracking-wide text-center">
            Quick Links
          </h4>
          <ul className="space-y-1 text-base text-center">
            <li>
              <a
                href="/"
                className="text-[#800000] hover:text-white hover:bg-[#FFAA33] transition font-medium rounded px-2 py-1"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/menu"
                className="text-[#800000] hover:text-white hover:bg-[#FFAA33] transition font-medium rounded px-2 py-1"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#800000] hover:text-white hover:bg-[#FFAA33] transition font-medium rounded px-2 py-1"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#800000] hover:text-white hover:bg-[#FFAA33] transition font-medium rounded px-2 py-1"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-2">
          <h4 className="font-semibold text-[#800000] mb-2 text-base tracking-wide text-center">
            Contact
          </h4>
          <ul className="space-y-1 text-base text-gray-700 text-center">
            <li className="flex items-center justify-center gap-2">
              {/* address icon */}
              <svg className="w-4 h-4 text-[#FFAA33]" /*...*/></svg>
              123 Main St, Blacktown NSW 2148
            </li>
            <li className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-[#FFAA33]" /*...*/></svg>
              <a
                href="tel:+61123456789"
                className="text-[#800000] hover:text-white hover:bg-[#FFAA33] transition rounded px-2 py-1"
              >
                +61 123 456 789
              </a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-[#FFAA33]" /*...*/></svg>
              <a
                href="mailto:info@desizzzkitchen.com"
                className="text-[#800000] hover:text-white hover:bg-[#FFAA33] transition rounded px-2 py-1"
              >
                info@desizzzkitchen.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-2">
          <h4 className="font-semibold text-[#800000] mb-2 text-base tracking-wide text-center">
            Social
          </h4>
          <div className="flex gap-3 justify-center">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#800000] hover:text-white hover:bg-[#FFAA33] transition text-2xl rounded p-1"
            >
              {/* instagram SVG */}
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#800000] hover:text-white hover:bg-[#FFAA33] transition text-2xl rounded p-1"
            >
              {/* facebook SVG */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
