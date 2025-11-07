"use client";
import React, { useRef, useEffect, useState } from "react";
import { Play } from "lucide-react";

const stories = [
  { id: 1, thumbnail: "/StoriesSection/stories1.png", title: "Story 1" },
  { id: 2, thumbnail: "/StoriesSection/stories2.png", title: "Story 2" },
  { id: 3, thumbnail: "/StoriesSection/stories1.png", title: "Story 3" },
  { id: 4, thumbnail: "/StoriesSection/stories2.png", title: "Story 4" },
  { id: 5, thumbnail: "/StoriesSection/stories1.png", title: "Story 5" },
  { id: 6, thumbnail: "/StoriesSection/stories2.png", title: "Story 6" },
];

export default function StoriesSection() {
  const scrollRef = useRef(null);
  const [winWidth, setWinWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const GAP = 16; // px gap between cards

  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const getCardStyle = () => {
    if (winWidth < 640) {
      return { minWidth: "calc(100% - 48px)", height: 360 };
    }
    if (winWidth < 1024) {
      return { minWidth: 340, height: 420 };
    }
    return { minWidth: 503, height: 618 };
  };

  const scrollByOne = (dir = 1) => {
    const sc = scrollRef.current;
    if (!sc) return;

    const card = sc.querySelector(".story-card");
    const cardWidth = card ? card.offsetWidth : sc.clientWidth * 0.9;
    const amount = Math.round(cardWidth + GAP) * dir;
    sc.scrollBy({ left: amount, behavior: "smooth" });
  };

  const prevSlide = () => scrollByOne(-1);
  const nextSlide = () => scrollByOne(1);

  const cardStyle = getCardStyle();

  return (
    <section className="bg-white pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
          <div>
            <span className="inline-block text-xs md:text-sm bg-blue-100 text-[#1656A5] px-3 py-1 rounded-full">
              Real Stories. Real Miracles.
            </span>
            <h2 className="mt-4 text-[48px] md:text-4xl font-light text-[#2c2c2c] leading-tight">
              Inspiring stories of strength & Victories
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              See all
            </button>

            <button
              onClick={prevSlide}
              aria-label="Previous"
              className="w-10 h-10 rounded-lg border border-blue-600 text-blue-600 bg-white flex items-center justify-center"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next"
              className="w-10 h-10 rounded-lg border border-blue-600 text-blue-600 bg-white flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{
            scrollbarWidth: "none", // firefox
          }}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              className="story-card snap-center flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 relative"
              style={{
                minWidth: cardStyle.minWidth,
                height: cardStyle.height,
              }}
            >
              <img
                src={story.thumbnail}
                alt={story.title}
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />

              {/* Play button */}
              <button
                className="absolute left-4 bottom-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100"
                aria-label={`Play ${story.title}`}
              >
                <Play className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          ))}
        </div>

        {/* Mobile 'See all' button */}
        <div className="mt-4 md:hidden">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg w-28">
            See all
          </button>
        </div>
      </div>
    </section>
  );
}
