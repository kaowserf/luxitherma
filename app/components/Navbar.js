'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ openModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    setMobileMenuOpen(false); // Close mobile menu when clicking order
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 text-gray-900 shadow-lg backdrop-blur-sm py-3' 
        : 'bg-transparent text-white py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <h1 className={`font-bold text-xl sm:text-2xl md:text-3xl tracking-tight transition-all duration-300 relative
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={handleOrderClick}
              className="mr-3 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white px-4 py-1.5 rounded-full font-medium text-sm shadow-md"
            >
              Order Now
            </button>
            <button
              type="button"
              className="-mr-2 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
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
            
            {/* Desktop Order Now Button */}
            <div className="cursor-pointer">
              <button 
                onClick={handleOrderClick}
                className={`relative overflow-hidden group bg-gradient-to-r from-red-500 to-rose-500 
                      hover:from-red-600 hover:to-rose-600 text-white px-6 py-2.5 rounded-full 
                      font-bold transition-all duration-300 transform hover:scale-105 
                      shadow-md hover:shadow-xl border border-white/10 ${
                        scrolled ? 'border-red-400/20' : 'border-white/20'
                      }`}
              >
                <span className="relative z-10 flex items-center">
                  Order Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-2 pb-2">
              <Link 
                href="#benefits"
                className="text-gray-800 hover:text-red-500 px-3 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                href="#testimonials"
                className="text-gray-800 hover:text-red-500 px-3 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#pricing"
                className="text-gray-800 hover:text-red-500 px-3 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#faq"
                className="text-gray-800 hover:text-red-500 px-3 py-2 text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 