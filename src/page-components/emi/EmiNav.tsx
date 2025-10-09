import React, { useState } from "react";

const tabs = [
  { key: "financial", label: "Financial Support" },
  { key: "care", label: "We Take Care of You" },
  { key: "stats", label: "Stats and Metrics" },
];

const EmiNav: React.FC = () => {
  // ✅ Set first tab active by default (you can also start with "" if you want none active)
  const [active, setActive] = useState<string>("financial");

  const handleScroll = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="w-full bg-white relative z-[20]">
      <div className="px-4 py-4 md:px-[120px] md:py-[60px]">
        <div className="flex flex-wrap items-center gap-3 md:gap-6 relative z-[30]">
          {tabs.map((t) => {
            const isActive = t.key === active;

            return (
              <button
                key={t.key}
                type="button"
                onClick={() => handleScroll(t.key)}
                className={`rounded-[12px] font-medium h-10 md:h-[56px] transition-all duration-200 
                  text-sm md:text-base px-4 md:px-6 py-2 md:py-3 
                  border cursor-pointer
                  ${
                    isActive
                      ? "bg-[#1656A5] text-white border-transparent"
                      : "bg-white text-[#1656A5] border-[#1656A5]/60 hover:bg-[#1656A5] hover:text-white"
                  }`}
                style={{
                  zIndex: 50, // ✅ ensures clickable on desktop
                  position: "relative",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default EmiNav;
