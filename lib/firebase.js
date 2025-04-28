import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQIuRTt1qVo5eFzalCRennpFoCL8CTEkQ",
  authDomain: "luxitherma.firebaseapp.com",
  projectId: "luxitherma",
  storageBucket: "luxitherma.firebasestorage.app",
  messagingSenderId: "985710341605",
  appId: "1:985710341605:web:635364d809a24b5b12930c",
  measurementId: "G-10BJCE61K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);

// Initialize Analytics only on client side (browser) due to Next.js SSR limitations
let analytics = null;
if (typeof window !== 'undefined') {
  // We're on the client side, safe to use analytics
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.error('Analytics initialization error:', error);
  }
}

export { db, analytics }; 