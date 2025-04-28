'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BonusesSection() {
  // Add state for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  // Toggle FAQ item
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  // FAQ data
  const faqItems = [
    {
      question: "Is Mitolyn right for me?",
      answer: "Do you have deep stubborn fat stores that no diet or exercise seems to remove? Then the answer is yes Mitolyn is right for you. Mitolyn has changed the lives of thousands of women and men from 18 to 80 and is designed to rapidly liquify fat in even the worst cases."
    },
    {
      question: "Is Mitolyn safe?",
      answer: "Mitolyn is a natural proprietary formula manufactured in the USA at our FDA registered and GMP certified facility using state of the art, precision engineered machinery and under the strictest and most sterile standards. Each ingredient is 100% plant-based, soy-free, dairy-free, non-GMO, and put through additional third-party inspections and quality control to ensure high purity and potency. As always we advise you to show a bottle of this to your doctor before you take it, just to be safe."
    },
    {
      question: "How many bottles should I order?",
      answer: "If you're over 35 years old or carry excess weight, we recommend you take Mitolyn for at least 3 to 6 months so it has enough time to work throughout your entire body to support healthy mitochondria levels, reach your desired weight, and lock it in for years into the future. Every 3 bottle package of Mitolyn comes with the 2 bonus books absolutely free. Or make the smart decision and get the heavily discounted 6 bottle package, which comes with the 2 bonus books absolutely free along with free shipping as well."
    },
    {
      question: "What's the best way to take Mitolyn?",
      answer: "Take one capsule of Mitolyn with a big glass of cold water every day. It's bespoke proprietary blend of natural ingredients will get to work dissolving fat for you even when sleeping."
    },
    {
      question: "Is this a one time payment?",
      answer: "Yes, your order today is a one-time payment with no auto-ship, subscriptions or hidden charges."
    },
    {
      question: "What if Mitolyn doesn't work for me?",
      answer: "Every single bottle of Mitolyn comes with our personal 90-day 100% money back guarantee. If for any reason you're unsatisfied with your results, just return all bottles (even if empty) for a full, no questions asked refund."
    },
    {
      question: "What do I do now?",
      answer: "This is the fun part. Click on one of the packages below. Enter your order details on our secure checkout page. After you've finished we'll get your Mitolyn shipped out to you straight away. Order 3 bottles and get the 2 free bonus books, or order 6 bottles and get the 2 free bonus books plus free shipping as well."
    }
  ];

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
      
      {/* FAQ Section - Enhanced */}
      <div className="py-20 bg-white relative overflow-hidden" id="faq">
        {/* Background decorative elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-50 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-50 rounded-full opacity-60 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced heading section with more visual prominence */}
          <div className="text-center mb-16 animate-fade-in-up">
            {/* Decorative icon */}
            <div className="flex justify-center mb-5">
              <div className="bg-gradient-to-r from-red-100 to-rose-100 w-16 h-16 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-bold relative z-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">Frequently Asked Questions</span>
                <div className="w-full h-3 bg-gradient-to-r from-red-100 to-rose-100 absolute bottom-0 left-0 -z-10 transform translate-y-2"></div>
              </h2>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-red-300 to-rose-300 mx-auto mb-6"></div>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions about Mitolyn? We've got answers. If you don't see your question here, feel free to contact our support team.
            </p>
          </div>
          
          <div className="space-y-4 animate-fade-in-stagger-1">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 animate-fade-in-stagger-${Math.min(index + 1, 3)}`}
                style={{ animationDelay: `${(index * 0.1) + 0.1}s` }}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className={`font-bold text-lg md:text-xl transition-colors duration-300 ${openFaqIndex === index ? "text-red-600" : "text-gray-900"}`}>
                    {item.question}
                  </h3>
                  <span className={`transform transition-transform duration-300 ${openFaqIndex === index ? "rotate-180" : "rotate-0"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${openFaqIndex === index ? "text-red-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"}`}>
                  <p className="text-gray-700 bg-gradient-to-r from-white to-red-50 p-4 rounded-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 