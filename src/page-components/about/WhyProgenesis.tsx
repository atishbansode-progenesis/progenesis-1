"use client";
import React, { useState, useEffect } from "react";

type Slide = {
  title: string;
  number: string;
  desc: string;
  image: string;
  bannerHeading: string;
  bannerPara?: string;
};

const slides: Slide[] = [
  {
    title: "Personalized, Holistic Care",
    number: "01",
    desc:
      "Every journey is unique. We design your treatment around your story, not just your symptoms.",
    image: "/images/why1.png",
    bannerHeading: "Care That Feels Like It’s Just for You.",
  },
  {
    title: "Always Accessible",
    number: "02",
    desc:
      "We’re here whenever you need—answers, reassurance, or simply someone who understands.",
    image: "/images/why2.png",
    bannerHeading: "We’re always here for you, completely.",
  },
  {
    title: "Transparency Builds Trust",
    number: "03",
    desc:
      "You deserve to know everything—clearly, honestly, and respectfully.",
    image: "/images/why3.png",
    bannerHeading: "Every Step With Honest Care.",
    bannerPara:
      "From diagnosis to delivery, you’ll always know what’s happening and why because trust grows with transparency.",
  },
  {
    title: "Your Journey, Your Say",
    number: "04",
    desc:
      "We empower you to make confident, informed choices at every step of your parenthood journey.",
    image: "/images/why4.png",
    bannerHeading: "Because Parenthood is Your Choice.",
  },
];

const WhyProgenesis: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const current = slides[active];
  const INTERVAL_DURATION = 5000;

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_DURATION);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / (INTERVAL_DURATION / 50));
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [active]);

  return (
    <section
      id="why-choose-us"
      className="w-full bg-[#1656A50D] px-[0.3125vw] lg:px-[4.6875vw] py-[0.625vw] lg:py-[0.833vw] section-spacing"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-[0.52vw] lg:gap-[4vw] items-start">
        <div className="flex flex-col ">
          <div className="csLg:mb-[12.76vw] mb-10">
            <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] px-[0.9375vw] py-[0.625vw] rounded-[0.416vw]">
              Why choose us
            </span>
            <h2 className="csLg:mt-[0.625vw] mt-6 text-[32px] csLg:text-[2.093vw] leading-[2.083vw] font-normal text-[#2C2C2C] pb-[1.25vw]">
              Why Progenesis?
            </h2>
          </div>

          {/* Mobile Image */}
          <div className="block lg:hidden relative w-full rounded-2xl overflow-hidden min-h-[220px] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl bg-no-repeat"
              style={{ backgroundImage: `url(${current.image})` }}
            />
          </div>

          <div className="csLg:space-y-[0.833vw] space-y-[16px] mt-6 csLg:mt-0">
            {slides.map((s, idx) => {
              const activeRow = idx === active;
              return (
                <button
                  key={s.number}
                  onClick={() => setActive(idx)}
                  className="w-full text-left group hover:cursor-pointer"
                >
                  <div className="h-[1px] w-full bg-[#A5A5A5] relative">
                    {activeRow && (
                      <div
                        className="absolute left-0 top-[-1px] h-[2px] bg-[#1656A5] transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-[0.833vw]">
                    <div
                      className={`text-[16px] lg:leading-[2.083vw] lg:text-[1.75vw] font-normal ${
                        activeRow ? "text-[#1a1a1a]" : "text-[#2C2C2C]"
                      }`}
                    >
                      {s.title}
                    </div>
                    <span className="text-[#606060] font-semibold text-[16px] csLg:text-[0.833vw]">
                      {s.number}
                    </span>
                  </div>

                  {activeRow && (
                    <p className="csLg:text-[0.740vw] text-[16px] text-[#606060] csLg:max-w-[18.75vw]">
                      {s.desc}
                    </p>
                  )}

                  {idx === slides.length - 1 && (
                    <div className="mt-[0.833vw] h-[1px] w-full  bg-[#A5A5A5] relative" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
 

        <img src={current.image} className="hidden lg:block mt-20"  />
      
      </div>
    </section>
  );
};

export default WhyProgenesis;
