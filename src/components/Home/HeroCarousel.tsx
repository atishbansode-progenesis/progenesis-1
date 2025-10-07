"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/home/hcv.mp4",
      title: "What would you like to know about your fertility journey?",
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

  // ✅ Auto slider (every 8 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 8s
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.image.endsWith(".mp4") ? (
            <video
              src={slide.image}
              autoPlay
              loop
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
      ))}

      {/* Content */}
      <div className="absolute top-0 left-0 pt-[15%] px-6 lg:px-[50px]  xl:px-[80px] 2xl:px-[120px] text-white max-w-[900px] z-10">
        {/* Title */}
        <p
          className="
          font-[Manrope] font-semibold text-[#F9F9F9]
          text-[32px] leading-[40px] tracking-[-0.64px] 
          md:text-[56px] md:leading-[64px] md:tracking-[-1px]
          xl:text-[80px] xl:leading-[88px] xl:tracking-[-1.6px]
        "
        >
          {slides[currentSlide].title}
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-3 mt-6 md:mt-12">
          {slides[currentSlide].buttons.map((btn, i) => (
            <Link key={i} href={btn.href}>
              <button
                className={`cursor-pointer px-[12px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] font-[Manrope] text-[12px] md:text-sm font-medium leading-[20px] sm:leading-6 tracking-[-0.24px] sm:tracking-[-0.28px] transition ${
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

        {/* Navigation Dots */}
        <div className="flex gap-4 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[40px] sm:w-[80px] h-[2px] transition-all ${
                index === currentSlide
                  ? "bg-[#F9F9F9]"
                  : "bg-[#F9F9F9] opacity-20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
