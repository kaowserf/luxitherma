import React from 'react';
import LeadMagnetCover from '../../components/LeadMagnetCover';

export default function LeadMagnetPreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md">
        <LeadMagnetCover />
        <div className="mt-4 text-center text-gray-500 text-sm">
          <p>Screenshot this image and save it as "lead-magnet-preview.png" in the public/images directory</p>
        </div>
      </div>
    </div>
  );
} 