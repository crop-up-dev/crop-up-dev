
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Vitality Blend",
      category: "Physical Wellness",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      description: "Boost your energy and physical performance with our carefully crafted herbal blend.",
      benefits: ["Increased Energy", "Enhanced Stamina", "Natural Vitality"]
    },
    {
      id: 2,
      name: "Calm Mind",
      category: "Mental Wellness",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
      description: "Find peace and mental clarity with our stress-relieving herbal formula.",
      benefits: ["Stress Relief", "Better Sleep", "Mental Clarity"]
    },
    {
      id: 3,
      name: "Passion Root",
      category: "Sexual Wellness",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop&crop=center",
      description: "Enhance intimacy and vitality with our premium herbal wellness blend.",
      benefits: ["Enhanced Vitality", "Improved Confidence", "Natural Support"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-sage-900 mb-6">
            Premium Herbal Products
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Discover our carefully curated collection of herbal wellness solutions, 
            each formulated with the finest natural ingredients for optimal results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="border-sage-200 hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="bg-white">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-serif text-sage-900">
                    {product.name}
                  </CardTitle>
                  <span className="text-2xl font-semibold text-sage-800">
                    {product.price}
                  </span>
                </div>
                <div className="text-sm text-sage-600 bg-sage-100 px-2 py-1 rounded-full inline-block w-fit">
                  {product.category}
                </div>
              </CardHeader>
              
              <CardContent className="bg-white">
                <p className="text-sage-700 mb-4">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-sage-800 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sage-700">
                        <span className="w-2 h-2 bg-sage-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-earth-600 hover:bg-earth-700 text-white px-8 py-4 text-lg"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
