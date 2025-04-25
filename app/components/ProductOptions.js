'use client';

import React from 'react';
import Image from 'next/image';

export default function ProductOptions() {
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
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Basic Package</h3>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1', border: '4px solid #3b82f6', borderRadius: '8px' }}>
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
              <a 
                href="#order-basic" 
                style={{ 
                  padding: '10px 20px', 
                  background: '#059669', 
                  color: 'white', 
                  borderRadius: '30px', 
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transform: 'translateY(20px)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  opacity: 0
                }}
                className="order-button"
              >
                Order Now
              </a>
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
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#059669' }}>
            Premium Package (BEST VALUE)
          </h3>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1', border: '4px solid #059669', borderRadius: '8px' }}>
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
              <a 
                href="#order-premium" 
                style={{ 
                  padding: '12px 24px', 
                  background: '#059669', 
                  color: 'white', 
                  borderRadius: '30px', 
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transform: 'translateY(20px)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  opacity: 0
                }}
                className="order-button"
              >
                Order Now
              </a>
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
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Family Package</h3>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1', border: '4px solid #8b5cf6', borderRadius: '8px' }}>
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
              <a 
                href="#order-family" 
                style={{ 
                  padding: '10px 20px', 
                  background: '#059669', 
                  color: 'white', 
                  borderRadius: '30px', 
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transform: 'translateY(20px)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  opacity: 0
                }}
                className="order-button"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
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