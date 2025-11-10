// components/InfertilityIssues/InfoGrid.tsx
import React from "react";

interface InfoItem {
  id: number;
  title: string;
  description: string;
}

interface InfoGridCentersProps {
  tag: string;
  heading: string;
  items: InfoItem[];
}

export default function InfoGridCenters({ tag, heading, items }: InfoGridCentersProps) {
  return (
    <section
      className="w-full p-[16px] md:px-[120px] md:py-[80px] bg-[#FAFAFA]"
      id="about"
    >
      {/* Small Tag */}
      <button className="cursor-pointer bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
        {tag}
      </button>
      {/* Main Heading */}
      <h2
        className="md:max-w-2lg text-[32px] md:text-[40px] font-normal md:leading-[50px] leading-[40px] tracking-[-0.96px] text-[#2C2C2C] mb-[40px] md:mb-[80px]"
        style={{ fontFamily: "Manrope" }}
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-16">
        {items.map((item, index) => (
          <div key={item.id} className="flex flex-col items-start gap-[8px]">
            <div className="flex flex-row gap-2 md:flex-col items-start">
              <div className="text-[16px] text-[#606060]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="text-[16px] font-semibold lg:font-normal md:text-[24px] text-[#2C2C2C]">
                {item.title}
              </div>
            </div>
            <div className="text-[16px] text-[#606060]/70">
              {item.description}
            </div>
            {index < items.length - 1 && <hr className="border-[#1656A50D] border-[1px] w-full md:hidden" />}
          </div>
        ))}
      </div>
    </section>
  );
}
