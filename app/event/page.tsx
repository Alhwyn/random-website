"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { calendarEvents, CalendarEvent } from "@/constants/calendarEvents";
import { Link, MapPin } from "lucide-react";

// Type definitions for the calendar display
interface DisplayEvent {
  id: string;
  time: string;
  title: string;
  speaker: {
    name: string;
    avatar: string;
  };
  location: string;
  category: string;
  color: string;
  registrationUrl?: string;
}

// Transform imported calendar events to display format
const transformCalendarEvent = (event: CalendarEvent): DisplayEvent => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'conference':
      case 'tech talk':
        return 'orange';
      case 'workshop':
        return 'teal';
      case 'startup event':
      case 'networking':
        return 'purple';
      case 'art installation':
        return 'green';
      default:
        return 'gray';
    }
  };

  const formatTime = (time: string) => {
    // Convert 24-hour format to 12-hour format
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'p.m.' : 'a.m.';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return {
    id: event.id.toString(),
    time: formatTime(event.startTime),
    title: event.title,
    speaker: {
      name: event.speakers.length > 0 ? event.speakers[0].name : event.company,
      avatar: event.speakers.length > 0 ? event.speakers[0].image : ""
    },
    location: event.location,
    category: event.category.toLowerCase(),
    color: getCategoryColor(event.category),
    registrationUrl: event.registrationUrl
  };
};

// Create display events from imported calendar events
const displayEvents = calendarEvents.map(transformCalendarEvent);

