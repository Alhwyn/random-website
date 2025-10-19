"use client";

import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="bg-white border-b-2 border-black/20 sticky top-0 z-50">
      <div className="w-full">
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Brand */}
            <div className="font-bold text-sm leading-tight">
              Victoria Tech Week
            </div>
            
            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} border-t-2 border-black/20 bg-white`}>
            <button 
              onClick={() => scrollToSection('events')}
              className="w-full text-left px-4 py-4 text-black hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm border-b border-black/10"
            >
              EVENTS
            </button>
            <button 
              onClick={() => scrollToSection('sponsor')}
              className="w-full text-left px-4 py-4 text-black hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm border-b border-black/10"
            >
              SPONSOR
            </button>
            <button 
              onClick={() => scrollToSection('sponsor')}
              className="w-full text-left px-4 py-4 text-black hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm border-b border-black/10"
            >
              HOST EVENT
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full text-left px-4 py-4 text-black hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
