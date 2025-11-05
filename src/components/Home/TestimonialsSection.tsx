"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

const TestimonialsSection = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const testimonials = [
    {
      text: "Good experience. Staff is polite. Thanks to the Doctor for clarity on medical issues. The Counsellor handled finances well.",
      author: "~Manoj Pansare, a day ago",
    },
    {
      text: "Clean facilities, efficient scheduling, prompt care. Progenesis Panvel Center ensured hygiene and a smooth healthy and fast recovery.",
      author: "~Ruchika's World, 3 days ago",
    },
    {
      text: "Progenesis Panvel Center hygiene and clean and the entire team are very supporting and professional, incredibly compassionate.",
      author: "~Sitaram, 3 days ago",
    },
    {
      text: "First visit was positive. Great doctors and staff, all facilities in one place. Best fertility clinic with great staff. Encouraged me throughout my journey.",
      author: "~Kajal Kolekar, 1 month ago",
    },
    {
      text: "Progenesis Panvel Center hygiene and clean and the entire team are very supporting and professional, incredibly compassionate.",
      author: "~Sitaram, 3 days ago",
    },
  ];


  useEffect(()=>{
    getReviewData();
  },[])


  const getReviewData = async () => {
    try{
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/average-reviews/");
      console.log("Hello", response.data.results.overall.average_rating)
      setRating(response.data.results.overall.average_rating)
      setTotalReviews(response.data.results.overall.total_reviews)
      return response.data;
    }catch(error){
      console.log("Error", error)
    }
  }



  const [rating, setRating] = useState(4.5);
  const [totalReviews, setTotalReviews] = useState(4.5);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row h-auto md:h-[700px]">
        {/* LEFT PANEL */}
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
                    &nbsp;Based on <span className="font-bold">{totalReviews}</span> reviews
                  </span>
                </div>

                {/* Desktop rating (unchanged) */}
                <div className="hidden md:flex md:flex-row md:items-center">
                  <span className="text-5xl font-[Manrope] font-semibold text-[#F9F9F9] pr-1">{rating}</span>
                  <span className="text-[18px] text-[#F9F9F9] pr-2">/5</span>
                </div>
              </div>

              {/* Desktop stars (unchanged) */}
              <div className="hidden md:flex justify-center md:justify-start items-center text-yellow-400 text-xl mb-2">
                {Array.from({ length: 5 }).map((_, i) => {
                  const full = i + 1 <= Math.floor(rating);
                  const half = rating - i === 0.5;
                  return <span key={i}>{full ? "★" : half ? "★" : "★"}</span>;
                })}
              </div>

              {/* Desktop review count (unchanged) */}
              <p className="hidden md:block text-sm text-gray-200 mb-6 text-center md:text-left">
                Based on <span className="font-bold">{totalReviews}</span> reviews
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
          className="relative bg-cover bg-center h-full  csLg:w-[70%] py-[42px] pl-4 md:pl-0 md:pt-[82px]"
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
            centeredSlides={false}
            centerInsufficientSlides={true}
            className="md:pr-[80px] pl-4 md:pl-0"
            style={{
              display: "flex",
              alignItems: "center",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // navigation can be boolean | NavigationOptions; guard before assigning
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide
                key={i}
                className="!w-[280px] md:!w-[590px]"
              >
                {({ isActive }) => (
                  <div
                    className={`flex flex-col justify-between transition-all duration-500 rounded-2xl bg-[#F9F9F9] p-6 md:p-[80px_60px] ml-0 mr-0 md:ml-[40px] md:mr-[40px] h-auto md:h-[520px] min-h-[280px] ${isActive
                        ? "opacity-100"
                        : "opacity-70"
                      }`}
                  >
                    <div className="flex flex-col justify-center h-full text-left">
                      <p
                        className="
                          text-[#1656A5] line-height-[24px]
                          text-[16px] lg:text-[30px]
                          lg:leading-[40px]
                          text-left
                        "
                      >
                        {t.text}
                      </p>
                      <span
                        className="
                          mt-4 md:mt-6 text-[rgba(44,44,44,0.5)] font-[Manrope]
                          text-[12px] md:text-[16px]
                          leading-[18px] md:leading-[22px] tracking-[-0.32px]
                          text-left
                        "
                      >
                        {t.author}
                      </span>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;