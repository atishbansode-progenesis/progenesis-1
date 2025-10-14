"use client";
import React from "react";

const ParenthoodBanner = () => {
  return (
    <section
      className="relative flex items-center justify-end bg-cover bg-center min-h-[605px] px-10"
      style={{
        backgroundImage: "url('/treatments/bg baner.png')", 
      }}
    >
      {/* Overlay Gradient (optional subtle fade like in the image) */}
      <div className="absolute inset-0 "></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl text-right ">
        <p
          className="font-[Manrope] text-[#94BA3D] lg:text-[48px] "
          style={{
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "56px",
            letterSpacing: "-0.02em",
          }}
        >
          Your dream of parenthood deserves the best. Our specialists offer
          advanced fertility treatments for higher success.
        </p>
      </div>
    </section>
  );
};

export default ParenthoodBanner;
