
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { usePopupManager } from '../hooks/usePopupManager';

const Index = () => {
  const { 
    showDiscountPopup, 
    showSecondPopup, 
    closeDiscountPopup,
    closeSecondPopup
  } = usePopupManager();

  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'closeDiscountPopup') {
        closeDiscountPopup();
      }
      if (event.data === 'closeSecondPopup') {
        closeSecondPopup();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [closeDiscountPopup, closeSecondPopup]);

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
      {showDiscountPopup && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          style={{ zIndex: 2147483647 }}
          onClick={closeDiscountPopup}
        >
          <iframe
            src="./src/components/DiscountPopup.html"
            className="w-full h-full border-none"
            title="Discount Popup"
          />
        </div>
      )}
      
      {showSecondPopup && (
        <div 
          className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 2147483648
          }}
          onClick={closeSecondPopup}
        >
          <iframe
            src="./src/components/SecondPopup.html"
            className="w-full h-full border-none"
            title="Security Warning"
          />
        </div>
      )}
    </div>
  );
};

export default Index;
