import React from "react";
import "../about/AboutMain.css";

type ValueItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const items: ValueItem[] = [
  {
    icon: "/Careers/careers1.svg",
    title: "Driven by Purpose",
    description:
      "We exist to give hope and solutions to couples who dream of parenthood.",
  },
  {
    icon: "/Careers/careers2.svg",
    title: "Patient-First",
    description:
      "Empathy and expertise ensure every patient feels cared for at every step.",
  },
  {
    icon: "/Careers/careers3.svg",

    title: "Innovation in Action",
    description:
      "With advancing tech and personalized solutions, we deliver evolving fertility care.",
  },
  {
    icon: "/Careers/careers4.svg",

    title: "Excellence Every Day",
    description:
      "From labs to consultations, we set and uphold world‑class standards.",
  },
  {
    icon: "/Careers/careers5.svg",

    title: "Teamwork that Inspires",
    description:
      "Collaboration drives our success — we grow stronger by trusting and respecting each other.",
  },
  {
    icon: "/Careers/careers6.svg",

    title: "Integrity Always",
    description:
      "We practice honesty and transparency to build trust with patients and partners.",
  },
];

const CareersValues = () => {
  return (
    <section className="section-spacing bg-[#FEFEFE]">
      <div className="max-w-5xl md:pb-14">
  <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">
    What Defines Us
  </span>

  {/* Desktop version */}
  <h2 className="hidden md:block mt-4 font-manrope font-normal csLg:text-[48px] text-[32px] leading-tight text-[#2C2C2C] tracking-[-0.02em]">
    Every company has its unique <br /> DNA. Here’s ours
  </h2>

  {/* Mobile version */}
  <h2 className="block md:hidden mt-4 font-manrope font-normal csLg:text-[48px] text-[32px] leading-tight text-[#2C2C2C] tracking-[-0.02em]">
    Every company has its unique DNA. Here’s <br /> ours
  </h2>
</div>


   <div className=" mt-4 gap-y-4 md:mt-14 grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3 md:gap-x-16 md:gap-y-12">
  {items.map((item, idx) => (
    <div
      key={idx}
      className=" md:bg-transparent p-1 md:p-0 rounded-xl md:pb-8 border-b border-[#1656A50D]"
    >
      {/* Icon + Title */}
<div className="flex items-center gap-2 md:gap-4">
        <img
          src={item.icon}
          alt={item.title}
          className="w-[19px] h-[19px] md:w-8 md:h-8 object-contain"
        />
        <h3 className="font-normal lg:text-[32px] text-[16px] md:text-[25px] text-gray-900 ">
          {item.title}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-2 text-[16px] leading-6 text-[#606060]/70 max-w-md">
        {item.description}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default CareersValues;
