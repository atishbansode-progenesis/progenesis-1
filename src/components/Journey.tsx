"use client";

import React, { useState, useEffect } from "react";

const tabItems = [
  {
    storyNumber: "01",
    title: "Connect With Us",
    heading: "Begin your treatment journey",
    description: "Fill the form and our team will guide you:",
    bulletPoints: [
      "Clear answers to your doubts",
      "A personalized treatment plan",
      "Duration with checklist",
      "Pre & post-treatment guidance",
    ],
    image: "/InternationalPatients/connect.png",
  },
  {
    storyNumber: "02",
    title: "Secure Your Visa",
    heading: "Confirm your treatment & travel",
    description:
      "Once treatment and travel dates are confirmed, we issue a letter for your medical visa. Sharing your flight details with us is essential at this stage.",
    image: "/InternationalPatients/Visa.png",
  },
  {
    storyNumber: "03",
    title: "Arrive & Begin Treatment",
    heading: "We're with you at every step",
    description:
      "Upon arrival in India, our team welcomes you, helps complete airport formalities, and arranges your appointment at Progenesis.",
    image: "/InternationalPatients/arrive.png",
  },
];

const Journey: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const INTERVAL_DURATION = 5000;

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabItems.length);
    }, INTERVAL_DURATION);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (INTERVAL_DURATION / 50);
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [activeTab]);

  return (
    <section id="why-1" className="w-full bg-white overflow-hidden">
      <div className="max-w-[2500px] ">
        {/* Desktop layout */}
        <div className="hidden csLg:flex flex-col ">
          {/* Right Column: Paragraph + Image + Info Box */}
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-2">
              {/* Paragraph (top of right column) */}
              <div className="">
                <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">
                  Your Journey, Made Simple
                </span>
                <h2 className="text-4xl lg:text-[40px] font-normal text-[#2C2C2C] leading-[50px] tracking-tight font-[Manrope]">
                  Your Steps to Begin
                </h2>
              </div>
              <p className="text-[16px] line-height-[24px] tracking-tight text-[#2C2C2C] lg:line-height-[40px] lg:text-[24px]">
                A clear, step-by-step process to make your fertility treatment
                in India smooth, transparent, and stress-free.
              </p>
            </div>
            {/* Image + Info Box */}
            <div className="grid grid-cols-2">
              {/* Left Column: Heading + Tab List */}
              <div className="flex flex-col gap-8 lg:gap-12 ">
                {/* Heading */}

                {/* Tab List */}
                <div className="flex flex-col col-span-3 pt-4 max-w-[444px]">
                  {tabItems.map((item, index) => (
                    <div key={index} className="">
                      <div className="h-[1px] w-full bg-[#A5A5A5]  relative ">
                        {activeTab === index && (
                          <div
                            className="absolute left-0 top-[-1px] h-[2px] bg-[#1656A5] transition-all duration-100 ease-linear"
                            style={{ width: `${progress}%` }}
                          />
                        )}
                      </div>
                      <div
                        onClick={() => setActiveTab(index)}
                        className="flex items-center justify-between cursor-pointer py-[16px] lg:flex-nowrap lg:gap-4"
                      >
                        <span
                          className={`text-lg md:text-[24px] lg:text-[28px] font-medium font-[Manrope] tracking-tight lg:whitespace-nowrap ${
                            activeTab === index
                              ? "text-[#1656A5]"
                              : "text-[##606060] opacity-50"
                          }`}
                        >
                          {item.title}
                        </span>
                        <span
                          className={`w-2 h-2 rounded-full ml-4 ${
                            activeTab === index ? "bg-[#1656A5]" : "bg-gray-400"
                          }`}
                        />
                      </div>
                      {/* Separator line (after every tab) */}
                      {index === tabItems.length - 1 && (
                        <div className="h-[1px] w-full bg-[#A5A5A5] relative"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col csLg:flex-row gap-4  md:gap-4 lg:gap-4 w-auto max-w-full overflow-hidden ">
                {/* Image */}
                <div className="w-full bg-[#E8EFF6] max-w-[400px] max-h-[400px] lg:max-w-[300px] lg:max-h-[300px]  h-full rounded-[8px] md:rounded-[12px] lg:rounded-[16px] overflow-hidden flex-shrink-0 flex items-start justify-center">
                  <img
                    src={tabItems[activeTab].image}
                    alt={tabItems[activeTab].title}
                    className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out"
                  />
                </div>

                {/* Info Box */}
                <div className="flex flex-col justify-start min-w-[120px] gap-2 w-full lg:flex-1  pt-2.5 px-4">
                  <div>
                    <h3 className="text-[#94BA3D] mb-[4px]">
                      {tabItems[activeTab].storyNumber}
                    </h3>
                    <h3 className="text-[#1656A5] font-medium text-[16px] lg:text-[32px] lg:leading-[40px] tracking-tight font-[Manrope]">
                      {tabItems[activeTab].heading}
                    </h3>
                  </div>

                  <div className="text-[14px] line-height-[20px] text-[#2C2C2C] tracking-tight font-[Manrope] lg:text-[16px] lg:line-height-[24px]">
                    {typeof tabItems[activeTab].description === 'string' ? (
                      <>
                        <p className="mb-2">{tabItems[activeTab].description}</p>
                        {tabItems[activeTab].bulletPoints && (
                          <ul className="list-disc pl-5 space-y-1">
                            {tabItems[activeTab].bulletPoints.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <p>{tabItems[activeTab].description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & tablet layout: visible below large screens */}
        <div className="flex flex-col gap-6 md:gap-8 csLg:hidden">
          {/* Mobile heading */}
          <div>
            <span className="inline-block bg-[#E9F0FF] text-[#1656A5] text-[12px] px-3 py-2 rounded-[8px] mb-[8px]">
              Your Journey, Made Simple
            </span>
            <h2 className="text-3xl font-normal text-[#2C2C2C] leading-[42px] tracking-tight font-[Manrope]">
              Your Steps to Begin
            </h2>
          </div>

          {/* Intro paragraph */}
          <p className="text-base leading-[28px] text-[#2C2C2C] tracking-tight font-[Manrope]">
            A clear, step-by-step process to make your fertility treatment in
            India smooth, transparent, and stress-free.
          </p>

          {/* All stories stacked */}
          {tabItems.map((item) => (
            <div
              key={item.storyNumber}
              className="flex flex-col gap-[16px] pt-[16px] pb-2.5 w-full border-b border-gray-200"
            >
              {/* Info Box */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#94BA3D]">{item.storyNumber}</h3>
                <h3 className="text-[#2C2C2C] font-medium text-2xl leading-tight font-[Manrope]">
                  {item.heading}
                </h3>
                {typeof item.description === 'string' ? (
                  <>
                    <p className="text-base text-gray-700 leading-6 tracking-tight font-[Manrope] mb-1">
                      {item.description}
                    </p>
                    {item.bulletPoints && (
                      <ul className="list-disc pl-5 space-y-1 text-base text-gray-700 leading-6 tracking-tight font-[Manrope]">
                        {item.bulletPoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <p className="text-base text-gray-700 leading-6 tracking-tight font-[Manrope]">
                    {item.description}
                  </p>
                )}
              </div>
              {/* Image */}
              <div className="w-full bg-[#E8EFF6] aspect-[4/3] rounded-[16px] md:rounded-[20px] lg:rounded-[24px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Journey;