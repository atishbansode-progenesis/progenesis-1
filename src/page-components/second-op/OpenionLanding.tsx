'use client'
import React, { useState } from "react";
import '../about/AboutMain.css'
import AppointmentForm from "../about/AppointmentForm";

const OpenionLanding = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative w-full h-[60vh] py-4 csLg:px-[120px] px-6  flex flex-col csLg:justify-center">
      {/* Background images: mobile and desktop */}
      <div
        className="absolute inset-0 csLg:hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/mob-bg.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden csLg:block bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        aria-hidden
      />
      
      <img className=" csLg:block hidden absolute csLg:right-0 bottom-0 h-[80%] w-[50%]" src="/images/hero-1.png" alt="" />

      <div className='relative w-full'>
        {/* Left: Content block */}
        <div className=''>
          <div className='flex flex-col csLg:gap-[44px] gap-6 mt-10 csLg:mt-0'>
            {/* Breadcrumb-like line */}
            <div >
              <h2 className='font-manrope csLg:text-[18px] font-medium text-[12px] leading-[20px] csLg:leading-[26px] tracking-[-0.02em]'>
                <button onClick={() => window.location.href = '/'} className='hover:cursor-pointer'> Home </button> <span className="px-[12px]">›</span> <span className="text-[#1656A5]"> Second Opinion </span>
              </h2>
            </div>

            {/* Title */}
            <div>
              <h1 className='font-manrope font-semibold csLg:text-[80px] text-[32px] csLg:leading-[88px] leading-[40px] tracking-[-0.02em] csLg:max-w-[60%]'>
                IVF & Fertility Second Opinion
              </h1>
            </div>

            {/* CTA */}
            <div className=''>
                        <button 
                            onClick={() => setIsOpen(true)} 
                            className='bg-[#252525] text-[12px] tracking-tight csLg:text-[14px] h-10 csLg:h-[56px] px-3 py-[10px]  text-[#F9F9F9] rounded-[8px] csLg:rounded-[16px] hover:bg-[#333] transition'
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

export default OpenionLanding;
