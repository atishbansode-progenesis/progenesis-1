"use client";

import React, { useRef, useState, useEffect } from "react"; // <-- Updated Imports
import  {  Swiper ,SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper';
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialsSection = ({
  rating,
  totalReviews,
  reviewsList,
}: {
  rating: number;
  totalReviews: number;
  reviewsList: {
    author: string;
    text: string;
    create_time: string;
    star_rating: string;
  }[];
}) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  
  // State to hold the Swiper instance
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  // Effect to update Swiper's navigation after refs are set
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // This forces Swiper to recognize the navigation elements
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]); // Runs once when swiperInstance is set

  const getTimeAgo = (createTime: string) => {
    const now = new Date();
    const reviewDate = new Date(createTime);
    const diffInSeconds = Math.floor((now.getTime() - reviewDate.getTime()) / 1000);
    if (diffInSeconds < 60) return "just now";
    if (diffInSeconds < 3600) return "Today";
    if (diffInSeconds < 86400) return "Today";
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  };

  const numberStarRating = (star_rating: string) => {
    switch (star_rating) {
      case "ONE": return 1;
      case "TWO": return 2;
      case "THREE": return 3;
      case "FOUR": return 4;
      case "FIVE": return 5;
      default: return 0;
    }
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row h-auto md:h-[700px]">
         <div className="bg-[#1656A5] text-white py-10 flex flex-col justify-between md:[528px] px-4 lg:px-[70px]  pt-[80px] md:pt-[128px]">
           <div className="md:text-left text-center">
             {/* Google Rating */}
             <div className="flex flex-row md:flex-col md:items-start items-center justify-center md:justify-start space-x-2 mb-2">
               <div className="flex md:flex-row items-center  justify-center md:justify-start space-x-2 md:space-x-0">
                 {/* Mobile image */}
                 <img
                  src="/images/google.png"
                  alt="Google"
                  className="w-[65px] h-[34px] rounded-[5px] block csLg:hidden"
                />

                {/* Desktop image */}
                <img
                  src="/images/g2.svg"
                  alt="Google"
                  className="mr-[4px] hidden csLg:block"
                />
                {/* Mobile star + rating inline */}
                <div className="flex items-center md:hidden space-x-1">
                  <span className="text-yellow-400 text-[16px]">★</span>
                  <span className="text-[14px] font-[Manrope] font-semibold text-[#F9F9F9]">
                    {rating}
                  </span>
                  <span className="text-[14px] text-[#F9F9F9]">/5</span>
                  <span className="text-[14px] text-gray-200">
                    &nbsp;Based on{" "}
                    <span className="font-bold">{totalReviews}</span> reviews
                  </span>
                </div>
                {/* Desktop rating (unchanged) */}
                <div className="hidden md:flex md:flex-row md:items-center">
                  <span className="text-5xl font-[Manrope] font-semibold text-[#F9F9F9] pr-1">
                    {rating}
                  </span>
                  <span className="text-[18px] text-[#F9F9F9] pr-2">/5</span>
                </div>
              </div>

              {/* Desktop stars (unchanged) */}
              <div className="hidden md:flex justify-center md:justify-start items-center text-yellow-400 text-xl mb-2">
                {Array.from({ length: 5 }).map((_, i) => {
                  const full = i + 1 <= Math.floor(rating);
                  const half = rating - i === 0.5;
                  // Note: The original logic here for half stars was slightly off, 
                  // but maintaining the original visual output for full stars:
                  return <span key={i}>{full ? "★" : half ? "★" : "★"}</span>;
                })}
              </div>

              {/* Desktop review count (unchanged) */}
              <p className="hidden md:block text-sm text-gray-200 mb-6 text-center md:text-left">
                Based on <span className="font-bold">{totalReviews}</span>{" "}
                reviews
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-[32px] md:text-[40px] font-[Manrope] md:leading-[56px] leading-[40px] tracking-tight font-normal text-[#F9F9F9] text-center md:text-left">
              What our patient's are saying
            </h2>
          </div>

          {/* Arrows only (progress bar removed) */}
          <div className="hidden md:flex flex-col mt-10 mb-[100px]">
            <div className="flex space-x-4">
              {/* Prev Button */}
              <button
                ref={prevRef}
                className="group w-14 h-14 cursor-pointer flex items-center justify-center border border-white rounded-lg hover:bg-white transition"
              >
                {/* Default white icon */}
                <img
                  src="/icons/left-white.svg"
                  alt="left"
                  className="block group-hover:hidden"
                />
                {/* Hover icon */}
                 <img
                  src="/icons/left.svg"
                  alt="left-hover"
                  className="hidden group-hover:block"
                />
              </button>

              {/* Next Button */}
              <button
                ref={nextRef}
                className="group w-14 h-14 cursor-pointer flex items-center justify-center border border-white rounded-lg hover:bg-white transition"
              >
                {/* Default white icon */}
                <img
                  src="/icons/right-white.svg"
                  alt="right"
                  className="block group-hover:hidden"
                />
                {/* Hover icon */}
                <img
                  src="/icons/right.svg"
                  alt="right-hover"
                  className="hidden group-hover:block"
                />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CAROUSEL */}
        <div
          className="relative bg-cover bg-center h-full csLg:w-[70%] py-[42px] pl-4 md:pl-0 md:pt-[82px]"
          style={{
            backgroundImage: "url('/TestimonialsSection/testimonial.png')",
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={12}
            breakpoints={{
              768: {
                spaceBetween: -40,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // Capture the swiper instance
            onSwiper={setSwiperInstance}
            // Set navigation using refs
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            // The onBeforeInit is no longer needed/removed for the fix
            className="md:pr-[80px] pl-4 md:pl-0"
          >
            {reviewsList?.length > 0 ? (
              reviewsList.map((t, i) =>
                t.text && t.author ? (
                  <SwiperSlide key={i} className="!w-[280px] md:!w-[590px]">
                    <div className="flex flex-col justify-between transition-all duration-500 rounded-2xl bg-[#F9F9F9] p-6 md:p-[80px_60px] ml-0 mr-0 md:ml-[40px] md:mr-[40px] h-[320px] md:h-[520px] opacity-100">
                      <div className="flex flex-col justify-center h-full text-left">
                        <p className="text-[#1656A5] text-[16px] lg:text-[26px] lg:leading-[40px] text-left">
                          {t.text.length > 230 ? `${t.text.slice(0, 230)}...` : t.text}
                        </p>
                        <span className="mt-4 md:mt-6 text-[rgba(44,44,44,0.5)] text-[12px] md:text-[16px]">
                          {t.author}
                        </span>

                        {/* Stars */}
                        <div className="flex justify-start items-center text-yellow-400 text-xl mb-1">
                          {Array.from({ length: 5 }).map((_, idx) => {
                            const sr = numberStarRating(t.star_rating);
                            return <span key={idx}>{idx < sr ? "★" : "☆"}</span>;
                          })}
                        </div>

                        {/* Time */}
                        <span className="text-[rgba(44,44,44,0.5)] text-[12px] text-left">
                          {getTimeAgo(t.create_time)}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ) : null
              )
            ) : (
              <p className="text-white text-center mt-20">No reviews available.</p>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;