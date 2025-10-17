import { Button } from "./ui/button";

const waveformImage = "/canvas-export-1760692098932.png";

const events = [
  {
    id: 1,
    company: "FENWICK, DATABRICKS",
    date: "MONDAY, OCT 6",
    title: "Law Meets Code: AI Rules That Could Shape Your Startup",
    speakers: [
      {
        name: "Tram Phi",
        role: "SVP & GC, Databricks",
        image: "https://images.unsplash.com/photo-1758599543120-4e462429a4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2MDY5Mzg0OXww&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        name: "Matt Perault",
        role: "Head of AI Policy, a16z",
        image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDYyMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        name: "David Bell",
        role: "Partner, Fenwick",
        image: "https://images.unsplash.com/photo-1669255344189-fc6a34d42f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3BlYWtlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDY5NDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: 2,
    company: "PWC",
    date: "TUESDAY, OCT 14",
    title: "From Chaos to Capital: Navigating Fundraising in the Age of AI",
    speakers: [
      {
        name: "Doug Chu",
        role: "Partner, PwC",
        image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA2Mzg0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        name: "Dana Settle",
        role: "Co-Founder & Managing Partner, Greycroft",
        image: "https://images.unsplash.com/photo-1758599543120-4e462429a4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2MDY5Mzg0OXww&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        name: "Jamie Neuwirth",
        role: "Head of Startup Sales, Anthropic",
        image: "https://images.unsplash.com/photo-1669255344189-fc6a34d42f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3BlYWtlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDY5NDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: 3,
    company: "AWS",
    date: "MONDAY, OCT 13",
    title: "Culver Cup: AWS Gen AI Film Showcase",
    speakers: [
      {
        name: "Andrew Chen",
        role: "General Partner, a16z",
        image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDYyMDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        name: "Amit Jain",
        role: "Founder, Luma AI",
        image: "https://images.unsplash.com/photo-1758599543120-4e462429a4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2MDY5Mzg0OXww&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        name: "Diego Rodriguez",
        role: "Co-Founder, Krea",
        image: "https://images.unsplash.com/photo-1669255344189-fc6a34d42f3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3BlYWtlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDY5NDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  },
  {
    id: 4,
    company: "FENWICK",
    date: "TUESDAY, OCT 14",
    title: "Crypto Unplugged: A Fireside Chat with a16z + Fenwick",
    speakers: [
      {
        name: "Faisal Rashid",
        role: "Partner, Fenwick",
        image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA2Mzg0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        name: "Joseph Burleson",
        role: "AGC Crypto, a16z",
        image: "https://images.unsplash.com/photo-1758599543120-4e462429a4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2MDY5Mzg0OXww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  }
];

const sponsors = {
  platinum: ["HSBC", "IBM", "Deloitte", "Accenture", "PwC"],
  gold: ["Anthropic", "Atlassian", "AWS", "Deel", "Goodyear"]
};

export function HeroSection() {
  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Waveform main background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('${waveformImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Grid texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.03) 0px,
            rgba(0, 0, 0, 0.03) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.03) 0px,
            rgba(0, 0, 0, 0.03) 1px,
            transparent 1px,
            transparent 2px
          )`
        }}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-8 py-8">
        {/* Main Hero Container with Border */}
        <div className="border-2 border-black/20 p-8 md:p-12 mb-8">

          {/* Hero Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
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
                Victoria Tech Week: Oct 13 to Oct 19
              </p>

              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white mt-4">
                VIEW CALENDAR
              </Button>
            </div>

            {/* Right: Waveform Visual */}
            <div className="relative">
              <div className="relative border-2 border-dashed border-black/40 p-8 min-h-[400px] bg-gradient-to-br from-gray-50 to-white">
                {/* Large waveform image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={waveformImage} 
                  alt="Victoria Tech Week Waveform" 
                  className="w-full h-full object-contain opacity-80 mix-blend-multiply"
                />
                
                {/* Overlay labels */}
                <div className="absolute top-4 left-4 bg-white/90 text-black px-3 py-2 text-sm font-medium border border-black/10">
                  VICTORIA TECH WEEK
                </div>
                <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-2 text-sm font-medium">
                  OCT 13-19, 2025
                </div>

              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="mt-16 pt-8 border-t border-black/20">
            <div className="flex flex-wrap items-center gap-8 text-xs">
              <span className="text-gray-600">Platinum Sponsors</span>
              {sponsors.platinum.map((sponsor, idx) => (
                <span key={idx} className="text-black/70 hover:text-black transition-colors">
                  {sponsor}
                </span>
              ))}
              <span className="text-gray-600 ml-4">Gold Sponsors</span>
              {sponsors.gold.map((sponsor, idx) => (
                <span key={idx} className="text-black/70 hover:text-black transition-colors">
                  {sponsor}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Events Section */}
        <div className="border-2 border-black/20 bg-white text-black p-8 md:p-12 relative">
          {/* Waveform background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('${waveformImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Grid texture overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.03) 0px,
                rgba(0, 0, 0, 0.03) 1px,
                transparent 1px,
                transparent 2px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.03) 0px,
                rgba(0, 0, 0, 0.03) 1px,
                transparent 1px,
                transparent 2px
              )`
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
                      <div key={speakerIdx} className="group cursor-pointer flex-1 min-w-0">
                        <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-gray-100">
                          {/* Subtle grid overlay */}
                          <div className="absolute inset-0 z-10" style={{
                            backgroundImage: `repeating-linear-gradient(
                              0deg,
                              transparent 0px,
                              transparent 2px,
                              rgba(255, 255, 255, 0.1) 2px,
                              rgba(255, 255, 255, 0.1) 3px
                            ),
                            repeating-linear-gradient(
                              90deg,
                              transparent 0px,
                              transparent 2px,
                              rgba(255, 255, 255, 0.1) 2px,
                              rgba(255, 255, 255, 0.1) 3px
                            )`
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
      </div>
    </div>
  );
}
