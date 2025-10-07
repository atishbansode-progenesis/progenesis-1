"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const slides = [
    {
      id: 1,
      image: "/home/hcv.mp4",
      title: "What would you like to learn about fertility?",
      buttons: [
        { label: "Book Your Appointment", href: "/appointment" },
        { label: "Find My Right Treatment", href: "/treatments" },
      ],
    },
    {
      id: 2,
      image: "/home/v2.mp4",
      title: "Your parenthood journey starts with us",
      buttons: [
        { label: "Get Started", href: "/get-started" },
        { label: "Meet Our Experts", href: "/experts" },
      ],
    },
    {
      id: 3,
      image: "/home/v3.mp4",
      title: "Trusted care for every step of the way",
      buttons: [
        { label: "Book Consultation", href: "/consultation" },
        { label: "See Success Stories", href: "/success-stories" },
      ],
    },
  ];

  const goToNextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  // 🎥 Handle video play, pause, and progress tracking
  useEffect(() => {
    const current = slides[currentSlide];
    const video = videoRefs.current[currentSlide];
    let interval: NodeJS.Timeout;

    setProgress(0);

    // Handle video progress
    if (current.image.endsWith(".mp4") && video) {
      video.currentTime = 0;
      video.play().catch(() => {});
      const updateProgress = () => {
        if (video.duration > 0) {
          setProgress((video.currentTime / video.duration) * 100);
        }
      };
      video.addEventListener("timeupdate", updateProgress);
      video.onended = goToNextSlide;

      return () => {
        video.removeEventListener("timeupdate", updateProgress);
        video.pause();
      };
    }

    // Handle image slide (5s timer)
    else {
      let elapsed = 0;
      const duration = 5;
      interval = setInterval(() => {
        elapsed += 0.1;
        setProgress((elapsed / duration) * 100);
        if (elapsed >= duration) {
          goToNextSlide();
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const isPrev = index === prevSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-[1200ms] ease-in-out transform
              ${
                isActive
                  ? "translate-x-0 opacity-100 z-20"
                  : isPrev
                  ? "-translate-x-full opacity-0 z-10"
                  : "translate-x-full opacity-0 z-0"
              }
            `}
          >
            {slide.image.endsWith(".mp4") ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={slide.image}
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        );
      })}

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 pb-[5%] px-6 lg:px-[50px] xl:px-[80px] 2xl:px-[120px] text-white max-w-[900px] z-30 transition-all duration-700 ease-in-out">
        <p
          className="
          font-[Manrope] font-semibold text-[#F9F9F9]
          text-[32px] leading-[40px] tracking-[-0.64px] 
          md:text-[56px] md:leading-[64px] md:tracking-[-1px]
          xl:text-[80px] xl:leading-[88px] xl:tracking-[-1.6px]
          transition-all duration-700 ease-in-out
        "
        >
          {slides[currentSlide].title}
        </p>

        <div className="flex flex-row gap-3 mt-6 md:mt-12">
          {slides[currentSlide].buttons.map((btn, i) => (
            <Link key={i} href={btn.href}>
              <button
                className={`cursor-pointer px-[12px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] font-[Manrope] text-[12px] md:text-sm font-medium leading-[20px] sm:leading-6 tracking-[-0.24px] sm:tracking-[-0.28px] transition-all duration-300 ease-in-out ${
                  i === 0
                    ? "bg-white text-[#2C2C2C] backdrop-blur-[7.5px]"
                    : "border border-white text-white backdrop-blur-[7.5px]"
                }`}
              >
                {btn.label}
              </button>
            </Link>
          ))}
        </div>

        {/* Dots with Progress Bars */}
        <div className="flex gap-4 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative w-[60px] sm:w-[100px] h-[3px] rounded-full overflow-hidden bg-white/20"
            >
              <span
                className={`absolute left-0 top-0 h-full rounded-full transition-[width] duration-100 ease-linear ${
                  index === currentSlide ? "bg-white" : "bg-transparent"
                }`}
                style={{
                  width: index === currentSlide ? `${progress}%` : "0%",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
