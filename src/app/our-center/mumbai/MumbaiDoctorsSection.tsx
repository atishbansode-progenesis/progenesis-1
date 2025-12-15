"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

const MumbaiDoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Mumbai doctors data with actual images and information
  const doctors = [
    {
      id: 1,
      name: "Dr. Narhari S. Malagaonkar",
      image: "/images/doctors/doctor-narhari.png",
      description: "He emphasises a fully personalised fertility treatment plan and advanced laboratory technologies to address each couple's unique infertility issues.",
      experience: [
        "15+ Years",
        "MD, DNB, DGO, FCPS, DFP (Mumbai)",
        "Fellowship in Reproductive Medicine (Singapore)"
      ],
      location: "Mumbai",
      role: "Chief Fertility Consultant"
    },
    {
      id: 2,
      name: "Dr. Sonali N. Malagaonkar",
      image: "/images/doctors/doctor-sonali.png",
      description: "She focuses on personalised fertility care with evidence-based protocols to improve reproductive outcomes.",
      experience: [
        "12+ Years",
        "M.S. (Obstetrics and Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Mumbai",
      role: "Senior Fertility Consultant"
    },
    {
      id: 3,
      name: "Dr. Unnati Mamtora",
      image: "/images/doctors/drunnati.jpg",
      description: "She provides compassionate fertility treatment plans tailored to individual patient needs.",
      experience: [
        "12+ Years",
        "DNB DGO (Obstetrics and Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Borivali",
      role: "Fertility Consultant"
    },
    {
      id: 4,
      name: "Dr. Prerna Khandelwal",
      image: "/images/doctors/Prerrna.webp",
      description: "She adopts a patient-centric approach using modern reproductive techniques.",
      experience: [
        "4+ Years",
        "MS (Obstetrics & Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Thane",
      role: "Fertility Consultant"
    },
    {
      id: 5,
      name: "Dr. Shraddha Pol",
      image: "/images/doctors/drshradda.jpg",
      description: "She specialises in infertility management with a focus on ethical and advanced care.",
      experience: [
        "4+ Years",
        "MS (Obstetrics & Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Thane",
      role: "Fertility Consultant"
    },
    {
      id: 6,
      name: "Dr. Bhavika Sane",
      image: "/images/doctors/drbhavika.jpg",
      description: "She delivers structured fertility treatments supported by clinical precision.",
      experience: [
        "4+ Years",
        "DGO (Obstetrics and Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Vashi",
      role: "Fertility Consultant"
    },
    {
      id: 7,
      name: "Dr. Bhagyashri",
      image: "/images/doctors/Bhageshri.webp",
      description: "She is committed to comprehensive infertility care and patient education.",
      experience: [
        "8+ Years",
        "DGO (Obstetrics and Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Vashi",
      role: "Fertility Consultant"
    },
    {
      id: 8,
      name: "Dr. Teena Desai",
      image: "/images/doctors/Teena.webp",
      description: "She combines clinical expertise with empathetic patient support.",
      experience: [
        "10+ Years",
        "DNB DGO (Obstetrics and Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Andheri",
      role: "Fertility Consultant"
    },
    {
      id: 9,
      name: "Dr. Priti Pardeshi",
      image: "/images/doctors/Priti.webp",
      description: "She provides evidence-driven fertility solutions with personalised care.",
      experience: [
        "12+ Years",
        "DGO (Obstetrics and Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Kalyan",
      role: "Fertility Consultant"
    },
    {
      id: 10,
      name: "Dr. Darshna Wahane",
      image: "/images/doctors/drdarshana.jpg",
      description: "She focuses on holistic fertility management using modern protocols.",
      experience: [
        "10+ Years",
        "MBBS DGO (Obstetrics and Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Panvel",
      role: "Fertility Consultant"
    },
    {
      id: 11,
      name: "Dr. Rajashree Patil",
      image: "/images/doctors/Rajashree.webp",
      description: "She delivers personalised infertility treatment with consistent outcomes.",
      experience: [
        "12+ Years",
        "DNB DGO (Obstetrics and Gynaecology)",
        "Fellowship in Reproductive Medicine"
      ],
      location: "Virar",
      role: "Fertility Consultant"
    }
  ];

  const prevDoctor = () => {
    setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  const nextDoctor = () => {
    setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.scrollWidth / doctors.length;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(index, doctors.length - 1));
    }
  };

  const doctor = doctors[currentIndex];

  return (
    <section className="py-4 md:py-20 bg-[#FAFAFA] px-4 sm:px-6 lg:px-30 xl:px-30 2xl:px-32">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 mb-8 md:mb-20 lg:mb-32">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 lg:max-w-2xl">
          <span className="inline-block text-xs md:text-sm font-medium text-[#1656a5] bg-[#1656a50d] px-3 py-1 rounded-full mb-4 md:mb-6">
            The Experts
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 leading-tight">
            Meet Our Mumbai <br /> Fertility Specialists
          </h2>
          <button 
            aria-label="view all doctors" 
            onClick={() => window.location.href = "/doctors"} 
            className="px-6 cursor-pointer md:px-10 lg:px-12 py-2.5 md:py-3 rounded-lg md:rounded-2xl text-xs md:text-sm font-medium border border-[#1656a5] text-[#1656a5] hover:bg-[#1656a5] hover:text-white transition-all duration-300"
          >
            View all Doctors
          </button>
        </div>

        {/* Right Side - Description */}
        <div className="w-full lg:w-1/2 flex items-center">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl leading-relaxed md:leading-relaxed lg:leading-10 tracking-tight font-normal">
            Our Mumbai center features a team of highly experienced fertility specialists dedicated to providing personalized care and advanced treatments to help you achieve your dream of parenthood.
          </p>
        </div>
      </div>

      {/* Doctor Card Carousel */}
      <div className="relative max-w-7xl mx-auto">
        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pr-0"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {doctors.map((doc, idx) => (
              <div key={idx} className="flex-shrink-0 w-[85%] snap-center">
                <div className="rounded-lg bg-[#FFFFFF] h-[733px] overflow-hidden">
                  {/* Doctor Image */}
                  <div className="w-full p-2 flex items-center justify-center">
                    <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden h-[300px]">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="85vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4">
                    <div className="mb-4">
                      <h3 className="text-[#1656A5] text-2xl font-normal leading-[40px] line-clamp-2 mb-2">
                        {doc.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {doc.description}
                      </p>
                    </div>

                    {/* Experience Tags */}
                    <div className="flex flex-col gap-2 mb-4">
                      {doc.experience.map((exp: string, expIdx: number) => (
                        <div
                          key={expIdx}
                          className="inline-flex w-fit px-3 py-2 text-[#1656A5] text-xs rounded-lg bg-blue-50"
                        >
                          {exp}
                        </div>
                      ))}
                    </div>

                    {/* Location and Role */}
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-[#2C2C2C] text-xl font-normal mb-1">
                        {doc.location}
                      </h4>
                      <span className="text-[#2C2C2C] text-sm opacity-50">
                        {doc.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 text-center">
            <p className="text-gray-600 text-xs font-semibold">
              {String(currentIndex + 1).padStart(2, "0")} of{" "}
              {String(doctors.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Desktop and Tablet View */}
        <div className="hidden md:block">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={prevDoctor}
            className="hidden xl:flex absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-20 2xl:-translate-x-24 w-[56px] h-[56px] items-center justify-center rounded-[16px] border border-[#1656a5] text-[#1656a5] text-xl hover:bg-[rgba(22,86,165,0.05)] transition-all duration-300 z-10"
            aria-label="Previous doctor"
          >
            <img src="/icons/left.svg" alt="Previous" width={12} height={12} />
          </button>

          <button
            onClick={nextDoctor}
            className="hidden xl:flex absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-20 2xl:translate-x-24 w-[56px] h-[56px] items-center justify-center rounded-[16px] border border-[#1656a5] text-[#1656a5] text-xl hover:bg-blue-50 transition-all duration-300 z-10"
            aria-label="Next doctor"
          >
            <img src="/icons/right.svg" alt="Next" width={12} height={12} />
          </button>

          {/* Doctor Card */}
          <div className="bg-[#FFFFFF] rounded-2xl">
            {/* Counter */}
            <div className="relative">
              <p className="absolute top-4 right-4 md:top-[-30px] md:right-6 text-gray-600 text-xs md:text-sm font-semibold z-10">
                {String(currentIndex + 1).padStart(2, "0")} of{" "}
                {String(doctors.length).padStart(2, "0")}
              </p>
            </div>

            {/* Card Content */}
            <div className="flex flex-col md:flex-row p-2 md:p-4 min-h-[450px] md:min-h-[420px] lg:min-h-[460px]">
              {/* Doctor Image */}
              <div className="w-full md:w-[40%] lg:w-[35%] p-2 md:p-3 flex items-center justify-center">
                <div className="w-full aspect-[390/444] relative rounded-[12px] overflow-hidden h-[430px] md:h-[400px] lg:h-[460px]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 35vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex flex-row gap-4 md:gap-6 p-2 md:p-4 flex-1">
                {/* Name and Description */}
                <div className="flex flex-col justify-between flex-1 min-h-full w-[60%] md:w-[65%]">
                  <div className="h-[250px] md:h-[270px] lg:h-[290px] overflow-hidden">
                    <h3 className="text-[#1656A5] text-[32px] mb-[8px] lg:text-[40px] md:text-[40px] font-normal leading-tight line-clamp-2">
                      {doctor.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4">
                      {doctor.description}
                    </p>
                  </div>

                  {/* Experience Tags */}
                  <div className="flex flex-col gap-2.5 md:gap-3">
                    {doctor.experience.map((exp: string, idx: number) => (
                      <div
                        key={idx}
                        className="inline-flex w-fit px-3 text-[#1656A5] text-[14px] rounded-lg p-[12px] bg-blue-50"
                      >
                        {exp}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-end border-l h-full border-gray-200 pl-4 md:pl-6 min-h-full w-[40%] md:w-[35%]">
                  <div className="h-[80px] md:h-[100px] lg:h-[120px] flex flex-col justify-end">
                    <h4 className="text-[#2C2C2C] text-[32px] mb-2 md:text-3xl lg:text-4xl font-normal leading-tight line-clamp-1">
                      {doctor.location}
                    </h4>
                    <span className="text-[#2C2C2C] text-[16px] opacity-50 whitespace-nowrap line-clamp-1">
                      {doctor.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Tablet */}
          <div className="flex xl:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevDoctor}
              className="w-[56px] h-[56px] rounded-[16px] flex items-center cursor-pointer justify-center border border-blue-600 text-[#1656a5] text-xl hover:bg-blue-50 transition-all duration-300"
              aria-label="Previous doctor"
            >
              <img src="/icons/left.svg" alt="Previous" width={12} height={12} />
            </button>
            <button
              onClick={nextDoctor}
              className="w-[56px] h-[56px] rounded-[16px] flex items-center cursor-pointer justify-center border border-blue-600 text-[#1656a5] text-xl hover:bg-blue-50 transition-all duration-300"
              aria-label="Next doctor"
            >
              <img src="/icons/right.svg" alt="Next" width={12} height={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MumbaiDoctorsSection;