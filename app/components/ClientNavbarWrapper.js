'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Use dynamic import for the navbar to avoid hydration issues
const NavbarContainer = dynamic(() => import('./NavbarContainer'), {
  ssr: false,
});

export default function ClientNavbarWrapper() {
  // Add a mounting state to ensure smooth client-side hydration
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Don't render anything until client-side hydration is complete
  if (!isMounted) {
    return null;
  }
  
  return <NavbarContainer />;
} 