"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { resourceStoriesData } from "@/page-components/resources/ResourceStories";

const TestimonialsSection = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [navReady, setNavReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const testimonials = [
    {
      text: "I came in with questions, doubts, and a heart full of fear. But I left with answers, reassurance, and hope. Today... I have someone who calls me ‘Mom.’",
      author: "Rhea Deshapnde, Progenesis Mom, Nashik",
    },
    {
      text: "The team was so supportive throughout my journey. Their care and expertise gave me hope again. They made our journey smooth and hopeful.",
      author: "Priya Sharma, Progenesis Mom, Pune",
    },
    {
      text: "Every visit gave me more confidence. Today, I’m blessed with the family I always dreamed of.  Their care and expertise gave me hope again",
      author: "Anjali Mehta, Progenesis Mom, Mumbai",
    },
    {
      text: "Amazing care and wonderful staff. They made our journey smooth and hopeful.  Their care and expertise gave me hope again",
      author: "Sneha Kulkarni, Progenesis Mom, Nagpur",
    },
  ];

  const videoTestimonials = resourceStoriesData.length
    ? testimonials.map((t, i) => ({
        ...t,
        videoUrl: resourceStoriesData[i % resourceStoriesData.length].videoUrl,
        storyTitle: resourceStoriesData[i % resourceStoriesData.length].title,
      }))
    : testimonials;

  useEffect(() => {
    setNavReady(true);
  }, []);

  // Handle scroll progress for mobile
  useEffect(() => {
    const container = document.getElementById("mobile-scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#1656A5] overflow-hidden p-4 lg:px-[115px] py-[80px]">
      <div className="flex flex-col md:flex-row  lg:h-[600px]">
        {/* Left Panel (Blue) */}
        <div className="bg-[#1656A5] text-[#F9F9F9] flex flex-col justify-center md:w-[268px] ">
          <div>
            <h2 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[53px] font-normal mb-6">
              What Our Visitors Are Saying
            </h2>

            {/* Progress Bar */}
            <div className="md:block hidden w-35 lg:w-[150px] h-1 bg-white/30 rounded-full mb-6">
              <div
                className="h-1 bg-white rounded-full transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / videoTestimonials.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          {/* Mobile Progress Bar */}
          <div className="md:hidden mt-6 w-[340px] h-1 bg-[#3775C2] rounded-full overflow-hidden">
            <div
              className="h-1 bg-[#F9F9F9] rounded-full transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

          {/* Arrows (Hidden on mobile) */}
          <div className="hidden md:flex space-x-4">
            <button
  ref={prevRef}
  className="group w-10 lg:w-14 h-10 lg:h-14 flex hover:cursor-pointer items-center justify-center border border-white rounded-lg hover:bg-white hover:text-[#1656A5] transition"
>
  <img
    src="/icons/left-white.svg"
    alt="left"
    className="block group-hover:hidden"
  />
  <img
    src="/icons/left.svg"
    alt="left-hover"
    className="hidden group-hover:block"
  />
</button>

            <button
  ref={nextRef}
  className="group w-10 lg:w-14 h-10 lg:h-14 flex hover:cursor-pointer items-center justify-center border bg-[#1656A5] border-white rounded-lg hover:bg-white hover:text-[#1656A5] transition"
>
  <img
    src="/icons/right-white.svg"
    alt="right"
    className="block group-hover:hidden"
  />
  <img
    src="/icons/right.svg"
    alt="right-hover"
    className="hidden group-hover:block"
  />
</button>

          </div>
        </div>

        {/* Right Panel (Swiper Area) */}
        <div className="flex-1 flex items-center justify-center bg-[#1656A5] md:pt-40 lg:pt-1 lg:h-auto overflow-hidden md:overflow-visible">
          
          
          {/* Desktop & Tablet Swiper */}
          <div className="hidden md:block w-full max-w-[900px] lg:max-w-[1000px] mx-auto">
            {navReady && (
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                className="w-full"
              >
                {videoTestimonials.map((t, i) => (
                 <SwiperSlide key={i}>
  <div className="flex flex-row items-stretch bg-transparent rounded-[16px] overflow-hidden w-full gap-4 p-4 lg:flex-row">
    {/* Description Box */}
    <div className="flex flex-col justify-center p-8 bg-white rounded-[16px] w-[536px] h-[536px]">
      <p className="text-[#1656A5] font-[Manrope] text-[32px] tracking-tight leading-[40px]">
        {t.text}
      </p>
      <span className="mt-6 text-[#606060] text-base">
        ~ {t.author}
      </span>
    </div>

    {/* Video Box */}
    <div className="rounded-[16px] overflow-hidden w-[832px] h-[536px]">
      {t.videoUrl ? (
        <iframe
          src={t.videoUrl}
          title={t.storyTitle || t.author}
          className="w-full h-full rounded-[16px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 rounded-[16px]">
          Video unavailable
        </div>
      )}
    </div>
  </div>
</SwiperSlide>

                ))}
              </Swiper>
            )}
          </div>

          {/* Mobile View */}
          <div
            id="mobile-scroll-container"
            className="md:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-2 py-2"
          >
            {videoTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col bg-transparent rounded-[16px] overflow-hidden min-w-[85%] snap-center p-2 gap-4"
              >
                {/* Description First */}
                <div className="p-4 bg-white h-[300px] justify-center rounded-[16px] py-[66px] gap-6 lg:pt-auto px-[34px]">
                  <p className="text-[#1656A5] font-[Manrope] text-[16px] font-normal tracking-tight leading-[24px]">
                    {t.text}
                  </p>
                  <span className="mt-4 text-[#606060] text-sm block">
                    ~ {t.author}
                  </span>
                </div>

                {/* Video Second */}
                <div className="w-full h-[250px] rounded-[16px] overflow-hidden">
                  {t.videoUrl ? (
                    <iframe
                      src={t.videoUrl}
                      title={t.storyTitle || t.author}
                      className="w-full h-full rounded-[16px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 rounded-[16px]">
                      Video unavailable
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
