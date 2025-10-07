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
        icon: '🔍',
      },
      {
        title: 'Tailored Protocols',
        desc: 'Plans made for your body’s unique needs.',
        icon: '🧬',
      },
      {
        title: 'Flexible Care',
        desc: 'In-clinic or teleconsultation options for your convenience.',
        icon: '💻',
      },
      {
        title: 'Smarter Progress',
        desc: 'Fewer treatment cycles, saving you time and stress.',
        icon: '⚡',
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
      { title: 'Certified ART Lab', desc: 'Accredited labs for reliable fertility treatments.', icon: '📊' },
      { title: 'Advanced Techniques', desc: 'odern methods for higher success rates.', icon: '🧪' },
      { title: 'Expert Care Team', desc: 'Dedicated embryologists offering personalized care.', icon: '👩‍⚕️' },
      { title: 'Personalized Care & Support', desc: 'Guidance on health, nutrition, and emotional well-being.', icon: '🫶' },
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
      { title: 'Transparent costs & timelines', desc: 'Clear estimates and timelines to help you plan confidently.', icon: '💡' },
      { title: 'Success rates by age & treatment', desc: ' Realistic expectations based on age and treatment.', icon: '🗺️' },
      { title: 'Planning tools', desc: 'Cost estimates and timeline guidance.', icon: '🤝' },
      { title: 'Patient resources & FAQs', desc: 'Easy guides, FAQs, and support information.', icon: '✅' },
    ],
  },
];

