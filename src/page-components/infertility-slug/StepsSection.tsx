// components/InfertilityIssues/StepsSection.tsx
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Step {
  id: number;
  label: string;
  title: string;
  items: string[];
  image: string;
}

interface StepsSectionProps {
  tag: string;
  heading: string;
  steps: Step[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

export default function StepsSection({ 
  tag, 
  heading, 
  steps, 
  autoRotate = true, 
  rotateInterval = 5000 
}: StepsSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotateInterval, steps.length]);

  return (
    <section id="treatment" className="w-full p-[16px] py-[40px] md:py-[80px] lg:px-[120px] bg-white font-[Manrope] scroll-mt-[120px]">
      <div>
        <div className="flex flex-col items-start justify-between">
          {/* Header */}
          <div className="mb-10 md:mb-20">
            <button className="cursor-pointer bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
              {tag}
            </button>
            <h2 className="max-w-2xl text-[#2C2C2C] text-[28px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] font-normal tracking-[-0.96px]">
              {heading}
            </h2>
          </div>

          {/* Buttons + Progress */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-20">
            {/* Step Buttons */}
            <div className="flex flex-wrap gap-2 mb-5 lg:mb-0">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`
                    px-[10px] py-[10px] md:px-[20px] md:py-[16px]
                    rounded-[8px] md:rounded-[16px]
                    font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px]
                    tracking-[-0.28px] transition-all duration-200
                    ${
                      i === activeStep
                        ? "bg-[#1656A5] text-white shadow-md"
                        : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
                    }
                  `}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* Progress bar + step counter */}
            <div className="hidden lg:flex gap-2 items-center">
              <div className="w-full md:w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1656A5] transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
              <div className="text-[#606060] font-normal text-base">
                {activeStep + 1} / {steps.length}
              </div>
            </div>
          </div>

          {/* Content + Image */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8">
            {/* Left Card */}
            <div className="w-[349px] bg-[#F1F7FC] justify-between rounded-2xl flex  flex-col p-5 gap-6">
              <div className="text-[28px] text-[#2C2C2C] font-normal lg:mb-6">
                {steps[activeStep].title}
              </div>
              <div className="flex flex-col gap-4">
                {steps[activeStep].items.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-[2px]">
                    <div className="text-[16px] leading-[24px] tracking-tight text-[#606060] font-normal">{`0${idx + 1}`}</div>
                    <div className="text-[16px] leading-[24px] tracking-tight text-[#2C2C2C] font-normal">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            {/* <div className="w-full max-w-[1248px] rounded-2xl overflow-hidden flex-1">
              <img
                key={activeStep}
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover block transition-opacity duration-500 ease-in-out"
                style={{ minHeight: '0', height: '100%' }}
              />
            </div> */}

            <div className="relative w-full max-w-[1248px] rounded-2xl overflow-hidden flex-1 aspect-[1248/601]">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === activeStep ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}