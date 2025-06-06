
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-sage-900 mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Get in touch with our wellness experts to find the perfect herbal solutions for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-sage-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-sage-900">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                  <span className="text-sage-600 text-xl">📞</span>
                </div>
                <div>
                  <div className="font-semibold text-sage-800">Phone</div>
                  <div className="text-sage-700">1-800-WELLNESS</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                  <span className="text-sage-600 text-xl">✉️</span>
                </div>
                <div>
                  <div className="font-semibold text-sage-800">Email</div>
                  <div className="text-sage-700">info@herbalwellness.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                  <span className="text-sage-600 text-xl">🕒</span>
                </div>
                <div>
                  <div className="font-semibold text-sage-800">Hours</div>
                  <div className="text-sage-700">Mon-Fri: 9AM-6PM EST</div>
                </div>
              </div>

              <div className="pt-6 border-t border-sage-200">
                <h3 className="font-semibold text-sage-800 mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-sage-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sage-400 rounded-full mr-3"></span>
                    Free consultation with wellness experts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sage-400 rounded-full mr-3"></span>
                    30-day money-back guarantee
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sage-400 rounded-full mr-3"></span>
                    Third-party tested for purity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sage-400 rounded-full mr-3"></span>
                    Sustainable and ethical sourcing
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sage-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-sage-900">
                Get Started Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-sage-800 mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-sage-800 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-sage-800 mb-2">
                    Wellness Goals
                  </label>
                  <select className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent">
                    <option>Select your primary goal</option>
                    <option>Physical Wellness & Energy</option>
                    <option>Mental Wellness & Stress Relief</option>
                    <option>Sexual Wellness & Vitality</option>
                    <option>Overall Health & Balance</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-sage-800 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                    placeholder="Tell us about your wellness needs..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 text-lg"
                >
                  Start Your Wellness Journey
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
