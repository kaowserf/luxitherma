'use client';

import React from 'react';
import Image from 'next/image';

export default function ProductOptions({ openModal }) {
  return (
    <div className="px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-gray-900">
        Product Options
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 lg:gap-6 mb-8">
        {/* First image - smaller */}
        <div className="w-full md:w-[28%] max-w-[300px] flex flex-col items-center">
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-red-500">
            Basic Package
          </h3>
          <div className="w-full aspect-square relative overflow-hidden rounded-lg border-4 border-red-400 group">
            <Image 
              src="/images/price 01.png"
              alt="Basic Package"
              fill
              style={{ objectFit: 'contain' }}
              className="transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
              <button 
                onClick={openModal}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Middle image - larger */}
        <div className="w-full md:w-[32%] max-w-[340px] flex flex-col items-center mt-8 md:mt-0 md:-mb-4 order-first md:order-none scale-110 sm:scale-105 z-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-red-600 flex items-center">
            Premium Package 
            <span className="ml-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">BEST VALUE</span>
          </h3>
          <div className="w-full aspect-square relative overflow-hidden rounded-lg border-4 border-red-600 shadow-lg group">
            <Image 
              src="/images/price 02.png"
              alt="Premium Package"
              fill
              style={{ objectFit: 'contain' }}
              className="transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
              <button 
                onClick={openModal}
                className="bg-red-600 text-white font-bold py-3 px-6 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Third image - smaller */}
        <div className="w-full md:w-[28%] max-w-[300px] flex flex-col items-center">
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-red-700">
            Family Package
          </h3>
          <div className="w-full aspect-square relative overflow-hidden rounded-lg border-4 border-red-700 group">
            <Image 
              src="/images/price 3.png"
              alt="Family Package"
              fill
              style={{ objectFit: 'contain' }}
              className="transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
              <button 
                onClick={openModal}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add a main CTA button below the packages */}
      <div className="text-center mt-8 sm:mt-12">
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-bold py-4 px-8 sm:px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
        >
          Choose Your Package
        </button>
      </div>
    </div>
  );
} 