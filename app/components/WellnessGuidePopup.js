'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { trackFormView, trackFormSubmission } from '../../lib/analytics';

export default function WellnessGuidePopup({ onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animate in the popup and track form view
  useEffect(() => {
    // Small delay for smooth animation
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Track form view in analytics
      trackFormView('wellness_guide_popup');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !name) {
      setError('Please fill in all fields');
      trackFormSubmission('wellness_guide_popup', false, 'Missing required fields');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // You can use the same lead-capture API endpoint
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          name,
          source: 'popup',
          guides: ['Renew You', '1-Day Kickstart Detox']
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
        trackFormSubmission('wellness_guide_popup', true);
        
        // Auto close after success
        setTimeout(() => {
          handleCloseAnimation();
        }, 3000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
        trackFormSubmission('wellness_guide_popup', false, data.error || data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An unexpected error occurred. Please try again.');
      trackFormSubmission('wellness_guide_popup', false, error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCloseAnimation = () => {
    // Animate out before fully closing
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };
  
  const handleClose = () => {
    handleCloseAnimation();
  };
  
  return (
    <div className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 flex items-center justify-center p-4 ${
      isVisible ? 'bg-opacity-50' : 'bg-opacity-0'
    }`} onClick={handleClose}>
      <div 
        className={`relative bg-white rounded-xl shadow-2xl max-w-sm w-full transition-all duration-300 ${
          isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
        }`}
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside popup
      >
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Header with gift icon */}
        <div className="bg-gradient-to-r from-red-500 to-rose-500 rounded-t-xl p-3 text-center">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1 shadow-md">
            <span className="text-2xl" role="img" aria-label="Gift">🎁</span>
          </div>
          <h2 className="text-white text-lg font-bold">Claim Your 2 Free Wellness Guides!</h2>
        </div>
        
        <div className="p-4">
          {success ? (
            <div className="text-center py-4">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Thank You, {name}!</h3>
              <p className="text-gray-600 text-sm mb-1">Your information has been saved.</p>
              <p className="text-gray-600 text-sm">Your guides will be sent after your purchase.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-700 mb-3 text-center text-sm">
                Enter your info below to get "Renew You" and "1-Day Kickstart Detox" eBooks — FREE After Purchase!
              </p>
              
              {/* Mini previews of the guides - more compact */}
              <div className="flex justify-center space-x-3 mb-3">
                <div className="w-20 h-28 relative rounded-md overflow-hidden border border-gray-200">
                  <Image 
                    src="/Bonus2.png" 
                    alt="Renew You Guide" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div className="w-20 h-28 relative rounded-md overflow-hidden border border-gray-200">
                  <Image 
                    src="/Bonus1.jpg" 
                    alt="1-Day Kickstart Detox" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
              </div>
              
              {error && (
                <div className="mb-3 p-2 bg-red-50 text-red-700 rounded-lg text-xs">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold py-2 px-4 text-sm rounded-lg flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-red-600 hover:to-rose-600'
                  }`}
                >
                  <span className="mr-1 text-lg" role="img" aria-label="Inbox">📥</span>
                  {isSubmitting ? 'Submitting...' : 'Send My Free Guides'}
                </button>
              </form>
              
              <p className="text-xs text-center text-gray-500 mt-2">
                We HATE spam. Your email address is 100% secure
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 