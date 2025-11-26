"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Award {
  year: string;
  title: string;
  subtitle: string;
  city: string;
  image: string;
}

interface Knowledge {
  year: string;
  title: string;
  subtitle: string;
  image: string;
  views: string;
  url: string;
}

const tabs = ["Awards & Certifications", "Knowledge Center"];

const awards: Award[] = [
  {
    year: "2022-23",
    title: "Best Hospital for Reproductive Medicine...",
    subtitle: "Business Excellence and Research Group (BERG) Singapore",
    city: "",
    image: "/awards/awards.webp",
  },
  {
    year: "2016-17",
    title: "World's Greatest Brand & World's Greatest Leaders",
    subtitle: "URS and ASIA ONE",
    city: "In Dubai",
    image: "/awards/awardsa.webp",
  },
  {
    year: "2017-18",
    title: "India's Fastest Growing Brand in IVF,Brand in IVF",
    subtitle: "URS and ASIA ONE",
    city: "In Dubai",
    image: "/awards/awardsb.webp",
  },
  {
    year: "2023-24",
    title: "The Number 1 IVF Centre for Emerging IVF Centre Category",
    subtitle: "The Times",
    city: "of India",
    image: "/awards/awardsc.webp",
  },
];

export default function AwardsSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [knowledge, setKnowledge] = useState<Knowledge[]>([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const extractPText = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const pElements = doc.querySelectorAll('p');
    return Array.from(pElements).map(p => p.textContent).join(' ');
  };

  const getRelativeTime = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "today";
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/post-seo-meta/?page_size=4&page=1`);
        if (response.ok) {
          const data = await response.json();
          const fetchedKnowledge: Knowledge[] = data.results.map((blog: any) => ({
            year: getRelativeTime(blog.post_modified),
            title: blog.post_title.length > 40 ? blog.post_title.substring(0, 40) + "..." : blog.post_title,
            subtitle: extractPText(blog.post_content).length > 200 ? extractPText(blog.post_content).substring(0, 200) + "..." : extractPText(blog.post_content),
            image: blog.image,
            url: blog.post_name,
          }));
          setKnowledge(fetchedKnowledge);
        } else {
          const mockKnowledge: Knowledge[] = [
            {
              year: "1 month ago",
              title: "Mock Blog 1",
              subtitle: "This is a mock description for testing...",
              image: "/awards/kc1.png",
              views: "2k views",
              url: "/blog/mock1",
            },
            {
              year: "1 month ago",
              title: "Mock Blog 2",
              subtitle: "Another mock description...",
              image: "/awards/kc2.png",
              views: "2k views",
              url: "/blog/mock2",
            },
          ];
          setKnowledge(mockKnowledge);
        }
      } catch (error) {
        const mockKnowledge: Knowledge[] = [
          {
            year: "1 month ago",
            title: "Mock Blog 1",
            subtitle: "This is a mock description for testing...",
            image: "/awards/kc1.png",
            views: "2k views",
            url: "/blog/mock1",
          },
          {
            year: "1 month ago",
            title: "Mock Blog 2",
            subtitle: "Another mock description...",
            image: "/awards/kc2.png",
            views: "2k views",
            url: "/blog/mock2",
          },
        ];
        setKnowledge(mockKnowledge);
      }
    };
    fetchBlogs();
  }, []);

  const data = activeTab === "Awards & Certifications" ? awards : knowledge;

  const handleNext = () => {
    setMobileIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setMobileIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className=" pt-4 md:pt-[84px] px-4 md:px-[80px] lg:px-[120px] csLg:pb-[60px] w-full">
      <div className="w-full">
        <div className="flex csLg:flex-row flex-col space-y-6 justify-between  w-full">
          {/* Left column */}
          <div className="">
            <span className="inline-block bg-[#1656A50D]  text-blue-700 text-xs px-3  rounded-full">
              Featured News & Media
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight">
              In the News &<br /> On the Web
            </h2>

            {/* Tabs */}
            <div className="mt-10 space-y-6 ">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileIndex(0);
                  }}
                  className={`block text-left font-[Manrope] text-[20px] md:text-[32px] leading-[40px] font-normal tracking-[-0.64px] pb-2 border-b-2 transition-all duration-200 ${activeTab === tab
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
          <div className="">
            {/* Desktop view */}
            <div className="hidden lg:block mt-2">
              <div className="grid grid-cols-2 gap-x-[20px] gap-y-[32px]">
                {data.map((item, idx) => (
                  activeTab === "Knowledge Center" ? (
                    <Link key={idx} href={`/blog/${(item as Knowledge).url}`}>
                      <article
                        className="bg-white rounded-[16px]  csLg:min-w-[350px] csLg:max-w-[350px] csLg:h-[415px] overflow-hidden transition hover:shadow-md p-[24px] flex flex-col cursor-pointer"
                      >
                        <div className="flex items-center gap-1.5 mb-3 text-[#606060]/70 font-[Manrope] text-[14px] font-medium leading-[22px] tracking-[-0.3px]">
                          <span>{item.year}</span>
                        </div>

                        <div className="w-full h-[180px] b rounded-xl overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="pt-5 flex flex-col gap-[24px]    flex-1">
                          <h3 className="text-[#2C2C2C] font-[Manrope] text-[20px] font-medium leading-[28px] tracking-[-0.4px]">
                            {item.title}
                          </h3>

                          <div>

                            <p className="text-[#606060] font-[Manrope] text-[15px] leading-[24px] opacity-60 mt-2">
                              {item.subtitle}
                            </p>
                          </div>

                        </div>
                      </article>
                    </Link>
                  ) : (
                    <article
                      key={idx}
                      className="bg-white rounded-[16px]  csLg:min-w-[350px] csLg:max-w-[350px] csLg:h-[415px] overflow-hidden transition hover:shadow-md p-[24px] flex flex-col "
                    >
                      <div className="flex items-center gap-1.5 mb-3 text-[#606060]/70 font-[Manrope] text-[14px] font-medium leading-[22px] tracking-[-0.3px]">
                        <span>{item.year}</span>
                        <span>•</span>
                        <span>Awards</span>
                      </div>

                      <div className="w-full h-[180px] b rounded-xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="pt-5 flex flex-col gap-[24px]    flex-1">
                        <h3 className="text-[#2C2C2C] font-[Manrope] text-[20px] font-medium leading-[28px] tracking-[-0.4px]">
                          {item.title}
                        </h3>

                        <div>

                          <p className="text-[#606060] font-[Manrope] text-[15px] leading-[24px] opacity-60 mt-2">
                            {item.subtitle}
                          </p>
                          <p className="text-[#606060] font-[Manrope] text-[15px] leading-[24px] opacity-60 ">
                            {(item as Award).city}
                          </p>
                        </div>

                      </div>
                    </article>
                  )
                ))}
              </div>
            </div>

            {/* Mobile view */}
            <div className="lg:hidden  bg-white p-[19.3px] rounded-[12.96px]">
              {activeTab === "Knowledge Center" && knowledge.length > 0 ? (
                <article className="overflow-hidden p-0 cursor-pointer">
                    <div className="flex justify-between mb-3 text-[#606060]/70 font-[Manrope] text-[15px] font-medium leading-[24px] tracking-[-0.3px]">
                      <span>{data[mobileIndex].year}</span>
                    </div>

                    <Link href={"/blog/" + (data[mobileIndex] as Knowledge).url}>
                    <div className="w-full h-48 rounded-2xl overflow-hidden">
                      <img
                        src={data[mobileIndex].image}
                        alt={data[mobileIndex].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    </Link>

                    <div className="pt-4 flex flex-col justify-between">
                      <h3 className="text-[#2C2C2C] font-[Manrope] text-[20px] font-normal leading-[28px] tracking-[-0.4px]">
                        {data[mobileIndex].title}
                      </h3>

                      <p className="text-[#606060] font-[Manrope] text-[15px] font-normal leading-[24px] opacity-60 mt-2">
                        {data[mobileIndex].subtitle}
                      </p>
                    </div>

                    <div className="flex mt-6  items-center justify-between">
                      <div className="flex gap-3">

                        <button
                          onClick={handlePrev}
                          className="w-10 h-10 rounded-[8px] border-[1px] border-[#1656A5] flex items-center justify-center hover:bg-blue-50 transition"
                        >
                          <ArrowLeft className="w-5 h-5 text-[#1656A5]" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="w-10 h-10 rounded-[8px] border-[1px] border-[#1656A5] flex items-center justify-center hover:bg-blue-50 transition"
                        >
                          <ArrowRight className="w-5 h-5 text-[#1656A5]" />
                        </button>
                      </div>
                      <div className="">

                        <button className="px-4 py-2 bg-[#1656A5] text-white rounded-lg w-28" 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push("/blog");
                        }}>
                          See all
                        </button>
                      </div>
                    </div>
                  </article>
              ) : activeTab === "Awards & Certifications" ? (
                <article className="overflow-hidden p-0">
                  <div className="flex justify-between mb-3 text-[#606060]/70 font-[Manrope] text-[15px] font-medium leading-[24px] tracking-[-0.3px]">
                    <span>{data[mobileIndex].year}</span>
                    <span>Awards</span>
                  </div>

                  <div className="w-full h-48 rounded-2xl overflow-hidden">
                    <img
                      src={data[mobileIndex].image}
                      alt={data[mobileIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="pt-4 flex flex-col justify-between">
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
                      className="w-10 h-10 rounded-[8px] border-[1px] border-[#1656A5] flex items-center justify-center hover:bg-blue-50 transition"
                    >
                      <ArrowLeft className="w-5 h-5 text-[#1656A5]" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-[8px] border-[1px] border-[#1656A5] flex items-center justify-center hover:bg-blue-50 transition"
                    >
                      <ArrowRight className="w-5 h-5 text-[#1656A5]" />
                    </button>
                  </div>
                </article>
              ) : (
                <div className="flex items-center justify-center h-48">
                  <p className="text-gray-500">Loading Knowledge Center...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
