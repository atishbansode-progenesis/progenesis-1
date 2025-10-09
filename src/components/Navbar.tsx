// "use client";
// import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Search, X, ChevronDown, Phone } from "lucide-react";
// import { centersData } from "@/page-components/centers/CenterCard";
// /* -------------------- SEARCH SECTION -------------------- */
// export function SearchSection({ onClose }: { onClose: () => void }) {
//   const [activeStep, setActiveStep] = useState<"what" | "where" | "who">("what");
//   const [isMobile, setIsMobile] = useState(false);
//   const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({
//     what: null,
//     where: null,
//     who: null,
//   });
//   const [popupPosition, setPopupPosition] = useState<{ left: number; top: number } | null>(null);

//   const updatePopupPosition = (step: "what" | "where" | "who") => {
//     const button = buttonRefs.current[step];
//     if (button) {
//       const rect = button.getBoundingClientRect();
//       const isMobileView = window.innerWidth < 768;
//       setIsMobile(isMobileView);

//       if (isMobileView) {
//         // Center popup on mobile
//         setPopupPosition({
//           left: window.innerWidth / 2,
//           top: rect.bottom + window.scrollY + 20,
//         });
//       } else {
//         // Original behavior for desktop
//         setPopupPosition({
//           left: rect.left + rect.width / 2,
//           top: rect.bottom + window.scrollY + 20,
//         });
//       }
//     }
//   };

//   const handleStepClick = (step: "what" | "where" | "who") => {
//     setActiveStep(step);
//     updatePopupPosition(step);
//   };

//   // ✅ Run synchronously after refs mount and when activeStep changes
//   useLayoutEffect(() => {
//     if (activeStep) {
//       updatePopupPosition(activeStep);
//     }
//   }, [activeStep]);

//   // ✅ Optional: also reposition on resize/scroll so popup never drifts
//   useEffect(() => {
//     const handleResizeOrScroll = () => {
//       if (activeStep) {
//         updatePopupPosition(activeStep);
//       }
//     };
//     window.addEventListener("resize", handleResizeOrScroll);
//     window.addEventListener("scroll", handleResizeOrScroll);
//     return () => {
//       window.removeEventListener("resize", handleResizeOrScroll);
//       window.removeEventListener("scroll", handleResizeOrScroll);
//     };
//   }, [activeStep]);

//   const treatments = [
//     "IVF Treatment",
//     "IUI Procedure",
//     "PCOS",
//     "Irregular Periods",
//     "Repeated Miscarriages",
//     "Infertility Issues",
//     "Pregnancy after Menopause",
//     "Ovulation Induction",
//     "Low AMH",
//     "Fibroids",
//     "Infertility Issues",
//     "Endometriosis",
//     "Low Sperm Count",
//     "Erectile Dysfunction (ED)",
//     "Female Fertility Preservation",
//     "Male Fertility Preservation",
//     "Embryo Preservation",
//     "Blastocyst Transfer",
//   ];
//   const locations = [
//     // { name: "Nearby", desc: "Find clinic around you", icon: "/LocationsSection/Nearby.svg" },
//     { name: "Mumbai", desc: "(Aundh – ITI Rd)", icon: "/LocationsSection/mumbai.png" },
//     { name: "Thane", desc: "(College Rd)", icon: "/LocationsSection/thane.png" },
//     { name: "Pune", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/pune.png" },
//     { name: "Nashik", desc: "(Aundh – ITI Rd)", icon: "/LocationsSection/nasik.png" },
//     { name: "Jalgoan", desc: "(College Rd)", icon: "/LocationsSection/jalgaon.png" },
//     { name: "Navi Mumbai", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/navimumbai.png" },
//     { name: "Palghar", desc: "(Aundh – ITI Rd)", icon: "/LocationsSection/palghar.png" },
//     { name: "Solapur", desc: "(College Rd)", icon: "/LocationsSection/solapur.png" },
//     { name: "Nagpur", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/nagpur.png" },
//     { name: "Kholapur", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/kholapur.png" },
//     { name: "Amravati", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/amravati.png" },
//     { name: "Ahilyanagar", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/ahilyanagar.png" },

//   ];
//   const doctors = [
//     { name: "Dr. Dinesh Wade", role: "Fertility Consultant, Pune", img: "/DoctorsSection/DrDinesh.png" },
//     { name: "Dr. Unnati Mamtora", role: "Fertility Consultant, Borivali", img: "/DoctorsSection/DrUnnati.png" },
//     { name: "Dr. Darshna Wahane", role: "Fertility Consultant, Panvel", img: "/DoctorsSection/DrDarshna.png" },
//     { name: "Dr. Priti Pardeshi", role: "Fertility Consultant, Kalyan", img: "/DoctorsSection/DrPriti.png" },
//   ];
// const filteredTreatments = treatments.filter((t) =>
//   t.toLowerCase().includes(searchTerm.toLowerCase())
// );

// const filteredLocations = locations.filter((l) =>
//   l.name.toLowerCase().includes(searchTerm.toLowerCase())
// );

// const filteredDoctors = doctors.filter((d) =>
//   d.name.toLowerCase().includes(searchTerm.toLowerCase())
// );

//   return (
//     <section className="relative w-full bg-white shadow-md">
//       {/* Search Tabs */}
//       <div className="flex items-center w-full max-w-[1600px] mx-auto px-4 py-4 lg:px-[50px] xl:px-[80px] 2xl:px-[120px] gap-2 relative">
//         <Link href="/" className="w-[150px] h-[40px] relative">
//           <Image src="/logo1.png" alt="Logo" fill className="object-contain" />
//         </Link>

//         {(["what", "where", "who"] as const).map((step) => (
//           <button
//             key={step}
//             ref={(el) => (buttonRefs.current[step] = el)}
//             onClick={() => handleStepClick(step)}
//             className={`flex-1 px-4 py-3 rounded-xl text-left text-sm md:text-base transition
//               ${activeStep === step ? "bg-[#1656A5] text-white" : "bg-gray-100 text-gray-600"}`}
//           >
//             {step === "what" && "What"}
//             {step === "where" && "Where"}
//             {step === "who" && "Who"}
//           </button>
//         ))}

