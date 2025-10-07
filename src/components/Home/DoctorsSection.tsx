// DoctorsSection.jsx
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link"

const doctors = [
  {
    name: "Dr. Narhari S. Malgaonkar",
    image: "/DoctorsSection/doctorimage.png",
    description:
      "Dr. Narhari S. Malgaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: [
      "15+ Years of Experience",
      "MD, DNB, DGO, FCPS, DFP (Mumbai)",
      "Fellowship in Reproductive Medicine (Singapore)",
    ],
    location: "Mumbai",
    role: "Chief Fertility Consultant",
  },
  {
    name: "Dr. Sonali Malagaonkar",
    image: "/DoctorsSection/DrSonali.png",
    description:
      "Dr. Sonali Malgaonkar is a Senior Fertility Consultant in Thane, with a focus on infertility management and reproductive medicine. She is active in professional societies.",
    experience: [
      "14+ Years of Experience",
      "M.S. (Obstetrics and Gynaecology) (Mumbai)",
      "Fellowship in Reproductive Medicine",
    ],
    location: "Mumbai",
    role: "Sr. Fertility Consultant",
  },
  {
    name: "Dr. Dinesh Wade",
    image: "/DoctorsSection/DrDinesh.png",
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
    name: "Dr. Unnati Mamtora",
    image: "/DoctorsSection/DrUnnati.png",
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
    name: "Dr. Shital Sonone",
    image: "/DoctorsSection/DrShital.png",
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
    name: "Dr. Rajashree Patil",
    image: "/DoctorsSection/DrRajashree.png",
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
    name: "Dr. Darshna Wahane",
    image: "/DoctorsSection/DrDarshna.png",
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
    name: "Dr. Priti Pardeshi",
    image: "/DoctorsSection/DrPriti.png",
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
    name: "Dr. Teena  Desai",
    image: "/DoctorsSection/DrTeena.png",
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
    name: "Dr. Bhavika Sane",
    image: "/DoctorsSection/DrBhavika.png",
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
    name: "Dr. Prerna Khandelwal",
    image: "/DoctorsSection/DrPrerna.png",
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
    name: "Dr. Shraddha Pol",
    image: "/DoctorsSection/DrShraddha.png",
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
    name: "Dr. Vivek  Bagul",
    image: "/DoctorsSection/DrVivek.png",
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


const DoctorsSection = () => {

  const ref = useRef(null);

  // Track scroll relative to this block
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate vertical background position
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 100%", "0% 0%"] // from bottom → top
  );

  const text =
    "Our team of internationally trained fertility specialists, embryologists, and counselors are here to support you medically and emotionally. Our team of internationally trained fertility specialists, embryologists.";


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevDoctor = () => {
    setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  const nextDoctor = () => {
    setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const doctor = doctors[currentIndex];

  return (
    <section className="py-20 bg-[#F9FAFB] px-6 lg:px-[50px]  xl:px-[80px] 2xl:px-[120px]">

      {/* Heading */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8  mb-[144px] md:mb-[144px]" ref={ref}>
        {/* Left */}
        <div className="w-full max-w-full sm:max-w-xl md:max-w-xl   lg:max-w-lg xl:max-w-3xl">
          <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
            The Experts
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
            Meet the Experts <br /> Behind the Magic
          </h2>
          <Link href="/doctors">
            <button className="px-[12px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium  border border-blue-600 text-blue-600  hover:bg-blue-600 hover:text-white transition cursor-pointer ">

              View all Doctors

            </button>
          </Link>
        </div>

        {/* Right */}
        <div className="flex-1">
          {text.split("").map((char, i) => (
            <Letter
              key={i}
              char={char}
              index={i}
              total={text.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
      {/* Doctor Card */}
      <div className="relative flex items-center  ">
        {/* Left Arrow */}
        <button
          onClick={prevDoctor}
          className="absolute l-14  w-[48px] h-12  hidden md:flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          ←
        </button>

        {/* Card */}
        {/* <div className="bg-white rounded-2xl shadow-md flex overflow-hidden border border-gray-200 mx-auto"> */}
        <div
          className="
            bg-white rounded-2xl flex flex-col md:flex-row 
            overflow-hidden shadow-sm border border-gray-200
            w-full lg:max-w-[1000px] 2xl:max-w-[1400px] mx-auto 
            px-4 sm:px-6 md:px-10 2xl:px-20 
            py-6 md:py-10 
            relative transition-all duration-300
          "
        >
          {/* Top Right Counter */}
          <p
            className="
              absolute -top-5 right-5 text-[#606060] font-[Manrope]
              text-sm sm:text-base font-semibold tracking-[-0.32px]
            "
          >
            {String(currentIndex + 1).padStart(2, "0")} of{" "}
            {String(doctors.length).padStart(2, "0")}
          </p>

          {/* Left Image Section */}
          <div
            className="
              flex justify-center items-center flex-shrink-0 
          
              rounded-xl overflow-hidden bg-[#27C3EB]
            "
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-full w-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Middle Section */}
          <div
            className="
              flex flex-col justify-between 
              flex-1 
              px-3 sm:px-6 md:px-10 mt-4 md:mt-0
            "
          >
            {/* Heading */}
            <h3
              className="
                text-[#1656A5] font-[Manrope] 
                text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 
                leading-tight md:leading-[1.2] tracking-tight
              "
            >
              {doctor.name}
            </h3>

            {/* Description */}
            <p
              className="
                  mt-4 text-[#606060] font-[Manrope] 
                  text-sm sm:text-base leading-relaxed tracking-tight
                "
            >
              {doctor.description}
            </p>

            {/* Experience Badges */}
            <div
              className="
                  mt-6 md:mt-10 flex flex-wrap gap-3
                "
            >
              {doctor.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="
                      px-4 py-2 rounded-xl bg-[rgba(22,86,165,0.05)]
                      text-[#1656A5] font-[Manrope] text-sm 
                      backdrop-blur-[25px]
                    "
                >
                  {exp}
                </div>
              ))}
            </div>
          </div>

          {/* Divider (Dynamic Height) */}
          <div
            className="
              hidden md:block 
              w-[1px] h-auto my-4 md:my-0 mx-6 
              bg-black/25 self-stretch
            "
          ></div>

          {/* Right Section */}
          <div
            className="
                flex flex-col justify-end 
                px-3 sm:px-6 md:px-10 mt-6 md:mt-0
              "
          >
            <h4
              className="
                text-[#2C2C2C] font-[Manrope] 
                text-3xl sm:text-4xl md:text-5xl font-normal leading-tight
              "
            >
              {doctor.location}
            </h4>
            <p
              className="
              text-[#2C2C2C] font-[Manrope] 
              text-sm sm:text-base md:text-lg
            "
            >
              {doctor.role}
            </p>
          </div>
        </div>


        {/* Right Arrow */}
        <button
          onClick={nextDoctor}
          className="hidden md:flex absolute right-0 w-12 h-12 items-center justify-center rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          →
        </button>

      </div>

    </section>
  );
};

export default DoctorsSection;