const BannerOfApproach: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Track which CTA is active per slide: 'primary' or 'secondary'. Default is 'primary'.
  const [ctaActive, setCtaActive] = useState<Record<number, 'primary' | 'secondary'>>({});

  // Clamp navigation: no wrap-around. Also scroll mobile carousel.
  const goNext = () =>
    setActiveTab((prev) => {
      const next = Math.min(prev + 1, slides.length - 1);
      // Smooth scroll on mobile carousel (no effect on desktop banner)
      // Use rAF to ensure state updates do not interfere with scroll target calculation
      if (typeof window !== 'undefined') {
        requestAnimationFrame(() => {
          slideRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        });
      }
      return next;
    });

  const goPrev = () =>
    setActiveTab((prev) => {
      const next = Math.max(prev - 1, 0);
      if (typeof window !== 'undefined') {
        requestAnimationFrame(() => {
          slideRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        });
      }
      return next;
    });

  const current = slides[activeTab];
  const isFirst = activeTab === 0;
  const isLast = activeTab === slides.length - 1;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white px-6 md:px-12 lg:px-[90px] py-10 md:py-12 section-spacing" >
      {/* Headings */}
      <div className="mb-8" style={{paddingBottom:'50px'}}>
        <span className="inline-block bg-[#E9F0FF] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" style={{padding:'8px'}}>Our Approach</span>
        <h2 className="text-[34px] md:text-[44px] lg:text-[48px] leading-tight tracking-[-0.02em] text-black font-[Manrope] font-normal">
          Compassion Meets Science
        </h2>
      </div>

      {/* Tabs */}
      <div className="relative" style={{paddingBottom:'20px'}}>
        {/* Grey baseline across full width */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
        <div className="relative flex items-center justify-between gap-10 max-w-5xl pb-4">
          {slides.map((s, index) => (
            <button
              key={s.tab}
              onClick={() => {
                setActiveTab(index);
                // Scroll the corresponding mobile slide into view
                slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
              }}
              className={`relative text-center text-[15px] md:text-[16px] font-medium font-[Manrope] transition-colors ${
                activeTab === index ? 'text-[#1656A5]' : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              {s.tab}
              {/* Short blue underline sitting on the baseline */}
              {activeTab === index && (
                <span className="pointer-events-none absolute -bottom-[1px] left-1/2 -translate-x-1/2 h-[2px] w-[120px] bg-[#1656A5]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Banner - Mobile: horizontal scroll of all slides */}
      <div className="md:hidden mt-10 p-5 h-auto">
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory px-5">
          {slides.map((s, index) => (
            <div
              key={s.tab}
              ref={(el) => (slideRefs.current[index] = el)}
              className="relative snap-start shrink-0 w-[88%] h-auto rounded-2xl bg-[#000000B2] overflow-hidden bg-cover bg-center text-white shadow-lg border border-white/10"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              {/* Left dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0" />
              {/* Right subtle green tint */}
              <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-green-400/20 to-transparent z-0" />
              {/* Global dim overlay */}
              <div className="absolute inset-0 bg-black/30 z-0" />

              {/* Internal content with padding - tuned for mobile */}
              <div className="relative gap-4 z-10 p-5 space-y-5 font-[Manrope]" style={{padding:'20px'}}>
                <h3 className="text-[16px] leading-[22px] tracking-[-0.02em] font-normal text-white" style={{paddingBottom:'20px'}}>
                  {s.heading}
                </h3>
                <div className="flex flex-wrap gap-4 mt-5" style={{paddingBottom:'20px'}}>
                  <button
                    onClick={() => {setCtaActive((prev) => ({ ...prev, [index]: 'primary' })); setIsOpen(true);}}
                    className={`${(ctaActive[index] ?? 'primary') === 'primary' ? 'bg-white text-black' : 'border border-white/90 text-white'} h-[40px] px-4 rounded-[12px] text-xs font-semibold shadow-sm`}
                    style={{padding:'8px'}}
                  >
                    {s.ctaPrimary}
                  </button>
                  <button
                    onClick={() => setCtaActive((prev) => ({ ...prev, [index]: 'secondary' }))}
                    className={`${(ctaActive[index] ?? 'primary') === 'secondary' ? 'bg-white text-black' : 'border border-white/90 text-white'} h-[40px] px-4 rounded-[12px] text-xs font-medium`}
                    style={{padding:'8px'}}
                  >
                    {s.ctaSecondary}
                  </button>
                  {/* Modal */}
            {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
                </div>
                <div className="grid grid-cols-1 gap-2 max-w-[1100px] pt-5">
                  {s.features.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <span className="text-xl">{item.icon}</span>
                      <h4 className="font-semibold text-white text-[15px]">{item.title}</h4>
                      <p className="text-[13px] text-gray-200 leading-[18px]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner - Desktop/Tablet unchanged */}
      <div
        className="hidden md:flex relative w-full md:h-auto h-[520px] rounded-2xl bg-[#000000B2] overflow-hidden bg-cover bg-center text-white  shadow-lg mt-10"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        {/* Left dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0" />
        {/* Right subtle green tint */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-green-400/20 to-transparent z-0" />
        {/* Global dim overlay to reduce image clarity to ~70% visibility */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Internal content with padding */}
        <div className="relative z-10 p-6 md:p-10 lg:p-12" style={{paddingLeft:'60px', paddingTop:'80px', paddingRight:'60px'}}>
          <h3 className="font-manrope text-[28px] leading-[30px] tracking-[-0.02em] font-normal">
            {current.heading}
          </h3>
          <div className="flex flex-wrap gap-3 md:gap-4 mb-10" style={{paddingTop:'30px', paddingBottom:'100px'}}>
            <button
              onClick={() => {setCtaActive((prev) => ({ ...prev, [activeTab]: 'primary' })); setIsOpen(true);}}
              className={`${(ctaActive[activeTab] ?? 'primary') === 'primary' ? 'bg-white text-black' : 'border border-white/90 text-white'} w-[183px] h-[56px] px-5 py-2.5 rounded-[16px] text-sm font-semibold shadow-sm`}
            >
              {current.ctaPrimary}
            </button>
            <button
              onClick={() => setCtaActive((prev) => ({ ...prev, [activeTab]: 'secondary' }))}
              className={`${(ctaActive[activeTab] ?? 'primary') === 'secondary' ? 'bg-white text-black' : 'border border-white/90 text-white'} w-[128px] h-[56px] px-5 py-2.5 rounded-[16px] text-sm font-medium`}
            >
                {current.ctaSecondary}
            </button>
            {/* Modal */}
            {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-[1100px]">
            {current.features.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-semibold text-[15px] md:text-[16px]">{item.title}</h4>
                <p className="text-sm text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prev / Next buttons */}
      <div className="w-full flex items-center justify-center mt-6 gap-4" style={{paddingTop:'20px'}}>
        <button
          aria-label="Previous slide"
          onClick={goPrev}
          disabled={isFirst}
          className={`h-[56px] w-[56px] font-bold rounded-[16px] border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 ${
            isFirst ? 'opacity-40 cursor-not-allowed hover:bg-transparent' : ''
          }`}
        >
          ←
        </button>
        <button
          aria-label="Next slide"
          onClick={goNext}
          disabled={isLast}
          className={`h-[56px] w-[56px] font-bold rounded-[16px] border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 ${
            isLast ? 'opacity-40 cursor-not-allowed hover:bg-transparent' : ''
          }`}
        >
          →
        </button> 
      </div>
    </div>
  );
};

export default BannerOfApproach;
