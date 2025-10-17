"use client";
import React, { useState } from "react";
import Image from "next/image";
import ConsultationForm from "../../components/Consultation/ConsultationForm";
import Link from "next/link";
import HeroSection from "@/components/HeroSection/herosection";
import AppointmentForm from "@/page-components/about/AppointmentForm";
import OnlineConsultationHero from "@/page-components/oc/OnlineConsultationHero";


const OnlineConsultation: React.FC = () => {


  const [activeTab, setActiveTab] = useState<keyof typeof sections>("journey");

  // 🔹 Define content for each tab
  const sections = {
    journey: {
      tabname: "Start Your Journey Today",
      title: "IVF & Fertility Online Consultation – From the Comfort of Your Home",
      subtitle: "Talk to Specialists",
      text: "Expert advice is just a call away! Get free, hassle-free consultation with our fertility specialists without traveling or incurring extra expenses. Prepare your questions in advance to make the most of your session and get all your doubts answered.",
      image: "/online-consultation/sectionb.png",
    },
    how: {
      tabname: "How It Works",
      title: "How It Works – Easy & Transparent Process",
      subtitle: "Step by Step Guidance",
      text: "Our experts explain every step clearly, from your first consultation to treatment. You’ll know exactly what to expect, ensuring a stress-free experience throughout your fertility journey.",
      image: "/online-consultation/sectionb.png",
    },
    quiz: {
      tabname: "Take a Quiz",
      title: "Take a 2-Minute Fertility Quiz",
      subtitle: "Quick Insights",
      text: "Not sure where to begin? Take our simple quiz and instantly receive insights about your fertility journey, so you can take the right first step with confidence.",
      image: "/online-consultation/sectionb.png",
    },
  };

  const { tabname, title, subtitle, text, image } = sections[activeTab];



  return (
    <div className="w-full flex flex-col ">

      <OnlineConsultationHero />


      {/* 1. TAB BUTTONS (Adjusted pb-[80px] to pb-[40px] for less gap) */}
      <div className="flex flex-wrap gap-4 p-4 lg:px-30 lg:py-20 bg-[#fff]">        <button
        type="button"
        onClick={() => document.getElementById("journey-section")?.scrollIntoView({ behavior: "smooth" })}
        className={`px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px] 
      font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "journey"
            ? "bg-[#1656A5] text-white"
            : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
          }`}
      >
        Start Your Journey Today
      </button>

        <button
          type="button"
          onClick={() => document.getElementById("how-section")?.scrollIntoView({ behavior: "smooth" })}
          className={`px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px]  
      font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "how"
              ? "bg-[#1656A5] text-white"
              : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
            }`}
        >
          How It Works
        </button>

        {/* <button
          type="button"
          onClick={() => document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" })}
          className={`px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px]  
      font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] 
      tracking-[-0.28px] transition ${activeTab === "quiz"
              ? "bg-[#1656A5] text-white"
              : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
            }`}
        >
          Take a Quiz 
        </button> */}
      </div>







      {/* 2️⃣ Section: Talk to Specialists (Adjusted py-4 to pt-0/py-0 on mobile and smaller padding on desktop) */}
      <section id="journey-section" className="relative w-full flex flex-col lg:flex-row justify-between p-4 lg:px-30 lg:py-20 gap-10 bg-[#FAFAFA]">
        {/* Left content */}
        <div className="max-w-lg flex flex-col justify-between">
          <div>
            <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
              {tabname}
            </span>

            <h2
              className="
                    text-[#2C2C2C] font-normal font-[Manrope] 
                    text-[32px] leading-[40px] tracking-[-0.64px] 
                    md:text-[40px] md:leading-[56px] md:tracking-normal mb-[50px]
                    md:mb-[200px]
                  "
            >
              {title}
            </h2>
            <div className="h-px bg-[#D4D4D4] md:hidden  mb-[30px]"></div>

          </div>

          {/* Bottom-aligned subtitle + paragraph */}
          <div className="mt-auto">
            <h3 className="text-[16px] md:text-[32px] leading-[24px] md:leading-[40px] text-[#1656A5] mb-2">{subtitle}</h3>
            <p className="text-[16px] leading-[24px] text-[#2C2C2C]">{text}</p>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-[800px] lg:h-[613px] rounded-[16px] overflow-hidden">
          <Image
            src={image}
            alt={subtitle}
            width={800}
            height={613}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </section>




      {/* 3️⃣ CTA Section */}
      <section
        className="
    relative w-full h-[600px] flex flex-col md:flex-row justify-between 
    px-4 lg:px-[50px] xl:px-[80px] 2xl:px-[120px]
    bg-cover bg-no-repeat bg-center overflow-hidden
    bg-[url('/online-consultation/online_cta_mobile.png')] csLg:bg-[url('/online-consultation/complete-heart-doctor.png')]
  "
      >
        {/* 🔹 Background Blur Gradients (desktop only) */}
        <div
          className="hidden md:block absolute left-[-50px] bottom-[-50px] w-[322px] h-[443px] rounded-full opacity-70"
          style={{
            background: "#94BA3D",
            filter: "blur(250px)",
            transform: "rotate(-2deg)",
          }}
        ></div>

        <div
          className="hidden md:block absolute right-[-150px] top-[-200px] w-[350px] h-[350px] rounded-full opacity-90"
          style={{
            background: "#1656A5",
            filter: "blur(250px)",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* 🔹 Left Heading */}
        <div className="flex-1 relative mt-[20px] md:mt-[80px] l:mt-[145px] z-10 text-left">
          <h2 className="text-[#94BA3D] text-[32px] lg:max-w-[520px] md:text-[46px] font-semibold leading-[40px] md:leading-[44.84px] tracking-[-0.92px] opacity-90">
            Book your consultation  with our experts today.
          </h2>

        </div>

        {/* 🔹 Center Image (desktop only) */}
        {/* <div className="hidden csLg:flex flex-1 justify-center relative csLg:absolute csLg:bottom-0 csLg:transform csLg:translate-x-[70%] z-10">
          <Image
            src="/online-consultation/background_heart.png"
            alt="Background Heart"
            width={600}
            height={1000}
            className="max-h-[1000px] absolute inset-0 mx-auto my-auto opacity-[0.12]"
          />

          <Image
            src="/online-consultation/doctor-phone.png"
            alt="Doctor on phone"
            width={600}
            height={600}
            className="max-h-[600px] object-contain relative z-20"
          />
        </div> */}

        {/* 🔹 Right Description */}
        <div className="flex-1 max-w-sm  mt-[360px] csLg:mt-[390px] relative z-10 text-left">
          <p className="text-[#606060] font-[Manrope] text-[16px] md:text-[18px] font-normal leading-normal tracking-[-0.36px]">
            Take the first step towards parenthood with a free online consultation.
            Connect with our fertility experts from the comfort of your home.
          </p>
        </div>
      </section>



      {/* 4️⃣ 4-Step Journey Section */}

      <section id="how-section" className="w-full p-4 lg:px-[120px] lg:py-[80px] bg-[#FAFAFA]">
        {/* Small Label (How it works) */}


        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          How It Works
        </span>

        {/* Main Heading */}
        <h2
          className="
            text-[#2C2C2C] font-[Manrope] font-normal 
            text-[32px] leading-[40px] tracking-[-0.64px]   /* ✅ Mobile */
            md:w-[650px] md:text-[40px] md:leading-[56px] md:tracking-[-0.96px]  /* ✅ Desktop */
            mb-12
          "
        >
          Your consultation journey in 4 easy steps
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Contact Us",
              desc: "Fill out the form below or call us directly to request your consultation.",
              image: "/online-consultation/call.png",
            },
            {
              title: "Session Scheduled",
              desc: "Our representative will connect with you and arrange a call with one of our experienced assistant doctors.",
              image: "/online-consultation/missed_video_call.png",
            },
            {
              title: "Share Medical History",
              desc: "Keep your medical history ready. Our doctors will review it and schedule a session if needed.",
              image: "/online-consultation/manage_search.png",
            },
            {
              title: "Doctor’s Consultation",
              desc: "Our consulting doctors will call, explain your condition, and guide you on the next steps.",
              image: "/online-consultation/tv_signin.png",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-3 p-6 rounded-[16px] bg-[#F2F2F2]"
            >
              {/* Icon */}
              {/* Icon */}
              <Image
                src={card.image}
                alt={card.title}
                width={50}
                height={50}
                className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] aspect-[1/1] object-contain"
              />

              {/* Title (Contact Us etc.) */}
              <h3
                className="
    text-[#2C2C2C] font-[Manrope] 
    text-[16px] lg:text-[24px] leading-[24px] tracking-[-0.32px] font-semibold  /* ✅ Mobile */
    md:text-[24px] lg:text-[24px] md:leading-[40px] md:tracking-[-0.64px] md:font-normal  /* ✅ Desktop */
  "
              >
                {card.title}
              </h3>

              {/* Subheading (description) */}
              <p
                className="
    text-[#606060] font-[Manrope] 
    text-[16px] leading-[24px] tracking-[-0.32px] font-normal  /* ✅ Mobile & Desktop */
  "
              >
                {card.desc}
              </p>

            </div>
          ))}
        </div>
      </section>








      <section
        id="quiz-section"
        className="
    relative w-full flex flex-col
    bg-no-repeat bg-cover
    bg-center md:bg-[left_-230px_center-fixed]   lg:bg-[left_-340px_center] 
    h-[582px] md:h-[474px]
    px-4 lg:px-[50px] xl:px-[80px] 2xl:px-[120px]
    py-16 md:py-24 lg:py-[80px]
    /* ✅ Mobile Background */
    bg-[url('/online-consultation/take_a_quiz_bg_mobile.png')]
    md:bg-[url('/online-consultation/take_a_quiz_bg_desktop.png')]
  "
      >
        {/* Content */}
        <div className="relative z-10 max-w-[700px] text-left md:text-left">
          <span className="flex items-center gap-1 px-2 py-1 text-[#1656A5] font-[Manrope] text-[12px] font-medium leading-[20px] tracking-[-0.24px] mb-4">
            Quick Fertility Score, Expert Advice
          </span>

          <h2
            className="
        text-[#2C2C2C] font-[Manrope] font-normal
        text-[28px] leading-[36px] tracking-[-0.56px] 
        md:text-[40px] md:leading-[48px] md:tracking-[-0.8px] 
        lg:text-[40px] lg:leading-[56px] lg:tracking-[-0.96px] 
        mb-6 md:mb-8
      "
          >
            Not Sure Where to Start? <br /> Take Our 2-Minute Fertility Quiz
          </h2>
        </div>
      </section>




      <AppointmentForm />
    </div>
  );
};

export default OnlineConsultation;