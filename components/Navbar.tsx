"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  const navigateToMainPageSection = (sectionId: string) => {
    if (window.location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash);
        }, 100);
      }
    };

    handleHashScroll();
    
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <nav className="bg-white border-b-2 border-black/20 sticky top-0 z-50">
      <div className="w-full">
        <div className="hidden md:flex">
          <div className="bg-white text-black border-r-2 border-black/20 min-w-[200px]">
            <button 
              onClick={() => navigateToPage('/')}
              className="w-full px-6 py-4 text-center hover:bg-gray-50 transition-colors"
            >
              <div className="font-bold text-sm leading-tight">
                Victoria<br/>Tech Week
              </div>
            </button>
          </div>
          
          <div className="flex-1 border-r-2 border-black/20">
            <button 
              onClick={() => navigateToPage('/event')}
              className="w-full text-center py-6 text-[#484848] hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              EVENTS
            </button>
          </div>
          
          <div className="flex-1 border-r-2 border-black/20">
            <button 
              onClick={() => navigateToMainPageSection('sponsor')}
              className="w-full text-center py-6 text-[#484848] hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              SPONSOR
            </button>
          </div>
          
          <div className="flex-1 border-r-2 border-black/20">
            <button 
              onClick={() => navigateToMainPageSection('sponsor')}
              className="w-full text-center py-6 text-[#484848] hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              HOST EVENT
            </button>
          </div>
          
          <div className="flex-1">
            <button 
              onClick={() => navigateToMainPageSection('contact')}
              className="w-full text-center py-6 text-[#484848] hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              CONTACT
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <button 
              onClick={() => navigateToPage('/')}
              className="font-bold text-sm leading-tight hover:text-gray-600 transition-colors"
            >
              Victoria Tech Week
            </button>
            
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

          <div className={`${isMenuOpen ? 'block' : 'hidden'} border-t-2 border-black/20 bg-white`}>
            <button 
              onClick={() => navigateToPage('/event')}
              className="w-full text-left px-4 py-4 text-[#484848] hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm border-b border-black/10"
            >
              EVENTS
            </button>
            <button 
              onClick={() => navigateToMainPageSection('sponsor')}
              className="w-full text-left px-4 py-4 text-[#484848] hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm border-b border-black/10"
            >
              SPONSOR
            </button>
            <button 
              onClick={() => navigateToMainPageSection('sponsor')}
              className="w-full text-left px-4 py-4 text-[#484848] hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm border-b border-black/10"
            >
              HOST EVENT
            </button>
            <button 
              onClick={() => navigateToMainPageSection('contact')}
              className="w-full text-left px-4 py-4 text-[#484848] hover:bg-gray-50 transition-colors font-medium tracking-wider text-sm"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
