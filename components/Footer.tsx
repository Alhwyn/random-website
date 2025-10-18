"use client";

import { BackgroundPattern } from "./HeroSection";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white relative overflow-hidden min-h-[60vh]">
      <BackgroundPattern />

      <div className="relative z-10 max-w-[1800px] mx-auto px-8 py-16">
        {/* Main TENFOLD Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-stone-200 tracking-wider">
            TENFOLD
          </h1>
        </div>

      </div>
    </footer>
  );
}
