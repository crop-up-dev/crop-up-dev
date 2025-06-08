
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
    <section 
      id="home" 
      className="min-h-screen flex items-center relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop&crop=center)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-serif font-semibold text-sage-900 leading-tight">
                Natural Wellness
                <span className="text-sage-600 block">for Every Body</span>
              </h1>
              
              <p className="text-xl text-sage-700 leading-relaxed">
                Discover the power of nature with our premium herbal wellness products. 
                Carefully crafted to support your physical, mental, and sexual wellness journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToProducts}
                  size="lg"
                  className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg"
                >
                  Explore Products
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="border-sage-600 text-sage-700 hover:bg-sage-50 px-8 py-4 text-lg"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
