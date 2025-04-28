'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ openModal }) {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to change navbar style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleOrderClick = (e) => {
    e.preventDefault();
    if (typeof openModal === 'function') {
      openModal();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 text-gray-900 shadow-lg backdrop-blur-sm py-3' 
        : 'bg-transparent text-white py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className={`font-bold text-2xl md:text-3xl tracking-tight transition-all duration-300 relative
                            ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="relative inline-block">
                luxi
                <span className="group-hover:w-full absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-rose-400 transition-all duration-300"></span>
              </span>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300 
                            ${scrolled ? 'from-red-600 to-rose-600' : 'from-red-300 to-rose-300'}`}>
                therma
              </span>
            </h1>
          </Link>

          {/* Navigation Links - Can be added later if needed */}
          <div className="hidden md:flex space-x-6">
            {/* Example menu items - can be populated when needed */}
            <Link 
              href="#benefits"
              className={`hover:text-red-400 transition-colors duration-300 
                        ${scrolled ? 'text-gray-800' : 'text-white'} relative group`}
            >
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#testimonials"
              className={`hover:text-red-400 transition-colors duration-300 
                        ${scrolled ? 'text-gray-800' : 'text-white'} relative group`}
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#pricing"
              className={`hover:text-red-400 transition-colors duration-300 
                        ${scrolled ? 'text-gray-800' : 'text-white'} relative group`}
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#faq"
              className={`hover:text-red-400 transition-colors duration-300 
                        ${scrolled ? 'text-gray-800' : 'text-white'} relative group`}
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          
          {/* Order Now Button */}
          <div className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-red-400 transition-colors duration-300 cursor-pointer`}>
            <button 
              onClick={handleOrderClick}
              className={`bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 
                    text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                    transform hover:scale-105 shadow hover:shadow-lg`}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 