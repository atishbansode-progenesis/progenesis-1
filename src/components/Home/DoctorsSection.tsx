import Image from "next/image";
import React, { useState, useRef } from "react";

export const doctors = [
  { id:0,
    name: "Dr. Narhari S. Malagaonkar",
    image: "/DoctorsSection/doctorimage.webp",
    description:
      "Dr. Narhari S. Malagaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: [
      "15+ Years of Experience",
      "MD, DNB, DGO, FCPS, DFP (Mumbai)",
      "Fellowship in Reproductive Medicine (Singapore)",
    ],
    location: "All Centers",
    role: "Chief Fertility Consultant",
  },
  {
    id:1,
    name: "Dr. Sonali Malagaonkar",
    image: "/DoctorsSection/DrSonali.webp",
    description:
      "Dr. Sonali Malagaonkar is a Senior Fertility Consultant in Thane, with a focus on infertility management and reproductive medicine. She is active in professional societies.",
    experience: [
      "14+ Years of Experience",
      "M.S. (Obstetrics and Gynaecology) (Mumbai)",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Mumbai",
    role: "Sr. Fertility Consultant",
  },
  {
    id:2,
    name: "Dr. Unnati Mamtora",
    image: "/images/doctors/Unnati.webp",
    description:
      "Dr. Unnati Mamora is a Fertility Consultant with several publications and awards, providing research-driven, empathetic care at Progenesis IVF.",
    experience: [
      "12+ Years of Experience",
      "DNB DGO (Obstetrics and Gynaecology)",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Borivali",
    role: "Fertility Consultant",
  },
  {
    id:3,
    name: "Dr. Prerna Khandelwal",
    image: "/images/doctors/Prerrna.webp",
    description:
      "Dr. Prerna Khandelwal is a Fertility Consultant specializing in reproductive medicine, offering advanced and tailored fertility care at Progenesis IVF.",
    experience: [
      "04+ Years of Experience",
      "MS (Obstetrics and Gynaecology)   ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Thane",
    role: "Fertility Consultant",
  },
   {
    id:4,
    name: "Dr. Shraddha Pol",
    image: "/images/doctors/Shradha.webp",
    description:
      "Dr. Shraddha Pol is a Fertility Consultant focused on infertility and IVF, committed to providing supportive care and improving patient outcomes.",
    experience: [
      "04+ Years of Experience",
      "MS (Obstetrics and Gynaecology)   ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Thane",
    role: "Fertility Consultant",
  },
  {
    id:5,
    name: "Dr. Bhavika Sane",
    image: "/images/doctors/Bhavika.webp",
    description:
      "Dr. Bhavika Sane is a Fertility Consultant with a background in gynecology and obstetrics, committed to effective and compassionate infertility care.",
    experience: [
      "04+ Years of Experience",
      "DGO (Obstetrics and Gynaecology)   ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Vashi",
    role: "Fertility Consultant",
  },
  {
    id:6,
    name:"Dr. Bhageshri",
    image: "/images/doctors/Bhageshri.webp",
    description:
      "Dr. Bhageshri is a Fertility Consultant at Progenesis, Vashi, providing evaluation and treatment for infertility. She is trained in Ovulation Induction, IUI, IVF/ICSI, and offers individualized fertility treatment plans.",
    experience: [
      "08+ Years of Experience",
      "DGO (Obstetrics and Gynaecology)   ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Vashi",
    role: "Fertility Consultant",
  },
  {
    id:7,
    name: "Dr. Teena  Desai",
    image: "/images/doctors/Teena.webp",
    description:
      "Dr. Teena Desai is a Fertility Consultant with expertise in high-risk obstetrics, gynecology, and fertility, and has contributed to research in male subfertility.",
    experience: [
      "10+ Years of Experience",
      "DNB DGO (Obstetrics and Gynaecology)  ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Andheri",
    role: "Fertility Consultant",
  },

    {
      id:8,
    name: "Dr. Priti Pardeshi",
    image: "/images/doctors/Priti.webp",
    description:
      "Dr. Priti Pardeshi is a Fertility Consultant at Progenesis Fertility Center, Kalyan. She specializes in obstetrics, gynecology, and reproductive medicine, providing personalized fertility care.",
    experience: [
      "12+ Years of Experience",
      "DGO (Obstetrics and Gynaecology) ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Kalyan",
    role: "Fertility Consultant",
  },

   {
    id:9,
    name: "Dr. Darshna Wahane",
    image: "/images/doctors/Darshna.webp",
    description:
      "Dr. Darshna Wahane, Fertility Consultant, manages infertility and designs personalized treatments with a compassionate patient approach.",
    experience: [
      "10+ Years of Experience",
      "MBBS.DGO (OBST & GYNAE) ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Panvel",
    role: "Fertility Consultant",
  },

   {
    id:10,
    name: "Dr. Rajashree Patil",
    image: "/images/doctors/Rajashree.webp",
    description:
      "Dr. Rajashree Patil is a Fertility Consultant specializing in gynecology and infertility, known for her attentive and personalized approach to patient care.",
    experience: [
      "12+ Years of Experience",
      "DNB DGO (Obstetrics and Gynaecology) ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Virar",
    role: "Fertility Consultant",
  },

  

  {
    id:11,
    name: "Dr. Dinesh Wade",
    image: "/images/doctors/Dinesh.webp",
    description:
      "Dr. Dinesh Wade is a Senior IVF Consultant specializing in obstetrics, gynecology, and reproductive medicine, dedicated to providing comprehensive fertility care.",
    experience: [
      "14+ Years of Experience",
      "MBBS, MS, DNB (OBST & GYNAE), FNB, MRCOG (UK)",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Pune",
    role: "Fertility Consultant",
  },
  

  
  {
    id:12,
    name: "Dr. Shital Sonone",
    image: "/images/doctors/Shital.webp",
    description:
      "Dr. Shital Sonone is a Senior IVF Consultant in Nashik with expertise in infertility, advanced procedures, and patient education. She is a member of ISAR and holds an MD in Obstetrics and Gynaecology.",
    experience: [
      "09+ Years of Experience",
      "MS (Obstetrics and Gynaecology)",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Nashik",
    role: "Fertility Consultant",
  },

   {
    id:13,
    name: "Dr. Ashwini Talpe",
    image: "/images/doctors/Ashwini.webp",
    description:
      "Dr. Ashwini Talpe is a Fertility Consultant at Progenesis, Nagpur, with an MS in Obstetrics & Gynaecology and a Fellowship in Reproductive Medicine. She specializes in infertility and IVF/ICSI, providing patient-focused care.",
    experience: [
      "04+ Years of Experience",
      "MS (Obstetrics and Gynaecology)",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Nagpur",
    role: "Fertility Consultant",
  },
 
    {
      id:14,
    name: "Dr. Suchitra Somkuwar",
    image: "/images/doctors/Suchitra.webp",
    description:
      "Dr. Suchitra Somkuwar is a Fertility Consultant at Progenesis, Nagpur, specializing in reproductive health and infertility care. She provides Ovulation Induction, IUI, and IVF planning with a supportive, patient-centered approach.",
    experience: [
      "05+ Years of Experience",
      "MS (Obstetrics and Gynaecology)",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Nagpur",
    role: "Fertility Consultant",
  },
 
    {
      id:15,
    name: "Dr. Sangita Ingle",
    image: "/images/doctors/Sangita.webp",
    description:
      "Dr. Sangita Ingle is a Fertility Consultant at Progenesis, Ahilyanagar, with a DNB in Obstetrics & Gynaecology and a Fellowship in Reproductive Medicine. She specializes in infertility care and IVF/ICSI, offering supportive, patient-focused treatment.",
    experience: [
      "05+ Years of Experience",
      "DGO (Obstetrics and Gynaecology)",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Ahilyanagar",
    role: "Fertility Consultant",
  },

  {
    id:16,
    name: "Dr. Tushar Zanjade",
    image: "/images/doctors/Tushar.webp",
    description:
      "Dr. Tushar Zanjade holds an MBBS degree, qualifying him to practice medicine and pursue further specialization. He is trained in clinical diagnosis and patient care, forming a solid foundation for his medical practice.",
    experience: [
      "06+ Years of Experience",
      "DGO (Obstetrics and Gynaecology)   ",
      "Bachelor of Medicine, Bachelor of Surgery",
    ],
    location: "Amravati",
    role: "Fertility Consultant",
  },

  {
    id:17,
    name: "Dr. Apurva Patni",
    image: "/images/doctors/Apurva.webp",
    description:
      "Dr. Apurva Patny, Fertility Consultant at Progenesis Solapur, specialises in IVF, ICSI, and advanced fertility care.",
    experience: [
      "04+ Years of Experience",
      "DGO (Obstetrics and Gynaecology)   ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Solapur",
    role: "Fertility Consultant",
  },
  
 
  {
    id:18,
    name: "Dr. Vivek  Bagul",
    image: "/images/doctors/Vivek.webp",
    description:
      "Dr. Vivek Bagul serves as a Fertility Consultant, experienced in high-risk obstetric and gynecology procedures, and passionate about supporting patients’ fertility journeys.",
    experience: [
      "04+ Years of Experience",
      "DGO (Obstetrics and Gynaecology)   ",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Jalgaon",
    role: "Fertility Consultant",
  },
];


const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const prevDoctor = () =>
    setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  const nextDoctor = () =>
    setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));

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
            Meet the Experts <br /> Behind the Magic
          </h2>
          <button onClick={() => window.location.href = "/doctors"} className="px-6 cursor-pointer md:px-10 lg:px-12 py-2.5 md:py-3 rounded-lg md:rounded-2xl text-xs md:text-sm font-medium border border-[#1656a5] text-[#1656a5] hover:bg-[#1656a5] hover:text-white transition-all duration-300">
            View all Doctors
          </button>
        </div>

        {/* Right Side - Description */}
        <div className="w-full lg:w-1/2 flex items-center">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl leading-relaxed md:leading-relaxed lg:leading-10 tracking-tight font-normal">
          Our team of internationally trained fertility specialists, embryologists, and counselors provide medical expertise and emotional support throughout your journey — ensuring you feel cared for and confident every step of the way.          </p>
        </div>
      </div>

      {/* Doctor Card Carousel */}
      <div className="relative max-w-7xl mx-auto">
        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-hidden">
          {/* Counter - Mobile */}
          

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
              <div
                key={idx}
                className="flex-shrink-0 w-[85%] snap-center"
              >
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
                    {/* Name and Description */}
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
                      {doc.experience.map((exp, expIdx) => (
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
          <div className=" bg-[#FFFFFF] rounded-2xl">
            {/* Counter */}
            <div className="relative ">
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
                    <h3 className="text-[#1656A5] text-[32px] mb-[8px] lg:text-[40px] md:text-[40px] lg:text-3xl font-normal leading-tight line-clamp-2">
                      {doctor.name}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4">
                      {doctor.description}
                    </p>
                  </div>

                  {/* Experience Tags */}
                  <div className="flex flex-col gap-2.5 md:gap-3">
                    {doctor.experience.map((exp, idx) => (
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
                    <h4 className="text-[#2C2C2C] text-[32px]  mb-2 md:text-3xl lg:text-4xl font-normal leading-tight line-clamp-1">
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

export default DoctorsSection;