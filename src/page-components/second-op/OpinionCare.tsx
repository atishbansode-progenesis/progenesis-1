'use client';

import React from 'react';

const careItems = [
  {
    icon: <img src="/images/icons/care-1.svg" />, // Line graph trending upwards icon (placeholder - you can replace with actual SVG)
    title: "Proven Success with Ethical Care",
    description: "We combine consistently high success rates with a strong commitment to ethical practices, ensuring patients feel supported and respected at every step."
  },
  {
    icon: <img src="/images/icons/care-2.svg" />, // Person profile icon (placeholder - you can replace with actual SVG)
    title: "Patient-Centered Approach",
    description: "By reinventing patient care, we provide a personalized journey where compassion, guidance, and comfort are at the core of every treatment experience."
  },
  {
    icon: <img src="/images/icons/care-3.svg" />, // Test tube with magnifying glass icon (placeholder - you can replace with actual SVG)
    title: "World-Class Laboratories & Technology",
    description: "Our comprehensive ART labs, equipped with advanced reproductive technology, deliver precision-driven treatments that enhance outcomes."
  },
  {
    icon: <img src="/images/icons/care-4.svg" />, // Star with checkmark icon (placeholder - you can replace with actual SVG)
    title: "Uncompromising Quality Standards",
    description: "Every process is backed by exceptional quality benchmarks, ensuring safety, transparency, and excellence in fertility care."
  }
];

const OpinionCare: React.FC = () => {
  return (
    <section id='care' className="w-full bg-[#F3F6FA]">
      <div className="csLg:py-[80px] p-[16px] csLg:px-[120px] w-full">
        {/* Top Section: Tag + Main Heading */}
        <div className="csLg:mb-12 mb-8">
          {/* Tag/Button */}
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-xs font-medium tracking-tight font-[Manrope] mb-4 border-[#1656A5]/20 rounded-[8px] px-3 py-1" style={{padding:'8px'}}>
            We Take Care of You
          </span>
          
          {/* Main Heading */}
          <h1 className="text-[32px] lg:text-[40px] font-normal text-[#2C2C2C] leading-[40px] csLg:leading-[56px] tracking-tight font-[Manrope] csLg:pb-8" >
            Grow personally, professionally,<br/> purposefully.
          </h1>
        </div>

        {/* Care Cards Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 csLg:gap-8">
          {careItems.map((item, index) => (
            <div
              key={index}
    
              className="bg-white rounded-[16px] p-4 csLg:p-[20px] flex flex-col csLg:gap-4 "
            >
              {/* Icon */}
              <div className="w-[19px] h-[19px] csLg:w-[29px] csLg:h-[29px] flex items-center justify-center text-[#1656A5] text-2xl csLg:text-3xl font-medium rounded-[8px]">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                {/* Title */}
                <h3 className="text-[16px] lg:text-[24px] font-semibold csLg:font-normal text-[#2c2c2c] leading-[24px] csLg:leading-[40px] tracking-tight font-[Manrope]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] font-normal leading-6 text-[#606060]  tracking-tight font-[Manrope]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionCare;
