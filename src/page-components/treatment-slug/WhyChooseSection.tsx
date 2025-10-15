"use client";
import React, { useState } from "react";
import Image from "next/image";

interface WhyChooseSectionProps {
  tag?: string;
  heading: string;
  points: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
  }>;
}

export default function WhyChooseSection({
  tag,
  heading,
  points,
}: WhyChooseSectionProps) {
  const [activePoint, setActivePoint] = useState<number>(0);

  return (
    <>
      {/* Desktop Version */}
      <section
        id="why-choose"
        className="csLg:px-[120px] csLg:py-[80px] bg-transparent hidden lg:block scroll-mt-[120px]"
      >
        <div className="grid grid-cols-[40%_60%]  w-full items-center">
          <div className="flex flex-col  justify-between h-full ">
            <div>
              {tag && (
                <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-2 w-fit">
                  {tag}
                </span>
              )}

              <h2 className="text-[#2C2C2C] font-manrope font-normal text-[28px] leading-[36px] md:text-[44px] md:leading-[52px]">
                {heading}
              </h2>
            </div>

            <div className="flex flex-col divide-y divide-[#A5A5A5]">
              {points.map((point, idx) => (
                <div
                  key={point.id}
                  className="py-5 cursor-pointer"
                  onClick={() => setActivePoint(idx)}
                >
                  <div className="flex items-start justify-between">
                    <h3
                      className={`text-[#2C2C2C] font-[Manrope] text-[32px] md:text-[26px] leading-[32px]max-w-[379px] ${
                        activePoint === idx ? "text-[#2C2C2C]" : ""
                      }`}
                    >
                      {point.title}
                    </h3>
                    <span className="text-[#2C2C2C] font-[Manrope] text-[18px] md:text-[20px] font-medium">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {activePoint === idx && (
                    <p className="mt-2 text-[#606060] font-[Manrope] max-w-[379px] text-[15px] leading-[22px] opacity-80">
                      {point.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className=" h-full pl-[77px]">
            <Image
              key={activePoint}
              src={points[activePoint].image}
              alt={points[activePoint].title}
              width={100}
              height={100}
              className="w-full h-full object-cover overflow-hidden rounded-[14.5px]"
            />
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="p-4  rounded-[16px]  bg-[#F5FAFF] lg:hidden scroll-mt-[120px]">
        <div className="lg:hidden">
          {tag && (
            <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-2">
              {tag}
            </span>
          )}

          <h2 className="text-[#2C2C2C] font-manrope font-normal text-[28px] leading-[36px] mb-[32px]">
            {heading}
          </h2>

          {/* Slider Card */}
          <div className="relative rounded-[16px] overflow-hidden ">
            <div className="">
              <span className="text-[#94BA3D] font-[Manrope] text-[16px] font-medium">
                {String(activePoint + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[#1656A5] font-[Manrope] text-[20px] md:text-[24px] font-medium mt-2 mb-3">
                {points[activePoint].title}
              </h3>
              <p className="text-[#606060] font-[Manrope] text-[14px] leading-[22px] mb-4">
                {points[activePoint].description}
              </p>
            </div>

            {/* Image */}
            <div className="w-full h-[280px] overflow-hidden rounded-[14.5px]">
              <img
                key={activePoint}
                src={points[activePoint].image}
                alt={points[activePoint].title}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-2 py-4">
              {points.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePoint(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activePoint === idx
                      ? "w-8 bg-[#1656A5]"
                      : "w-2 bg-[#D9D9D9]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
