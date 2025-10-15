import React from "react";
import "../about/AboutMain.css";

const items = [
  {
    icon: "/Emiicon/Emi1.svg",
    text: "Up to 80% finance of the total Medical Bill",
  },
  {
    icon: "/Emiicon/Emi2.svg",
    text: "Easy Repayment mode",
  },
  {
    icon: "/Emiicon/Emi3.svg",
    text: "EMI options as per your convenience (15/18/24 months)",
  },
  {
    icon: "/Emiicon/Emi4.svg",
    text: "Minimum Documentation",
  },
  {
    icon: "/Emiicon/Emi5.svg",
    text: "No Collateral Security Required.",
  },
  {
    icon: "/Emiicon/Emi6.svg",
    text: "Patient with medical insurance can also apply",
  },
];

const EmiOverview = () => {
  return (
    <section id="care" className="w-full bg-[#F3F6FA]">
      <div className="section-spacing w-full px-6 md:px-8 lg:px-16 py-10 md:py-14">
        {/* Badge */}
        <div className="mb-2">
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] font-medium text-[12px] leading-[20px] md:text-[13px] px-3 py-1 rounded-[8px]">
            We Take Care of You
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-normal tracking-tight text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] mb-8 md:pb-12">
          Financial Support That Puts You First
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] h-[124px] md:h-auto px-5 py-4 flex items-start"
            >
              <div className="flex flex-col items-start justify-center gap-[10px]">
                {/* Icon */}
                <div className="h-7 w-7 lg:h-[50px] lg:w-[50px]">
                <img
                  src={it.icon}
                  alt={it.text}
                  className="w-[22px] h-[22px] md:w-8 md:h-8 object-contain"
                /></div>
                {/* Text */}
                <p className="text-[#2C2C2C] text-[16px] lg:text-[24px] md:text-[24px] leading-[24px] md:leading-[40px] tracking-tight font-normal">
                  {it.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-[8px] md:pt-[40px]">
          <button
            type="button"
            className="inline-flex items-center lg:text-[14px] font-medium hover:cursor-pointer justify-center bg-[#1656A5] text-white rounded-[12px] h-10 px-4 md:h-14 md:px-5 tracking-tight hover:opacity-90 transition"
          >
            Know more about EMI facilities
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmiOverview;