//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="h-[44px] w-[44px] rounded-xl bg-[#1656A5] flex items-center justify-center"
//         >
//           <X size={20} color="#fff" />
//         </button>
//       </div>

//       {/* Popup below active tab */}
//       {activeStep && popupPosition && (
//         <div
//           className="absolute z-50 bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-[400px] max-h-[400px] overflow-y-auto transition-all duration-200"
//           style={{
//             left: popupPosition.left,
//             top: popupPosition.top,
//             transform: isMobile ? "translateX(-50%)" : "translateX(-50%)",
//           }}
//         >
//           {/* {activeStep === "what" && (
//             <div className="grid grid-cols-2 gap-3">
//               {treatments.map((t, i) => (
//                 <button
//                   key={i}
//                   className={`px-4 py-2 rounded-lg border text-sm
//                     ${i === 0 ? "bg-[#1656A5] text-white" : "border-[#1656A5] text-[#1656A5]"}`}
//                 >
//                   {t}
//                 </button>
//               ))}
//             </div>
//           )} */}
//           {activeStep === "what" && (
//   <div className="grid grid-cols-2 gap-3">
//     {filteredTreatments.length > 0 ? (
//       filteredTreatments.map((t, i) => (
//         <button
//           key={i}
//           className={`
//             inline-flex flex-col items-start gap-2 px-3 py-2
//             rounded-[16px] border border-[#1656A5]
//             text-[#1656A5] text-[14px] font-medium leading-[24px] tracking-[-0.28px]
//             font-[Manrope] backdrop-blur-[7.5px] transition-all duration-200
//             hover:bg-[#1656A5] hover:text-white hover:shadow-md
//           `}
//         >
//           {t}
//         </button>
//       ))
//     ) : (
//       <p className="text-gray-500 text-sm col-span-2 text-center">
//         No matching treatments found.
//       </p>
//     )}
//   </div>
// )}


//           {activeStep === "where" && (
//             <div className="space-y-3">
//               {locations.map((l, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
//                 >
//                   <Image
//                     src={l.icon}
//                     alt={l.name}
//                     width={70}
//                     height={70}
//                     className="rounded-md object-cover"
//                   />
//                   <div>
//                     <p className="font-medium text-gray-900">{l.name}</p>
//                     <p className="text-sm text-gray-600">{l.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeStep === "who" && (
//             <div className="space-y-3">
//               {doctors.map((d, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
//                 >
//                   <Image
//                     src={d.img}
//                     alt={d.name}
//                     width={48}
//                     height={48}
//                     className="rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="font-medium text-gray-900">{d.name}</p>
//                     <p className="text-sm text-gray-600">{d.role}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }

