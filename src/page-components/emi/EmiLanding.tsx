'use client'
import React, { useState } from "react";
import '../about/AboutMain.css'
import AppointmentForm from '../about/AppointmentForm';  // import form component

const EmiLanding = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <section id="landing" className="relative w-full h-[60%]">
      {/* Background images: mobile and desktop */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/emiBgM.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: "url('/images/emiBgD.png')" }}
        aria-hidden
      />
      

      <div className='relative grid grid-cols-12 gap-4 min-h-[400px] md:min-h-[420px] lg:min-h-[500px]'>
        {/* Left: Content block */}
        <div className='col-span-12 csLg:col-span-8 section-spacing'>
          <div className='flex flex-col'>
            {/* Breadcrumb-like line */}
            <div className="md:pb-11">
              <h2 className='font-manrope csLg:text-[18px] font-semibold text-[12px] leading-[26px] tracking-[-0.02em]'>
                <button onClick={() => window.location.href = '/'} className='hover:cursor-pointer'> Home </button> <span className="px-[12px]">›</span> <span className="text-[#1656A5]"> EMI Options </span>
              </h2>
            </div>

            {/* Title */}
            <div>
              <h1 className='font-manrope font-semibold csLg:text-[80px] text-[32px] csLg:leading-[88px] leading-[40px] tracking-[-0.02em]'>
                EMI Options
              </h1>
            </div>

            {/* CTA */}
            <div className='pt-11'>
                        <button 
                            onClick={() => setIsOpen(true)} 
                            className='bg-[#252525] csLg:text-[24px] text-[12px] md:px-6 px-3 py-3 md:py-4 text-[#F9F9F9] rounded-[8px] md:rounded-[16px] hover:bg-[#333] transition'
                        >
                            Book Your Appointment
                        </button>
                    </div>
          </div>
        </div>

        {/* Right column removed; background image now covers entire section */}
      </div>
      {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default EmiLanding;
