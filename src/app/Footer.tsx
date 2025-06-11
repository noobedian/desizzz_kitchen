import { Logo } from "./Logo";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { AccordionSection } from "./AccordionSection"; 
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#FFF8E7] to-[#FFEDD5] px-4 py-10 shadow-[0_2px_12px_0_rgba(255,170,51,0.08)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start text-sm text-[#800000]">

          {/* Logo - Desktop only */}
          <div className="hidden md:block">
            <Logo />
            <p className="text-xs text-gray-500 leading-relaxed mt-3">
              &copy; {new Date().getFullYear()} Desizzz Kitchen. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-12">
            {/* Desktop */}
            <div className="hidden md:block">
              <h4 className="font-semibold mb-3 text-base">Quick Links</h4>
              <ul className="space-y-1.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "Menu", href: "/menu" },
                  { label: "About Us", href: "#about" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#800000] hover:text-white hover:bg-[#FFAA33] transition font-medium rounded px-2 py-1"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
              <AccordionSection title="Quick Links">
                <ul className="pl-2 space-y-1.5">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Menu", href: "/menu" },
                    { label: "About Us", href: "#about" },
                    { label: "Contact", href: "#contact" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:underline hover:text-[#FFAA33] transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionSection>
            </div>
          </div>

          {/* Contact */}
          <div className="w-full">
            {/* Desktop */}
            <div className="hidden md:block">
              <h4 className="font-semibold mb-3 text-base">Contact</h4>
              <ul className="space-y-1.5 text-[#333]">
                <li>123 Main St, Blacktown NSW 2148</li>
                <li>
                  <a href="tel:+61123456789" className="hover:underline hover:text-[#800000]">
                    +61 123 456 789
                  </a>
                </li>
                <li>
                  <a href="mailto:info@desizzzkitchen.com" className="hover:underline hover:text-[#800000]">
                    info@desizzzkitchen.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
              <AccordionSection title="Contact">
                <ul className="pl-2 space-y-1.5 text-[#333]">
                  <li>123 Main St, Blacktown NSW 2148</li>
                  <li>
                    <a href="tel:+61123456789" className="hover:underline hover:text-[#800000]">
                      +61 123 456 789
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@desizzzkitchen.com" className="hover:underline hover:text-[#800000]">
                      info@desizzzkitchen.com
                    </a>
                  </li>
                </ul>
              </AccordionSection>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="w-full">
            {/* Desktop */}
            <div className="hidden md:block">
              <h4 className="font-semibold mb-3 text-base">Opening Hours</h4>
              <ul className="space-y-1.5 text-[#333] text-sm">
                <li>Mon – Fri: 11:00 AM – 10:00 PM</li>
                <li>Saturday: 12:00 PM – 11:00 PM</li>
                <li>Sunday: 12:00 PM – 9:00 PM</li>
              </ul>
            </div>            

            {/* Mobile */}
            <div className="block md:hidden">
              <AccordionSection title="Opening Hours">
                <ul className="pl-2 space-y-1.5 text-[#333] text-sm">
                  <li>Mon – Fri: 11:00 AM – 10:00 PM</li>
                  <li>Saturday: 12:00 PM – 11:00 PM</li>
                  <li>Sunday: 12:00 PM – 9:00 PM</li>
                </ul>
              </AccordionSection>
            </div>
          </div>

          {/* Social */}
          <div className="md:ml-0">
            {/* Desktop */}
            <div className="hidden md:block">
              <h4 className="font-semibold mb-3 text-base">Social</h4>
              <div className="flex gap-4 text-2xl">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://wa.me/61123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
              <AccordionSection title="Social">
                <div className="pl-2 flex gap-4 text-2xl mt-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-600 transition"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://wa.me/61123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </AccordionSection>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
