"use client";
import React, { useState } from "react";

type Slide = {
  title: string;
  number: string;
  desc: string;
  image: string; // background image url
  bannerHeading: string;
  bannerPara?: string;
};

const slides: Slide[] = [
  {
    title: "Personalized, Holistic Care",
    number: "01",
    desc:
      "Every journey is unique. We design your treatment around your story, not just your symptoms.",
    image: "/images/why-1.png",
    bannerHeading: "Care That Feels Like It’s Just for You.",
  },
  {
    title: "Always Accessible",
    number: "02",
    desc:
      "We’re here whenever you need—answers, reassurance, or simply someone who understands.",
    image: "/images/why-2.png",
    bannerHeading: "We’re always here for you, completely.",
  },
  {
    title: "Transparency Builds Trust",
    number: "03",
    desc:
      "You deserve to know everything—clearly, honestly, and respectfully.",
    image: "/images/why-3.png",
    bannerHeading: "Every Step With Honest Care.",
    bannerPara:
      "From diagnosis to delivery, you’ll always know what’s happening and why because trust grows with transparency.",
  },
  {
    title: "Your Journey, Your Say",
    number: "04",
    desc:
      "We empower you to make confident, informed choices at every step of your parenthood journey.",
    image: "/images/why-4.png",
    bannerHeading: "Because Parenthood is Your Choice.",
  },
];

const WhyProgenesis: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const current = slides[active];

  return (
    <section
      id="why-choose-us"
      className="w-full bg-[#1656A50D] px-6 lg:px-[90px] py-12 lg:py-16 section-spacing"
    >
      {/* ✅ Below lg = single column (mobile/tablet), lg+ = two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 lg:gap-10 items-start">
        {/* Left column */}
        <div>
          <div className="why-bott-pad">
            <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] px-3 py-1 rounded-[8px]">
              Why choose us
            </span>
            <h2 className="mt-3 text-[36px] lg:text-[48px] leading-10 font-normal text-[#2C2C2C]">
              Why Progenesis?
            </h2>
          </div>

          {/* List */}
          <div className="mt-6 space-y-4 pt-8">
            {slides.map((s, idx) => {
              const activeRow = idx === active;
              return (
                <button
                  key={s.number}
                  onClick={() => setActive(idx)}
                  className="w-full text-left group hover:cursor-pointer"
                >
                  {/* Top separator */}
                  <div className="h-[1px] w-full bg-[#A5A5A5] relative">
                    {activeRow && (
                      <div className="absolute left-0 top-[-1px] h-[2px] w-60 bg-[#1656A5]" />
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <div
                      className={`text-[16px] lg:leading-10 lg:text-[32px] font-medium ${
                        activeRow ? "text-[#1a1a1a]" : "text-[#2C2C2C]"
                      }`}
                    >
                      {s.title}
                    </div>
                    <span className="text-[#606060] font-semibold">
                      {s.number}
                    </span>
                  </div>

                  {activeRow && (
                    <p className="text-[14px] text-[#606060] max-w-[360px]">
                      {s.desc}
                    </p>
                  )}

                  {idx === slides.length - 1 && (
                    <div className="mt-4 h-[1px] w-full bg-[#A5A5A5] relative" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right banner */}
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[604px] shadow-sm csLg:min-h-[720px] flex">
          <div
            className="absolute inset-0 bg-cover bg-center items-center"
            style={{ backgroundImage: `url(${current.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#EAF6FF]/40 via-white/10 to-[#D7E8FF]/30" />

          {/* Content */}
          <div className="relative z-10 w-full h-full">
            {/* Slide 1 */}
            {active === 0 && (
              <div className="absolute flex items-center justify-center text-center px-10">
                <h3 className="relative lg:left-40 lg:top-70 text-[26px] lg:text-[46px] font-semibold text-[#2C2C2C] max-w-[720px]">
                  {current.bannerHeading.includes("Like") ? (
                    <>
                      {current.bannerHeading.split("Like")[0]}Like
                      <br />
                      {current.bannerHeading.split("Like")[1].trim()}
                    </>
                  ) : (
                    current.bannerHeading
                  )}
                </h3>
              </div>
            )}

            {/* Slide 2 */}
            {active === 1 && (
              <div className="absolute top-6 lg:top-12 left-6 lg:left-14 pr-6">
                <h3 className="text-[26px] lg:text-[46px] font-semibold text-[#2C2C2C] max-w-[660px]">
                  {current.bannerHeading}
                </h3>
              </div>
            )}

            {/* Slide 3 */}
            {active === 2 && (
              <>
                <div className="absolute top-6 lg:top-12 right-6 lg:right-14 text-right pl-6">
                  <h3 className="text-[26px] lg:text-[36px] font-semibold text-[#2C2C2C] max-w-[620px]">
                    {current.bannerHeading}
                  </h3>
                </div>
                {current.bannerPara && (
                  <p className="absolute top-100 left-6 lg:top-150 lg:left-4 lg:text-[18px] text-[14px] text-[#606060] max-w-[520px] text-left">
                    {current.bannerPara}
                  </p>
                )}
              </>
            )}

            {/* Slide 4 */}
            {active === 3 && (
              <div className="absolute top-6 lg:top-12 left-1/2 -translate-x-1/2 text-center px-4">
                <h3 className="text-[26px] lg:text-[36px] font-semibold text-[#2C2C2C] max-w-[660px]">
                  {current.bannerHeading}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProgenesis;
