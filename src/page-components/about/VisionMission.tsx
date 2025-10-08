'use client';
import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section id="our-vision" className="w-full bg-white px-6 md:px-12 lg:px-16 py-10 md:py-12 section-spacing" >
      {/* Top Label */}
      <div className="pb-8 md:pb-10 lg:pb-12">
        <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">Our Vision & Mission</span>

        {/* Section Title */}
        <h2 className="font-[Manrope] text-[32px] leading-[40px] tracking-[-0.02em] font-normal text-[#2C2C2C] mb-12 csLg:text-[48px] csLg:leading-[56px]">
          Guided by Purpose. <br /> Driven by Compassion.
        </h2>
      </div>

      {/* Our Vision Row */}
      <div className="border-t border-gray-200 pt-6 pb-10 md:flex ">
        <div className="md:w-1/3 md:mb-0">
          <h3 className="text-[32px] leading-[40px] tracking-[-0.02em] font-normal text-[#2C2C2C] csLg:text-[48px]">Our Vision</h3>
        </div>
        <div className="md:w-2/3">
          <p className="font-[Manrope] text-[16px] leading-[24px] tracking-[-0.02em] font-normal csLg:text-[32px] csLg:leading-[36px] text-[#2C2C2C]">
            At Progenesis IVF, our vision is to become the benchmark for reproductive healthcare — a trusted name where hope meets expertise. We are committed to walking hand-in-hand with every couple on their path to parenthood, blending cutting-edge fertility science with deep empathy and ethical care.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Our Mission Row */}
      <div className="pb-10 pt-6 md:flex ">
        <div className="md:w-1/3 md:mb-0">
          <h3 className="text-[32px] leading-[40px] tracking-[-0.02em] font-normal text-[#2C2C2C] csLg:text-[48px] ">Our Mission</h3>
        </div>
        <div className="md:w-2/3">
          <p className="font-[Manrope] text-[16px] leading-[24px] tracking-[-0.02em] font-normal csLg:text-[32px] csLg:leading-[36px] text-[#2C2C2C]">
            Our mission is to provide comprehensive, personalized fertility solutions in a nurturing environment that values trust, transparency, and dignity. We strive to deliver the highest standards in reproductive medicine, guided by compassion, clinical excellence, and a relentless dedication to making parenthood possible, one family at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
