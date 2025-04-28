'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { trackFormView, trackFormSubmission } from '../../lib/analytics';

export default function PreLandingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    energyLevel: '',
    mainGoal: '',
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  // Track form view on component mount
  useEffect(() => {
    trackFormView('pre_landing', `step_${step}`);
  }, [step]); // Track each step change
  
  const handleQuestionChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleNextStep = (e) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final step - redirect to the main landing page
      router.push('/?source=lead-capture');
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Submit the form data to the API endpoint
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Track successful form submission
        trackFormSubmission('pre_landing', true);
        
        // Proceed to the next step
        setStep(3);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
        trackFormSubmission('pre_landing', false, data.error || data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An unexpected error occurred. Please try again.');
      trackFormSubmission('pre_landing', false, error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col">
      {/* Simple header with logo */}
      <header className="w-full py-4 px-6 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <div className="font-bold text-2xl tracking-tight inline-flex items-center">
              <span className="text-gray-900">luxi</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">therma</span>
            </div>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center py-10 px-4">
        <div className="max-w-md w-full mx-auto">
          {/* Progress indicators */}
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                  step >= num 
                    ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white' 
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {num}
                </div>
                <div className="text-xs mt-1 text-gray-500">
                  {num === 1 ? 'Questions' : num === 2 ? 'Details' : 'Free Guide'}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            {/* Step 1: Qualifying Questions */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Personalize Your Energy Solution
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-700 mb-3 font-medium">Do you often feel low energy during the day?</p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Yes, frequently', 'Sometimes', 'Rarely', 'Never'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`p-3 rounded-lg border text-sm transition-all ${
                            formData.energyLevel === option
                              ? 'border-red-500 bg-red-50 text-red-600'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600'
                          }`}
                          onClick={() => handleQuestionChange('energyLevel', option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-3 font-medium">What's your main health goal right now?</p>
                    <div className="grid grid-cols-2 gap-3">
                      {['Boost energy', 'Improve focus', 'Burn fat', 'Overall health'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`p-3 rounded-lg border text-sm transition-all ${
                            formData.mainGoal === option
                              ? 'border-red-500 bg-red-50 text-red-600'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600'
                          }`}
                          onClick={() => handleQuestionChange('mainGoal', option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={handleNextStep}
                  disabled={!formData.energyLevel || !formData.mainGoal}
                  className={`w-full mt-8 py-3 px-6 rounded-full font-bold text-white transition-all ${
                    formData.energyLevel && formData.mainGoal
                      ? 'bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 shadow-md hover:shadow-lg transform hover:scale-105'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              </div>
            )}
            
            {/* Step 2: Name and Email Collection */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Perfect! We've got the right solution for you.
                </h2>
                <p className="text-gray-600 mb-6">
                  {formData.mainGoal === 'Boost energy' 
                    ? 'Our guide is perfect for people looking to boost their daily energy levels.'
                    : formData.mainGoal === 'Improve focus'
                    ? 'We have specialized techniques to help improve your mental focus and clarity.'
                    : formData.mainGoal === 'Burn fat'
                    ? 'Our approach helps activate your body\'s natural fat-burning mechanisms.'
                    : 'Our holistic approach addresses all aspects of health and wellness.'}
                </p>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your First Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Enter your email"
                    />
                    <p className="text-xs text-gray-500 mt-1">We'll send your free guide to this email</p>
                  </div>
                  
                  <div className="pt-3">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-full font-bold text-white transition-all bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 shadow-md hover:shadow-lg transform hover:scale-105 
                        ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Get My Free Guide'}
                    </button>
                  </div>
                  
                  <p className="text-xs text-center text-gray-500 mt-4">
                    By submitting, you agree to our privacy policy and to receive emails from us. You can unsubscribe anytime.
                  </p>
                </form>
              </div>
            )}
            
            {/* Step 3: Lead Magnet Confirmation */}
            {step === 3 && (
              <div className="animate-fade-in text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Your Free Guide Is On The Way!
                </h2>
                
                <p className="text-gray-600 mb-4">
                  Thank you, <span className="font-semibold">{formData.name}</span>! We've sent a copy of <span className="font-semibold">"10 Natural Energy Boosters"</span> to {formData.email}.
                </p>

                <p className="text-xs text-gray-500 mb-4">
                  Your information has been securely saved to our database.
                </p>
                
                <div className="relative w-full h-48 mb-6">
                  <Image
                    src="/images/lead-magnet-preview.png"
                    alt="10 Natural Energy Boosters Guide"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="drop-shadow-lg"
                  />
                </div>
                
                <p className="text-gray-600 mb-6">
                  While you check your email, let's discover how <span className="font-semibold text-red-600">Mitolyn</span> can dramatically boost your energy levels at the cellular level.
                </p>
                
                <button 
                  onClick={handleNextStep}
                  className="w-full py-3 px-6 rounded-full font-bold text-white transition-all bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Continue to Mitolyn →
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <footer className="py-4 px-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} LuxiTherma. All rights reserved.</p>
      </footer>
    </div>
  );
} 