"use client";
import React, { useState, useEffect, useRef } from "react";

type Slide = {
  title: string;
  number: string;
  desc: string;
  image: string;
  imageMobile: string;
  bannerHeading: string;
  bannerPara?: string;
};

const slides: Slide[] = [
  {
    title: "Excellence You Can Trust",
    number: "01",
    desc:
      "High success rates backed by ethical care, transparency, and trusted medical expertise.",
    image: "/images/why1.png",
    imageMobile:"/images/why1-m.png",
    bannerHeading: "Care That Feels Like It’s Just for You.",
  },
  {
    title: "Redefining Patient Care",
    number: "02",
    desc:
      "We’re here whenever you need—answers, reassurance, or simply someone who understands.",
    image: "/images/why2.png",
    imageMobile:"/images/why2-m.png",
    bannerHeading: "Supportive, personal care built around your comfort, needs, and confidence.",
  },
  {
    title: "Advanced ART Labs",
    number: "03",
    desc:
      "You deserve to know everything—clearly, honestly, and respectfully.",
    imageMobile:"/images/why3.png",
    image: "/images/why3.png",
    bannerHeading: "Every Step With Honest Care.",
    bannerPara:
      "Advanced IVF and expert embryology delivering precise, high-quality fertility care.",
  },
  {
    title: "Trusted Quality & Safety",
    number: "04",
    desc:
      "We empower you to make confident, informed choices at every step of your parenthood journey.",
    image: "/images/why4.png",
    imageMobile:"/images/why4-m.png",
    bannerHeading: "Global-standard protocols, strict quality systems, and complete safety at every step.",
  },
  {
    title: "Compassion-Led Care",
    number: "05",
    desc:
      "Support that truly understands your emotions, journey, and the hope behind every step.",
    image: "/images/why5.png",
    imageMobile:"/images/why5-m.png",
    bannerHeading: "Global-standard protocols, strict quality systems, and complete safety at every step.",
  },
  {
    title: "Proven Innovation",
    number: "06",
    desc:
      "Cutting-edge fertility solutions backed by research, technology, and consistently proven results.",
    image: "/images/why6.png",
    imageMobile:"/images/why6-m.png",
    bannerHeading: "Global-standard protocols, strict quality systems, and complete safety at every step.",
  },
];

const WhyProgenesis: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement | null>(null);

  // interval refs so we can clear them reliably
  const slideIntervalRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  const current = slides[active];
  const INTERVAL_DURATION = 5000; // ms

  // Observe whether component is in viewport
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // consider visible if any intersection (you can tune threshold)
          setIsInView(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.15, // start playing when ~15% is visible; tweak as needed
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Start/stop timers based on visibility
  useEffect(() => {
    // helper to clear intervals
    const clearTimers = () => {
      if (slideIntervalRef.current !== null) {
        window.clearInterval(slideIntervalRef.current);
        slideIntervalRef.current = null;
      }
      if (progressIntervalRef.current !== null) {
        window.clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };

    clearTimers();

    if (isInView) {
      // reset progress when coming into view
      setProgress(0);

      // slide change interval
      slideIntervalRef.current = window.setInterval(() => {
        setActive((prev) => (prev + 1) % slides.length);
      }, INTERVAL_DURATION);

      // progress bar interval: increases every 50ms (same logic as original)
      const progressStep = 100 / (INTERVAL_DURATION / 50);
      progressIntervalRef.current = window.setInterval(() => {
        setProgress((prev) => {
          const next = prev + progressStep;
          return next >= 100 ? 0 : next;
        });
      }, 50);
    } else {
      // when out of view, reset progress to 0 and don't auto-advance
      setProgress(0);
    }

    // cleanup when effect re-runs or component unmounts
    return () => clearTimers();
    // only depends on isInView (not on active) so intervals won't be recreated on every slide change
  }, [isInView]);

  // when user manually clicks a slide row, reset progress to 0
  const handleSetActive = (idx: number) => {
    setActive(idx);
    setProgress(0);
  };

  return (
    <section
      ref={containerRef}
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
              style={{ backgroundImage: `url(${current.imageMobile})` }}
            />
          </div>

          <div className="csLg:space-y-[0.833vw] space-y-[16px] mt-6 csLg:mt-0">
            {slides.map((s, idx) => {
              const activeRow = idx === active;
              return (
                <button
                  key={s.number}
                  onClick={() => handleSetActive(idx)}
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

        <img src={current.image} className="hidden lg:block mt-55" />
      </div>
    </section>
  );
};

export default WhyProgenesis;
