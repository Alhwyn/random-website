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
    startDate: "2025-11-17",
    endDate: "2025-11-17",
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
    registrationUrl: "https://www.tenfoldvictoria.com/",
    isVirtual: false,
    maxAttendees: 150,
    tags: ["technology", "innovation", "networking"]
  },
  {
    id: 2,
    title: "Tech Meets Talent: Navigating AI in Recruitment",
    description: "AI is disrupting recruitment for applicants and HR. Come discover the challenges and opportunities in this new era of hiring. UVic's Engineering & Computer Science Co-op team will host a panel of local companies and students.",
    company: "UVic Engineering & Computer Science Co-op",
    startDate: "2025-11-18",
    endDate: "2025-11-18",
    startTime: "17:00",
    endTime: "19:00",
    location: "777 Fort Street, Victoria, BC (Fort Tectoria)",
    category: "Tech Talk",
    speakers: [
      {
        name: "UVic Co-op Team",
        role: "Panel Moderators",
        company: "University of Victoria",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://www.eventbrite.hk/e/tech-meets-talent-navigating-ai-in-recruitment-tickets-1839054113359",
    isVirtual: false,
    maxAttendees: 100,
    tags: ["AI", "recruitment", "talent", "tech", "networking", "panel"]
  },
  {
    id: 3,
    title: "Startup Intro to VC: Guide for Victoria Founders",
    description: "Learn venture capital basics, meet investors, and get access to 20,000+ investor contacts. This event teaches Victoria startup founders about venture capital and how to secure funding for business growth.",
    company: "HM Events",
    startDate: "2025-11-19",
    endDate: "2025-11-19",
    startTime: "18:00",
    endTime: "20:00",
    location: "Online (Virtual)",
    category: "Workshop",
    speakers: [
      {
        name: "HM Events Team",
        role: "VC Education Specialists",
        company: "HM Events",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://www.eventbrite.hk/e/startup-intro-to-vc-guide-for-victoria-founders-tickets-1380172365699",
    isVirtual: true,
    maxAttendees: 200,
    tags: ["startup", "VC", "venture-capital", "funding", "founders", "investors"]
  },
  {
    id: 4,
    title: "Prompt Victoria Conference",
    description: "A comprehensive conference featuring multiple speakers discussing AI, machine learning, and the future of software development during Victoria Tech Week.",
    company: "VIATEC",
    startDate: "2025-11-21",
    endDate: "2025-11-21",
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
    id: 5,
    title: "Water Connects - Haus of Owl's Projector Club",
    description: "A multi-sensory installation by Projector Club, part of the CTRL+ART+DREAM series. The experience blends poetry, projection, and water to explore the metaphor of water's memory—carrying stories, loss, and renewal.",
    company: "Haus of Owl's Projector Club",
    startDate: "2025-11-14",
    endDate: "2025-11-20",
    startTime: "18:00",
    endTime: "21:00",
    location: "780 Blanshard Street, Victoria",
    category: "Art Installation",
    speakers: [
      {
        name: "Joanna Streetly",
        role: "Poet & Installation Artist",
        company: "Projector Club",
        image: "/speakers/placeholder.jpeg"
      }
    ],
    registrationUrl: "https://www.victoria.ca/community-culture/events/cityvibe-events/haus-owls-projector-club",
    isVirtual: false,
    maxAttendees: 50,
    tags: ["art", "installation", "poetry", "projection", "multi-sensory", "drop-in"]
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
