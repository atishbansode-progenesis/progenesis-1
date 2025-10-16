import React from "react";
import Link from "next/link";
import { InfertilityIssue } from "./types";
import Image from "next/image";

interface InfertilityCardProps {
  issue: InfertilityIssue;
  basePath: "female" | "male";
}

export const InfertilityCard: React.FC<InfertilityCardProps> = ({
  issue,
  basePath,
}) => {
  return (
    <Link
      href={`/infertility/${basePath}/${issue.slug}`}
      className="flex flex-col items-center justify-between w-full h-[400px] p-4 md:px-6 md:py-6 gap-[16px] rounded-[16px] bg-[#1656A5]/5"
    >
      <h3 className="text-[#2C2C2C] text-[16px] md:text-[20px] lg:text-2xl font-normal lg:leading-[32px] leading-[24px] md:leading-[28px] text-start w-full font-[Manrope]">
        {issue.title}
      </h3>
      <div className="relative flex-1 w-full max-h-[250px]">
        <Image
          src={issue.image}
          alt={issue.title}
          fill
          className="object-contain mix-blend-multiply"
        />
      </div>
    </Link>
  );
};
