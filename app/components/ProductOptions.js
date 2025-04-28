'use client';

import React from 'react';
import Image from 'next/image';

export default function ProductOptions({ openModal }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
        Product Options
      </h2>
      
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* First image - smaller */}
        <div style={{ 
          width: '25%', 
          minWidth: '200px',
          maxWidth: '300px',
          textAlign: 'center',
          position: 'relative',
          cursor: 'pointer'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#ef4444' }}>
            Basic Package
          </h3>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1', border: '4px solid #ef4444', borderRadius: '8px' }}>
              <Image 
                src="/images/price 01.png"
                alt="Basic Package"
                fill
                style={{ objectFit: 'contain' }}
                className="hover-image transition-all"
              />
            </div>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.0)',
              transition: 'background 0.3s ease',
              opacity: 0,
              borderRadius: '8px'
            }} 
            className="hover-overlay"
            >
              <button 
                onClick={openModal}
                style={{ 
                  padding: '10px 20px', 
                  background: '#dc2626', 
                  color: 'white', 
                  borderRadius: '30px', 
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  transform: 'translateY(20px)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  opacity: 0
                }}
                className="order-button"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Middle image - larger */}
        <div style={{ 
          width: '28%',
          minWidth: '220px',
          maxWidth: '340px',
          textAlign: 'center',
          position: 'relative',
          cursor: 'pointer'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#dc2626' }}>
            Premium Package (BEST VALUE)
          </h3>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1', border: '4px solid #dc2626', borderRadius: '8px' }}>
              <Image 
                src="/images/price 02.png"
                alt="Premium Package"
                fill
                style={{ objectFit: 'contain' }}
                className="hover-image transition-all"
              />
            </div>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.0)',
              transition: 'background 0.3s ease',
              opacity: 0,
              borderRadius: '8px'
            }} 
            className="hover-overlay"
            >
              <button 
                onClick={openModal}
                style={{ 
                  padding: '12px 24px', 
                  background: '#dc2626', 
                  color: 'white', 
                  borderRadius: '30px', 
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  transform: 'translateY(20px)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  opacity: 0
                }}
                className="order-button"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Third image - smaller */}
        <div style={{ 
          width: '25%', 
          minWidth: '200px',
          maxWidth: '300px',
          textAlign: 'center',
          position: 'relative',
          cursor: 'pointer'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#b91c1c' }}>
            Family Package
          </h3>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1', border: '4px solid #b91c1c', borderRadius: '8px' }}>
              <Image 
                src="/images/price 3.png"
                alt="Family Package"
                fill
                style={{ objectFit: 'contain' }}
                className="hover-image transition-all"
              />
            </div>
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.0)',
              transition: 'background 0.3s ease',
              opacity: 0,
              borderRadius: '8px'
            }} 
            className="hover-overlay"
            >
              <button 
                onClick={openModal}
                style={{ 
                  padding: '10px 20px', 
                  background: '#dc2626', 
                  color: 'white', 
                  borderRadius: '30px', 
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  transform: 'translateY(20px)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  opacity: 0
                }}
                className="order-button"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add a main CTA button below the packages */}
      <div className="text-center mt-12">
        <button
          onClick={openModal}
          className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Choose Your Package
        </button>
      </div>
      
      {/* CSS for the hover effects */}
      <style jsx>{`
        .hover-image:hover {
          transform: scale(1.03);
          filter: brightness(0.9);
        }
        
        .hover-overlay:hover {
          background: rgba(0, 0, 0, 0.2) !important;
          opacity: 1 !important;
        }
        
        .hover-overlay:hover .order-button {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
} 