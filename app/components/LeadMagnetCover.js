'use client';

import React from 'react';

export default function LeadMagnetCover() {
  return (
    <div className="w-[400px] h-[520px] bg-gradient-to-br from-red-600 via-rose-600 to-red-700 rounded-lg shadow-2xl overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full transform translate-y-1/3 -translate-x-1/3"></div>
      
      {/* Content */}
      <div className="p-8 flex flex-col h-full">
        <div className="mb-4">
          <div className="text-white opacity-80 text-sm font-medium mb-1">FREE GUIDE</div>
          <h1 className="text-white text-3xl font-bold leading-tight mb-2">
            10 Natural Energy Boosters
          </h1>
          <div className="w-16 h-1 bg-white opacity-60 mb-3"></div>
          <h2 className="text-white text-xl opacity-90">
            Revitalize Your Energy Levels Without Caffeine or Stimulants
          </h2>
        </div>
        
        {/* Bullet points */}
        <div className="mt-6 space-y-3 flex-grow">
          {[
            "Boost your energy in 15 minutes or less",
            "Simple kitchen ingredients for natural energy",
            "Morning routines that maximize your mitochondria",
            "Instant energy techniques used by elite athletes",
            "Foods that drain your energy (and what to eat instead)"
          ].map((point, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white opacity-90 flex items-center justify-center mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-red-700" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-2 text-white opacity-90 text-sm">{point}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="mt-auto">
          <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-white font-medium text-center text-lg">
              From the makers of Mitolyn
            </p>
            <p className="text-white font-light text-center text-sm opacity-90">
              The #1 Mitochondrial Support Formula
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 