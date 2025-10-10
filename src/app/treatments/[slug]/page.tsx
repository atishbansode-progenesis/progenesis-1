"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { treatments } from "@/data/treatments";
import HeroSection from "@/components/HeroSection/herosection";
import StoriesSection from "@/components/Home/StoriesSection";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import {
  Search,
  Microscope,
  Syringe,
  Lightbulb,
  HeartPulse,
  CheckCircle,
} from "lucide-react";

interface TreatmentPageProps {
  params: { slug: string };
}

const iconMap: Record<string, JSX.Element> = {
  Search: <Search className="w-6 h-6 text-[#1656A5]" />,
  Microscope: <Microscope className="w-6 h-6 text-[#1656A5]" />,
  Syringe: <Syringe className="w-6 h-6 text-[#1656A5]" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-[#1656A5]" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-[#1656A5]" />,
  CheckCircle: <CheckCircle className="w-6 h-6 text-[#1656A5]" />,
};

export default function TreatmentPage({ params }: TreatmentPageProps) {
  const { slug } = params;
  const treatment = treatments.find((t) => t.slug === slug);

  const [activeTab, setActiveTab] = useState<string>(
    treatment?.categories?.[0]?.id || ""
  );

  const points = treatment?.points || [];
  const [activePoint, setActivePoint] = useState<number>(0);

  useEffect(() => {
    if (points.length > 0) setActivePoint(0);
  }, [points]);

  if (!treatment) {
    return <h1 className="p-6 text-red-600">Treatment not found</h1>;
  }

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <HeroSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
          { label: "Advanced Treatment", href: "/treatments" },
          {
            label: treatment?.title?.split(" – ")[0] || "",
            href: `/treatments/${treatment?.slug || ""}`,
          },
        ]}
        title={treatment?.hero_title || "Hope, Science & Parenthood Begin Here"}
        buttonText={treatment?.hero_button_text || "Book Your Appointment"}
        buttonLink={treatment?.hero_button_link || "/book-appointment"}
        overlayImage={treatment?.hero_image || "/default-hero-bg.png"}
      />
      {/* Tabs */}
      {treatment.categories && (
        <div className="flex flex-nowrap md:flex-wrap gap-4 pt-[50px] px-[12px] md:px-[80px] xl:px-[120px] pb-[40px] md:pb-[80px] bg-[#fff] overflow-x-auto scrollbar-hide">
          {treatment.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px] 
                font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] 
                tracking-[-0.28px] transition 
                ${
                  activeTab === cat.id
                    ? "bg-[#1656A5] text-white"
                    : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}
      {/* Know the Basics */}
      {treatment.basics && (
        <section className="px-[12px] md:px-[80px] xl:px-[120px] py-[80px] bg-[#F9FBFF]">
          <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
            Know the Basics
          </span>
          <h2 className="text-[#2C2C2C] font-[Manrope] font-normal mb-[60px] text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]">
            Precision sperm selection for <br /> healthier embryos and
            pregnancies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatment.basics.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 rounded-[12px] bg-[#EEF5FF] border border-[#E6E6E6] p-6 hover:shadow-md transition"
              >
                {iconMap[item.icon] || null}
                <h3 className="text-[#2C2C2C] font-[Manrope] text-[32px] leading-[40px] tracking-[-0.64px] font-normal">
                  {item.title}
                </h3>
                <p className="text-[#606060] font-[Manrope] text-[16px] leading-[24px] opacity-80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Why Choose IMSI Section */}
      {points.length > 0 && (
        <section className="px-[12px] md:px-[80px] xl:px-[120px] py-[60px] bg-[#F5FAFF] hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] items-start">
            {/* Left Side */}
            <div className="flex flex-col md:pr-[40px]">
              <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-3 w-fit">
                Why Choose IMSI
              </span>

              <h2 className="text-[#2C2C2C] font-manrope font-normal mb-[40px] text-[28px] leading-[36px] md:text-[44px] md:leading-[52px]">
                Targeted Selection for <br /> Higher IVF Success
              </h2>

              <div className="flex flex-col divide-y divide-[#A5A5A5]">
                {points.map((point, idx) => (
                  <div
                    key={point.id}
                    className="py-5 cursor-pointer"
                    onClick={() => setActivePoint(idx)}
                  >
                    <div className="flex items-start justify-between">
                      <h3
                        className={`text-[#2C2C2C] font-[Manrope] text-[22px] md:text-[26px] leading-[32px] ${
                          activePoint === idx ? "text-[#1656A5]" : ""
                        }`}
                      >
                        {point.title}
                      </h3>
                      <span className="text-[#2C2C2C] font-[Manrope] text-[18px] md:text-[20px] font-medium">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {activePoint === idx && (
                      <p className="mt-2 text-[#606060] font-[Manrope] text-[15px] leading-[22px] opacity-80">
                        {point.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center h-full -mt-[70px] md:-mt-[20px]">
              <Image
                key={activePoint} // triggers re-render
                src={points[activePoint].image}
                alt={points[activePoint].title}
                width={800}
                height={520}
                className="rounded-[16px] w-full h-[520px] object-cover object-center transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </section>
      )}
      {/* for mmobile screen  */}
      {/* Why Choose IMSI Section - Mobile Slider Style */}
      {points.length > 0 && (
        <section className="px-[12px] md:px-[80px] xl:px-[120px] py-[60px] bg-[#F5FAFF] lg:hidden">
          {/* Desktop View - Keep Original Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-[50px] items-start">
            {/* Left Side */}
            <div className="flex flex-col md:pr-[40px]">
              <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-3 w-fit">
                Why Choose IMSI
              </span>

              <h2 className="text-[#2C2C2C] font-manrope font-normal mb-[40px] text-[28px] leading-[36px] md:text-[44px] md:leading-[52px]">
                Targeted Selection for <br /> Higher IVF Success
              </h2>

              <div className="flex flex-col divide-y divide-[#A5A5A5]">
                {points.map((point, idx) => (
                  <div
                    key={point.id}
                    className="py-5 cursor-pointer"
                    onClick={() => setActivePoint(idx)}
                  >
                    <div className="flex items-start justify-between">
                      <h3
                        className={`text-[#2C2C2C] font-[Manrope] text-[22px] md:text-[26px] leading-[32px] ${
                          activePoint === idx ? "text-[#1656A5]" : ""
                        }`}
                      >
                        {point.title}
                      </h3>
                      <span className="text-[#2C2C2C] font-[Manrope] text-[18px] md:text-[20px] font-medium">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {activePoint === idx && (
                      <p className="mt-2 text-[#606060] font-[Manrope] text-[15px] leading-[22px] opacity-80">
                        {point.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center h-full -mt-[70px] md:-mt-[20px]">
              <img
                key={activePoint}
                src={points[activePoint].image}
                alt={points[activePoint].title}
                className="rounded-[16px] w-full h-[520px] object-cover object-center transition-all duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Mobile View - Slider Cards */}
          <div className="lg:hidden">
            <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-3">
              Why Choose IMSI
            </span>

            <h2 className="text-[#2C2C2C] font-manrope font-normal mb-8 text-[28px] leading-[36px]">
              Targeted Selection for Higher IVF Success
            </h2>

            {/* Slider Card */}
            <div className="relative bg-white rounded-[16px] border border-[#E6E6E6] overflow-hidden shadow-sm">
              {/* Card Content */}
              <div className="p-6">
                <span className="text-[#1656A5] font-[Manrope] text-[16px] font-medium">
                  {String(activePoint + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[#1656A5] font-[Manrope] text-[20px] md:text-[24px] font-medium mt-2 mb-3">
                  {points[activePoint].title}
                </h3>
                <p className="text-[#606060] font-[Manrope] text-[14px] leading-[22px] mb-4">
                  {points[activePoint].description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full h-[280px] overflow-hidden">
                <img
                  key={activePoint}
                  src={points[activePoint].image}
                  alt={points[activePoint].title}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center items-center gap-2 py-4">
                {points.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePoint(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activePoint === idx
                        ? "w-8 bg-[#1656A5]"
                        : "w-2 bg-[#D9D9D9]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Step-by-step selection */}
      <section className="w-full bg-[#FAFAFA] px-6 md:px-12 lg:px-24 py-20">
        {/* Tag */}
        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          The IMSI Procedure
        </span>

        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] mb-12">
          Three steps closer to your parenthood journey
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Step 01 */}
          <div className="flex flex-col bg-white rounded-[16px] overflow-hidden shadow-sm transition ">
            <div className="h-[260px] md:h-[300px]">
              <Image
                src="/treatments/egg.png"
                alt="Egg collection process"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#F7FAFC] p-6 ">
              <span className="text-[#1656A5] font-manrope text-[18px] lg:gap[30px]  font-semibold block mb-2">
                01
              </span>
              <h3 className="text-[#2C2C2C] font-manrope text-[18px] md:text-[20px] font-semibold mb-1">
                Egg collection process
              </h3>
              <p className="text-[#2C2C2C] text-[14px] md:text-[16px] opacity-80 leading-[24px]">
                Retrieving eggs for future fertility preservation.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="flex flex-col bg-white rounded-[16px] overflow-hidden shadow-sm transition ">
            <div className="h-[260px] md:h-[300px]">
              <Image
                src="/treatments/sperm.png" // replace with your image path
                alt="Healthy sperm selection"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#F7FAFC] p-6">
              <span className="text-[#1656A5] font-manrope text-[18px] font-semibold block mb-2">
                02
              </span>
              <h3 className="text-[#2C2C2C] font-manrope text-[18px] md:text-[20px] font-semibold mb-1">
                Healthy sperm selection
              </h3>
              <p className="text-[#2C2C2C] text-[14px] md:text-[16px] opacity-80 leading-[24px]">
                Choosing optimal sperm for successful fertilization outcomes.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col bg-white rounded-[16px] overflow-hidden shadow-sm transition ">
            <div className="h-[260px] md:h-[300px]">
              <Image
                src="/treatments/Fertilization.png"
                alt="Fertilization and transfer"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#F7FAFC] p-6">
              <span className="text-[#1656A5] font-manrope text-[18px] font-semibold block mb-2">
                03
              </span>
              <h3 className="text-[#2C2C2C] font-manrope text-[18px] md:text-[20px] font-semibold mb-1">
                Fertilization and transfer
              </h3>
              <p className="text-[#2C2C2C] text-[14px] md:text-[16px] opacity-80 leading-[24px]">
                Combining eggs and sperm, implanting embryo.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Step-by-step selection section */}
      <section className="px-[12px] md:px-[80px] xl:px-[120px] py-[80px] bg-[#F9FBFF]">
        {/* Tag */}
        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          The PICSI Procedure
        </span>

        {/* Heading */}
        <h2
          className="text-[#2C2C2C] font-manrope font-normal mb-[60px] 
    text-[32px] leading-[40px] tracking-[-0.64px] 
    md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]"
        >
          Step-by-step selection of healthy <br /> sperm for stronger embryos.
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 01 */}
          <div className="flex flex-col gap-3 bg-[#F5FAFF] border border-[#E6E6E6] rounded-[16px] p-6 transition">
            <span className="text-[#1656A5] font-manrope text-[32px] font-medium">
              01
            </span>
            <h3 className="text-[#2C2C2C] font-manrope text-[16px]  lg:pt-[120px] md:text-[20px] font-semibold">
              Collection & Preparation
            </h3>
            <p className="text-[#606060] font-manrope text-[16px] leading-[24px] opacity-80">
              Semen samples are collected and processed to separate motile
              sperm.
            </p>
          </div>

          {/* Step 02 */}
          <div className="flex flex-col gap-3 bg-[#F5FAFF] border border-[#E6E6E6] rounded-[16px] p-6  transition">
            <span className="text-[#1656A5] font-manrope text-[32px] font-medium">
              02
            </span>
            <h3 className="text-[#2C2C2C]  lg:pt-[120px]  font-manrope text-[16px] md:text-[20px] font-semibold">
              Accurate Diagnosis
            </h3>
            <p className="text-[#606060] font-manrope text-[16px] leading-[24px] opacity-80">
              Sperm are placed in an HA dish, where only mature, DNA-intact ones
              bind naturally.
            </p>
          </div>

          {/* Step 03 */}
          <div className="flex flex-col gap-3 bg-[#F5FAFF] border border-[#E6E6E6] rounded-[16px] p-6  transition">
            <span className="text-[#1656A5] font-manrope text-[32px] font-medium">
              03
            </span>
            <h3 className="text-[#2C2C2C]  lg:pt-[120px] font-manrope text-[16px] md:text-[20px] font-semibold">
              Selection for Injection
            </h3>
            <p className="text-[#606060] font-manrope text-[16px] leading-[24px] opacity-80">
              Bound sperm are carefully picked and injected into the eggs
              (oocytes) through ICSI.
            </p>
          </div>

          {/* Step 04 */}
          <div className="flex flex-col gap-3 bg-[#F5FAFF] border border-[#E6E6E6] rounded-[16px] p-6  transition">
            <span className="text-[#1656A5] font-manrope text-[32px] font-medium">
              04
            </span>
            <h3 className="text-[#2C2C2C]  lg:pt-[120px]  font-manrope text-[16px] md:text-[20px] font-semibold">
              Fertilization & Embryo Transfer
            </h3>
            <p className="text-[#606060] font-manrope text-[16px] leading-[24px] opacity-80">
              Resulting embryos are cultured, and the best-quality ones are
              transferred into the uterus.
            </p>
          </div>
        </div>
      </section>
            {/* Success Rate */}     {" "}
      <section className="relative w-full flex justify-center items-center overflow-hidden px-6 md:px-12 lg:px-[120px] py-20">
               {" "}
        <div
          className="absolute left-[-100px] bottom-[-50px] rounded-full bg-[#94BA3D] blur-[250px]"
          style={{
            width: "348px",
            height: "280px",
            transform: "rotate(-2deg)",
          }}
        ></div>
        <div
          className="absolute right-[-200px] top-[-150px] rounded-full bg-[#1656A5] blur-[250px]"
          style={{
            width: "222px",
            height: "203px",
            transform: "rotate(-2deg)",
          }}
        ></div>
               {" "}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between w-full">
                   {" "}
          <h2 className="text-[#94BA3D] font-manrope text-[80px] md:text-[120px] font-normal leading-none tracking-[-2.4px] mb-6 md:mb-0">
                        {treatment?.gradient_data}         {" "}
          </h2>
                   {" "}
          <p className="text-[#94BA3D] font-manrope text-[32px] md:text-[48px] font-normal leading-[40px] md:leading-[56px] tracking-[-0.64px] md:tracking-[-0.96px] text-left md:text-right max-w-3xl">
                        {treatment?.gradient_text}         {" "}
          </p>
                 {" "}
        </div>
             {" "}
      </section>
      {/* Stories Section */}
      <StoriesSection />
      {/* Consultation Form */}
      <ConsultationForm />
    </div>
  );
}