// /* -------------------- DROPDOWN DATA -------------------- */
// const megaMenuData: Record<string, any> = {
//   "About Us": {
//     image: "/Navbar/about-image.png",
//     columns: [
//       {
//         title: "Discover Us",
//         links: [
//           { label: "Why Progenesis", path: "/about-us#why-1" },
//           { label: "Our Approach", path: "/about-us#our-approach" },
//           { label: "Our Vision & Mission", path: "/about-us#our-vision" },
//           { label: "Why choose us", path: "/about-us#why-choose-us" },
//           { label: "Leadership Team", path: "/leadership-team" },
//           { label: "Impact & Growth", path: "/about-us#impact-growth" },
//           { label: "FAQs", path: "/about-us#faqs" },
//         ],
//       },
//       {
//         title: "Quick Links",
//         links: [
//           { label: "Book Appointment", path: "/appointment", isButton: true },
//           { label: "+91 94239 71260", path: "tel:+919423971260", isPhone: true },
//           { label: "+91 70309 44041", path: "tel:+917030944041", isWhatsapp: true },
//           { label: "Take a Quiz", path: "/quiz", isarrow: true },
//           { label: "Online Consult", path: "/online-consult", isarrow: true },
//           { label: "EMI Options", path: "/emi-options", isarrow: true },
//         ],
//       },
//       {
//         links: [
//           { label: "Fellowship", path: "/fellowship", isarrow: true },
//           { label: "Our Centers", path: "/centers", isarrow: true },
//           { label: "Our Social Impact", path: "/social-impact", isarrow: true },
//         ],
//       },
//     ],
//   },
//   "Infertility Issues": {
//     image: "/Navbar/infertility-image.png",
//     columns: [
//       {
//         title: "Know Infertility",
//         links: [
//           { label: "What is Infertility", path: "/infertility-issues#what" ,
//             submenu: [
//             { label: "Overview", path: "/infertility-issues/overview" },
//             { label: "Symptoms", path: "/infertility-issues/symptoms" },
//             { label: "Diagnosis", path: "/infertility-issues/diagnosis" },
//             { label: "Treatment Options", path: "/infertility-issues/treatments" },
//           ],
//           },
//           { label: "Female Infertility Causes", path: "/infertility-issues#female" ,
//             submenu: [
//             { label: "Repeated IUI Failures", path: "/infertility-issues/overview" },
//             { label: "Repeated IVF Failures", path: "/infertility-issues/symptoms" },
//             { label: "Pregnancy after Menopause", path: "/infertility-issues/diagnosis" },
//             { label: "Low AMH", path: "/infertility-issues/treatments" },
//             { label: "PCOS", path: "/infertility-issues/treatments" },
//             { label: "Tubal Blockage", path: "/infertility-issues/treatments" },
//             { label: "Fibroids", path: "/infertility-issues/treatments" },
//             { label: "Endometriosis", path: "/infertility-issues/treatments" },
//           ],
//           },
//           { label: "Male Infertility Causes", path: "/infertility-issues#male",
//             submenu: [
//             { label: "Azoospermia", path: "/infertility-issues/overview" },
//             { label: "Low Sperm Count", path: "/infertility-issues/symptoms" },
//             { label: "Erectile Dysfunction (ED)", path: "/infertility-issues/diagnosis" },
//           ],
//            },
//           { label: "Real Stories. Real Miracles.", path: "/stories" },
//         ],
//       },
//       {
//         title: "Quick Links",
//         links: [
//           { label: "Book Appointment", path: "/appointment", isButton: true },
//           { label: "+91 94239 71260", path: "tel:+919423971260", isPhone: true },
//           { label: "+91 70309 44041", path: "tel:+917030944041", isWhatsapp: true },
//           { label: "Take a Quiz", path: "/quiz", isarrow: true },
//           { label: "Online Consult", path: "/online-consult", isarrow: true },
//           { label: "EMI Options", path: "/emi-options", isarrow: true },
//         ],
//       },
//       {
//         links: [
//           { label: "Fellowship", path: "/fellowship" ,isarrow: true},
//           { label: "Our Centers", path: "/centers" ,isarrow: true},
//           { label: "Our Social Impact", path: "/social-impact" ,isarrow: true},
//         ],
//       },
//     ],
//   },
//   "Our Centers": {
//     image: "/Navbar/infertility-image.png",
//     columns: [
//       {
//         title: "Where We Are",
//         links: centersData.map((center) => ({
//           label: center.name,
//           path: `/centers/${center.name.toLowerCase()}`,
//         })).slice(0, 9), 
//       },
//       {
//         links: [
//           { label: "Mumbai", path: "/centers/mumbai",
//             submenu: [
//             { label: "Thane", path: "/centers/thane" },
//             { label: "Andheri", path: "/centers/andheri" },
//             { label: "Borivali", path: "/centers/borivali" },
//             { label: "Ghatkopar", path: "/centers/ghatkopar" },
//             { label: "Vashi", path: "/centers/vashi" },
//             { label: "Virar", path: "/centers/virar" },
//             { label: "Kalyan", path: "/centers/kalyan" },
//             { label: "Panvel", path: "/centers/panvel" },
//           ],
//            },
//            { label: "Nashik", path: "/centers/nashik" },
//            { label: "Jalgaon", path: "/centers/jalgaon" },
//           { label: "Ahilyanagar", path: "/centers/ahilyanagar" },
//           { label: "Amravati", path: "/centers/amravati" },
//           { label: "Kolhapur", path: "/centers/kolhapur" },
//           { label: "Nagpur", path: "/centers/nagpur" },
//           { label: "Solapur", path: "/centers/solapur" },
//           { label: "Pune", path: "/centers/pune" },
//         ],
//       },
//       {
//         title: "Quick Links",
//         links: [
//           { label: "Book Appointment", path: "/appointment", isButton: true },
//           { label: "+91 94239 71260", path: "tel:+919423971260", isPhone: true },
//           { label: "+91 70309 44041", path: "tel:+917030944041", isWhatsapp: true },
//           { label: "Take a Quiz", path: "/quiz", isarrow: true },
//           { label: "Online Consult", path: "/online-consult", isarrow: true },
//           { label: "EMI Options", path: "/emi-options", isarrow: true },
//           { label: "Fellowship", path: "/fellowship",isarrow: true },
//           { label: "Our Centers", path: "/centers",isarrow: true },
//           { label: "Our Social Impact", path: "/social-impact" ,isarrow: true},
//         ],
//       },
//     ],
//   },
//   "Treatments": {
//     image: "/Navbar/infertility-image.png",
//     columns: [
//       {
//         title: "Fertility Solutions",
//         links: [
//           { label: "Your Path to Parenthood", path: "/treatments#ivf"},
//           { label: "Advanced Infertility Treatments", path: "/treatments#iui",
//             submenu: [
//             { label: "IMSI – High-Resolution Sperm Selection", path: "/infertility-issues/overview" },
//             { label: "PICSI – Physiological ICSI", path: "/infertility-issues/symptoms" },
//             { label: "LAH – Laser Assisted Hatching", path: "/infertility-issues/diagnosis" },
//             { label: "Blastocyst Transfer – Stronger Embryo Transfer", path: "/infertility-issues/treatments" },
//             { label: "Sequential Embryo Transfer – Two-Stage Transfer", path: "/infertility-issues/symptoms" },
//             { label: "PGD/PGS/PGT-A – Genetic Screening", path: "/infertility-issues/symptoms" },

//           ],
//            },
//           { label: "Advanced Facilities for Trusted Care", path: "/treatments#icsi",
//             submenu: [
//             { label: "Class-1000 Modular Lab", path: "/infertility-issues/overview" },
//             { label: "Trigas Incubators", path: "/infertility-issues/symptoms" },
//             { label: "Witness System", path: "/infertility-issues/diagnosis" },
//             { label: "Cryopreservation", path: "/infertility-issues/treatments" },

//         ],
//       },
//           { label: "Infertility Treatments", path: "/treatments#icsi",
//              submenu: [
//             { label: "Ovulation Induction", path: "/infertility-issues/overview" },
//             { label: "IUI", path: "/infertility-issues/symptoms" },
//             { label: "IVF", path: "/infertility-issues/diagnosis" },
//             { label: "IVF-ICSI ", path: "/infertility-issues/treatments" },
//             { label: "Frozen Embryo Transfer", path: "/infertility-issues/diagnosis" },
//             { label: "Fertility Surgery  ", path: "/infertility-issues/treatments" },

//         ],
//            },
//           { label: "Fertility Preservation", path: "/treatments#icsi",
// submenu: [
//             { label: "Female Fertility Preservation", path: "/infertility-issues/overview" },
//             { label: "Male Fertility Preservation", path: "/infertility-issues/symptoms" },
//             { label: "Embryo Preservation", path: "/infertility-issues/diagnosis" },

//         ],

//            },
//            { label: "Fertility Evaluation", path: "/treatments#icsi",
// submenu: [
//             { label: "Female Analysis-Complete Reproductive Health Check", path: "/infertility-issues/overview" },
//             { label: "Male Analysis – Advanced Sperm Testing", path: "/infertility-issues/symptoms" },

//         ],

//            },
//         ],
//       },
//       {
//         title: "Preservation",
//         links: [
//           { label: "Online Consult", path: "/treatments#female-preservation" ,isarrow: true},
//           { label: "EMI Options", path: "/treatments#male-preservation",isarrow: true },
//           { label: "Fellowship", path: "/treatments#male-preservation",isarrow: true },
//           { label: "Our Centers", path: "/treatments#male-preservation" ,isarrow: true},
//           { label: "Our Social Impact", path: "/treatments#male-preservation",isarrow: true },
//         ],
//       },
//     ],
//   },
// };

