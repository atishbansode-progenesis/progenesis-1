"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import GradientBanner from "@/components/GradientBanner";
import HeroSection from "@/components/HeroSection/herosection";
import { ArrowUpRight } from "lucide-react";
import StoriesSection from "@/components/Home/StoriesSection"; //
import AppointmentForm from "@/page-components/about/AppointmentForm";
import NavigationTabs from "@/page-components/infertility-slug/NavigationTabs";

interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  foregroundImage?: string;
  overlayImage?: string;
}

export function FeatureCard({ title, description, href }: FeatureCardProps) {
  const cardContent = (
    <div
      className="
    group
    flex flex-col gap-3 rounded-[16px] md:p-5 md:bg-[#F2F2F2]
    transition-colors duration-300
    csLg:hover:bg-[#F1F7FC] cursor-pointer h-full
  "
    >
      <div className="flex flex-col items-start gap-3">
        <span
          className="
        flex h-8 w-16 items-center justify-center rounded-full 
        bg-white text-black border border-[#2C2C2C] 
        transition-all duration-300
        group-hover:bg-[#1656A5] group-hover:text-white group-hover:border-transparent
      "
        >
          <ArrowUpRight className="w-4 h-4" />
        </span>

        <h4
          className="
        text-[#2C2C2C]/70
        font-[Manrope]
        text-[16px] leading-[24px] tracking-[-0.32px] font-semibold
        md:text-[24px] md:leading-[40px] md:tracking-[-0.64px] md:font-normal
      "
        >
          {title}
        </h4>
      </div>

      <p
        className="
      text-[#606060] opacity-70
      text-[16px] leading-[24px] tracking-[-0.32px] font-normal
    "
      >
        {description}
      </p>

      <hr className="md:hidden text-[#1656A50D]" />
    </div>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
}

const TreatmentsPage: React.FC = () => {
  const categories = [
    { id: "path", label: "Your Path to Parenthood" },
    { id: "advanced", label: "Advanced Infertility Treatments" },
    { id: "infertility", label: "Infertility Treatments" },
    { id: "fertility-preservation", label: "Fertility Preservation" },
    { id: "fertility-evaluation", label: "Fertility Evaluation" },
    { id: "stories", label: "Real Stories. Real Miracles." },
  ];

  const [activeTab, setActiveTab] = useState<string>("path");

  const precisionMethods = [
    {
      title: "IMSI – High-Resolution Sperm Selection",
      description:
        "Uses advanced microscopy to identify the healthiest sperm for improved fertilization outcomes.",
      slug: "imsi",
      category: "advanced",
    },
    {
      title: "PICSI – Physiological ICSI",
      description:
        "Selects mature sperm using hyaluronan binding, enhancing embryo quality.",
      slug: "picsi",
      category: "advanced",
    },
    {
      title: "LAH – Laser Assisted Hatching",
      description:
        "Helps embryos implant by gently thinning the outer shell with laser precision.",
      slug: "lah",
      category: "advanced",
    },
    {
      title: "Blastocyst Transfer – Stronger Embryo Transfer",
      description:
        "Transfers embryos at the blastocyst stage (day 5), increasing chances of pregnancy.",
      slug: "blastocyst-transfer",
      category: "advanced",
    },
    {
      title: "Sequential Embryo Transfer – Two-Stage Transfer",
      description:
        "Combines early and late-stage transfers for improved implantation.",
      slug: "sequential-embryo-transfer",
      category: "advanced",
    },
    {
      title: "PGD/PGS/PGT-A – Genetic Screening",
      description:
        "Detects genetic abnormalities in embryos, ensuring healthy pregnancies.",
      slug: "pgd-pgs-pgt-a",
      category: "advanced",
    },
  ];

  const advancedFacilities = [
    {
      title: "Class-1000 Modular Lab – Ultra-Clean Environment",
      description:
        "Maintains sterile lab conditions, ensuring safe and contamination-free procedures.",
      slug: "class-1000-modular-lab",
      category: "advanced",
    },
    {
      title: "Trigas Incubators – Natural Growth Support",
      description:
        "Mimics womb-like conditions with precise oxygen, carbon dioxide, and nitrogen balance.",
      slug: "trigas-incubators",
      category: "advanced",
    },
    {
      title: "Witness System – Total Safety Assurance",
      description:
        "Uses RFID tracking to prevent errors in gamete and embryo handling.",
      slug: "witness-system",
      category: "advanced",
    },
    {
      title: "Cryopreservation – Secure Future Fertility",
      description:
        "Safely freezes and stores eggs, sperm, or embryos for future use.",
      slug: "cryopreservation",
      category: "advanced",
    },
  ];

  const treatments = [
    {
      title: "Ovulation Induction – Stimulating Egg Release",
      description:
        "Medications regulate or trigger ovulation, improving natural conception or preparing for assisted treatments.",
      slug: "ovulation-induction",
      category: "infertility",
    },
    {
      title: "IUI – Assisted Intrauterine Insemination Treatment",
      description:
        "Prepared sperm is placed into the uterus during ovulation, boosting fertilization chances.",
      slug: "artificial-insemination-iui-treatment",
      category: "infertility",
    },
    {
      title: "IVF – Comprehensive In Vitro Fertilization Treatment",
      description:
        "Eggs and sperm are combined in a lab, and embryos are transferred to the uterus.",
      slug: "ivf-comprehensive-in-vitro-fertilization-treatment",
      category: "infertility",
    },
    {
      title: "IVF-ICSI – Intracytoplasmic Sperm Injection",
      description:
        "A single sperm is injected into the egg, helpful in male infertility or failed fertilization cases.",
      slug: "ivf-icsi-intracytoplasmic-sperm-injection",
      category: "infertility",
    },
    {
      title: "Frozen Embryo Transfer – Preserved Embryo Implantation",
      description:
        "Frozen embryos are carefully thawed and transferred in a natural or medically prepared cycle.",
      slug: "frozen-embryo-transfer",
      category: "infertility",
    },
    {
      title: "Fertility Surgery – Corrective Reproductive Surgery",
      description:
        "Surgery for fibroids, endometriosis, or blocked tubes helps restore fertility and reproductive health.",
      slug: "fertility-surgery",
      category: "infertility",
    },
  ];

  const preservation = [
    {
      title: "Female Fertility Preservation",
      image: "/treatments/T1.png",
      slug: "female-fertility-preservation",
      category: "preservation",
    },
    {
      title: "Male Fertility Preservation",
      image: "/treatments/T2.png",
      slug: "male-fertility-preservation",
      category: "preservation",
    },
    {
      title: "Embryo Preservation",
      image: "/treatments/T3.png",
      slug: "egg-embryo-freezing",
      category: "preservation",
    },
  ];

  const evaluations = [
    {
      title: "Female Analysis – Complete Reproductive Health Check",
      description:
        "A detailed evaluation of hormone levels, ovarian reserve, fallopian tubes, and uterine health. This testing helps identify fertility issues and guides a personalized treatment plan for better outcomes.",
      highlighted: true,
      slug: "female-fertility-check",
      category: "evaluation",
    },
    {
      title: "Male Analysis – Advanced Sperm Testing",
      description:
        "Tests sperm count, motility, shape, and quality using advanced methods. These results help diagnose male infertility and guide the best treatment options.",
      highlighted: false,
      slug: "semen-analysis",
      category: "evaluation",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <HeroSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
        ]}
        title="Hope, Science & <br/> Parenthood  Begin Here"
        buttonText="Book Your Appointment"
        buttonLink="/book-appointment"
        overlayImage="/treatments/infweb.png"
        overlayImageSmall="/treatments/infmobile.png"
        contentClassName="justify-start"
        showBlurredShape={false}
      />

      <NavigationTabs
        categories={categories}
        activeTab={activeTab}
        onTabClick={(id) => {
          setActiveTab(id);
          document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      />

      <section
        id="path"
        className="px-4 py-4 csLg:px-[120px] csLg:py-[80px] bg-[#F9F9F9]"
      >
        {/* Label */}
        <div className="">
          <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-[8px] ">
            Your Path to Parenthood
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className="
          text-[#2C2C2C] font-[Manrope] 
          text-[32px] leading-[40px] tracking-[-0.64px] font-normal
          md:text-[40px] md:leading-[56px] md:tracking-normal
        "
        >
          Personalized Fertility Treatments for <br />
          Every Journey
        </h2>

        {/* Divider */}
        <hr className="mt-[12px] mb-[12px] csLg:mt-[80px] csLg:mb-[16px] border-t border-[#E0E0E0]" />

        {/* Subheading + Description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 ">
          {/* Subheading */}
          <h3
            className="
    font-[Manrope] font-normal
    text-[#2C2C2C] text-[24px] leading-[32px] tracking-[-0.48px]
    md:text-[32px] md:leading-[40px] md:tracking-[-0.64px]
  "
          >
            Advanced Fertility Care
          </h3>

          {/* Paragraph */}
          <p
            className="
    font-[Manrope] font-normal
    text-[#606060] text-[16px] leading-[24px] tracking-[-0.32px]
    max-w-3xl
  "
          >
            From initial evaluation to the most advanced fertility treatments,
            Progenesis walks beside you at every step. We combine medical
            excellence with compassionate guidance to provide holistic fertility
            solutions tailored to your unique health needs, personal lifestyle,
            and emotional journey. Whether you are just beginning to explore
            your options or seeking advanced interventions, we are here to turn
            hope into reality with care, clarity, and confidence.
          </p>
        </div>
      </section>

      {/* 4️⃣ Cutting Edge Techniques */}
      <section
        id="advanced"
        className="csLg:px-[120px] csLg:py-[80px] bg-[#fff]"
      >
        <div className="p-4 lg:p-0 ">
          <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-[12px] lg:mb-[8px]">
            Advanced Infertility Treatments
          </span>

          <h2
            className="
            text-[#2C2C2C] font-[Manrope] font-normal mb-[12px] md:mb-[80px]
            text-[32px] leading-[40px] tracking-[-0.64px]   /* mobile */
            md:text-[40px] md:leading-[56px] md:tracking-[-0.96px] /* desktop */
          "
          >
            Cutting-Edge Techniques for Better Success
          </h2>

          {/* Block 1 */}
          <h3
            className="
          text-[#2C2C2C] font-[Manrope]
          text-[16px] leading-[24px] tracking-[-0.32px] font-normal
          md:text-[32px] md:leading-[40px] md:tracking-[-0.64px]
          mb-[32px] lg:mb-[40px]
        "
          >
            Precision Methods for Better Outcomes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 ">
            {precisionMethods.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.title}
                description={item.description}
                href={
                  item.slug && item.category
                    ? `/treatments/${item.category}/${item.slug}`
                    : undefined
                }
              />
            ))}
          </div>
        </div>

        {/* Block 2 */}

        <div className="bg-[#F5FAFF] px-4 py-4 lg:p-0 lg:bg-transparent">
          <h3
            className="
          text-[#2C2C2C] font-[Manrope]
          text-[16px] leading-[24px] tracking-[-0.32px] font-normal
          md:text-[32px] md:leading-[40px] md:tracking-[-0.64px] mb-8
          lg:mb-8 lg:mt-[80px] 

          
        "
          >
            Advanced Facilities for Trusted Care
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
            {advancedFacilities.map((item, idx) => (
              <FeatureCard
                key={idx}
                title={item.title}
                description={item.description}
                href={
                  item.slug && item.category
                    ? `/treatments/${item.category}/${item.slug}`
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full flex justify-center items-center overflow-hidden px-6 pt-4 pb-[80px]  csLg:px-[120px] csLg:py-[80px]">
        {/* 🔹 Left Green Blur Ellipse */}
        <div
          className="absolute left-[-100px] bottom-[-50px] rounded-full bg-[#94BA3D] blur-[250px]"
          style={{
            width: "348px",
            height: "280px",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* 🔹 Right Blue Blur Ellipse */}
        <div
          className="absolute right-[-200px] top-[-150px] rounded-full bg-[#1656A5] blur-[250px]"
          style={{
            width: "222px",
            height: "203px",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* 🔹 Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between w-full ">
          {/* Percentage */}
          <h2
            className="
        text-[#94BA3D] font-manrope font-normal
        text-right md:text-left
        text-[120px] md:text-[100px]
        leading-none tracking-[-2.4px]
        mb-[80px] md:mb-0
        px-6 md:px-0
      "
          >
            95%
          </h2>

          {/* Heading Text */}
          <p
            className="
         text-[#94BA3D] font-manrope font-normal
        text-[32px] md:text-[40px]
        leading-[40px] md:leading-[56px]
        tracking-[-0.64px] md:tracking-[-0.96px]
        text-left md:text-right
        lg:px-6 md:px-0
        md:max-w-[932px]
        max-w-[312px]
      "
          >
            Success Rate in Personalized Fertility Care, Delivering Unmatched
            Results
          </p>
        </div>
      </section>
      {/* 6️⃣ Proven Treatments */}
      <section
        id="infertility"
        className="w-full bg-[#F5FAFF] px-4 py-4 csLg:px-[120px]  csLg:py-20"
      >
        {/* Tag */}

        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-[8px]">
          Infertility Treatments
        </span>

        {/* Heading */}
        <h2
          className="
    text-[var(--Text_Black,#2C2C2C)]
    font-[Manrope]
    font-normal
    text-[32px]
    md:text-[40px]
    leading-[56px]
    tracking-normal
    max-w-[790px]
    mb-[32px] md:mb-[80px]
  "
        >
          Where Trusted Treatments Lead to Proven Results
        </h2>

        {/* Cards Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {treatments.map((item, idx) => (
            <Link
              key={idx}
              href={
                item.slug && item.category
                  ? `/treatments/${item.category}/${item.slug}`
                  : "#"
              }
              className=" group rounded-xl border-[#E6E6E6] p-4 md:p-6 flex flex-col gap-3 transition bg-[#EEF5FF] hover:bg-[#DDEBFF] cursor-pointer"
            >
              <span className="flex h-8 w-16 items-center justify-center rounded-full bg-[#EEF5FF] text-black border border-[#2C2C2C] group-hover:bg-[#1656A5] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>

              {/* Title */}
              <h3 className="text-[#2C2C2C]/70 font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px] md:text-[24px] md:font-normal md:leading-[40px] md:tracking-[-0.64px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#606060] font-manrope text-[16px] font-normal leading-[24px] tracking-[-0.32px] opacity-70">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 7️⃣ Future Parenthood */}
      <section
        id="fertility-preservation"
        className="w-full bg-[#FAFAFA] px-4 py-4 csLg:px-[120px]  csLg:py-20"
      >
        {/* Tag */}

        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          Fertility Preservation
        </span>

        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[40px] md:leading-[56px] md:tracking-normal mb-[32px]  lg:mb-[80px]">
          Future Parenthood Made Possible
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {preservation.map((item, idx) => (
            <Link
              key={idx}
              href={
                item.slug && item.category
                  ? `/treatments/${item.category}/${item.slug}`
                  : "#"
              }
              className="
      flex flex-col items-center
      justify-start
      relative
      rounded-[16px]
      bg-[var(--Chip_Blue,rgba(22,86,165,0.05))]
      hover:bg-[rgba(22,86,165,0.12)] transition
      p-4 lg:p-6
      cursor-pointer
      overflow-hidden
      min-h-[300px] lg:min-h-[400px]
    "
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center mix-blend-multiply z-0"
                priority={false}
              />

              {/* Title */}
              <h3
                className="
        relative z-10
        text-[var(--Text_Black,#2C2C2C)]
        font-[Manrope] font-normal
        text-[24px] leading-[32px] tracking-[-0.64px]
        md:text-[24px] md:leading-[40px] md:tracking-[-0.64px] self-start
        max-w-[200px] md:max-w-full
      "
              >
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* 8️⃣ Diagnostic Section */}
      <section
        id="fertility-evaluation"
        className="w-full bg-[#F5FAFF] px-4 py-4 csLg:px-[120px]  csLg:py-20"
      >
        {/* Tag */}
        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-[8px]">
          Fertility Evaluation
        </span>

        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[40px] md:leading-[56px] md:tracking-normal mb-[32px] lg:mb-[80px]">
          Know, Understand & Take Action
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {evaluations.map((item, idx) => (
            <Link
              key={idx}
              href={
                item.slug && item.category
                  ? `/treatments/${item.category}/${item.slug}`
                  : "#"
              }
              className={`
              flex flex-col gap-3 rounded-[16px] p-6 group
              ${item.highlighted
                  ? "bg-[#EEF5FF]"
                  : "bg-[#EEF5FF]  border-[#E6E6E6]"
                }
              hover:bg-[#DDEBFF] transition
              cursor-pointer
            `}
            >
              {/* Icon */}
              <span className="flex h-8 w-16 items-center justify-center rounded-full bg-[#EEF5FF] text-black border border-[#2C2C2C] group-hover:bg-[#1656A5] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>

              {/* Title */}
              <h3 className="text-[#2C2C2C]/70 font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px] md:text-[24px] md:font-normal md:leading-[40px] md:tracking-[-0.64px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#606060] font-manrope text-[16px] font-normal leading-[24px] tracking-[-0.32px] opacity-70">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="stories">
        <StoriesSection />
      </section>

      <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
        <AppointmentForm />
      </Suspense>
      <GradientBanner text="Every journey to parenthood is unique — with the right care, hope finds its way." />

      {/* </div> */}
    </div>
  );
};

export default TreatmentsPage;