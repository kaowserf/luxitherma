'use client';

import React from 'react';
import Image from 'next/image';

const StepThree = ({ name }) => {
  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Your Free Guide Is On The Way!
      </h3>
      
      <p className="text-gray-600 mb-6">
        Thank you, <span className="font-semibold">{name}</span>! We've sent your free energy guide. Check your email soon.
      </p>
      
      <div className="relative w-40 h-52 mx-auto mb-6">
        <Image 
          src="/images/lead-magnet-preview.png" 
          alt="Free Energy Guide" 
          fill
          style={{ objectFit: 'contain' }}
          className="drop-shadow-md"
        />
      </div>
      
      <p className="text-gray-600">
        While you check your email, we're preparing to show you how <span className="font-semibold text-red-600">WorldTrismegisto</span> can boost your energy levels at the cellular level.
      </p>
    </div>
  );
};

export default StepThree; 