// /* -------------------- MEGA MENU -------------------- */
// const MegaMenu = ({ menu }: { menu: any }) => {
//   const [expandedLink, setExpandedLink] = useState<string | null>(null);
//   if (!menu) return null;

//   return (
//     <div className="fixed left-1/2 top-[100px] -translate-x-1/2 
//                     bg-white shadow-lg rounded-2xl z-50 
//                     w-[90vw] max-w-[1646px] flex gap-8 p-6">

//       {/* Left Image */}
//       {menu.image && (
//         <div className="hidden lg:block w-[350px] max-h-[450px] flex-shrink-0">
//           <Image
//             src={menu.image}
//             alt="menu-img"
//             width={350}
//             height={350}
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//       )}

//       <div
//         className="w-[1px]"
//         style={{
//           background: "rgba(22, 86, 165, 0.05)",
//           height: "auto",
//         }}
//       />

//       {/* Dynamic Columns with Divider */}
//       <div className="flex flex-1">
//         {menu.columns.map((col: any, idx: number) => (
//           <React.Fragment key={idx}>
//             {/* Column */}
//             <div className="flex-1">
//               {col.title && (
//                 <h3
//                   className="text-[28px] font-normal leading-normal tracking-[-0.56px] text-[#2C2C2C] font-[Manrope] mb-[30px]"
//                 >
//                   {col.title}
//                 </h3>

//               )}
// <ul className="space-y-2 w-[180px] text-left">
//   {col.links.map((link: any, i: number) => (
//   <li key={i}   className="
//     mb-4 

//   ">

//       {link.isButton ? (
//         // ✅ BOOK APPOINTMENT BUTTON
//         <Link
//           href={link.path}
//           className="
//             flex items-center justify-center gap-2
//             w-full px-4 py-[10px] rounded-[8px]
//             bg-[#1656A5] text-white font-[Manrope] text-[14px] font-semibold leading-[24px] tracking-[-0.28px]
//             hover:bg-[#12498C] transition
//           "
//         >
//           {link.label}
//           <svg
//             xmlns='http://www.w3.org/2000/svg'
//             width='12'
//             height='12'
//             viewBox='0 0 12 12'
//             fill='none'
//             className="shrink-0"
//           >
//             <path
//               d='M1.37624 5.5498L10.0103 5.6986M10.0103 5.6986L5.56228 1.36376M10.0103 5.6986L5.76761 9.94124'
//               stroke='white'
//               strokeLinecap='round'
//               strokeLinejoin='round'
//             />
//           </svg>
//         </Link>
//       ) : link.isPhone ? (
//         // ✅ PHONE LINK
//         <a
//           href={link.path}
//           className="
//             flex items-center gap-3 w-full
//             bg-[rgba(22,86,165,0.10)] rounded-[8px]
//             px-4 py-[10px]
//             text-[#252525] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
//             hover:bg-[rgba(22,86,165,0.15)] transition
//           "
//         >
//           <span className="flex items-center justify-center w-[24px] h-[24px] shrink-0">
//             {/* YOUR ORIGINAL PHONE SVG */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="26"
//               height="26"
//               viewBox="0 0 27 26"
//               fill="none"
//             >
//               <mask
//                 id={`mask_${i}`}
//                 style={{ maskType: "alpha" }}
//                 maskUnits="userSpaceOnUse"
//                 x="0"
//                 y="0"
//                 width="27"
//                 height="26"
//               >
//                 <rect x="0.5" width="26" height="26" fill="#D9D9D9" />
//               </mask>
//               <g mask={`url(#mask_${i})`}>
//                 <path
//                   d="M20.675 21.3417C18.9778 21.3417 17.2128 20.8948 15.3802 20.001C13.5476 19.1073 11.8323 17.8569 10.2344 16.25C8.63646 14.643 7.39062 12.9278 6.49687 11.1042C5.60313 9.28055 5.15625 7.52013 5.15625 5.82291C5.15625 5.49014 5.26458 5.2129 5.48125 4.99118C5.69792 4.76928 5.96875 4.65833 6.29375 4.65833H8.46042C8.76736 4.65833 9.03368 4.75312 9.25937 4.9427C9.48507 5.13228 9.64305 5.38055 9.73333 5.68749L10.2208 7.90832C10.275 8.21527 10.266 8.4861 10.1937 8.72082C10.1215 8.95555 9.99514 9.14513 9.81458 9.28958L7.5125 11.375C7.98194 12.2236 8.49201 13.0045 9.04271 13.7177C9.5934 14.4309 10.1757 15.1035 10.7896 15.7354C11.4396 16.3854 12.1437 16.9903 12.9021 17.55C13.6604 18.1097 14.5 18.6424 15.4208 19.1479L17.6687 16.8458C17.8493 16.6472 18.0434 16.5208 18.251 16.4667C18.4587 16.4125 18.6979 16.4035 18.9687 16.4396L20.8104 16.8187C21.1174 16.891 21.3656 17.0444 21.5552 17.2792C21.7448 17.5139 21.8396 17.7847 21.8396 18.0917V20.2042C21.8396 20.5292 21.7286 20.8 21.5067 21.0167C21.285 21.2333 21.0078 21.3417 20.675 21.3417Z"
//                   fill="#1C1B1F"
//                 />
//               </g>
//             </svg>
//           </span>
//           {link.label}
//         </a>
//       ) : link.isWhatsapp ? (
//         // ✅ WHATSAPP LINK (your same custom SVG)
//         <a
//           href={link.path}
//           className="
//             flex items-center gap-3 w-full
//             bg-[rgba(22,86,165,0.10)] rounded-[8px]
//             px-4 py-[10px]
//             text-[#252525] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
//             hover:bg-[rgba(22,86,165,0.15)] transition
//           "
//         >
//           <span className="flex items-center justify-center w-[24px] h-[24px] shrink-0">
//             {/* YOUR EXISTING WHATSAPP SVG */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="26"
//               height="26"
//               viewBox="0 0 27 26"
//               fill="none"
//             >
//               <mask
//                 id={`mask_${i}`}
//                 style={{ maskType: "alpha" }}
//                 maskUnits="userSpaceOnUse"
//                 x="0"
//                 y="0"
//                 width="27"
//                 height="26"
//               >
//                 <rect x="0.5" width="26" height="26" fill="#D9D9D9" />
//               </mask>
//               <g mask={`url(#mask_${i})`}>
//                 <path
//                   d="M21.5497 9.57082C21.0872 8.54894 20.4234 7.63148 19.5805 6.84082C18.7376 6.05763 17.7605 5.43853 16.6715 5.00591C15.5452 4.55837 14.3517 4.33459 13.121 4.33459C11.8902 4.33459 10.6968 4.55837 9.57048 5.00591C8.48146 5.43853 7.50433 6.05017 6.66146 6.84082C5.81859 7.63148 5.15475 8.54894 4.69229 9.57082C4.21491 10.63 3.96875 11.7638 3.96875 12.9274C3.96875 14.9637 4.72956 16.918 6.1244 18.4694L5.3785 22.5346L9.34671 20.7668C10.5327 21.274 11.7933 21.5276 13.1135 21.5276C14.3442 21.5276 15.5377 21.3039 16.664 20.8563C17.753 20.4237 18.7302 19.8121 19.573 19.0214C20.4159 18.2307 21.0797 17.3133 21.5422 16.2914C22.0196 15.2322 22.2657 14.0984 22.2657 12.9348C22.2732 11.7638 22.027 10.6375 21.5497 9.57082Z"
//                   stroke="black"
//                   strokeWidth="0.7"
//                 />
//                 <path
//                   d="M16.8348 14.6452C16.4469 14.4513 16.1635 14.3319 15.9621 14.2574C15.8353 14.2126 15.5369 14.0783 15.4325 14.1604C15.1043 14.4289 14.7537 15.1897 14.3808 15.3315C13.4558 15.1524 12.5981 14.5184 11.9268 13.8695C11.6284 13.586 11.0764 12.7805 10.9571 12.5642C10.9347 12.3404 11.3375 12.042 11.427 11.8705C11.8894 11.3483 11.5389 11.0201 11.4792 10.8038C11.3748 10.5801 11.1958 10.1773 11.0391 9.84908C10.9049 9.63277 10.875 9.31203 10.6363 9.19268C9.6219 8.67055 9.04012 9.71482 8.80143 10.2593C7.36184 13.7278 16.0143 20.329 17.7746 15.779C17.8641 15.3837 17.8268 15.2345 17.6926 15.0555C17.424 14.869 17.1108 14.7869 16.8348 14.6452Z"
//                   stroke="black"
//                   strokeWidth="0.7"
//                 />
//               </g>
//             </svg>
//           </span>
//           {link.label}
//         </a>
//       ) : link.isarrow ? (
//         // ✅ ARROW LINKS (same SVG)
//         <Link
//           href={link.path}
//           className="
//             flex items-center justify-between w-full
//             text-[#2C2C2C] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
//             hover:text-[#1656A5]

