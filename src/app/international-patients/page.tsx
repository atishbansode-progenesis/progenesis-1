"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import GradientBanner from "@/components/GradientBanner";

import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("journey");


  return (


    <>
      <section
        className="relative w-full h-[500px] md:h-[600px] flex pl-[12px] md:pl-[120px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "/online-consultation/online_consultation_bg.png",
        }}
      >
        {/* Blurred gradient shape */}
        <div
          className="absolute left-[-150px] top-[80px] w-[445px] h-[441px] rounded-full opacity-70"
          style={{
            background: "#94BA3D",
            filter: "blur(250px)",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* Left content */}
        <div className="relative z-10 mt-2 md:mt-[85px] max-w-5xl">
          <p className="text-[18px] text-gray-600 mb-2 md:mb-[44px]">
            <Link href="/" className="hover:text-blue-700 transition-colors">
              Home
            </Link>
            <span className="px-[12px]">›</span>
            <span
              className="inline-block px-3 py-1 rounded-md text-[18px] font-medium leading-[40px] tracking-[-0.36px] text-blue-700"
            >
              International Patient
            </span>
          </p>

          <h1 className="md:text-[5rem] font-bold leading-tight mb-[44px] text-[#252525]">
            IVF Treatment for International Patient
          </h1>
          <button className="mt-6 px-[20px] py-[16px] bg-black text-white rounded-[14px]">
            Book Your Appointment
          </button>
        </div>

        {/* Right image */}
        <div className="hidden md:block relative w-[591px] h-[600px] ml-auto mr-[150px]">
          <Image
            src="/online-consultation/Backgroundshape.png"
            alt="Background shape"
            fill
            className="object-contain object-bottom rounded-lg"
          />
          <Image
            src="/InternationalPatients/hero_person.png"
            alt="Doctor consultation"
            fill
            className="object-contain object-bottom rounded-lg "
          />
        </div>
      </section>

      <div className="flex flex-wrap gap-4 pt-[50px] px-[12px] md:px-[80px] xl:px-[120px] pb-[80px] bg-[#fff]">
        {/* Journey */}
        <button
          type="button"
          onClick={() => document.getElementById("journey-section")?.scrollIntoView({ behavior: "smooth" })}
          className={`px-[20px] py-[16px] rounded-[16px] 
      font-[Manrope] text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "journey"
              ? "bg-[#1656A5] text-white"
              : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
            }`}
        >
          Start Your Journey Today
        </button>

        {/* Advanced Fertility Solutions */}
        <button
          type="button"
          onClick={() => document.getElementById("fertility-section")?.scrollIntoView({ behavior: "smooth" })}
          className={`px-[20px] py-[16px] rounded-[16px] 
      font-[Manrope] text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "fertility"
              ? "bg-[#1656A5] text-white"
              : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
            }`}
        >
          Advanced Fertility Solutions
        </button>

        {/* Patients Testimonial */}
        <button
          type="button"
          onClick={() => document.getElementById("testimonial-section")?.scrollIntoView({ behavior: "smooth" })}
          className={`px-[20px] py-[16px] rounded-[16px] 
      font-[Manrope] text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "testimonial"
              ? "bg-[#1656A5] text-white"
              : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
            }`}
        >
          Patients Testimonial
        </button>

        {/* Featured News & Media */}
        <button
          type="button"
          onClick={() => document.getElementById("news-section")?.scrollIntoView({ behavior: "smooth" })}
          className={`px-[20px] py-[16px] rounded-[16px] 
      font-[Manrope] text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "news"
              ? "bg-[#1656A5] text-white"
              : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
            }`}
        >
          Featured News & Media
        </button>
      </div>
    </>
  )
};

