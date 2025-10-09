// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import ConsultationForm from "@/components/Consultation/ConsultationForm";
// import GradientBanner from "@/components/GradientBanner";
// import StoriesSectionNew from "@/components/Storiescard-with-new-layout";
// import HeroSection from "@/components/HeroSection/herosection";
// import { ArrowUpRight } from "lucide-react";

// interface FeatureCardProps {
//   title: string;
//   description: string;
//   href?: string;
//   foregroundImage?: string;
//   overlayImage?: string;
// }

// export function FeatureCard({ title, description, href }: FeatureCardProps) {
//   const cardContent = (
//     <div
//       className="
//         flex flex-col gap-3 rounded-[16px] p-6 bg-[#F9FAFB]
//         transition-colors duration-300
//         hover:bg-[#F1F7FC] cursor-pointer h-full
//       "
//     >
//       <div className="flex flex-col items-start gap-3">
//         <span className="flex h-8 w-16 items-center justify-center rounded-full bg-black text-white shrink-0">
//           <ArrowUpRight className="w-4 h-4" />
//         </span>
//         <h4
//           className="
//             text-[#2C2C2C] font-[Manrope] opacity-70
//             text-[16px] leading-[24px] tracking-[-0.32px] font-semibold
//             md:text-[32px] md:leading-[40px] md:tracking-[-0.64px] md:font-normal
//           "
//         >
//           {title}
//         </h4>
//       </div>
//       <p
//         className="
//           text-[#606060] font-[Manrope] opacity-70
//           text-[16px] leading-[24px] tracking-[-0.32px] font-normal
//         "
//       >
//         {description}
//       </p>
//     </div>
//   );

//   return href ? <Link href={href}>{cardContent}</Link> : cardContent;
// }

// const TreatmentsPage: React.FC = () => {
//   const categories = [
//     { id: "path", label: "What is Infertility" },
//     { id: "fertility-section", label: "Female Infertility Causes" },
//     { id: "fertility-mini-section", label: "Male Infertility Causes" },
//     { id: "stories-section", label: "Real Stories. Real Miracles." },
//   ];

//   const [activeTab, setActiveTab] = useState<string>("path");

//   // Function for smooth scrolling
//   const handleScroll = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
//     setActiveTab(id);
//   };

//   return (
//     <div className="w-full flex flex-col">
//       <HeroSection
//         breadcrumbs={[
//           { label: "Home", href: "/" },
//           { label: "Infertility", href: "/infertility" },
//         ]}
//         title="Understanding Infertility"
//         buttonText="Book Your Appointment"
//         buttonLink="/book-appointment"
//         foregroundImage="/Infertility/Infertility_s1.png"
//         overlayImage="/treatments/doctor-foreground.png"
//       />

//       {/* 2️⃣ Category Tabs */}
//       <div className="flex flex-wrap gap-4 pt-[50px] px-[12px] md:px-[80px] xl:px-[120px] pb-[80px] bg-[#fff]">
//         {categories.map((cat) => (
//           <button
//             key={cat.id}
//             type="button"
//             onClick={() => handleScroll(cat.id)}
//             className={`px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px] 
//             font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] 
//             tracking-[-0.28px] transition 
//             ${activeTab === cat.id
//                 ? "bg-[#1656A5] text-white"
//                 : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
//               }`}
//           >
//             {cat.label}
//           </button>
//         ))}
//       </div>

//       {/* 3️⃣ Section 1: What is Infertility */}
//       <section id="path" className="px-[12px] md:px-[120px] py-[80px] bg-[#F9F9F9]">
//         <div className="mb-4">
//           <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
//             What is Infertility
//           </span>
//         </div>

//         <h2 className="text-[#2C2C2C] font-[Manrope] text-[32px] leading-[40px] tracking-[-0.64px] font-normal md:text-[48px] md:leading-[56px] md:tracking-normal">
//           Understanding the Basics of Infertility
//         </h2>

//         <hr className="my-8 border-t border-[#E0E0E0]" />

//         <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
//           <h3 className="font-[Manrope] font-normal text-[#2C2C2C] text-[24px] leading-[32px] tracking-[-0.48px] md:text-[32px] md:leading-[40px] md:tracking-[-0.64px]">
//             Know the Facts
//           </h3>

//           <p className="font-[Manrope] font-normal text-[#606060] text-[16px] leading-[24px] tracking-[-0.32px] max-w-3xl">
//             Infertility is defined as the inability to achieve pregnancy after a year of
//             regular, unprotected intercourse. It is a common condition that can affect
//             both men and women. By identifying the underlying causes and seeking timely
//             medical support, individuals can explore effective treatments and move
//             closer to fulfilling their dream of parenthood.
//           </p>
//         </div>
//       </section>

