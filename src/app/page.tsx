"use client";

import { Button } from "./Button";
import { DownArrowIcon } from "./DownArrowIcon";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';

// Custom hook for intersection observer
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [ref, inView] as const;
}

function AboutTeaser() {
  const [aboutRef, aboutInView] = useInView();

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`relative w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF8E7] to-[#FFEDD5] transition-all duration-700 py-4 md:py-6 ${
        aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Decorative SVG Dots Top Left */}
      <svg
        className="absolute top-4 left-4 w-24 h-24 opacity-20 text-[#FFAA33] pointer-events-none"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <circle cx="10" cy="10" r="4" />
        <circle cx="30" cy="20" r="3" />
        <circle cx="60" cy="15" r="2.5" />
        <circle cx="80" cy="30" r="3.5" />
        <circle cx="50" cy="50" r="2" />
        <circle cx="20" cy="70" r="3" />
        <circle cx="70" cy="80" r="2.5" />
      </svg>
      {/* Decorative SVG Dots Bottom Right */}
      <svg
        className="absolute bottom-4 right-4 w-24 h-24 opacity-20 text-[#800000] pointer-events-none"
        fill="currentColor"
        viewBox="0 0 100 100"
      >
        <circle cx="90" cy="90" r="4" />
        <circle cx="70" cy="80" r="3" />
        <circle cx="40" cy="85" r="2.5" />
        <circle cx="20" cy="70" r="3.5" />
        <circle cx="50" cy="50" r="2" />
        <circle cx="80" cy="30" r="3" />
        <circle cx="30" cy="20" r="2.5" />
      </svg>
      {/* Heading centered at the top */}
      <h2 className="text-4xl font-extrabold text-[#800000] tracking-tight drop-shadow-sm mb-2 mt-2 text-center w-full">
        About Us
      </h2>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center md:items-start gap-4 md:gap-8 px-2 md:px-6">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <p className="text-base md:text-lg text-gray-700 text-left max-w-lg leading-relaxed">
            Founded by lifelong friends, Desizzz Kitchen brings you meals that feel like family gatherings. Our recipes are passed down through generations, and every dish is made with love and care.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-gray-700">
            <li>Authentic Punjabi & North Indian cuisine</li>
            <li>Fresh, locally sourced ingredients</li>
            <li>Vegetarian & vegan options available</li>
            <li>Perfect for students and families</li>
            <li>Takeaway & catering services</li>
          </ul>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center gap-2 text-[#800000] text-sm">
              <svg className="w-4 h-4 text-[#FFAA33]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>
              <span>Open: Mon-Sun, 11am - 10pm</span>
            </div>
            <div className="flex items-center gap-2 text-[#800000] text-sm">
              <svg className="w-4 h-4 text-[#FFAA33]" fill="currentColor" viewBox="0 0 20 20"><rect width="20" height="20" rx="4" /></svg>
              <span>Specials every weekend!</span>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Desizzz+Kitchen,+123+Main+St,+Blacktown+NSW+2148,+Australia"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <Button variant="outline" className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white px-6 py-2 text-base shadow-md">
              Get Directions
            </Button>
          </a>
        </div>
        {/* Right: Map */}
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="w-full h-64 md:h-[350px] rounded-2xl shadow-lg overflow-hidden border border-orange-100">
            <iframe
              title="Desizzz Kitchen Location"
              src="https://www.google.com/maps?q=Desizzz+Kitchen,+123+Main+St,+Blacktown+NSW+2148,+Australia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [aboutRef, aboutInView] = useInView();

  return (
    <div className="overflow-y-auto snap-y snap-proximity">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen snap-start flex items-center justify-center bg-cover bg-center animate-in fade-in duration-1000"
        style={{
          backgroundImage: "url('/backgroung_image.jpeg')",
          backgroundColor: "#f5e9d7", // fallback color for debugging
        }}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-center pt-24 md:pt-32 pb-10 md:pb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Authentic North Indian Flavours in Blacktown
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/90 italic">
            Home-style Punjabi cuisine at student-friendly prices
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button size="lg" className="bg-[#800000] hover:bg-[#9a0000] shadow-lg">View Menu</Button>
          </div>
        </div>
        {/* Down arrow hint */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
          <button
            aria-label="Scroll down"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="animate-bounce"
          >
            <DownArrowIcon className="w-8 h-8 text-white opacity-80" />
          </button>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section
        id="popular"
        className="w-full flex items-center justify-center bg-gradient-to-br from-[#FFF8E7] via-[#FFF3E0] to-[#FFE0B2] shadow-lg transition-all duration-700 py-8"
      >
        <div className="w-full max-w-6xl px-2 sm:px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#800000] mb-3 text-center tracking-tight drop-shadow-sm">Popular Dishes</h2>
          <div className="flex justify-center mb-6">
            <span className="inline-block w-20 h-1 rounded-full bg-[#FFAA33] opacity-80"></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* Butter Chicken Card */}
            <div className="group relative bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_8px_32px_0_rgba(255,170,51,0.15)] border border-orange-100 overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-full">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/images/butter-chicken-thumb.jpg"
                  alt="Butter Chicken"
                  width={400}
                  height={224}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 rounded-t-3xl"
                />
                <div className="absolute top-3 left-3 bg-[#FFAA33] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Chef's Choice</div>
              </div>
              <div className="p-6 flex flex-col items-center gap-3">
                <h3 className="font-bold text-xl text-[#800000] tracking-wide">Butter Chicken</h3>
                <p className="text-[#FFAA33] text-lg font-semibold">$13.99</p>
                <p className="text-gray-700 text-sm text-center max-w-xs">Creamy tomato gravy, tender chicken, and a hint of spice. A true North Indian classic!</p>
                {/* Removed View Details Button */}
              </div>
            </div>
            {/* Palak Paneer Card */}
            <div className="group relative bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_8px_32px_0_rgba(128,0,0,0.10)] border border-orange-100 overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-full">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/images/palak-paneer-thumb.jpg"
                  alt="Palak Paneer"
                  width={400}
                  height={224}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 rounded-t-3xl"
                />
                <div className="absolute top-3 left-3 bg-[#800000] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Vegetarian</div>
              </div>
              <div className="p-6 flex flex-col items-center gap-3">
                <h3 className="font-bold text-xl text-[#800000] tracking-wide">Palak Paneer</h3>
                <p className="text-[#FFAA33] text-lg font-semibold">$11.99</p>
                <p className="text-gray-700 text-sm text-center max-w-xs">Fresh spinach and soft paneer cubes in a silky, spiced sauce. Healthy and delicious!</p>
                {/* Removed View Details Button */}
              </div>
            </div>
            {/* Chole Bhature Card */}
            <div className="group relative bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_8px_32px_0_rgba(255,170,51,0.10)] border border-orange-100 overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-full">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/images/chole-bhature-thumb.jpg"
                  alt="Chole Bhature"
                  width={400}
                  height={224}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 rounded-t-3xl"
                />
                <div className="absolute top-3 left-3 bg-[#FFAA33] text-[#800000] text-xs font-bold px-3 py-1 rounded-full shadow-lg">Most Loved</div>
              </div>
              <div className="p-6 flex flex-col items-center gap-3">
                <h3 className="font-bold text-xl text-[#800000] tracking-wide">Chole Bhature</h3>
                <p className="text-[#FFAA33] text-lg font-semibold">$10.99</p>
                <p className="text-gray-700 text-sm text-center max-w-xs">Fluffy bhature with spicy chickpea curry. The ultimate comfort street food!</p>
                {/* Removed View Details Button */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Map Section */}
      <section
        id="about"
        className="w-full flex items-center justify-center bg-gradient-to-br from-[#FFF8E7] to-[#FFEDD5] shadow-lg transition-all duration-700 py-8"
      >
        <div className="w-full max-w-6xl px-2 sm:px-4">
          <AboutTeaser />
        </div>
      </section>
      {/* Ensure no margin or padding below this section */}
      {/* Remove any <hr>, <div className="border-t...">, or similar horizontal line here */}
    </div>
  );
}
