"use client";

import React from "react";
import { Button } from "./ui/button";
import { events } from "../constants/events";
import { sponsors } from "../constants/sponsors";
import { waveformImage } from "../constants/assets";
import { StayUpdated } from "./StayUpdated";

// Reusable background patterns
export const BackgroundPattern = ({ className = "" }: { className?: string }) => (
  <>
    {/* Waveform main background */}
    <div 
      className={`absolute inset-0 opacity-10 ${className}`}
      style={{
        backgroundImage: `url('${waveformImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
    
    {/* Subtle grid overlay */}
    <div 
      className={`absolute inset-0 opacity-20 ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent 0px,
          transparent 2px,
          rgba(0, 0, 0, 0.1) 2px,
          rgba(0, 0, 0, 0.1) 3px
        ),
        repeating-linear-gradient(
          90deg,
          transparent 0px,
          transparent 2px,
          rgba(0, 0, 0, 0.1) 2px,
          rgba(0, 0, 0, 0.1) 3px
        )`
      }}
    />
  </>
);

export function HeroSection() {
  return (
    <div className="min-h-screen bg-white text-black relative">
      <BackgroundPattern />

      <div className="relative z-10 max-w-[1800px] mx-auto px-8 py-8">
        {/* Main Hero Container with Border and Background */}
        <div className="border-2 border-black/20 p-8 md:p-12 mb-8 relative min-h-[80vh] overflow-hidden">
          {/* Full Page Background Image */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('${waveformImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Content with z-index - Positioned for space */}
          <div className="relative z-10 w-full flex items-center min-h-[70vh]">
            {/* Hero Content - Single Column */}
            <div className="max-w-2xl">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                  VICTORIA&apos;S 
                  <br />
                  TECH WEEK
                </h1>
                
                <p className="text-gray-600 text-sm md:text-base max-w-lg">
                  a16z presents Tech Week 2025, bringing together the top founders, funds, and companies around the globe.
                </p>

                <p className="text-gray-700 text-sm">
                  Victoria Tech Week: Nov 20 to Nov 26
                </p>

                <div className="mt-4">
                  <StayUpdated />
                </div>
              </div>
            </div>
          </div>

          {/* Sponsors Carousel - At Absolute Bottom of Hero Container */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-black/20 overflow-hidden">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling content */}
            <div className="sponsors-carousel items-center text-sm md:text-base whitespace-nowrap relative z-20 py-6">
              {Array.from({ length: 4 }).map((_, setIndex) => (
                <React.Fragment key={`sponsor-set-${setIndex}`}>
                  <span className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-wider mr-6">Platinum Sponsors</span>
                  {sponsors.platinum.map((sponsor, idx) => (
                    <span key={`plat-${setIndex}-${idx}`} className="text-black/60 hover:text-black transition-colors font-medium mr-6">
                      {sponsor}
                    </span>
                  ))}
                  <span className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-wider mr-6">Gold Sponsors</span>
                  {sponsors.gold.map((sponsor, idx) => (
                    <span key={`gold-${setIndex}-${idx}`} className="text-black/60 hover:text-black transition-colors font-medium mr-6">
                      {sponsor}
                    </span>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Events Section */}
        <div id="events" className="border-2 border-black/20 text-black p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: '#f1f1f1' }}>
          {/* Bob.png background for Featured Events */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "url('/bob.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl mb-12 text-black">
              FEATURED EVENTS
            </h2>
            
            <div className="space-y-16">
              {events.map((event) => (
                <div key={event.id} className="space-y-6">
                  {/* Event Header */}
                  <div className="border border-black/30 px-4 py-2 inline-block">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-black font-medium">{event.company}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-600">{event.date}</span>
                    </div>
                  </div>
                  
                  {/* Event Title */}
                  <h3 className="text-2xl md:text-3xl text-black leading-tight max-w-4xl">
                    {event.title}
                  </h3>
                  
                  {/* Speakers Row */}
                  <div className="flex flex-wrap gap-4 mt-8 max-w-4xl">
                    {event.speakers.map((speaker, speakerIdx) => (
                      <div key={speakerIdx} className="group cursor-pointer w-32">
                        <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-100 border border-black/30">
                          {/* Subtle grid overlay */}
                          <div className="absolute inset-0 z-10" style={{
                            backgroundImage: "repeating-linear-gradient(0deg,transparent 0px,transparent 2px,rgba(255, 255, 255, 0.1) 2px,rgba(255, 255, 255, 0.1) 3px),repeating-linear-gradient(90deg,transparent 0px,transparent 2px,rgba(255, 255, 255, 0.1) 2px,rgba(255, 255, 255, 0.1) 3px)"
                          }} />
                          
                          {/* Speaker image */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <h4 className="text-black text-base font-medium">{speaker.name}</h4>
                        <p className="text-gray-600 text-sm">{speaker.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Host Event Section */}
        <div id="sponsor" className="border-2 border-black/20 text-black p-8 md:p-12 relative mt-8 overflow-hidden bg-white">
          {/* Sponsor.png background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/sponsor2.png')",
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">
              WANT TO HOST AN EVENT OR SPONSOR?
            </h2>

            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Join Victoria Tech Week by hosting your own event. Connect with founders, investors, and innovators in our thriving tech community.
            </p>
            
 

            <Button 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white"
              onClick={() => window.location.href = 'mailto:alhwyn@alhwyn.com?subject=Host an Event at Victoria Tech Week'}
            >
              GET IN TOUCH
            </Button>
            
          </div>
        </div>
      </div>
    </div>
  );
}