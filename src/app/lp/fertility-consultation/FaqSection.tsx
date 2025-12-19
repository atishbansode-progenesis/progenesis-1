"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type QA = { q: string; a: string };

const LpFaqs: QA[] = [
  {
    q: "Where is the nearest IVF center to me?",
    a: "Progenesis IVF has conveniently located clinics to serve you. Schedule a free consultation to find the center closest to you."
  },
  {
    q: "Do you have multiple IVF center locations?",
    a: "Yes, we have multiple convenient locations to serve you. You can find the clinic nearest to you, along with addresses and contact details."
  },
  {
    q: "What makes an IVF clinic the 'best'?",
    a: "The best IVF clinics offer high success rates, experienced specialists, advanced technology, personalized treatment plans, and comprehensive support."
  },
  {
    q: "Does the IVF center near me offer free consultations?",
    a: "Yes! Progenesis IVF offers completely free initial consultations at all our locations."
  },
  {
    q: "What services does a comprehensive IVF center provide?",
    a: "A full-service IVF center offers consultations, fertility assessments, IVF treatment, egg/sperm freezing, genetic testing, and ongoing support."
  },
  {
    q: "Why choose Progenesis as your IVF center?",
    a: "We combine expert doctors, state-of-the-art labs, personalized treatment plans, high success rates, and support throughout your entire journey."
  }
];

const FaqSection: React.FC = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="bg-[#fafafa] pt-[42px] h-auto md:pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] lg:grid-cols-[420px_1fr] gap-6 md:gap-8 lg:gap-10">
        {/* Left intro */}
        <div>
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-2 py-1 rounded-[8px] mb-4">
            FAQ's
          </span>
          <div style={{ paddingBottom: '20px' }}>
            <h2 className="text-[36px] md:text-[48px] leading-10 font-normal md:leading-[56px] text-[#2C2C2C]">
              Quick answers to the
              <span className="text-[#94BA3D]"> most common</span>
              <br />
              <span className="text-[#94BA3D]">questions.</span>
            </h2>
          </div>
        </div>

        {/* Right content - Accordion list */}
        <div>
          <div className="space-y-3">
            {LpFaqs.map((item, i) => {
              const open = i === openIndex;
              return (
                <div
                  key={i}
                  className="bg-[#FFFFFF] overflow-hidden rounded-[16px]"
                >
                  <button
                    aria-label="expand"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-3 hover:cursor-pointer text-left md:py-4 py-4 rounded-2xl text-[14px] md:text-[15px] text-[#2C2C2C]"
                  >
                    <span className="pl-4 pr-2">{item.q}</span>
                    <span className="text-gray-500 pr-2">
                      {open ? (
                        <img
                          src="/images/icons/upward.svg"
                          alt="upward arrow"
                          className="w-[10px] h-[10px] object-contain"
                        />
                      ) : (
                        <img
                          src="/images/icons/downward.svg"
                          alt="downward image"
                          className="w-[10px] h-[10px] object-contain"
                        />
                      )}
                    </span>
                  </button>
                  {open && (
                    <div className="pl-4 pb-4 pr-4 text-left md:text-[16px] md:leading-6 text-[14px] text-[#4B5563]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;