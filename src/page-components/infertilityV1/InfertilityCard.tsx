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
      className="relative flex flex-col items-center justify-start w-full h-[400px] p-4 md:px-6 md:py-6 gap-[16px] rounded-[16px] bg-[#1656A5]/5 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={issue.image}
        alt={issue.title}
        fill
        className="object-cover object-center mix-blend-multiply z-0"
      />
      
      {/* Content */}
      <h3 className="relative z-10 text-[#2C2C2C] text-[24px] leading-[32px] tracking-[-0.64px] md:text-[24px] md:leading-[40px] md:tracking-[-0.64px] self-start max-w-[200px] md:max-w-full font-[Manrope]">
        {issue.title}
      </h3>
    </Link>
  );
};