//                 rounded-[8px]
//     transition-all duration-200
//     hover:bg-[rgba(22,86,165,0.10)]
//     hover:px-4 hover:py-[10px]
//           "
//         >
//           <span>{link.label}</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             viewBox="0 0 24 24"
//             fill="none"
//             className="shrink-0 mr-[20px]"
//           >
//             <path
//               d="M7.37624 11.5498L16.0103 11.6986M16.0103 11.6986L11.5623 7.36376M16.0103 11.6986L11.7676 15.9412"
//               stroke="#252525"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Link>
//       ) : (
//         // ✅ DEFAULT LINK + INLINE SUBMENU
//         <Link href={link.path}   onMouseEnter={() => setExpandedLink(link.label)}
//   onMouseLeave={() => setExpandedLink(null)}>
//           <button

//             className="
//                   text-left
//     text-[#2C2C2C] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
//     hover:text-[#1656A5] w-full
//     flex items-center justify-start gap-2
//      rounded-[8px]
//     transition-all duration-200
//     hover:bg-[rgba(22,86,165,0.10)]
//     hover:px-4 hover:py-[10px]
//             "
//           >
//             {link.label}
//             {/* {link.submenu && (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className={`transition-transform ${
//                   expandedLink === link.label ? "rotate-90" : ""
//                 }`}
//               >
//                 <path
//                   d="M8 5L16 12L8 19"
//                   stroke="#252525"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             )} */}
//           </button>

//           {/* Nested submenu (inline, like Figma) */}
//           {link.submenu && expandedLink === link.label && (
//             <ul className="ml-4 mt-2 space-y-1 animate-fadeIn">
//               {link.submenu.map((sublink: any, subIdx: number) => (
//                 <li key={subIdx}>
//                   <Link
//                     href={sublink.path}
//                     className="
//                       block text-[#969696] font-[Manrope] text-[13px] leading-[22px] tracking-[-0.26px]
//                       hover:text-[#1656A5] transition
//                     "
//                   >
//                     {sublink.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </Link>
//       )}
//     </li>
//   ))}
// </ul>






//             </div>

//             {/* Divider (not after last column) */}
//             {idx < menu.columns.length - 1 && (
//               <div
//                 className="w-[1px] mx-6"
//                 style={{
//                   background: "rgba(22, 86, 165, 0.05)",
//                   height: "auto",
//                 }}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };


