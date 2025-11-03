"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import AppointmentForm from "@/page-components/about/AppointmentForm";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState("Home");
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [firstVideoLoaded, setFirstVideoLoaded] = useState(false);

  const slides = [
    {
      id: 1,
      image: "/home/hcv.mp4",
      thumbnail: "/home/thumbnail.png",
      title: "What would you like to know about your fertility journey?",
      buttons: [
        { label: "Book Your Appointment", href: "/appointment" },
        { label: "Find Nearest Center", href: "/centers" },
      ],
    },
    // {
    //   id: 2,
    //   image: "/home/v2.mp4",
    //   thumbnail: "/home/thumbnail2.png",
    //   title: "Your parenthood journey starts with us",
    //   buttons: [
    //     { label: "Get Started", href: "/get-started" },
    //     { label: "Meet Our Experts", href: "/doctors" },
    //   ],
    // },
    // {
    //   id: 3,
    //   image: "/home/v3.mp4",
    //   thumbnail: "/home/thumbnail3.png",
    //   title: "Trusted care for every step of the way",
    //   buttons: [
    //     { label: "Book Consultation", href: "/consultation" },
    //     { label: "See Success Stories", href: "/resources" },
    //   ],
    // },
  ];

  const goToNextSlide = () => {
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  // 🎥 Handle video playback and progress tracking
  useEffect(() => {
    const current = slides[currentSlide];
    const video = videoRefs.current[currentSlide];
    let interval: NodeJS.Timeout;

    setProgress(0);

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
    } else {
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

  // ✅ Ensure first video autoplay works even after reload
  useEffect(() => {
    const firstVideo = videoRefs.current[0];
    if (firstVideo) {
      firstVideo.play().catch(() => {});
    }
  }, []);

  // Preload next video
  useEffect(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    const nextVideo = videoRefs.current[nextSlide];
    if (nextVideo && nextVideo.preload !== "auto") nextVideo.preload = "auto";
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden" style={{
      backgroundImage: "hero/thumbnail.png"
    }}>
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
              <div className="absolute inset-0 w-full h-full">
                {/* 🎥 Video Layer */}
                <video
                  ref={(el:any) => (videoRefs.current[index] = el)}
                  src={slide.image}
                  muted
                  playsInline
                  loop
                  autoPlay={index === 0} // ✅ autoplay first video
                  preload={index === 0 ? "auto" : "metadata"}
                  className="absolute inset-0 w-full h-full object-cover z-20"
                  onLoadedData={(e) => {
                    if (index === 0 && !firstVideoLoaded) {
                      setFirstVideoLoaded(true);
                      e.currentTarget.play().catch(() => {});
                    }
                  }}
                />

                {/* 🖼 Fade-out Thumbnail */}
                {index === 0 && (
                  <img
                    src={slide.thumbnail}
                    alt="thumbnail"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      firstVideoLoaded ? "opacity-0" : "opacity-100"
                    }`}
                  />
                )}
              </div>
            ) : (
              <img
                src={slide.thumbnail}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        );
      })}

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 pb-[100px] sm:pb-[10%] px-6 lg:px-[50px] xl:px-[80px] 2xl:px-[120px] text-white z-30 transition-all duration-700 ease-in-out">
        <p
          className="font-[Manrope] font-semibold text-[var(--Text_White,#F9F9F9)]
            text-[32px] leading-[40px] tracking-[-0.64px]
            md:text-[56px] md:leading-[64px] md:tracking-[-1px]
            xl:text-[80px] xl:leading-[88px] xl:tracking-[-1.6px]
            max-w-[900px] transition-all duration-700 ease-in-out"
        >
          {slides[currentSlide].title}
        </p>

        <div className="flex flex-row gap-3 mt-6 md:mt-12">
          {slides[currentSlide].buttons.map((btn, i) => {
            const isModalButton =
              btn.href === "/appointment" ||
              btn.href === "/get-started" ||
              btn.href === "/consultation";

            const baseClass =
              "cursor-pointer px-[12px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] font-[Manrope] text-[12px] md:text-sm font-medium leading-[20px] sm:leading-6 tracking-[-0.24px] sm:tracking-[-0.28px] transition-all duration-300 ease-in-out";
            const colorClass =
              i === 0
                ? "bg-white text-[#2C2C2C] backdrop-blur-[7.5px]"
                : "border border-white text-white backdrop-blur-[7.5px]";

            if (isModalButton) {
              return (
                <button
                  key={i}
                  onClick={() => setIsOpen(true)}
                  className={`${baseClass} ${colorClass}`}
                >
                  {btn.label}
                </button>
              );
            }

            return (
              <Link key={i} href={btn.href}>
                <button className={`${baseClass} ${colorClass}`}>
                  {btn.label}
                </button>
              </Link>
            );
          })}
        </div>

        {/* Progress Dots - Hidden for single video */}
        {/* <div className="flex gap-4 mt-10 mb-[60px] sm:mb-0">
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
        </div> */}
      </div>

      {/* Mobile Bottom Navigation */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 
        flex justify-center gap-2 bg-[#3A3A3A]/80 backdrop-blur-md
        px-3 py-2 rounded-2xl z-[999] sm:hidden"
      >
        {["Home", "Centers", "Contact"].map((item, idx) => (
          <Link
            key={idx}
            href={
              item === "Home"
                ? "/"
                : item === "Centers"
                ? "/centers"
                : "/contact"
            }
            onClick={() => setActiveTab(item)}
            className={`flex px-[12px] py-[8px] justify-center items-start gap-[4px] text-[13px] font-medium rounded-[8px] transition-all duration-200 ${
              activeTab === item
                ? "bg-white/10 text-white"
                : "text-white hover:text-white/90"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      {isOpen && 
      <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
      <AppointmentForm onClose={() => setIsOpen(false)} />
      </Suspense>
      }
    </div>
  );
};

export default HeroCarousel;
