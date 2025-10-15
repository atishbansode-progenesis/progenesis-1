import React from "react";

interface TreatmentBasicsProps {
  tag?: string;
  heading: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export default function TreatmentBasics({ tag, heading, items }: TreatmentBasicsProps) {
  return (
    <section id="basics" className="px-4 py-4 csLg:px-[120px]  csLg:py-[80px] bg-[#F9FBFF] scroll-mt-[120px]">
      {tag && (
        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-[#2C2C2C] font-[Manrope] font-normal mb-[32px] md:mb-[60px] text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 rounded-[12px] px-4 py-4 md:py-6 md:px-6 "
          >
            		 <img
          src={item.icon}
          alt={item.title}
          className="w-[20px] h-[20px] md:w-8 md:h-8 object-contain  md:mb-4"
        />
            <h3 className="text-[#2C2C2C] font-[Manrope] text-[32px] leading-[40px] tracking-[-0.64px] font-normal">
              {item.title}
            </h3>
            <p className="text-[#606060] font-[Manrope] text-[16px] leading-[24px] opacity-80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
