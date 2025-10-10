'use client';

import React from 'react';

const OpinionContent: React.FC = () => {
  return (
    <section id='why' className="w-full bg-[#FAFAFA]">
      <div className="flex flex-col justify-center px-6   py-4 csLg:py-0 csLg:px-[120px] min-h-[444px] gap-[32px] csLg:gap-[16px] w-full">
        {/* Top Section: Tag + Main Heading */}
        <div className="">
          {/* Tag/Button */}
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] font-medium tracking-tight rounded-[8px] font-[Manrope] mb-2" style={{ padding: '8px' }}>
            Why Get a Second Opinion?
          </span>

          {/* Main Heading */}
          <h1 className="text-[32px] csLg:text-[48px] font-normal text-black leading-[56px] csLg:leading-[72px] tracking-tight font-[Manrope]" style={{ paddingBottom: '32px' }}>
            Clearer Choices, Better Outcomes
          </h1>
        </div>

        {/* Horizontal Line */}
        <div className='b'>
          <div className="w-full h-px bg-gray-200 mb-8"></div>


          {/* Bottom Section: Sub-heading + Paragraph */}
          <div className="grid csLg:grid-cols-2 gap-[8px] csLg:gap-0" >
            {/* Left: Sub-heading */}
            <div>
              <h2 className="text-2xl csLg:text-3xl font-normal text-black leading-[36px] csLg:leading-[42px] tracking-tight font-[Manrope]">
                How It Works
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div>
              <p className="text-[16px] font-normal opacity-[70%]  text-[#606060] tracking-tight font-[Manrope]">
                Fertility treatments can be emotionally and financially demanding. If you've experienced unsuccessful cycles, have doubts about your diagnosis, or simply want reassurance, a second opinion can give you the clarity you need. At Progenesis Fertility Center, our specialists review your reports, evaluate your options, and provide unbiased, evidence-based recommendations - helping you make confident decisions and move closer to parenthood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionContent;
