'use client';

import React from 'react';
import Image from 'next/image';

export default function BonusesSection() {
  return (
    <div className="py-12 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-gray-900 inline-block mb-2">ORDER</span>
          <span className="relative mx-2 text-red-600">
            6 Bottles
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></span>
          </span> 
          <span className="text-gray-900 mx-1">OR</span>
          <span className="relative mx-2 text-red-600">
            3 Bottles
            <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></span>
          </span>
          <br />
          <span className="text-gray-900 inline-block mt-2 mb-1">AND GET</span>
          <span className="relative mx-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 font-extrabold animate-pulse">
            2 FREE Bonuses!
            <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-rose-500"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Bonus 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-rose-50 to-red-100">
              <Image
                src="/Bonus1.jpg"
                alt="1-Day Kickstart Detox"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                BONUS #1
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1-Day Kickstart Detox</h3>
              <div className="mb-4 inline-block bg-gradient-to-r from-red-500 to-rose-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                100% FREE
              </div>
              <p className="text-gray-700">
                Detox, cleanse and flush your organs to aid absorption and kickstart your Mitolyn journey with 20 bizarre 15 second detox tea recipes, using everyday ingredients from your kitchen.
              </p>
            </div>
          </div>
          
          {/* Bonus 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-rose-50 to-red-100">
              <Image
                src="/Bonus2.png"
                alt="Renew You"
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                BONUS #2
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Renew You</h3>
              <div className="mb-4 inline-block bg-gradient-to-r from-red-500 to-rose-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                100% FREE
              </div>
              <p className="text-gray-700">
                With your brand-new fast-tracked body comes a new mindset. Discover simple methods you can do right now to instantly relieve stress and calm your mind, boost confidence and reduce anxiety.
              </p>
            </div>
          </div>
        </div>
        
        {/* Divider with Free Shipping Info */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-red-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-red-50 px-6 py-3 rounded-full flex items-center justify-center shadow-sm">
              <div className="relative w-12 h-12">
                <Image 
                  src="/delivery.png" 
                  alt="Free Delivery" 
                  width={48} 
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Free Shipping Text */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600 mb-3">
            Every 6 Bottle Order Gets FREE Shipping Too!
          </h3>
          
          <div className="flex items-center justify-center mt-6 bg-white py-4 px-6 rounded-lg shadow-md max-w-md mx-auto border border-red-100">
            <div className="flex items-center justify-center mr-4 flex-shrink-0 relative w-14 h-14">
              <Image
                src="/delivery.png"
                alt="Delivery"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <p className="text-gray-800 font-medium">
              <span className="font-bold">96% Of Customers</span> Order 6 Bottles (Our Recommended Option)
            </p>
          </div>
        </div>
      </div>
      
      {/* Mitolyn Product Highlight Section */}
      <div className="mt-24 py-16 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full transform translate-y-1/3 -translate-x-1/3"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Image */}
            <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/full-product.png"
                  alt="Mitolyn Product"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-2xl"
                />
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
            
            {/* Right side - Text content */}
            <div className="md:w-1/2 text-white">
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-light mb-3 text-rose-100">
                  That's Why We Created...
                </h3>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  MITOLYN
                </h2>
                
                <div className="w-20 h-1 bg-rose-300 mb-6"></div>
                
                <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed text-rose-50">
                  Mitolyn is unlike anything you've ever tried or experienced in your life before.
                </p>
                
                <p className="text-base md:text-lg mb-8 text-rose-100 leading-relaxed max-w-lg">
                  It is one of the only products in the world with a proprietary blend of 6 exotic nutrients and plants designed to support healthy mitochondria levels!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 