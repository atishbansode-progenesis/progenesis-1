"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import GradientBanner from "@/components/GradientBanner";
import StoriesSectionNew from "@/components/Storiescard-with-new-layout";
import HeroSection from "@/components/HeroSection/herosection";
import { ArrowUpRight } from "lucide-react";
import StoriesSection from "../../components/Home/StoriesSection";

interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  foregroundImage?: string;
  overlayImage?: string;
}

interface InfertilityIssue {
  id: string;
  title: string;
  slug: string;
  image: string;
}

interface MaleInfertilityIssue {
  id: string;
  title: string;
  slug: string;
  image: string;
}

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

const Infertility: React.FC = () => {
  const categories = [
    { id: "path", label: "What is Infertility" },
    { id: "fertility-section", label: "Female Infertility Causes" },
    { id: "fertility-mini-section", label: "Male Infertility Causes" },
    { id: "stories-section", label: "Real Stories. Real Miracles." },
  ];

  const femaleInfertilityIssues: InfertilityIssue[] = [
    {
      id: 1,
      title: "Repeated IUI Failures",
      slug: "repeated-iui-failures",
      image: "/infertility/infertility1.png",
    },
    {
      id: 2,
      title: "Repeated IVF Failures",
      slug: "repeated-ivf-failures",
      image: "/infertility/infertility2.png",
    },
    {
      id: 3,
      title: "Pregnancy after Menopause",
      slug: "pregnancy-after-menopause",
      image: "/infertility/infertility3.png",
    },
    {
      id: 4,
      title: "Low AMH",
      slug: "low-amh",
      image: "/infertility/infertility4.png",
    },
    {
      id: 5,
      title: "PCOS",
      slug: "pcos",
      image: "/infertility/infertility5.png",
    },
    {
      id: 6,
      title: "Tubal Blockage",
      slug: "tubal-blockage",
      image: "/infertility/infertility6.png",
    },
    {
      id: 7,
      title: "Fibroids",
      slug: "fibroids",
      image: "/infertility/infertility7.png",
    },
    {
      id: 8,
      title: "Endometriosis",
      slug: "endometriosis",
      image: "/infertility/infertility8.png",
    },
  ];

  const maleInfertilityIssues: MaleInfertilityIssue[] = [
    {
      id: 1,
      title: "Azoospermia",
      slug: "azoospermia",
      image: "/infertility/Azoospermia.png",
    },
    {
      id: 2,
      title: "Low Sperm Count",
      slug: "low-sperm-count",
      image: "/infertility/LowSpermCount.png",
    },
    {
      id: 3,
      title: "Erectile Dysfunction (ED)",
      slug: "erectile-dysfunction",
      image: "/infertility/ErectileDysfunction.png",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("path");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab(id);
  };

  return (
    <div className="w-full flex flex-col">
      {/* HERO SECTION */}
      <HeroSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Infertility", href: "/infertility" },
        ]}
        title="Understanding Infertility"
        buttonText="Book Your Appointment"
        buttonLink="/book-appointment"
        foregroundImage="/Infertility/Infertility_s1.png"
        overlayImage="/treatments/doctor-foreground.png"
      />

      {/* CATEGORY BUTTONS */}
      {/* 2️⃣ Category Tabs */}
      <div
        className="
          w-full bg-white 
          pt-[50px] pb-[80px]
          px-[12px] md:px-[80px] xl:px-[120px] " >
              <div
                className="
                  flex flex-wrap justify-start items-start gap-3 md:gap-4
                  text-left " >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleScroll(cat.id)}
              className={`
              px-[10px] py-[10px] md:px-[20px] md:py-[16px]
              rounded-[8px] md:rounded-[16px]
              font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px]
              tracking-[-0.28px] transition-all duration-200
              ${activeTab === cat.id
                      ? "bg-[#1656A5] text-white shadow-md"
                      : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
                    }
            `}
                >
              {cat.label}
            </button>
          ))}
        </div>
      </div>


      {/* SECTION 1: What is Infertility */}
      <section id="path" className="px-4 md:px-[80px] lg:px-[120px] py-[80px] bg-[#F9F9F9]">
        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          What is Infertility
        </span>
        <h2 className="text-[#2C2C2C] font-[Manrope] text-[28px] md:text-[48px] font-normal leading-[38px] md:leading-[56px]">
          Understanding the Basics of Infertility
        </h2>
        <hr className="my-8 border-t border-[#E0E0E0]" />
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <h3 className="text-[#2C2C2C] text-[22px] md:text-[32px] leading-[30px] md:leading-[40px] font-[Manrope] font-normal">
            Know the Facts
          </h3>
          <p className="text-[#606060] text-[15px] md:text-[16px] leading-[24px] max-w-3xl font-[Manrope]">
            Infertility is defined as the inability to achieve pregnancy after a year of regular, unprotected intercourse. It is a common condition that can affect both men and women, often linked to medical issues, lifestyle choices, or age-related factors. While the journey can feel overwhelming, it’s important to remember that many couples face similar challenges. By identifying the underlying causes and seeking timely medical support, individuals can explore a range of effective treatments and move closer to fulfilling their dream of parenthood.
          </p>
        </div>
      </section>

      {/* SECTION 2: Female Infertility (8 CARDS) */}
      <section id="fertility-section" className="bg-white pt-[80px] pb-[60px]">
        <div className="px-4 md:px-[80px] lg:px-[120px]">
          <div className="flex flex-col xl:flex-row justify-between gap-8">
            <div className="w-full xl:w-[45%]">
              <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
                Female Infertility Causes
              </span>
              <h2 className="text-[30px] md:text-[48px] font-light text-[#2C2C2C] mb-6 leading-[40px] md:leading-[56px]">
                Common Causes of Female Infertility You Should Know
              </h2>
            </div>
            <div className="flex-1">
              <p
                className="
                  font-[Manrope] font-normal text-[#2C2C2C]
                  text-[18px] leading-[28px] tracking-[-0.36px]
                  md:text-[24px] md:leading-[32px] md:tracking-[-0.48px]
                  lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px]
                  xl:text-[32px] xl:leading-[40px] xl:tracking-[-0.64px]
                  max-w-[832px]
                "
              >
                Female infertility can arise from various health conditions that affect ovulation, egg quality, or the reproductive system. Understanding these causes—such as PCOS, low AMH, fibroids, or repeated treatment failures—helps in taking timely steps toward the right medical care and treatment options.
              </p>
            </div>
          </div>

          {/* GRID (Fully Responsive) */}
          {/* <div
            className="
              grid gap-6 mt-[80px]
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4
              justify-items-center">
            {femaleInfertilityIssues.map((issue) => (
              <Link
                key={issue.id}
                href={`/infertility/${issue.slug}`}
                className="
                  flex flex-col items-center justify-between
                  w-full
                  px-6 pt-6 pb-[70px] gap-[40px]
                  bg-[rgba(22,86,165,0.05)] border border-[#E6E6E6] rounded-2xl transition hover:bg-[#1656A51F] " >
                <h3 className="text-[#2C2C2C] text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[36px] text-start w-full font-[Manrope]">
                  {issue.title}
                </h3>
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="w-[200px] h-[180px] md:w-[260px] md:h-[240px] object-contain mix-blend-multiply"
                />
              </Link>
            ))}
          </div> */}
          
          <div className="mt-[80px] md:mt-[100px] lg:mt-[220px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {femaleInfertilityIssues.map((item, idx) => (
                <div
                  key={idx}
                  className="
              flex flex-col justify-between items-center
              relative overflow-hidden
              rounded-[16px]
              h-[370px] md:h-[444px]
              bg-[var(--Chip_Blue,rgba(22,86,165,0.05))]
              hover:bg-[rgba(22,86,165,0.12)] transition
              p-6
              flex-shrink-0
            "
                >
                  {/* Title */}
                  <h3 className="
    text-[var(--Text_Black,#2C2C2C)]
    font-[Manrope] font-normal
    text-[24px] leading-[32px] tracking-[-0.64px]
    md:text-[32px] md:leading-[40px] md:tracking-[-0.64px] self-start
          pt-[24px] pl-[24px]">
                    {item.title}
                  </h3>
                  {/* Image */}
                  <div
          className="
            flex justify-center items-center
            w-full h-[180px] md:h-[220px]
            mt-[40px] md:mt-[56px]
          "
        >
          <Image
            src={item.image}
            alt={item.title}
            width={200}
            height={200}
            className="
              w-auto h-full object-contain
              mix-blend-multiply
            "
            style={{ mixBlendMode: 'multiply' }}
            priority={false}
          />
        </div>





                </div>
              ))}
            </div>
          </div>
          


        </div>
      </section>

      {/* SECTION 3: Male Infertility (3 CARDS) */}
      <section id="fertility-mini-section" className="bg-[#FAFAFA] pt-[80px] pb-[60px]">
        <div className="px-4 md:px-[80px] lg:px-[120px]">
          <div className="flex flex-col xl:flex-row justify-between gap-8">
            <div className="w-full xl:w-[45%]">
              <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
                Male Infertility Causes
              </span>
              <h2 className="text-[30px] md:text-[48px] font-light text-[#2C2C2C] mb-6 leading-[40px] md:leading-[56px]">
                Understanding the Causes of Male Infertility
              </h2>
            </div>
            <div className="flex-1">
              <p
                className="
                  font-[Manrope] font-normal text-[#2C2C2C]
                  text-[18px] leading-[28px] tracking-[-0.36px]
                  md:text-[24px] md:leading-[32px] md:tracking-[-0.48px]
                  lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px]
                  xl:text-[32px] xl:leading-[40px] xl:tracking-[-0.64px]
                  max-w-[832px]" >
                Male infertility can result from issues like low sperm count, azoospermia, or erectile dysfunction.<span className="text-[#606060]"> Recognizing these causes early is the first step toward effective treatment and improving the chances of conception.</span>
              </p>
            </div>
          </div>

          {/* Responsive 3-Card Grid */}
          <div
            className="
            grid mt-[80px]
            gap-[21px]
            grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
            justify-center xl:justify-start">
            {maleInfertilityIssues.map((item) => (
              <Link
                key={item.id}
                href={`/infertility/${item.slug}`}
                className="
                  flex flex-col items-center justify-between
                  w-[100%]
                  h-[444px]
                  px-6 pt-6 pb-[70px] gap-[40px]
                  bg-[rgba(22,86,165,0.05)] border border-[#E6E6E6]
                  rounded-2xl transition hover:bg-[#1656A51F]
                  flex-shrink-0 " >
                <h3
                  className="
                  text-[#2C2C2C]
                    text-[20px] md:text-[24px]
                    leading-[28px] md:leading-[36px]
                    font-normal text-start w-full font-[Manrope] " >
                  {item.title}
                </h3>

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-[200px] h-[180px]
                  md:w-[280px] md:h-[240px]
                  object-contain mix-blend-multiply" />
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: STORIES */}
      <section id="stories-section">
        <StoriesSection />
      </section>

      <ConsultationForm />

      {/* SECTION 6: GradientBanner */}
      <section className="relative w-full h-[475px] flex items-center justify-center overflow-hidden">
      {/* 🔹 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-blue-50" />

      {/* 🔹 Background Blur Gradients */}
      <div
        className="absolute left-[-50px] bottom-[-50px] w-[322px] h-[443px] rounded-full opacity-70"
        style={{
          background: "#94BA3D",
          filter: "blur(250px)",
          transform: "rotate(-2deg)",
        }}
      ></div>

      <div
        className="absolute right-[-150px] top-[-200px] w-[350px] h-[350px] rounded-full opacity-90"
        style={{
          background: "#1656A5",
          filter: "blur(250px)",
          transform: "rotate(-2deg)",
        }}
      ></div>

      {/* 🔹 Text */}
      <h2
        className="relative w-[90%] md:w-[70%] lg:w-[50%] text-center font-[Manrope] 
             text-[#94BA3D] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] 
             font-normal leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[56px] 
             tracking-[-0.96px] px-4 z-10"
      >
        The road may be challenging, but with the right care, parenthood is within reach.
      </h2>
    </section>
    </div>
  );
};

export default Infertility;