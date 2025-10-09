// components/InfertilityIssues/StatisticsVisual.tsx
import React from "react";

interface StatCircle {
  value: string;
  description: string;
  position: {
    right: string;
    top?: string;
    bottom?: string;
  };
  size: {
    width: string;
    height: string;
  };
  bgColor: string;
  lineWidth: string;
  textPosition: {
    right: string;
    top?: string;
    bottom?: string;
  };
}

interface StatisticsVisualProps {
  tag: string;
  heading: string;
  circles: StatCircle[];
}

export default function StatisticsVisual({ tag, heading, circles }: StatisticsVisualProps) {
  return (
    <section className="w-full px-[12px] md:px-[80px] xl:px-[120px] py-10 md:py-20">
      <div className="relative">
        {/* Tag */}
        <span className="inline-block mb-3 px-2 py-1 bg-[rgba(22,86,165,0.05)] text-[#1656A5] text-xs font-medium rounded-md tracking-tight">
          {tag}
        </span>

        {/* Heading */}
        <h2 className="font-manrope text-[28px] md:text-[40px] font-semibold leading-[36px] md:leading-[48px] tracking-[-0.64px] text-[#2C2C2C] max-w-[600px]">
          {heading}
        </h2>
      </div>

      {/* Circle Visualization Section */}
      <div className="relative -mt-12 w-full h-[500px] md:h-[900px] flex justify-center items-start">
        {circles.map((circle, index) => (
          <React.Fragment key={index}>
            {/* Circle */}
            <div
              className={`absolute rounded-full flex items-center justify-center text-center shadow-sm ${circle.bgColor}`}
              style={{
                right: circle.position.right,
                top: circle.position.top,
                bottom: circle.position.bottom,
                width: circle.size.width,
                height: circle.size.height,
              }}
            >
              <span 
                className="font-manrope font-medium text-[64px] md:text-[64px] text-[#2C2C2C]"
                dangerouslySetInnerHTML={{ __html: circle.value }}
              />
            </div>

            {/* Text description */}
            <div
              className="absolute text-[#606060] text-xs md:text-sm leading-[18px] md:leading-[22px]"
              style={{
                right: circle.textPosition.right,
                top: circle.textPosition.top,
                bottom: circle.textPosition.bottom,
                width: '140px',
              }}
            >
              <div
                className="absolute top-0 left-0 h-[0.5px] bg-[#7a7a7a]"
                style={{ width: circle.lineWidth }}
              />
              <p className="pt-5 relative z-10">{circle.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}