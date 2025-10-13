'use client';

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { resourceStoriesData } from "@/page-components/resources/ResourceStories";

interface StoryCard {
  title: string;
  videoUrl: string;
  views?: string;
  published?: string;
  description?: string;
}

export default function StoriesSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [winWidth, setWinWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const stories: StoryCard[] = resourceStoriesData;
  const GAP = 16; // px gap between cards

  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const getCardStyle = () => {
    if (winWidth < 640) {
      return { minWidth: "calc(100% - 90px)", height: 220 };
    }
    if (winWidth < 1024) {
      return { minWidth: 240, height: 300 };
    }
    return { minWidth: 360, height: 420 };
  };

  const scrollByOne = (dir = 1) => {
    const sc = scrollRef.current;
    if (!sc) return;

    const card = sc.querySelector<HTMLElement>(".story-card");
    const cardWidth = card ? card.offsetWidth : sc.clientWidth * 0.9;
    const amount = Math.round(cardWidth + GAP) * dir;
    sc.scrollBy({ left: amount, behavior: "smooth" });
  };

  const prevSlide = () => scrollByOne(-1);
  const nextSlide = () => scrollByOne(1);

  const cardStyle = getCardStyle();

  return (
    <section className="bg-white p-[16px] lg:p-[120px]">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div>
            <span className="inline-block text-xs md:text-sm bg-[#1656A50D] text-[#1656A5] px-3 py-1 rounded-full">
              Real Stories. Real Miracles.
            </span>
            <h2 className="mt-4 text-[48px] md:text-4xl font-light text-[#2c2c2c] leading-tight">
              Inspiring stories of strength & Victories
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/resources"
              className="hidden md:inline-block px-4 py-2 bg-[#1656a5] text-white rounded-lg transition"
            >
              See all
            </Link>

            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="w-10 h-10 rounded-lg border border-[#1656a5] text-[#1656a5] bg-white hover:bg-blue-50 flex items-center justify-center"
            >
          <img src="/icons/left.svg" alt="right" width={12} height={12} /> 
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next"
              className="w-10 h-10 rounded-lg border border-[#1656a5] text-[#1656a5] bg-white hover:bg-blue-50 flex items-center justify-center"
            >
              <img src="/icons/right.svg" alt="right" width={12} height={12} />
            </button>
          </div>
        </div>

        {/* Carousel   Left Arrow 
        <button
          onClick={prevDoctor}
          className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] hidden md:flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 flex-shrink-0 cursor-pointer"
        >
          <img src="/icons/left.svg" alt="left" width={12} height={12} /> 
        </button> */}
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

            return (
              <article
                key={`${title}-${index}`}
                className="story-card snap-center flex-shrink-0 rounded-2xl overflow-hidden border border-gray-200 bg-white relative shadow-[0_1px_8px_rgba(0,0,0,0.08)]"
                style={{
                  minWidth: cardStyle.minWidth,
                  height: cardStyle.height,
                }}
              >
                <div className="relative w-full h-full">
                  <iframe
                    src={videoSrc}
                    title={title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />

                  {/* <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 text-xs md:text-sm text-white bg-gradient-to-b from-black/60 via-black/10 to-transparent">
                    <span>
                      {published}
                    </span>
                    {views && <span>{views}</span>}
                  </div> */}

                  {/* <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
                    <h3 className="text-lg font-semibold leading-snug line-clamp-2">{title}</h3>
                    {description && (
                      <p className="mt-1 text-sm text-white/80 line-clamp-2">{description}</p>
                    )}
                  </div> */}
                </div>

                {/* <div className="absolute left-4 bottom-4">
                  <a
                    href={videoSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#1656A5] shadow hover:bg-white"
                  >
                    <Play className="w-4 h-4" />
                    Watch story
                  </a>
                </div> */}
              </article>
            );
          })}
        </div>

        {/* Mobile 'See all' button */}
        <div className="mt-4 md:hidden">
          <Link href="/blog" className="px-4 py-2 bg-[#1656a5] text-white rounded-lg inline-flex w-28 items-center justify-center">
            See all
          </Link>
        </div>
      </div>
    </section>
  );
}
