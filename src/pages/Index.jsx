
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import DiscountPopup from '../components/DiscountPopup';
import SecondPopup from '../components/SecondPopup';
import { usePopupManager } from '../hooks/usePopupManager';

const Index = () => {
  const { 
    showDiscountPopup, 
    showSecondPopup, 
    closeDiscountPopup 
  } = usePopupManager();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      
      {/* Popup System */}
      <DiscountPopup 
        isOpen={showDiscountPopup} 
        onClose={closeDiscountPopup} 
      />
      <SecondPopup isOpen={showSecondPopup} />
    </div>
  );
};

export default Index;
