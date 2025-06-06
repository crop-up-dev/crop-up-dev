
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
