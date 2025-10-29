"use client";

import React from "react";
import { Button } from "./ui/button";
import { events } from "../constants/events";
import { sponsors } from "../constants/sponsors";
import { waveformImage } from "../constants/assets";
import { StayUpdated } from "./StayUpdated";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export const BackgroundPattern = ({ className = "" }: { className?: string }) => (
  <>

    <div 
      className={`absolute inset-0 opacity-10 ${className}`}
      style={{
        backgroundImage: `url('${waveformImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    />
    
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

      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="border-2 border-black/20 p-4 sm:p-8 md:p-12 mb-8 relative min-h-[70vh] sm:min-h-[80vh] overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('${waveformImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          <div className="relative z-10 w-full flex items-center justify-center sm:justify-start min-h-[60vh] sm:min-h-[70vh]">
            <div className="max-w-2xl text-center sm:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-[#484848]">
                  VICTORIA
                  <br />
                  TECH WEEK
                </h1>


                <p className="text-gray-700 text-sm">
                  November 17-21, 2025
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
                  {sponsors.map((sponsor, idx) => (
                    <span key={`sponsor-${setIndex}-${idx}`} className="text-black/60 hover:text-black transition-colors font-medium mr-6">
                      {sponsor}
                    </span>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Events Section */}
        <div id="events" className="border-2 border-black/20 text-black p-4 sm:p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: '#f1f1f1' }}>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12 text-[#484848] font-bold">
              FEATURED EVENTS
            </h2>
            
            <div className="space-y-12 sm:space-y-16">
              {events.map((event) => (
                <div key={event.id} className="space-y-4 sm:space-y-6">
                  {/* Event Header */}
                  <div className="border border-black/30 px-3 sm:px-4 py-2 inline-block">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm">
                      <span className="text-black font-medium">{event.company}</span>
                      <span className="text-gray-600 hidden sm:inline">•</span>
                      <span className="text-gray-600">{event.date}</span>
                    </div>
                  </div>
                  
                  {/* Event Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#484848] leading-tight max-w-4xl font-bold">
                    {event.title}
                  </h3>
                  
                  {/* Speakers Row - Conditional Carousel or Grid */}
                  {event.useCarousel ? (
                    <div className="mt-6 sm:mt-8 min-h-[350px] flex items-center">
                      <div className="relative w-full">
                        <Carousel
                          opts={{
                            align: "start",
                            loop: false,
                          }}
                          className="w-full"
                        >
                          <CarouselContent className="">
                            {event.speakers.map((speaker, speakerIdx) => (
                              <CarouselItem key={speakerIdx} className="pr-1.5 sm:pr-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-auto">
                                <div className="group cursor-pointer w-full lg:w-32">
                                  <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-100 border border-black/30">
                                    {/* Subtle grid overlay */}
                                    <div className="absolute inset-0 z-10" style={{
                                      backgroundImage: "repeating-linear-gradient(0deg,transparent 0px,transparent 2px,rgba(255, 255, 255, 0.1) 2px,rgba(255, 255, 255, 0.1) 3px),repeating-linear-gradient(90deg,transparent 0px,transparent 2px,rgba(255, 255, 255, 0.1) 2px,rgba(255, 255, 255, 0.1) 3px)"
                                    }} />
                                    <img 
                                      src={speaker.image}
                                      alt={speaker.name}
                                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                  </div>
                                  <h4 className="text-black text-base font-medium">{speaker.name}</h4>
                                  <p className="text-gray-600 text-sm">{speaker.role}</p>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious className="hidden md:flex border border-black/30 hover:bg-black hover:text-white size-10 rounded-none !top-[calc(50%-85px)] !-translate-y-0" />
                          <CarouselNext className="hidden md:flex border border-black/30 hover:bg-black hover:text-white size-10 rounded-none !top-[calc(50%-85px)] !-translate-y-0" />
                        </Carousel>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 max-w-4xl">
                      {event.speakers.map((speaker, speakerIdx) => (
                        <div key={speakerIdx} className="group cursor-pointer w-full lg:w-32">
                          <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-100 border border-black/30">
                            {/* Subtle grid overlay */}
                            <div className="absolute inset-0 z-10" style={{
                              backgroundImage: "repeating-linear-gradient(0deg,transparent 0px,transparent 2px,rgba(255, 255, 255, 0.1) 2px,rgba(255, 255, 255, 0.1) 3px),repeating-linear-gradient(90deg,transparent 0px,transparent 2px,rgba(255, 255, 255, 0.1) 2px,rgba(255, 255, 255, 0.1) 3px)"
                            }} />
                            
                            {/* Speaker image */}
                            
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
                  )}
                </div>
              ))}
            </div>
            
            {/* Show More Events Button */}
            <div className="text-center mt-8 sm:mt-12">
              <Button 
                variant="outline"
                className="border-[#484848] text-[#484848] hover:bg-[#484848] hover:text-white px-8 py-3 text-sm font-medium"
                onClick={() => window.location.href = '/event'}
              >
                SHOW MORE EVENTS
              </Button>
            </div>
          </div>
        </div>

        {/* Host Event Section */}
        <div id="sponsor" className="border-2 border-black/20 text-black p-4 sm:p-8 md:p-12 relative mt-8 overflow-hidden bg-white">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-[#484848] font-bold">
              WANT TO HOST AN EVENT OR SPONSOR?
            </h2>
            <Button 
              variant="outline" 
              className="border-[#484848] text-[#484848] hover:bg-[#484848] hover:text-white"
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