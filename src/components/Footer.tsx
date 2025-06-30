// import React from 'react';
import { Heart, MessageCircle, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">FertilityJourney</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Supporting Nigerian families on their journey to parenthood through holistic, 
              personalized fertility guidance and emotional support. Every journey is unique, 
              and every dream matters.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/+2348000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/fertilityjourney" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Our Services</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Success Stories</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Resources</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Book Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">+234 800 000 0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">hello@fertilityjourney.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
              <p className="text-gray-300">Get fertility tips, success stories, and updates delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md text-gray-900 flex-1 md:w-64 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-r-md font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FertilityJourney. All rights reserved. Made with ❤️ for families in Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;