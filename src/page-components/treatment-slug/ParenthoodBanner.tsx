"use client";
import React from "react";

const ParenthoodBanner = () => {
  const isLargeDevice = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <section
      className="relative flex pt-[80px] lg:p-0 lg:items-center justify-end bg-cover bg-center lg:px-[120px] lg:py-[80px] h-[605px] lg:h-[500px] bg-no-repeat"
      style={{
        backgroundImage: !isLargeDevice
          ? "url('/treatments/bg-banner-small-device-hands.png')"
          : "url('/treatments/bg baner.png')",
          backgroundPosition: 'bottom',
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 max-w-[90%] mx-auto lg:mx-0 lg:max-w-[70%] text-center lg:text-left ">
        <p className="text-[#94BA3D] text-[32px] lg:text-[40px] leading-[40px] lg:leading-[56px] tracking-[-0.02em] font-normal ">
          Your dream of parenthood deserves the best. Our specialists offer
          advanced fertility treatments for higher success.
        </p>
      </div>
    </section>
  );
};

export default ParenthoodBanner;
