'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import PackageSelectionModal from './PackageSelectionModal';

export default function NavbarContainer() {
  const [showPackageModal, setShowPackageModal] = useState(false);
  
  // Open the package selection modal
  const openPackageModal = () => {
    setShowPackageModal(true);
  };

  // Close the package selection modal
  const closePackageModal = () => {
    setShowPackageModal(false);
  };
  
  return (
    <>
      <Navbar openModal={openPackageModal} />
      <PackageSelectionModal isOpen={showPackageModal} onClose={closePackageModal} />
    </>
  );
} 