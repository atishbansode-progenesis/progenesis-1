import React from "react";
import { InfertilityIssue } from "./types";
import Link from "next/link";
import Image from "next/image";

interface MaleInfertilitySectionProps {
  issues: InfertilityIssue[];
}

export const MaleInfertilitySection: React.FC<MaleInfertilitySectionProps> = ({
  issues,
}) => {
  return (
    <section
      id="fertility-mini-section"
      className="bg-[#FAFAFA] p-4 md:px-[120px] md:py-[80px]"
    >
      <div className="">
        <div className="w-full flex flex-col xl:flex-row justify-between gap-[8px]">
          <div className="w-full">
            <button className="cursor-pointer bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
              Male Infertility Causes
            </button>
            <h2 className="text-[20px] md:text-[32px] lg:text-[40px] md:text-[40px] font-light text-[#2C2C2C] leading-[40px] md:leading-[56px]">
              Understanding the Causes<br/> of Male Infertility
            </h2>
          </div>
          <div className="w-full">
            <p className="text-[#2C2C2C] font-light text-[20px] md:text-[24px] leading-[28px] md:leading-[40px]">
              Male infertility can result from issues like low sperm count, azoospermia, or erectile dysfunction.
              <span className="">
                Recognizing these causes early is the first step toward effective treatment and improving the chances of conception.
              </span>
            </p>
          </div>
        </div>

        <div className="grid mt-[40px] gap-[8px] lg:pt-[120px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center xl:justify-start lg:rounded-[16px]">
          {issues.map((item) => (
            <Link
              href={`/infertility/male/${item.slug}`}
              className="flex flex-col items-center justify-between w-full h-[400px] px-6 pt-6 pb-[30px] gap-[16px] rounded-[16px] bg-[#1656A5]/5"
            >
              <h3 className="text-[#2C2C2C] text-[16px] md:text-[20px] lg:text-2xl font-normal lg:leading-[32px] leading-[24px] md:leading-[28px] text-start w-full font-[Manrope]">
                {item.title}
              </h3>
              <div className="relative flex-1 w-full max-h-[250px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};