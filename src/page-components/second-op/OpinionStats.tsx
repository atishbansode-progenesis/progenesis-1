'use client';

import React from 'react';

const stats = [
  {
    title: "Clear Diagnosis",
    description: "78% of patients gained clearer diagnosis after a second opinion.",
    metric: "78%"
  },
  {
    title: "Corrected Errors",
    description: "62% of initial misdiagnoses were corrected with advanced evaluation.",
    metric: "62%"
  },
  {
    title: "Better Results",
    description: "3 in 5 couples saw better pregnancy results after re-evaluation.",
    metric: "3 in 5"
  },
  {
    title: "Patient Trust",
    description: "95% felt more confident about their treatment choices after consultation.",
    metric: "95%"
  }
];

const OpinionStats: React.FC = () => {
  return (
    <section id='numbers' className="w-full bg-gradient-to-br from-green-50 via-[#FFFFFF] to-blue-50 ">
      <div className="section-spacing w-full">
        {/* Top Section: Tag + Main Heading */}
        <div className="csLg:mb-[80px] mb-[32px] ">
          {/* Tag/Button */}
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] font-medium tracking-tight rounded-[8px] font-[Manrope] mb-2" style={{padding:'8px'}}>
            Numbers That Set Us Apart
          </span>
          
          {/* Main Heading */}
          <h1 className="text-[32px] lg:text-[40px]  csLg:max-w-[60%] font-normal text-[#2C2C2C] leading-[40px] csLg:leading-[64px] tracking-tight font-[Manrope]" >
            Benefits, corrections, and successes through second opinions.
          </h1>
        </div>
        <div className="w-full h-px bg-gray-200 mb-[16px]" ></div>

        {/* Stats Content */}
        <div className="">
          {stats.map((stat, index) => (
            <div key={index}>
              {/* Stats Row */}
              <div className="grid grid-cols-1 csLg:grid-cols-3 gap-4 justify-between csLg:gap-8 items-center ">
                {/* Mobile: Title and Metric on one line, Description below */}
                <div className="csLg:hidden space-y-4 hover:bg-[#1656A50D]/5" style={{paddingBottom:'12px'}}>
                  {/* Title and Metric Row */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-[32px] font-normal text-[#2C2C2C] leading-tight tracking-tight font-[Manrope] whitespace-nowrap">
                      {stat.title}
                    </h3>
                    <span className="text-[32px] text-[#2C2C2C] leading-[40px] font-normal tracking-tight font-[Manrope]">
                      {stat.metric}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="text-[16px] text-left leading-6 text-[#2c2c2c] tracking-tight font-[Manrope]">
                    {stat.description}
                  </p>
                </div>

                {/* Desktop: Original Layout */}
                {/* Left: Title */}
                <div className="hidden csLg:block">
                  <h3 className="text-[40px]  font-normal text-[#2c2c2c] leading-tight tracking-tight font-[Manrope] whitespace-nowrap">
                    {stat.title}
                  </h3>
                </div>

                {/* Center: Description */}
                <div className="hidden csLg:block w-full  csLg:pl-10">
                  <p className="text-base csLg:text-[16px]   text-left  leading-6 csLg:leading-7 text-[#2C2C2C] tracking-tight font-[Manrope]">
                    {stat.description}
                  </p>
                </div>

                {/* Right: Metric */}
                <div className="hidden csLg:flex justify-end">
                  <span className="text-[32px] csLg:text-[48px] text-[#2C2C2C] leading-none font-normal tracking-tight font-[Manrope]">
                    {stat.metric}
                  </span>
                </div>
              </div>

              {/* Horizontal Line (except for last item) */}
              {index < stats.length - 1 && (
                <div className="w-full h-px bg-gray-200 mt-[16px] mb-4 csLg:mt-[48px]" ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionStats;
