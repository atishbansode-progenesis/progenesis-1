// pages/infertility/repeated-iui-failures/index.tsx
"use client";
import { useState } from "react";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import StoriesSection from "@/components/Home/StoriesSection";
import HeroSection from "@/components/HeroSection/herosection";
import { repeatedIUIFailuresData } from "@/components/data/repeatedIUIFailuresData";
import NavigationTabs from "@/page-components/infertility-slug/NavigationTabs";
import InfoGrid from "@/page-components/infertility-slug/InfoGrid";
import CarouselSection from "@/page-components/infertility-slug/CarouselSection";
import StatisticsVisual from "@/page-components/infertility-slug/StatisticsVisual";
import StepsSection from "@/page-components/infertility-slug/StepsSection";
import GradientBanner from "@/page-components/infertility-slug/GradientBanner";

export default function InfertilityIssues() {
  const [activeTab, setActiveTab] = useState("journey");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab(id);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Section 1: Hero */}
      <HeroSection
        breadcrumbs={repeatedIUIFailuresData.hero.breadcrumbs}
        title={repeatedIUIFailuresData.hero.title}
        buttonText={repeatedIUIFailuresData.hero.buttonText}
        buttonLink={repeatedIUIFailuresData.hero.buttonLink}
        overlayImage={repeatedIUIFailuresData.hero.overlayImage}
      />

      {/* Section 2: Navigation Tabs */}
      <NavigationTabs
        categories={repeatedIUIFailuresData.categories}
        activeTab={activeTab}
        onTabClick={handleScroll}
      />

      {/* Section 3: Info Grid */}
      <InfoGrid
        tag={repeatedIUIFailuresData.infoGrid.tag}
        heading={repeatedIUIFailuresData.infoGrid.heading}
        items={repeatedIUIFailuresData.infoGrid.items}
      />

      {/* Section 4: Carousel */}
      <CarouselSection
        tag={repeatedIUIFailuresData.carousel.tag}
        heading={repeatedIUIFailuresData.carousel.heading}
        slides={repeatedIUIFailuresData.carousel.slides}
      />

      {/* Section 5: Statistics Visual */}
      <StatisticsVisual
        tag={repeatedIUIFailuresData.statistics.tag}
        heading={repeatedIUIFailuresData.statistics.heading}
        circles={repeatedIUIFailuresData.statistics.circles}
      />

      {/* Section 6: Steps */}
      <StepsSection
        tag={repeatedIUIFailuresData.steps.tag}
        heading={repeatedIUIFailuresData.steps.heading}
        steps={repeatedIUIFailuresData.steps.steps}
        autoRotate={true}
        rotateInterval={5000}
      />

      {/* Section 7: Stories */}
      <section id="stories-section">
        <StoriesSection />
      </section>

      {/* Section 8: Consultation Form */}
      <ConsultationForm />

      {/* Section 9: Gradient Banner */}
      <GradientBanner
        text={repeatedIUIFailuresData.banner.text}
        textColor={repeatedIUIFailuresData.banner.textColor}
        leftGradientColor={repeatedIUIFailuresData.banner.leftGradientColor}
        rightGradientColor={repeatedIUIFailuresData.banner.rightGradientColor}
      />
    </div>
  );
}