// /* -------------------- NAVBAR -------------------- */
// export default function Navbar() {
//   const [openMenu, setOpenMenu] = useState<string | null>(null);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const pathname = usePathname();
//   const closeTimeoutRef = useRef<number | null>(null);
//   const navigationItems = [
//     { label: "About Us", path: "/about-us", hasMegaMenu: true },
//     { label: "Infertility Issues", path: "/infertility", hasMegaMenu: true },
//     { label: "Our Centers", path: "/centers", hasMegaMenu: true },
//     { label: "Treatments", path: "/treatments", hasMegaMenu: true },
//     { label: "Doctors", path: "/doctors", hasMegaMenu: false },
//     { label: "Patient Resources", path: "/resources", hasMegaMenu: false },
//     { label: "Careers", path: "/careers", hasMegaMenu: false },
//   ];
//   const handleMouseEnter = (label: string) => {
//     if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
//     setOpenMenu(label);
//   };
//   const handleMouseLeave = () => {
//     closeTimeoutRef.current = window.setTimeout(() => setOpenMenu(null), 200);
//   };
//   return (
//     <header className="w-full bg-white font-sans relative">
//       {/* Top bar */}
//       {!isSearchOpen && (
//         <div className="mx-auto flex items-center justify-between h-20 px-6 lg:px-[50px]  xl:px-[80px] 2xl:px-[120px]">
//           <Link href="/" className="w-[150px] h-[40px] relative">
//             <Image src="/logo1.png" alt="Logo" fill className="object-contain" />
//           </Link>
//           <nav className="hidden lg:flex items-center space-x-6  lg:space-x-2 xl:space-x-6">
//             {navigationItems.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter(item.label)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <Link
//                   href={item.path}
//                   className={`flex items-center gap-1 px-2 lg:px-1 xl:px-3 py-2 rounded-md text-sm 2xl:text-lg transition
//                     ${pathname === item.path || openMenu === item.label
//                       ? "bg-[#1656A5] text-white"
//                       : "text-gray-700 hover:bg-[#1656A5] hover:text-white"
//                     }`}
//                 >
//                   {item.label}
//                   {item.hasMegaMenu && <ChevronDown size={18} />}
//                 </Link>
//                 {item.hasMegaMenu && openMenu === item.label && <MegaMenu menu={megaMenuData[item.label]} />}
//               </div>
//             ))}
//           </nav>
//           <button
//             onClick={() => setIsSearchOpen(true)}
//             className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-lg"
//           >
//             <Search size={18} />
//           </button>
//         </div>
//       )}
//       {/* Search Section */}
//       {isSearchOpen && <SearchSection onClose={() => setIsSearchOpen(false)} />}
//     </header>



//   );
// }

"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, X, ChevronDown } from "lucide-react";
import { centersData } from "@/page-components/centers/CenterCard";

