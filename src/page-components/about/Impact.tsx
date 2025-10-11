"use client";
import React from "react";

const items = [
  {
    icon: '/images/icons/impact1.svg',
    title: "Health Outreach",
    desc: "Awareness camps and community programs bringing fertility care closer to all.",
  },
  {
    icon: '/images/icons/impact2.svg',
    title: "Medical Education",
    desc: "Training doctors through CME sessions to spread knowledge and reduce stigma.",
  },
  {
    icon: "/images/icons/impact3.svg",
    title: "Expanding Presence",
    desc: "Growing across Maharashtra with advanced fertility centers and world-class labs.",
  },
  {
    icon: "/images/icons/impact4.svg",
    title: "Future Partnerships",
    desc: "Welcoming investors to join us in shaping tomorrow’s fertility care.",
  },
];

const Impact: React.FC = () => {
  return (
    <section id="impact-growth" className="w-full font-[Manrope] bg-[#F5FAFF] section-spacing" >
      {/* Label & Heading */}
      <div className="max-w-5xl md:max-w-3xl lg:max-w-5xl ">
        <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-2 py-1 rounded-[8px]" >Impact & Growth</span>
        <div className="hidden md:block">
        <h2 className="csLg:text-[48px] lg:leading-[56px]leading-[40px] text-[32px] tracking-tight text-[#2C2C2C] font-normal pt-2 md:mb-5 lg:mb-10">
          Extending care through
          <br />
          community initiatives while
          <br />
          building a strong future together.
        </h2>
        </div>
        <div className="block md:hidden">
        <h2 className="csLg:text-[48px] lg:leading-[56px]leading-[40px] text-[32px] tracking-tight text-[#2C2C2C] font-normal pt-2 md:mb-5 lg:mb-10">
          Extending care through
        
          community initiatives while
          
          building a strong future together.
        </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 pt-10">
        {items.map((it, idx) => (
          <div key={idx} className="bg-[#EEF5FF] backdrop-blur-sm rounded-2xl p-4 lg:py-[30px] lg:px-[20px] min-h-[180px] md:min-h-[220px] flex flex-col">
            <div className="text-[#1656A5] text-2xl mb-6"><img src={it.icon} alt={it.title} className="w-[30px] h-[30px] object-contain" /></div>
            <h3 className="text-[20px] md:text-[26px] font-normal text-[#2C2C2C] mb-2">{it.title}</h3>
            <p className="mt-1 text-[14px] leading-[22px] text-[#606060]">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
