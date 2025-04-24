'use client';

import React from 'react';

const PriceCard = ({ imageUrl, altText, isFeatured, orderLink }) => {
  return (
    <a 
      href={orderLink}
      className={`group w-full ${isFeatured ? 'md:w-[35%]' : 'md:w-[30%]'} transform transition-all duration-300 hover:scale-105 ${isFeatured ? '-mt-4 md:mt-0 md:-mb-8 z-10' : ''}`}
    >
      <div 
        className={`relative ${isFeatured ? 'h-[420px] md:h-[480px] lg:h-[530px]' : 'h-[400px] md:h-[450px] lg:h-[500px]'} w-full rounded-xl overflow-hidden ${isFeatured ? 'shadow-2xl hover:shadow-2xl border-4 border-emerald-500' : 'shadow-lg hover:shadow-xl'} transition-all duration-300 bg-white flex items-center justify-center`}
      >
        {/* Simple direct image, same as in debug page */}
        <img
          src={imageUrl}
          alt={altText}
          className="max-w-full max-h-full object-contain p-4 transition-all duration-300 group-hover:brightness-110"
        />
        
        {isFeatured && (
          <div className="absolute top-0 left-0 right-0 bg-emerald-500 text-white text-center py-2 font-bold">
            BEST VALUE
          </div>
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          <span className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            Order Now
          </span>
        </div>
      </div>
    </a>
  );
};

export default PriceCard; 