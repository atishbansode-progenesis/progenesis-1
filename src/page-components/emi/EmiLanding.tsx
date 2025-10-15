"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppointmentForm from "../about/AppointmentForm";

export default function EmiLanding() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="landing"
      className="relative w-full min-h-[400px] md:min-h-[420px] lg:min-h-[500px] overflow-hidden"
    >
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

      {/* Optional blurred accent */}
      <div
        className="absolute left-[-150px] top-[80px] w-[445px] h-[441px] rounded-full opacity-60 z-0"
        style={{
          background: "#94BA3D",
          filter: "blur(250px)",
          transform: "rotate(-2deg)",
        }}
      ></div>

      {/* Main Content */}
      <div
        className="
          relative z-10 grid grid-cols-12 gap-4 section-spacing 
          min-h-[400px] md:min-h-[420px] lg:min-h-[500px]
        "
      >
        <div
          className="
            col-span-12 csLg:col-span-8 
            flex flex-col 
            justify-start md:justify-center 
            pt-4 md:pt-0
          "
        >
          {/* Breadcrumb */}
          <div className="mb-[4px] md:mb-[32px]">
            <h2 className="font-manrope csLg:text-[18px] font-semibold text-[12px] leading-[24px] lg:leading-[26px] tracking-[-0.02em]">
              <Link href="/" className="hover:cursor-pointer">
                Home
              </Link>{" "}
              <span className="px-[12px]">›</span>{" "}
              <span className="text-[#1656A5]">EMI Options</span>
            </h2>
          </div>

          {/* Title */}
          <h1 className="font-manrope font-semibold csLg:text-[80px] text-[32px] csLg:leading-[88px] leading-[40px] tracking-[-0.02em]">
            EMI Options
          </h1>

          {/* CTA Button */}
          <div className="mt-4 md:mt-6 lg:mt-[44px]">
            <button
              onClick={() => setIsOpen(true)}
              className="
                bg-[#252525] 
                csLg:text-[14px] csLg:leading-[24px] 
                tracking-tight cursor-pointer 
                text-[12px] md:px-6 px-3 py-3 md:py-4 
                text-[#F9F9F9] 
                rounded-[8px] md:rounded-[16px] 
                hover:bg-[#333] transition
              "
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Appointment Form Modal */}
      {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
    </section>
  );
}
