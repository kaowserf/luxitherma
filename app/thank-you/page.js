'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Create a separate client component to use the useSearchParams hook
function ThankYouContent() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState({
    orderId: '',
    customerName: '',
    product: 'Mitolyn',
    quantity: 0
  });
  
  useEffect(() => {
    // In a real implementation, you would validate the order ID
    // and fetch real order details from your backend
    const orderId = searchParams.get('order_id') || 'MTO-' + Math.floor(Math.random() * 10000);
    const name = searchParams.get('name') || 'Valued Customer';
    const qty = searchParams.get('qty') || Math.floor(Math.random() * 5) + 1;
    
    setOrderDetails({
      orderId,
      customerName: name,
      product: 'Mitolyn',
      quantity: parseInt(qty)
    });
    
    // In a real implementation, this is where you would trigger
    // conversion tracking for analytics platforms
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex flex-col">
      {/* Simple header with logo */}
      <header className="w-full py-4 px-6 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <h1 className="font-bold text-2xl tracking-tight">
              <span className="relative inline-block">
                luxi
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-rose-400"></span>
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                therma
              </span>
            </h1>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center py-10 px-4">
        <div className="max-w-3xl w-full mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            {/* Success icon */}
            <div className="text-center mb-8">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Thank You for Your Order!
              </h1>
              
              <p className="text-gray-600 text-lg mb-6">
                We're thrilled to have you as a customer.
              </p>
            </div>
            
            {/* Order details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-medium">{orderDetails.orderId}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer:</span>
                  <span className="font-medium">{orderDetails.customerName}</span>
                </div>
                
                <div className="border-t border-gray-200 my-3"></div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-md flex items-center justify-center mr-3">
                      <span className="text-red-600 font-bold">M</span>
                    </div>
                    <div>
                      <div className="font-medium">{orderDetails.product}</div>
                      <div className="text-sm text-gray-500">
                        {orderDetails.quantity} {orderDetails.quantity === 1 ? 'bottle' : 'bottles'}
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-green-600">Order Confirmed</div>
                </div>
              </div>
            </div>
            
            {/* What's next section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">What's Next?</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="font-bold text-red-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Confirmation Email</h3>
                    <p className="text-gray-600">
                      We've sent a receipt and order details to your email. Please check your inbox.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="font-bold text-red-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Order Processing</h3>
                    <p className="text-gray-600">
                      Your order is now being processed. We'll prepare your package within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="font-bold text-red-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Shipping</h3>
                    <p className="text-gray-600">
                      Your package will be shipped within 1-2 business days. You'll receive tracking information by email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bonus details (if applicable) */}
            {orderDetails.quantity >= 3 && (
              <div className="mb-8 p-6 border border-yellow-200 bg-yellow-50 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-800">Your Free Bonuses</h3>
                    <p className="text-gray-600 mb-2">
                      As a special thank you, we've included your free bonuses with your order:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      <li className="mb-1">1-Day Kickstart Detox</li>
                      <li>Renew You Guide</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Link href="/" className="flex-1">
                <button className="w-full py-3 px-6 rounded-lg font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors">
                  Return to Home
                </button>
              </Link>
              
              <a href="#" className="flex-1">
                <button className="w-full py-3 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 transition-colors">
                  View Order Status
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-gray-700 font-medium mb-2">Have Questions About Your Order?</p>
            <p className="text-gray-600">Our customer support team is here to help</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 mb-8">
            <a href="mailto:support@luxitherma.com" className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@luxitherma.com
            </a>
            
            <a href="tel:+18005551234" className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              1-800-555-1234
            </a>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} LuxiTherma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Main component that wraps the content in a Suspense boundary
export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
} 