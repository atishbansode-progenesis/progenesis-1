'use client';

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { resourceStoriesData } from "@/page-components/resources/ResourceStories";

// Declare YouTube IFrame API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

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
  const stories: StoryCard[] = resourceStoriesData;
  const GAP = 16; // px gap between cards
  
  // State to track which video is playing and custom play buttons
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [showPlayButton, setShowPlayButton] = useState<{[key: number]: boolean}>({});
  const playersRef = useRef<{[key: number]: any}>({});
  const [apiReady, setApiReady] = useState(false);
  
  // Load YouTube IFrame API
  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }
    
    // Load the IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    // API ready callback
    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };
  }, []);
  
  // Initialize all play buttons as visible
  useEffect(() => {
    const initialState: {[key: number]: boolean} = {};
    stories.forEach((_, index) => {
      initialState[index] = true;
    });
    setShowPlayButton(initialState);
  }, [stories]);

  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  
  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  
  // Function to create YouTube player
  const createPlayer = (index: number, videoId: string, elementId: string) => {
    if (!window.YT || !window.YT.Player) return;
    
    const player = new window.YT.Player(elementId, {
      videoId: videoId,
      playerVars: {
        controls: 0, // Hide YouTube controls
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
      },
      events: {
        onStateChange: (event: any) => {
          // When video starts playing
          if (event.data === window.YT.PlayerState.PLAYING) {
            setPlayingIndex(index);
            setShowPlayButton(prev => ({ ...prev, [index]: false }));
            // Stop all other videos
            Object.keys(playersRef.current).forEach(key => {
              const idx = parseInt(key);
              if (idx !== index && playersRef.current[idx]) {
                playersRef.current[idx].pauseVideo();
              }
            });
          }
          // When video is paused or ended
          if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
            setShowPlayButton(prev => ({ ...prev, [index]: true }));
            if (playingIndex === index) {
              setPlayingIndex(null);
            }
          }
        },
      },
    });
    
    playersRef.current[index] = player;
  };
  
  // Initialize players when API is ready
  useEffect(() => {
    if (!apiReady) return;
    
    stories.forEach((story, index) => {
      const videoId = getYouTubeVideoId(story.videoUrl);
      if (videoId) {
        const elementId = `youtube-player-${index}`;
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          createPlayer(index, videoId, elementId);
        }, 100);
      }
    });
    
    // Cleanup
    return () => {
      Object.values(playersRef.current).forEach(player => {
        if (player && player.destroy) {
          player.destroy();
        }
      });
      playersRef.current = {};
    };
  }, [apiReady, stories]);
  
  // Function to handle custom play button click
  const handlePlayClick = (index: number) => {
    const player = playersRef.current[index];
    if (player && player.playVideo) {
      player.playVideo();
    }
  };

  const getCardStyle = () => {
    if (winWidth < 640) {
      return { minWidth: "65vw", height:"390px" };
    }
    if (winWidth < 1024) {
      return { minWidth: 240, height: 300 };
    }
    return { minWidth: 380, height: 420 };
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

  // Only change: tag and heading come from props (if provided), otherwise fall back to original text
  const tag = propTag ?? "Real Stories. Real Miracles.";
  const heading = propHeading ?? "Inspiring stories of strength & Victories";

  return (

    <section className="pb-[20px] md:pb-[60px] pt-[20px] md:pt-[80px] bg-[#FFFFFF] md:bg-[#F1F7FC]">
      <div className="px-4 md:px-[80px] lg:px-[120px]">
        {/* Header */}

          
            <button className="cursor-pointer bg-[#1656A5]/5 px-2 py-1 rounded-[8px] text-[12px] font-medium text-[#1656A5]">
              {tag}
            </button>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-6 mb-[40px] lg:mb-[80px] md:mb-[80px]">
            
            <h2 className="mt-2 text-[20px] md:text-[32px] lg:text-[40px] font-normal text-[#2C2C2C] leading-[28px] md:leading-[56px] lg:max-w-[691px]" >
              {heading}
            </h2>
        

          
            <Link
              href="/blog"
              className=" "
            >
            <span className="md:inline-block px-4 py-2 bg-[#1656a5] text-white rounded-lg transition ">See all</span> 
            </Link>
         
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

            const videoId = getYouTubeVideoId(videoSrc);
            
            return (
              <article
                key={`${title}-${index}`}
                className="story-card snap-center flex-shrink-0 rounded-2xl overflow-hidden border border-gray-200 bg-white relative shadow-[0_1px_8px_rgba(0,0,0,0.08)] w-[65vw] h-[390px] sm:w-[240px] sm:h-[300px] lg:w-[380px] lg:h-[420px]"
              >
                <div className="relative w-full h-full">
                  {/* YouTube Player Container */}
                  <div 
                    id={`youtube-player-${index}`}
                    className="w-full h-full"
                  />
                  
                  {/* Custom Play Button Overlay */}
                  {showPlayButton[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                      <button
                        onClick={() => handlePlayClick(index)}
                        className="cursor-pointer group flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF0000] hover:bg-[#CC0000] shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Play video"
                      >
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                      </button>
                    </div>
                  )}

                  {/* Optional: Video Info Overlay */}
                  {/* <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3 text-xs md:text-sm text-white bg-gradient-to-b from-black/60 via-black/10 to-transparent">
                    <span>
                      {published}
                    </span>
                    {views && <span>{views}</span>}
                  </div> */}

                  {/* Optional: Title and Description Overlay */}
                  {/* <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white">
                    <h3 className="text-lg font-semibold leading-snug line-clamp-2">{title}</h3>
                    {description && (
                      <p className="mt-1 text-sm text-white/80 line-clamp-2">{description}</p>
                    )}
                  </div> */}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
