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
        <div className="mb-4">
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">
            We Take Care of You
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-semibold tracking-tight text-[32px] sm:text-[32px] md:text-[48px] leading-tight mb-8 md:pb-12">
          Financial Support That Puts You First
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E3ECF7] rounded-[16px] h-[124px] md:h-[188px] px-5 py-4 flex items-center"
            >
              <div className="flex flex-col items-start justify-center gap-3">
                {/* Icon */}
                <img
                  src={it.icon}
                  alt={it.text}
                  className="w-[22px] h-[22px] md:w-8 md:h-8 object-contain"
                />
                {/* Text */}
                <p className="text-[#2C2C2C] text-[16px] md:text-[18px] leading-[1.6] font-medium">
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
            className="inline-flex items-center justify-center bg-[#1656A5] text-white rounded-[12px] h-10 px-4 md:h-11 md:px-5 shadow hover:opacity-90 transition"
          >
            Know more about EMI facilities
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmiOverview;
