"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import StoriesSection from "@/components/Home/StoriesSection";
import HeroSection from "@/components/HeroSection/herosection";

const steps = [
  {
    id: 1,
    label: "Advanced Testing & Diagnosis",
    title: "Diagnosing Critical Barriers to Successful Implantation",
    items: [
      "Genetic testing screens embryos for chromosomal abnormalities, reducing miscarriage risks.",
      "Hormonal profiling identifies deficiencies affecting implantation.",
      "Uterine evaluation detects structural or lining issues.",
      "Immune system assessment ensures proper maternal tolerance of embryo."
    ],
    image: "/InfertilityIssues/rght 1.png"
  },
  {
    id: 2,
    label: "Personalized Treatment Plan",
    title: "Tailored Interventions for Your IVF Journey",
    items: [
      "Customized medication protocol for optimal response.",
      "Lifestyle and nutrition guidance to enhance implantation.",
      "Targeted therapies for recurrent implantation failure.",
      "Continuous monitoring to adjust treatment as needed."
    ],
    image: "/InfertilityIssues/rght 2.png"
  },
  {
    id: 3,
    label: "Holistic & Emotional Support",
    title: "Supporting Mind, Body & Emotions",
    items: [
      "Stress reduction strategies and counseling.",
      "Mind-body therapies to improve fertility outcomes.",
      "Support groups for emotional well-being.",
      "Education and guidance for informed decisions."
    ],
    image: "/InfertilityIssues/rght 3.png"
  }
];



const slides = [
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
    id:"04" ,
    title: "Uterine Abnormalities",
    description:
      "Conditions like fibroids or polyps can interfere with implantation, lowering the success rate of IUI.",
    image: "/InfertilityIssues/rght 4.png",
  },
];

const infoItems = [
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
];

