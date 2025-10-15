// pages/infertility/repeated-iui-failures/index.tsx
"use client";
import { useState } from "react";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import StoriesSection from "@/components/Home/StoriesSection";
import HeroSection from "@/components/HeroSection/herosection";
import NavigationTabs from "@/page-components/infertility-slug/NavigationTabs";
import InfoGrid from "@/page-components/infertility-slug/InfoGrid";
import CarouselSection from "@/page-components/infertility-slug/CarouselSection";
import StatisticsVisual from "@/page-components/infertility-slug/StatisticsVisual";
import StepsSection from "@/page-components/infertility-slug/StepsSection";
import GradientBanner from "@/page-components/infertility-slug/GradientBanner";
import SymptomSection from "@/page-components/infertility-slug/SymptomSection";
import AppointmentForm from "../about/AppointmentForm";

export default function MainInfertility({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState("about");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 120; // adjust if your sticky header height differs
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      // update hash without causing an abrupt jump
      if (typeof history !== "undefined") {
        history.replaceState(null, "", `#${id}`);
      }
    }
    setActiveTab(id);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Section 1: Hero */}
      <HeroSection
        breadcrumbs={data.hero.breadcrumbs}
        title={data.hero.title}
        buttonText={data.hero.buttonText}
        buttonLink={data.hero.buttonLink}
        overlayImage={data.hero.overlayImage}
        overlayImageSmall={data.hero.overlayImageSmall}
        breadcrumbColor={data.hero.breadcrumbColor}
        breadcrumbActiveColor={data.hero.breadcrumbActiveColor}
        titleColor={data.hero.titleColor}
        buttonBgColor={data.hero.buttonBgColor}
        buttonTextColor={data.hero.buttonTextColor}
      />

      {/* Section 2: Navigation Tabs */}
      <NavigationTabs
        categories={data.categories}
        activeTab={activeTab}
        onTabClick={handleScroll}
      />

      {/* Section 3: Info Grid */}
      <InfoGrid
        tag={data.infoGrid.tag}
        heading={data.infoGrid.heading}
        items={data.infoGrid.items}
      />

      {/* Section 4: Carousel */}
      <CarouselSection
        tag={data.carousel.tag}
        heading={data.carousel.heading}
        slides={data.carousel.slides}
      />

      {/* Section 5: Statistics Visual */}
      {data.statistics ? <StatisticsVisual
        tag={data.statistics.tag}
        heading={data.statistics.heading}
        staticsData={data.statistics}
        blueCircleData={data.statistics.blueCircleData}
        greenCircleData={data.statistics.greenCircleData}
        skyCircleData={data.statistics.skyCircleData}
      /> : <SymptomSection
        properties={data.cardStatistics}
      />}

      {/* Section 6: Steps */}
      <StepsSection
        tag={data.steps.tag}
        heading={data.steps.heading}
        steps={data.steps.steps}
        autoRotate={true}
        rotateInterval={5000}
      />

      {/* Section 7: Stories */}
      <section id="stories-section" className="scroll-mt-[120px]">
        <StoriesSection />
      </section>

      {/* <ConsultationForm /> */}
      <AppointmentForm />

      {/* Section 9: Gradient Banner */}
      <GradientBanner
        text={data.banner.text}
        textColor={data.banner.textColor}
        leftGradientColor={data.banner.leftGradientColor}
        rightGradientColor={data.banner.rightGradientColor}
      />
    </div>
  );
}