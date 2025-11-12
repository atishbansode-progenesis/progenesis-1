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
      number: "18000+",
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
    <section className="px-4 py-8 lg:px-30 lg:py-20 bg-white overflow-x-hidden">
      <div className="flex flex-wrap justify-center gap-10 lg:flex-nowrap lg:gap-[300px]">
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-5 lg:gap-[26px]"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-8 h-8 lg:w-16 lg:h-16 flex-shrink-0"
            />
            <div className="text-left">
              <h3 className="text-[24px] lg:text-[48px] leading-[30px] lg:leading-[56px] font-normal tracking-tight text-[#1656A5]">
                {item.number}
              </h3>
              <p className="text-[16px] leading-[24px] font-semibold tracking-tight text-[#606060]/50 whitespace-nowrap">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Detailing;
