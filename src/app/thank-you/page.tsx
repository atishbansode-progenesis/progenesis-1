'use client';

import { useState } from 'react';

export default function ThankYou() {
  const [showCopiedToast, setShowCopiedToast] = useState(false);
  const whatsappNumber = '+917039217340';

  const handleGoHome = () => {
    // Navigate to home - you can use your router here
    window.location.href = '/';
  };

  const handleWhatsAppClick = () => {
    // Open WhatsApp with the number
    window.open(`https://wa.me/${whatsappNumber.replace('+', '')}`, '_blank');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image - Desktop */}
      <div 
        className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/notFound/Thankuweb.png)' }}
      />
      
      {/* Background Image - Mobile */}
      <div 
        className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/notFound/Thankyou_Mobile.png)' }}
      />

      {/* Content - Left aligned, top positioned */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-16 md:pt-24 lg:pt-32 max-w-5xl">
        {/* Badge */}
        <div className="mb-4 md:mb-6">
          <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-medium text-[#1656A5] bg-blue-50 rounded-full border border-blue-200">
            Thank you for reaching out!
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[#000000] mb-4 md:mb-6 leading-tight">
          Your appointment request has been received.
        </h1>

        {/* Description */}
        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#2C2C2C] mb-8 md:mb-10 max-w-lg">
          Our care team will contact you within the next 24 hours to confirm the details.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-3 md:gap-4">
          <button
            onClick={handleGoHome}
            className="px-4 md:px-8 py-2 md:py-3 text-xs md:text-base bg-[#1656A5] cursor-pointer hover:bg-blue-700 text-white font-medium rounded-[16px] transition-colors duration-200 shadow-sm whitespace-nowrap"
          >
            Go back Home
          </button>
          {/* <button
            onClick={handleWhatsAppClick}
            className="px-4 md:px-8 py-2 md:py-3 text-xs md:text-base bg-white cursor-pointer hover:bg-gray-50 text-[#1656A5] font-medium rounded-[16px] border-2 border-[#1656A5] transition-colors duration-200 shadow-sm flex items-center justify-center gap-1.5 whitespace-nowrap"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </button> */}
        </div>
      </div>

      {/* Copy Confirmation Toast */}
      {showCopiedToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Redirecting to WhatsApp...</span>
          </div>
        </div>
      )}
    </div>
  );
}