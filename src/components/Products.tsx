
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Vitality Blend",
      category: "Physical Wellness",
      description: "A powerful combination of ginseng, ashwagandha, and rhodiola to boost energy and stamina naturally.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop&crop=center",
      ingredients: ["Ginseng Root", "Ashwagandha", "Rhodiola", "Ginger"],
      benefits: ["Increased Energy", "Better Stamina", "Reduced Fatigue"]
    },
    {
      id: 2,
      name: "Calm Mind",
      category: "Mental Wellness",
      description: "Carefully selected herbs including chamomile and lavender to promote relaxation and mental clarity.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop&crop=center",
      ingredients: ["Chamomile", "Lavender", "Lemon Balm", "Passionflower"],
      benefits: ["Reduced Stress", "Better Sleep", "Mental Clarity"]
    },
    {
      id: 3,
      name: "Passion Root",
      category: "Sexual Wellness",
      description: "Traditional herbs known for supporting intimate wellness and natural vitality for both men and women.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop&crop=center",
      ingredients: ["Maca Root", "Tribulus", "Horny Goat Weed", "Fenugreek"],
      benefits: ["Enhanced Libido", "Natural Vitality", "Hormonal Balance"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-sage-900 mb-6">
            Premium Herbal Products
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Each product is carefully formulated with the highest quality herbs, 
            sourced sustainably and tested for purity and potency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-sage-200">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader>
                <div className="text-sm font-medium text-sage-600 mb-2">
                  {product.category}
                </div>
                <CardTitle className="text-2xl font-serif text-sage-900">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sage-700">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-2">Key Ingredients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-sage-700 text-sm flex items-center">
                          <span className="w-2 h-2 bg-sage-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                >
                  Contact Us to Buy
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
