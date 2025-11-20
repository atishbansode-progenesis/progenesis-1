"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Search, X, ChevronDown, Menu } from "lucide-react";
import AppointmentForm from "@/page-components/about/AppointmentForm";
import { centersData } from "@/data/centers";
import { Doctor } from "@/data/doctors";

/* -------------------- SEARCH SECTION -------------------- */

export function SearchSection({
  onClose,
  doctors,
}: {
  onClose: () => void;
  doctors: Doctor[];
}) {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState<"what" | "where" | "who" | null>(
    null,
  );
  const [isMobile, setIsMobile] = useState(false);
  const buttonRefs = useRef<{ [key: string]: HTMLDivElement | null }>({
    what: null,
    where: null,
    who: null,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [popupPosition, setPopupPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);

  const [inputs, setInputs] = useState({
    what: "",
    where: "",
    who: "",
  });

  const treatments = [
    { name: "IMSI", link: "/treatments/advanced/imsi" },
    { name: "PICSI", link: "/treatments/advanced/picsi" },
    { name: "LAH", link: "/treatments/advanced/lah" },
    {
      name: "Blastocyst Transfer",
      link: "/treatments//advanced/blastocyst-transfer",
    },
    {
      name: "Sequential Embryo Transfer",
      link: "/treatments/advanced/sequential-embryo-transfer/",
    },
    { name: "PGD/PGS/PGT-A", link: "/treatments/advanced/pgd-pgs-pgt-a/" },
    {
      name: "Class-1000 Modular Lab",
      link: "/treatments/advanced/class-1000-modular-lab/",
    },
    {
      name: "Trigas Incubators",
      link: "/treatments/advanced/trigas-incubators/",
    },
    { name: "Witness System", link: "/treatments/advanced/witness-system/" },
    {
      name: "Cryopreservation",
      link: "/treatments/advanced/cryopreservation/",
    },

    {
      name: "Ovulation Induction",
      link: "/treatments/infertility/ovulation-induction/",
    },

    {
      name: "IUI",
      link: "/treatments/infertility/artificial-insemination-iui-treatment/",
    },

    {
      name: "IVF",
      link: "/treatments/infertility/ivf-comprehensive-in-vitro-fertilization-treatment/",
    },

    {
      name: "IVF-ICSI",
      link: "/treatments/infertility/ivf-icsi-intracytoplasmic-sperm-injection/",
    },

    {
      name: "Frozen Embryo Transfer",
      link: "/treatments/infertility/frozen-embryo-transfer/",
    },

    // { name: "Fertility Surgery", link: "/treatments/infertility/fertility-surgery/" },

    {
      name: "Female Fertility Preservation",
      link: "/treatments/preservation/female-fertility-preservation/",
    },
    {
      name: "Male Fertility Preservation",
      link: "/treatments/preservation/male-fertility-preservation/",
    },
    {
      name: "Embryo Preservation",
      link: "/treatments/preservation/egg-embryo-freezing/",
    },
    {
      name: "Female Analysis",
      link: "/treatments/evaluation/female-fertility-check/",
    },
    { name: "Male Analysis", link: "/treatments/evaluation/semen-analysis/" },
  ];

  const locations = centersData.map((center) => ({
    name: center.name,
    desc: center.desc,
    icon: center.image,
    link: `/our-center/${center.slug}`,
  }));

  const doctorsData = doctors.map((doctor) => ({
    name: doctor.name,
    role: `${doctor.specialty} • ${doctor.hospital}`,
    img: doctor.image,
    link: `/doctors/${doctor.slug}/`,
  }));

  const updatePopupPosition = (step: "what" | "where" | "who") => {
    const el = buttonRefs.current[step];
    if (el) {
      const rect = el.getBoundingClientRect();
      const isMobileView = window.innerWidth < 1200;
      setIsMobile(isMobileView);

      setPopupPosition({
        left: isMobileView ? window.innerWidth / 2 : rect.left + rect.width / 2,
        top: rect.bottom + window.scrollY + 20,
      });
    }
  };

  const handleInputFocus = (step: "what" | "where" | "who") => {
    setActiveStep(step);
    updatePopupPosition(step);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActiveStep(null);
      }
    };
    if (!isMobile) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  const filteredTreatments = treatments.filter((t) =>
    t.name.toLowerCase().includes(inputs.what.toLowerCase()),
  );
  const filteredLocations = locations.filter((l) =>
    l.name.toLowerCase().includes(inputs.where.toLowerCase()),
  );
  const filteredDoctors = doctorsData.filter((d) =>
    d.name.toLowerCase().includes(inputs.who.toLowerCase()),
  );

  // ========================
  // DESKTOP VIEW (UNCHANGED)
  // ========================
  if (!isMobile) {
    return (
      <section className="relative w-full bg-white" ref={containerRef}>
        <div className="flex flex-col md:flex-row items-start md:items-center w-full max-w-[1600px] mx-auto py-4  px-6 lg:px-[50px] xl:px-[80px] 2xl:px-[120px] gap-4 relative">
          {/* Logo */}
          <Link href="/" className="w-[150px] h-[40px] relative md:mt-0 mt-2">
            <Image
              src="/logo1.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </Link>

          {/* WHAT */}
          <div
            ref={(el) => {
              buttonRefs.current.what = el;
            }}
            className={`relative flex items-center flex-1 rounded-2xl px-5 py-3 transition-all duration-200 
              ${activeStep === "what" ? "bg-[#EAF1F8] shadow-sm" : "bg-white"}`}
          >
            <span className="text-[#000000] font-normal text-[16px] mr-3 whitespace-nowrap">
              What
            </span>
            <input
              type="text"
              placeholder="Search Treatments or Concerns..."
              value={inputs.what}
              onChange={(e) => setInputs({ ...inputs, what: e.target.value })}
              onFocus={() => handleInputFocus("what")}
              onBlur={() => setActiveStep(null)}
              className="w-[200px] bg-transparent border-none outline-none px-2 placeholder-[#9CA3AF] text-[16px] text-[#606060] focus:ring-0 focus:outline-none"
            />
            {/* <Search className={`absolute right-4 text-gray-400 pointer-events-none`} size={18} /> */}
          </div>

          {/* WHERE */}
          <div
            ref={(el) => {
              buttonRefs.current.where = el;
            }}
            className={`relative flex items-center flex-1 rounded-2xl px-5 py-3 transition-all duration-200 
              ${activeStep === "where" ? "bg-[#EAF1F8] shadow-sm" : "bg-white"}`}
          >
            <span className="text-[#000000] font-normal text-[16px] mr-3 whitespace-nowrap">
              Where
            </span>
            <input
              type="text"
              placeholder="Select City"
              value={inputs.where}
              onChange={(e) => setInputs({ ...inputs, where: e.target.value })}
              onFocus={() => handleInputFocus("where")}
              onBlur={() => setActiveStep(null)}
              className="w-full bg-transparent border-none outline-none placeholder-[#9CA3AF] text-[16px] text-[#606060] focus:ring-0 focus:outline-none"
            />
            {/* <ChevronDown className="absolute right-4 text-gray-400 pointer-events-none" size={18} /> */}
          </div>

          {/* WHO */}
          <div
            ref={(el) => {
              buttonRefs.current.who = el;
            }}
            className={`relative flex items-center flex-1 rounded-2xl px-5 py-3 transition-all duration-200 
              ${activeStep === "who" ? "bg-[#EAF1F8] shadow-sm" : "bg-white"}`}
          >
            <span className="text-[#000000] font-normal text-[16px] mr-3 whitespace-nowrap">
              Who
            </span>
            <input
              type="text"
              placeholder="Choose Doctor / Specialist"
              value={inputs.who}
              onChange={(e) => setInputs({ ...inputs, who: e.target.value })}
              onFocus={() => handleInputFocus("who")}
              onBlur={() => setActiveStep(null)}
              className="w-full bg-transparent border-none outline-none placeholder-[#9CA3AF] text-[16px] text-[#606060] focus:ring-0 focus:outline-none"
            />
            {/* <ChevronDown className="absolute right-4 text-gray-400 pointer-events-none" size={18} /> */}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="cursor-pointer h-[44px] w-[44px] rounded-xl bg-[#1656A5] flex items-center justify-center self-end md:self-center"
          >
            <X size={20} color="#fff" />
          </button>
        </div>

        {/* DROPDOWNS */}
        {activeStep && popupPosition && (
          // <div
          //   className="absolute z-50 bg-white rounded-2xl shadow-xl p-4 w-[90%] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] max-h-[400px] overflow-y-auto transition-all duration-200 animate-fadeIn"
          //   style={{
          //     left: popupPosition.left,
          //     top: popupPosition.top,
          //     transform: "translateX(-50%)",
          //   }}
          // >

          <div
            className="absolute z-50 bg-white rounded-2xl shadow-xl pl-4 py-4 w-[90%] lg:w-[300px] xl:w-[350px] 2xl:w-[400px]
             max-h-[400px] overflow-hidden transition-all duration-200 animate-fadeIn"
            style={{
              left: popupPosition.left,
              top: popupPosition.top,
              transform: "translateX(-50%)",
            }}
          >
            {/* // </div> */}
            {activeStep === "what" && (
              <div
                className="flex flex-wrap gap-3 rounded-2xl overflow-y-auto"
                style={{
                  maxHeight: "360px",
                  scrollbarGutter: "stable",
                  overflow: "overlay",
                  borderRadius: "1rem",
                }}
              >
                {filteredTreatments.map((t, i) => (
                  <button
                    key={i}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setInputs((prev) => ({ ...prev, what: t.name }));
                      setActiveStep(null);
                      router.push(t.link);
                    }}
                    className="cursor-pointer inline-flex px-3 py-2 rounded-[16px] border border-[#1656A5] text-[#1656A5] text-[14px] font-medium hover:bg-[#1656A5] hover:text-white transition"
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            )}

            {activeStep === "where" && (
              <div
                // className="space-y-3  rounded-2xl"

                className="space-y-3 overflow-y-auto "
                style={{
                  maxHeight: "360px", // ensures internal scroll area
                  scrollbarGutter: "stable", // keeps space for scrollbar
                  overflow: "overlay", // prevents scrollbar clipping radius
                  borderRadius: "1rem", // matches outer rounded-2xl
                }}
              >
                {filteredLocations.map((l, i) => (
                  <div
                    key={i}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setInputs({ ...inputs, where: l.name });
                      setActiveStep(null);
                      router.push(l.link);
                    }}
                    className="flex items-center gap-3 p-3 rounded-[16px] hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="w-[75px] h-[70px] rounded-[16px] overflow-hidden bg-gray-100">
                      <Image
                        src={l.icon}
                        alt={l.name}
                        width={70}
                        height={70}
                        className="object-cover w-full h-full"
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
              <div
                className="flex flex-col rounded-2xl overflow-y-auto "
                style={{
                  maxHeight: "360px", // ensures internal scroll area
                  scrollbarGutter: "stable", // keeps space for scrollbar
                  overflow: "overlay", // prevents scrollbar clipping radius
                  borderRadius: "1rem", // matches outer rounded-2xl
                }}
              >
                {filteredDoctors.map((d, i) => (
                  <div
                    key={i}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setInputs({ ...inputs, who: d.name });
                      setActiveStep(null);
                      router.push(d.link);
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={75}
                      height={70}
                      className="rounded-[16px] object-cover"
                    />
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

  // ========================
  // MOBILE VIEW (FULL HEIGHT + SLIDE-UP)
  // ========================
  return (
    <section className="fixed inset-0 bg-[#EBF4FF] z-[1000] flex flex-col h-screen animate-[slideUp_0.35s_ease-out]">
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-white">
        <button
          className={`
      flex items-center gap-2 text-[#1656A5] font-[Manrope]
      text-[14px] font-normal leading-[24px] tracking-[-0.28px]
    `}
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

        <button onClick={onClose}>
          <X size={22} />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6">
        {/* WHAT */}
        <div
          className={`flex flex-col rounded-2xl transition-all duration-200 ${
            activeStep === "what"
              ? "bg-white p-4 shadow-sm"
              : "bg-[rgba(255,255,255,1)] p-0"
          }`}
        >
          {activeStep === "what" ? (
            <>
              <label className="text-gray-900 font-medium mb-2">What</label>

              <input
                type="text"
                placeholder="Search Treatments or Concerns..."
                value={inputs.what}
                onChange={(e) => setInputs({ ...inputs, what: e.target.value })}
                onFocus={() => setActiveStep("what")}
                className="border border-gray-200 rounded-xl px-3 py-2 outline-none text-[15px]"
              />
            </>
          ) : (
            <button
              onClick={() => setActiveStep("what")}
              className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-3 py-2 bg-white cursor-pointer hover:bg-gray-50 transition"
            >
              <span className="text-[#94A3B8]">What</span>
              <span className="text-[#94A3B8]">
                {inputs.what || "Search Treatments or Concerns..."}
              </span>
            </button>
          )}

          {activeStep === "what" && (
            <div className="mt-3 max-h-[250px] overflow-y-auto flex flex-wrap gap-2">
              {filteredTreatments.map((t, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInputs({ ...inputs, what: t.name });
                    setActiveStep(null);
                    router.push(t.link);
                    onClose();
                  }}
                  className={`px-3 py-2 rounded-[14px] border text-[14px] font-medium ${
                    inputs.what === t.name
                      ? "bg-[#1656A5] text-white border-[#1656A5]"
                      : "border-[#1656A5] text-[#1656A5]"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* WHERE */}
        <div
          className={`flex flex-col rounded-2xl transition-all duration-200 ${
            activeStep === "where"
              ? "bg-white p-4 shadow-sm"
              : "bg-transparent p-0"
          }`}
        >
          {activeStep === "where" ? (
            <>
              <label className="text-gray-900 font-medium mb-2">Where</label>
              <input
                type="text"
                placeholder="Select Clinic Location..."
                value={inputs.where}
                onChange={(e) =>
                  setInputs({ ...inputs, where: e.target.value })
                }
                onFocus={() => setActiveStep("where")}
                className="border border-gray-200 rounded-xl px-3 py-2 outline-none text-[15px]"
              />{" "}
            </>
          ) : (
            <button
              onClick={() => setActiveStep("where")}
              className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-3 py-2 bg-white cursor-pointer hover:bg-gray-50 transition"
            >
              <span className="text-[#94A3B8]">Where</span>
              <span className="text-[#94A3B8]">
                {inputs.where || "Select Clinic Location..."}
              </span>
            </button>
          )}

          {activeStep === "where" && (
            <div className="mt-3 space-y-3 max-h-[240px] overflow-y-auto">
              {filteredLocations.map((l, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setInputs({ ...inputs, where: l.name });
                    setActiveStep(null);
                    router.push(l.link);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-2 rounded-none hover:bg-gray-50 cursor-pointer"
                >
                  <Image
                    src={l.icon}
                    alt={l.name}
                    width={48}
                    height={48}
                    className="rounded-[12px] object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{l.name}</p>
                    <p className="text-sm text-gray-600">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* WHO */}
        <div
          className={`flex flex-col rounded-2xl transition-all duration-200 ${
            activeStep === "who"
              ? "bg-white p-4 shadow-sm"
              : "bg-transparent p-0"
          }`}
        >
          {activeStep === "who" ? (
            <input
              type="text"
              placeholder="Choose Doctor / Specialist..."
              value={inputs.who}
              onChange={(e) => setInputs({ ...inputs, who: e.target.value })}
              onFocus={() => setActiveStep("who")}
              className="border border-gray-200 rounded-xl px-3 py-2 outline-none text-[15px]"
            />
          ) : (
            <button
              onClick={() => setActiveStep("who")}
              className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-3 py-2 bg-white cursor-pointer hover:bg-gray-50 transition"
            >
              <span className="text-[#94A3B8]">Who</span>
              <span className="text-[#94A3B8]">
                {inputs.who || "Choose Doctor / Specialist..."}
              </span>
            </button>
          )}

          {activeStep === "who" && (
            <div className="mt-3 space-y-3 max-h-[240px] overflow-y-auto">
              {filteredDoctors.map((d, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setInputs({ ...inputs, who: d.name });
                    setActiveStep(null);
                    router.push(d.link);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-2 rounded-none hover:bg-gray-50 cursor-pointer"
                >
                  <div className="w-[48px] h-[48px] overflow-hidden rounded-[12px] bg-gray-100 flex-shrink-0">
                    <Image
                      src={d.img}
                      alt={d.name}
                      width={48}
                      height={48}
                      className="rounded-[12px] object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{d.name}</p>
                    <p className="text-sm text-gray-600">{d.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-6 py-6 ">
        <button
          onClick={() => {
            setInputs({ what: "", where: "", who: "" });
            setActiveStep(null);
          }}
          className="text-[#606060] font-semibold underline underline-offset-2 hover:opacity-80 cursor-pointer"
        >
          Clear All
        </button>

        <button
          onClick={() => {
            if (inputs.what) {
              const selected = treatments.find(
                (t) => t.name.toLowerCase() === inputs.what.toLowerCase(),
              );
              if (selected) return router.push(selected.link);
            }

            if (inputs.where) {
              const selected = locations.find(
                (l) => l.name.toLowerCase() === inputs.where.toLowerCase(),
              );
              if (selected) return router.push(selected.link);
            }

            if (inputs.who) {
              const selected = doctorsData.find(
                (d) => d.name.toLowerCase() === inputs.who.toLowerCase(),
              );
              if (selected) return router.push(selected.link);
            }
          }}
          className="flex items-center justify-center gap-2 bg-[#1656A5] text-white px-6 py-3 rounded-xl text-[16px] font-semibold shadow-sm hover:opacity-90 transition-all cursor-pointer"
        >
          <Search size={20} /> Search
        </button>
      </div>
    </section>
  );
}

// Mega Menu Data Moble

const megaMenuDataMobile: Record<string, any> = {
  "About Us": {
    image: "/Navbar/about-new.png",
    columns: [
      {
        title: "About Us",
        links: [
          { label: "About Us", path: "/about-progenesis" },
          { label: "Our Approach", path: "/about-progenesis" },
          {
            label: "Our Vision & Mission",
            path: "/about-progenesis#our-vision",
          },
          { label: "Why choose us", path: "/about-progenesis#why-choose-us" },
          { label: "Leadership Team", path: "/about-progenesis/leadership-team" },
          // { label: "Impact & Growth", path: "/about-progenesis#impact-growth" },
          { label: "Careers", path: "/careers" },
          { label: "FAQs", path: "/about-progenesis#faqs" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          {
            label: "+91 70309 44041",
            path: "tel:+917030944041",
            isPhone: true,
          },
          {
            label: "+91 94239 71260",
            path: "tel:+919423971260",
            isWhatsapp: true,
          },
          {
            label: "Online Consultation",
            path: "/online-consultations",
            isarrow: true,
          },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          { label: "Second Opinion", path: "/second-opinion", isarrow: true },
          {
            label: "International Patients",
            path: "/international-patient",
            isarrow: true,
          },
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
            label: "What is Infertility",
            path: "/infertility#about",
            // submenu: [
            //   { label: "Overview", path: "/infertility#about" },
            //   { label: "Symptoms", path: "/infertility#about" },
            //   { label: "Diagnosis", path: "/infertility#about" },
            //   { label: "Treatment Options", path: "/infertility#about" },
            // ],
          },
          {
            label: "Female Infertility Causes",
            path: "/infertility#fertility-section",
            submenu: [
              {
                label: "Repeated IUI Failures",
                path: "/infertility/female/repeated-iui-failures/",
              },
              {
                label: "Repeated IVF Failures",
                path: "/infertility/female/repeated-ivf-failures/",
              },
              {
                label: "Pregnancy after Menopause",
                path: "/infertility/female/pregnancy-after-menopause/",
              },
              { label: "Low AMH", path: "/infertility/female/low-amh/" },
              { label: "PCOS", path: "/infertility/female/pcos/" },
              {
                label: "Tubal Blockage",
                path: "/infertility/female/tubal-blockage/",
              },
              { label: "Fibroids", path: "/infertility/female/fibroids/" },
              {
                label: "Endometriosis",
                path: "/infertility/female/endometriosis/",
              },
            ],
          },
          {
            label: "Male Infertility Causes",
            path: "/infertility#fertility-mini-section",
            submenu: [
              { label: "Azoospermia", path: "/infertility/male/azoospermia/" },
              {
                label: "Low Sperm Count",
                path: "/infertility/male/low-sperm-count/",
              },
              {
                label: "Erectile Dysfunction (ED)",
                path: "/infertility/male/erectile-dysfunction/",
              },
            ],
          },
        ],
      },
      {
        title: "Quick Links",
        links: [
          {
            label: "+91 70309 44041",
            path: "tel:+917030944041",
            isPhone: true,
          },
          {
            label: "+91 94239 71260",
            path: "tel:+919423971260",
            isWhatsapp: true,
          },
          {
            label: "Online Consultation",
            path: "/online-consultations",
            isarrow: true,
          },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          { label: "Second Opinion", path: "/second-opinion", isarrow: true },
          {
            label: "International Patients",
            path: "/international-patient",
            isarrow: true,
          },
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
            label: "Mumbai",
            path: "/mumbai",
            submenu: centersData
              .filter((center) => center.city === "Mumbai")
              .map((center) => ({
                label: center.name,
                path: `/our-center/${center.slug}`,
              })),
          },
          ...centersData
            .filter((center) => center.city !== "Mumbai")
            .map((center) => ({
              label: center.name,
              path: `/our-center/${center.slug}`,
            })),
        ],
      },
      {
        title: "Quick Links",
        links: [
          {
            label: "+91 70309 44041",
            path: "tel:+917030944041",
            isPhone: true,
          },
          {
            label: "+91 94239 71260",
            path: "tel:+919423971260",
            isWhatsapp: true,
          },
          {
            label: "Online Consultation",
            path: "/online-consultations",
            isarrow: true,
          },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          { label: "Second Opinion", path: "/second-opinion", isarrow: true },
          {
            label: "International Patients",
            path: "/international-patient",
            isarrow: true,
          },
        ],
      },
    ],
  },
  Treatments: {
    image: "/Navbar/treatments.png",
    columns: [
      {
        title: "Fertility Solutions",
        links: [
          { label: "Your Path to Parenthood", path: "/treatments#path" },
          {
            label: "Advanced Infertility Treatments",
            path: "/treatments#advanced",
            submenu: [
              {
                label: "IMSI – High-Resolution Sperm Selection",
                path: "/treatments/advanced/imsi",
              },
              {
                label: "PICSI – Physiological ICSI",
                path: "/treatments/advanced/picsi",
              },
              {
                label: "LAH – Laser Assisted Hatching",
                path: "/treatments/advanced/lah",
              },
              {
                label: "Blastocyst Transfer – Stronger Embryo Transfer",
                path: "/treatments//advanced/blastocyst-transfer",
              },
              {
                label: "Sequential Embryo Transfer – Two-Stage Transfer",
                path: "/treatments/advanced/sequential-embryo-transfer/",
              },
              {
                label: "PGD/PGS/PGT-A – Genetic Screening",
                path: "/treatments/advanced/pgd-pgs-pgt-a/",
              },
            ],
          },
          {
            label: "Advanced Facilities for Trusted Care",
            path: "/treatments#advanced",
            submenu: [
              {
                label: "Class-1000 Modular Lab",
                path: "/treatments/advanced/class-1000-modular-lab/",
              },
              {
                label: "Trigas Incubators",
                path: "/treatments/advanced/trigas-incubators/",
              },
              {
                label: "Witness System",
                path: "/treatments/advanced/witness-system/",
              },
              {
                label: "Cryopreservation",
                path: "/treatments/advanced/cryopreservation/",
              },
            ],
          },
        ],
      },
      {
        links: [
          {
            label: "Infertility Treatments",
            path: "/treatments#infertility",
            submenu: [
              {
                label: "Ovulation Induction",
                path: "/treatments/infertility/ovulation-induction/",
              },
              {
                label: "IUI",
                path: "/treatments/infertility/artificial-insemination-iui-treatment/",
              },
              {
                label: "IVF",
                path: "/treatments/infertility/ivf-comprehensive-in-vitro-fertilization-treatment/",
              },
              {
                label: "IVF-ICSI ",
                path: "/treatments/infertility/ivf-icsi-intracytoplasmic-sperm-injection/",
              },
              {
                label: "Frozen Embryo Transfer",
                path: "/treatments/infertility/frozen-embryo-transfer/",
              },
              {
                label: "Fertility Surgery  ",
                path: "/treatments/infertility/fertility-surgery/",
              },
            ],
          },
          {
            label: "Fertility Preservation",
            path: "/treatments#preservation",
            submenu: [
              {
                label: "Female Fertility Preservation",
                path: "/treatments/preservation/female-fertility-preservation/",
              },
              {
                label: "Male Fertility Preservation",
                path: "/treatments/preservation/male-fertility-preservation/",
              },
              {
                label: "Embryo Preservation",
                path: "/treatments/preservation/egg-embryo-freezing/",
              },
            ],
          },
          {
            label: "Fertility Evaluation",
            path: "/treatments#evaluation",
            submenu: [
              {
                label: "Female Analysis-Complete Reproductive Health Check",
                path: "/treatments/evaluation/female-fertility-check/",
              },
              {
                label: "Male Analysis – Advanced Sperm Testing",
                path: "/treatments/evaluation/semen-analysis/",
              },
            ],
          },
        ],
      },
      {
        title: "Quick Links",
        links: [
          {
            label: "+91 70309 44041",
            path: "tel:+917030944041",
            isPhone: true,
          },
          {
            label: "+91 94239 71260",
            path: "tel:+919423971260",
            isWhatsapp: true,
          },
          {
            label: "Online Consultation",
            path: "/online-consultations",
            isarrow: true,
          },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          { label: "Second Opinion", path: "/second-opinion", isarrow: true },
          {
            label: "International Patients",
            path: "/international-patient",
            isarrow: true,
          },
        ],
      },
    ],
  },
};

/* -------------------- DROPDOWN DATA -------------------- */
const megaMenuData: Record<string, any> = {
  "About Us": {
    image: "/Navbar/about-new.png",
    columns: [
      {
        title: "About Us",
        links: [
          // { label: "Why Progenesis", path: "/about-progenesis#why-1" },
          { label: "About Us", path: "/about-progenesis" },
          { label: "Our Approach", path: "/about-progenesis#our-approach" },
          {
            label: "Our Vision & Mission",
            path: "/about-progenesis#our-vision",
          },
          { label: "Why choose us", path: "/about-progenesis#why-choose-us" },
          { label: "Leadership Team", path: "/about-progenesis/leadership-team" },
          // { label: "Impact & Growth", path: "/about-progenesis#impact-growth" },
          { label: "FAQs", path: "/about-progenesis#faqs" },
          { label: "Careers", path: "/careers" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Book Appointment", path: "/appointment", isButton: true },
          {
            label: "+91 70309 44041",
            path: "tel:+917030944041",
            isPhone: true,
          },
          {
            label: "+91 94239 71260",
            path: "tel:+919423971260",
            isWhatsapp: true,
          },
          // { label: "Take a Quiz", path: "/quiz", isarrow: true },
          // { label: "Online Consult", path: "/online-consult", isarrow: true },
          // { label: "EMI Options", path: "/emi-options", isarrow: true },
        ],
      },
      {
        links: [
          // { label: "Fellowship", path: "/fellowship", isarrow: true },
          { label: "Our Centers", path: "/our-center", isarrow: true },
          { label: "Second Opinion", path: "/second-opinion", isarrow: true },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          {
            label: "International Patients",
            path: "/international-patient",
            isarrow: true,
          },
          {
            label: "Online Consultation",
            path: "/online-consultations",
            isarrow: true,
          },
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
            label: "What is Infertility",
            path: "/infertility#about",
            // submenu: [
            //   { label: "Overview", path: "/infertility#about" },
            //   { label: "Symptoms", path: "/infertility#about" },
            //   { label: "Diagnosis", path: "/infertility#about" },
            //   { label: "Treatment Options", path: "/infertility#about" },
            // ],
          },
          {
            label: "Female Infertility Causes",
            path: "/infertility#fertility-section",
            submenu: [
              {
                label: "Repeated IUI Failures",
                path: "/infertility/female/repeated-iui-failures/",
              },
              {
                label: "Repeated IVF Failures",
                path: "/infertility/female/repeated-ivf-failures/",
              },
              {
                label: "Pregnancy after Menopause",
                path: "/infertility/female/pregnancy-after-menopause/",
              },
              { label: "Low AMH", path: "/infertility/female/low-amh/" },
              { label: "PCOS", path: "/infertility/female/pcos/" },
              {
                label: "Tubal Blockage",
                path: "/infertility/female/tubal-blockage/",
              },
              { label: "Fibroids", path: "/infertility/female/fibroids/" },
              {
                label: "Endometriosis",
                path: "/infertility/female/endometriosis/",
              },
            ],
          },
          {
            label: "Male Infertility Causes",
            path: "/infertility#fertility-mini-section",
            submenu: [
              { label: "Azoospermia", path: "/infertility/male/azoospermia/" },
              {
                label: "Low Sperm Count",
                path: "/infertility/male/low-sperm-count/",
              },
              {
                label: "Erectile Dysfunction (ED)",
                path: "/infertility/male/erectile-dysfunction/",
              },
            ],
          },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Book Appointment", path: "/appointment", isButton: true },
          {
            label: "+91 70309 44041",
            path: "tel:+917030944041",
            isPhone: true,
          },
          {
            label: "+91 94239 71260",
            path: "tel:+919423971260",
            isWhatsapp: true,
          },
          // { label: "Take a Quiz", path: "/quiz", isarrow: true },
          // { label: "Online Consult", path: "/online-consult", isarrow: true },
          // { label: "EMI Options", path: "/emi-options", isarrow: true },
        ],
      },
      {
        links: [
          { label: "Our Centers", path: "/our-center", isarrow: true },
          { label: "Second Opinion", path: "/second-opinion", isarrow: true },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          {
            label: "International Patients",
            path: "/international-patient",
            isarrow: true,
          },
          {
            label: "Online Consultation",
            path: "/online-consultations",
            isarrow: true,
          },
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
            label: "Mumbai",
            path: "/mumbai",
            submenu: centersData
              .filter((center) => center.city === "Mumbai")
              .map((center) => ({
                label: center.name,
                path: `/our-center/${center.slug}`,
              })),
          },
        ],
      },
      {
        links: centersData
          .filter((center) => center.city !== "Mumbai")
          .map((center) => ({
            label: center.name,
            path: `/our-center/${center.slug}`,
          })),
      },
      {
        links: [
          { label: "Our Centers", path: "/our-center", isarrow: true },
          { label: "Second Opinion", path: "/second-opinion", isarrow: true },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          {
            label: "International Patients",
            path: "/international-patient",
            isarrow: true,
          },
          {
            label: "Online Consultation",
            path: "/online-consultations",
            isarrow: true,
          },
        ],
      },
    ],
  },
  Treatments: {
    image: "/Navbar/treatments.png",
    columns: [
      {
        title: "Fertility Solutions",
        links: [
          { label: "Your Path to Parenthood", path: "/treatments#path" },
          {
            label: "Advanced Infertility Treatments",
            path: "/treatments#advanced",
            submenu: [
              {
                label: "IMSI – High-Resolution Sperm Selection",
                path: "/treatments/advanced/imsi",
              },
              {
                label: "PICSI – Physiological ICSI",
                path: "/treatments/advanced/picsi",
              },
              {
                label: "LAH – Laser Assisted Hatching",
                path: "/treatments/advanced/lah",
              },
              {
                label: "Blastocyst Transfer – Stronger Embryo Transfer",
                path: "/treatments//advanced/blastocyst-transfer",
              },
              {
                label: "Sequential Embryo Transfer – Two-Stage Transfer",
                path: "/treatments/advanced/sequential-embryo-transfer/",
              },
              {
                label: "PGD/PGS/PGT-A – Genetic Screening",
                path: "/treatments/advanced/pgd-pgs-pgt-a/",
              },
            ],
          },
          {
            label: "Advanced Facilities for Trusted Care",
            path: "/treatments#advanced",
            submenu: [
              {
                label: "Class-1000 Modular Lab",
                path: "/treatments/advanced/class-1000-modular-lab/",
              },
              {
                label: "Trigas Incubators",
                path: "/treatments/advanced/trigas-incubators/",
              },
              {
                label: "Witness System",
                path: "/treatments/advanced/witness-system/",
              },
              {
                label: "Cryopreservation",
                path: "/treatments/advanced/cryopreservation/",
              },
            ],
          },
        ],
      },
      {
        links: [
          {
            label: "Infertility Treatments",
            path: "/treatments#infertility",
            submenu: [
              {
                label: "Ovulation Induction",
                path: "/treatments/infertility/ovulation-induction/",
              },
              {
                label: "IUI",
                path: "/treatments/infertility/artificial-insemination-iui-treatment/",
              },
              {
                label: "IVF",
                path: "/treatments/infertility/ivf-comprehensive-in-vitro-fertilization-treatment/",
              },
              {
                label: "IVF-ICSI ",
                path: "/treatments/infertility/ivf-icsi-intracytoplasmic-sperm-injection/",
              },
              {
                label: "Frozen Embryo Transfer",
                path: "/treatments/infertility/frozen-embryo-transfer/",
              },
              {
                label: "Fertility Surgery  ",
                path: "/treatments/infertility/fertility-surgery/",
              },
            ],
          },
          {
            label: "Fertility Preservation",
            path: "/treatments#preservation",
            submenu: [
              {
                label: "Female Fertility Preservation",
                path: "/treatments/preservation/female-fertility-preservation/",
              },
              {
                label: "Male Fertility Preservation",
                path: "/treatments/preservation/male-fertility-preservation/",
              },
              {
                label: "Embryo Preservation",
                path: "/treatments/preservation/egg-embryo-freezing/",
              },
            ],
          },
          {
            label: "Fertility Evaluation",
            path: "/treatments#evaluation",
            submenu: [
              {
                label: "Female Analysis-Complete Reproductive Health Check",
                path: "/treatments/evaluation/female-fertility-check/",
              },
              {
                label: "Male Analysis – Advanced Sperm Testing",
                path: "/treatments/evaluation/semen-analysis/",
              },
            ],
          },
        ],
      },
      {
        links: [
          { label: "Our Centers", path: "/our-center", isarrow: true },
          { label: "Second Opinion", path: "/second-opinion", isarrow: true },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          {
            label: "International Patients",
            path: "/international-patient",
            isarrow: true,
          },
          {
            label: "Online Consultation",
            path: "/online-consultations",
            isarrow: true,
          },
        ],
      },
    ],
  },
};

/* -------------------- MEGA MENU -------------------- */
const MegaMenu = ({
  menu,
  onBookAppointment,
}: {
  menu: any;
  onBookAppointment: (e: React.MouseEvent) => void;
}) => {
  const [expandedLink, setExpandedLink] = useState<string | null>("Mumbai");
  if (!menu) return null;

  return (
    <div
      className="fixed left-1/2 top-[100px] -translate-x-1/2 
                    bg-white shadow-lg rounded-2xl z-50 
                    w-[90vw] max-w-[1646px] flex gap-8 p-6"
    >
      {/* Left Image */}
      {menu.image && (
        <div
          className="
      hidden sm:block
      w-[200px] sm:w-[250px] md:w-[300px] lg:w-[300px]
      flex-shrink-0
      transition-all duration-300
      [@media(min-width:1920px)]:w-[500px]
    "
        >
          <Image
            src={menu.image}
            alt="menu-img"
            width={500}
            height={500}
            className="w-full h-auto object-contain rounded-lg"
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
                <h3 className="text-[28px] font-normal leading-normal tracking-[-0.56px] text-[#2C2C2C] font-[Manrope] mb-[15px]">
                  {col.title}
                </h3>
              )}
              <ul className="space-y-2 w-[240px] text-left">
                {col.links.map((link: any, i: number) => (
                  <li
                    key={i}
                    className="
    mb-4 

  "
                  >
                    {link.isButton ? (
                      // ✅ BOOK APPOINTMENT BUTTON
                      <button
                        onClick={onBookAppointment}
                        className="
            flex items-center justify-center gap-2
            w-full px-4 py-[10px] rounded-[8px]
            bg-[#1656A5] text-white font-[Manrope] text-[14px] font-semibold leading-[24px] tracking-[-0.28px]
            hover:bg-[#12498C] transition cursor-pointer
          "
                      >
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="shrink-0"
                        >
                          <path
                            d="M1.37624 5.5498L10.0103 5.6986M10.0103 5.6986L5.56228 1.36376M10.0103 5.6986L5.76761 9.94124"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    ) : link.isPhone ? (
                      // ✅ PHONE LINK
                      <a
                        href={link.path}
                        className="
            flex items-center gap-3 w-full
            bg-[rgba(22,86,165,0.10)] rounded-[8px]
            px-4 py-[10px]
            text-[#606060] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
            hover:bg-[rgba(22,86,165,0.15)] transition
          "
                      >
                        <span className="flex items-center justify-center w-[24px] h-[24px] shrink-0">
                          {/* YOUR ORIGINAL PHONE SVG */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                          >
                            <path
                              d="M15.675 17.3415C13.9778 17.3415 12.2128 16.8947 10.3802 16.0009C8.54757 15.1072 6.83229 13.8568 5.23437 12.2499C3.63646 10.6429 2.39062 8.92765 1.49687 7.10404C0.603125 5.28043 0.15625 3.52001 0.15625 1.82279C0.15625 1.49002 0.264583 1.21278 0.48125 0.991057C0.697917 0.769154 0.96875 0.658203 1.29375 0.658203H3.46042C3.76736 0.658203 4.03368 0.752995 4.25937 0.942578C4.48507 1.13216 4.64305 1.38043 4.73333 1.68737L5.22083 3.9082C5.275 4.21515 5.26597 4.48598 5.19375 4.7207C5.12153 4.95543 4.99514 5.14501 4.81458 5.28945L2.5125 7.37487C2.98194 8.22348 3.49201 9.00438 4.04271 9.71758C4.5934 10.4308 5.17569 11.1033 5.78958 11.7353C6.43958 12.3853 7.14375 12.9901 7.90208 13.5499C8.66042 14.1096 9.5 14.6422 10.4208 15.1478L12.6687 12.8457C12.8493 12.6471 13.0434 12.5207 13.251 12.4665C13.4587 12.4124 13.6979 12.4033 13.9687 12.4395L15.8104 12.8186C16.1174 12.8908 16.3656 13.0443 16.5552 13.279C16.7448 13.5138 16.8396 13.7846 16.8396 14.0915V16.204C16.8396 16.529 16.7286 16.7999 16.5067 17.0165C16.285 17.2332 16.0078 17.3415 15.675 17.3415ZM2.16042 6.6707L4.32708 4.7207C4.41736 4.64848 4.47604 4.54918 4.50313 4.42279C4.53021 4.2964 4.52569 4.17904 4.48958 4.0707L4.00208 1.84987C3.96597 1.70543 3.90278 1.59709 3.8125 1.52487C3.72222 1.45265 3.60486 1.41654 3.46042 1.41654H1.29375C1.18542 1.41654 1.09514 1.45265 1.02292 1.52487C0.950694 1.59709 0.914583 1.68737 0.914583 1.7957C0.914583 2.53598 1.02743 3.3214 1.25312 4.15195C1.47882 4.98251 1.78125 5.82209 2.16042 6.6707ZM11.1521 15.4999C11.8924 15.879 12.6913 16.1544 13.549 16.3259C14.4066 16.4974 15.1243 16.5832 15.7021 16.5832C15.8104 16.5832 15.9007 16.5471 15.9729 16.4749C16.0451 16.4026 16.0812 16.3124 16.0812 16.204V14.0915C16.0812 13.9471 16.0451 13.8297 15.9729 13.7395C15.9007 13.6492 15.7924 13.586 15.6479 13.5499L13.8062 13.1707C13.6979 13.1346 13.6031 13.1301 13.5219 13.1572C13.4406 13.1842 13.3549 13.2429 13.2646 13.3332L11.1521 15.4999Z"
                              fill="#1C1B1F"
                            />
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
                            text-[#606060] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
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
                              <rect
                                x="0.5"
                                width="26"
                                height="26"
                                fill="#D9D9D9"
                              />
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
            hover:text-[#1656A5] rounded-[8px] transition-all duration-200 hover:bg-[rgba(22,86,165,0.10)] hover:px-4 hover:py-[10px]"
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
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <div
                        className="relative transition-all duration-150"
                        onMouseEnter={() => setExpandedLink(link.label)}
                        onMouseLeave={() => {
                          // Clear the expanded link, but Mumbai will stay visible via the render condition
                          if (link.label !== "Mumbai") {
                            setExpandedLink(null);
                          }
                        }}
                      >
                        <Link
                          href={link.path}
                          className="block text-[#2C2C2C] font-[Manrope] text-[14px] leading-[24px] tracking-[-0.28px] hover:text-[#1656A5] w-full flex items-center gap-2 rounded-[8px] transition-all duration-200 hover:bg-[rgba(22,86,165,0.10)] hover:px-4 hover:py-[10px]"
                        >
                          {link.label}
                        </Link>

                        {/* ✅ Submenu opens below on hover, no overlap */}
                        {link.submenu &&
                          (expandedLink === link.label ||
                            link.label === "Mumbai") && (
                            <ul className="pl-4 mt-2 space-y-1 transition-all duration-200 ease-in-out">
                              {link.submenu.map(
                                (sublink: any, subIdx: number) => (
                                  <li key={subIdx}>
                                    <Link
                                      href={sublink.path}
                                      className="block text-[#555] font-[Manrope] text-[14px] leading-[22px] hover:text-[#1656A5] transition-all duration-150"
                                    >
                                      {sublink.label}
                                    </Link>
                                  </li>
                                ),
                              )}
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

/* -------------------- NAVBAR -------------------- */
export default function Navbar({ doctors }: { doctors: Doctor[] }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(
    null,
  );
  const [activeMobileSubmenuItem, setActiveMobileSubmenuItem] = useState<
    string | null
  >(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);
  console.log("Hello doc", doctors);

  // Prevent background scrolling on mobile (especially iOS/iPhone)
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Apply styles to prevent scrolling (works on iOS)
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        // Restore body styles
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobileMenuOpen]);

  const pathname = usePathname();

  // ─── NAVBAR SHOW/HIDE ON SCROLL ────────────────────────
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

      // Only hide/show navbar on home page
      if (pathname === "/") {
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
      } else {
        // Always show navbar on other pages
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
  }, [isMobileMenuOpen, isSearchOpen, pathname]);
  // ────────────────────────────────────────────────────────────

  // Close mobile menu automatically on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setOpenMenu(null);
    document.body.style.overflow = "";
  }, [pathname]);

  const closeTimeoutRef = useRef<number | null>(null);

  const navigationItems = [
    { label: "About Us", path: "/about-progenesis", hasMegaMenu: true },
    { label: "Infertility Issues", path: "/infertility", hasMegaMenu: true },
    { label: "Our Centers", path: "/our-center", hasMegaMenu: true },
    { label: "Treatments", path: "/treatments", hasMegaMenu: true },
    { label: "Doctors", path: "/doctors", hasMegaMenu: false },
    { label: "Patient Resources", path: "/blog", hasMegaMenu: false },
  ];

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => setOpenMenu(null), 200);
  };

  const handleBookAppointment = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenMenu(null); // Close any open dropdown
    setIsMobileMenuOpen(false); // Close mobile menu if open
    setIsAppointmentFormOpen(true); // Open appointment form
  };

  return (
    <>
      <header
        className={`${pathname === "/" ? "sticky" : "relative"} top-0 left-0 right-0 z-50 w-full bg-white font-sans shadow-sm`}
      >
        {/* NAVBAR */}
        {!isSearchOpen && (
          <div className=" mx-auto flex items-center justify-between h-20 px-6   csLg:px-[120px]">
            <Link href="/" className="w-[150px] h-[40px] relative">
              <Image
                src="/logo1.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </Link>

            {/* NAV LINKS */}
            <nav className="hidden lg:flex items-center space-x-6 lg:space-x-2 xl:space-x-6">
              {navigationItems.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.path}
                    className={`flex items-center gap-1 px-2 lg:px-1 xl:px-3 py-2 rounded-md text-sm 2xl:text-lg transition
                    ${
                      pathname === item.path || openMenu === item.label
                        ? "bg-[#1656A5] text-white"
                        : "text-gray-700 hover:bg-[#1656A5] hover:text-white"
                    }`}
                  >
                    {item.label}
                    {item.hasMegaMenu && <ChevronDown size={18} />}
                  </Link>

                  {item.hasMegaMenu && openMenu === item.label && (
                    <MegaMenu
                      menu={(megaMenuData as any)[item.label]}
                      onBookAppointment={handleBookAppointment}
                    />
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT ICONS: SEARCH + MENU */}
            <div className="flex items-center gap-2">
              {/* SEARCH BUTTON */}
              {/* ✅ SEARCH BUTTON (Visible on all screen sizes) */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
                className="cursor-pointer flex items-center justify-center h-10 w-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 11.5C19 12.9834 18.5601 14.4334 17.736 15.6668C16.9119 16.9001 15.7406 17.8614 14.3701 18.4291C12.9997 18.9967 11.4917 19.1453 10.0368 18.8559C8.58197 18.5665 7.2456 17.8522 6.1967 16.8033C5.14781 15.7544 4.4335 14.418 4.14411 12.9632C3.85472 11.5083 4.00325 10.0003 4.57091 8.62987C5.13856 7.25943 6.09986 6.08809 7.33323 5.26398C8.56659 4.43987 10.0166 4 11.5 4C13.4891 4 15.3968 4.79018 16.8033 6.1967C18.2098 7.60322 19 9.51087 19 11.5V11.5Z"
                    stroke="#606060"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 20L19 19"
                    stroke="#606060"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* MENU BUTTON */}
              <button
                className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        )}

        {/* SEARCH SECTION */}
        {isSearchOpen && (
          <SearchSection
            onClose={() => setIsSearchOpen(false)}
            doctors={doctors}
          />
        )}
        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col">
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 shadow-[0_4px_4px_rgba(0,0,0,0.03)]">
              {/* ✅ LEFT SIDE: Logo OR Back button */}
              {!activeMobileSubmenu ? (
                // Show Logo when no submenu
                <Link href="/" className="w-[130px] h-[35px] relative">
                  <Image
                    src="/logo1.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
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
                      fill="#D9D9D9"
                    />
                  </g>
                </svg>
              </button>
            </div>

            {/* LINKS */}
            <div className="flex-1 overflow-y-auto px-4 py-4 pb-28 divide-y divide-[#EDEDED] overscroll-contain">
              {/* MAIN MENU */}
              {!activeMobileSubmenu ? (
                <>
                  {navigationItems.map((item, idx) => (
                    <div key={idx}>
                      <button
                        onClick={() => {
                          if (item.hasMegaMenu) {
                            setActiveMobileSubmenu(item.label);
                          } else {
                            setIsMobileMenuOpen(false);
                            window.location.href = item.path; // ✅ instant redirect
                          }
                        }}
                        className={`w-full flex items-center justify-between py-3 font-[Manrope] text-[20px] font-normal tracking-[-0.4px]
    ${activeMobileSubmenu === item.label ? "text-[#1656A5]" : "text-[#7E7E7E]"}
    hover:text-[#1656A5] transition-colors duration-200`}
                      >
                        {item.label}

                        {item.hasMegaMenu && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 25"
                            fill="none"
                            className="w-[24px] h-[24px] flex-shrink-0"
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
                            <g
                              mask={`url(#mask_${item.label.replace(/\s+/g, "_")})`}
                            >
                              <path
                                d="M16 12.5L7.80357 20.5L7 19.7157L14.3929 12.5L7 5.28431L7.80357 4.5L16 12.5Z"
                                fill={
                                  activeMobileSubmenu === item.label
                                    ? "#1656A5"
                                    : "#7E7E7E"
                                }
                                className="transition-colors duration-200 group-hover:fill-[#1656A5]"
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
                  <div className="p-1 space-y-6">
                    {(megaMenuDataMobile[activeMobileSubmenu] ||
                      megaMenuData[activeMobileSubmenu]) && (
                      <>
                        {(
                          megaMenuDataMobile[activeMobileSubmenu] ||
                          megaMenuData[activeMobileSubmenu]
                        ).columns.map((col: any, i: number) => {
                          const highlightedSections = [
                            "Discover Us",
                            "Know Infertility",
                            "Where We Are",
                            "Fertility Solutions",
                          ];
                          const isHighlighted = highlightedSections.includes(
                            col.title,
                          );

                          return (
                            <div
                              key={i}
                              className={`
                                  rounded-[8px] mb-6
                                  ${
                                    col.title === "Quick Links"
                                      ? "bg-transparent p-0" // No background, no padding
                                      : isHighlighted
                                        ? "bg-[#F3F8FF]"
                                        : "bg-transparent"
                                  }
                                  ${i === 0 ? "p-[16px]" : ""} // example: remove padding for 3rd item
                                `}
                            >
                              {col.title && (
                                <h3
                                  className={`font-[Manrope] mb-4 ${
                                    col.title === "Quick Links"
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
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                        className="flex items-center hidden justify-center gap-2 w-full py-[10px] rounded-[8px] bg-[#1656A5] text-white font-[Manrope] text-[14px] font-semibold leading-[24px] tracking-[-0.28px] hover:bg-[#12498C] transition"
                                      >
                                        {link.label}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="12"
                                          height="12"
                                          viewBox="0 0 12 12"
                                          fill="none"
                                        >
                                          <path
                                            d="M1.37624 5.5498L10.0103 5.6986M10.0103 5.6986L5.56228 1.36376M10.0103 5.6986L5.76761 9.94124"
                                            stroke="white"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </Link>
                                    ) : link.isPhone ? (
                                      /* 📞 PHONE LINK */
                                      <a
                                        href={link.path}
                                        className="inline-flex items-center gap-2 px-3 py-[6px] rounded-[8px]
             bg-[rgba(22,86,165,0.10)]
             text-[#606060] font-[Manrope] text-[14px] font-medium leading-[20px] tracking-[-0.28px]
             hover:bg-[rgba(22,86,165,0.15)] transition"
                                      >
                                        {/* Phone SVG (same as desktop) */}
                                        <span className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <path
                                              d="M20.675 21.3417C18.9778 21.3417 17.2128 20.8948 15.3802 20.001C13.5476 19.1073 11.8323 17.8569 10.2344 16.25C8.63646 14.643 7.39062 12.9278 6.49687 11.1042C5.60313 9.28055 5.15625 7.52013 5.15625 5.82291C5.15625 5.49014 5.26458 5.2129 5.48125 4.99118C5.69792 4.76928 5.96875 4.65833 6.29375 4.65833H8.46042C8.76736 4.65833 9.03368 4.75312 9.25937 4.9427C9.48507 5.13228 9.64305 5.38055 9.73333 5.68749L10.2208 7.90832C10.275 8.21527 10.266 8.4861 10.1937 8.72082C10.1215 8.95555 9.99514 9.14513 9.81458 9.28958L7.5125 11.375C7.98194 12.2236 8.49201 13.0045 9.04271 13.7177C9.5934 14.4309 10.1757 15.1035 10.7896 15.7354C11.4396 16.3854 12.1437 16.9903 12.9021 17.55C13.6604 18.1097 14.5 18.6424 15.4208 19.1479L17.6687 16.8458C17.8493 16.6472 18.0434 16.5208 18.251 16.4667C18.4587 16.4125 18.6979 16.4035 18.9687 16.4396L20.8104 16.8187C21.1174 16.891 21.3656 17.0444 21.5552 17.2792C21.7448 17.5139 21.8396 17.7847 21.8396 18.0917V20.2042C21.8396 20.5292 21.7286 20.8 21.5067 21.0167C21.285 21.2333 21.0078 21.3417 20.675 21.3417Z"
                                              fill="#606060"
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
             text-[#606060] font-[Manrope] text-[14px] font-medium leading-[20px] tracking-[-0.28px]
             hover:bg-[rgba(22,86,165,0.15)] transition"
                                      >
                                        {/* WhatsApp SVG */}
                                        <span className="w-[24px] h-[24px] shrink-0 flex items-center justify-center">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 27 26"
                                            fill="none"
                                          >
                                            <path
                                              d="M21.5497 9.57082C21.0872 8.54894 20.4234 7.63148 19.5805 6.84082C18.7376 6.05763 17.7605 5.43853 16.6715 5.00591C15.5452 4.55837 14.3517 4.33459 13.121 4.33459C11.8902 4.33459 10.6968 4.55837 9.57048 5.00591C8.48146 5.43853 7.50433 6.05017 6.66146 6.84082C5.81859 7.63148 5.15475 8.54894 4.69229 9.57082C4.21491 10.63 3.96875 11.7638 3.96875 12.9274C3.96875 14.9637 4.72956 16.918 6.1244 18.4694L5.3785 22.5346L9.34671 20.7668C10.5327 21.274 11.7933 21.5276 13.1135 21.5276C14.3442 21.5276 15.5377 21.3039 16.664 20.8563C17.753 20.4237 18.7302 19.8121 19.573 19.0214C20.4159 18.2307 21.0797 17.3133 21.5422 16.2914C22.0196 15.2322 22.2657 14.0984 22.2657 12.9348C22.2732 11.7638 22.027 10.6375 21.5497 9.57082Z"
                                              stroke="#606060"
                                              strokeWidth="0.7"
                                            />
                                            <path
                                              d="M16.8348 14.6452C16.4469 14.4513 16.1635 14.3319 15.9621 14.2574C15.8353 14.2126 15.5369 14.0783 15.4325 14.1604C15.1043 14.4289 14.7537 15.1897 14.3808 15.3315C13.4558 15.1524 12.5981 14.5184 11.9268 13.8695C11.6284 13.586 11.0764 12.7805 10.9571 12.5642C10.9347 12.3404 11.3375 12.042 11.427 11.8705C11.8894 11.3483 11.5389 11.0201 11.4792 10.8038C11.3748 10.5801 11.1958 10.1773 11.0391 9.84908C10.9049 9.63277 10.875 9.31203 10.6363 9.19268C9.6219 8.67055 9.04012 9.71482 8.80143 10.2593C7.36184 13.7278 16.0143 20.329 17.7746 15.779C17.8641 15.3837 17.8268 15.2345 17.6926 15.0555C17.424 14.869 17.1108 14.7869 16.8348 14.6452Z"
                                              stroke="#606060"
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
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
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
                                            stroke="#606060"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </Link>
                                    ) : /* Default / with submenu support for mobile */
                                    link.submenu ? (
                                      // Render a button that toggles showing the submenu items in mobile
                                      <div>
                                        <button
                                          type="button"
                                          onClick={() =>
                                            setActiveMobileSubmenuItem(
                                              activeMobileSubmenuItem ===
                                                link.label
                                                ? null
                                                : link.label,
                                            )
                                          }
                                          className="w-full flex items-center justify-between px-0 py-2 text-left text-[#2c2c2c] text-[14px] font-[Manrope] hover:text-[#1656A5] transition"
                                          aria-expanded={
                                            activeMobileSubmenuItem ===
                                            link.label
                                          }
                                          aria-controls={`mobile-submenu-${j}`}
                                        >
                                          <span>{link.label}</span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className={`transform transition-transform duration-200 ${activeMobileSubmenuItem === link.label ? "rotate-90" : "rotate-0"}`}
                                          >
                                            <path
                                              d="M9 6L15 12L9 18"
                                              stroke="#7E7E7E"
                                              strokeWidth="1.6"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </button>

                                        {/* Collapsible submenu */}
                                        {activeMobileSubmenuItem ===
                                          link.label && (
                                          <ul
                                            id={`mobile-submenu-${j}`}
                                            className="mt-2 pl-4 space-y-2"
                                          >
                                            {link.submenu.map(
                                              (
                                                sublink: any,
                                                subIdx: number,
                                              ) => (
                                                <li key={subIdx}>
                                                  <Link
                                                    href={sublink.path}
                                                    onClick={() => {
                                                      setIsMobileMenuOpen(
                                                        false,
                                                      );
                                                      setActiveMobileSubmenu(
                                                        null,
                                                      );
                                                      setActiveMobileSubmenuItem(
                                                        null,
                                                      );
                                                    }}
                                                    className="block text-[#2c2c2c] text-[14px] font-[Manrope] hover:text-[#1656A5] transition px-2 py-1"
                                                  >
                                                    {sublink.label}
                                                  </Link>
                                                </li>
                                              ),
                                            )}
                                          </ul>
                                        )}
                                      </div>
                                    ) : (
                                      // unchanged default link behavior for items without submenu
                                      <Link
                                        href={link.path}
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                        className="block text-[#2c2c2c] text-[14px] font-[Manrope] hover:text-[#1656A5] transition"
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

            {/* FOOTER BUTTONS - Fixed at bottom of mobile menu */}
            <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-[#EDEDED] shadow-[0_-2px_10px_rgba(0,0,0,0.05)] mt-auto">
              <div className="flex justify-between items-center px-[16px] py-[16px] gap-3">
                {/* Book Appointment Button */}
                <button
                  onClick={handleBookAppointment}
                  className="
        flex items-center justify-center
        px-[16px] py-[10px]
        rounded-[8px]
        bg-[#1656A5]
        text-[#F9F9F9]
        font-[Manrope] text-[12px] font-medium leading-[20px] tracking-[-0.24px]
        whitespace-nowrap
        transition-all duration-200
        hover:bg-[#0E3E7A]
        focus:outline-none focus:ring-2 focus:ring-[#1656A5]/40
        cursor-pointer
        active:scale-95
      "
                >
                  Book Your Appointment
                </button>

                {/* Find My Right Treatment Button */}
                <Link
                  href="/treatments"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
        flex items-center justify-center
        px-[16px] py-[10px]
        rounded-[8px]
        border border-[#1656A5]
        text-[#1656A5]
        font-[Manrope] text-[12px] font-medium leading-[20px] tracking-[-0.24px]
        whitespace-nowrap
        transition-all duration-200
        hover:bg-[#1656A5] hover:text-[#F9F9F9]
        focus:outline-none focus:ring-2 focus:ring-[#1656A5]/30
        active:scale-95
      "
                >
                  Find My Right Treatment
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {isAppointmentFormOpen && (
        <Suspense
          fallback={
            <div className="w-full h-64 flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <AppointmentForm onClose={() => setIsAppointmentFormOpen(false)} />
        </Suspense>
      )}
    </>
  );
}
