import { db } from '../../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const data = await request.json();
    
    // Add timestamp and source info
    const leadData = {
      ...data,
      submittedAt: serverTimestamp(),
      source: data.source || 'pre-landing',
      capturedAt: new Date().toISOString() // Backup timestamp in ISO format
    };
    
    // Log the captured lead
    console.log('Lead captured:', leadData);
    
    // Store the lead in Firebase Firestore
    try {
      const docRef = await addDoc(collection(db, 'leads'), leadData);
      console.log('Document written with ID: ', docRef.id);
      
      // Add the document ID to the success response
      return Response.json({ 
        success: true, 
        message: 'Lead captured successfully',
        leadId: docRef.id
      });
    } catch (firestoreError) {
      console.error('Error adding document to Firestore: ', firestoreError);
      // Continue execution even if Firestore write fails
      // This ensures the user experience isn't affected by backend issues
      
      return Response.json({ 
        success: true, 
        message: 'Lead captured but storage failed',
        error: firestoreError.message
      });
    }
  } catch (error) {
    console.error('Error capturing lead:', error);
    
    // Return error response
    return Response.json({ 
      success: false, 
      message: 'Failed to process submission',
      error: error.message
    }, { status: 500 });
  }
} 