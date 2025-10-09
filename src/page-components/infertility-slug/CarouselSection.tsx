// components/InfertilityIssues/CarouselSection.tsx
import React, { useState } from "react";

interface Slide {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface CarouselSectionProps {
  tag: string;
  heading: string;
  slides: Slide[];
}

export default function CarouselSection({ tag, heading, slides }: CarouselSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full px-[12px] md:px-[80px] xl:px-[120px] py-10 md:py-20 bg-[#F1F7FC] font-[Manrope]">
      <div>
        {/* Two-column wrapper */}
        <div className="flex flex-col items-start justify-between">
          <div className="mb-10 md:mb-20">
            {/* Chip */}
            <span className="inline-block mb-2 px-2 py-1 bg-[rgba(22,86,165,0.05)] text-[#1656A5] text-xs font-medium rounded-md w-fit tracking-tight">
              {tag}
            </span>

            {/* Heading */}
            <h2 
              className="text-[#2C2C2C] text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[44px] lg:leading-[56px] font-normal tracking-[-0.96px]"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
          </div>

          {/* LEFT DIV + RIGHT DIV */}
          <div className="w-full flex-col md:flex-row flex justify-between items-center gap-12">
            <div className="w-full md:w-[25rem]">
              {/* Dots */}
              <div className="flex gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-[10px] h-[10px] cursor-pointer rounded-full transition-all duration-200 ${
                      i === activeIndex ? "bg-[#1656A5]" : "bg-[#C9C9C9]"
                    }`}
                  />
                ))}
              </div>

              {/* Slide number + content */}
              <div className="mt-6">
                <div className="text-[#94BA3D] text-[16px] leading-[24px] tracking-[-0.32px]">
                  {slides[activeIndex].id}
                </div>

                <h3 className="text-[#1656A5] text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] lg:leading-[40px] tracking-[-0.64px] mt-2">
                  {slides[activeIndex].title}
                </h3>

                <p className="text-[#2C2C2C] text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] mt-3 max-w-[680px]">
                  {slides[activeIndex].description}
                </p>
              </div>
            </div>

            {/* RIGHT DIV (Image only) */}
            <div>
              <div className="w-full max-w-[1248px] aspect-[1248/601] rounded-2xl overflow-hidden relative">
                <img
                  key={activeIndex}
                  src={slides[activeIndex].image}
                  alt={slides[activeIndex].title}
                  className="w-full h-full object-cover block transition-opacity duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}