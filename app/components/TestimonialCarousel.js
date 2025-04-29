'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    age: 42,
    location: "Denver, CO",
    image: "/customer img/1.png",
    quote: "After just 2 weeks of Mitolyn, I have more energy than I&apos;ve had in years. I&apos;m back to my morning runs and feeling incredible!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael T.",
    age: 55,
    location: "Portland, OR",
    image: "/customer img/2.png",
    quote: "The mental clarity I&apos;ve experienced is remarkable. I&apos;m more productive at work and actually have energy left for my family at the end of the day.",
    rating: 5
  },
  {
    id: 4,
    name: "Lisa B.",
    age: 38,
    location: "Chicago, IL",
    image: "/customer img/4.png",
    quote: "As a busy mom, I was constantly exhausted. Mitolyn has changed everything—I feel recharged and present for my kids again.",
    rating: 5
  },
  {
    id: 5,
    name: "Robert K.",
    age: 60,
    location: "Phoenix, AZ",
    image: "/customer img/5.png",
    quote: "I was skeptical at first, but the results speak for themselves. My energy levels are up and I&apos;m sleeping better than I have in a decade.",
    rating: 5
  },
  {
    id: 6,
    name: "Jennifer M.",
    age: 45,
    location: "Boston, MA",
    image: "/customer img/6.png",
    quote: "I&apos;ve tried so many supplements before, but Mitolyn is the only one that delivered real results. I feel like I&apos;ve turned back the clock!",
    rating: 5
  },
  {
    id: 8,
    name: "David L.",
    age: 52,
    location: "Atlanta, GA",
    image: "/customer img/8.png",
    quote: "The difference in my workout recovery has been night and day. I&apos;m lifting more and feeling stronger at 52 than I did at 40.",
    rating: 5
  },
  {
    id: 10,
    name: "Emily W.",
    age: 36,
    location: "San Diego, CA",
    image: "/customer img/10.png",
    quote: "As a healthcare professional working long shifts, I need sustained energy. Mitolyn keeps me sharp and focused throughout my 12-hour days.",
    rating: 5
  },
  {
    id: 11,
    name: "James H.",
    age: 48,
    location: "Seattle, WA",
    image: "/customer img/11.png",
    quote: "My brain fog has lifted completely. I&apos;m thinking clearer and remembering things better than I have in years.",
    rating: 5
  },
  {
    id: 12,
    name: "Patricia N.",
    age: 57,
    location: "Miami, FL",
    image: "/customer img/12.png",
    quote: "After starting Mitolyn, my friends keep asking what my secret is! I have more energy and everyone says I&apos;m glowing.",
    rating: 5
  },
  {
    id: 13,
    name: "Thomas R.",
    age: 63,
    location: "Austin, TX",
    image: "/customer img/13.png",
    quote: "I was looking for something to help with my energy levels, but Mitolyn did so much more. I feel rejuvenated in every way.",
    rating: 5
  },
  {
    id: 14,
    name: "Michelle D.",
    age: 41,
    location: "Minneapolis, MN",
    image: "/customer img/14.png",
    quote: "As someone who&apos;s struggled with low energy for years, finding Mitolyn has been life-changing. I finally feel like myself again!",
    rating: 5
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  
  // Function to render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"} 
        stroke={i < rating ? "none" : "currentColor"} 
        className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  // Handle slide navigation
  const nextSlide = useCallback(() => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  }, [activeIndex]);
  
  const prevSlide = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(testimonials.length - 1);
    }
  }, [activeIndex]);

  // Auto scroll functionality has been removed

  // Handle touch/mouse events for swiping
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      const diff = startX - currentX;
      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setCurrentX(e.clientX);
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      setCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      const diff = startX - currentX;
      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Custom curved background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white z-0">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white"></div>
        <svg className="absolute bottom-24 left-0 right-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L60,272C120,256,240,224,360,224C480,224,600,256,720,261.3C840,267,960,245,1080,224C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-red-300 to-red-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-gradient-to-br from-rose-300 to-rose-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Decorative Elements */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block">
            <div className="flex items-center mb-2 justify-center">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-300"></div>
              <span className="px-3 text-red-500 font-medium">Real Results</span>
              <div className="h-px w-8 bg-gradient-to-r from-red-300 to-transparent"></div>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                Life-Changing
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-rose-400 rounded-full"></span>
            </span> Testimonials
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced the transformative effects of Mitolyn on their daily energy and wellbeing.
          </p>
        </div>
        
        {/* Floating Overall Rating Card */}
        <div className="mb-12 flex justify-center">
          <div className="bg-white px-8 py-6 rounded-xl shadow-xl border border-gray-100 flex items-center transform hover:scale-105 transition-all duration-300">
            <div className="flex -space-x-4 mr-6">
              {[1, 4, 6, 10].map((id, index) => (
                <div 
                  key={id} 
                  className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md transform transition-all duration-300 hover:scale-110 hover:z-10"
                  style={{ zIndex: 4 - index, animationDelay: `${index * 100}ms` }}
                >
                  <Image 
                    src={testimonials.find(t => t.id === id)?.image || ''} 
                    alt="Customer" 
                    width={48} 
                    height={48} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex">
                  {renderStars(5)}
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">5.0</span>
              </div>
              <p className="text-gray-600">From over 1,500 verified customers</p>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative animate-fade-in">
          {/* Large quote decorative element */}
          <div className="absolute -top-10 -left-10 text-9xl text-red-100 opacity-50 z-0 pointer-events-none font-serif">
            "
          </div>
          
          <div 
            className="relative overflow-hidden rounded-2xl"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col border border-gray-100 group">
                    {/* Decorative top gradient bar */}
                    <div className="h-2 bg-gradient-to-r from-red-400 to-rose-500"></div>
                    
                    <div className="p-8 flex-grow relative">
                      {/* Quote mark decorative element */}
                      <div className="absolute top-3 right-4 text-6xl text-red-50 font-serif leading-none z-0">
                        "
                      </div>
                      
                      <div className="flex items-start mb-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden mr-5 shadow-lg transform transition-transform duration-300 group-hover:scale-105 ring-4 ring-red-50">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-red-500 to-rose-600 rounded-full p-1.5 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.age}, {testimonial.location}</p>
                          <div className="flex items-center mt-2">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <p className="text-gray-700 text-lg leading-relaxed relative z-10 group-hover:text-gray-900 transition-colors">
                          <span className="text-red-500 font-serif text-2xl mr-1">"</span>
                          {testimonial.quote}
                          <span className="text-red-500 font-serif text-2xl ml-1">"</span>
                        </p>
                      </div>
                      
                      {/* Bottom decorative element */}
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-red-600">
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                          </div>
                          <div className="ml-2 text-xs text-gray-500">
                            Verified Purchaser
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">
                          Posted 2 weeks ago
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 text-gray-800 rounded-full shadow-lg transition-all duration-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 hover:scale-110 group"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Enhanced Pagination - Only show mobile display dots for small screens */}
            <div className="hidden md:flex items-center space-x-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 relative ${
                    index === activeIndex 
                      ? 'bg-gradient-to-r from-red-500 to-rose-500 w-8 h-2.5 rounded-full shadow-md' 
                      : 'bg-gray-300 w-2.5 h-2.5 rounded-full hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === activeIndex && (
                    <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600">
                      {index + 1}/{testimonials.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Simplified mobile pagination */}
            <div className="flex md:hidden items-center justify-center">
              <span className="text-sm font-medium text-gray-600">
                {activeIndex + 1}/{testimonials.length}
              </span>
            </div>
            
            <button 
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 text-gray-800 rounded-full shadow-lg transition-all duration-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 hover:scale-110 group"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="mt-16 text-center relative z-10">
          <div className="inline-block mx-auto bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-2xl shadow-lg border border-red-100 max-w-xl transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
              Experience the Mitolyn Difference <span className="text-red-600">Today</span>
            </h3>
            <p className="text-gray-700 mb-5">
              Join our satisfied customers and transform your energy levels with our premium supplement.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
              <Link href="/pre-landing" className="inline-block">
                <button className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-bold py-3 px-8 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
                  Get Your FREE Energy Guide
                </button>
              </Link>
              <a href="#pricing" className="inline-block">
                <button className="bg-white text-red-600 border-2 border-red-500 font-bold py-3 px-8 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg w-full sm:w-auto hover:bg-red-50">
                  Order Mitolyn Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 