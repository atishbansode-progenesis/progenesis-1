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

// Data configurations
const pageData = {
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Infertility", href: "/infertility" },
      { label: "Female Infertility", href: "/infertility" },
      { label: "Repeated IUI Failures", href: "infertility/repeated-iui-failures/" },
    ],
    title: "Repeated IUI Failures",
    buttonText: "Book Your Appointment",
    buttonLink: "/book-appointment",
    overlayImage: "/InfertilityIssues/s-1bg1.png",
  },

  categories: [
    { id: "path", label: "What is Infertility" },
    { id: "fertility-section", label: "Female Infertility Causes" },
    { id: "fertility-mini-section", label: "Male Infertility Causes" },
    { id: "stories-section", label: "Real Stories. Real Miracles." },
  ],

  infoGrid: {
    tag: "Know the Basics",
    heading: "Repeated IUI failures: causes, signs, <br />and treatments for parenthood.",
    items: [
      {
        id: 1,
        title: "Definition",
        description:
          "Multiple IUI failure occurs when repeated attempts at intrauterine insemination (IUI) do not result in pregnancy, often after 3–4 cycles.",
      },
      {
        id: 2,
        title: "Possible Reasons",
        description:
          "Poor sperm/egg quality, age, timing issues, endometrial problems, hormonal imbalance.",
      },
      {
        id: 3,
        title: "Symptoms & Impact",
        description:
          "The primary sign is the inability to conceive after multiple cycles, often leading to emotional distress, financial strain, and frustration.",
      },
      {
        id: 4,
        title: "Treatment Options",
        description:
          "Depending on the cause, options like IVF, ICSI, or other advanced treatments are advised with expert guidance.",
      },
      {
        id: 5,
        title: "Emotional Impact",
        description:
          "Repeated failures can lead to frustration, anxiety, and strain on relationships, making emotional support and counseling vital.",
      },
      {
        id: 6,
        title: "When to Seek Expert Help",
        description:
          "If IUI fails after several cycles, consult a fertility specialist to assess causes and explore advanced treatment options.",
      },
    ],
  },

  carousel: {
    tag: "Causes",
    heading: "Key Reasons Behind IUI Failure and Their<br/> Impact on Conception",
    slides: [
      {
        id: "01",
        title: "Poor Egg Quality",
        description:
          "Eggs that are not healthy or mature enough can reduce the chances of successful fertilization and embryo development.",
        image: "/InfertilityIssues/rght 1.png",
      },
      {
        id: "02",
        title: "Low Sperm Quality",
        description:
          "Issues like low sperm count, poor motility, or abnormal shape can reduce the chances of sperm reaching and fertilizing the egg.",
        image: "/InfertilityIssues/rght 2.png",
      },
      {
        id: "03",
        title: "Hormonal Imbalance",
        description:
          "Irregular hormone levels can disrupt ovulation or affect the uterine environment, making conception difficult.",
        image: "/InfertilityIssues/rght 3.png",
      },
      {
        id: "04",
        title: "Uterine Abnormalities",
        description:
          "Conditions like fibroids or polyps can interfere with implantation, lowering the success rate of IUI.",
        image: "/InfertilityIssues/rght 4.png",
      },
    ],
  },

  statistics: {
    tag: "IVF Failures Explained",
    heading: "Learn the numbers, Take control of your fertility journey",
    circles: [
      {
        value: "60–70%",
        description:
          "For women under the age of 35, IVF success rates are encouraging, ranging between 60–70%.",
        position: { right: "8%", top: "23%" },
        size: { width: "150px", height: "150px" },
        bgColor: "bg-[#E5F1FF]",
        lineWidth: "470px",
        textPosition: { right: "0%", top: "28%" },
      },
      {
        value: "5–10%",
        description:
          "Only a small percentage—around 5–10% of couples—face repeated failures even after multiple attempts.",
        position: { right: "8%", top: "0%" },
        size: { width: "180px", height: "180px" },
        bgColor: "bg-[#C3DCFB]",
        lineWidth: "670px",
        textPosition: { right: "5%", top: "30%" },
      },
      {
        value: "3–4<br />Cycles",
        description:
          "In many cases, it may take 3 to 4 cycles before achieving a successful pregnancy, which is completely normal in fertility treatments.",
        position: { right: "20%", bottom: "10%" },
        size: { width: "160px", height: "160px" },
        bgColor: "bg-[#E4F8B6]",
        lineWidth: "570px",
        textPosition: { right: "6%", bottom: "35%" },
      },
    ],
  },

  steps: {
    tag: "Fast Facts",
    heading: "Recommended Next Steps After Repeated IVF Failures",
    steps: [
      {
        id: 1,
        label: "Advanced Testing & Diagnosis",
        title: "Diagnosing Critical Barriers to Successful Implantation",
        items: [
          "Genetic testing screens embryos for chromosomal abnormalities, reducing miscarriage risks.",
          "Hormonal profiling identifies deficiencies affecting implantation.",
          "Uterine evaluation detects structural or lining issues.",
          "Immune system assessment ensures proper maternal tolerance of embryo.",
        ],
        image: "/InfertilityIssues/rght 1.png",
      },
      {
        id: 2,
        label: "Personalized Treatment Plan",
        title: "Tailored Interventions for Your IVF Journey",
        items: [
          "Customized medication protocol for optimal response.",
          "Lifestyle and nutrition guidance to enhance implantation.",
          "Targeted therapies for recurrent implantation failure.",
          "Continuous monitoring to adjust treatment as needed.",
        ],
        image: "/InfertilityIssues/rght 2.png",
      },
      {
        id: 3,
        label: "Holistic & Emotional Support",
        title: "Supporting Mind, Body & Emotions",
        items: [
          "Stress reduction strategies and counseling.",
          "Mind-body therapies to improve fertility outcomes.",
          "Support groups for emotional well-being.",
          "Education and guidance for informed decisions.",
        ],
        image: "/InfertilityIssues/rght 3.png",
      },
    ],
  },

  banner: {
    text: "Repeated failures don't mean the end; they mean it's time for a new plan.",
    textColor: "#94BA3D",
    leftGradientColor: "#94BA3D",
    rightGradientColor: "#1656A5",
  },
};

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
        breadcrumbs={pageData.hero.breadcrumbs}
        title={pageData.hero.title}
        buttonText={pageData.hero.buttonText}
        buttonLink={pageData.hero.buttonLink}
        overlayImage={pageData.hero.overlayImage}
      />

      {/* Section 2: Navigation Tabs */}
      <NavigationTabs
        categories={pageData.categories}
        activeTab={activeTab}
        onTabClick={handleScroll}
      />

      {/* Section 3: Info Grid */}
      <InfoGrid
        tag={pageData.infoGrid.tag}
        heading={pageData.infoGrid.heading}
        items={pageData.infoGrid.items}
      />

      {/* Section 4: Carousel */}
      <CarouselSection
        tag={pageData.carousel.tag}
        heading={pageData.carousel.heading}
        slides={pageData.carousel.slides}
      />

      {/* Section 5: Statistics Visual */}
      <StatisticsVisual
        tag={pageData.statistics.tag}
        heading={pageData.statistics.heading}
        circles={pageData.statistics.circles}
      />

      {/* Section 6: Steps */}
      <StepsSection
        tag={pageData.steps.tag}
        heading={pageData.steps.heading}
        steps={pageData.steps.steps}
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
        text={pageData.banner.text}
        textColor={pageData.banner.textColor}
        leftGradientColor={pageData.banner.leftGradientColor}
        rightGradientColor={pageData.banner.rightGradientColor}
      />
    </div>
  );
}