"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import ConsultationForm from "@/components/Consultation/ConsultationForm";


const slides = [
  {
    id: "01",
    title: "Poor Egg Quality",
    description:
      "Eggs that are not healthy or mature enough can reduce the chances of successful fertilization and embryo development.",
    image: "/InfertilityIssues/rght 1.png",
  },
  {
    id: "02",
    title: "Low Sperm Quality",
    description:
      "Issues like low sperm count, poor motility, or abnormal shape can reduce the chances of sperm reaching and fertilizing the egg.",
    image: "/InfertilityIssues/rght 2.png",
  },
  {
    id: "03",
    title: "Hormonal Imbalance",
    description:
      "Irregular hormone levels can disrupt ovulation or affect the uterine environment, making conception difficult.",
    image: "/InfertilityIssues/rght 3.png",
  },
  {
    id:"04" ,
    title: "Uterine Abnormalities",
    description:
      "Conditions like fibroids or polyps can interfere with implantation, lowering the success rate of IUI.",
    image: "/InfertilityIssues/rght 4.png",
  },
];

export default function InfertilityIssues() {
  const [activeIndex, setActiveIndex] = useState(0);


  
  const [activeTab, setActiveTab] = useState("journey");

  return (
    <div className="w-full flex flex-col">
      {/* Section 1 */}
      <section
        className="relative w-full h-[500px] md:h-[600px] flex pl-[12px] md:pl-[120px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/InfertilityIssues/s-1bg1.png')",
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
            Home<span className="px-[12px]">›</span>
            <span
              className="inline-block px-3 py-1 rounded-md text-[18px] font-medium leading-[40px] tracking-[-0.36px]"
              style={{ color: "var(--Blue, #1656A5)" }}
            >
              Online Consultation
            </span>
          </p>
          <h1
            className="text-3xl md:text-[80px] font-bold leading-tight mb-[44px]"
            style={{ color: "#252525" }}
          >
            IVF & Fertility
            <br /> Online Consultation
          </h1>
          <button className="mt-6 px-[20px] py-[16px] bg-black text-white rounded-[16px]">
            Book Your Appointment
          </button>
        </div>
      </section>

     {/* Section 5 */}
      <section className="w-full px-6 md:px-20 py-16 bg-white">
        {/* Small Tag */}
        <span
          className="inline-block px-3 py-1 mb-6 rounded-full text-[12px] font-medium leading-[20px] tracking-[-0.24px] text-[#1656A5] bg-[#F3F8FE]"
          style={{ fontFamily: "Manrope" }}
        >
          Know the Basics
        </span>

        {/* Main Heading */}
        <h2
          className="w-full text-[48px] font-normal leading-[56px] tracking-[-0.96px] text-[#2C2C2C] mb-12"
          style={{ fontFamily: "Manrope" }}
        >
          Repeated IUI failures: causes, signs, <br />
          and treatments for parenthood.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          {/* Items ... */}
          {/* Your existing grid items unchanged */}
        </div>
      </section>



      
      <div className="flex flex-wrap gap-4 pt-[50px] px-[12px] md:px-[80px] xl:px-[120px] pb-[80px] bg-[#fff]">
        <button
          type="button"
          onClick={() => document.getElementById("journey-section")?.scrollIntoView({ behavior: "smooth" })}
          className={`px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px] 
      font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "journey"
              ? "bg-[#1656A5] text-white"
              : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
            }`}
        >
          Start Your Journey Today
        </button>

        <button
          type="button"
          onClick={() => document.getElementById("how-section")?.scrollIntoView({ behavior: "smooth" })}
          className={`px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px]  
      font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "how"
              ? "bg-[#1656A5] text-white"
              : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
            }`}
        >
          How It Works
        </button>

        <button
          type="button"
          onClick={() => document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" })}
          className={`px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px]  
      font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "quiz"
              ? "bg-[#1656A5] text-white"
              : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
            }`}
        >
          Take a Quiz
        </button>
      </div>



      
 {/* Section 2 */}
      <section className="w-full bg-[#F1F7FC] overflow-hidden font-[Manrope]">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-0">
        {/* Two-column wrapper */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between h-auto lg:h-[989px]">
          
          {/* LEFT DIV */}
          <div className="w-full lg:w-[860px] flex flex-col gap-6 px-6 lg:pl-20 lg:pr-6 py-10 lg:py-20">
            {/* Chip */}
            <span className="inline-block px-2 py-1 bg-[rgba(22,86,165,0.05)] text-[#1656A5] text-xs font-medium rounded-md w-fit tracking-tight">
              Causes
            </span>

            {/* Heading */}
            <h2 className="text-[#2C2C2C] text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[44px] lg:leading-[56px] font-normal tracking-[-0.96px]">
              Key Reasons Behind IUI Failure and Their Impact on Conception
            </h2>
{/* Dots */}
            <div className="flex gap-3 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-[10px] h-[10px] rounded-full transition-all duration-200 ${
                    i === activeIndex ? "bg-[#1656A5]" : "bg-[#C9C9C9]"
                  }`}
                />
              ))}
            </div>
            {/* Slide number + content */}
            <div className="mt-4">
              <div className="text-[#94BA3D] text-[16px] leading-[24px] tracking-[-0.32px]">
                {slides[activeIndex].id}
              </div>

              <h3 className="text-[#1656A5] text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] lg:leading-[40px] tracking-[-0.64px] mt-2">
                {slides[activeIndex].title}
              </h3>

              <p className="text-[#2C2C2C] text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] mt-3 max-w-[680px]">
                {slides[activeIndex].description}
              </p>
            </div>

            
          </div>

          {/* RIGHT DIV (Image only) */}
          <div className="w-full lg:flex-1 flex justify-end lg:pr-20 mt-8 lg:mt-0">
            <div className="w-full max-w-[1248px] aspect-[1248/601] rounded-lg overflow-hidden relative">
              <img
                key={activeIndex}
                src={slides[activeIndex].image}
                alt={slides[activeIndex].title}
                className="w-full h-full object-cover block transition-opacity duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
   {/* Section 3 */}
    <section className="w-full bg-white px-6 md:px-16 py-12 md:py-20">
      {/* Top Tag */}
      <p className="text-[12px] font-medium tracking-[-0.24px] leading-[20px] text-[#1656A5] md:mb-4 mb-2">
        IUI Failures Explained
      </p>

      {/* Heading */}
      <h2 className="font-manrope text-[28px] md:text-[40px] font-semibold leading-[36px] md:leading-[48px] tracking-[-0.64px] text-[#2C2C2C] max-w-[600px]">
        Learn the numbers, Take control of your fertility journey
      </h2>

      {/* Sub text (only mobile, hidden on desktop) */}
      <p className="mt-4 block md:hidden font-manrope text-[16px] leading-[24px] tracking-[-0.32px] text-[#2C2C2C]">
        We believe every hopeful parent deserves a team that listens, cares, and
        fights to make dreams a reality — with science, empathy, and unwavering
        support.
      </p>

      {/* Circle Section */}
      <div className="relative w-full flex justify-center items-center mt-10 md:mt-16">
        {/* Circle 1 */}
        <div className="absolute -left-6 md:left-40 top-0 md:top-12 w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-[#E5F1FF] flex items-center justify-center">
          <span className="font-manrope font-semibold text-lg md:text-2xl text-[#2C2C2C]">
            5–10%
          </span>
        </div>
        {/* Circle 2 */}
        <div className="absolute left-24 md:left-80 top-12 md:top-0 w-[200px] h-[200px] md:w-[450px] md:h-[450px] rounded-full bg-[#C3DCFB] flex items-center justify-center">
          <span className="font-manrope font-semibold text-lg md:text-3xl text-[#2C2C2C]">
            60–70%
          </span>
        </div>
        {/* Circle 3 */}
        <div className="absolute left-16 md:left-64 bottom-[-40px] md:bottom-[-80px] w-[160px] h-[160px] md:w-[320px] md:h-[320px] rounded-full bg-[#E7FBB9] flex items-center justify-center">
          <span className="font-manrope font-semibold text-lg md:text-2xl text-[#2C2C2C]">
            3–4 Cycles
          </span>
        </div>
      </div>

      {/* Description Texts */}
      <div className="mt-52 md:mt-[500px] grid md:grid-cols-3 gap-6 text-left">
        <p className="font-manrope text-sm md:text-base text-[#606060] leading-[20px] md:leading-[24px]">
          The success rate of a single IUI cycle is only 5–10%, meaning multiple
          attempts are often needed.
        </p>
        <p className="font-manrope text-sm md:text-base text-[#606060] leading-[20px] md:leading-[24px]">
          Switching to IVF or ICSI can raise success rates to 60–70% per cycle
          in suitable cases.
        </p>
        <p className="font-manrope text-sm md:text-base text-[#606060] leading-[20px] md:leading-[24px]">
          If you’ve had 3–4 failed IUI cycles, it’s time to consult your doctor
          about advanced options.
        </p>
      </div>
    </section>

 {/* Section 4 */}


  

      {/* Section 4: Form */}
      <ConsultationForm />
    </div>
  );
};
