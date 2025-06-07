import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-sage-900">
              Our Commitment to 
              <span className="text-sage-600 block">Natural Wellness</span>
            </h2>
            
            <div className="space-y-6 text-sage-700 text-lg leading-relaxed">
              <p>
                For over two decades, we've been dedicated to harnessing the healing power 
                of nature. Our journey began with a simple belief: that the earth provides 
                everything we need for optimal wellness.
              </p>
              
              <p>
                We partner with sustainable farms and ethical suppliers worldwide to source 
                the finest herbs and botanicals. Every product is carefully crafted in our 
                certified facilities, ensuring the highest standards of quality and purity.
              </p>
              
              <p>
                Our team of herbalists, nutritionists, and wellness experts work together 
                to create formulations that honor traditional wisdom while meeting modern 
                quality standards.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold text-sage-800">20+</div>
                <div className="text-sage-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold text-sage-800">50K+</div>
                <div className="text-sage-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300&h=200&fit=crop&crop=center"
                  alt="Herbal ingredients"
                  className="w-full rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&crop=center"
                  alt="Natural herbs preparation"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=300&fit=crop&crop=center"
                  alt="Wellness lifestyle"
                  className="w-full rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop&crop=center"
                  alt="Natural botanicals"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
