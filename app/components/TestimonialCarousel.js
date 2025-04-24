'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    age: 42,
    location: "Denver, CO",
    image: "/customer img/1.png",
    quote: "After just 2 weeks of Mitolyn, I have more energy than I've had in years. I'm back to my morning runs and feeling incredible!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael T.",
    age: 55,
    location: "Portland, OR",
    image: "/customer img/2.png",
    quote: "The mental clarity I've experienced is remarkable. I'm more productive at work and actually have energy left for my family at the end of the day.",
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
    quote: "I was skeptical at first, but the results speak for themselves. My energy levels are up and I'm sleeping better than I have in a decade.",
    rating: 5
  },
  {
    id: 6,
    name: "Jennifer M.",
    age: 45,
    location: "Boston, MA",
    image: "/customer img/6.png",
    quote: "I've tried so many supplements before, but Mitolyn is the only one that delivered real results. I feel like I've turned back the clock!",
    rating: 5
  },
  {
    id: 8,
    name: "David L.",
    age: 52,
    location: "Atlanta, GA",
    image: "/customer img/8.png",
    quote: "The difference in my workout recovery has been night and day. I'm lifting more and feeling stronger at 52 than I did at 40.",
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
    quote: "My brain fog has lifted completely. I'm thinking clearer and remembering things better than I have in years.",
    rating: 5
  },
  {
    id: 12,
    name: "Patricia N.",
    age: 57,
    location: "Miami, FL",
    image: "/customer img/12.png",
    quote: "After starting Mitolyn, my friends keep asking what my secret is! I have more energy and everyone says I'm glowing.",
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
    quote: "As someone who's struggled with low energy for years, finding Mitolyn has been life-changing. I finally feel like myself again!",
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
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Handle slide navigation
  const nextSlide = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };
  
  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(testimonials.length - 1);
    }
  };

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
    <div className="py-12 bg-gradient-to-b from-emerald-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-gradient-to-br from-blue-300 to-cyan-500 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-300 to-indigo-500 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
              Our Customers <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Love Mitolyn</span>
            </h2>
            <p className="text-lg text-gray-700 animate-slide-up animation-delay-200">
              Join thousands of satisfied customers who have experienced the transformative effects of Mitolyn on their daily energy and wellbeing.
            </p>
            <div className="mt-6 flex items-center animate-slide-up animation-delay-400">
              <div className="flex -space-x-2">
                {[1, 4, 6, 10].map((id, index) => (
                  <div 
                    key={id} 
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-110 hover:z-10"
                    style={{ zIndex: 4 - index, animationDelay: `${index * 100}ms` }}
                  >
                    <Image 
                      src={testimonials.find(t => t.id === id)?.image || ''} 
                      alt="Customer" 
                      width={40} 
                      height={40} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {renderStars(5)}
                  <span className="ml-2 text-gray-800 font-medium">5.0</span>
                </div>
                <p className="text-sm text-gray-600">From over 1,500 reviews</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial Slider */}
          <div className="md:w-2/3 relative animate-fade-in animation-delay-600">
            <div 
              className="relative overflow-hidden rounded-xl shadow-xl"
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
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-3"
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col border border-gray-100">
                      <div className="p-6 flex-grow">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-emerald-100 shadow-md transform transition-transform duration-300 hover:scale-110">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-gray-900">{testimonial.name}</h3>
                            <p className="text-xs text-gray-600">{testimonial.age}, {testimonial.location}</p>
                          </div>
                          <div className="ml-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full p-1.5 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex items-center mb-3">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-700 italic text-sm">{testimonial.quote}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button 
                onClick={prevSlide}
                className="bg-white hover:bg-gray-50 text-gray-800 rounded-full p-2 shadow-md transition-all duration-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Pagination Dots */}
              <div className="flex items-center space-x-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`transition-all duration-300 ${
                      index === activeIndex ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 w-6 h-2 rounded-full' : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="bg-white hover:bg-gray-50 text-gray-800 rounded-full p-2 shadow-md transition-all duration-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:scale-110"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8 animate-fade-in animation-delay-800">
          <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Your Mitolyn Today
          </button>
        </div>
      </div>
    </div>
  );
} 