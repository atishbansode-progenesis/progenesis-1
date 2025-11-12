"use client";
import React, { useState, Suspense, useEffect } from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection/herosection";
import { ArrowUpRight } from "lucide-react";
import StoriesSection from "@/components/Home/StoriesSection";
import {
  WhatIsInfertility,
  FemaleInfertilitySection,
  MaleInfertilitySection,
  GradientBanner,
  CATEGORIES,
  FEMALE_INFERTILITY_ISSUES,
  MALE_INFERTILITY_ISSUES,
  FeatureCardProps,
} from "@/page-components/infertilityV1";
import AppointmentForm from "@/page-components/about/AppointmentForm";
import NavigationTabs from "@/page-components/infertility-slug/NavigationTabs";
import InfertilityHero from "@/page-components/infertilityV1/InfertilityHero";

export function FeatureCard({ title, description, href }: FeatureCardProps) {
  const cardContent = (
    <div
      className="
        flex flex-col gap-3 rounded-[16px] p-6 bg-[#F9FAFB]
        transition-colors duration-300 hover:bg-[#F1F7FC]
        cursor-pointer h-full
      "
    >
      <div className="flex flex-col items-start gap-3">
        <span className="flex h-8 w-16 items-center justify-center rounded-full bg-black text-white shrink-0">
          <ArrowUpRight className="w-4 h-4" />
        </span>
        <h4
          className="
            text-[#2C2C2C] font-[Manrope] opacity-70
            text-[16px] leading-[24px] tracking-[-0.32px] font-semibold
            md:text-[28px] md:leading-[36px] md:tracking-[-0.64px] md:font-normal
          "
        >
          {title}
        </h4>
      </div>
      <p
        className="
          text-[#606060] font-[Manrope] opacity-70
          text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]
        "
      >
        {description}
      </p>
    </div>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
}

const Infertility: React.FC<{ category: string }> = ({ category }) => {
  const [activeTab, setActiveTab] = useState<string>("path");

    useEffect(() => {
      const sections = document.querySelectorAll("section[id]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(entry.target.id);
            }
          });
        },
        {
          threshold: 0, 
          rootMargin: "0px 0px -80% 0px", 
        }
      );
  
      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
    }, []);


  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab(id);
  };

  return (
    <div className="w-full flex flex-col">
      <InfertilityHero />

      <NavigationTabs
        categories={CATEGORIES}
        activeTab={activeTab}
        onTabClick={handleScroll}
      />

    <section id="path">
      <WhatIsInfertility />
    </section>

    <section id="fertility-section">
      <FemaleInfertilitySection issues={FEMALE_INFERTILITY_ISSUES} />
    </section>

    <section  id="fertility-mini-section" >
      <MaleInfertilitySection issues={MALE_INFERTILITY_ISSUES} />
      
    </section>

      <section id="stories-section" className="">
        <StoriesSection />
      </section>

      {/* <NewConstaltentForm /> */}
      <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
        <AppointmentForm />
      </Suspense>

      <GradientBanner />
    </div>
  );
};

export default Infertility;