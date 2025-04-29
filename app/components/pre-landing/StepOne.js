'use client';

import React from 'react';

const StepOne = ({ formData, onQuestionChange }) => {
  return (
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
              onClick={() => onQuestionChange('energyLevel', option)}
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
              onClick={() => onQuestionChange('mainGoal', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepOne; 