import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tabs = ["Awards & Certifications", "Knowledge Center"];

const awards = [
  {
    year: "2022-23",
    title: "Best Hospital for Reproductive Medicine...",
    subtitle: "Business Excellence and Research Group (BERG) Singapore.",
    image: "/awards/awards.png",
  },
  {
    year: "2016-17",
    title: "World's Greatest Brand & World's Greatest Leaders",
    subtitle: "URS and ASIA ONE in Dubai.URS and ASIA ONE in Dubai.",
    image: "/awards/awards.png",
  },
  {
    year: "2017-18",
    title: "India's Fastest Growing Brand in IVF,Brand in IVF",
    subtitle: "URS and ASIA ONE in Dubai.URS and ASIA ONE in Dubai",
    image: "/awards/awardsb.png",
  },
  {
    year: "2023-24",
    title: "The Number 1 IVF Centre for Emerging IVF Centre Category",
    subtitle: "The Times of India.URS and ASIA ONE in DubaiURS and ASIA ONE in Dubai",
    image: "/awards/awardsc.png",
  },
];

const knowledge = [
  {
    year: "1 month ago",
    title: "Breaking the Myths Around IVF",
    subtitle:
      "Discover the truth behind common misconceptions, so you can approach your fertility journey with clarity and confidence.",
    image: "/awards/kc1.png",
    views: "2k views",
  },
  {
    year: "1 month ago",
    title: "Nutrition for Fertility Success",
    subtitle:
      " Learn how small, mindful changes in your diet can create a healthier foundation for conception and IVF success.",
    image: "/awards/kc2.png",
    views: "2k views",
  },
  {
    year: "1 month ago",
    title: "Advanced Technology in IVF",
    subtitle:
      "Explore how innovations in reproductive science are transforming possibilities and bringing dreams to life.",
    image: "/awards/kc3.png",
    views: "2k views",
  },
  {
    year: "1 month ago",
    title: "Preparing for Parenthood",
    subtitle:
      "Steps you can take today to feel ready — emotionally, physically, and mentally — for the beautiful journey ahead.",
    image: "/awards/kc4.png",
    views: "2k views",
  },
];

export default function AwardsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [mobileIndex, setMobileIndex] = useState(0);

  const data = activeTab === "Awards & Certifications" ? awards : knowledge;

  const handleNext = () => {
    setMobileIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setMobileIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className="bg-gray-50 pt-[42px] md:pt-[84px] px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[80px] items-start">
          {/* Left column */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
              Featured News & Media
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              In the News &<br /> On the Web
            </h2>

            {/* Tabs */}
            <div className="mt-10 space-y-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileIndex(0);
                  }}
                  className={`block text-left font-[Manrope] text-[20px] md:text-[32px] leading-[40px] font-normal tracking-[-0.64px] pb-2 border-b-2 transition-all duration-200 ${
                    activeTab === tab
                      ? "text-[#1656A5] border-[#1656A5]"
                      : "text-gray-400 border-gray-200 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div>
            {/* Desktop view */}
            <div className="hidden lg:block mt-2">
              <div className="grid grid-cols-2 gap-x-[24px] gap-y-[32px]">
                {data.map((item, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden transition hover:shadow-md p-[24px] flex flex-col h-[415px]"
                  >
                    {/* <div className="flex justify-between mb-3 text-[#606060]/70 font-[Manrope] text-[15px] font-medium leading-[24px] tracking-[-0.3px]">
                      <span>{item.year}</span>
                      <span>
                        {activeTab === "Awards & Certifications"
                          ? "Awards"
                          : item.views}
                      </span>
                    </div> */}
                    <div className="flex items-center gap-1.5 mb-3 text-[#606060]/70 font-[Manrope] text-[14px] font-medium leading-[22px] tracking-[-0.3px]">
  {activeTab === "Awards & Certifications" ? (
    <>
      <span>{item.year}</span>
      <span>•</span>
      <span>Awards</span>
    </>
  ) : (
    <>
      <span>{item.views}</span>
      <span>•</span>
      <span>{item.year}</span>
    </>
  )}
</div>



                    <div className="w-full h-[180px] rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="pt-5 flex flex-col justify-between flex-1">
                      <h3 className="text-[#2C2C2C] font-[Manrope] text-[20px] font-medium leading-[28px] tracking-[-0.4px]">
                        {item.title}
                      </h3>

                      <p className="text-[#606060] font-[Manrope] text-[15px] leading-[24px] opacity-60 mt-2">
                        {item.subtitle}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Mobile view */}
            <div className="lg:hidden mt-4">
              <article className="overflow-hidden p-0">
                <div className="flex justify-between mb-3 text-[#606060]/70 font-[Manrope] text-[15px] font-medium leading-[24px] tracking-[-0.3px]">
                  <span>{data[mobileIndex].year}</span>
                  <span>
                    {activeTab === "Awards & Certifications"
                      ? "Awards"
                      : data[mobileIndex].views}
                  </span>
                </div>

                <div className="w-full h-48 rounded-2xl overflow-hidden">
                  <img
                    src={data[mobileIndex].image}
                    alt={data[mobileIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pt-4 flex flex-col">
                  <h3 className="text-[#2C2C2C] font-[Manrope] text-[20px] font-normal leading-[28px] tracking-[-0.4px]">
                    {data[mobileIndex].title}
                  </h3>

                  <p className="text-[#606060] font-[Manrope] text-[15px] font-normal leading-[24px] opacity-60 mt-2">
                    {data[mobileIndex].subtitle}
                  </p>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-lg border-2 border-[#1656A5] flex items-center justify-center hover:bg-blue-50 transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#1656A5]" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-lg border-2 border-[#1656A5] flex items-center justify-center hover:bg-blue-50 transition"
                  >
                    <ChevronRight className="w-5 h-5 text-[#1656A5]" />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
