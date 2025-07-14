// import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {useState, useEffect, useRef} from "react";
import logo from '../assets/logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation();
  const programsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(event.target as Node)) {
        setIsProgramsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/resources', label: 'Resources' },
    // { path: '/store', label: 'Store' },
    { path: '/contact', label: 'Contact' },
  ];

  const programItems = [
    { path: '/egg-donor-program', label: 'Egg Donor Program' },
    { path: '/surrogacy-program', label: 'Surrogacy Program' },
    { path: '/become-donor-surrogate', label: 'Become a Donor / Surrogate' },
    { path: '/conception-bootcamp', label: 'Conception Bootcamp' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                  src={logo}
                  alt="Precious Conceptions Logo"
                  className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col justify-center">
                <span className="text-base font-bold text-gray-900 leading-tight">Precious Conceptions</span>
                <span className="text-xs text-emerald-600 font-medium leading-tight whitespace-nowrap">walking with you to victory</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Programs Dropdown */}
            <div className="relative" ref={programsRef}>
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  programItems.some(item => isActive(item.path))
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                <span>Programs</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProgramsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProgramsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  {programItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsProgramsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/booking"
              className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors duration-200 whitespace-nowrap"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none focus:text-emerald-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Programs Section */}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="px-3 py-2 text-base font-medium text-gray-900">Programs</div>
                {programItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-6 py-2 text-sm transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/booking"
                className="block bg-emerald-600 text-white px-3 py-2 text-base font-medium hover:bg-emerald-700 transition-colors duration-200 rounded-md mx-3 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;