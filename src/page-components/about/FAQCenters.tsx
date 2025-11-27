"use client";
import React, { useState } from "react";
import Link from "next/link";

interface FAQ {
  uid: string;
  question: string;
  answer: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

interface FAQCentersProps {
  data: FAQ[];
  isLoading?: boolean;
}

const FAQCenters: React.FC<FAQCentersProps> = ({ data, isLoading = false }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  if (isLoading) {
    return (
      <section
        id="faqs"
        className="w-full bg-[#FAFAFA] p-4 lg:px-[120px] lg:py-[80px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] lg:grid-cols-[500px_1fr] gap-10 md:gap-[80px] lg:gap-[120px] items-start">
          <div>
            <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-2 py-1 rounded-[8px]">
              FAQ's
            </span>
            <div className="pb-5">
              <h2 className="lg:text-[40px] text-[32px] md:text-[40px] leading-10 font-normal md:leading-[56px] text-[#2C2C2C]">
                Quick answers to the
                <br />
                <span className="text-[#94BA3D]"> most common</span>
                <br />
                <span className="text-[#94BA3D]">fertility-related</span>
                <br />
                <span className="text-[#94BA3D]">questions.</span>
              </h2>
            </div>
          </div>
          <div className="max-w-[832px] w-full">
            <div className="text-center py-8 text-[#606060]">Loading FAQs...</div>
          </div>
        </div>
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section
        id="faqs"
        className="w-full bg-[#FAFAFA] p-4 lg:px-[120px] lg:py-[80px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] lg:grid-cols-[500px_1fr] gap-10 md:gap-[80px] lg:gap-[120px] items-start">
          <div>
            <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-2 py-1 rounded-[8px]">
              FAQ's
            </span>
            <div className="pb-5">
              <h2 className="lg:text-[40px] text-[32px] md:text-[40px] leading-10 font-normal md:leading-[56px] text-[#2C2C2C]">
                Quick answers to the
                <br />
                <span className="text-[#94BA3D]"> most common</span>
                <br />
                <span className="text-[#94BA3D]">fertility-related</span>
                <br />
                <span className="text-[#94BA3D]">questions.</span>
              </h2>
            </div>
          </div>
          <div className="max-w-[832px] w-full">
            <div className="text-center py-8 text-[#606060]">
              No FAQs available for this center at the moment.
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="faqs"
      className="w-full bg-[#FAFAFA] p-4 lg:px-[120px] lg:py-[80px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] lg:grid-cols-[500px_1fr] gap-10 md:gap-[80px] lg:gap-[120px] items-start">
        {/* Left intro */}
        <div>
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-2 py-1 rounded-[8px]">
            FAQ's
          </span>
          <div className="pb-5">
            <h2 className="lg:text-[40px] text-[32px] md:text-[40px] leading-10 font-normal md:leading-[56px] text-[#2C2C2C]">
              Quick answers to the
              <br />
              <span className="text-[#94BA3D]"> most common</span>
              <br />
              <span className="text-[#94BA3D]">fertility-related</span>
              <br />
              <span className="text-[#94BA3D]">questions.</span>
            </h2>
          </div>
          <p className="mt-1 text-[16px] md:text-[16px] md:leading-6 font-normal text-[#2C2C2C]">
            Didn't find what you are looking for?
            <br />
            Checkout{" "}
            <Link href="/blog" className="text-[#1656A5] underline decoration-[#2C2C2C80] decoration-[0.5px]">
              Patient Resources
            </Link>{" "}
            section to know more.
          </p>
        </div>

        {/* Right content */}
        <div className="max-w-[832px] w-full">
          {/* Accordion list */}
          <div className="space-y-3">
            {data.map((item, i) => {
              const open = i === openIndex;
              return (
                <div
                  key={`${item.uid}-${i}`}
                  className={`bg-[#FFFFFF] overflow-hidden rounded-[16px]`}
                >
                  <button
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-3 hover:cursor-pointer text-left md:py-4 py-4 rounded-2xl text-[14px] md:text-[15px] text-[#2C2C2C]"
                  >
                    <span className="pl-4 pr-2">{item.question}</span>
                    <span className="text-gray-500 pr-2">
                      {open ? (
                        <img
                          src="/images/icons/upward.svg"
                          className="w-[10px] h-[10px] object-contain"
                          alt="collapse"
                        />
                      ) : (
                        <img
                          src="/images/icons/downward.svg"
                          className="w-[10px] h-[10px] object-contain"
                          alt="expand"
                        />
                      )}
                    </span>
                  </button>
                  {open && (
                    <div className="pl-4 pb-4 pr-4 text-left md:text-[16px] md:leading-6 text-[14px] text-[#4B5563] whitespace-pre-line">
                      {item.answer}
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

export default FAQCenters;