//       {/* 4️⃣ Section 2: Female Infertility Causes */}
//       <section id="fertility-section" className="bg-white pt-[80px] pb-[60px]">
//         <div className="px-[12px] md:px-[80px] lg:px-[120px]">
//           <div className="flex flex-col xl:flex-row items-start justify-between gap-8">
//             <div className="w-full xl:w-[45%]">
//               <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
//                 Female Infertility Causes
//               </span>
//               <h2 className="text-[32px] md:text-[48px] font-light text-[#2C2C2C] mb-6 leading-[40px] md:leading-[56px] tracking-[-0.96px]">
//                 Common Causes of Female Infertility You Should Know
//               </h2>
//             </div>

//             <div className="flex-1">
//               <p className="text-[#2C2C2C]/70 font-[Manrope] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[-0.32px]">
//                Female infertility can arise from various health conditions that affect ovulation, egg quality, or the reproductive system. Understanding these causes—such as PCOS, low AMH, fibroids, or repeated treatment failures—helps in taking timely steps toward the right medical care and treatment options.
//               </p>
//             </div>
//           </div>

//           {/* 8 Cards */}
//           <div className="flex flex-wrap justify-center gap-6 mt-[80px]">
//             {[
//               "Repeated IUI Failures",
//               "Repeated IVF Failures",
//               "Pregnancy after Menopause",
//               "Low AMH",
//               "PCOS",
//               "Tubal Blockage",
//               "Fibroids",
//               "Endometriosis",
//             ].map((title, idx) => (
//               <Link
//                 key={idx}
//                 href="/dummy-page"
//                 className="flex flex-col items-center justify-between
//                            w-[340px] sm:w-[360px] md:w-[380px] xl:w-[408px]
//                            px-6 pt-6 pb-[78px] gap-[40px]
//                            bg-[rgba(22,86,165,0.05)] border border-[#E6E6E6] rounded-2xl shadow-sm 
//                            hover:shadow-md transition hover:bg-[#E6F0FF]"
//               >
//                 <h3 className="text-[#2C2C2C] font-[Manrope] text-[20px] md:text-[28px] font-normal leading-[32px] md:leading-[40px] tracking-[-0.64px] text-center">
//                   {title}
//                 </h3>
//                 <img
//                   src={`/infertility/infertility${(idx % 8) + 1}.png`}
//                   alt={title}
//                   className="w-[220px] h-[200px] md:w-[299px] md:h-[267px] object-contain mix-blend-multiply"
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5️⃣ Section 3: Male Infertility Causes (3 Cards) */}
//       <section id="fertility-mini-section" className="bg-white pt-[80px] pb-[60px]">
//         <div className="px-[12px] md:px-[80px] lg:px-[120px]">
//           <div className="flex flex-col xl:flex-row items-start justify-between gap-8">
//             <div className="w-full xl:w-[45%]">
//               <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
//                 Male Infertility Causes
//               </span>
//               <h2 className="text-[32px] md:text-[48px] font-light text-[#2C2C2C] mb-6 leading-[40px] md:leading-[56px] tracking-[-0.96px]">
//                 Understanding the Causes of Male Infertility
//               </h2>
//             </div>

//             <div className="flex-1">
//               <p className="text-[#2C2C2C]/70 font-[Manrope] text-[16px] md:text-[20px] leading-[28px] md:leading-[32px] tracking-[-0.32px]">
//                 Male infertility can result from issues like low sperm count, azoospermia, or erectile dysfunction. Recognizing these causes early is the first step toward effective treatment and improving the chances of conception.
//               </p>
//             </div>
//           </div>

//           {/* 3 Cards */}
//           <div className="flex flex-wrap justify-center gap-6 mt-[80px]">
//             {[
//               { title: "Azoospermia", image: "/infertility/Azoospermia.png" },
//               { title: "Low Sperm Count", image: "/infertility/Low Sperm Count.png" },
//               { title: "Erectile Dysfunction (ED)", image: "/infertility/ErectileDysfunction.png" },
//             ].map((item, idx) => (
//               <Link
//                 key={idx}
//                 href="/dummy-page"
//                 className="flex flex-col items-center justify-between
//                            w-[340px] sm:w-[360px] md:w-[380px] xl:w-[408px]
//                            px-6 pt-6 pb-[78px] gap-[40px]
//                            bg-[rgba(22,86,165,0.05)] border border-[#E6E6E6] rounded-2xl shadow-sm 
//                            hover:shadow-md transition hover:bg-[#E6F0FF]"
//               >
//                 <h3 className="text-[#2C2C2C] font-[Manrope] text-[20px] md:text-[28px] font-normal leading-[32px] md:leading-[40px] tracking-[-0.64px] text-center">
//                   {item.title}
//                 </h3>

//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-[220px] h-[200px] md:w-[299px] md:h-[267px] object-contain mix-blend-multiply"
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 6️⃣ Section 4: Stories */}
//       <section id="stories-section">
//         <StoriesSectionNew />
//       </section>

//       <ConsultationForm />
//       <GradientBanner text="The road may be challenging, but with the right care, parenthood is within reach." />
//     </div>
//   );
// };

