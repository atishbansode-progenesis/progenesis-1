"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Play, X } from "lucide-react";
import { resourceStoriesData } from "@/page-components/resources/ResourceStories";
import { useRouter } from "next/navigation";

interface StoryCard {
  title: string;
  videoUrl: string;
  views?: string;
  published?: string;
  description?: string;
}

interface StoriesSectionProps {
  tag?: string;
  heading?: string;
}

export default function StoriesSection({ tag: propTag, heading: propHeading }: StoriesSectionProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [winWidth, setWinWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [mounted, setMounted] = useState(false);
  const router = useRouter()
  const stories: StoryCard[] = resourceStoriesData;
  const GAP = 16; // px gap between cards

  // Modal state: index of currently opened card, null if closed
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Track window width for responsive card sizes
  useEffect(() => {
    setMounted(true);
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Map index -> thumbnail path (defaults to TH1.png, TH2.png, ...)
  const getThumbnail = (index: number) => {
    // If you have specific mapping or filenames, replace this logic
    // e.g. return `/StoriesSection/TH${index+1}.png`
    return `/StoriesSection/TH${index + 1}.png`;
  };

  const getCardStyle = () => {
    if (winWidth < 640) {
      return { minWidth: "65vw", height: "390px" };
    }
    if (winWidth < 1024) {
      return { minWidth: 240, height: 300 };
    }
    return { minWidth: 380, height: 420 };
  };

  const scrollByOne = (dir = 1) => {
    const sc = scrollRef.current;
    if (!sc) return;

    // Find the first card to calculate its width
    const card = sc.querySelector<HTMLElement>(".story-card");
    // Fallback: use a calculated width if card element isn't immediately available
    const cardWidth = card ? card.offsetWidth : (winWidth < 640 ? winWidth * 0.65 : (winWidth < 1024 ? 240 : 380));
    
    const amount = Math.round(cardWidth + GAP) * dir;
    sc.scrollBy({ left: amount, behavior: "smooth" });
  };

  const prevSlide = () => scrollByOne(-1);
  const nextSlide = () => scrollByOne(1);

  const cardStyle = getCardStyle();

  const tag = propTag ?? "Real Stories. Real Miracles.";
  const heading = propHeading ?? "Inspiring stories of strength & Victories";

  // Build iframe src for a given video ID
  const buildEmbedSrc = (videoId: string | null) => {
    if (!videoId) return "";
    // autoplay=1 to start playing when modal opens, controls=1 to show controls
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  if (!mounted) {
    return (
      <section id="stories-section" className="pb-[20px] md:pb-[60px] pt-[20px] md:pt-[80px] bg-[#FFFFFF] md:bg-[#F1F7FC]">
        <div className="px-4 md:px-[80px] lg:px-[120px]">
          <div className="mb-[20px]">
            <div className="bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
              Real Stories. Real Miracles.
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-6 mb-[20px] lg:mb-[80px] md:mb-[80px]">
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#2C2C2C] leading-[28px] md:leading-[56px] lg:max-w-[691px]">
              Inspiring stories of strength & Victories
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {/* Skeleton cards */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex-shrink-0 rounded-2xl overflow-hidden border border-gray-200 bg-gray-200 w-[65vw] h-[390px] sm:w-[240px] sm:h-[300px] lg:w-[380px] lg:h-[420px] animate-pulse">
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="stories-section" className="pb-[20px] md:pb-[60px] pt-[20px] md:pt-[80px] bg-[#FFFFFF] md:bg-[#F1F7FC]">
      <div className="px-4 md:px-[80px] lg:px-[120px]">
        {/* Header */}
        <div className="mb-[20px]">
          <button onClick={()=> router.push("/success-stories")} className="cursor-pointer bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
            {tag}
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-6 mb-[20px] lg:mb-[80px] md:mb-[80px]">
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#2C2C2C] leading-[28px] md:leading-[56px] lg:max-w-[691px]">
            {heading}
          </h2>

          <div className="flex items-center gap-5">
            {/* Previous Slide Button - Now hidden on small screens (sm:flex) */}
                        <Link href="/success-stories" className="">
            <span className="hidden md:inline-block px-4 py-3 bg-[#1656a5] text-white rounded-lg transition">See all</span>

             </Link>
            <button 
              className="hidden sm:flex w-[56px] h-[56px] items-center justify-center rounded-[16px] border border-[#1656a5] text-[#1656a5] text-xl hover:bg-[rgba(22,86,165,0.05)] transition-all duration-300 z-10"
              onClick={prevSlide}
              aria-label="Previous story"
            >
              <img src="/icons/left.svg" width={12} height={12} alt="Left arrow" />
            </button>

            {/* Next Slide Button - Now hidden on small screens (sm:flex) */}
            <button 
              className="hidden sm:flex w-[56px] h-[56px] items-center justify-center rounded-[16px] border border-[#1656a5] text-[#1656a5] text-xl hover:bg-[rgba(22,86,165,0.05)] transition-all duration-300 z-10"
              onClick={nextSlide}
              aria-label="Next story"
            >
              <img src="/icons/right.svg" width={12} height={12} alt="Right arrow" />
            </button>

          </div>

        </div>

        {/* Cards scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{
            scrollbarWidth: "none", // firefox
            msOverflowStyle: "none",
          }}
        >
          {stories.map((story, index) => {
            const videoSrc = story.videoUrl;
            const title = story.title;
            const description = story.description;
            const views = story.views ?? "2k views";
            const published = story.published ?? "1 month ago";

            const cardThumb = getThumbnail(index);
            const videoId = getYouTubeVideoId(videoSrc);
            const embedSrc = buildEmbedSrc(videoId);

            return (
              <article
                key={`${title}-${index}`}
                className="story-card snap-center flex-shrink-0 rounded-2xl overflow-hidden border border-gray-200 bg-white relative shadow-[0_1px_8px_rgba(0,0,0,0.08)] w-[65vw] h-[390px] sm:w-[240px] sm:h-[300px] lg:w-[380px] lg:h-[420px]"
                style={{ ...cardStyle }}
              >
                {/* Thumbnail (use your custom image) */}
                <button
                  onClick={() => setOpenIndex(index)}
                  className="relative w-full h-full block text-left group"
                  aria-label={`Open story ${title}`}
                >
                  {/* Thumbnail image (served from public folder) */}
                  <img
                    src={cardThumb}
                    alt={title}
                    className="object-cover w-full h-full"
                    draggable={false}
                  />

                  {/* Overlay gradient + title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-4">
                    <div>
                      <h3 className="text-white text-[16px] md:text-[18px] font-semibold leading-snug line-clamp-2">
                        {title}
                      </h3>
                      {description && (
                        <p className="text-white/80 text-sm mt-1 line-clamp-2">
                          {description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Play button centered */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="pointer-events-auto">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transform transition group-hover:scale-105">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
        
        {/* See all button after the carousel on small screens, and always on its own line */}
        <div className="mt-6 flex justify-start md:justify-end">
            <Link href="/blog" className="inline-block md:hidden">
                <span className="px-4 py-3 bg-[#1656a5] text-white rounded-lg transition">See all</span>
            </Link>
        </div>



      </div>

      {/* Modal: only one iframe used at a time */}
      {openIndex !== null && (() => {
        const story = stories[openIndex];
        const videoId = getYouTubeVideoId(story.videoUrl);
        const embedSrc = buildEmbedSrc(videoId);

        return (
          <div
            className="fixed inset-0 z-[1100] flex items-center justify-center px-4 py-6"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
              onClick={() => setOpenIndex(null)}
            />

            <div className="relative z-10 max-w-[1100px] w-full mx-auto rounded-lg overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-white transition shadow"
                aria-label="Close video"
              >
                <X className="w-5 h-5 text-[#111]" />
              </button>

              {/* Responsive iframe container */}
              <div className="w-full h-[56vw] md:h-[60vh] lg:h-[68vh] bg-black">
                {videoId ? (
                  <iframe
                    src={embedSrc}
                    title={story.title}
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <p>Video unavailable</p>
                  </div>
                )}
              </div>

              {/* Optional: metadata/footer */}
              <div className="bg-white p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#111]">{story.title}</h3>
                    {story.description && (
                      <p className="text-sm text-[#444] mt-1 line-clamp-2">{story.description}</p>
                    )}
                  </div>
                  <div className="text-sm text-[#666]">
                    <div>{story.published ?? "—"}</div>
                    <div className="mt-1">{story.views ?? ""}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}