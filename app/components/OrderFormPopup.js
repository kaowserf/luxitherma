'use client';

import React, { useState, useEffect } from 'react';
import { trackFormView, trackFormSubmission } from '../../lib/analytics';

export default function OrderFormPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Track form view when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
      trackFormView('order_form');
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when popup is closed
    }
    
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrolling is re-enabled on unmount
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!name.trim() || !email.trim()) {
      setError('Name and email are required fields');
      return;
    }
    
    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Track form submission 
      trackFormSubmission('order_form');
      
      // Send data to API endpoint
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          source: 'order_popup',
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      // Success message
      setSuccessMessage('Redirecting you to complete your order...');
      
      // Redirect to Mitolyn website after a brief delay
      setTimeout(() => {
        window.location.href = 'https://mitolyn.com/';
      }, 1500);
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Prevent clicks inside the popup from closing it
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 animate-fade-in px-4 sm:px-0"
      onClick={(e) => e.stopPropagation()} // Prevent clicks on backdrop from closing
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto animate-scale-in"
        onClick={handlePopupClick}
      >
        {/* Header - No close button */}
        <div className="bg-gradient-to-r from-red-500 to-rose-500 p-4 rounded-t-lg">
          <div className="flex justify-center items-center">
            <h2 className="text-xl font-bold text-white">Complete Your Order</h2>
          </div>
        </div>
        
        {/* Form Content */}
        <div className="p-4 sm:p-6">
          {successMessage ? (
            <div className="text-center py-4">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-800">{successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Please complete this form to proceed with your order. This information is required to complete your purchase.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Enter your details below to proceed to our secure checkout page.
              </p>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
                  {error}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold py-3 px-6 rounded-md hover:from-red-600 hover:to-rose-600 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="button-content">
                  {isSubmitting ? 'Processing...' : 'Continue to Checkout'}
                </span>
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By proceeding, you agree to our <a href="#" className="text-red-600 hover:underline">Terms of Service</a> and <a href="#" className="text-red-600 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 