export default function InfertilityIssues() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [activeTab, setActiveTab] = useState("journey");
  const [activeStep, setActiveStep] = useState(0);

  const categories = [
    { id: "path", label: "What is Infertility" },
    { id: "fertility-section", label: "Female Infertility Causes" },
    { id: "fertility-mini-section", label: "Male Infertility Causes" },
    { id: "stories-section", label: "Real Stories. Real Miracles." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 5000); // change step every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab(id);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Section 1 */}
      
      <HeroSection
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Infertility", href: "/infertility" },
            { label: "Female Infertility", href: "/infertility" },
            { label: "Repeated IUI Failures", href: "infertility/repeated-iui-failures/" },
          ]}
          title="Repeated IUI Failures"
          buttonText="Book Your Appointment"
          buttonLink="/book-appointment"
          overlayImage="/InfertilityIssues/s-1bg1.png"
        />

        {/* Section 2 */}
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

     {/* Section 3 */}
      <section className="w-full px-[12px] md:px-[80px] xl:px-[120px] py-20 bg-[#FAFAFA]">
        {/* Small Tag */}
        <span
          className="inline-block px-3 py-1 mb-6 rounded-full text-[12px] font-medium leading-[20px] tracking-[-0.24px] text-[#1656A5] bg-[#F3F8FE]"
          style={{ fontFamily: "Manrope" }}
        >
          Know the Basics
        </span>

        {/* Main Heading */}
        <h2
          className="w-full text-[32px] md:text-[48px] font-normal leading-[56px] tracking-[-0.96px] text-[#2C2C2C] mb-12 md:mb-20"
          style={{ fontFamily: "Manrope" }}
        >
          Repeated IUI failures: causes, signs, <br />
          and treatments for parenthood.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-16">
        {infoItems.map((item, index) => (
          <div key={item.id} className="flex flex-col items-start gap-3">
            <div className="flex flex-row md:flex-col items-start gap-1">
              <div className="text-[16px] text-[#606060]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="text-[16px] font-semibold lg:font-normal md:text-[32px] text-[#2C2C2C]">
                {item.title}
              </div>
            </div>
            <hr className="border-[#1656A50D] border-[1px] w-[80%]" />
            <div className="text-[16px] text-[#606060]">{item.description}</div>
          </div>
        ))}
      </div>
      </section>
      
      {/* Section 4 */}
      <section className="w-full px-[12px] md:px-[80px] xl:px-[120px] py-10 md:py-20 bg-[#F1F7FC] font-[Manrope]">
      <div >
        {/* Two-column wrapper */}
        <div className="flex flex-col items-start justify-between ">
          <div className="mb-10 md:mb-20">
            {/* Chip */}
            <span className="inline-block mb-2 px-2 py-1 bg-[rgba(22,86,165,0.05)] text-[#1656A5] text-xs font-medium rounded-md w-fit tracking-tight">
              Causes
            </span>

            {/* Heading */}
            <h2 className="text-[#2C2C2C] text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[44px] lg:leading-[56px] font-normal tracking-[-0.96px]">
              Key Reasons Behind IUI Failure and Their<br/> Impact on Conception
            </h2>
          </div>
          {/* LEFT DIV */}
          <div className="w-full flex-col md:flex-row flex justify-between items-center gap-12">

          <div className="w-full  md:w-[25rem]">
            {/* Dots */}
            <div className="flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-[10px] h-[10px] cursor-pointer rounded-full transition-all duration-200 ${
                    i === activeIndex ? "bg-[#1656A5]" : "bg-[#C9C9C9]"
                  }`}
                />
              ))}
            </div>
            {/* Slide number + content */}
            <div className="mt-6 ">
              <div className="text-[#94BA3D] text-[16px] leading-[24px] tracking-[-0.32px]">
                {slides[activeIndex].id}
              </div>

              <h3 className="text-[#1656A5] text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] lg:leading-[40px] tracking-[-0.64px] mt-2">
                {slides[activeIndex].title}
              </h3>

              <p className="text-[#2C2C2C] text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] mt-3 max-w-[680px]">
                {slides[activeIndex].description}
              </p>
            </div>  
          </div>  
          
          {/* RIGHT DIV (Image only) */}
          <div >
            <div className="w-full max-w-[1248px] aspect-[1248/601] rounded-2xl overflow-hidden relative">
              <img
                key={activeIndex}
                src={slides[activeIndex].image}
                alt={slides[activeIndex].title}
                className="w-full h-full object-cover block transition-opacity duration-500 ease-in-out"
              />
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
   {/* Section 5 */}
    <section className="w-full  px-[12px] md:px-[80px] xl:px-[120px] py-10 md:py-20">
      
      <div className="relative">
          {/* 🔹 Tag */}
        <span className="inline-block mb-3 px-2 py-1 bg-[rgba(22,86,165,0.05)] text-[#1656A5] text-xs font-medium rounded-md tracking-tight">
          IVF Failures Explained
        </span>

        {/* 🔹 Heading */}
        <h2 className="font-manrope text-[28px] md:text-[40px] font-semibold leading-[36px] md:leading-[48px] tracking-[-0.64px] text-[#2C2C2C] max-w-[600px]">
          Learn the numbers, Take control of your fertility journey
        </h2>
      </div>

      {/* 🔹 Circle Visualization Section */}
      <div className="relative -mt-12 w-full h-[500px] md:h-[900px] flex justify-center items-start">
        {/* Connecting horizontal line */}
        

        {/* Right circle */}
        <div className="absolute right-[8%] md:right-[22%] w-[180px] h-[180px] md:w-[596px] md:h-[596px] rounded-full bg-[#C3DCFB] flex items-center justify-center text-center shadow-sm">
          
          <span className="font-manrope font-medium text-[64px] md:text-[64px] text-[#2C2C2C]">5–10%</span>
        </div>
        
        {/* Left circle */}
        <div className="absolute right-[8%] md:right-[52%] top-[23%] w-[150px] h-[150px] md:w-[386px] md:h-[386px] rounded-full bg-[#E5F1FF] flex items-center justify-center text-center shadow-sm">
          <span className="font-manrope font-medium text-[64px] md:text-[64px] text-[#2C2C2C]">60–70%</span>
        </div>

        {/* Bottom circle */}
        <div className="absolute right-[20%] md:right-[28%] bottom-[10%] w-[160px] h-[160px] md:w-[432px] md:h-[432px] rounded-full bg-[#E4F8B6] flex items-center justify-center text-center shadow-sm">
          <span className="font-manrope font-medium text-[64px] md:text-[64px] text-[#2C2C2C]">3–4<br />Cycles</span>
        </div>

        {/* Text descriptions beside each circle */}
        {/* Left */}
       <div className="absolute right-[0%] md:right-[70%] top-[28%] md:top-[38%] w-[140px] md:w-[220px]">
          <div className="absolute top-0 left-0 w-[470px] h-[0.5px] bg-[#7a7a7a]" />
          <p className="text-[#606060] text-xs pt-5 md:text-sm leading-[18px] md:leading-[22px]">
            Only a small percentage—around 5–10% of couples—face repeated failures even after multiple attempts.
          </p>
        </div>

        {/* Right (top) */}
        <div className="absolute font-normal right-[5%] md:right-[0%] top-[30%] md:top-[25%] w-[160px] md:w-[240px] text-[#606060] text-xs md:text-sm leading-[18px] md:leading-[22px]">
          {/* Horizontal line */}
          <div className="absolute top-0 right-0 w-[670px] h-[0.5px] bg-[#7a7a7a]" />

          {/* Text */}
          <p className="relative pt-5 z-10">
            For women under the age of 35, IVF success rates are encouraging, ranging between 60–70%.
          </p>
        </div>


        <div className="absolute right-[6%] md:right-[5%] bottom-[35%] w-[180px] md:w-[260px] text-[#606060] text-xs md:text-sm leading-[18px] md:leading-[22px]">
          <div className="absolute top-0 right-0 w-[570px] h-[0.5px] bg-[#7a7a7a]" />
          <p className="pt-5 relative z-10">
            In many cases, it may take 3 to 4 cycles before achieving a successful pregnancy, 
            which is completely normal in fertility treatments.
          </p>
        </div>

      </div>
    </section>
      {/* Section 6 */}
      <section className="w-full px-[12px] md:px-[80px] xl:px-[120px] py-10 md:py-20 bg-white font-[Manrope]">
            <div>
              <div className="flex flex-col items-start justify-between ">
                {/* Header */}
                <div className="mb-10 md:mb-20">
                  <span className="inline-block mb-2 px-2 py-1 bg-[rgba(22,86,165,0.05)] text-[#1656A5] text-xs font-medium rounded-md w-fit tracking-tight">
                    Fast Facts
                  </span>
                  <h2 className="text-[#2C2C2C] text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[44px] lg:leading-[56px] font-normal tracking-[-0.96px]">
                    Recommended Next Steps After Repeated IVF Failures
                  </h2>
                </div>

                {/* Buttons + Progress */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-20">
                  {/* Step Buttons */}
                  <div className="flex flex-wrap gap-3 mb-5 md:mb-0">
                    {steps.map((step, i) => (
                      <button
                        key={step.id}
                        type="button"
                        onClick={() => setActiveStep(i)}
                        className={`
                          px-[10px] py-[10px] md:px-[20px] md:py-[16px]
                          rounded-[8px] md:rounded-[16px]
                          font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px]
                          tracking-[-0.28px] transition-all duration-200
                          ${i === activeStep
                            ? "bg-[#1656A5] text-white shadow-md"
                            : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
                          }
                        `}
                      >
                        {step.label}
                      </button>
                    ))}
                  </div>

                  {/* Progress bar + step counter */}
                  <div className="flex gap-2 items-center">
                    <div className="w-full md:w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1656A5] transition-all duration-300"
                        style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                    <div className="text-[#606060] font-normal text-base">
                      {activeStep + 1} / {steps.length}
                    </div>
                  </div>
                </div>

                {/* Content + Image */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8">
                    {/* Left Card */}
                    <div className="w-[349px] bg-[#F1F7FC] rounded-2xl flex justify-between flex-col p-5 gap-6">
                      <div className="text-[28px] text-[#2C2C2C] font-normal">
                        {steps[activeStep].title}
                      </div>
                      <div className="flex flex-col gap-4">
                        {steps[activeStep].items.map((item, idx) => (
                          <div key={idx} className="flex flex-col gap-[2px]">
                            <div className="text-xs text-[#2C2C2C] font-normal">{`0${idx + 1}`}</div>
                            <div className="text-xs text-[#2C2C2C] font-normal">{item}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full max-w-[1248px] rounded-2xl overflow-hidden flex-1">
                      <img
                        key={activeStep} 
                        src={steps[activeStep].image}
                        alt={steps[activeStep].title}
                        className="w-full h-full object-cover block transition-opacity duration-500 ease-in-out"
                        style={{ minHeight: '0', height: '100%' }} // match flex height
                      />
                    </div>
                  </div>

              </div>
            </div>
          </section>

      <section id="stories-section">
        <StoriesSection />
      </section>

      {/* Section 7: Form */}
      <ConsultationForm />
      {/* SECTION 8: GradientBanner */}
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
        <h2
          className="relative w-[90%] md:w-[70%] lg:w-[50%] text-center font-[Manrope] 
              text-[#94BA3D] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] 
              font-normal leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[56px] 
              tracking-[-0.96px] px-4 z-10"
        >
          Repeated failures don’t mean the end; they mean it’s time for a new plan.
        </h2>
      </section>
    </div>
  );
};