/* -------------------- SEARCH SECTION -------------------- */
export function SearchSection({ onClose }: { onClose: () => void }) {
  const [activeStep, setActiveStep] = useState<"what" | "where" | "who" | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const buttonRefs = useRef<{ [key: string]: HTMLDivElement | null }>({
    what: null,
    where: null,
    who: null,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ left: number; top: number } | null>(null);

  const [inputs, setInputs] = useState({
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

  // ✅ Click outside closes dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveStep(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useLayoutEffect(() => {
    if (activeStep) updatePopupPosition(activeStep);
  }, [activeStep]);

  useEffect(() => {
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
      <div className="flex flex-col md:flex-row items-start md:items-center w-full max-w-[1600px] mx-auto py-4  px-6 lg:px-[50px] xl:px-[80px] 2xl:px-[120px] gap-4 relative">
        {/* Logo */}
        <Link href="/" className="w-[150px] h-[40px] relative md:mt-0 mt-2">
          <Image src="/logo1.png" alt="Logo" fill className="object-contain" />
        </Link>

      {/* WHAT */}
<div
  ref={(el) => (buttonRefs.current.what = el)}
  className={`relative flex items-center flex-1 rounded-2xl px-5 py-3 transition-all duration-200 
    ${activeStep === "what" ? "bg-[#EAF1F8] shadow-sm" : "bg-white"}`}
>
  {/* Label */}
  <span className="text-[#000000] font-medium text-[16px] mr-3 whitespace-nowrap">
    What
  </span>

  {/* Input */}
  <input
    type="text"
    placeholder="Search Treatments or Concerns..."
    value={inputs.what}
    onChange={(e) => setInputs({ ...inputs, what: e.target.value })}
    onFocus={() => handleInputFocus("what")}
    onBlur={() => setActiveStep(null)}
    className="
      w-[200px] bg-transparent border-none outline-none px-2
      placeholder-[#9CA3AF] text-[16px] text-[#4B5563]
      focus:ring-0 focus:outline-none
    "
  />

  {/* Search Icon */}
  <Search
    className={`absolute right-4 text-gray-400 pointer-events-none  ${activeStep === "what" ? "bg-[#EAF1F8]" : "bg-white"}`}
    size={18}
  />
</div>

{/* WHERE */}
<div
  ref={(el) => (buttonRefs.current.where = el)}
  className={`relative flex items-center flex-1 rounded-2xl px-5 py-3 transition-all duration-200 
    ${activeStep === "where" ? "bg-[#EAF1F8] shadow-sm" : "bg-white"}`}
>
  {/* Label */}
  <span className="text-[#000000] font-medium text-[16px] mr-3 whitespace-nowrap">
    Where
  </span>

  {/* Input */}
  <input
    type="text"
    placeholder="Select City"
    value={inputs.where}
    onChange={(e) => setInputs({ ...inputs, where: e.target.value })}
    onFocus={() => handleInputFocus("where")}
    onBlur={() => setActiveStep(null)}
    className="
      w-full bg-transparent border-none outline-none
      placeholder-[#9CA3AF] text-[16px] text-[#4B5563]
      focus:ring-0 focus:outline-none
    "
  />

  {/* Chevron Icon */}
  <ChevronDown
    className="absolute right-4 text-gray-400 pointer-events-none"
    size={18}
  />
</div>

{/* WHO */}
<div
  ref={(el) => (buttonRefs.current.who = el)}
  className={`relative flex items-center flex-1 rounded-2xl px-5 py-3  transition-all duration-200 
    ${activeStep === "who" ? "bg-[#EAF1F8] shadow-sm" : "bg-white"}`}
>
  {/* Label */}
  <span className="text-[#000000] font-medium text-[16px] mr-3 whitespace-nowrap">
    Who
  </span>

  {/* Input */}
  <input
    type="text"
    placeholder="Choose Doctor / Specialist"
    value={inputs.who}
    onChange={(e) => setInputs({ ...inputs, who: e.target.value })}
    onFocus={() => handleInputFocus("who")}
    onBlur={() => setActiveStep(null)}
    className="
      w-full bg-transparent border-none outline-none
      placeholder-[#9CA3AF] text-[16px] text-[#4B5563]
      focus:ring-0 focus:outline-none
    "
  />

  {/* Chevron Icon */}
  <ChevronDown
    className="absolute right-4 text-gray-400 pointer-events-none"
    size={18}
  />
</div>


        {/* Close */}
        <button
          onClick={onClose}
          className="h-[44px] w-[44px] rounded-xl bg-[#1656A5] flex items-center justify-center self-end md:self-center"
        >
          <X size={20} color="#fff" />
        </button>
      </div>

      {/* DROPDOWN POPUPS */}
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


// /* -------------------- MEGA MENU DATA -------------------- */
// const megaMenuData: Record<string, any> = {
//   "About Us": {
//     image: "/Navbar/about-image.png",
//     columns: [
//       {
//         title: "Discover Us",
//         links: [
//           { label: "Why Progenesis", path: "/about-us#why-1" },
//           { label: "Our Approach", path: "/about-us#our-approach" },
//           { label: "Our Vision & Mission", path: "/about-us#our-vision" },
//           { label: "Why choose us", path: "/about-us#why-choose-us" },
//           { label: "Leadership Team", path: "/leadership-team" },
//           { label: "Impact & Growth", path: "/about-us#impact-growth" },
//           { label: "FAQs", path: "/about-us#faqs" },
//         ],
//       },
//       {
//         title: "Quick Links",
//         links: [
//           { label: "Book Appointment", path: "/appointment", isButton: true },
//           { label: "+91 94239 71260", path: "tel:+919423971260", isPhone: true },
//           { label: "+91 70309 44041", path: "tel:+917030944041", isWhatsapp: true },
//           { label: "Take a Quiz", path: "/quiz", isarrow: true },
//           { label: "Online Consult", path: "/online-consult", isarrow: true },
//           { label: "EMI Options", path: "/emi-options", isarrow: true },
//         ],
//       },
//       {
//         links: [
//           { label: "Fellowship", path: "/fellowship", isarrow: true },
//           { label: "Our Centers", path: "/centers", isarrow: true },
//           { label: "Our Social Impact", path: "/social-impact", isarrow: true },
//         ],
//       },
//     ],
//   },
//   "Infertility Issues": {
//     image: "/Navbar/infertility-image.png",
//     columns: [
//       {
//         title: "Know Infertility",
//         links: [
//           {
//             label: "What is Infertility",
//             path: "/infertility-issues#what",
//             submenu: [
//               { label: "Overview", path: "/infertility-issues/overview" },
//               { label: "Symptoms", path: "/infertility-issues/symptoms" },
//               { label: "Diagnosis", path: "/infertility-issues/diagnosis" },
//               { label: "Treatment Options", path: "/infertility-issues/treatments" },
//             ],
//           },
//           {
//             label: "Female Infertility Causes",
//             path: "/infertility-issues#female",
//             submenu: [
//               { label: "Repeated IUI Failures", path: "/infertility-issues/overview" },
//               { label: "Repeated IVF Failures", path: "/infertility-issues/symptoms" },
//               { label: "Pregnancy after Menopause", path: "/infertility-issues/diagnosis" },
//               { label: "Low AMH", path: "/infertility-issues/treatments" },
//               { label: "PCOS", path: "/infertility-issues/treatments" },
//               { label: "Tubal Blockage", path: "/infertility-issues/treatments" },
//               { label: "Fibroids", path: "/infertility-issues/treatments" },
//               { label: "Endometriosis", path: "/infertility-issues/treatments" },
//             ],
//           },
//           {
//             label: "Male Infertility Causes",
//             path: "/infertility-issues#male",
//             submenu: [
//               { label: "Azoospermia", path: "/infertility-issues/overview" },
//               { label: "Low Sperm Count", path: "/infertility-issues/symptoms" },
//               { label: "Erectile Dysfunction (ED)", path: "/infertility-issues/diagnosis" },
//             ],
//           },
//           { label: "Real Stories. Real Miracles.", path: "/stories" },
//         ],
//       },
//     ],
//   },
//   "Our Centers": {
//     image: "/Navbar/infertility-image.png",
//     columns: [
//       {
//         title: "Where We Are",
//         links: centersData
//           .map((center) => ({
//             label: center.name,
//             path: `/centers/${center.name.toLowerCase()}`,
//           }))
//           .slice(0, 9),
//       },
//     ],
//   },
//   Treatments: {
//     image: "/Navbar/infertility-image.png",
//     columns: [
//       {
//         title: "Fertility Solutions",
//         links: [
//           { label: "Your Path to Parenthood", path: "/treatments#ivf" },
//           { label: "Advanced Infertility Treatments", path: "/treatments#iui" },
//           { label: "Infertility Treatments", path: "/treatments#icsi" },
//         ],
//       },
//     ],
//   },
// };


// /* -------------------- MEGA MENU -------------------- */
// const MegaMenu = ({ menu }: { menu: any }) => {
//   const [expandedLink, setExpandedLink] = useState<string | null>(null);
//   if (!menu) return null;

//   return (
//     <div className="fixed left-1/2 top-[100px] -translate-x-1/2 bg-white shadow-lg rounded-2xl z-50 w-[90vw] max-w-[1646px] flex gap-8 p-6">
//       {/* Left Image */}
//       {menu.image && (
//         <div className="hidden lg:block w-[350px] max-h-[450px] flex-shrink-0">
//           <Image
//             src={menu.image}
//             alt="menu-img"
//             width={350}
//             height={350}
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>
//       )}

//       {/* Divider */}
//       <div
//         className="w-[1px]"
//         style={{ background: "rgba(22, 86, 165, 0.05)", height: "auto" }}
//       />

//       {/* Columns */}
//       <div className="flex flex-1">
//         {menu.columns.map((col: any, idx: number) => (
//           <React.Fragment key={idx}>
//             <div className="flex-1">
//               {col.title && (
//                 <h3 className="text-[28px] font-normal leading-normal tracking-[-0.56px] text-[#2C2C2C] font-[Manrope] mb-[30px]">
//                   {col.title}
//                 </h3>
//               )}

//               <ul className="space-y-2 w-[180px] text-left">
//                 {col.links.map((link: any, i: number) => (
//                   <li key={i} className="mb-4">
//                     {link.isButton ? (
//                       // BOOK APPOINTMENT
//                       <Link
//                         href={link.path}
//                         className="flex items-center justify-center gap-2 w-full px-4 py-[10px] rounded-[8px] bg-[#1656A5] text-white font-[Manrope] text-[14px] font-semibold leading-[24px] tracking-[-0.28px] hover:bg-[#12498C] transition"
//                       >
//                         {link.label}
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="12"
//                           height="12"
//                           viewBox="0 0 12 12"
//                           fill="none"
//                           className="shrink-0"
//                         >
//                           <path
//                             d="M1.37624 5.5498L10.0103 5.6986M10.0103 5.6986L5.56228 1.36376M10.0103 5.6986L5.76761 9.94124"
//                             stroke="white"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </Link>
//                     ) : link.isarrow ? (
//                       // SIMPLE ARROW LINK
//                       <Link
//                         href={link.path}
//                         className="flex items-center justify-between w-full text-[#2C2C2C] font-[Manrope] text-[14px] leading-[24px] tracking-[-0.28px] hover:text-[#1656A5] rounded-[8px] transition-all duration-200 hover:bg-[rgba(22,86,165,0.10)] hover:px-4 hover:py-[10px]"
//                       >
//                         <span>{link.label}</span>
//                         <ChevronDown size={14} />
//                       </Link>
//                     ) : (
//                       // NORMAL LINK + INLINE SUBMENU
//                       <div
//                         onMouseEnter={() => setExpandedLink(link.label)}
//                         onMouseLeave={() => setExpandedLink(null)}
//                       >
//                         <Link
//                           href={link.path}
//                           className="block text-[#2C2C2C] font-[Manrope] text-[14px] leading-[24px] tracking-[-0.28px] hover:text-[#1656A5] w-full flex items-center gap-2 rounded-[8px] transition-all duration-200 hover:bg-[rgba(22,86,165,0.10)] hover:px-4 hover:py-[10px]"
//                         >
//                           {link.label}
//                         </Link>
//                         {link.submenu && expandedLink === link.label && (
//                           <ul className="ml-4 mt-2 space-y-1 animate-fadeIn">
//                             {link.submenu.map((sublink: any, subIdx: number) => (
//                               <li key={subIdx}>
//                                 <Link
//                                   href={sublink.path}
//                                   className="block text-[#969696] font-[Manrope] text-[13px] leading-[22px] tracking-[-0.26px] hover:text-[#1656A5] transition"
//                                 >
//                                   {sublink.label}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Divider */}
//             {idx < menu.columns.length - 1 && (
//               <div
//                 className="w-[1px] mx-6"
//                 style={{ background: "rgba(22, 86, 165, 0.05)" }}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };


/* -------------------- DROPDOWN DATA -------------------- */
const megaMenuData: Record<string, any> = {
  "About Us": {
    image: "/Navbar/about-image.png",
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
          { label: "Second Opinion", path: "/centers", isarrow: true },
          { label: "EMI Options", path: "/emi-options", isarrow: true },
          { label: "International Patients", path: "/international-patients", isarrow: true },
          { label: "Online Consultation", path: "/online-consultion", isarrow: true },
        ],
      },
    ],
  },
  "Our Centers": {
    image: "/Navbar/infertility-image.png",
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
          { label: "Ahilyanagar", path: "/centers/ahilyanagar" },
          { label: "Amravati", path: "/centers/amravati" },
          { label: "Kolhapur", path: "/centers/kolhapur" },
          { label: "Nagpur", path: "/centers/nagpur" },
          { label: "Solapur", path: "/centers/solapur" },
          { label: "Pune", path: "/centers/pune" },
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
                  className="text-[28px] font-normal leading-normal tracking-[-0.56px] text-[#2C2C2C] font-[Manrope] mb-[30px]"
                >
                  {col.title}
                </h3>

              )}
              <ul className="space-y-2 w-[180px] text-left">
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
                      // ✅ DEFAULT LINK + INLINE SUBMENU
                      <Link href={link.path} onMouseEnter={() => setExpandedLink(link.label)}
                        onMouseLeave={() => setExpandedLink(null)}>
                        <button

                          className="
                  text-left
    text-[#2C2C2C] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]
    hover:text-[#1656A5] w-full
    flex items-center justify-start gap-2
     rounded-[8px]
    transition-all duration-200
    hover:bg-[rgba(22,86,165,0.10)]
    hover:px-4 hover:py-[10px]
            "
                        >
                          {link.label}
                          {/* {link.submenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform ${
                  expandedLink === link.label ? "rotate-90" : ""
                }`}
              >
                <path
                  d="M8 5L16 12L8 19"
                  stroke="#252525"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )} */}
                        </button>

                        {/* Nested submenu (inline, like Figma) */}
                        {link.submenu && expandedLink === link.label && (
                          <ul className="ml-4 mt-2 space-y-1 animate-fadeIn">
                            {link.submenu.map((sublink: any, subIdx: number) => (
                              <li key={subIdx}>
                                <Link
                                  href={sublink.path}
                                  className="
                                    block text-[#969696] font-[Manrope] text-[13px] leading-[22px] tracking-[-0.26px]
                                    hover:text-[#1656A5] transition
                                  "
                                >
                                  {sublink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </Link>
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
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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

  return (
    <header className="w-full bg-white font-sans relative">
      {/* NAVBAR */}
      {!isSearchOpen && (
        <div className="mx-auto flex items-center justify-between h-20 px-6   csLg:px-[120px]">
          <Link href="/" className="w-[150px] h-[40px] relative">
            <Image src="/logo1.png" alt="Logo" fill className="object-contain" />
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
                    ${pathname === item.path || openMenu === item.label
                      ? "bg-[#1656A5] text-white"
                      : "text-gray-700 hover:bg-[#1656A5] hover:text-white"
                    }`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown size={18} />}
                </Link>

                {item.hasMegaMenu && openMenu === item.label && (
                  <MegaMenu menu={(megaMenuData as any)[item.label]} />
                )}
              </div>
            ))}
          </nav>

          {/* SEARCH BUTTON */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-lg"
          >
            <Search size={18} />
          </button>
        </div>
      )}

      {/* SEARCH SECTION */}
      {isSearchOpen && <SearchSection onClose={() => setIsSearchOpen(false)} />}
    </header>
  );
}


