"use client";

import Link from "next/link";
import { use } from "react";
import Image from "next/image";
import { treatments } from "@/data/treatments";
import HeroSection from "@/components/HeroSection/herosection";
import React, { useState } from "react";
import StoriesSection from "@/components/Home/StoriesSection";
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

interface TreatmentPageProps {
  params: Promise<{ slug: string }>;
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
  const { slug } = use(params);
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) {
    return <h1 className="p-6 text-red-600">Treatment not found</h1>;
  }

  const [activeTab, setActiveTab] = useState<string>(
    treatment?.categories?.[0]?.id || ""
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
        <div className="flex flex-wrap gap-4 pt-[50px] px-[12px] md:px-[80px] xl:px-[120px] pb-[80px] bg-[#fff]">
          {treatment.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px] 
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
          <h2
            className="text-[#2C2C2C] font-[Manrope] font-normal mb-[60px] 
            text-[32px] leading-[40px] tracking-[-0.64px] 
            md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]"
          >
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

      {treatment.points && (
     <section className="px-[12px] md:px-[80px] xl:px-[120px] py-[80px] bg-[#F5FAFF]">
  {/* Tag */}
  <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
    Why Choose IMSI
  </span>

  {/* Heading */}
  <h2
    className="text-[#2C2C2C] font-manrope font-normal mb-[60px] 
    text-[32px] leading-[40px] tracking-[-0.64px] 
    md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]"
  >
    Targeted Selection for <br /> Higher IVF Success
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
    {/* Left side - points */}
    <div className="flex flex-col divide-y divide-[#A5A5A5] md:pr-[40px]">
      {treatment.points.map((point, idx) => (
        <div
          key={point.id}
          className="py-6 flex items-start justify-between"
        >
          <div>
            <h3
              className="text-[#2C2C2C] font-[Manrope]
              text-[24px] md:text-[28px] leading-[36px] tracking-[-0.4px] font-normal"
            >
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
    <div className="flex items-center justify-center h-full">
      <img
        src="/treatments/imsi/rs1.png"
        className="rounded-[16px] w-full max-w-[800px] h-[500px] md:h-[600px] object-cover object-center"
      />
    </div>
  </div>
</section>

      )}

      {/* IMSI Procedure Section */}
      {((treatment as any)?.preservation ?? []).length > 0 && (
        <section className="px-[12px] md:px-[120px] py-[80px] bg-white font-[Manrope]">
          {/* Label */}
          <div className="mb-4">
            <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
              The IMSI Procedure
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[#2C2C2C] text-[48px] md:text-[40px] font-normal leading-[36px] md:leading-[52px] tracking-[-0.64px] mb-12">
            Three steps closer to your <br /> parenthood journey
          </h2>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {((treatment as any)?.preservation ?? []).map(
              (step: any, index: number) => (
                <div
                  key={index}
                  className="rounded-[12px] overflow-hidden shadow-sm bg-[#F9FAFB] hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-[260px] w-full relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                <div className="p-6 bg-[#F9FAFB] flex flex-col gap-[30px]">
  <p className="text-[#1656A5] font-semibold text-[18px]">
    {String(index + 1).padStart(2, "0")}
  </p>
  <div>
    <h3 className="text-[#2C2C2C] font-medium text-[16px] mb-1">
      {step.title}
    </h3>
    {step.description && (
      <p className="text-[#6B7280] text-[14px] leading-[22px]">
        {step.description}
      </p>
    )}
  </div>
</div>

                </div>
              )
            )}
          </div>
        </section>
      )}

      {/* Step-by-step selection of healthy sperm for stronger embryos */}
      <section className="px-[12px] md:px-[80px] xl:px-[120px] py-[80px] bg-[#F9FBFF]">
        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          The PICSI Procedure
        </span>
        <h2
          className="text-[#2C2C2C] font-manrope font-normal mb-[60px] 
          text-[32px] leading-[40px] tracking-[-0.64px] 
          md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]"
        >
          Step-by-step selection of healthy <br /> sperm for stronger embryos.
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "01",
              title: "Collection & Preparation",
              desc: "Semen samples are collected and processed to separate motile sperm.",
            },
            {
              num: "02",
              title: "Accurate Diagnosis",
              desc: "Sperm are placed in an HA dish, where only mature, DNA-intact ones bind naturally.",
            },
            {
              num: "03",
              title: "Selection For Injection",
              desc: "Bound sperm are carefully picked and injected into the eggs (oocytes) through ICSI.",
            },
            {
              num: "04",
              title: "Fertilization & Embryo Transfer",
              desc: "Resulting embryos are cultured, and the best-quality ones are transferred into the uterus.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 bg-[#F5FAFF] border border-[#E6E6E6] rounded-[16px] p-6 transition"
            >
              <span className="text-[#1656A5] font-manrope text-[32px] font-medium">
                {step.num}
              </span>
              <h3 className="text-[#2C2C2C] font-manrope lg:mt-[120px] lg:gap-[8px] text-[16px] md:text-[20px] font-semibold">
                {step.title}
              </h3>
              <p className="text-[#2C2C2C] font-manrope text-[16px] leading-[24px] opacity-80">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Rate */}
      <section className="relative w-full flex justify-center items-center overflow-hidden px-6 md:px-12 lg:px-[120px] py-20">
        <div
          className="absolute left-[-100px] bottom-[-50px] rounded-full bg-[#94BA3D] blur-[250px]"
          style={{ width: "348px", height: "280px", transform: "rotate(-2deg)" }}
        ></div>
        <div
          className="absolute right-[-200px] top-[-150px] rounded-full bg-[#1656A5] blur-[250px]"
          style={{ width: "222px", height: "203px", transform: "rotate(-2deg)" }}
        ></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <h2 className="text-[#94BA3D] font-manrope text-[80px] md:text-[120px] font-normal leading-none tracking-[-2.4px] mb-6 md:mb-0">
            {treatment?.gradient_data}
          </h2>
          <p className="text-[#94BA3D] font-manrope text-[32px] md:text-[48px] font-normal leading-[40px] md:leading-[56px] tracking-[-0.64px] md:tracking-[-0.96px] text-left md:text-right max-w-3xl">
            {treatment?.gradient_text}
          </p>
        </div>
      </section>

      <StoriesSection />
      <ConsultationForm />
    </div>
  );
}
