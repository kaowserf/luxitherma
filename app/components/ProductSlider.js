'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProductSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Array of images to display in the slider
  const images = [
    {
      src: "/images/product-home.png",
      alt: "Mitolyn Product"
    },
    {
      src: "/images/3-desktop.png",
      alt: "Mitolyn Desktop Product"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md aspect-square mx-auto">
      {/* Slider container */}
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        {/* Image slides */}
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out 
                        ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ 
                  objectFit: 'contain',
                  // Applying scale transformation only to the second image (index 1)
                  transform: index === 1 ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.5s ease-in-out'
                }}
                className="drop-shadow-xl"
                priority={index === 0}
              />
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-red-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute -inset-4 bg-red-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
    </div>
  );
} 