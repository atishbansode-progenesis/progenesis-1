"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { resourceStoriesData } from "@/page-components/resources/ResourceStories";
import { Play } from "lucide-react";

const TestimonialsSection = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [navReady, setNavReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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

  useEffect(() => {
    const container = document.getElementById("mobile-scroll-container");
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const thumbnailForIndex = (index: number) => {
    const map = [
      "/TestimonialSection/Rhea.png",
      "/TestimonialSection/Priya.png",
      "/TestimonialSection/Anjali.png",
      "/TestimonialSection/Sneha.png",
    ];
    return map[index] ?? "/TestimonialSection/Dharti.png";
  };

  return (
    <section className="w-full bg-[#1656A5] overflow-hidden p-4 lg:px-[115px] py-[80px] relative">
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-[90%] max-w-[900px] aspect-video rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              title="video"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row lg:h-[600px]">
        <div className="bg-[#1656A5] text-[#F9F9F9] flex flex-col justify-center md:w-[268px]">
          <div>
            <h2 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[53px] font-normal mb-6">
              What Our Visitors Are Saying
            </h2>

            <div className="md:block hidden w-35 lg:w-[150px] h-1 bg-white/30 rounded-full mb-6">
              <div
                className="h-1 bg-white rounded-full transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / videoTestimonials.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="md:hidden mt-6 w-[340px] h-1 bg-[#3775C2] rounded-full overflow-hidden">
            <div
              className="h-1 bg-[#F9F9F9] rounded-full transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

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

        <div className="flex-1 flex items-center justify-center bg-[#1656A5] md:pt-40 lg:pt-1 lg:h-auto overflow-hidden md:overflow-visible">

          <div className="hidden md:block w-full max-w-[900px] lg:max-w-[1000px] mx-auto">
            {navReady && (
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                className="w-full"
              >
                {videoTestimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex flex-row items-stretch bg-transparent rounded-[16px] overflow-hidden w-full gap-4 p-4">
        
                      <div className="flex flex-col justify-center p-8 bg-white rounded-[16px] w-[536px] h-[536px]">
                        <p className="text-[#1656A5] font-[Manrope] text-[32px] tracking-tight leading-[40px]">
                          {t.text}
                        </p>
                        <span className="mt-6 text-[#606060] text-base">
                          ~ {t.author}
                        </span>
                      </div>

                      <div
                        className="rounded-[16px] overflow-hidden w-[832px] h-[536px] relative cursor-pointer"
                        onClick={() => t.videoUrl && setSelectedVideo(t.videoUrl)}
                      >
                        <img
                          src={thumbnailForIndex(i)}
                          alt={`thumbnail-${i}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition">
                          <div className="pointer-events-auto">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transform transition group-hover:scale-105">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <div
            id="mobile-scroll-container"
            className="md:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-2 py-2"
          >
            {videoTestimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col bg-transparent rounded-[16px] overflow-hidden min-w-[85%] snap-center p-2 gap-4"
              >
              
                <div className="p-4 bg-white h-[300px] justify-center rounded-[16px] py-[66px] gap-6 px-[34px]">
                  <p className="text-[#1656A5] font-[Manrope] text-[16px] font-normal tracking-tight leading-[24px]">
                    {t.text}
                  </p>
                  <span className="mt-4 text-[#606060] text-sm block">
                    ~ {t.author}
                  </span>
                </div>

      
                <div
                  className="w-full h-[250px] rounded-[16px] overflow-hidden relative cursor-pointer"
                  onClick={() => t.videoUrl && setSelectedVideo(t.videoUrl)}
                >
                  <img
                    src={thumbnailForIndex(i)}
                    alt={`thumb-mobile-${i}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition">
                     <div className="pointer-events-auto">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transform transition group-hover:scale-105">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          </div>
                  </div>
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
