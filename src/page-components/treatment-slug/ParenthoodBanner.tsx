"use client";
import React from "react";

const ParenthoodBanner = () => {
  return (
    <section
      className="relative flex items-center justify-end bg-cover bg-center min-h-[500px] px-[120px] py-[80px]"
      style={{
        backgroundImage: "url('/treatments/bg baner.png')", 
      }}
    >
      {/* Overlay Gradient (optional subtle fade like in the image) */}
      <div className="absolute inset-0 "></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-[70%]  ">
       <p
  className="text-[#94BA3D] text-[40px] leading-[56px] tracking-[-0.02em] font-normal "
>
  Your dream of parenthood deserves the best. Our specialists offer
  advanced fertility treatments for higher success.
</p>

      </div>
    </section>
  );
};

export default ParenthoodBanner;
