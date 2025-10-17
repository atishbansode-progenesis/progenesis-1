"use client";
import React from "react";

const ParenthoodBannerBlog = () => {
  const isLargeDevice = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <section
      className="relative flex pt-[80px] lg:p-0 lg:items-center justify-end bg-cover bg-center lg:px-[120px] lg:py-[80px] h-[650px] lg:h-[500px] bg-no-repeat"
      style={{
        backgroundImage: isLargeDevice
          ? "url('/blog/resources-parent-hood-banner-lg.png')"
          : "url('/blog/resources-parent-hood-banner-small.png')",
          backgroundPosition: isLargeDevice ? "center" : 'bottom',
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 max-w-[90%] mx-auto lg:mx-0 lg:max-w-[70%] text-center lg:text-left ">
        <p className="text-[#94BA3D] text-[32px] lg:text-[40px] leading-[40px] lg:leading-[56px] tracking-[-0.02em] font-normal">
          Your Dream of Parenthood Starts Here — Let’s Take the First Step Together and Turn Hope into a Beautiful Reality.
        </p>
      </div>
    </section>
  );
};

export default ParenthoodBannerBlog;
