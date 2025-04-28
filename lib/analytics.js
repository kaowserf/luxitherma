import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

/**
 * Tracks a lead capture event in Firebase Analytics
 * 
 * @param {Object} leadData - The lead data 
 * @param {string} leadData.source - The source of the lead (popup, pre-landing, etc)
 * @param {string} leadData.email - The email address of the lead
 * @param {string} leadData.name - The name of the lead
 * @param {string} leadId - The Firestore document ID of the lead
 */
export const trackLeadCapture = (leadData, leadId) => {
  if (!analytics || typeof window === 'undefined') {
    // Skip if analytics isn't initialized or we're on the server
    return;
  }
  
  try {
    logEvent(analytics, 'lead_capture', {
      lead_id: leadId,
      lead_source: leadData.source,
      has_email: !!leadData.email,
      has_name: !!leadData.name,
      timestamp: new Date().toISOString()
    });
    
    console.log('Lead capture event tracked successfully');
  } catch (error) {
    console.error('Failed to track lead capture event:', error);
  }
};

/**
 * Tracks a form view event in Firebase Analytics
 * 
 * @param {string} formName - The name/identifier of the form
 * @param {string} formStep - The step of the form (if multi-step)
 */
export const trackFormView = (formName, formStep = null) => {
  if (!analytics || typeof window === 'undefined') {
    // Skip if analytics isn't initialized or we're on the server
    return;
  }
  
  try {
    logEvent(analytics, 'form_view', {
      form_name: formName,
      form_step: formStep,
      timestamp: new Date().toISOString()
    });
    
    console.log(`Form view tracked: ${formName}${formStep ? ` (step ${formStep})` : ''}`);
  } catch (error) {
    console.error('Failed to track form view event:', error);
  }
};

/**
 * Tracks a form submission event in Firebase Analytics
 * 
 * @param {string} formName - The name/identifier of the form
 * @param {boolean} success - Whether the submission was successful
 * @param {string} errorMessage - Error message if submission failed
 */
export const trackFormSubmission = (formName, success, errorMessage = null) => {
  if (!analytics || typeof window === 'undefined') {
    // Skip if analytics isn't initialized or we're on the server
    return;
  }
  
  try {
    logEvent(analytics, 'form_submission', {
      form_name: formName,
      success: success,
      error_message: errorMessage || null,
      timestamp: new Date().toISOString()
    });
    
    console.log(`Form submission tracked: ${formName} (${success ? 'success' : 'failure'})`);
  } catch (error) {
    console.error('Failed to track form submission event:', error);
  }
}; 