import React from "react";
import Image from "next/image";

interface ProcedureStepsProps {
  tag?: string;
  heading: string;
  steps: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

export default function ProcedureSteps({ tag, heading, steps }: ProcedureStepsProps) {
  return (
    <section id="procedure" className="w-full bg-[#FAFAFA] px-4 py-4 md:px-[120px] md:py-[80px]   scroll-mt-[120px]">
      {tag && (
        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
      )}

      <h2 className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] mb-12">
        {heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col bg-white rounded-[16px] overflow-hidden shadow-sm transition ">
            <div className="h-[260px] md:h-[300px]">
              <Image
                src={step.image}
                alt={step.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#F7FAFC] p-6 ">
              <span className="text-[#1656A5]  text-[18px] font-normal block mb-5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[#2C2C2C]  text-[18px] md:text-[20px] font-normal mb-1">
                {step.title}
              </h3>
              <p className="text-[#2C2C2C] text-[14px] md:text-[16px] opacity-80 leading-[24px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
