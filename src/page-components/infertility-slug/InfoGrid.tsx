// components/InfertilityIssues/InfoGrid.tsx
import React from "react";

interface InfoItem {
  id: number;
  title: string;
  description: string;
}

interface InfoGridProps {
  tag: string;
  heading: string;
  items: InfoItem[];
}

export default function InfoGrid({ tag, heading, items }: InfoGridProps) {
  return (
    <section className="w-full px-[12px] md:px-[80px] xl:px-[120px] py-20 bg-[#FAFAFA]">
      {/* Small Tag */}
      <span
        className="inline-block px-3 py-1 mb-6 rounded-full text-[12px] font-medium leading-[20px] tracking-[-0.24px] text-[#1656A5] bg-[#F3F8FE]"
        style={{ fontFamily: "Manrope" }}
      >
        {tag}
      </span>

      {/* Main Heading */}
      <h2
        className="w-full text-[32px] md:text-[48px] font-normal leading-[56px] tracking-[-0.96px] text-[#2C2C2C] mb-12 md:mb-20"
        style={{ fontFamily: "Manrope" }}
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-16">
        {items.map((item, index) => (
          <div key={item.id} className="flex flex-col items-start gap-3">
            <div className="flex flex-row md:flex-col items-start gap-1">
              <div className="text-[16px] text-[#606060]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="text-[16px] font-semibold lg:font-normal md:text-[32px] text-[#2C2C2C]">
                {item.title}
              </div>
            </div>
            <hr className="border-[#1656A50D] border-[1px] w-[80%]" />
            <div className="text-[16px] text-[#606060]">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}