// export default TreatmentsPage;


"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import GradientBanner from "@/components/GradientBanner";
import StoriesSectionNew from "@/components/Storiescard-with-new-layout";
import HeroSection from "@/components/HeroSection/herosection";
import { ArrowUpRight } from "lucide-react";

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
  const preservation = [
    {
      title: "Azoospermia",
      image: "/infertility/Azoospermia.png", // replace with actual path
    },
    {
      title: "Low Sperm Count",
      image: "/infertility/LowSpermCount.png",
    },
    {
      title: "Erectile Dysfunction (ED)",
      image: "/infertility/ErectileDysfunction.png",
    },
  ];
  const causes = [
    {
      title: "Repeated IUI Failures",
      image: "/infertility/infertility1.png", // replace with actual path
    },
    {
      title: "Repeated IVF Failures",
      image: "/infertility/infertility2.png",
    },
    {
      title: "Pregnancy after Menopause",
      image: "/infertility/infertility3.png",
    },
    {
      title: "Low AMH",
      image: "/infertility/infertility4.png", // replace with actual path
    },
    {
      title: "PCOS",
      image: "/infertility/infertility5.png",
    },
    {
      title: "Tubal Blockage",
      image: "/infertility/infertility6.png",
    },
    {
      title: "Fibroids",
      image: "/infertility/infertility7.png", // replace with actual path
    },
    {
      title: "Endometriosis",
      image: "/infertility/infertility8.png",
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
    px-[12px] md:px-[80px] xl:px-[120px]
  "
      >
        <div
          className="
      flex flex-wrap justify-start items-start gap-3 md:gap-4
      text-left
    "
        >
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
            Infertility is defined as the inability to achieve pregnancy after a year of
            regular, unprotected intercourse. It affects both men and women, and by
            identifying causes early, couples can seek effective treatments and move
            closer to parenthood.
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
                Female infertility can arise from various health conditions such as PCOS,
                low AMH, fibroids, or blocked tubes. Understanding these issues early
                helps in seeking appropriate medical care and treatments.
              </p>
            </div>
          </div>

          {/* GRID (Fully Responsive) */}
          {/* <div
            className="
              grid gap-6 mt-[80px]
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4
              justify-items-center
            "
          >
            {[
              "Repeated IUI Failures",
              "Repeated IVF Failures",
              "Pregnancy after Menopause",
              "Low AMH",
              "PCOS",
              "Tubal Blockage",
              "Fibroids",
              "Endometriosis",
            ].map((title, idx) => (
              <Link
                key={idx}
                href="/dummy-page"
                className="
                  flex flex-col items-center justify-between
                  w-full sm:w-[300px] md:w-[340px] xl:w-[360px]
                  px-6 pt-6 pb-[70px] gap-[40px]
                  bg-[rgba(22,86,165,0.05)] border border-[#E6E6E6] rounded-2xl
                  shadow-sm hover:shadow-md transition hover:bg-[#E6F0FF]
                "
              >
                <h3 className="text-[#2C2C2C] text-[20px] md:text-[24px] font-normal leading-[28px] md:leading-[36px] text-center font-[Manrope]">
                  {title}
                </h3>
                <img
                  src={`/infertility/infertility${(idx % 8) + 1}.png`}
                  alt={title}
                  className="w-[200px] h-[180px] md:w-[260px] md:h-[240px] object-contain mix-blend-multiply"
                />
              </Link>
            ))}
          </div> */}
          
          <div className="mt-[80px] md:mt-[100px] lg:mt-[220px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {causes.map((item, idx) => (
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
      <section id="fertility-mini-section" className="bg-white pt-[80px] pb-[60px]">
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
      max-w-[832px]
    "
              >
                Male infertility can result from issues like low sperm count, azoospermia, or erectile dysfunction. Recognizing these causes early is the first step toward effective treatment and improving the chances of conception.
              </p>
            </div>
          </div>

          <div className="mt-[80px] md:mt-[100px] lg:mt-[220px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preservation.map((item, idx) => (
                <div
                  key={idx}
                  className="
              flex flex-col items-center
              relative
              rounded-[16px]
              h-[370px] md:h-[444px]
              bg-[var(--Chip_Blue,rgba(22,86,165,0.05))]
              hover:bg-[rgba(22,86,165,0.12)] transition
              p-6
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
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={238} // desktop size
                    height={240}
                    className="mt-[56px] w-[180px] h-[180px] md:w-[238px] md:h-[240px] object-contain"
                    style={{ mixBlendMode: "multiply" }}
                    priority={false} // optional: use priority for above-the-fold images
                  />





                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: STORIES */}
      <section id="stories-section">
        <StoriesSectionNew />
      </section>

      <ConsultationForm />
      <GradientBanner text="The road may be challenging, but with the right care, parenthood is within reach." />
    </div>
  );
};

export default Infertility;
