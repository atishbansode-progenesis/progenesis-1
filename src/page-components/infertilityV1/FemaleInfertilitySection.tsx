import React from "react";
import { InfertilityCard } from "./InfertilityCard";
import { InfertilityIssue } from "./types";

interface FemaleInfertilitySectionProps {
  issues: InfertilityIssue[];
}

export const FemaleInfertilitySection: React.FC<FemaleInfertilitySectionProps> = ({
  issues,
}) => {
  return (
    <section
      id="fertility-section"
      className="bg-[#FFFFFF] pt-[50px] pb-[80px]"
    >
      <div className="px-4 md:px-[80px] lg:px-[120px]">
        <div className="w-full flex flex-col xl:flex-row justify-between gap-[8px]">
          <div className="w-full">
            <button className="cursor-pointer bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
              Female Infertility Causes
            </button>
            <h2 className="text-[32px] lg:text-[48px] md:text-[48px] font-light text-[#2C2C2C] leading-[40px] md:leading-[56px]">
              Common Causes of Female Infertility You Should Know
            </h2>
          </div>
          <div className="w-full">
            <p className="text-[#2C2C2C] font-light text-[20px] md:text-[32px] leading-[28px] md:leading-[40px]">
              Female infertility can arise from various health conditions that affect ovulation, egg quality, or the reproductive system. Understanding these causes—
              <span className="">
                such as PCOS, low AMH, fibroids, or repeated treatment failures—helps in taking timely steps toward the right medical care and treatment options.
              </span>
            </p>
          </div>
        </div>

        <div className="grid gap-2 mt-[80px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-items-center">
          {issues.map((issue) => (
            <InfertilityCard key={issue.id} issue={issue} basePath="female" />
          ))}
        </div>
      </div>
    </section>
  );
};
