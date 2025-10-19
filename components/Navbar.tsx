"use client";

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="bg-white border-b-2 border-black/20 sticky top-0 z-50">
      <div className="w-full">
        <div className="flex">
          {/* Victoria Tech Week - Branded Section */}
          <div className="bg-white text-black border-r-2 border-black/20 min-w-[200px]">
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-sm leading-tight">
                Victoria<br/>Tech Week
              </div>
            </div>
          </div>
          
          {/* EVENTS */}
          <div className="flex-1 border-r-2 border-black/20">
            <button 
              onClick={() => scrollToSection('events')}
              className="w-full text-center py-6 text-black hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              EVENTS
            </button>
          </div>
          
          {/* SPONSOR */}
          <div className="flex-1 border-r-2 border-black/20">
            <button 
              onClick={() => scrollToSection('sponsor')}
              className="w-full text-center py-6 text-black hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              SPONSOR
            </button>
          </div>
          
          {/* HOST EVENT */}
          <div className="flex-1 border-r-2 border-black/20">
            <button 
              onClick={() => scrollToSection('sponsor')}
              className="w-full text-center py-6 text-black hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              HOST EVENT
            </button>
          </div>
          
          {/* CONTACT */}
          <div className="flex-1">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full text-center py-6 text-black hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
