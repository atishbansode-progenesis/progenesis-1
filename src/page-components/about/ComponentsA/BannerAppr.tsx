'use client';

import React, { useRef, useState } from 'react';
import AppointmentForm from '../AppointmentForm';

// Slides: first one uses the exact content you already provided. Others are dummy and can be replaced later.
const slides = [
  {
    tab: 'Care That Fits You',
    image: "/images/banner1.png", // existing image path; replace as needed
    heading:
      "We provide fertility care that’s personal and flexible, designed to fit your unique journey to parenthood.",
    ctaPrimary: 'Book Your Appointment',
    ctaSecondary: 'Check My Fit',
    features: [
      {
        title: 'In-Depth Diagnosis First',
        desc: 'Finding real causes before treatment begins.',
        icon: '/images/icons/1.svg',
      },
      {
        title: 'Tailored Protocols',
        desc: 'Plans made for your body’s unique needs.',
        icon: '/images/icons/2.svg',
      },
      {
        title: 'Flexible Care',
        desc: 'In-clinic or teleconsultation options for your convenience.',
        icon: '/images/icons/3.svg',
      },
      {
        title: 'Smarter Progress',
        desc: 'Fewer treatment cycles, saving you time and stress.',
        icon: '/images/icons/4.svg',
      },
    ],
  },
  {
    tab: 'Science with Heart',
    image: "/images/banner2.png", // dummy image
    heading:
      'Every journey deserves honesty, compassion, and guidance. We help you choose with confidence through care.',
    ctaPrimary: 'Book Your Appointment',
    ctaSecondary: 'Check My Fit',
    features: [
      {
        title: 'Certified ART Lab',
        desc: 'Accredited labs for reliable fertility treatments.',
        icon: '/images/icons/5.svg',
      },
      {
        title: 'Advanced Techniques',
        desc: 'odern methods for higher success rates.',
        icon: '/images/icons/6.svg',
      },
      {
        title: 'Expert Care Team',
        desc: 'Dedicated embryologists offering personalized care.',
        icon: '/images/icons/7.svg',
      },
      {
        title: 'Personalized Care & Support',
        desc: 'Guidance on health, nutrition, and emotional well-being.',
        icon: '/images/icons/8.svg',
      },
    ],
  },
  {
    tab: 'Clear & Complete',
    image: "/images/banner3.png", // dummy image
    heading:
      'Transparent plans, clear pricing, and complete support designed for peace of mind.',
    ctaPrimary: 'Book Your Appointment',
    ctaSecondary: 'Check My Fit',
    features: [
      {
        title: 'Transparent costs & timelines',
        desc: 'Clear estimates and timelines to help you plan confidently.',
        icon: '/images/icons/9.svg',
      },
      {
        title: 'Success rates by age & treatment',
        desc: ' Realistic expectations based on age and treatment.',
        icon: '/images/icons/10.svg',
      },
      {
        title: 'Planning tools',
        desc: 'Cost estimates and timeline guidance.',
        icon: '/images/icons/11.svg',
      },
      {
        title: 'Patient resources & FAQs',
        desc: 'Easy guides, FAQs, and support information.',
        icon: '/images/icons/12.svg',
      },
    ],
  },
];

