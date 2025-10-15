'use client';

import React from 'react';

const benefits = [
  {
    icon: <img src="/images/icons/so-icon-1.svg" />, // Magnifying glass icon (placeholder - you can replace with actual SVG)
    title: "Clarity & Confidence",
    description: "Get an unbiased review of your diagnosis and plan to make informed, confident decisions."
  },
  {
    icon: <img src="/images/icons/so-icon-2.svg" />, // Stethoscope icon (placeholder - you can replace with actual SVG)
    title: "Accurate Diagnosis",
    description: "Recheck tests, spot overlooked conditions, and confirm the right diagnosis."
  },
  {
    icon: <img src="/images/icons/so-icon-3.svg" />, // Medical cross icon (placeholder - you can replace with actual SVG)
    title: "Right Treatment Choices",
    description: "See if your plan fits, compare success rates, and explore more options."
  },
  {
    icon: <img src="/images/icons/so-icon-4.svg" />, // Question mark icon (placeholder - you can replace with actual SVG)
    title: "Access to Advanced Care",
    description: "Discover new technologies and fertility solutions not available everywhere."
  }
];

const OpinionBenefits: React.FC = () => {
  return (
    <section id='how' className="w-full bg-[#FFFFFF]">
      <div className="section-spacing w-full">
        {/* Top Section: Tag + Main Heading */}
        <div className="csLg:mb-[80px] mb-[32px]" >
          {/* Tag/Button */}
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-xs font-medium tracking-tight rounded-[8px] font-[Manrope] p-2 mb-2" >
            How a Second Opinion Helps
          </span>
          
          {/* Main Heading */}
          <h1 className="text-[32px] csLg:max-w-[60%] csLg:text-5xl font-normal text-[#2C2C2C] leading-[40px] csLg:leading-[56px] tracking-tight font-[Manrope]">
            Clarity, Better Choices, Greater Confidence in Fertility Care
          </h1>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 csLg:grid-cols-4 gap-6 csLg:gap-8" >
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[#1656A50D] flex flex-col justify-between csLg:min-h-[394px] rounded-[12px] p-4 csLg:p-6 gap-3 csLg:gap-4"
            >
              {/* Icon */}
              <div className="w-7 h-7 csLg:w-[50px] csLg:h-[50px] flex items-center justify-center text-[#1656A5] text-2xl csLg:text-3xl font-medium">
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 csLg:max-w-[65%] csLg:min-h-[128px]">
                {/* Title */}
                <h3 className="text-[16px] csLg:text-[16px] font-semibold text-[#2C2C2C] leading-[24px] tracking-tight font-[Manrope]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] leading-6 text-[#2C2C2C] opacity-[60%] tracking-tight font-[Manrope]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionBenefits;
