"use client";

import React, { useState } from "react";

type Opening = {
  title: string;
  meta: string[];
  primary?: boolean;
};

const openings: Opening[] = [
  {
    title: "Fellowship in Reproductive Medicine",
    meta: ["Full‑Time", "Pune", "Some Text"],
    primary: true,
  },
  {
    title: "Senior / Junior IVF Consultant",
    meta: ["Full‑Time", "Pune", "Some Text"],
  },
  {
    title: "Fellowship in Reproductive Medicine",
    meta: ["Full‑Time", "Pune", "Some Text"],
  },
];

const CareersOpenings = () => {
  const [activeJob, setActiveJob] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setActiveJob((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="section-spacing mx-auto px-4 py-16 -mt-[70px] ">
      <div className="max-w-5xl md:pb-10">
        <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">
          Current Openings
        </span>
        <h2 className="mt-4 font-manrope font-normal lg:text-[56px] lg:leading-[56px] leading-[40px] text-[32px] leading-tight text-[#2C2C2C] tracking-[-0.02em]">
          Find the right role and begin your journey at Progenesis.
        </h2>
      </div>

      <div className="divide-y divide-gray-200/60 rounded-2xl lg:mt-[10px] mt-[20px] overflow-hidden relative">
        {openings.map((job, idx) => (
          <div key={idx} className="relative">
            <div
              className="flex lg:text-[32px]   text-[16px] items-start justify-between gap-6 py-4 md:py-8 carr-opp-padd group font-manrope font-medium"
            >
              <div>
                <h3 className="font-manrope mt-[20px] lg:mt-[5px] lg:text-[32px] text-[16px] md:text-[28px] font-medium text-[#2C2C2C]">
                  {job.title}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-900">
                  {job.meta.map((m, i) => (
                    <React.Fragment key={i}>
                      <span className="font-manrope font-normal text-[#606060]">{m}</span>
                      {i < job.meta.length - 1 && (
                        <span className="mx-1 font-manrope font-normal text-[#D9D9D9]">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <button
                aria-label="Open role"
                onClick={() => handleClick(idx)}
                className={
    "group h-[40px] w-[56px] flex items-center justify-center lg:rounded-[50px] rounded-full border border-black " +
                  (job.primary
                    ? "bg-white text-gray-600 border border-[#1656A51A] hover:bg-[#1656A5] hover:text-[#FFFFFF]"
                    : "bg-white text-gray-600 border border-[#1656A51A] hover:bg-[#1656A5] hover:text-white")
                }
              >
                <img
                  src="/icons/arow.svg"
                  alt="arrow"
                  className="h-[12px] w-[12px] transition-colors duration-300 group-hover:invert"
                />
              </button>
            </div>

            {/* Mobile-only blue line below divider */}
            <div
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#1656A5] md:hidden transition-transform origin-left ${
                activeJob === idx ? "scale-x-100" : "scale-x-0"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareersOpenings;
