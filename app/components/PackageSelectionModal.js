'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PackageSelectionModal({ isOpen, onClose }) {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation control
  useEffect(() => {
    if (isOpen) {
      // Small delay for the animation to work properly
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  // Handle package selection
  const handlePackageSelect = (packageType) => {
    setSelectedPackage(packageType);
  };

  // Handle proceed to checkout
  const handleProceed = () => {
    if (!selectedPackage) return;
    
    // Determine quantity based on package type
    let qty = 1;
    if (selectedPackage === 'premium') qty = 6;
    if (selectedPackage === 'family') qty = 3;
    
    // Close the modal with animation
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      // Redirect to pre-landing page with package info
      router.push(`/pre-landing?package=${selectedPackage}&qty=${qty}`);
    }, 300);
  };

  // Handle close with animation
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  // If not open, don't render
  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative bg-white rounded-xl w-full max-w-5xl mx-auto overflow-auto max-h-[90vh] transition-all duration-300 modal-scrollbar ${
          isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-20 bg-white/80 rounded-full p-1"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal header */}
        <div className="text-center p-6 md:p-8 bg-gradient-to-r from-red-50 to-rose-50 border-b border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Choose Your Package</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the package that best fits your needs for optimal results.
          </p>
        </div>

        <div className="p-4 md:p-8">
          {/* Packages container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Basic Package */}
            <div 
              className={`rounded-xl border-2 transition-all duration-200 ${
                selectedPackage === 'basic' 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-200 hover:border-red-300'
              } cursor-pointer overflow-hidden shadow-md h-full`}
              onClick={() => handlePackageSelect('basic')}
            >
              <div className="p-4 bg-gradient-to-b from-red-100 to-white">
                <h3 className="text-xl font-bold text-center text-red-600 mb-1">Basic Package</h3>
                <p className="text-sm text-center text-gray-600 mb-3">1 Bottle</p>
                <div className="relative w-full h-40 md:h-44 mx-auto">
                  <Image 
                    src="/images/price 01.png"
                    alt="Basic Package"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="p-4 h-full flex flex-col">
                <ul className="space-y-2 mb-4 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">1 Month Supply</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">30-Day Satisfaction Guarantee</span>
                  </li>
                </ul>
                <div className="text-center mt-auto">
                  <div className="text-2xl font-bold text-red-600 mb-2">$59</div>
                  <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Starter Option
                  </span>
                </div>
              </div>
              {selectedPackage === 'basic' && (
                <div className="absolute top-4 right-4">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Premium Package */}
            <div 
              className={`rounded-xl border-2 transition-all duration-200 ${
                selectedPackage === 'premium' 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-200 hover:border-red-300'
              } cursor-pointer overflow-hidden relative transform md:scale-110 z-10 shadow-lg h-full`}
              onClick={() => handlePackageSelect('premium')}
            >
              <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-1 text-sm font-bold">
                BEST VALUE
              </div>
              <div className="pt-7 p-4 bg-gradient-to-b from-red-100 to-white">
                <h3 className="text-xl font-bold text-center text-red-600 mb-1">Premium Package</h3>
                <p className="text-sm text-center text-gray-600 mb-3">6 Bottles</p>
                <div className="relative w-full h-40 md:h-44 mx-auto">
                  <Image 
                    src="/images/price 02.png"
                    alt="Premium Package"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="p-4 h-full flex flex-col">
                <ul className="space-y-2 mb-4 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">6 Month Supply</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">FREE Shipping</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium">2 FREE Bonus eBooks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">90-Day Satisfaction Guarantee</span>
                  </li>
                </ul>
                <div className="text-center mt-auto">
                  <div className="text-2xl font-bold text-red-600 mb-2">$294 <span className="text-sm line-through text-gray-500">$354</span></div>
                  <span className="inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Most Popular Choice
                  </span>
                </div>
              </div>
              {selectedPackage === 'premium' && (
                <div className="absolute top-8 right-4">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Family Package */}
            <div 
              className={`rounded-xl border-2 transition-all duration-200 ${
                selectedPackage === 'family' 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-200 hover:border-red-300'
              } cursor-pointer overflow-hidden shadow-md h-full`}
              onClick={() => handlePackageSelect('family')}
            >
              <div className="p-4 bg-gradient-to-b from-red-100 to-white">
                <h3 className="text-xl font-bold text-center text-red-600 mb-1">Family Package</h3>
                <p className="text-sm text-center text-gray-600 mb-3">3 Bottles</p>
                <div className="relative w-full h-40 md:h-44 mx-auto">
                  <Image 
                    src="/images/price 3.png"
                    alt="Family Package"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="p-4 h-full flex flex-col">
                <ul className="space-y-2 mb-4 flex-grow">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">3 Month Supply</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium">2 FREE Bonus eBooks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">60-Day Satisfaction Guarantee</span>
                  </li>
                </ul>
                <div className="text-center mt-auto">
                  <div className="text-2xl font-bold text-red-600 mb-2">$177 <span className="text-sm line-through text-gray-500">$197</span></div>
                  <span className="inline-block bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Popular Choice
                  </span>
                </div>
              </div>
              {selectedPackage === 'family' && (
                <div className="absolute top-4 right-4">
                  <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Money-back guarantee note */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg flex items-center">
            <div className="flex-shrink-0 mr-4">
              <div className="relative w-14 h-14">
                <Image 
                  src="/images/sub monogram.png" 
                  alt="Money-back guarantee" 
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-medium">100% Satisfaction Guaranteed:</span> Try Mitolyn risk-free with our 90-day money-back guarantee. If you're not completely satisfied, we'll refund your purchase - no questions asked.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleClose}
              className="py-3 px-6 border border-gray-300 rounded-full text-gray-700 font-medium transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleProceed}
              disabled={!selectedPackage}
              className={`py-3 px-8 rounded-full font-bold text-white transition-all ${
                selectedPackage 
                  ? 'bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 transform hover:scale-105' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {selectedPackage ? 'Continue to Checkout' : 'Select a Package'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 