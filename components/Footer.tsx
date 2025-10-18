"use client";

import { BackgroundPattern } from "./HeroSection";
import MediaBetweenText from "./fancy/blocks/media-between-text";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white relative overflow-hidden py-8">
      <BackgroundPattern />
      

      <div className="relative z-10 max-w-[1800px] mx-auto px-8 py-8">

                {/* Powered by text */}
        

        {/* Main TENFOLD Heading with MediaBetweenText */}
        <div className="text-center mb-4 flex justify-center">
          <MediaBetweenText
            firstText=""
            secondText="TENFOLD"
            mediaUrl="/TENFOLD.jpeg"
            mediaType="image"
            alt="TENFOLD logo"
            triggerType="inView"
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-stone-200 tracking-wider flex items-center"
            mediaContainerClassName="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-4 rounded-lg overflow-hidden"
            animationVariants={{
              initial: { width: 0, opacity: 0 },
              animate: {
                width: "auto",
                opacity: 1,
                transition: {
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.2,
                  delay: 0.2,
                },
              },
            }}
          />
        </div>

        {/* TENFOLD Button */}
        <div className="text-center mb-6">
          <Button
            variant="outline"
            className="group relative border-2 border-stone-300/60 text-stone-200 bg-transparent hover:bg-stone-200 hover:text-zinc-900 transition-all duration-300 px-8 py-3 text-sm font-medium tracking-wider uppercase overflow-hidden"
            onClick={() => window.open('https://www.tenfoldvictoria.com/', '_blank')}
          >
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-200/0 via-stone-200/10 to-stone-200/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-1">
              Join TENFOLD
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
        </div>

        {/* Additional info */}
        <div className="text-center">
          <p className="text-xs text-stone-400/80 mb-2">
            Every Tuesday at 6PM • Victoria&apos;s Tech Community
          </p>
        </div>
      </div>
    </footer>
  );
}
