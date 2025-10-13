"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection/herosection";
import StoriesSection from "@/components/Home/StoriesSection";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import NavigationTabs from "@/page-components/infertility-slug/NavigationTabs";
import TreatmentBasics from "@/page-components/treatment-slug/TreatmentBasics";
import WhyChooseSection from "@/page-components/treatment-slug/WhyChooseSection";
import ProcedureSteps from "@/page-components/treatment-slug/ProcedureSteps";
import SuccessRateSection from "@/page-components/treatment-slug/SuccessRateSection";
import ProcedureStepsNoImage from "./ProcedureNoImageSteps";
import GeneticTestingCards from "./GeneticTestingCards";

export default function MainTreatment({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState("basics");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 120;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      if (typeof history !== "undefined") {
        history.replaceState(null, "", `#${id}`);
      }
    }
    setActiveTab(id);
  };

  if (!data) {
    return <h1 className="p-6 text-red-600">Treatment data not found</h1>;
  }

  return (
    <div className="w-full flex flex-col">
      {/* Section 1: Hero */}
      <HeroSection
        breadcrumbs={data.breadcrumbs || [
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
        ]}
        title={data?.hero_title || "Hope, Science & Parenthood Begin Here"}
        buttonText={data?.hero_button_text || "Book Your Appointment"}
        buttonLink={data?.hero_button_link || "/book-appointment"}
        overlayImage={data?.hero_image || "/default-hero-bg.png"}
      />

      {/* Section 2: Navigation Tabs */}
      <NavigationTabs
        categories={data.categories}
        activeTab={activeTab}
        onTabClick={handleScroll}
      />

      {/* Section 3: Treatment Basics */}
      {data.basics && (
        <TreatmentBasics
          tag="Know the Basics"
          heading={data.basics_heading || "Understanding the Treatment"}
          items={data.basics}
        />
      )}

      {/* Section 4: Why Choose */}
      {data.points && data.points.length > 0 && (
        <WhyChooseSection
          tag={data.points_tag}
          heading={data.points_heading || "Key Benefits"}
          points={data.points}
        />
      )}
      {/* Section 5: Genetic Testing Cards */}
      {data.genetic_testing_cards && (
        <GeneticTestingCards
          tag={data.genetic_testing_cards.tag}
          heading={data.genetic_testing_cards.heading}
          cards={data.genetic_testing_cards.cards}
        />
      )}

      {/* Section 6: Procedure Steps */}
      {data.procedure_steps ? (
        <ProcedureSteps
          tag={data.procedure_tag}
          heading={data.procedure_heading || "Steps of the Procedure"}
          steps={data.procedure_steps}
        />
      ) : data.procedure_no_image_steps ? (
        <ProcedureStepsNoImage
          tag={data.procedure_no_image_steps.main_tag}
          heading={data.procedure_no_image_steps.main_heading || "Steps of the Procedure"}
          steps={data.procedure_no_image_steps.data}
        />
      ) : null}

      {/* Section 7: Success Rate */}
      {data.gradient_data && (
        <SuccessRateSection
          percentage={data.gradient_data}
          text={data.gradient_text}
        />
      )}

      {/* Section 8: Stories */}
      <section id="stories" className="scroll-mt-[120px]">
        <StoriesSection />
      </section>

      {/* Section 9: Consultation Form */}
      <ConsultationForm />
    </div>
  );
}
