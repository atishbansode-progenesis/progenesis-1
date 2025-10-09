"use client";
import Image from "next/image";
import React from "react";

const ParenthoodSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden flex justify-center items-center">
      {/* Desktop Image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/parenthood-desktop.png"
          alt="Parenthood hands desktop"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/images/parenthood-mobile.png"
          alt="Parenthood hands mobile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div
        className="
          relative z-10
          flex flex-col justify-center
          w-full h-[605px] max-w-[1920px]
          px-5 sm:px-10 md:px-[80px] lg:px-[160px] xl:px-[220px]
          text-[#94BA3D] font-[Manrope]
        "
      >
        <div
          className="
            flex flex-col items-center md:items-start
            justify-center text-center md:text-left
            w-full
          "
        >
          <p
            className="
              font-normal
              text-[20px] leading-[28px] tracking-[-0.4px]
              md:text-[36px] md:leading-[46px] md:tracking-[-0.8px]
              lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.96px]
              max-w-[328px] md:max-w-[800px] lg:max-w-[1085px]
            "
          >
            Your dream of parenthood deserves the best. Our specialists offer
            advanced fertility treatments for higher success.
          </p>
        </div>
      </div>

      {/* Mobile height override */}
      <style jsx>{`
        @media (max-width: 767px) {
          section {
            height: 555px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ParenthoodSection;
