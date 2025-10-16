import React from "react";

interface PathSectionProps {
  tag?: string;
  mainHeading: string;
  subHeading: string;
  description1: string;
  description2: string;
  backgroundColor?: string;
  showDivider?: boolean;
}


export const PathSection: React.FC<PathSectionProps> = ({
  tag,
  mainHeading,
  subHeading,
  description1,
  description2,
  backgroundColor = "#F9F9F9",
  showDivider = true
}) => {
  return (
    <section 
      id="basics" 
      className="px-4 py-4 csLg:px-[120px] csLg:py-[80px]"
      style={{ backgroundColor }}
    >
      {/* Label */}
      {tag && (
        <div className="">
          <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-2">
            {tag}
          </span>
        </div>
      )}

      {/* Main Heading */}
      <h2 className="text-[#2C2C2C] font-[Manrope] text-[32px] leading-[40px] tracking-[-0.64px] font-normal md:text-[40px] md:leading-[56px] md:tracking-normal">
        {mainHeading}
      </h2>

      {/* Divider */}
      {showDivider && (
        <hr className="csLg:mt-[80px] csLg:mb-[16px] my-[12px] border-t border-[#E0E0E0]" />
      )}

      {/* Subheading + Description */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 csLg:gap-6">
        {/* Subheading */}
        <h3 className="font-[Manrope] font-normal text-[#2C2C2C] text-[24px] leading-[32px] tracking-[-0.48px] md:text-[32px] md:leading-[40px] md:tracking-[-0.64px]">
          {subHeading}
        </h3>

        {/* Paragraph */}
        <span className="flex flex-col gap-2">
        <span className="font-[Manrope] font-normal text-[#606060] text-[16px] leading-[24px] tracking-[-0.32px] max-w-3xl">
          {description1}
        </span>
        <span className="font-[Manrope] font-normal text-[#606060] text-[16px] leading-[24px] tracking-[-0.32px] max-w-3xl">
          {description2}
        </span>

        </span>
        
      </div>
    </section>
  );
};

