"use client";
import React, { useState } from "react";
import Image from "next/image";
import ConsultationForm from "../../components/Consultation/ConsultationForm";
import Link from "next/link";


const OnlineConsultation: React.FC = () => {


  const [activeTab, setActiveTab] = useState("journey");

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
    <div className="w-full flex flex-col">
      {/* 1️⃣ Hero Section */}
      <section
        className="relative w-full h-[500px] md:h-[600px] flex flex-col md:flex-row pl-[12px] md:pl-[80px] xl:pl-[120px] bg-cover bg-center overflow-hidden"
      >
        {/* Blurred gradient shape */}

        <div
          className="absolute left-[-150px] top-[80px] w-[445px] h-[441px] rounded-full opacity-80"
          style={{
            background: "#94BA3D",
            filter: "blur(250px)",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* Right Blue Glow (slightly darker, richer tone) */}
        <div
          className="absolute right-[-150px] top-[100px] w-[445px] h-[441px] rounded-full opacity-80"
          style={{
            background: "#0F3E7D", // darker shade of 1656A5
            filter: "blur(250px)",
            transform: "rotate(2deg)",
          }}
        ></div>


        {/* Left content */}
        <div className="relative z-10 mt-2 md:mt-[85px] max-w-5xl">
          <p className="text-[12px] md:text-[14px] l:text-[18px] text-gray-600  md:mb-[44px]">
            <Link href="/" className="hover:text-blue-700 transition-colors">
              Home
            </Link><span className="px-[12px]">›</span>
            <span
              className="inline-block px-3 py-1 rounded-md text-[12px] md:text-[14px] l:text-[18px] font-medium leading-[40px] tracking-[-0.36px] text-blue-700"
            >
              Online Consultation
            </span>
          </p>
          <h1 className="text-[32px] md:text-[52px] lg:text-[62px]  2xl:text-[80px] font-bold leading-tight mb-[12px] md:mb-[44px] text-[#252525]">
            IVF & Fertility<br /> Online Consultation
          </h1>
          <button className="md:mt-6 px-[10px] md:px-[20px] py-[10px] md:py-[16px] text-[12px] md:text-[14px] bg-black text-white rounded-[8px] md:rounded-[14px]">
            Book Your Appointment
          </button>
        </div>
        <div className="relative w-full max-w-[994px] aspect-[994/663] flex-shrink-0 md:mr-auto md:ml-[-80px] xl:ml-[-120px]">
          {/* Decorative Background Shape */}
          <div
            className="absolute inset-0 transform rotate-[-6.006deg] opacity-25 pointer-events-none"
            style={{ zIndex: 1 }}
          >
            <Image
              src="/online-consultation/heartbg.png"
              alt="Background shape"
              fill
              className="object-contain object-bottom rounded-lg"
            />
          </div>

          {/* Main Foreground Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/online-consultation/onlinebg.png"
              alt="Doctor consultation"
              fill
              className="object-contain object-bottom rounded-lg"
              priority
            />
          </div>
        </div>





      </section>






      <div className="flex flex-wrap gap-4 pt-[50px] px-[12px] md:px-[80px] xl:px-[120px] pb-[80px] bg-[#fff]">
        <button
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

        <button
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
        </button>
      </div>







      {/* 2️⃣ Section: Talk to Specialists */}

      <section id="journey-section" className="w-full flex flex-col lg:flex-row justify-between px-[12px] md:px-[80px] xl:px-[120px] py-16 gap-10 bg-[#FAFAFA]">
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
                    md:text-[48px] md:leading-[56px] md:tracking-normal mb-[50px]
                    md:mb-[200px]
                  "
            >
              {title}
            </h2>
            <div className="h-px bg-[#D4D4D4] md:hidden mb-[40px]"></div>

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
    px-[12px] md:px-[80px] xl:px-[120px] 
    bg-cover bg-no-repeat bg-center overflow-hidden
    bg-[url('/online-consultation/online_cta_mobile.png')] md:bg-none
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
          <h2 className="text-[#94BA3D] font-[Manrope] text-[32px] md:text-[46px] font-semibold leading-[40px] md:leading-[44.84px] tracking-[-0.92px] opacity-90">
            Book your consultation <br /> with our experts today.
          </h2>
        </div>

        {/* 🔹 Center Image (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center relative z-10">
          {/* Background Heart */}
          <Image
            src="/online-consultation/background_heart.png"
            alt="Background Heart"
            width={600}
            height={1000}
            className="max-h-[1000px] absolute inset-0 mx-auto my-auto opacity-[0.12]"
          />

          {/* Doctor on Phone */}
          <Image
            src="/online-consultation/doctor-phone.png"
            alt="Doctor on phone"
            width={600}
            height={600}
            className="max-h-[600px] object-contain relative z-20"
          />
        </div>

        {/* 🔹 Right Description */}
        <div className="flex-1 max-w-sm  mt-[290px] md:mt-[390px] relative z-10 text-left">
          <p className="text-[#606060] font-[Manrope] text-[16px] md:text-[18px] font-normal leading-normal tracking-[-0.36px]">
            Take the first step towards parenthood with a free online consultation.
            Connect with our fertility experts from the comfort of your home.
          </p>
        </div>
      </section>



      {/* 4️⃣ 4-Step Journey Section */}

      <section id="how-section" className="w-full px-[12px] md:px-[80px] xl:px-[120px]  py-20 bg-[#FAFAFA]">
        {/* Small Label (How it works) */}


        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          How It Works
        </span>

        {/* Main Heading */}
        <h2
          className="
            text-[#2C2C2C] font-[Manrope] font-normal 
            text-[32px] leading-[40px] tracking-[-0.64px]   /* ✅ Mobile */
            md:w-[650px] md:text-[48px] md:leading-[56px] md:tracking-[-0.96px]  /* ✅ Desktop */
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
                className="w-[28px] h-[28px] md:w-[50px] md:h-[50px] aspect-[1/1] object-contain"
              />

              {/* Title (Contact Us etc.) */}
              <h3
                className="
    text-[#2C2C2C] font-[Manrope] 
    text-[16px] leading-[24px] tracking-[-0.32px] font-semibold  /* ✅ Mobile */
    md:text-[32px] md:leading-[40px] md:tracking-[-0.64px] md:font-normal  /* ✅ Desktop */
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
    bg-no-repeat bg-cover bg-center h-[582px] md:h-[474px]
    px-6 md:px-[80px] xl:px-[120px] 
    py-16 md:py-24 lg:py-[80px]
    /* ✅ Mobile Background */
    bg-[url('/online-consultation/take_a_quiz_bg_mobile.png')]
    md:bg-[url('/online-consultation/take_a_quiz_bg_desktop.png')]
  "
      >
        {/* 🔹 Overlay if needed */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}

        {/* 🔹 Content */}
        <div className="relative z-10 max-w-[700px] text-left md:text-left">
          <span className="flex items-center gap-1 px-2 py-1 text-[#1656A5] font-[Manrope] text-[12px] font-medium leading-[20px] tracking-[-0.24px] mb-4">
            Quick Fertility Score, Expert Advice
          </span>

          <h2
            className="
        text-[#2C2C2C] font-[Manrope] font-normal
        text-[28px] leading-[36px] tracking-[-0.56px] 
        md:text-[40px] md:leading-[48px] md:tracking-[-0.8px] 
        lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.96px] 
        mb-6 md:mb-8
      "
          >
            Not Sure Where to Start? <br /> Take Our 2-Minute Fertility Quiz
          </h2>

          <button
            type="button"
            className="px-6 py-3 rounded-[8px] bg-black text-[#F9F9F9] font-[Manrope] text-[14px] font-medium leading-[24px] tracking-[-0.28px] transition hover:bg-gray-900"
          >
            Take a Quiz
          </button>
        </div>
      </section>



      <ConsultationForm />
    </div>
  );
};

export default OnlineConsultation;
