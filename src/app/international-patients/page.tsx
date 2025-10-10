"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import GradientBanner from "@/components/GradientBanner";
import AwardsSection from "../../components/Home/AwardsSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "../../components/HeroSection/herosection";
import Journey from '../../components/Journey'

const InternationalPatientsPage: React.FC = () => {
  const categories = [
    { id: "start", label: "Start Your Journey Today" },
    { id: "fertility", label: "Advanced Fertility Solutions" },
    { id: "testimonial", label: "Patients Testimonial" },
    { id: "news", label: "Featured News & Media" },
  ];

  const [activeTab, setActiveTab] = useState("start");

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id);
    }
  };

  // Detect which section is in view and update active tab
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    categories.forEach((cat) => {
      const element = document.getElementById(cat.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      categories.forEach((cat) => {
        const element = document.getElementById(cat.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Connect With Us",
      image: "/InternationalPatients/connect.png",
      subtitle: "Begin your treatment journey",
      sub_description: "Fill the form and our team will guide you",
      description: [
        "Clear answers to your questions",
        "Suggested personalized treatment plan",
        "Documentation checklist",
        "Pre/post treatment guidance",
      ],
    },
    {
      number: "02",
      title: "Secure Your Visa",
      image: "/InternationalPatients/visa.png",
      subtitle: "Confirm your treatment & travel",
      sub_description:
        "Once treatment is confirmed, we assist in visa processing.Provide all necessary medical documents. Accommodation and travel assistance,",
      description: [],
    },
    {
      number: "03",
      title: "Arrive & Begin Treatment",
      image: "/InternationalPatients/arrive.png",
      subtitle: "We’re with you at every step",
      sub_description:
        "Meet your doctor & team personally. Start your planned treatment with comfort & clarity. 24x7 support during your stay",
      description: [],
    },
  ];

  const Letter = ({ char, index, total, scrollYProgress }) => {
    const start = index / total;
    const end = (index + 1) / total;

    const color = useTransform(
      scrollYProgress,
      [start, end],
      ["rgba(44,44,44,0.25)", "#2C2C2C"]
    );

    return (
      <motion.span
        style={{ color }}
        className="text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal"
      >
        {char}
      </motion.span>
    );
  };

  const femaleInfertilityIssues = [
    {
      id: 1,
      title: "In-Vitro Fertilization (IVF) ",
      slug: "repeated-iui-failures",
      image: "/InternationalPatients/ivf1.png",
    },
    {
      id: 2,
      title: "Embryo Donation (ED)",
      slug: "repeated-ivf-failures",
      image: "/InternationalPatients/ivf2.png",
    },
    {
      id: 3,
      title: "Oocyte Donation (OD)",
      slug: "pregnancy-after-menopause",
      image: "/InternationalPatients/ivf3.png",
    },
    {
      id: 4,
      title: "IVF-ICSI",
      slug: "low-amh",
      image: "/InternationalPatients/ivf4.png",
    },
    {
      id: 5,
      title: "PCOS",
      slug: "pcos",
      image: "/InternationalPatients/ivf5.png",
    },
    {
      id: 6,
      title: "Blastocyst Transfer",
      slug: "tubal-blockage",
      image: "/InternationalPatients/ivf6.png",
    },
    {
      id: 7,
      title: "Freezing/Vitrification",
      slug: "fibroids",
      image: "/InternationalPatients/ivf7.png",
    },
    {
      id: 8,
      title: "Genetic Screening",
      slug: "endometriosis",
      image: "/InternationalPatients/ivf8.png",
    },
  ];

  const TestimonialsSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const testimonials = [
      {
        text: "After years of failed attempts, Progenesis helped us find the cause, treated us with care, and blessed us with twins. Highly recommend them.",
        author: "– Gulelat Biamesh, Couple from Ethiopia",
        image: "/InternationalPatients/testimonial.png"
      },
      {
        text: "The team was so supportive throughout my journey. Their care and expertise gave me hope again.",
        author: "– Priya Sharma, Progenesis Mom, Pune",
        image: "/InternationalPatients/testimonial.png"
      },
      {
        text: "Every visit gave me more confidence. Today, I'm blessed with the family I always dreamed of.",
        author: "– Anjali Mehta, Progenesis Mom, Mumbai",
        image: "/InternationalPatients/testimonial.png"
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <section
        id="testimonial"
        className="w-full bg-[#1656A5] text-white py-12 csLg:py-[82px] csLg:h-[700px] min-h-screen csLg:min-h-0"
      >
        <div className="flex flex-col csLg:flex-row items-center mx-auto px-6 md:px-[120px] gap-8 csLg:gap-0">
          {/* Header Section */}
          <div className="flex flex-col justify-between w-full csLg:w-[350px]">
            <h2
              className="text-[#F9F9F9] font-[Manrope] 
             text-[32px] csLg:text-[48px] font-normal leading-[40px] csLg:leading-[56px] 
             tracking-[-0.64px] csLg:tracking-[-0.96px] mb-6 csLg:mb-8 text-center csLg:text-left"
            >
              What our international patients are saying
            </h2>

            {/* Progress Bar */}
            <div className="w-full csLg:w-[200px] h-1 bg-white/30 rounded-full mb-4 mx-auto csLg:mx-0">
              <div
                className="h-1 bg-white rounded-full transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Navigation Buttons - Hidden on Mobile */}
            <div className="hidden csLg:flex items-center space-x-4 mt-6">
              <button
                ref={prevRef}
                className="w-14 h-14 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                ←
              </button>
              <button
                ref={nextRef}
                className="w-14 h-14 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                →
              </button>
            </div>
          </div>

          {/* Swiper Container */}
          <div className="w-full csLg:w-[509px] csLg:mr-[16px]">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              className="testimonial-swiper"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  {/* Mobile Layout */}
                  <div className="csLg:hidden flex flex-col gap-6">
                    {/* Image on Mobile */}
                    <div className="w-full">
                      <img
                        src={t.image}
                        alt="Happy Family"
                        className="rounded-xl w-full h-auto object-cover shadow-lg"
                      />
                    </div>

                    {/* Testimonial Card on Mobile */}
                    <div className="flex flex-col justify-between 
                                  w-full min-h-[300px]
                                  px-6 py-8 
                                  bg-white text-gray-800 rounded-2xl shadow-lg">
                      <p className="text-[#1656A5] font-[Manrope] 
                                text-[18px] leading-[28px] tracking-[-0.36px] font-normal">
                        {t.text}
                      </p>

                      <span className="mt-6 text-[rgba(44,44,44,0.5)] 
                                    font-[Manrope] text-[14px] leading-[20px] tracking-[-0.28px]">
                        {t.author}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden csLg:flex flex-col justify-between 
                                w-[509px] h-[536px] flex-shrink-0 
                                px-[43px] py-[96px] 
                                bg-white text-gray-800 rounded-2xl shadow-lg">
                    <p className="text-[#1656A5] font-[Manrope] 
                              text-[32px] leading-[40px] tracking-[-0.64px] font-normal">
                      {t.text}
                    </p>

                    <span className="mt-[80px] text-[rgba(44,44,44,0.5)] 
                                  font-[Manrope] text-[16px] leading-[24px] tracking-[-0.32px]">
                      {t.author}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Image - Desktop Only */}
          <div className="hidden csLg:block w-[750px]">
            <img
              src="/InternationalPatients/testimonial.png"
              alt="Happy Family"
              className="rounded-xl h-[536px] shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="">
      <section className="relative w-full h-[60vh] py-4 csLg:px-[120px] px-6  flex flex-col csLg:justify-center">
        {/* Background images: mobile and desktop */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/InternationalPatients/ip-bg-mob.png')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
          aria-hidden
        />

        <img className=" csLg:block hidden absolute csLg:right-[10%] bottom-0 h-[100%] w-[30%]" src="/InternationalPatients/hero_person.png" alt="" />

        <div className='relative w-full'>
          {/* Left: Content block */}
          <div className=''>
            <div className='flex flex-col gap-[20px] mt-10 csLg:mt-0'>
              {/* Breadcrumb-like line */}
              <div >
                <h2 className='font-manrope csLg:text-[18px] font-semibold text-[12px] leading-[26px] tracking-[-0.02em]'>
                  <button onClick={() => window.location.href = '/'} className='hover:cursor-pointer'> Home </button> <span className="px-[12px]">›</span> <span className="text-[#1656A5]"> International Patient </span>
                </h2>
              </div>

              {/* Title */}
              <div>
                <h1 className='font-manrope font-semibold csLg:text-[80px] text-[32px] csLg:leading-[88px] leading-[48px] tracking-[-0.02em] csLg:max-w-[60%]'>
                  IVF Treatment for
                  International Patient              </h1>
              </div>

              {/* CTA */}
              <div className=''>
                <button
                  className='bg-[#252525] text-[14px] h-[56px] px-6  text-[#F9F9F9] rounded-[16px] hover:bg-[#333] transition'
                >
                  Book Your Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Right column removed; background image now covers entire section */}
        </div>
      </section>
      <div
        className="w-full bg-white pt-[50px] px-[12px] md:px-[80px] xl:px-[120px]"
      >
        <div className="flex flex-wrap justify-start items-start gap-3 md:gap-4 text-left">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleScroll(cat.id)}
              className={`cursor-pointer px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px] font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] tracking-[-0.28px] transition-all duration-200 ${activeTab === cat.id
                ? "bg-[#1656A5] text-white shadow-md"
                : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <section id="start" className="csLg:px-[120px] px-[16px] py-[80px] bg-white">
        <Journey />
      </section>


      <section className="relative bg-center bg-cover flex justify-center items-center min-h-[312px]">
        {/* Mobile Background */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gradient-banner-mob.png')" }}
          aria-hidden
        />
        {/* Desktop Background */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gradient-banner.png')" }}
          aria-hidden
        />

        <p className="text-[#94BA3D] max-w-[90%] text-[28px] csLg:text-[48px] text-center font-normal font-[Manrope] relative z-10">
          Our specialists address your concerns, explain treatment steps, ensure safe care, and arrange hassle-free accommodation with comfort, transport, and support.          </p>
      </section>
      <section id="fertility" className="bg-white pt-[80px] pb-[60px]">
        <div className="px-4 md:px-[80px] lg:px-[120px]">
          <div className="flex flex-col xl:flex-row justify-between gap-10">
            <div className="w-full xl:w-[45%]">
              <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
                Advanced Fertility Solutions
              </span>
              <h2 className="text-[30px] md:text-[48px] font-light text-[#2C2C2C] mb-6 leading-[40px] md:leading-[56px]">
                Personalized fertility care for,<br /> every parenthood journey
              </h2>
            </div>
            <div className="flex-1">
              <p
                className="font-[Manrope] font-normal text-[#2C2C2C] text-[18px] leading-[28px] tracking-[-0.36px] md:text-[24px] md:leading-[32px] md:tracking-[-0.48px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] xl:text-[32px] xl:leading-[40px] xl:tracking-[-0.64px] max-w-[832px]"
              >
                At Progenesis, we offer all advanced fertility treatments under one roof — from IVF and ICSI to embryo donation, genetic screening, and cryopreservation. Our global-standard care ensures international patients receive safe, personalized solutions to achieve their dream of parenthood.
              </p>
            </div>
          </div>
          <div
            className="grid gap-6 mt-[80px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-items-center"
          >
            {femaleInfertilityIssues.map((issue) => (
              <Link
                key={issue.id}
                href={`/infertility/${issue.slug}`}
                className="flex flex-col items-center justify-between w-full px-6 pt-6 pb-[70px] gap-[40px] bg-[rgba(22,86,165,0.05)] rounded-2xl transition hover:bg-[#1656A51F]"
              >
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
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <section id="news">
        <AwardsSection />
      </section>
      <section className="relative overflow-hidden">
          {/* Video Background */}

          <div className="relative z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/baby.mp4" type="video/mp4" />
          </video>
          <ConsultationForm />

          </div>
        </section>
    </main>
  );
};

export default InternationalPatientsPage;
