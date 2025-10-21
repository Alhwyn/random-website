"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BackgroundPattern } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Type definitions
interface EventSpeaker {
  name: string;
  avatar: string;
}

interface Event {
  id: string;
  time: string;
  title: string;
  speaker: EventSpeaker;
  location: string;
  category: string;
  color: string;
}

// Event data structure matching the calendar image
const calendarEvents = {
  Monday: [
    {
      id: "mon-1",
      time: "9:00 a.m.",
      title: "Opening Keynote: The Future of Tech",
      speaker: {
        name: "Sarah Chen",
        avatar: ""
      },
      location: "Main Stage",
      category: "keynote",
      color: "orange"
    },
    {
      id: "mon-2", 
      time: "11:00 a.m.",
      title: "AI & Machine Learning Workshop",
      speaker: {
        name: "Michael Torres", 
        avatar: ""
      },
      location: "Workshop Room A",
      category: "workshop",
      color: "teal"
    },
    {
      id: "mon-3",
      time: "2:00 p.m.",
      title: "Startup Pitch Competition", 
      speaker: {
        name: "Emily Rodriguez",
        avatar: ""
      },
      location: "Innovation Hall",
      category: "networking",
      color: "purple"
    },
    {
      id: "mon-4",
      time: "4:00 p.m.",
      title: "Data Science & Analytics Deep Dive",
      speaker: {
        name: "Dr. Amanda Liu",
        avatar: ""
      },
      location: "Tech Lab B",
      category: "workshop",
      color: "teal"
    },
    {
      id: "mon-5",
      time: "6:00 p.m.",
      title: "Welcome Reception & Networking",
      speaker: {
        name: "Victoria Tech Week",
        avatar: ""
      },
      location: "Rooftop Lounge",
      category: "networking",
      color: "purple"
    }
  ],
  Tuesday: [
    {
      id: "tue-1",
      time: "10:00 a.m.",
      title: "Cloud Architecture & DevOps",
      speaker: {
        name: "David Kim",
        avatar: ""
      },
      location: "Tech Hall B", 
      category: "keynote",
      color: "orange"
    },
    {
      id: "tue-2",
      time: "1:00 p.m.",
      title: "Venture Capital Panel Discussion",
      speaker: {
        name: "James Wilson",
        avatar: ""
      },
      location: "Executive Lounge",
      category: "workshop", 
      color: "teal"
    },
    {
      id: "tue-3",
      time: "2:30 p.m.",
      title: "Mobile App Development Masterclass",
      speaker: {
        name: "Jessica Park",
        avatar: ""
      },
      location: "Development Lab",
      category: "workshop",
      color: "teal"
    },
    {
      id: "tue-4",
      time: "4:00 p.m.",
      title: "Product Management Best Practices",
      speaker: {
        name: "Robert Martinez",
        avatar: ""
      },
      location: "Conference Room A",
      category: "keynote",
      color: "orange"
    },
    {
      id: "tue-5",
      time: "6:30 p.m.",
      title: "Networking & Happy Hour",
      speaker: {
        name: "Victoria Tech Week",
        avatar: ""
      },
      location: "Rooftop Terrace",
      category: "networking",
      color: "purple"
    }
  ],
  Wednesday: [
    {
      id: "wed-1",
      time: "9:30 a.m.",
      title: "Women in Tech Leadership Forum",
      speaker: {
        name: "Alexandra Martinez",
        avatar: ""
      },
      location: "Forum Hall",
      category: "keynote",
      color: "orange"
    },
    {
      id: "wed-2", 
      time: "12:00 p.m.",
      title: "Blockchain & Web3 Innovation",
      speaker: {
        name: "Tech Leaders Collective",
        avatar: ""
      },
      location: "Innovation Lab",
      category: "workshop",
      color: "teal"
    },
    {
      id: "wed-3",
      time: "2:30 p.m.",
      title: "UX/UI Design Trends 2025",
      speaker: {
        name: "Mark Thompson",
        avatar: ""
      },
      location: "Creative Studio",
      category: "workshop",
      color: "teal"
    },
    {
      id: "wed-4",
      time: "3:00 p.m.",
      title: "Product Design Masterclass",
      speaker: {
        name: "Sarah Chen",
        avatar: ""
      },
      location: "Design Studio",
      category: "keynote", 
      color: "orange"
    },
    {
      id: "wed-5",
      time: "5:30 p.m.",
      title: "Tech Community Mixer",
      speaker: {
        name: "Victoria Tech Community",
        avatar: ""
      },
      location: "Community Hub",
      category: "networking", 
      color: "purple"
    }
  ],
  Thursday: [
    {
      id: "thu-1",
      time: "10:30 a.m.",
      title: "Cybersecurity in Modern Tech",
      speaker: {
        name: "Security Experts Group",
        avatar: ""
      },
      location: "Security Wing",
      category: "keynote",
      color: "orange"
    },
    {
      id: "thu-2",
      time: "1:30 p.m.",
      title: "SaaS Growth Strategies",
      speaker: {
        name: "Michael Torres",
        avatar: ""
      },
      location: "Business Hall",
      category: "workshop",
      color: "teal"
    },
    {
      id: "thu-3",
      time: "3:00 p.m.",
      title: "Fintech Innovation Summit",
      speaker: {
        name: "Lisa Chang",
        avatar: ""
      },
      location: "Finance Hub",
      category: "keynote",
      color: "orange"
    },
    {
      id: "thu-4",
      time: "4:30 p.m.",
      title: "E-commerce Platform Development",
      speaker: {
        name: "Alex Kumar",
        avatar: ""
      },
      location: "Development Center",
      category: "workshop",
      color: "teal"
    },
    {
      id: "thu-5", 
      time: "6:00 p.m.",
      title: "Startup Founder Meetup",
      speaker: {
        name: "Emily Rodriguez",
        avatar: ""
      },
      location: "Networking Zone", 
      category: "networking",
      color: "purple"
    }
  ],
  Friday: [
    {
      id: "fri-1",
      time: "9:00 a.m.",
      title: "The Future of Remote Work",
      speaker: {
        name: "David Kim",
        avatar: ""
      },
      location: "Main Stage",
      category: "keynote",
      color: "orange"
    },
    {
      id: "fri-2",
      time: "11:30 a.m.", 
      title: "Tech for Social Good",
      speaker: {
        name: "Impact Tech Alliance",
        avatar: ""
      },
      location: "Community Hall",
      category: "workshop",
      color: "teal"
    },
    {
      id: "fri-3",
      time: "1:30 p.m.",
      title: "Quantum Computing Workshop",
      speaker: {
        name: "Dr. Rachel Foster",
        avatar: ""
      },
      location: "Advanced Tech Lab",
      category: "workshop",
      color: "teal"
    },
    {
      id: "fri-4",
      time: "3:00 p.m.",
      title: "Scale-up Success Stories Panel",
      speaker: {
        name: "Victoria Founders Circle",
        avatar: ""
      },
      location: "Inspiration Hall",
      category: "keynote",
      color: "orange"
    },
    {
      id: "fri-5",
      time: "5:00 p.m.",
      title: "Closing Ceremony & Awards",
      speaker: {
        name: "Victoria Tech Week",
        avatar: ""
      },
      location: "Main Stage",
      category: "networking",
      color: "purple"
    }
  ]
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const dayNumbers = [13, 14, 15, 16, 17];

export default function EventCalendar() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black relative">
        <BackgroundPattern />

        <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          {/* Header Section */}
          <div className="border-2 border-black/20 p-4 sm:p-8 md:p-12 mb-8 relative overflow-hidden bg-white">
            <div className="relative z-10 text-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight font-bold text-[#484848]">
                EVENTS
              </h1>
            </div>
          </div>

          {/* Calendar Days Header */}
          <div className="border-2 border-black/20 bg-gray-100 mb-8">
            <div className="grid grid-cols-5 gap-0">
              {days.map((day, index) => (
                <div key={day} className={`p-4 text-center ${index < days.length - 1 ? 'border-r border-black/20' : ''}`}>
                  <div className="text-gray-600 text-sm uppercase font-medium">{day.slice(0, 3)}</div>
                  <div className="text-2xl font-bold text-black">{dayNumbers[index]}</div>
                  <div className="text-xs text-gray-500">
                    5 events
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Content */}
          <div className="space-y-8">
            {days.map((day, dayIndex) => (
              <div key={day} className="border-2 border-black/20 p-4 sm:p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: '#f1f1f1' }}>
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-black">{day.toUpperCase()}</h2>
                    <span className="text-gray-600 text-sm">Oct {dayNumbers[dayIndex]}</span>
                  </div>
                  
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-2">
                      {calendarEvents[day as keyof typeof calendarEvents].map((event) => (
                        <CarouselItem key={event.id} className="pl-2 md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <EventCard event={event} />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="border border-black/30 hover:bg-black hover:text-white size-10 rounded-none" />
                    <CarouselNext className="border border-black/30 hover:bg-black hover:text-white size-10 rounded-none" />
                  </Carousel>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="border-2 border-black/20 text-black p-4 sm:p-8 md:p-12 relative mt-8 overflow-hidden bg-white">
            <div className="relative z-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-black">Want to host an event?</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">Submit your event to be featured in Victoria Tech Week</p>
              <Button 
                variant="outline" 
                className="border-black text-black hover:bg-black hover:text-white"
                onClick={() => window.location.href = 'mailto:alhwyn@alhwyn.com?subject=Host an Event at Victoria Tech Week'}
              >
                SUBMIT EVENT
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Event Card Component
function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white border border-black/30 p-4 h-full flex flex-col justify-between min-h-[200px]">
      <div className="flex-1">
        {/* Time */}
        <div className="border border-black/30 text-black text-sm px-2 py-1 mb-3 inline-block">
          {event.time}
        </div>
        
        {/* Event Title */}
        <h3 className="text-black font-semibold mb-3 text-sm leading-tight">
          {event.title}
        </h3>
        
        {/* Speaker */}
        <div className="mb-3">
          <span className="text-black text-sm">{event.speaker.name}</span>
        </div>
      </div>
      
      {/* Location */}
      <div className="text-black text-sm">
        <span>{event.location}</span>
      </div>
    </div>
  );
}
