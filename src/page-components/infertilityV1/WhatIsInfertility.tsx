import React from "react";

export const WhatIsInfertility: React.FC = () => {
  return (
    <section
      id="path"
      className="w-full py-[40px] md:py-[80px] px-[12px] md:px-[80px] xl:px-[120px] bg-[#FAFAFA]"
    >
      <button className="cursor-pointer bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
        What is Infertility
      </button>

      <h2 className="mt-2 text-[#2C2C2C] font-[Manrope] text-[28px] md:text-[40px] font-normal leading-[38px] md:leading-[50px]">
        Understanding the Basics of Infertility
      </h2>

      <hr className="my-6 md:my-0 border-t lg:mt-[80px] border-[#D4D4D4]" />

      <div className="w-full flex flex-col md:flex-row justify-between gap-3 mt-4">
        <h3 className="w-full text-[#2C2C2C] text-[16px] md:text-[32px] leading-[30px] md:leading-[40px] font-[Manrope] font-normal">
          Know the Facts
        </h3>

        <p className="w-full text-[#606060]/70 text-[16px] lg:text-[16px] md:text-[16px] leading-[24px] font-[Manrope]">
          Infertility is defined as the inability to achieve pregnancy after a
          year of regular, unprotected intercourse. It is a common condition
          that can affect both men and women, often linked to medical issues,
          lifestyle choices, or age-related factors. While the journey can feel
          overwhelming, it's important to remember that many couples face
          similar challenges. By identifying the underlying causes and seeking
          timely medical support, individuals can explore a range of effective
          treatments and move closer to fulfilling their dream of parenthood.
        </p>
      </div>
    </section>
  );
};
