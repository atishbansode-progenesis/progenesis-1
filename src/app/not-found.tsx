'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const [showCallDialog, setShowCallDialog] = useState(false);
  const phoneNumber = '+917039217340';

  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleCallClick = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setShowCallDialog(true);
      setTimeout(() => setShowCallDialog(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Desktop */}
      <div 
        className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/notFound/404_web.png)' }}
      />
      
      {/* Background Image - Mobile */}
      <div 
        className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/notFound/404_mob.png)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-2xl">
        {/* Badge */}
        <div className="mb-6 md:mb-8">
          <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-medium text-[#1656A5] bg-blue-50 rounded-full border border-blue-200">
            404 Page Not Found
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[32px] lg:text-[40px] font-bold text-[#000000] mb-4 md:mb-6 leading-tight">
          This page couldn't be found,
          <br />
          but hope always can.
        </h1>

        {/* Description */}
        <p className="text-[18px] text-[#2C2C2C] mb-8 md:mb-10 max-w-md">
          Let's help you get back to where you were meant to be.
          You are not alone in this journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <button
            onClick={handleGoHome}
            className="px-6 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-[#1656A5] cursor-pointer hover:bg-blue-700 text-white font-medium rounded-[16px] transition-colors duration-200 shadow-sm"
          >
            Go back Home
          </button>
          <button
            onClick={handleCallClick}
            className="px-6  md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-white cursor-pointer hover:bg-gray-50 text-[#1656A5] font-medium rounded-[16px] border-2 border-[#1656A5] transition-colors duration-200 shadow-sm"
          >
            Call Us {phoneNumber}
          </button>
        </div>
      </div>

      {/* Copy Confirmation Toast */}
      {showCallDialog && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Phone number copied!</span>
          </div>
        </div>
      )}
    </div>
  );
}