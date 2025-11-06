"use client";
import React, { useEffect, useState } from "react";

const ParenthoodBanner = () => {
  const [isLargeDevice, setIsLargeDevice] = useState(false);

  useEffect(() => {
    // Check if window exists before accessing it
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsLargeDevice(mediaQuery.matches);

    // Optional: update on resize
    const handleResize = () => setIsLargeDevice(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <section
      className="relative flex pt-[80px] lg:p-0 lg:items-center justify-end bg-cover bg-center csLg:px-[120px] csLg:py-[80px] h-[605px] lg:h-[500px] bg-no-repeat"
      style={{
        backgroundImage: !isLargeDevice
          ? "url('/treatments/bg-banner-small-device-hands.png')"
          : "url('/treatments/bg-bannerM.png')",
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
