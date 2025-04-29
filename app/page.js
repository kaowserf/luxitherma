'use client';

import Image from "next/image";
import ProductOptions from "./components/ProductOptions";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ProductSlider from "./components/ProductSlider";
import MoneyBackGuarantee from "./components/MoneyBackGuarantee";
import BonusesSection from "./components/BonusesSection";
import Link from "next/link";
import { useState } from "react";
import OrderFormPopup from "./components/OrderFormPopup";

export default function Home() {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleOrderNowClick = (e) => {
    e.preventDefault();
    setShowOrderForm(true);
  };

  return (
    <div className="font-[family-name:var(--font-inter)]">
      {/* Order Form Popup */}
      <OrderFormPopup isOpen={showOrderForm} onClose={() => setShowOrderForm(false)} />

      {/* Hero Section with Background Image */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/background.jpg"
              alt="Energy background"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-transparent to-black/40"></div>
            
            {/* Animated Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Tired of Feeling Drained? <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-rose-300">This Cell-Level Energy Boost</span> Could Change Your Life in 7 Days.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 font-light max-w-4xl mx-auto animate-fade-in animation-delay-200">
            Clinically researched supplement targeting cell performance, metabolism, and long-term health.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-400">
            <Link href="/pre-landing" className="w-full sm:w-auto">
              <button className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-bold py-4 px-8 sm:px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full">
                Get Your FREE Energy Guide
              </button>
            </Link>
            <a href="#" onClick={handleOrderNowClick} className="w-full sm:w-auto">
              <button 
                className="bg-white text-red-600 font-bold py-4 px-8 sm:px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-gray-100 w-full"
              >
                Order Now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            What Makes Mitolyn a Game-Changer?
          </h2>
          
          <p className="text-xl text-center mb-16 text-gray-700 max-w-4xl mx-auto">
            Imagine waking up refreshed, thinking clearer, and moving like you&apos;re 10 years younger. That&apos;s the Mitolyn difference.
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Product Image Slider - Replacing static image with dynamic slider */}
            <div className="flex justify-center">
              <ProductSlider />
            </div>

            {/* Benefits List */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-emerald-100 rounded-full p-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Boost Natural Energy</h3>
                  <p className="mt-2 text-gray-600">No more afternoon crashes. Fuel your cells and feel recharged all day, naturally.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Sharpen Mental Focus</h3>
                  <p className="mt-2 text-gray-600">Stay sharp, clear, and focused — whether you&apos;re working, studying, or parenting.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-purple-100 rounded-full p-3">
                  <span className="text-2xl">💪</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Support Cell Repair</h3>
                  <p className="mt-2 text-gray-600">Backed by science — Mitolyn helps restore your cells from the inside out.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Boost Metabolism</h3>
                  <p className="mt-2 text-gray-600">Feel lighter, burn fat efficiently, and kickstart your metabolism the right way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-50 to-red-50 py-16 relative overflow-hidden">
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-100 rounded-full opacity-50 blur-2xl animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-rose-100 rounded-full opacity-50 blur-2xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/pre-landing" className="w-full md:w-auto">
              <button className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-bold py-5 px-8 md:px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full">
                Get Your FREE Energy Guide
              </button>
            </Link>
            <a href="#" onClick={handleOrderNowClick} className="w-full md:w-auto">
              <button 
                className="bg-white text-red-600 border-2 border-red-500 font-bold py-5 px-8 md:px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full"
              >
                Order Now
              </button>
            </a>
          </div>
          <p className="mt-4 text-gray-600 animate-fade-in animation-delay-200">Limited stock available — ships within 24 hrs.</p>
        </div>
      </div>

      {/* Gradient Wave Divider */}
      <div className="relative">
        <div className="bg-gradient-to-r from-red-500 via-rose-500 to-red-600 py-8 px-4 text-center text-white relative overflow-hidden">
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-white opacity-10 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-16 h-16 rounded-full bg-white opacity-10 animate-blob animation-delay-4000"></div>
            <div className="absolute bottom-1/3 right-1/3 w-10 h-10 rounded-full bg-white opacity-10 animate-blob"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold drop-shadow-md animate-slide-up" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Claim Your Discounted Mitolyn
          </h2>
          <p className="text-2xl sm:text-3xl mt-2 font-semibold drop-shadow-md animate-slide-up animation-delay-200" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            Below For Huge Savings
          </p>
        </div>
        {/* Enhanced Wave SVG with animation */}
        <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <clipPath id="waveClip">
                <path d="M0,64L40,69.3C80,75,160,85,240,90.7C320,96,400,96,480,85.3C560,75,640,53,720,53.3C800,53,880,75,960,85.3C1040,96,1120,96,1200,80C1280,64,1360,32,1400,16L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
              </clipPath>
            </defs>
            <g clipPath="url(#waveClip)">
              <path d="M0,64L40,69.3C80,75,160,85,240,90.7C320,96,400,96,480,85.3C560,75,640,53,720,53.3C800,53,880,75,960,85.3C1040,96,1120,96,1200,80C1280,64,1360,32,1400,16L1440,0L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z" fill="url(#waveGradient)" className="animate-wave" />
              <path d="M0,64L40,69.3C80,75,160,85,240,90.7C320,96,400,96,480,85.3C560,75,640,53,720,53.3C800,53,880,75,960,85.3C1040,96,1120,96,1200,80C1280,64,1360,32,1400,16L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" fill="url(#waveGradient)" fillOpacity="0.5" className="animate-wave animation-delay-2000" />
            </g>
          </svg>
        </div>
      </div>

      {/* Testimonial Carousel Section */}
      <div id="testimonials">
        <TestimonialCarousel />
      </div>
      
      {/* Product Pricing Section */}
      <div id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductOptions openModal={() => setShowOrderForm(true)} />
        </div>
      </div>
      
      {/* Money Back Guarantee Section */}
      <MoneyBackGuarantee />
      
      {/* Bonuses Section */}
      <BonusesSection />
    </div>
  );
}
