// import React from 'react';
import { Heart, MessageCircle, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from "../assets/logo.jpg";
import heart from "../assets/heart.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand and Mission */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={heart}
                alt="Precious Conceptions Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">Precious Conceptions</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Supporting Nigerian families on their journey to parenthood through holistic,
              personalized fertility guidance and emotional support. Every journey is unique, 
              and every dream matters.
            </p>
            <span className="inline-flex items-center gap-2 bg-emerald-800/20 rounded-full px-4 py-2 text-emerald-200 font-semibold text-sm mb-4">
              <Heart className="h-4 w-4 text-emerald-400" />
              "You are not alone on this journey."
            </span>
            <div className="flex space-x-3 mt-2">
              <a 
                href="https://wa.me/+2348000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors duration-200 shadow"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/fertilityjourney" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors duration-200 shadow"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-emerald-400 hover:underline transition-colors duration-200">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-emerald-400 hover:underline transition-colors duration-200">Our Services</a></li>
              <li><a href="/testimonials" className="text-gray-300 hover:text-emerald-400 hover:underline transition-colors duration-200">Success Stories</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-emerald-400 hover:underline transition-colors duration-200">Resources</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-emerald-400 hover:underline transition-colors duration-200">Book Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-emerald-400"/>
                <span className="text-gray-300 text-base">(+234) 7088080339</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300 text-base">info@preciousconceptionscom</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300 text-base">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-10 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
              <p className="text-gray-300">Get fertility tips, success stories, and updates delivered to your inbox.</p>
            </div>
            <form className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-l-full text-gray-900 flex-1 md:w-72 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-base"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-7 py-3 rounded-r-full font-semibold transition-colors duration-200 text-base">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Precious Conceptions limited. All rights reserved. Made with <span className="text-emerald-400">♥</span> for families in Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;