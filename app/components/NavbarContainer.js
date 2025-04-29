'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import OrderFormPopup from './OrderFormPopup';

export default function NavbarContainer() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  
  // Open the order form popup
  const openOrderForm = () => {
    setShowOrderForm(true);
  };

  // Close the order form popup
  const closeOrderForm = () => {
    setShowOrderForm(false);
  };
  
  return (
    <>
      <Navbar openModal={openOrderForm} />
      <OrderFormPopup isOpen={showOrderForm} onClose={closeOrderForm} />
    </>
  );
} 