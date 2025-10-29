import React from "react";

interface StatItem {
  id: number;
  icon: string;
  number: string;
  label: string;
}

const Detailing: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 1,
      icon: "/images/icons/syringe.svg",
      number: "11,000+",
      label: "Successful IVF",
    },
    {
      id: 2,
      icon: "/images/icons/cardiology.svg",
      number: "75%",
      label: "Success Rate*",
    },
    {
      id: 3,
      icon: "/images/icons/stethoscope.svg",
      number: "400+",
      label: "Specialists",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-20 lg:gap-[300px] ">
          {stats.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-[26px]">
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 lg:w-20 lg:h-20"
              />
              <div className="text-left gap-3 w-fit">
                <h3 className="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] font-normal tracking-tight text-[#1656A5]">{item.number}</h3>
                <p className="text-[16px] leading-[24px] font-semibold tracking-tight text-[#606060]/50 whitespace-nowrap">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detailing;
