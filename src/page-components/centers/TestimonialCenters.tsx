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
    <section className="w-full bg-[#1656A5] overflow-hidden">
      <div className="flex flex-col md:flex-row  lg:h-[600px]">
        {/* Left Panel (Blue) */}
        <div className="bg-[#1656A5] text-[#F9F9F9] flex flex-col justify-center md:w-[400px] px-6 md:px-10 py-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-6">
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
              className="w-10 lg:w-14 h-10 lg:h-14 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-[#1656A5] transition"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="w-10 lg:w-14 h-10 lg:h-14 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-[#1656A5] transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Right Panel (Swiper Area) */}
        <div className="flex-1 flex items-center justify-center bg-[#1656A5] md:pt-40 lg:pt-1 lg:h-auto overflow-hidden md:overflow-visible">
          
          
          {/* Desktop & Tablet Swiper */}
          <div className="hidden md:block w-full max-w-[900px] lg:max-w-[900px] mx-auto">
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
                    <div className="flex flex-row items-stretch bg-transparent rounded-[16px] overflow-hidden w-full h-[500px] gap-4 p-4 lg:flex-row">
                      {/* Description First */}
                      <div className="flex flex-col justify-center lg:justify-between p-8 lg:p-12 bg-white rounded-[16px] md:h-[300px] lg:h-full md:w-[300px] lg:w-1/2 order-1">
                        <p className="text-[#1656A5] font-[Manrope] text-[16px] md:text-[16px] lg:text-[32px] tracking-tight leading-6 lg:leading-[40px]">
                          {t.text}
                        </p>
                        <span className="mt-6 text-[#606060] text-sm md:text-base">
                          ~ {t.author}
                        </span>
                      </div>

                      {/* Video Second */}
                      <div className="rounded-[16px] overflow-hidden md:w-[300px] lg:w-1/2 order-2 h-full md:h-[300px] lg:h-full">
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
            className="md:hidden flex space-x-4 overflow-x-auto px-6 scrollbar-hide snap-x snap-mandatory scroll-smooth py-6"
          >
            {videoTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col bg-transparent rounded-[16px] overflow-hidden min-w-[85%] snap-center p-4 gap-4"
              >
                {/* Description First */}
                <div className="p-4 bg-white h-[250px] justify-center rounded-[16px]">
                  <p className="text-[#1656A5] font-[Manrope] text-[16px] font-normal tracking-tight leading-[24px]">
                    {t.text}
                  </p>
                  <span className="mt-4 text-[#606060] text-sm block">
                    ~ {t.author}
                  </span>
                </div>

                {/* Video Second */}
                <div className="w-full h-[200px] rounded-[16px] overflow-hidden">
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
