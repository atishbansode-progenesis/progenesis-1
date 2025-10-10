"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, X, ChevronDown, Menu } from "lucide-react";
import { centersData } from "@/page-components/centers/CenterCard";



/* -------------------- SEARCH SECTION (Original Desktop Version) -------------------- */
export function SearchSection({ onClose }: { onClose: () => void }) {
  const [activeStep, setActiveStep] = React.useState<"what" | "where" | "who" | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const buttonRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>({
    what: null,
    where: null,
    who: null,
  });
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [popupPosition, setPopupPosition] = React.useState<{ left: number; top: number } | null>(null);

  const [inputs, setInputs] = React.useState({
    what: "",
    where: "",
    who: "",
  });

  const treatments = [
    "IVF Treatment",
    "IUI Procedure",
    "PCOS",
    "Irregular Periods",
    "Repeated Miscarriages",
    "Infertility Issues",
    "Pregnancy after Menopause",
    "Ovulation Induction",
    "Low AMH",
    "Fibroids",
    "Endometriosis",
  ];

  const locations = [
    { name: "Mumbai", desc: "(Aundh – ITI Rd)", icon: "/LocationsSection/mumbai.png" },
    { name: "Thane", desc: "(College Rd)", icon: "/LocationsSection/thane.png" },
    { name: "Pune", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/pune.png" },
    { name: "Nashik", desc: "(College Rd)", icon: "/LocationsSection/nasik.png" },
    { name: "Jalgaon", desc: "(College Rd)", icon: "/LocationsSection/jalgaon.png" },
    { name: "Navi Mumbai", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/navimumbai.png" },
    { name: "Palghar", desc: "(Aundh – ITI Rd)", icon: "/LocationsSection/palghar.png" },
    { name: "Solapur", desc: "(College Rd)", icon: "/LocationsSection/solapur.png" },
    { name: "Nagpur", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/nagpur.png" },
    { name: "Kolhapur", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/kholapur.png" },
    { name: "Amravati", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/amravati.png" },
    { name: "Ahilyanagar", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/ahilyanagar.png" },
  ];

  const doctors = [
    { name: "Dr. Dinesh Wade", role: "Fertility Consultant, Pune", img: "/DoctorsSection/DrDinesh.png" },
    { name: "Dr. Unnati Mamtora", role: "Fertility Consultant, Borivali", img: "/DoctorsSection/DrUnnati.png" },
    { name: "Dr. Darshna Wahane", role: "Fertility Consultant, Panvel", img: "/DoctorsSection/DrDarshna.png" },
    { name: "Dr. Priti Pardeshi", role: "Fertility Consultant, Kalyan", img: "/DoctorsSection/DrPriti.png" },
  ];

  const updatePopupPosition = (step: "what" | "where" | "who") => {
    const el = buttonRefs.current[step];
    if (el) {
      const rect = el.getBoundingClientRect();
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);

      setPopupPosition({
        left: isMobileView ? window.innerWidth / 2 : rect.left + rect.width / 2,
        top: rect.bottom + window.scrollY + 10,
      });
    }
  };

  const handleInputFocus = (step: "what" | "where" | "who") => {
    setActiveStep(step);
    updatePopupPosition(step);
  };

  // Click outside closes dropdown
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveStep(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  React.useLayoutEffect(() => {
    if (activeStep) updatePopupPosition(activeStep);
  }, [activeStep]);

  React.useEffect(() => {
    const handleResizeOrScroll = () => {
      if (activeStep) updatePopupPosition(activeStep);
    };
    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll);
    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll);
    };
  }, [activeStep]);

  const filteredTreatments = treatments.filter((t) =>
    t.toLowerCase().includes(inputs.what.toLowerCase())
  );
  const filteredLocations = locations.filter((l) =>
    l.name.toLowerCase().includes(inputs.where.toLowerCase())
  );
  const filteredDoctors = doctors.filter((d) =>
    d.name.toLowerCase().includes(inputs.who.toLowerCase())
  );

  return (
    <section className="relative w-full bg-white" ref={containerRef}>
      <div className="flex flex-col md:flex-row items-start md:items-center w-full max-w-[1600px] mx-auto py-4 px-6 lg:px-[50px] xl:px-[80px] 2xl:px-[120px] gap-4 relative">
        {/* Logo */}
        <Link href="/" className="w-[150px] h-[40px] relative md:mt-0 mt-2">
          <Image src="/logo1.png" alt="Logo" fill className="object-contain" />
        </Link>

        {/* WHAT */}
        <div
          ref={(el) => { buttonRefs.current.what = el; }}
          className={`relative flex items-center flex-1 rounded-2xl px-5 py-3 transition-all duration-200 
            ${activeStep === "what" ? "bg-[#EAF1F8] shadow-sm" : "bg-white"}`}
        >
          <span className="text-[#000000] font-medium text-[16px] mr-3 whitespace-nowrap">
            What
          </span>

          <input
            type="text"
            placeholder="Search Treatments or Concerns..."
            value={inputs.what}
            onChange={(e) => setInputs({ ...inputs, what: e.target.value })}
            onFocus={() => handleInputFocus("what")}
            className="w-[200px] bg-transparent border-none outline-none px-2 placeholder-[#9CA3AF] text-[16px] text-[#4B5563] focus:ring-0 focus:outline-none"
          />

          <Search
            className="absolute right-4 text-gray-400 pointer-events-none"
            size={18}
          />
        </div>

        {/* WHERE */}
        <div
          ref={(el) => { buttonRefs.current.where = el; }}
          className={`relative flex items-center flex-1 rounded-2xl px-5 py-3 transition-all duration-200 
            ${activeStep === "where" ? "bg-[#EAF1F8] shadow-sm" : "bg-white"}`}
        >
          <span className="text-[#000000] font-medium text-[16px] mr-3 whitespace-nowrap">
            Where
          </span>

          <input
            type="text"
            placeholder="Select City"
            value={inputs.where}
            onChange={(e) => setInputs({ ...inputs, where: e.target.value })}
            onFocus={() => handleInputFocus("where")}
            className="w-full bg-transparent border-none outline-none placeholder-[#9CA3AF] text-[16px] text-[#4B5563] focus:ring-0 focus:outline-none"
          />

          <ChevronDown
            className="absolute right-4 text-gray-400 pointer-events-none"
            size={18}
          />
        </div>

        {/* WHO */}
        <div
          ref={(el) => { buttonRefs.current.who = el; }}
          className={`relative flex items-center flex-1 rounded-2xl px-5 py-3 transition-all duration-200 
            ${activeStep === "who" ? "bg-[#EAF1F8] shadow-sm" : "bg-white"}`}
        >
          <span className="text-[#000000] font-medium text-[16px] mr-3 whitespace-nowrap">
            Who
          </span>

          <input
            type="text"
            placeholder="Choose Doctor / Specialist"
            value={inputs.who}
            onChange={(e) => setInputs({ ...inputs, who: e.target.value })}
            onFocus={() => handleInputFocus("who")}
            className="w-full bg-transparent border-none outline-none placeholder-[#9CA3AF] text-[16px] text-[#4B5563] focus:ring-0 focus:outline-none"
          />

          <ChevronDown
            className="absolute right-4 text-gray-400 pointer-events-none"
            size={18}
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="h-[44px] w-[44px] rounded-xl bg-[#1656A5] flex items-center justify-center self-end md:self-center"
        >
          <X size={20} color="#fff" />
        </button>
      </div>

      {/* Dropdowns */}
      {activeStep && popupPosition && (
        <div
          className="absolute z-50 bg-white rounded-2xl shadow-xl p-4 w-[90%] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] max-h-[400px] overflow-y-auto transition-all duration-200 animate-fadeIn"
          style={{
            left: popupPosition.left,
            top: popupPosition.top,
            transform: "translateX(-50%)",
          }}
        >
          {activeStep === "what" && (
            <div className="flex flex-wrap gap-3">
              {filteredTreatments.map((t, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInputs({ ...inputs, what: t });
                    setActiveStep(null);
                  }}
                  className="inline-flex px-3 py-2 rounded-[16px] border border-[#1656A5] text-[#1656A5] text-[14px] font-medium leading-[24px] tracking-[-0.28px] font-[Manrope] backdrop-blur-[7.5px] transition-all duration-200 hover:bg-[#1656A5] hover:text-white"
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {activeStep === "where" && (
            <div className="space-y-3">
              {filteredLocations.map((l, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setInputs({ ...inputs, where: l.name });
                    setActiveStep(null);
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="w-[70px] h-[70px] flex-shrink-0 rounded-[16px] bg-[lightgray] overflow-hidden">
                    <Image
                      src={l.icon}
                      alt={l.name}
                      width={70}
                      height={70}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{l.name}</p>
                    <p className="text-sm text-gray-600">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeStep === "who" && (
            <div className="space-y-3">
              {filteredDoctors.map((d, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setInputs({ ...inputs, who: d.name });
                    setActiveStep(null);
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <Image src={d.img} alt={d.name} width={48} height={48} className="rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-gray-900">{d.name}</p>
                    <p className="text-sm text-gray-600">{d.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}



/* -------------------- DROPDOWN DATA -------------------- */
const megaMenuData: Record<string, any> = {
  "About Us": {
    image: "/Navbar/about.png",
    columns: [
      {
        title: "Discover Us",
        links: [
          // { label: "Why Progenesis", path: "/about-us#why-1" },
          { label: "Our Approach", path: "/about-us#our-approach" },
          { label: "Our Vision & Mission", path: "/about-us#our-vision" },
          { label: "Why choose us", path: "/about-us#why-choose-us" },
          { label: "Leadership Team", path: "/leadership-team" },
          { label: "Impact & Growth", path: "/about-us#impact-growth" },
          { label: "FAQs", path: "/about-us#faqs" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Book Appointment", path: "/appointment", isButton: true },
          { label: "+91 94239 71260", path: "tel:+919423971260", isPhone: true },
          { label: "+91 70309 44041", path: "tel:+917030944041", isWhatsapp: true },
          // { label: "Take a Quiz", path: "/quiz", isarrow: true },
          // { label: "Online Consult", path: "/online-consult", isarrow: true },
          // { label: "EMI Options", path: "/emi-options", isarrow: true },
        ],
      },
      {
        links: [
          // { label: "Fellowship", path: "/fellowship", isarrow: true },
          { label: "Our Centers", path: "/centers", isarrow: true },
          { label: "Second Opinion", path: "/centers", isarrow: true },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          { label: "International Patients", path: "/international-patients", isarrow: true },
          { label: "Online Consultation", path: "/online-consultion", isarrow: true },

        ],
      },
    ],
  },
  "Infertility Issues": {
    image: "/Navbar/infertility-image.png",
    columns: [
      {
        title: "Know Infertility",
        links: [
          {
            label: "What is Infertility", path: "/infertility-issues#what",
            submenu: [
              { label: "Overview", path: "/infertility-issues/overview" },
              { label: "Symptoms", path: "/infertility-issues/symptoms" },
              { label: "Diagnosis", path: "/infertility-issues/diagnosis" },
              { label: "Treatment Options", path: "/infertility-issues/treatments" },
            ],
          },
          {
            label: "Female Infertility Causes", path: "/infertility-issues#female",
            submenu: [
              { label: "Repeated IUI Failures", path: "/infertility-issues/overview" },
              { label: "Repeated IVF Failures", path: "/infertility-issues/symptoms" },
              { label: "Pregnancy after Menopause", path: "/infertility-issues/diagnosis" },
              { label: "Low AMH", path: "/infertility-issues/treatments" },
              { label: "PCOS", path: "/infertility-issues/treatments" },
              { label: "Tubal Blockage", path: "/infertility-issues/treatments" },
              { label: "Fibroids", path: "/infertility-issues/treatments" },
              { label: "Endometriosis", path: "/infertility-issues/treatments" },
            ],
          },
          {
            label: "Male Infertility Causes", path: "/infertility-issues#male",
            submenu: [
              { label: "Azoospermia", path: "/infertility-issues/overview" },
              { label: "Low Sperm Count", path: "/infertility-issues/symptoms" },
              { label: "Erectile Dysfunction (ED)", path: "/infertility-issues/diagnosis" },
            ],
          },
          { label: "Real Stories. Real Miracles.", path: "/stories" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Book Appointment", path: "/appointment", isButton: true },
          { label: "+91 94239 71260", path: "tel:+919423971260", isPhone: true },
          { label: "+91 70309 44041", path: "tel:+917030944041", isWhatsapp: true },
          // { label: "Take a Quiz", path: "/quiz", isarrow: true },
          // { label: "Online Consult", path: "/online-consult", isarrow: true },
          // { label: "EMI Options", path: "/emi-options", isarrow: true },
        ],
      },
      {
        links: [
          { label: "Our Centers", path: "/centers", isarrow: true },
          { label: "Second Opinion", path: "/second-opinion", isarrow: true },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          { label: "International Patients", path: "/international-patients", isarrow: true },
          { label: "Online Consultation", path: "/online-consultion", isarrow: true },
        ],
      },
    ],
  },
  "Our Centers": {
    image: "/Navbar/center.png",
    columns: [
      {
        title: "Where We Are",
        links: [
          {
            label: "Mumbai", path: "/centers/mumbai",
            submenu: [
              { label: "Thane", path: "/centers/thane" },
              { label: "Andheri", path: "/centers/andheri" },
              { label: "Borivali", path: "/centers/borivali" },
              { label: "Ghatkopar", path: "/centers/ghatkopar" },
              { label: "Vashi", path: "/centers/vashi" },
              { label: "Virar", path: "/centers/virar" },
              { label: "Kalyan", path: "/centers/kalyan" },
              { label: "Panvel", path: "/centers/panvel" },
            ],
          },
          { label: "Nashik", path: "/centers/nashik" },
          { label: "Jalgaon", path: "/centers/jalgaon" },
          // { label: "Ahilyanagar", path: "/centers/ahilyanagar" },
          // { label: "Amravati", path: "/centers/amravati" },
          // { label: "Kolhapur", path: "/centers/kolhapur" },
          // { label: "Nagpur", path: "/centers/nagpur" },
          // { label: "Solapur", path: "/centers/solapur" },
          // { label: "Pune", path: "/centers/pune" },
        ],
      },
      {
        // title: "Quick Links",
        links: [
          // { label: "Book Appointment", path: "/appointment", isButton: true },
          // { label: "+91 94239 71260", path: "tel:+919423971260", isPhone: true },
          // { label: "+91 70309 44041", path: "tel:+917030944041", isWhatsapp: true },
          { label: "Ahilyanagar", path: "/centers/ahilyanagar" },
          { label: "Amravati", path: "/centers/amravati" },
          { label: "Kolhapur", path: "/centers/kolhapur" },
          { label: "Nagpur", path: "/centers/nagpur" },
          { label: "Solapur", path: "/centers/solapur" },
          { label: "Pune", path: "/centers/pune" },
          // { label: "Take a Quiz", path: "/quiz", isarrow: true },
          // { label: "Online Consult", path: "/online-consult", isarrow: true },
          // { label: "EMI Options", path: "/emi-options", isarrow: true },
          // { label: "Fellowship", path: "/fellowship",isarrow: true },
          // { label: "Our Centers", path: "/centers",isarrow: true },
          // { label: "Our Social Impact", path: "/social-impact" ,isarrow: true},
        ],
      },
      {
        links: [
          { label: "Our Centers", path: "/centers", isarrow: true },
          { label: "Second Opinion", path: "/centers", isarrow: true },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          { label: "International Patients", path: "/international-patients", isarrow: true },
          { label: "Online Consultation", path: "/online-consultion", isarrow: true },
        ],
      },
    ],
  },
  "Treatments": {
    image: "/Navbar/infertility-image.png",
    columns: [
      {
        title: "Fertility Solutions",
        links: [
          { label: "Your Path to Parenthood", path: "/treatments#ivf" },
          {
            label: "Advanced Infertility Treatments", path: "/treatments#iui",
            submenu: [
              { label: "IMSI – High-Resolution Sperm Selection", path: "/infertility-issues/overview" },
              { label: "PICSI – Physiological ICSI", path: "/infertility-issues/symptoms" },
              { label: "LAH – Laser Assisted Hatching", path: "/infertility-issues/diagnosis" },
              { label: "Blastocyst Transfer – Stronger Embryo Transfer", path: "/infertility-issues/treatments" },
              { label: "Sequential Embryo Transfer – Two-Stage Transfer", path: "/infertility-issues/symptoms" },
              { label: "PGD/PGS/PGT-A – Genetic Screening", path: "/infertility-issues/symptoms" },

            ],
          },
          {
            label: "Advanced Facilities for Trusted Care", path: "/treatments#icsi",
            submenu: [
              { label: "Class-1000 Modular Lab", path: "/infertility-issues/overview" },
              { label: "Trigas Incubators", path: "/infertility-issues/symptoms" },
              { label: "Witness System", path: "/infertility-issues/diagnosis" },
              { label: "Cryopreservation", path: "/infertility-issues/treatments" },

            ],
          },

        ],
      },
      {
        links: [

          {
            label: "Infertility Treatments", path: "/treatments#icsi",
            submenu: [
              { label: "Ovulation Induction", path: "/infertility-issues/overview" },
              { label: "IUI", path: "/infertility-issues/symptoms" },
              { label: "IVF", path: "/infertility-issues/diagnosis" },
              { label: "IVF-ICSI ", path: "/infertility-issues/treatments" },
              { label: "Frozen Embryo Transfer", path: "/infertility-issues/diagnosis" },
              { label: "Fertility Surgery  ", path: "/infertility-issues/treatments" },

            ],
          },
          {
            label: "Fertility Preservation", path: "/treatments#icsi",
            submenu: [
              { label: "Female Fertility Preservation", path: "/infertility-issues/overview" },
              { label: "Male Fertility Preservation", path: "/infertility-issues/symptoms" },
              { label: "Embryo Preservation", path: "/infertility-issues/diagnosis" },

            ],

          },
          {
            label: "Fertility Evaluation", path: "/treatments#icsi",
            submenu: [
              { label: "Female Analysis-Complete Reproductive Health Check", path: "/infertility-issues/overview" },
              { label: "Male Analysis – Advanced Sperm Testing", path: "/infertility-issues/symptoms" },

            ],

          },

        ],
      },
      // {
      //   title: "Preservation",
      //   links: [
      //     { label: "Online Consult", path: "/treatments#female-preservation" ,isarrow: true},
      //     { label: "EMI Options", path: "/treatments#male-preservation",isarrow: true },
      //     { label: "Fellowship", path: "/treatments#male-preservation",isarrow: true },
      //     { label: "Our Centers", path: "/treatments#male-preservation" ,isarrow: true},
      //     { label: "Our Social Impact", path: "/treatments#male-preservation",isarrow: true },
      //   ],
      // },
      {
        links: [
          { label: "Our Centers", path: "/centers", isarrow: true },
          { label: "Second Opinion", path: "/centers", isarrow: true },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          { label: "International Patients", path: "/international-patients", isarrow: true },
          { label: "Online Consultation", path: "/online-consultion", isarrow: true },
        ],
      },
    ],
  },
};

/* -------------------- MEGA MENU -------------------- */
const MegaMenu = ({ menu }: { menu: any }) => {
  const [expandedLink, setExpandedLink] = useState<string | null>(null);
  if (!menu) return null;

  return (
    <div className="fixed left-1/2 top-[100px] -translate-x-1/2 
                    bg-white shadow-lg rounded-2xl z-50 
                    w-[90vw] max-w-[1646px] flex gap-8 p-6">

      {/* Left Image */}
      {menu.image && (
        <div className="hidden lg:block w-[350px] max-h-[450px] flex-shrink-0">
          <Image
            src={menu.image}
            alt="menu-img"
            width={350}
            height={350}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}

      <div
        className="w-[1px]"
        style={{
          background: "rgba(22, 86, 165, 0.05)",
          height: "auto",
        }}
      />

      {/* Dynamic Columns with Divider */}
      <div className="flex flex-1">
        {menu.columns.map((col: any, idx: number) => (
          <React.Fragment key={idx}>
            {/* Column */}
            <div className="flex-1">
              {col.title && (
                <h3
                  className="text-[28px] font-normal leading-normal tracking-[-0.56px] text-[#2C2C2C] font-[Manrope] mb-[15px]"
                >
                  {col.title}
                </h3>

              )}
              <ul className="space-y-2 w-[240px] text-left">
                {col.links.map((link: any, i: number) => (
                  <li key={i} className="
    mb-4 

  ">

                    {link.isButton ? (
                      // ✅ BOOK APPOINTMENT BUTTON
                      <Link
                        href={link.path}
                        className="
            flex items-center justify-center gap-2
            w-full px-4 py-[10px] rounded-[8px]
            bg-[#1656A5] text-white font-[Manrope] text-[14px] font-semibold leading-[24px] tracking-[-0.28px]
            hover:bg-[#12498C] transition
          "
                      >
                        {link.label}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='12'
                          height='12'
                          viewBox='0 0 12 12'
                          fill='none'
                          className="shrink-0"
                        >
                          <path
                            d='M1.37624 5.5498L10.0103 5.6986M10.0103 5.6986L5.56228 1.36376M10.0103 5.6986L5.76761 9.94124'
                            stroke='white'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </Link>
                    ) : link.isPhone ? (
                      // ✅ PHONE LINK
                      <a
                        href={link.path}
                        className="
            flex items-center gap-3 w-full
            bg-[rgba(22,86,165,0.10)] rounded-[8px]
            px-4 py-[10px]
            text-[#252525] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
            hover:bg-[rgba(22,86,165,0.15)] transition
          "
                      >
                        <span className="flex items-center justify-center w-[24px] h-[24px] shrink-0">
                          {/* YOUR ORIGINAL PHONE SVG */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 27 26"
                            fill="none"
                          >
                            <mask
                              id={`mask_${i}`}
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="27"
                              height="26"
                            >
                              <rect x="0.5" width="26" height="26" fill="#D9D9D9" />
                            </mask>
                            <g mask={`url(#mask_${i})`}>
                              <path
                                d="M20.675 21.3417C18.9778 21.3417 17.2128 20.8948 15.3802 20.001C13.5476 19.1073 11.8323 17.8569 10.2344 16.25C8.63646 14.643 7.39062 12.9278 6.49687 11.1042C5.60313 9.28055 5.15625 7.52013 5.15625 5.82291C5.15625 5.49014 5.26458 5.2129 5.48125 4.99118C5.69792 4.76928 5.96875 4.65833 6.29375 4.65833H8.46042C8.76736 4.65833 9.03368 4.75312 9.25937 4.9427C9.48507 5.13228 9.64305 5.38055 9.73333 5.68749L10.2208 7.90832C10.275 8.21527 10.266 8.4861 10.1937 8.72082C10.1215 8.95555 9.99514 9.14513 9.81458 9.28958L7.5125 11.375C7.98194 12.2236 8.49201 13.0045 9.04271 13.7177C9.5934 14.4309 10.1757 15.1035 10.7896 15.7354C11.4396 16.3854 12.1437 16.9903 12.9021 17.55C13.6604 18.1097 14.5 18.6424 15.4208 19.1479L17.6687 16.8458C17.8493 16.6472 18.0434 16.5208 18.251 16.4667C18.4587 16.4125 18.6979 16.4035 18.9687 16.4396L20.8104 16.8187C21.1174 16.891 21.3656 17.0444 21.5552 17.2792C21.7448 17.5139 21.8396 17.7847 21.8396 18.0917V20.2042C21.8396 20.5292 21.7286 20.8 21.5067 21.0167C21.285 21.2333 21.0078 21.3417 20.675 21.3417Z"
                                fill="#1C1B1F"
                              />
                            </g>
                          </svg>
                        </span>
                        {link.label}
                      </a>
                    ) : link.isWhatsapp ? (
                      // ✅ WHATSAPP LINK (your same custom SVG)
                      <a
                        href={link.path}
                        className="
                            flex items-center gap-3 w-full
                            bg-[rgba(22,86,165,0.10)] rounded-[8px]
                            px-4 py-[10px]
                            text-[#252525] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
                            hover:bg-[rgba(22,86,165,0.15)] transition
                          "
                      >
                        <span className="flex items-center justify-center w-[24px] h-[24px] shrink-0">
                          {/* YOUR EXISTING WHATSAPP SVG */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 27 26"
                            fill="none"
                          >
                            <mask
                              id={`mask_${i}`}
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="27"
                              height="26"
                            >
                              <rect x="0.5" width="26" height="26" fill="#D9D9D9" />
                            </mask>
                            <g mask={`url(#mask_${i})`}>
                              <path
                                d="M21.5497 9.57082C21.0872 8.54894 20.4234 7.63148 19.5805 6.84082C18.7376 6.05763 17.7605 5.43853 16.6715 5.00591C15.5452 4.55837 14.3517 4.33459 13.121 4.33459C11.8902 4.33459 10.6968 4.55837 9.57048 5.00591C8.48146 5.43853 7.50433 6.05017 6.66146 6.84082C5.81859 7.63148 5.15475 8.54894 4.69229 9.57082C4.21491 10.63 3.96875 11.7638 3.96875 12.9274C3.96875 14.9637 4.72956 16.918 6.1244 18.4694L5.3785 22.5346L9.34671 20.7668C10.5327 21.274 11.7933 21.5276 13.1135 21.5276C14.3442 21.5276 15.5377 21.3039 16.664 20.8563C17.753 20.4237 18.7302 19.8121 19.573 19.0214C20.4159 18.2307 21.0797 17.3133 21.5422 16.2914C22.0196 15.2322 22.2657 14.0984 22.2657 12.9348C22.2732 11.7638 22.027 10.6375 21.5497 9.57082Z"
                                stroke="black"
                                strokeWidth="0.7"
                              />
                              <path
                                d="M16.8348 14.6452C16.4469 14.4513 16.1635 14.3319 15.9621 14.2574C15.8353 14.2126 15.5369 14.0783 15.4325 14.1604C15.1043 14.4289 14.7537 15.1897 14.3808 15.3315C13.4558 15.1524 12.5981 14.5184 11.9268 13.8695C11.6284 13.586 11.0764 12.7805 10.9571 12.5642C10.9347 12.3404 11.3375 12.042 11.427 11.8705C11.8894 11.3483 11.5389 11.0201 11.4792 10.8038C11.3748 10.5801 11.1958 10.1773 11.0391 9.84908C10.9049 9.63277 10.875 9.31203 10.6363 9.19268C9.6219 8.67055 9.04012 9.71482 8.80143 10.2593C7.36184 13.7278 16.0143 20.329 17.7746 15.779C17.8641 15.3837 17.8268 15.2345 17.6926 15.0555C17.424 14.869 17.1108 14.7869 16.8348 14.6452Z"
                                stroke="black"
                                strokeWidth="0.7"
                              />
                            </g>
                          </svg>
                        </span>
                        {link.label}
                      </a>
                    ) : link.isarrow ? (
                      // ✅ ARROW LINKS (same SVG)
                      <Link
                        href={link.path}
                        className="
            flex items-center justify-between w-full
            text-[#2C2C2C] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
            hover:text-[#1656A5]

                rounded-[8px]
    transition-all duration-200
    hover:bg-[rgba(22,86,165,0.10)]
    hover:px-4 hover:py-[10px]
          "
                      >
                        <span>{link.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="shrink-0 mr-[20px]"
                        >
                          <path
                            d="M7.37624 11.5498L16.0103 11.6986M16.0103 11.6986L11.5623 7.36376M16.0103 11.6986L11.7676 15.9412"
                            stroke="#252525"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <div
                        className="relative"
                        onMouseEnter={() => setExpandedLink(link.label)}
                        onMouseLeave={() => setExpandedLink(null)}
                        className="transition-all duration-150"
                      >
                        <Link
                          href={link.path}
                          className="block text-[#2C2C2C] font-[Manrope] text-[14px] leading-[24px] tracking-[-0.28px] 
     hover:text-[#1656A5] w-full flex items-center gap-2 rounded-[8px] 
     transition-all duration-200 hover:bg-[rgba(22,86,165,0.10)] hover:px-4 hover:py-[10px]"
                        >
                          {link.label}
                        </Link>




                        {/* ✅ Submenu opens below on hover, no overlap */}
                        {link.submenu && expandedLink === link.label && (
                          <ul className="pl-4 mt-2 space-y-1 transition-all duration-200 ease-in-out">
                            {link.submenu.map((sublink: any, subIdx: number) => (
                              <li key={subIdx}>
                                <Link
                                  href={sublink.path}
                                  className="block text-[#555] font-[Manrope] text-[14px] leading-[22px]
                     hover:text-[#1656A5] transition-all duration-150"
                                >
                                  {sublink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}





                      </div>

                    )}
                  </li>
                ))}
              </ul>






            </div>

            {/* Divider (not after last column) */}
            {idx < menu.columns.length - 1 && (
              <div
                className="w-[1px] mx-6"
                style={{
                  background: "rgba(22, 86, 165, 0.05)",
                  height: "auto",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

/* -------------------- MOBILE SEARCH OVERLAY (Figma style) -------------------- */
function MobileSearchOverlay({ onClose }: { onClose: () => void }) {
  const [activeStep, setActiveStep] = React.useState<"what" | "where" | "who" | null>("what");
  const [inputs, setInputs] = React.useState({ what: "", where: "", who: "" });


  const treatments = [
    "IVF Treatment",
    "IUI Procedure",
    "PCOS",
    "Irregular Periods",
    "Repeated Miscarriages",
    "Pregnancy after Menopause",
    "Ovulation Induction",
    "Ovulation Induction",
    "Irregular Periods",
    "Repeated Miscarriages",
    "Pregnancy after Menopause",

  ];

  const locations = [
    { name: "Pune", desc: "(Aundh – ITI Rd)" },
    { name: "Nashik", desc: "(College Rd)" },
    { name: "Thane", desc: "(Ghodhbunder Rd)" },
    { name: "Andheri", desc: "(Veera Desai)" },
    { name: "Jalgaon", desc: "(Balaji Nagar)" },
  ];

  const doctors = [
    { name: "Dr. Dinesh Wade", role: "Fertility Consultant, Pune", img: "/DoctorsSection/DrDinesh.png" },
    { name: "Dr. Unnati Mamtora", role: "Fertility Consultant, Borivali", img: "/DoctorsSection/DrUnnati.png" },
    { name: "Dr. Darshna Wahane", role: "Fertility Consultant, Panvel", img: "/DoctorsSection/DrDarshna.png" },
    { name: "Dr. Priti Pardeshi", role: "Fertility Consultant, Kalyan", img: "/DoctorsSection/DrPriti.png" },
  ];


  const handleBack = () => {
    if (activeStep === "who") setActiveStep("where");
    else if (activeStep === "where") setActiveStep("what");
    else onClose();
  };

  const handleNext = () => {
    if (activeStep === "what") setActiveStep("where");
    else if (activeStep === "where") setActiveStep("who");
    else onClose();
  };

  return (
    <section className="fixed inset-0 z-[2000] bg-[#F3F8FF] flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <div className="h-[56px] flex items-center justify-between px-4 bg-white border-b border-gray-200">
        <button
          onClick={handleBack}
          className="flex items-center gap-1 text-[#1656A5] text-[16px] font-[Manrope]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#1656A5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>



        <button onClick={onClose}>
          <X size={22} color="#2C2C2C" />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

          {/* WHAT Section */}
          <div
            onClick={() => setActiveStep(activeStep === "what" ? null : "what")}
            className={`rounded-[8px] transition-all duration-300 overflow-hidden ${activeStep === "what" ? "bg-white shadow-sm" : "bg-[#F3F8FF]"
              }`}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[14px] font-medium text-[#2C2C2C]">What</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transform transition-transform ${activeStep === "what" ? "rotate-180" : "rotate-0"
                  }`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#1656A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {activeStep === "what" && (
              <div className="px-4 pb-4 space-y-3">
                {/* Search Input */}
                <div
                  className="flex items-center gap-2 border border-[#D1D5DB] rounded-[10px] py-2 px-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M19 11.5C19 12.9834 18.5601 14.4334 17.736 15.6668C16.9119 16.9001 15.7406 17.8614 14.3701 18.4291C12.9997 18.9967 11.4917 19.1453 10.0368 18.8559C8.58197 18.5665 7.2456 17.8522 6.1967 16.8033C5.14781 15.7544 4.4335 14.418 4.14411 12.9632C3.85472 11.5083 4.00325 10.0003 4.57091 8.62987C5.13856 7.25943 6.09986 6.08809 7.33323 5.26398C8.56659 4.43987 10.0166 4 11.5 4C13.4891 4 15.3968 4.79018 16.8033 6.1967C18.2098 7.60322 19 9.51087 19 11.5V11.5Z"
                      stroke="#7E7E7E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M20 20L19 19" stroke="#7E7E7E" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search Treatments or Concerns..."
                    value={inputs.what}
                    onChange={(e) => setInputs({ ...inputs, what: e.target.value })}
                    className="flex-1 text-[14px] text-[#4B5563] outline-none bg-transparent"
                  />
                </div>

                {/* Filtered Treatments */}
                <div className="flex flex-wrap gap-3">
                  {treatments
                    .filter((t) =>
                      t.toLowerCase().includes(inputs.what.toLowerCase())
                    )
                    .map((t) => (
                      <button
                        key={t}
                        onClick={(e) => {
                          e.stopPropagation();
                          setInputs({ ...inputs, what: t });
                        }}
                        className={`px-3 py-2 rounded-[12px] border text-[14px] font-medium transition
                ${inputs.what === t
                            ? "bg-[#1656A5] text-white border-[#1656A5]"
                            : "text-[#1656A5] border-[#1656A5]"
                          }`}
                      >
                        {t}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* WHERE Section */}
          <div
            onClick={() => setActiveStep(activeStep === "where" ? null : "where")}
            className={`rounded-[8px] transition-all duration-300 overflow-hidden ${activeStep === "where" ? "bg-white shadow-sm" : "bg-[#F3F8FF]"
              }`}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[14px] font-medium text-[#2C2C2C]">Where</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transform transition-transform ${activeStep === "where" ? "rotate-180" : "rotate-0"
                  }`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#1656A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {activeStep === "where" && (
              <div className="px-4 pb-4 space-y-3">
                {/* Search Input */}
                <div
                  className="flex items-center gap-2 border border-[#D1D5DB] rounded-[10px] py-2 px-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M19 11.5C19 12.9834 18.5601 14.4334 17.736 15.6668C16.9119 16.9001 15.7406 17.8614 14.3701 18.4291C12.9997 18.9967 11.4917 19.1453 10.0368 18.8559C8.58197 18.5665 7.2456 17.8522 6.1967 16.8033C5.14781 15.7544 4.4335 14.418 4.14411 12.9632C3.85472 11.5083 4.00325 10.0003 4.57091 8.62987C5.13856 7.25943 6.09986 6.08809 7.33323 5.26398C8.56659 4.43987 10.0166 4 11.5 4C13.4891 4 15.3968 4.79018 16.8033 6.1967C18.2098 7.60322 19 9.51087 19 11.5V11.5Z"
                      stroke="#7E7E7E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M20 20L19 19" stroke="#7E7E7E" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Select Clinic Location..."
                    value={inputs.where}
                    onChange={(e) => setInputs({ ...inputs, where: e.target.value })}
                    className="flex-1 text-[14px] text-[#4B5563] outline-none bg-transparent"
                  />
                </div>

                {/* Filtered Locations */}
                {locations
                  .filter((loc) =>
                    loc.name.toLowerCase().includes(inputs.where.toLowerCase())
                  )
                  .map((loc) => (
                    <div
                      key={loc.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        setInputs({ ...inputs, where: loc.name });
                      }}
                      className="flex items-center gap-3 p-3 rounded-[8px] bg-[#F3F8FF] hover:bg-[#EAF1F8] cursor-pointer transition"
                    >
                      <div className="w-[70px] h-[70px] flex-shrink-0 rounded-[12px] overflow-hidden bg-[#E0EAF8]">
                        <Image
                          src={loc.img}
                          alt={loc.name}
                          width={70}
                          height={70}
                          className="w-full h-full object-cover rounded-[12px]"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-[#2C2C2C]">{loc.name}</p>
                        <p className="text-[12px] text-[#7E7E7E]">{loc.desc}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* WHO Section */}
          <div
            onClick={() => setActiveStep(activeStep === "who" ? null : "who")}
            className={`rounded-[8px] transition-all duration-300 overflow-hidden ${activeStep === "who" ? "bg-white shadow-sm" : "bg-[#F3F8FF]"
              }`}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-[14px] font-medium text-[#2C2C2C]">Who</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transform transition-transform ${activeStep === "who" ? "rotate-180" : "rotate-0"
                  }`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#1656A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {activeStep === "who" && (
              <div className="px-4 pb-4 space-y-3">
                {/* Search Input */}
                <div
                  className="flex items-center gap-2 border border-[#D1D5DB] rounded-[10px] py-2 px-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M19 11.5C19 12.9834 18.5601 14.4334 17.736 15.6668C16.9119 16.9001 15.7406 17.8614 14.3701 18.4291C12.9997 18.9967 11.4917 19.1453 10.0368 18.8559C8.58197 18.5665 7.2456 17.8522 6.1967 16.8033C5.14781 15.7544 4.4335 14.418 4.14411 12.9632C3.85472 11.5083 4.00325 10.0003 4.57091 8.62987C5.13856 7.25943 6.09986 6.08809 7.33323 5.26398C8.56659 4.43987 10.0166 4 11.5 4C13.4891 4 15.3968 4.79018 16.8033 6.1967C18.2098 7.60322 19 9.51087 19 11.5V11.5Z"
                      stroke="#7E7E7E"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M20 20L19 19" stroke="#7E7E7E" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Choose Doctor / Specialist..."
                    value={inputs.who}
                    onChange={(e) => setInputs({ ...inputs, who: e.target.value })}
                    className="flex-1 text-[14px] text-[#4B5563] outline-none bg-transparent"
                  />
                </div>

                {/* Filtered Doctors */}
                {doctors
                  .filter((d) =>
                    d.name.toLowerCase().includes(inputs.who.toLowerCase())
                  )
                  .map((d) => (
                    <div
                      key={d.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        setInputs({ ...inputs, who: d.name });
                      }}
                      className="flex items-center gap-3 p-3 rounded-[8px] bg-[#F3F8FF] hover:bg-[#EAF1F8] cursor-pointer"
                    >
                      <Image
                        src={d.img}
                        alt={d.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[14px] font-medium text-[#2C2C2C]">{d.name}</p>
                        <p className="text-[12px] text-[#7E7E7E]">{d.role}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

        </div>


        {/* Other sections — Where, Who */}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-200 bg-[#F3F8FF]">
        <div className="flex items-center justify-between">
          <button className="text-[#1656A5] text-[16px] font-medium">Clear All</button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 bg-[#1656A5] text-white px-4 py-2 rounded-[8px]"
          >
            <Search size={16} /> {activeStep === "who" ? "Search" : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------- NAVBAR -------------------- */
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [activeMobileSubmenuItem, setActiveMobileSubmenuItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [showFullSearch, setShowFullSearch] = useState(false);
  const [activeStep, setActiveStep] = React.useState<"what" | "where" | "who" | null>("what");
  const [inputs, setInputs] = React.useState({ what: "", where: "", who: "" });


  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);
  // ─── NAVBAR SHOW/HIDE ON SCROLL ─────────────────────────────
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    lastScrollY.current = window.scrollY || 0;

    let ticking = false;
    const SCROLL_THRESHOLD = 10;
    const HIDE_AFTER = 100;

    const handle = () => {
      const currentY = window.scrollY || 0;
      if (Math.abs(currentY - lastScrollY.current) < SCROLL_THRESHOLD) return;

      if (
        currentY > lastScrollY.current &&
        currentY > HIDE_AFTER &&
        !isMobileMenuOpen &&
        !isSearchOpen
      ) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentY;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handle();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobileMenuOpen, isSearchOpen]);
  // ────────────────────────────────────────────────────────────



  const pathname = usePathname();
  const closeTimeoutRef = useRef<number | null>(null);

  const navigationItems = [
    { label: "About Us", path: "/about-us", hasMegaMenu: true },
    { label: "Infertility Issues", path: "/infertility", hasMegaMenu: true },
    { label: "Our Centers", path: "/centers", hasMegaMenu: true },
    { label: "Treatments", path: "/treatments", hasMegaMenu: true },
    { label: "Doctors", path: "/doctors", hasMegaMenu: false },
    { label: "Patient Resources", path: "/resources", hasMegaMenu: false },
    { label: "Careers", path: "/careers", hasMegaMenu: false },
  ];

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => setOpenMenu(null), 200);
  };
  // Detect if user is on mobile
  const [isMobileView, setIsMobileView] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] bg-white shadow-[0_4px_4px_rgba(0,0,0,0.03)] overflow-hidden"}`}>
        {/* NAVBAR */}
        {!isSearchOpen && (
          <div className="flex justify-between items-center h-[56px] px-4 w-full py-0 overflow-hidden">
            {isMobileSearchOpen ? (
              // 🔵 Blue Search Bar replaces entire navbar
              <button
                onClick={() => {
                  setIsMobileSearchOpen(false);
                  setShowFullSearch(true);
                }}
                className="w-full h-[40px] flex justify-center items-center gap-[8px]
                 rounded-[8px] bg-[#1656A5] backdrop-blur-[7.5px]
                 text-[#F9F9F9] font-[Manrope] text-[12px] font-normal leading-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M19 11.5C19 12.9834 18.5601 14.4334 17.736 15.6668C16.9119 16.9001 15.7406 17.8614 14.3701 18.4291C12.9997 18.9967 11.4917 19.1453 10.0368 18.8559C8.58197 18.5665 7.2456 17.8522 6.1967 16.8033C5.14781 15.7544 4.4335 14.418 4.14411 12.9632C3.85472 11.5083 4.00325 10.0003 4.57091 8.62987C5.13856 7.25943 6.09986 6.08809 7.33323 5.26398C8.56659 4.43987 10.0166 4 11.5 4C13.4891 4 15.3968 4.79018 16.8033 6.1967C18.2098 7.60322 19 9.51087 19 11.5V11.5Z"
                    stroke="#F9F9F9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 20L19 19"
                    stroke="#F9F9F9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Start your search</span>
              </button>
            ) : (
              // 🧭 Default Navbar (logo + icons)
              <>
                <Link href="/" className="flex-shrink-0">
                  <Image src="/logo1.png" alt="Progenesis" width={140} height={40} priority />
                </Link>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (isMobileView) {
                        setShowFullSearch(true); // open mobile overlay
                      } else {
                        setIsSearchOpen(true); // open desktop search
                      }
                    }}
                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100"
                  >
                    <Search size={18} />
                  </button>

                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100"
                  >
                    <Menu size={20} />
                  </button>
                </div>
              </>
            )}
          </div>


        )}


        {/* SEARCH SECTION */}
        {isSearchOpen && <SearchSection onClose={() => setIsSearchOpen(false)} />}

        {/* NEW: Full-Screen Mobile Search Overlay */}
        {showFullSearch && <MobileSearchOverlay onClose={() => setShowFullSearch(false)} />}





        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col">
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 shadow-[0_4px_4px_rgba(0,0,0,0.03)]">
              {/* ✅ LEFT SIDE: Logo OR Back button */}
              {!activeMobileSubmenu ? (
                // Show Logo when no submenu
                <Link href="/" className="w-[130px] h-[35px] relative">
                  <Image src="/logo1.png" alt="Logo" fill className="object-contain" />
                </Link>
              ) : (
                // Show Back button when submenu is active
                <button
                  onClick={() => setActiveMobileSubmenu(null)}
                  className="flex items-center gap-2 text-[#1656A5] font-[Manrope] 
                 text-[14px] font-normal leading-[24px] tracking-[-0.28px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-[24px] h-[24px] aspect-[1/1]"
                  >
                    <mask
                      id="mask0_1958_3935"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect
                        width="24"
                        height="24"
                        transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 24 24)"
                        fill="#D9D9D9"
                      />
                    </mask>
                    <g mask="url(#mask0_1958_3935)">
                      <path
                        d="M8 12L16.1964 20L17 19.2157L9.60714 12L17 4.78431L16.1964 4L8 12Z"
                        fill="#1656A5"
                      />
                    </g>
                  </svg>
                  Back
                </button>
              )}

              {/* ✅ RIGHT SIDE: Close (X) button */}

              {/* Removed duplicate center logo to avoid showing logo twice in the mobile header.
                Left side already renders the logo when no submenu is active. */}

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-[24px] h-[24px] flex-shrink-0 aspect-[1/1]"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask_close_mobile"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask_close_mobile)">
                    <path
                      d="M17.1961 17.6922L11.9988 12.495L6.80158 17.6922L6.30661 17.1972L11.5038 12L6.30661 6.80277L6.80158 6.30779L11.9988 11.505L17.1961 6.30779L17.691 6.80276L12.4938 12L17.691 17.1972L17.1961 17.6922Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </button>
            </div>


            {/* LINKS */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3 pb-[100px]">
              {/* MAIN MENU */}
              {!activeMobileSubmenu ? (
                <>
                  {navigationItems.map((item, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => {
                          if (item.hasMegaMenu) setActiveMobileSubmenu(item.label);
                          else setIsMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between py-3 font-[Manrope] text-[20px] font-normal tracking-[-0.4px] text-[#2C2C2C] hover:text-[#1656A5]"
                      >
                        {item.label}
                        {item.hasMegaMenu && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 25"
                            fill="none"
                            className="w-[24px] h-[24px] aspect-[1/1] flex-shrink-0"
                          >
                            <mask
                              id={`mask_${item.label.replace(/\s+/g, "_")}`}
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="25"
                            >
                              <rect
                                y="24.5"
                                width="24"
                                height="24"
                                transform="rotate(-90 0 24.5)"
                                fill="#D9D9D9"
                              />
                            </mask>
                            <g mask={`url(#mask_${item.label.replace(/\s+/g, "_")})`}>
                              <path
                                d="M16 12.5L7.80357 20.5L7 19.7157L14.3929 12.5L7 5.28431L7.80357 4.5L16 12.5Z"
                                fill="#1656A5"
                              />
                            </g>
                          </svg>
                        )}

                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {/* SUBMENU */}
                  <div className="p-2 space-y-6">
                    {megaMenuData[activeMobileSubmenu] && (
                      <>
                        {megaMenuData[activeMobileSubmenu].columns.map((col: any, i: number) => {
                          const highlightedSections = [
                            "Discover Us",
                            "Know Infertility",
                            "Where We Are",
                            "Fertility Solutions",
                          ];
                          const isHighlighted = highlightedSections.includes(col.title);

                          return (
                            <div
                              key={i}
                              className={`p-[16px] rounded-[8px] mb-6 ${col.title === "Quick Links"
                                ? "bg-transparent p-0" // No background, no padding
                                : isHighlighted
                                  ? "bg-[#F3F8FF]"
                                  : "bg-transparent"
                                }`}
                            >
                              {col.title && (
                                <h3
                                  className={`font-[Manrope] mb-4 ${col.title === "Quick Links"
                                    ? "text-[#7E7E7E] text-[20px] font-medium tracking-[-0.4px]"
                                    : isHighlighted
                                      ? "text-[#7E7E7E] text-[20px] font-medium tracking-[-0.4px]"
                                      : "text-[#2C2C2C] text-[18px] font-semibold"
                                    }`}
                                >
                                  {col.title}
                                </h3>

                              )}

                              <ul className="space-y-3">
                                {col.links.map((link: any, j: number) => (
                                  <li key={j}>
                                    {/* BOOK APPOINTMENT BUTTON */}
                                    {link.isButton ? (
                                      <Link
                                        href={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full px-4 py-[10px] rounded-[8px] bg-[#1656A5] text-white font-[Manrope] text-[14px] font-semibold leading-[24px] tracking-[-0.28px] hover:bg-[#12498C] transition"
                                      >
                                        {link.label}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                          <path
                                            d="M1.37624 5.5498L10.0103 5.6986M10.0103 5.6986L5.56228 1.36376M10.0103 5.6986L5.76761 9.94124"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </Link>
                                    ) :
                                      link.isPhone ? (
                                        /* 📞 PHONE LINK */
                                        <a
                                          href={link.path}
                                          className="inline-flex items-center gap-2 px-3 py-[6px] rounded-[8px]
             bg-[rgba(22,86,165,0.10)]
             text-[#252525] font-[Manrope] text-[14px] font-medium leading-[20px] tracking-[-0.28px]
             hover:bg-[rgba(22,86,165,0.15)] transition"
                                        >

                                          {/* Phone SVG (same as desktop) */}
                                          <span className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                              <path
                                                d="M20.675 21.3417C18.9778 21.3417 17.2128 20.8948 15.3802 20.001C13.5476 19.1073 11.8323 17.8569 10.2344 16.25C8.63646 14.643 7.39062 12.9278 6.49687 11.1042C5.60313 9.28055 5.15625 7.52013 5.15625 5.82291C5.15625 5.49014 5.26458 5.2129 5.48125 4.99118C5.69792 4.76928 5.96875 4.65833 6.29375 4.65833H8.46042C8.76736 4.65833 9.03368 4.75312 9.25937 4.9427C9.48507 5.13228 9.64305 5.38055 9.73333 5.68749L10.2208 7.90832C10.275 8.21527 10.266 8.4861 10.1937 8.72082C10.1215 8.95555 9.99514 9.14513 9.81458 9.28958L7.5125 11.375C7.98194 12.2236 8.49201 13.0045 9.04271 13.7177C9.5934 14.4309 10.1757 15.1035 10.7896 15.7354C11.4396 16.3854 12.1437 16.9903 12.9021 17.55C13.6604 18.1097 14.5 18.6424 15.4208 19.1479L17.6687 16.8458C17.8493 16.6472 18.0434 16.5208 18.251 16.4667C18.4587 16.4125 18.6979 16.4035 18.9687 16.4396L20.8104 16.8187C21.1174 16.891 21.3656 17.0444 21.5552 17.2792C21.7448 17.5139 21.8396 17.7847 21.8396 18.0917V20.2042C21.8396 20.5292 21.7286 20.8 21.5067 21.0167C21.285 21.2333 21.0078 21.3417 20.675 21.3417Z"
                                                fill="#1C1B1F"
                                              />
                                            </svg>
                                          </span>
                                          {link.label}
                                        </a>
                                      ) : link.isWhatsapp ? (
                                        /* 💬 WHATSAPP LINK */
                                        <a
                                          href={link.path}
                                          className="inline-flex items-center gap-2 px-3 py-[6px] rounded-[8px]
             bg-[rgba(22,86,165,0.10)]
             text-[#252525] font-[Manrope] text-[14px] font-medium leading-[20px] tracking-[-0.28px]
             hover:bg-[rgba(22,86,165,0.15)] transition"
                                        >

                                          {/* WhatsApp SVG */}
                                          <span className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 26" fill="none">
                                              <path
                                                d="M21.5497 9.57082C21.0872 8.54894 20.4234 7.63148 19.5805 6.84082C18.7376 6.05763 17.7605 5.43853 16.6715 5.00591C15.5452 4.55837 14.3517 4.33459 13.121 4.33459C11.8902 4.33459 10.6968 4.55837 9.57048 5.00591C8.48146 5.43853 7.50433 6.05017 6.66146 6.84082C5.81859 7.63148 5.15475 8.54894 4.69229 9.57082C4.21491 10.63 3.96875 11.7638 3.96875 12.9274C3.96875 14.9637 4.72956 16.918 6.1244 18.4694L5.3785 22.5346L9.34671 20.7668C10.5327 21.274 11.7933 21.5276 13.1135 21.5276C14.3442 21.5276 15.5377 21.3039 16.664 20.8563C17.753 20.4237 18.7302 19.8121 19.573 19.0214C20.4159 18.2307 21.0797 17.3133 21.5422 16.2914C22.0196 15.2322 22.2657 14.0984 22.2657 12.9348C22.2732 11.7638 22.027 10.6375 21.5497 9.57082Z"
                                                stroke="black"
                                                strokeWidth="0.7"
                                              />
                                              <path
                                                d="M16.8348 14.6452C16.4469 14.4513 16.1635 14.3319 15.9621 14.2574C15.8353 14.2126 15.5369 14.0783 15.4325 14.1604C15.1043 14.4289 14.7537 15.1897 14.3808 15.3315C13.4558 15.1524 12.5981 14.5184 11.9268 13.8695C11.6284 13.586 11.0764 12.7805 10.9571 12.5642C10.9347 12.3404 11.3375 12.042 11.427 11.8705C11.8894 11.3483 11.5389 11.0201 11.4792 10.8038C11.3748 10.5801 11.1958 10.1773 11.0391 9.84908C10.9049 9.63277 10.875 9.31203 10.6363 9.19268C9.6219 8.67055 9.04012 9.71482 8.80143 10.2593C7.36184 13.7278 16.0143 20.329 17.7746 15.779C17.8641 15.3837 17.8268 15.2345 17.6926 15.0555C17.424 14.869 17.1108 14.7869 16.8348 14.6452Z"
                                                stroke="black"
                                                strokeWidth="0.7"
                                              />
                                            </svg>
                                          </span>
                                          {link.label}
                                        </a>
                                      ) : link.isarrow ? (
                                        /* ➤ ARROW LINK */
                                        <Link
                                          href={link.path}
                                          onClick={() => setIsMobileMenuOpen(false)}
                                          className="flex items-center justify-between w-full text-[#2C2C2C] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px] hover:text-[#1656A5] transition"
                                        >
                                          {link.label}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <path
                                              d="M7.37624 11.5498L16.0103 11.6986M16.0103 11.6986L11.5623 7.36376M16.0103 11.6986L11.7676 15.9412"
                                              stroke="#252525"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </Link>
                                      ) : (
                                        /* Default */
                                        <Link
                                          href={link.path}
                                          onClick={() => setIsMobileMenuOpen(false)}
                                          className="block text-[#4B5563] text-[13px] font-[Manrope] hover:text-[#1656A5] transition"
                                        >
                                          {link.label}
                                        </Link>
                                      )}
                                  </li>
                                ))}


                              </ul>


                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                </>
              )}

            </div>
            {/* FOOTER BUTTONS (Fixed at Bottom of Mobile Menu) */}
            <div
              className="absolute bottom-0 left-0 w-full bg-white flex justify-between items-center
             px-[16px] py-[16px] shadow-[0_-4px_4px_rgba(0,0,0,0.03)]
             lg:hidden"
            >
              <Link
                href="/appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-[48%] px-[16px] py-[10px] rounded-[8px]
               bg-[#1656A5] text-white font-[Manrope] text-[14px] font-medium
               leading-[20px] tracking-[-0.24px] whitespace-nowrap"
              >
                Book Your Appointment
              </Link>

              <Link
                href="/check-fit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-[48%] px-[16px] py-[10px] rounded-[8px]
               border border-[#1656A5] text-[#1656A5] font-[Manrope] text-[14px]
               font-medium leading-[20px] tracking-[-0.24px] whitespace-nowrap"
              >
                Find My Right Treatment
              </Link>
            </div>

          </div>
        )}







      </header>
      <div className="h-[56px]" aria-hidden="true" />
    </>

  );
}


