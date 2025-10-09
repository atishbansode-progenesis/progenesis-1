"use client";

import Link from "next/link";
import { use } from "react";
import Image from "next/image";
import { treatments } from "@/data/treatments";
import HeroSection from "@/components/HeroSection/herosection";
import React, { useState } from "react";
import {
  Search,
  Microscope,
  Syringe,
  Lightbulb,
  HeartPulse,
  CheckCircle,
} from "lucide-react";
import StoriesSectionNew from "@/components/Storiescard-with-new-layout";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import GradientBanner from "@/components/GradientBanner";
import ParenthoodSection from "@/components/ParenthoodSection";

interface TreatmentPageProps {
  params: Promise<{ slug: string }>; // 👈 params is a Promise in Next.js 15
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
  const { slug } = use(params); // ✅ unwrap params
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return <h1 className="p-6 text-red-600">Treatment not found</h1>;
  }

  const [activeTab, setActiveTab] = useState<string>(
    treatment?.categories?.[0]?.id || "" // default first tab
  );

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
        <div
          className="flex flex-nowrap md:flex-wrap gap-4 pt-[50px] px-[12px] md:px-[80px] xl:px-[120px] pb-[40px] md:pb-[80px] bg-[#fff] overflow-x-auto scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch', minWidth: 0 }}
        >
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
          <h2 className="text-[#2C2C2C] font-[Manrope] font-normal mb-[60px] 
            text-[32px] leading-[40px] tracking-[-0.64px] 
            md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]">
            Precision sperm selection for <br /> healthier embryos and pregnancies
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


 {treatment.points && (

<section className="px-[12px] md:px-[80px] xl:px-[120px] py-[80px] bg-[#F5FAFF]">
  {/* Tag */}
  <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
    Why Choose IMSI
  </span>

  {/* Heading */}
  <h2 className="text-[#2C2C2C] font-manrope font-normal mb-[60px] 
    text-[32px] leading-[40px] tracking-[-0.64px] 
    md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]">
    Targeted Selection for <br /> Higher IVF Success
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Left side - points */}
    <div className="flex flex-col divide-y divide-[#A5A5A5]">
      {treatment.points.map((point, idx) => (
        <div key={point.id} className="py-6 flex items-start justify-between">
          <div>
            <h3 className="
              text-[#2C2C2C] font-[Manrope]
              text-[32px] leading-[40px] tracking-[-0.64px] font-normal
            ">
              {point.title}
            </h3>
            {point.description && (
              <p className="mt-2 text-[#606060] font-[Manrope] text-[16px] leading-[24px] opacity-80">
                {point.description}
              </p>
            )}
          </div>
          <span className="text-[#2C2C2C] font-[Manrope] text-[18px] md:text-[20px] font-medium">
            {String(idx + 1).padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>

    {/* Right side - Image */}
    <div className="flex items-center justify-center">
      <img
        src="/treatments/imsi/rs1.png" 
        className="rounded-[16px] w-full h-auto object-cover"
      />
    </div>
  </div>
</section>


        )}


      {/* Fertility Preservation */}
      {treatment.preservation && (
        <section className="w-full bg-[#FAFAFA] px-6 md:px-12 lg:px-24 py-20">
          <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
            Fertility Preservation
          </span>

          <h2 className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] md:tracking-normal mb-12">
            Future Parenthood Made Possible
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatment.preservation.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center rounded-[16px] h-[370px] md:h-[444px] bg-[#EEF1F5] md:bg-[rgba(22,86,165,0.12)] hover:bg-[#DDEBFF] transition p-6"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={238}
                  height={240}
                  className="w-[180px] h-[180px] md:w-[238px] md:h-[240px] object-contain"
                  style={{ mixBlendMode: "multiply" }}
                />
                <h3 className="mt-6 text-[#2C2C2C] font-manrope text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-normal tracking-[-0.64px]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      )}


       {/* 5️⃣ Success Rate */}
      <section className="relative w-full flex justify-center items-center overflow-hidden  px-6 md:px-12 lg:px-[120px] py-20">
        {/* Left Green Blur Ellipse */}
        <div
          className="absolute left-[-100px] bottom-[-50px] rounded-full bg-[#94BA3D] blur-[250px]"
          style={{
            width: "348px",
            height: "280px",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* Right Blue Blur Ellipse */}
        <div
          className="absolute right-[-200px] top-[-150px] rounded-full bg-[#1656A5] blur-[250px]"
          style={{
            width: "222px",
            height: "203px",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between w-full">
          {/* Percentage */}
          <h2 className="text-[#94BA3D] font-manrope text-[80px] md:text-[120px] font-normal leading-none tracking-[-2.4px] mb-6 md:mb-0">
            {treatment?.gradient_data}
          </h2>

          {/* Heading Text */}
          <p className="text-[#94BA3D] font-manrope text-[32px] md:text-[48px] font-normal leading-[40px] md:leading-[56px] tracking-[-0.64px] md:tracking-[-0.96px] text-left md:text-right max-w-3xl">
            {treatment?.gradient_text}
          </p>
        </div>
      </section>


      <StoriesSectionNew/>
      <ConsultationForm />
    
    </div>
  );
}