const BannerOfApproach: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const mobileSlideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopSlideRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Track which CTA is active per slide: 'primary' or 'secondary'. Default is 'primary'.
  const [ctaActive, setCtaActive] = useState<Record<number, 'primary' | 'secondary'>>({});

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#FAFAFA] pl-4 lg:pl-[120px] py-4 md:py-22" style={{overflow: 'visible', margin: 0}}>
      {/* Headings */}
      <div className="mb-8" style={{paddingBottom:'50px'}}>
        <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" style={{padding:'8px'}}>Our Approach</span>
        <h2 className="text-[34px] md:text-[44px] lg:text-[48px] leading-tight tracking-[-0.02em] text-[#2C2C2C] font-[Manrope] font-normal">
          Compassion Meets Science
        </h2>
      </div>

      {/* Tabs */}
      <div className="relative" style={{paddingBottom:'20px'}}>
        <div className="relative flex items-center justify-between gap-10 w-full max-w-none pb-3 pr-4 md:pr-15 lg:pr-[120px]">
          {slides.map((s, index) => (
            <button
              key={s.tab}
              
              onClick={() => {
                setActiveTab(index);
                // Scroll the corresponding slide into view (mobile or desktop)
                mobileSlideRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                desktopSlideRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
              }}
              className={`relative flex-1 text-center hover:cursor-pointer text-[15px] md:text-[16px] font-medium font-[Manrope] transition-colors ${
                activeTab === index ? 'text-[#1656A5]' : 'text-[#606060] hover:text-[#1656A5]'
              }`}
            >
              <span>{s.tab}</span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 w-full max-w-none h-[2px] pr-4 md:pr-15 lg:pr-30 ">
          {slides.map((_, index) => (
            <span
              key={`separator-${index}`}
              className={`transition-colors duration-300 ${
                activeTab === index ? 'bg-[#1656A5]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Banner - Mobile: horizontal scroll of all slides */}
      {/* Banner - Mobile: horizontal scroll of all slides */}
<div
  className="md:hidden py-5 pl-5"
  style={{
    position: "relative",
    left: "-20px",
    right: "0",
    top: "-20px",
    bottom: "-20px",
    width: "100%",
    zIndex: 10,
  }}
>
  <div
    className="flex overflow-x-auto gap-4 snap-x snap-mandatory"
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      height: "calc(100%)",
    }}
  >
    <style jsx>{`
      div::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {slides.map((s, index) => (
      <div
        key={s.tab}
        ref={(el) => {
          mobileSlideRefs.current[index] = el;
        }}
        className={`relative snap-start shrink-0 w-[100%] rounded-2xl bg-[#000000B2] overflow-hidden bg-cover bg-center text-[#F9F9F9] shadow-lg border border-white/10`}
        style={{
          backgroundImage: `url(${s.image})`,
          // 👉 Add right padding only to the last slide
          paddingRight: index === slides.length - 1 ? "16px" : "0px",
        }}
      >
        {/* Left dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0" />
        {/* Right subtle green tint */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-green-400/20 to-transparent z-0" />
        {/* Global dim overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Internal content with padding - tuned for mobile */}
        <div
          className="relative gap-4 z-10 p-5 space-y-5 font-[Manrope]"
          style={{ padding: "20px" }}
        >
          <h3
            className="text-[16px] leading-[22px] tracking-[-0.02em] font-normal text-[#F9F9F9]"
            style={{ paddingBottom: "20px" }}
          >
            {s.heading}
          </h3>

          <div
            className="flex flex-wrap gap-4 mt-5"
            style={{ paddingBottom: "20px" }}
          >
            <button
              onClick={() => {
                setCtaActive((prev) => ({ ...prev, [index]: "primary" }));
                setIsOpen(true);
              }}
              className={`hover:cursor-pointer ${
                (ctaActive[index] ?? "primary") === "primary"
                  ? "bg-[#FAFAFA] text-[#2C2C2C]"
                  : "border border-white/90 text-[#F9F9F9]"
              } h-[40px] px-4 rounded-[12px] text-xs font-semibold shadow-sm`}
              style={{ padding: "8px" }}
            >
              {s.ctaPrimary}
            </button>

            <button
              onClick={() =>
                setCtaActive((prev) => ({ ...prev, [index]: "secondary" }))
              }
              className={`${
                (ctaActive[index] ?? "primary") === "secondary"
                  ? "bg-[#FAFAFA] text-[#2C2C2C]"
                  : "border border-white/90 text-[#F9F9F9]"
              } h-[40px] px-4 rounded-[12px] hover:cursor-pointer text-xs font-medium`}
              style={{ padding: "8px" }}
            >
              {s.ctaSecondary}
            </button>

            {/* Modal */}
            {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
          </div>

          <div className="grid grid-cols-1 gap-2 max-w-[1100px] pt-5">
            {s.features.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[30px] h-[30px] object-contain"
                />
                <h4 className="font-semibold text-[#F9F9F9] text-[15px]">
                  {item.title}
                </h4>
                <p className="text-[13px] text-gray-200 leading-[18px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Banner - Desktop/Tablet carousel */}
      {/* Banner - Desktop/Tablet carousel */}
<div
  className="hidden md:block mt-10"
  style={{
    position: "relative",
    width: "100%",
    zIndex: 10,
  }}
>
  <div
    className="flex overflow-x-auto gap-4 snap-x snap-mandatory"
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      height: "calc(100%)",
    }}
  >
    <style jsx>{`
      div::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {slides.map((s, index) => (
      <div
        key={s.tab}
        ref={(el) => {
          desktopSlideRefs.current[index] = el;
        }}
        className={`relative snap-start shrink-0 min-h-[520px] rounded-2xl bg-[#000000B2] overflow-hidden bg-cover bg-center text-[#F9F9F9] shadow-lg border border-white/10 transition-all duration-500 ${
          index === slides.length - 1 ? "mr-[120px]" : "mr-0"
        } w-[calc(100%-120px)]`}
        style={{
          backgroundImage: `url(${s.image})`,
        }}
      >
        {/* Left dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0" />

        {/* Right subtle green tint */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-green-400/20 to-transparent z-0" />

        {/* Global dim overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Internal content */}
        <div
          className="relative z-10 p-6 md:p-10 lg:p-12"
          style={{
            paddingLeft: "60px",
            paddingTop: "80px",
            paddingRight: "60px",
          }}
        >
          <h3 className="font-manrope text-[28px] leading-[30px] tracking-[-0.02em] font-normal">
            {s.heading}
          </h3>

          <div
            className="flex flex-wrap gap-3 md:gap-4 mb-10"
            style={{ paddingTop: "30px", paddingBottom: "100px" }}
          >
            <button
              onClick={() => {
                setCtaActive((prev) => ({
                  ...prev,
                  [index]: "primary",
                }));
                setIsOpen(true);
              }}
              className={`${
                (ctaActive[index] ?? "primary") === "primary"
                  ? "bg-[#FAFAFA] text-[#2C2C2C]"
                  : "border border-white/90 text-[#F9F9F9]"
              } w-auto h-[56px] px-5 py-2.5 rounded-[16px] text-sm hover:cursor-pointer font-medium shadow-sm`}
            >
              {s.ctaPrimary}
            </button>

            <button
              onClick={() =>
                setCtaActive((prev) => ({
                  ...prev,
                  [index]: "secondary",
                }))
              }
              className={`${
                (ctaActive[index] ?? "primary") === "secondary"
                  ? "bg-[#FAFAFA] text-[#2C2C2C]"
                  : "border border-white/90 text-[#F9F9F9]"
              } w-[128px] h-[56px] px-5 py-2.5 rounded-[16px] hover:cursor-pointer text-sm font-medium`}
            >
              {s.ctaSecondary}
            </button>

            {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-[1100px] pb-4">
            {s.features.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[30px] h-[30px] object-contain"
                />
                <h4 className="font-semibold tracking-tight text-[15px] md:text-[16px]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default BannerOfApproach;
