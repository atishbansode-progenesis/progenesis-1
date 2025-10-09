"use client"
import React, { useState } from "react";

const tabs = [
  { id: "why", label: "Why Get a Second Opinion?" },
  { id: "how", label: "How a Second Opinion Helps" },
  { id: "numbers", label: "Numbers That Set Us Apart" },
  { id: "care", label: "We Take Care of You" },
];

const OpinionNav: React.FC = () => {
  const [active, setActive] = useState<string>("why");

  const handleScroll = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - 20; // offset for any sticky header
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="w-full bg-[#FFFFFF]">
      <div className="section-spacing w-full px-6 md:px-8 lg:px-14 py-6">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          {tabs.map((t) => {
            const isActive = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                style={{padding:'8px'}}
                onClick={() => handleScroll(t.id)}
                className={[
                  "min-w-[251px] h-[56px] rounded-[18px]  inline-flex items-center justify-center text-[14px] font-medium transition-colors",
                  isActive
                    ? "bg-[#1656A5] text-[#F9F9F9] shadow"
                    : "bg-[#F9F9F9] text-[#1656A5] border border-[#1656A5]/60 hover:bg-[#1656A5]/5",
                ].join(" ")}
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

export default OpinionNav;