// Organize events by days (using Victoria Tech Week dates: Nov 17-21, 2025)
const weekCalendarEvents = {
  Monday: displayEvents.filter(event => {
    const originalEvent = calendarEvents.find(e => e.id.toString() === event.id);
    return originalEvent && originalEvent.startDate === '2025-11-17';
  }),
  Tuesday: displayEvents.filter(event => {
    const originalEvent = calendarEvents.find(e => e.id.toString() === event.id);
    return originalEvent && originalEvent.startDate === '2025-11-18';
  }),
  Wednesday: displayEvents.filter(event => {
    const originalEvent = calendarEvents.find(e => e.id.toString() === event.id);
    return originalEvent && originalEvent.startDate === '2025-11-19';
  }),
  Thursday: displayEvents.filter(event => {
    const originalEvent = calendarEvents.find(e => e.id.toString() === event.id);
    return originalEvent && originalEvent.startDate === '2025-11-20';
  }),
  Friday: displayEvents.filter(event => {
    const originalEvent = calendarEvents.find(e => e.id.toString() === event.id);
    return originalEvent && originalEvent.startDate === '2025-11-21';
  })
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const dayNumbers = [17, 18, 19, 20, 21];

export default function EventCalendar() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const handleDayClick = (day: string) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  // Filter events based on selected day
  const getFilteredEvents = () => {
    if (!selectedDay) return weekCalendarEvents;
    
    const filtered: typeof weekCalendarEvents = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: []
    };
    
    filtered[selectedDay as keyof typeof weekCalendarEvents] = weekCalendarEvents[selectedDay as keyof typeof weekCalendarEvents];
    return filtered;
  };

  const filteredEvents = getFilteredEvents();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black relative">
        <BackgroundPattern />

        <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          {/* Header Section */}
          <div className="border-2 border-black/20 p-4 sm:p-8 md:p-12 mb-8 relative overflow-hidden bg-white">
            {/* Full Page Background Image */}
            <div 
              className="absolute inset-0 w-full h-full opacity-30"
              style={{
                backgroundImage: "url('/boat.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'local'
              }}
            />
            
            {/* Additional background fill for any gaps */}
            <div 
              className="absolute inset-0 w-full h-full opacity-20"
              style={{
                backgroundImage: "url('/boat.png')",
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'repeat'
              }}
            />
            
            {/* Content with z-index */}
            <div className="relative z-10 text-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight font-bold text-[#484848]">
                EVENTS
              </h1>
            </div>
          </div>

          {/* Calendar Days Header */}
          {/* Mobile Dropdown */}
          <div className="md:hidden border-2 border-black/20 bg-gray-100 mb-8 p-4">
            <label className="text-sm text-gray-600 font-medium mb-2 block">
              SELECT A DAY
            </label>
            <Select
              value={selectedDay || 'all'}
              onValueChange={(value) => setSelectedDay(value === 'all' ? null : value)}
            >
              <SelectTrigger className="w-full border-black/20 bg-white text-black rounded-none h-12 focus:ring-2 focus:ring-black/20 text-base font-medium">
                <SelectValue placeholder="Select a day">
                  {selectedDay ? (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{selectedDay.slice(0, 3).toUpperCase()}</span>
                      <span className="text-sm text-gray-500">
                        {weekCalendarEvents[selectedDay as keyof typeof weekCalendarEvents]?.length || 0} events
                      </span>
                    </div>
                  ) : (
                    "All Days"
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white border-black/20 rounded-none">
                <SelectItem value="all" className="hover:bg-gray-100 py-3">
                  <div className="flex items-center w-full">
                    <span className="text-base font-medium">All Days</span>
                  </div>
                </SelectItem>
                {days.map((day, index) => {
                  const eventCount = weekCalendarEvents[day as keyof typeof weekCalendarEvents]?.length || 0;
                  return (
                    <SelectItem key={day} value={day} className="hover:bg-gray-100 py-3">
                      <div className="flex items-center gap-3 w-full">
                        <span className="text-sm font-medium text-gray-600 w-8">{day.slice(0, 3).toUpperCase()}</span>
                        <span className="text-sm text-gray-500 ml-auto">{eventCount} events</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block border-2 border-black/20 bg-gray-100 mb-8">
            <div className="grid grid-cols-5 gap-0">
              {days.map((day, index) => (
                <div 
                  key={day} 
                  onClick={() => handleDayClick(day)}
                  className={`p-4 text-center cursor-pointer transition-colors duration-200 hover:bg-gray-200 ${
                    index < days.length - 1 ? 'border-r border-black/20' : ''
                  } ${
                    selectedDay === day ? 'bg-[#484848] text-white hover:bg-[#3c3c3c]' : ''
                  }`}
                >
                  <div className={`text-sm uppercase font-medium ${
                    selectedDay === day ? 'text-gray-200' : 'text-gray-600'
                  }`}>
                    {day.slice(0, 3)}
                  </div>
                  <div className={`text-2xl font-bold ${
                    selectedDay === day ? 'text-white' : 'text-black'
                  }`}>
                    {dayNumbers[index]}
                  </div>
                  <div className={`text-xs ${
                    selectedDay === day ? 'text-gray-200' : 'text-gray-500'
                  }`}>
                    {weekCalendarEvents[day as keyof typeof weekCalendarEvents]?.length || 0} events
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Content */}
          <div className="space-y-8">
            {days
              .filter(day => !selectedDay || selectedDay === day)
              .map((day, dayIndex) => {
                const originalIndex = days.indexOf(day);
                return (
                  <div key={day} className="border-2 border-black/20 p-4 sm:p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: '#f1f1f1' }}>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-2 mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#484848]">{day.toUpperCase()}</h2>
                        <span className="text-gray-600 text-sm">Nov {dayNumbers[originalIndex]}</span>
                        {selectedDay && (
                          <button 
                            onClick={() => setSelectedDay(null)}
                            className="ml-auto text-xs bg-white text-[#484848] border border-[#484848] px-2 py-1 hover:bg-[#484848] hover:text-white transition-colors"
                          >
                            SHOW ALL
                          </button>
                        )}
                      </div>
                      
                      <Carousel className="w-full">
                        <CarouselContent className="-ml-2">
                          {filteredEvents[day as keyof typeof filteredEvents].map((event) => (
                            <CarouselItem key={event.id} className="pl-2 md:basis-1/2 lg:basis-1/3 flex">
                              <div className="p-1 h-full w-full">
                                <EventCard event={event} />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:inline-flex border border-black/30 hover:bg-black hover:text-white size-10 rounded-none" />
                        <CarouselNext className="hidden md:inline-flex border border-black/30 hover:bg-black hover:text-white size-10 rounded-none" />
                      </Carousel>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Footer CTA */}
          <div className="border-2 border-black/20 text-black p-4 sm:p-8 md:p-12 relative mt-8 overflow-hidden bg-white">
            <div className="relative z-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#484848]">Want to host an event?</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">Submit your event to be featured in Victoria Tech Week</p>
              <Button 
                variant="outline" 
                className="border-[#484848] text-[#484848] hover:bg-[#484848] hover:text-white"
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
function EventCard({ event }: { event: DisplayEvent }) {
  const handleRegister = () => {
    if (event.registrationUrl) {
      window.open(event.registrationUrl, '_blank');
    }
  };

  return (
    <div className="bg-white border border-black/20 shadow-sm p-6 h-full flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex items-center border border-black/20 bg-gray-100 px-3 py-1 text-xs font-medium tracking-wide text-gray-700">
          {event.time}
        </div>
        {event.registrationUrl && (
          <Button
            onClick={handleRegister}
            variant="outline"
            className="border-[#484848] text-[#484848] hover:bg-[#484848] hover:text-white text-xs py-1 px-2 h-auto"
          >
            <Link size={14} />
          </Button>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-black leading-tight">
          {event.title}
        </h3>
        <p className="text-sm text-gray-600">
          {event.speaker.name}
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-black/10 text-sm text-gray-600 flex items-center gap-2">
        <MapPin size={14} className="text-gray-500" />
        <span>{event.location.length > 45 ? `${event.location.substring(0, 45)}...` : event.location}</span>
      </div>
    </div>
  );
}