// ---------- Section 2 ----------
const steps = [
  {
    number: "01",
    title: "Connect With Us",
    image: "/InternationalPatients/connect.png",
    subtitle: "Begin your treatment journey",
    sub_description: "Fill the form and our team will guide you",
    description: [

      "Clear answers to your questions",
      "Suggested personalized treatment plan",
      "Documentation checklist",
      "Pre/post treatment guidance",
    ],
  },
  {
    number: "02",
    title: "Secure Your Visa",
    image: "/InternationalPatients/visa.png",
    subtitle: "Confirm your treatment & travel",
    sub_description:
      "Once treatment is confirmed, we assist in visa processing.Provide all necessary medical documents. Accommodation and travel assistance,",
    description: []
  },
  {
    number: "03",
    title: "Arrive & Begin Treatment",
    image: "/InternationalPatients/arrive.png",
    subtitle: "We’re with you at every step",
    sub_description:
      "Meet your doctor & team personally. Start your planned treatment with comfort & clarity. 24x7 support during your stay",
    description: []

  },
];

const StepsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="journey-section" className="py-16 px-4 md:px-[80px] lg:px-[120px] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-1 items-start">
        {/* Left */}
        <div>
          <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
            Your Journey Made Simple
          </span>
          <h2 className="text-[48px] leading-[56px] font-normal text-[#2C2C2C] tracking-[-0.96px] font-[Manrope] mb-8">
            Your Steps to Begin
          </h2>
          <div className="inline-flex flex-col w-auto divide-y divide-gray-300 border-t border-b border-gray-300 mt-10">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex justify-between items-center text-left py-2 pr-[20px] transition ${activeIndex === idx ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
                  }`}
              >
                <span
                  className={`${activeIndex === idx ? "text-blue-600" : "text-[#2C2C2C]"
                    } font-[Manrope] text-[32px] leading-[56px] tracking-[-0.96px] font-normal`}
                >
                  {step.title}
                </span>
                <span className="ml-9">
                  {activeIndex === idx ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="6" fill="#1656A5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="6" fill="#A5A5A5" />
                    </svg>
                  )}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Right */}
        <div className="flex flex-col space-y-3">
          <p
            className="text-[#2C2C2C] font-[Manrope] text-[32px] font-normal leading-[40px] tracking-[-0.64px]"
          >
            A clear, step-by-step process to make your fertility treatment in
            India smooth, transparent, and stress-free.
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="rounded-2xl overflow-hidden shadow-md mr-10">
              <img
                src={steps[activeIndex].image}
                alt={steps[activeIndex].title}
                className="w-[300px] h-[280px] md:w-[600px] md:h-[450px] object-cover"
              />
            </div>
            <div className="w-[350px]">
              {/* Step Count */}
              <span
                className="
      block mb-1 font-[Manrope]
      text-[#606060] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
      md:text-[#94BA3D] md:text-[16px] md:leading-[24px] md:tracking-[-0.32px]

      md:mt-16
    "
              >
                0{activeIndex + 1}
              </span>

              {/* Subtitle */}
              <h3
                className="
      mb-2 font-[Manrope]
      text-[#2C2C2C] text-[16px] font-semibold leading-[24px] tracking-[-0.32px]
      md:text-[#1656A5] md:text-[32px] md:font-medium md:leading-[40px] md:tracking-[-0.64px]
    "
              >
                {steps[activeIndex].subtitle}
              </h3>

              <span

                className="
          font-[Manrope]
          text-[#606060] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
          md:text-[#2C2C2C] md:text-[16px] md:leading-[24px] md:tracking-[-0.32px]
        "
              >
                {steps[activeIndex].sub_description}
              </span>

              {/* Description List */}
              <ul className="space-y-2 list-disc list-inside text-gray-600 space-y-1">
                {steps[activeIndex].description.map((line, i) => (
                  <li
                    key={i}
                    className="
          font-[Manrope]
          text-[#606060] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
          md:text-[#2C2C2C] md:text-[16px] md:leading-[24px] md:tracking-[-0.32px]
        "
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const Letter = ({ char, index, total, scrollYProgress }) => {
  // Each letter animates in its slice of scroll progress
  const start = index / total;
  const end = (index + 1) / total;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(44,44,44,0.25)", "#2C2C2C"]
  );

  return (
    <motion.span
      style={{ color }}
      className="text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal"
    >
      {char}
    </motion.span>
  );
};

// Section 3: Treatments Grid
const TreatmentsSection = () => {

  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const text =
    "At Progenesis, we offer all advanced fertility treatments under one roof — from IVF and ICSI to embryo donation, genetic screening, and cryopreservation. Our global-standard care ensures international patients receive safe, personalized solutions to achieve their dream of parenthood.";


  const treatments = [
    {
      title: "In-Vitro Fertilization (IVF)",
      image: "/InternationalPatients/ivf1.png",
    },
    {
      title: "Embryo Donation (ED)",
      image: "/InternationalPatients/ivf2.png",
    },
    {
      title: "Oocyte Donation (OD)",
      image: "/InternationalPatients/ivf3.png",
    },
    {
      title: "IVF-ICSI",
      image: "/InternationalPatients/ivf4.png",
    },
    {
      title: "Laser Assisted Hatching",
      image: "/InternationalPatients/ivf5.png",
    },
    {
      title: "Blastocyst Transfer",
      image: "/InternationalPatients/ivf6.png",
    },
    {
      title: "Freezing / Vitrification",
      image: "/InternationalPatients/ivf7.png",
    },
    {
      title: "Genetic Screening",
      image: "/InternationalPatients/ivf8.png",
    },
  ];

  return (
    <section ref={ref} id="fertility-section" className=" bg-white pt-[40px]">
      <div
        className="px-4 md:px-[80px] lg:px-[120px] pt-4 py-3"
        style={{
          position: "sticky",
          top: 0,
          height: "38vh", // stick full screen
          overflow: "hidden",
        }}
      >
        <motion.div
          className="flex flex-col justify-center h-full"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [50, -100]),
            opacity: useTransform(scrollYProgress, [0.7, 1], [1, 0]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 0.9]),
          }}
          transition={{
            ease: [0.25, 0.1, 0.25, 1], // ease-in-out cubic bezier
            // smoother timing
          }}
        >


          <div className="flex flex-col xl:flex-row items-start justify-between gap-8 ">
            {/* Left */}
            <div className="w-[40%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
              <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
                Advanced Fertility Solutions
              </span>
              <h2 className="text-[48px] md:text-5xl font-light text-[#2c2c2c] mb-6">
                Personalized fertility care for every parenthood journey
              </h2>
              {/* <button className="px-[14px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition">
                View all treatments
              </button> */}
            </div>

            {/* Right (Animated Text) */}
            <div className="flex-1">
              {text.split("").map((char, i) => (
                <Letter
                  key={i}
                  char={char}
                  index={i}
                  total={text.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

<div className="px-4 md:px-[80px] lg:px-[120px] py-[50px]">
  <div
    className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4 
      gap-6
      justify-items-center
    "
  >
    {treatments.map((item, idx) => (
      <div
        key={idx}
        className="
          flex flex-col items-center justify-between
          w-full max-w-[350px]
          px-6 py-6 gap-[40px]
          bg-[rgba(22,86,165,0.05)] border rounded-2xl shadow-sm
          hover:shadow-md hover:scale-[1.02]
          transition-all duration-300
        "
      >
        {/* Title */}
        <h3
          className="
            text-[#2C2C2C] font-[Manrope] text-[24px] lg:text-[28px] xl:text-[32px]
            font-normal leading-[36px] lg:leading-[40px] tracking-[-0.64px]
            text-center
          "
        >
          {item.title}
        </h3>

        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="
            w-[250px] lg:w-[280px] xl:w-[299px]
            h-[220px] lg:h-[250px] xl:h-[267px]
            object-contain mix-blend-multiply
          "
        />
      </div>
    ))}
  </div>
</div>


    </section>
  )
};


// 🔹 Section 4: Testimonials

const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      text: "After years of failed attempts, Progenesis helped us find the cause, treated us with care, and blessed us with twins. Highly recommend them.",
      author: "– Gulelat Biamesh, Couple from Ethiopia",
    },
    {
      text: "The team was so supportive throughout my journey. Their care and expertise gave me hope again.",
      author: "– Priya Sharma, Progenesis Mom, Pune",
    },
    {
      text: "Every visit gave me more confidence. Today, I’m blessed with the family I always dreamed of.",
      author: "– Anjali Mehta, Progenesis Mom, Mumbai",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
      id="testimonial-section"
      className="w-full bg-blue-700 text-white py-[82px] h-[700px]"
    >
      <div className="flex items-center mx-auto px-6 md:px-[120px]">
        {/* 🔹 Left Panel */}
        <div className="flex flex-col justify-between w-[350px]">
          <h2
            className="text-[#F9F9F9] font-[Manrope] 
             text-[48px] font-normal leading-[56px] 
             tracking-[-0.96px] mb-8"
          >
            What our international patients are saying
          </h2>

          {/* Progress bar */}
          <div className="w-[200px] h-1 bg-white/30 rounded-full mb-4">
            <div
              className="h-1 bg-white rounded-full transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              }}
            ></div>
          </div>


          {/* Arrows + Progress bar */}
          <div className="flex items-center space-x-4 mt-6">
            <button
              ref={prevRef}
              className="w-14 h-14 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="w-14 h-14 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* 🔹 Right Carousel */}
        <div className="w-[509px] mr-[16px]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            // pagination={{ clickable: true }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div
                  className="flex flex-col justify-between 
                            w-[509px] h-[536px] flex-shrink-0 
                            px-[43px] py-[96px] 
                            bg-white text-gray-800 rounded-2xl shadow-lg"
                >
                  {/* Testimonial text */}
                  <p className="text-[#1656A5] font-[Manrope] 
                              text-[32px] leading-[40px] tracking-[-0.64px] font-normal">
                    After years of failed attempts, Progenesis helped us find the cause,
                    treated us with care, and blessed us with twins. Highly recommend them.
                  </p>

                  {/* Author */}
                  <span className="mt-[80px] text-[rgba(44,44,44,0.5)] 
                                  font-[Manrope] text-[16px] leading-[24px] tracking-[-0.32px]">
                    – Gulelat Biamesh, Couple from Ethiopia
                  </span>
                </div>


              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-[750px] ">
          <img
            src="/InternationalPatients/testimonial.png" // 🔹 add this image in /public/international/
            alt="Happy Family"
            className=" rounded-xl h-[536px] shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};


const TestimonialsSectionnnnn = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      text: "After years of failed attempts, Progenesis helped us find the cause, treated us with care, and blessed us with twins. Highly recommend them.",
      author: "– Gulelat Biamesh, Couple from Ethiopia",
    },
    {
      text: "The team was so supportive throughout my journey. Their care and expertise gave me hope again.",
      author: "– Priya Sharma, Progenesis Mom, Pune",
    },
    {
      text: "Every visit gave me more confidence. Today, I’m blessed with the family I always dreamed of.",
      author: "– Anjali Mehta, Progenesis Mom, Mumbai",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section
      id="testimonial-section"
      className="w-full bg-blue-700 text-white py-16 h-[700px]"
    >
      <div className="flex flex-row w-full items-center mx-auto px-6 md:px-[120px]">
        {/* 🔹 Left Panel */}
        <div className="flex flex-col justify-between w-[315px] ">
          <h2
            className="text-[#F9F9F9] font-[Manrope] 
                       text-[48px] font-normal leading-[56px] 
                       tracking-[-0.96px] pt-[172px] mb-8"
          >
            What our international patients are saying
          </h2>

          {/* Progress Bar + Arrows */}
          <div className="mt-6 w-full">
            {/* Progress bar */}
            <div className="w-full h-1 bg-white/30 rounded-full mb-4">
              <div
                className="h-1 bg-white rounded-full transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Arrows */}
            <div className="flex items-center space-x-4">
              <button
                ref={prevRef}
                className="w-10 h-10 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                ←
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Middle Swiper */}
        <div className="flex-shrink-0 ml-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div
                  className="flex flex-col justify-between 
                             w-[549px] h-[536px] flex-shrink-0 
                             px-[83px] py-[96px] 
                             bg-white text-gray-800 rounded-2xl shadow-lg"
                >
                  {/* Testimonial text */}
                  <p className="text-[#1656A5] font-[Manrope] 
                                text-[32px] leading-[40px] tracking-[-0.64px] font-normal">
                    {t.text}
                  </p>

                  {/* Author */}
                  <span className="mt-[80px] text-[rgba(44,44,44,0.5)] 
                                  font-[Manrope] text-[16px] leading-[24px] tracking-[-0.32px]">
                    {t.author}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🔹 Right Image */}
        <div className="flex-shrink-0">
          <img
            src="/InternationalPatients/testimonial.png"
            alt="Happy Family"
            className="w-[549px] h-[536px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};


const tabs = ["Awards & Certifications", "Knowledge Center"];

const awards = [
  {
    year: "2022-23",
    title: "Best Hospital for Reproductive Medicine...",
    subtitle: "Business Excellence and Research Group (BERG) Singapore.",
    image: "/awards/awards.png", // ✅ public folder
  },
  {
    year: "2016-17",
    title: "World's Greatest Brand & World's Greatest Leaders",
    subtitle: "URS and ASIA ONE in Dubai.",
    image: "/awards/awards.png", // ✅ public folder
  },
  {
    year: "2017-18",
    title: "India's Fastest Growing Brand in IVF",
    subtitle: "URS and ASIA ONE in Dubai.",
    image: "/awards/awardsb.png", // ✅ public folder
  },
  {
    year: "2023-24",
    title: "The Number 1 IVF Centre for Emerging IVF Centre Category",
    subtitle: "The Times of India.",
    image: "/awards/awardsc.png", // ✅ public folder
  },
];

const AwardsSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="news-section" className="bg-gray-50 pt-[42px] md:pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: heading + tabs (always first visually) */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs px-[12] py-1 rounded-full">
              Featured News & Media
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:px-[48] font-light text-gray-900 leading-tight">
              In the News <br /> On the Web
            </h2>

            {/* Tabs */}
            <div className="mt-6 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`block font-[Manrope] text-[18px] md:text-[32px] font-normal leading-[40px] tracking-[-0.64px] ${activeTab === tab
                    ? "text-[#1656A5] border-b-2 border-[#1656A5] pb-1"
                    : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right column: tab content */}
          <div>
            {activeTab === "Awards & Certifications" ? (
              <div className="mt-2">
                {/* Grid: single column on mobile, two columns from sm/md */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {awards.map((award, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl shadow-sm overflow-hidden transition hover:shadow-m h-[490px]
                      md:p-[24px]"
                    >
                      <div className="flex justify-between mb-4 text-[#606060]/50 font-[Manrope] text-[15.8px] font-medium leading-[26.3px] tracking-[-0.316px]">
                        <span>{award.year}</span>
                        <span>Awards</span>
                      </div>
                      <div className="w-full h-44 sm:h-40 md:h-44 lg:h-48 rounded-2xl  overflow-hidden">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="pt-4 sm:pt-5 flex flex-col h-[150px]">
                        <h3
                          className="text-[#2C2C2C] font-[Manrope] text-[20px] font-normal leading-[28px] tracking-[-0.4px] pb-[57px]"
                        >
                          {award.title}
                        </h3>

                        <p
                          className="text-[#606060] font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] opacity-50 mt-3"
                        >
                          {award.subtitle}
                        </p>
                      </div>


                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Knowledge Center
                </h4>
                <p className="text-sm text-gray-600">
                  Articles, guides and patient resources will appear here.
                  (Replace this placeholder with your real content.)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


// 🔹 Full Page
export default function InternationalPatientsPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <StepsSection />

      <GradientBanner text="Our specialists address your concerns, explain treatment steps, ensure safe care, and arrange hassle-free accommodation with comfort, transport, and support." />

      <TreatmentsSection />
      <TestimonialsSection />

      {/* Section 6: Awards */}
      <AwardsSection />

      {/* Section 7: Consultation Form */}
      <ConsultationForm />
    </main>
  );
}
