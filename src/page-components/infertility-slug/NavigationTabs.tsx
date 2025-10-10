// components/InfertilityIssues/NavigationTabs.tsx
import React from "react";

interface Category {
  id: string;
  label: string;
}

interface NavigationTabsProps {
  categories: Category[];
  activeTab: string;
  onTabClick: (id: string) => void;
}

export default function NavigationTabs({ categories, activeTab, onTabClick }: NavigationTabsProps) {
  return (
    <div className="w-full bg-white p-[16px] lg:p-[120px] lg:pb-0">
      <div className="flex flex-wrap justify-start items-start gap-3 md:gap-4 text-left">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onTabClick(cat.id)}
            className={`
              px-[10px] py-[10px] md:px-[20px] md:py-[16px]
              rounded-[8px] md:rounded-[16px]
              font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px]
              tracking-[-0.28px] transition-all duration-200
              ${
                activeTab === cat.id
                  ? "bg-[#1656A5] text-white shadow-md"
                  : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}