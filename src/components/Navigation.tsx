
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl font-semibold text-sage-800">
            Herbal Wellness
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sage-700 hover:text-sage-900 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-sage-700 hover:text-sage-900 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sage-700 hover:text-sage-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-sage-700 hover:text-sage-900 transition-colors"
            >
              Reviews
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-sage-600 hover:bg-sage-700 text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
