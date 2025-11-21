"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

interface Slide {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface CarouselSectionProps {
  tag: string;
  heading: string;
  slides: Slide[];
}

export default function CarouselSection({
  tag,
  heading,
  slides,
}: CarouselSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Touch tracking refs
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const isSwiping = useRef(false);
  const moved = useRef(false);

  // Mobile check helper
  const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768;

  // Handlers
  const onTouchStart = (e: React.TouchEvent) => {
    if (!isMobile()) return;
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    isSwiping.current = true;
    moved.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isMobile() || !isSwiping.current || !startX.current || !startY.current) return;
    const t = e.touches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;

    // If vertical movement is bigger, cancel horizontal swipe (allow page scroll)
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 10) {
      isSwiping.current = false;
      return;
    }

    // mark moved so touchend knows something happened
    if (Math.abs(dx) > 5) {
      moved.current = true;
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isMobile() || !startX.current || !isSwiping.current) {
      startX.current = null;
      startY.current = null;
      isSwiping.current = false;
      moved.current = false;
      return;
    }

    // Use changedTouches to get last position
    const t = e.changedTouches[0];
    const dx = t.clientX - (startX.current ?? 0);

    const threshold = 50; // min px for swipe to trigger
    if (!moved.current) {
      // no meaningful horizontal movement
      startX.current = null;
      startY.current = null;
      isSwiping.current = false;
      return;
    }

    if (dx > threshold) {
      // swipe right => previous slide
      setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    } else if (dx < -threshold) {
      // swipe left => next slide
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }

    // reset
    startX.current = null;
    startY.current = null;
    isSwiping.current = false;
    moved.current = false;
  };

  // Optional: allow keyboard left/right navigation on desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", onKey);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", onKey);
      }
    };
  }, [slides.length]);

  return (
    <section
      className="w-full p-[16px] lg:p-[120px] bg-[#F1F7FC] font-[Manrope] scroll-mt-[120px]"
      id="causes"
    >
      <div>
        {/* Two-column wrapper */}
        <div className="flex flex-col items-start justify-between ">
          <div className="mb-10 md:mb-20">
            {/* Chip */}
            <span className="inline-block mb-2 px-2 py-1 bg-[rgba(22,86,165,0.05)] text-[#1656A5] text-xs font-medium rounded-md w-fit tracking-tight">
              {tag}
            </span>

            {/* Heading */}
            <div className="max-w-[70%]">
              <h2 className="text-[#2C2C2C] text-[28px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[50px] font-normal tracking-[-0.96px]">
                {heading}
              </h2>
            </div>
          </div>
          {/* LEFT DIV */}
          <div className="w-full flex-col md:flex-row flex justify-between gap-12">
            <div className="w-full  md:w-[25rem] ">
              {/* Dots */}
              <div className="flex gap-3 lg:mt-[25%] ">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-[10px] h-[10px] cursor-pointer rounded-full transition-all duration-200 ${i === activeIndex ? "bg-[#1656A5]" : "bg-[#C9C9C9]"
                      }`}
                  />
                ))}
              </div>
              {/* Slide number + content */}
              <div className="mt-6">
                <div className="text-[#94BA3D] text-[16px] leading-[24px] tracking-[-0.32px]">
                  {slides[activeIndex].id}
                </div>

                <h3 className="text-[#1656A5] text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] lg:leading-[40px] tracking-[-0.64px] mt-2">
                  {slides[activeIndex].title}
                </h3>

                <p className="text-[#2C2C2C] text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] mt-3 max-w-[680px]">
                  {slides[activeIndex].description}
                </p>
              </div>
            </div>

            {/* RIGHT DIV (Image only) */}
            <div
              className="w-full max-w-[1248px] aspect-[1248/601] rounded-2xl overflow-hidden relative touch-none"
              // Attach touch handlers to this wrapper (mobile swipe area)
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* We render all images but only show the active one, allowing smooth fade */}
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
