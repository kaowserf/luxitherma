'use client';

import React from 'react';

const StepTwo = ({ formData, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-1">
          Perfect! We've got the right solution for you.
        </h3>
        <p className="text-gray-600 mb-4">
          Complete your information below to receive your free energy guide.
        </p>
      </div>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900 bg-white"
          placeholder="Enter your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-gray-900 bg-white"
          placeholder="your@email.com"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          We'll send your free guide to this email address
        </p>
      </div>
      
      <p className="text-xs text-center text-gray-500 mt-6">
        By submitting, you agree to receive emails from us. You can unsubscribe anytime.
      </p>
    </div>
  );
};

export default StepTwo; 