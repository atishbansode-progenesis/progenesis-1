"use client";
import React, { useRef, useEffect, useState } from "react";

const CareersLanding: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef<number>(0);
  const stepRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const computeStep = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    const cards = Array.from(el.querySelectorAll<HTMLDivElement>("div.snap-center"));
    if (cards.length < 2) return 0;
    return cards[1].offsetLeft - cards[0].offsetLeft;
  };

  const scrollToIndex = (idx: number, smooth = true) => {
    const el = scrollerRef.current;
    if (!el) return;
    const left = Math.round(idx * stepRef.current);
    el.scrollTo({
      left,
      behavior: smooth ? "smooth" : ("instant" as any),
    });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLDivElement>("div.snap-center");
    if (cards.length === 0) return;

    stepRef.current = computeStep();
    indexRef.current = 1;

    scrollToIndex(indexRef.current, false);

    const SCROLL_DURATION = 1000;
    const INTERVAL_TIME = 3000;

    const startAutoplay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        if (isPaused) return;

        indexRef.current += 1;
        scrollToIndex(indexRef.current, true);
        if (indexRef.current >= cards.length - 1) {
          indexRef.current = 1;

          setTimeout(() => {
            scrollToIndex(indexRef.current, false);
          }, SCROLL_DURATION);

        }
      }, INTERVAL_TIME);
    };

    startAutoplay();

    const handleResize = () => {
      stepRef.current = computeStep();
      scrollToIndex(indexRef.current, false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [isPaused]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    const handleTouchStart = () => setIsPaused(true);
    const handleTouchEnd = () => {
      setTimeout(() => setIsPaused(false), 2000);
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA]">
      <section
        className="section-spacing bg-gradient-to-r from-green-100 via-white to-sky-200 relative w-full h-[340px] sm:h-[380px] md:h-[500px] lg:h-[567px] overflow-hidden bg-no-repeat bg-cover bg-center flex items-start
                  bg-[url('/images/Careers-banner-Phone.png')] h-[444px] csLg:h-full sm:bg-[url('/images/Careers-banner.png')]"
      >
        <div className="container md:pr-0 grid grid-cols-12 items-start">
          <div className="col-span-12 csLg:col-span-8 flex flex-col gap-10">
            <p className="font-manrope csLg:text-[18px] text-[12px] leading-[26px] tracking-[-0.02em] text-gray-700">
              <button
                onClick={() => (window.location.href = "/")}
                className="hover:cursor-pointer"
              >
                Home
              </button>
              <span className="px-[12px]">›</span>
              <span className="text-[#1656A5]"> Careers</span>
            </p>

            <h1 className="font-manrope  font-semibold csLg:text-[64px] text-[32px] csLg:leading-[72px] leading-[40px] tracking-[-0.02em] text-[#111827]  -mt-8 sm:-mt-6 md:mt-0">
              What We Offer: Care,
              <br className="hidden csLg:block" />
              Growth & Purpose
            </h1>

            <div>
              <button className="bg-[#1656A5] h-10 md:h-[56px] text-[#F9F9F9] font-manrope md:text-[14px] text-[12px] md:leading-[24px] font-medium rounded-[8px] md:rounded-[16px] px-2 md:px-4 py-2">
                See Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-8 md:py-[80px] bg-[#FAFAFA] overflow-hidden px-4 md:px-[120px]">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-scroll snap-x snap-mandatory scroll-smooth w-full md:gap-6 [&::-webkit-scrollbar]:hidden rounded-[16px] md:px-[15%] px-[10%]"
        >
          {(() => {
            const images = [
              "/images/CI1.jpg",
              "/images/CI2.jpg",
              "/images/CI3.png",
              "/images/CI4.png",
              "/images/CI5.jpg",
              "/images/CI6.jpg",
            ];
            const displayImages = [
              images[images.length - 1],
              ...images,
              images[0],
            ];
            return displayImages.map((src, i) => (
              <div
                key={i}
                className="snap-center flex-none w-[80%] sm:w-[70%] md:w-[60%] lg:w-[800px] rounded-xl overflow-hidden transition-transform duration-700"
              >
                <img
                  src={src}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-[260px] sm:h-[300px] md:h-[560px] object-cover rounded-xl"
                />
              </div>
            ));
          })()}
        </div>
      </section>
    </div>
  );
};

export default CareersLanding;