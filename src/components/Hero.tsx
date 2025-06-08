
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-semibold text-sage-900 leading-tight">
              Natural Wellness
              <span className="text-sage-600 block">for Every Body</span>
            </h1>
            
            <p className="text-xl text-sage-700 leading-relaxed">
              Discover the power of nature with our premium herbal wellness products. 
              Carefully crafted to support your physical, mental, and sexual wellness journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToProducts}
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg"
              >
                Explore Products
              </Button>
              <Button 
                size="lg" 
                className="bg-earth-600 hover:bg-earth-700 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop&crop=center"
                alt="Natural herbs and wellness products"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-200 rounded-full opacity-50"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-earth-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
