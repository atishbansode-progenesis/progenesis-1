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
    <div className="w-full bg-white sticky top-0 z-20 p-4 csLg:pt-[30px] csLg:pb-[20px] csLg:px-[120px]">
      {/* Mobile Version - Filled Button Style */}
      <div className="flex csLg:hidden flex-wrap justify-start items-start gap-4 md:gap-6 text-left">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              onTabClick(cat.id);
            }}
            className={`
              cursor-pointer px-[10px] py-[10px] md:px-[20px] md:py-[16px]
              rounded-[8px] md:rounded-[16px]
              font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px]
              tracking-[-0.28px] transition-all duration-200
              ${activeTab === cat.id
                ? "bg-[#1656A5] text-white shadow-md"
                : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Desktop Version - Underline Tab Style */}
      <div className="hidden csLg:flex flex-wrap w-fit justify-start items-start gap-8 md:gap-12 text-left border-b border-gray-200">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              onTabClick(cat.id);
            }}
            className={`
              cursor-pointer pb-4
              font-[Manrope] text-[12px] md:text-[16px] font-medium leading-[24px]
              tracking-[-0.28px] transition-all duration-200
              relative
              ${activeTab === cat.id
                ? "text-[#1656A5]"
                : "text-[#606060] hover:text-[#1656A5]"
              }
            `}
          >
            {cat.label}
            {activeTab === cat.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#1656A5]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}