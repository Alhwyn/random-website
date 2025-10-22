export interface CalendarEvent {
  id: number;
  title: string;
  description: string;
  company: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  category: string;
  speakers: {
    name: string;
    role: string;
    company: string;
    image: string;
  }[];
  registrationUrl?: string;
  isVirtual: boolean;
  maxAttendees?: number;
  tags: string[];
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    title: "TENFOLD TALKS",
    description: "Join us for an insightful discussion with industry leaders about the future of technology and innovation.",
    company: "TENFOLD",
    startDate: "2024-12-15",
    endDate: "2024-12-15",
    startTime: "18:00",
    endTime: "20:00",
    location: "Victoria Conference Centre",
    category: "Tech Talk",
    speakers: [
      {
        name: "Keiver Tremblay",
        role: "CEO",
        company: "Elastic Energy",
        image: "/speakers/1725794919482.jpeg"
      }
    ],
    registrationUrl: "https://example.com/register/tenfold",
    isVirtual: false,
    maxAttendees: 150,
    tags: ["technology", "innovation", "networking"]
  },
  {
    id: 2,
    title: "Prompt Victoria Conference",
    description: "A comprehensive conference featuring multiple speakers discussing AI, machine learning, and the future of software development.",
    company: "VIATEC",
    startDate: "2024-11-21",
    endDate: "2024-11-21",
    startTime: "09:00",
    endTime: "17:00",
    location: "Victoria Convention Centre",
    category: "Conference",
    speakers: [
      {
        name: "Tim Chipperfield",
        role: "CTO",
        company: "Thinkfic",
        image: "/speakers/1739161672095.jpeg"
      },
      {
        name: "Eric Mc Lachlan",
        role: "Founder",
        company: "Revela",
        image: "/speakers/1697544751414.jpeg"
      },
      {
        name: "John Oram",
        role: "CEO",
        company: "VeilStream",
        image: "/speakers/1730243156513.jpeg"
      },
      {
        name: "Mike Anderson",
        role: "Director",
        company: "IntLabs",
        image: "/speakers/1517478541253.jpeg"
      },
      {
        name: "Mandla Moyo",
        role: "Senior Developer",
        company: "NoRedInk",
        image: "/speakers/1517562120623.jpeg"
      },
      {
        name: "Nathaniel Knight",
        role: "Founder",
        company: "Barnacle Systems",
        image: "/speakers/1741227765889.jpeg"
      }
    ],
    registrationUrl: "https://example.com/register/prompt-victoria",
    isVirtual: false,
    maxAttendees: 300,
    tags: ["AI", "machine-learning", "software-development", "conference", "networking"]
  },
  {
    id: 3,
    title: "Victoria Tech Startup Pitch Night",
    description: "Local startups pitch their ideas to investors and tech community members.",
    company: "Victoria Tech Community",
    startDate: "2024-12-05",
    endDate: "2024-12-05",
    startTime: "19:00",
    endTime: "21:30",
    location: "Innovation Hub Victoria",
    category: "Startup Event",
    speakers: [],
    registrationUrl: "https://example.com/register/pitch-night",
    isVirtual: false,
    maxAttendees: 100,
    tags: ["startups", "pitching", "investors", "networking"]
  },
  {
    id: 4,
    title: "Virtual AI Workshop Series",
    description: "A hands-on workshop series covering practical AI implementation for businesses.",
    company: "Tech Education Victoria",
    startDate: "2024-11-28",
    endDate: "2024-11-30",
    startTime: "14:00",
    endTime: "16:00",
    location: "Online",
    category: "Workshop",
    speakers: [
      {
        name: "Dr. Sarah Chen",
        role: "AI Research Lead",
        company: "UVic Computer Science",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://example.com/register/ai-workshop",
    isVirtual: true,
    maxAttendees: 50,
    tags: ["AI", "workshop", "hands-on", "business", "virtual"]
  }
];

// Helper functions for calendar events
export const getEventsByDate = (date: string): CalendarEvent[] => {
  return calendarEvents.filter(event => event.startDate === date);
};

export const getUpcomingEvents = (limit?: number): CalendarEvent[] => {
  const today = new Date().toISOString().split('T')[0];
  const upcoming = calendarEvents
    .filter(event => event.startDate >= today)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  
  return limit ? upcoming.slice(0, limit) : upcoming;
};

export const getEventsByCategory = (category: string): CalendarEvent[] => {
  return calendarEvents.filter(event => event.category === category);
};

export const getVirtualEvents = (): CalendarEvent[] => {
  return calendarEvents.filter(event => event.isVirtual);
};

export const getEventsByTag = (tag: string): CalendarEvent[] => {
  return calendarEvents.filter(event => event.tags.includes(tag.toLowerCase()));
};
