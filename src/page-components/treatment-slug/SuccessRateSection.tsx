import React from "react";

interface SuccessRateSectionProps {
  percentage: string;
  text: string;
}

export default function SuccessRateSection({ percentage, text }: SuccessRateSectionProps) {
  return (
    <section id="success-rate" className="relative w-full flex justify-center items-center overflow-hidden px-6 md:px-12 lg:px-[120px] py-20 scroll-mt-[120px]">
      <div
        className="absolute left-[-100px] bottom-[-50px] rounded-full bg-[#94BA3D] blur-[250px]"
        style={{
          width: "348px",
          height: "280px",
          transform: "rotate(-2deg)",
        }}
      ></div>
      <div
        className="absolute right-[-200px] top-[-150px] rounded-full bg-[#1656A5] blur-[250px]"
        style={{
          width: "222px",
          height: "203px",
          transform: "rotate(-2deg)",
        }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between w-full">
        <h2 className="text-[#94BA3D] font-manrope text-[80px] md:text-[120px] font-normal leading-none tracking-[-2.4px] mb-6 md:mb-0">
          {percentage}
        </h2>

        <p className="text-[#94BA3D] font-manrope text-[32px] md:text-[48px] font-normal leading-[40px] md:leading-[56px] tracking-[-0.64px] md:tracking-[-0.96px] text-left md:text-right max-w-3xl">
          {text}
        </p>
      </div>
    </section>
  );
}
