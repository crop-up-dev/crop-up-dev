import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "California",
      rating: 5,
      text: "The Vitality Blend has completely transformed my energy levels. I feel more balanced and energetic throughout the day without any crashes.",
      product: "Vitality Blend"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "New York",
      rating: 5,
      text: "Calm Mind has been a game-changer for my sleep quality. I finally found a natural solution that actually works.",
      product: "Calm Mind"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Texas",
      rating: 5,
      text: "I've tried many wellness products, but nothing compares to the quality and effectiveness of these herbal blends. Highly recommend!",
      product: "Passion Root"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Florida",
      rating: 5,
      text: "The customer service is exceptional, and the products deliver exactly what they promise. I'm a customer for life.",
      product: "Vitality Blend"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-sage-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Real stories from people who have transformed their wellness journey with our products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="border-sage-200 hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6 bg-white">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-sage-600 text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-sage-700 mb-4 italic">
                  "{review.text}"
                </p>
                
                <div className="border-t border-sage-200 pt-4">
                  <div className="font-semibold text-sage-800">{review.name}</div>
                  <div className="text-sm text-sage-600 mb-2">{review.location}</div>
                  <div className="text-xs text-sage-500 bg-sage-100 px-2 py-1 rounded-full inline-block">
                    {review.product}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-sage-700">
            <span className="text-3xl font-serif font-semibold text-sage-800">4.9</span>
            <div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sage-600">★</span>
                ))}
              </div>
              <div className="text-sm">Based on 1,200+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
