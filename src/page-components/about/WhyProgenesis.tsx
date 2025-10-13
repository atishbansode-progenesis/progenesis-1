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
  const current = slides[active];

  return (
    <section
      id="why-choose-us"
      className="w-full bg-[#1656A50D] px-6 lg:px-[90px] py-12 lg:py-16 section-spacing"
    >
      {/* Grid: mobile = single column, lg = 2 equal columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 lg:gap-10 items-start">
        {/* Left Column - Heading + Tabs */}
        <div className="flex flex-col">
          {/* Heading section (always stays on top) */}
          <div className="why-bott-pad">
            <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] px-3 py-1 rounded-[8px]">
              Why choose us
            </span>
            <h2 className="mt-3 text-[36px] lg:text-[48px] leading-10 font-normal text-[#2C2C2C] pb-6">
              Why Progenesis?
            </h2>
          </div>

          {/* Image — visible here only on mobile */}
          <div className="block lg:hidden relative w-full rounded-2xl overflow-hidden min-h-[220px] flex items-center justify-center">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-2xl bg-no-repeat "
              style={{ backgroundImage: `url(${current.image})` }}
            />
          </div>

          {/* Tabs */}
          <div className="lg:mt-6 space-y-4 pt-8 md:pt-8">
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

        {/* Right Column - Banner (only visible on desktop) */}
        {/* <div className="hidden lg:flex relative w-full rounded-2xl overflow-hidden min-h-[250px] md:min-h-full md:w-full items-center justify-center bg-red-700"> */}
         <img src={current.image} className=" hidden lg:block h-full"/>
        {/* </div> */}
      </div>
    </section>
  );
};

export default WhyProgenesis;
