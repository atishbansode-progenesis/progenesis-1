'use client';
import React from 'react';

const EmiCare: React.FC = () => {
  return (
    <section id='financial' className="w-full section-spacing overflow-hidden bg-[#FAFAFA]">
      {/* Badge and Title */}
      <span className="inline-block w-auto bg-[#1656A50D] font-medium text-[#1656A5] text-[12px] md:text-[13px] leading-[20px] px-3 py-1 mb-2 rounded-[8px]">
          Financial support
        </span>
      <div className="flex flex-col gap-4 mb-8 md:mb-12">
        
        <h1 className="text-[32px] md:text-4xl lg:text-[40px] font-manrope font-normal text-[#2C2C2C] leading-tight md:leading-[1.2]">
          Now Get 'No Cost EMI' Assistence.
        </h1>
      </div>

      {/* Separator Line */}
      <div className="w-full h-[1px] bg-gray-200 md:mb-auto mb-4"></div>

      {/* How It Works Section */}
      <div className="mt-8 md:mt-2 lg:mt-3 flex flex-col md:flex-row justify-between items-start ">
  {/* Left Title */}
  <div className="md:w-[35%] lg:w-[30%]">
    <h2 className="text-[16px] leading-[24px] lg:text-[32px] lg:leading-[40px] font-manrope font-normal text-[#2C2C2C] mb-2 md:mb-0 ">
      How It Works
    </h2>
  </div>

  {/* Description Paragraphs */}
  <div className="flex flex-col gap-6 md:w-[60%] lg:w-[65%] text-base text-[#6B7280] leading-[24px] tracking-tight">
    <p>
      At Progenesis, we put your treatment needs first by making finances
      worry-free. With our no cost EMI options, you can access quality treatment
      today and pay in easy, convenient installments.
    </p>
    <p>
      We also welcome patients with medical insurance, ensuring you get the care
      you deserve without financial stress.
    </p>
  </div>
</div>


    </section>
  );
};

export default EmiCare;
