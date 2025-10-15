import React from "react";
import { Category } from "./types";

interface CategoryTabsProps {
  categories: Category[];
  activeTab: string;
  onTabClick: (id: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeTab,
  onTabClick,
}) => {
  return (
    <div className="w-full bg-white pt-[20px] md:pt-[50px] pb-[20px] md:pb-[80px] px-[12px] md:px-[80px] xl:px-[120px]">
      <div className="flex flex-wrap justify-start items-start lg:gap-[24px] gap-3 md:gap-4 text-left">
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
    </div>
  );
};
