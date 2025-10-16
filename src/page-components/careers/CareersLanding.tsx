"use client";
import React, { useRef, useEffect, useState } from "react";

const CareersLanding: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const stepRef = useRef<number>(0);
  const indexRef = useRef<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  // compute step (distance between successive cards)
  const computeStep = () => {
  const el = scrollerRef.current;
  if (!el) return 0;
  const cards = Array.from(el.querySelectorAll<HTMLDivElement>("div.snap-center"));
  if (cards.length === 0) return 0;

  const cardWidth = cards[0].offsetWidth;
  // scroll step: full card minus peek (say 50% of next card visible)
  const step = cardWidth * 0.5; 
  return step;
};


  // set up auto-scroll interval
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const cardCount =
      el.querySelectorAll<HTMLDivElement>("div.snap-center").length;
    if (cardCount === 0) return;

    // compute initial step and reset index
    stepRef.current = computeStep();
    indexRef.current = 0;

    const scrollToIndex = (idx: number) => {
      if (!el) return;
      const left = Math.round(idx * stepRef.current);
      el.scrollTo({ left, behavior: "smooth" });
    };

    const startInterval = () => {
      // clear existing first
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      intervalRef.current = window.setInterval(() => {
  if (isPaused) return;
  indexRef.current += 1;

  const cards = scrollerRef.current?.querySelectorAll<HTMLDivElement>("div.snap-center");
  if (!cards) return;

  stepRef.current = computeStep();
  const left = Math.round(indexRef.current * stepRef.current);
  scrollerRef.current?.scrollTo({ left, behavior: "smooth" });

  if (indexRef.current >= cards.length - 1) {
    indexRef.current = 0; // reset to first card
    setTimeout(() => {
      scrollerRef.current?.scrollTo({ left: 0, behavior: "instant" as any });
    }, 1600);
  }
}, 3000);

    };

    startInterval();

    // Recompute step on resize (and re-align to current index)
    const onResize = () => {
      stepRef.current = computeStep();
      // re-align current index to ensure exact stop
      const left = Math.round(indexRef.current * stepRef.current);
      el.scrollTo({ left, behavior: "instant" as any }); // instant alignment
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  // Pause on user interaction (hover / touch)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    const handleTouchStart = () => setIsPaused(true);
    const handleTouchEnd = () => {
      // give a small delay to avoid immediate resume while touch momentum continues
      setTimeout(() => setIsPaused(false), 300);
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

  // Helper for manual nav buttons: scroll one card left/right
 const scrollByCard = (dir: "next" | "prev") => {
  const el = scrollerRef.current;
  if (!el) return;
  const cards = el.querySelectorAll<HTMLDivElement>("div.snap-center");
  if (cards.length === 0) return;

  stepRef.current = computeStep();

  if (dir === "next") {
    indexRef.current = Math.min(indexRef.current + 1, cards.length - 1);
  } else {
    indexRef.current = Math.max(indexRef.current - 1, 0);
  }

  const left = Math.round(indexRef.current * stepRef.current);
  el.scrollTo({ left, behavior: "smooth" });
};

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLDivElement>("div.snap-center");
    if (cards.length === 0) return;

    const cardCount = cards.length;
    const realCardCount = cardCount / 2 - 1; // because of clones at start/end

    // init scroll to first real image
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    stepRef.current = step;
    indexRef.current = 1; // first real image
    el.scrollTo({
      left: stepRef.current * indexRef.current,
      behavior: "instant" as any,
    });

    const scrollToIndex = (i: number, smooth = true) => {
      el.scrollTo({
        left: i * stepRef.current,
        behavior: smooth ? "smooth" : ("instant" as any),
      });
    };

    intervalRef.current = window.setInterval(() => {
      if (isPaused) return;
      indexRef.current += 1;
      scrollToIndex(indexRef.current);

      // reset for infinite loop
      if (indexRef.current >= cardCount - 1) {
        indexRef.current = 1;
        setTimeout(() => scrollToIndex(indexRef.current, false), 1600);
      }
    }, 4000);

    const onResize = () => {
      stepRef.current = cards[1].offsetLeft - cards[0].offsetLeft;
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [isPaused]);

  return (
    <div className="w-full bg-[#FAFAFA]">
      {/* Hero Section */}
      <section
        className="section-spacing bg-gradient-to-r from-green-100 via-white to-sky-200 relative w-full h-[340px] sm:h-[380px] md:h-[500px] lg:h-[567px]` overflow-hidden bg-no-repeat bg-cover bg-center flex items-start
                  bg-[url('/images/Carrer-mobile.png')] h-[444px] csLg:h-full sm:bg-[url('/images/Carrer.png')]"
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

            <h1 className="font-manrope font-semibold csLg:text-[64px] text-[32px] csLg:leading-[72px] leading-[40px] tracking-[-0.02em] text-[#111827]">
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

      {/* 🖼️ Image Gallery Section (Auto-Scrolling Carousel) */}
      <section className="relative w-full py-8 md:py-[80px] bg-[#FAFAFA] overflow-hidden px-4 md:px-[120px]">
        {/* Carousel container */}
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-scroll snap-x snap-mandatory scroll-smooth w-full md:gap-6 [&::-webkit-scrollbar]:hidden  rounded-[16px]"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {(() => {
            const images = [
              "/images/ReBanner1.png",
              "/images/ReBanner2.png",
              "/images/ReBanner3.png",
            ];
            const displayImages = [
              images[images.length - 1],
              ...images,
              ...images,
              ...images,...images,...images,...images,...images,...images,...images,...images,...images,
              images[0],
            ];
            return displayImages.map((src, i) => (
              <div
                key={i}
                className="snap-center flex-none w-[80%] sm:w-[70%] md:w-[55%] lg:w-[800px] rounded-xl overflow-hidden transition-transform duration-500"
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

        {/* Navigation buttons - visible only on desktop */}
        <div className="hidden md:flex justify-center gap-4 mt-8">
          <button
            aria-label="Previous"
            onClick={() => scrollByCard('prev')}
            className="h-[56px] w-[56px] rounded-[16px] font-bold border border-[#1656A5] flex items-center justify-center text-[#1656A5]"
          >
            <img src="/icons/left.svg" alt="left" width={12} height={12} />
          </button>

          <button
            aria-label="Next"
            onClick={() => scrollByCard('next')}
            className="h-[56px] w-[56px] rounded-[16px] font-bold border border-[#1656A5] flex items-center justify-center text-[#1656A5]"
          >
            <img src="/icons/right.svg" alt="right" width={12} height={12} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareersLanding;
