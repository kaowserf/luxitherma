'use client';

import React from 'react';
import Image from 'next/image';

export default function MoneyBackGuarantee() {
  return (
    <div className="py-10 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-100 rounded-full opacity-40 blur-2xl animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-100 rounded-full opacity-40 blur-2xl animate-blob"></div>
          
          {/* Content */}
          <div className="relative z-10 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 items-center">
              {/* Left side - Main monogram */}
              <div className="p-6 flex justify-center items-center md:col-span-2">
                <div className="relative w-44 h-44 md:w-56 md:h-56">
                  <Image 
                    src="/images/main monogram.png" 
                    alt="90-Day Money Back Guarantee" 
                    fill
                    style={{ objectFit: 'contain' }}
                    className="drop-shadow-lg"
                  />
                </div>
              </div>
              
              {/* Right side - Text and sub monogram */}
              <div className="p-6 bg-gradient-to-br from-red-50 to-white md:col-span-3">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                  100% SATISFACTION<br />90-DAY MONEY BACK GUARANTEE
                </h2>
                
                <p className="text-gray-700 text-base mb-3 text-center md:text-left">
                  Your order today is protected by my iron-clad 90-day 100% money-back guarantee.
                </p>
                
                <p className="text-gray-700 text-base mb-4 text-center md:text-left">
                  If you are not astonished by your results, let us know within 90 days and we'll refund every penny of your investment. No questions asked.
                </p>
                
                {/* Compact layout with sub monogram and USA text */}
                <div className="flex items-center flex-col md:flex-row md:justify-between">
                  {/* Sub monogram - smaller and simplified */}
                  <div className="relative w-28 h-28 transition-all duration-300 hover:scale-105">
                    <Image 
                      src="/images/sub monogram.png" 
                      alt="Quality Guarantee" 
                      fill
                      priority
                      style={{ objectFit: 'contain' }}
                      className="drop-shadow-md"
                    />
                    <div className="absolute -z-10 inset-0 bg-red-100/50 rounded-full blur-sm transform scale-90"></div>
                  </div>
                  
                  {/* Made in USA text - simplified badge */}
                  <div className="mt-4 md:mt-0 flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-50 to-red-50 rounded-full border border-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-blue-600 mr-1.5 flex-shrink-0">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-xs bg-gradient-to-r from-blue-700 to-red-700 bg-clip-text text-transparent">
                      Proudly manufactured in the USA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 