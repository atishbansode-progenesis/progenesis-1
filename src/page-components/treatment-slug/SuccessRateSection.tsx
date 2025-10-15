import React from "react";

interface SuccessRateSectionProps {
  percentage: string;
  text: string;
}

export default function SuccessRateSection({ percentage, text }: SuccessRateSectionProps) {
  return (
  <section className="relative w-full flex justify-center items-center overflow-hidden px-6 pt-4 pb-[80px]  csLg:px-[120px] csLg:py-[80px]">
  {/* 🔹 Left Green Blur Ellipse */}
  <div
    className="absolute left-[-100px] bottom-[-50px] rounded-full bg-[#94BA3D] blur-[250px]"
    style={{
      width: "348px",
      height: "280px",
      transform: "rotate(-2deg)",
    }}
  ></div>

  {/* 🔹 Right Blue Blur Ellipse */}
  <div
    className="absolute right-[-200px] top-[-150px] rounded-full bg-[#1656A5] blur-[250px]"
    style={{
      width: "222px",
      height: "203px",
      transform: "rotate(-2deg)",
    }}
  ></div>

  {/* 🔹 Content */}
  <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between w-full ">
    {/* Percentage */}
    <h2
      className="
        text-[#94BA3D] font-manrope font-normal
        text-right md:text-left
        text-[120px] md:text-[120px]
        leading-none tracking-[-2.4px]
        mb-[80px] md:mb-0
        px-6 md:px-0
      "
    >
      {percentage}
    </h2>

    {/* Heading Text */}
    <p
      className="
         text-[#94BA3D] font-manrope font-normal
        text-[32px] md:text-[48px]
        leading-[40px] md:leading-[56px]
        tracking-[-0.64px] md:tracking-[-0.96px]
        text-left md:text-right
        lg:px-6 md:px-0
        md:max-w-[70%]
        max-w-[312px]
      "
    >
      {text}
    </p>
  </div>
</section>
  );
}
