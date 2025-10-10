// "use client";

// import Link from "next/link";
// import ConsultationForm from "../../components/Consultation/ConsultationForm";

// import {
//   Crosshair,
//   Stethoscope,
//   Plus,
//   Expand,
//   FileCheck,
//   Users,
//   FlaskConical,
//   Sparkles,
// } from "lucide-react";

// const SecondOpinion = () => {
//   return (
//     <div className="w-full">
//       {/* ===== 1️⃣ Hero Section ===== */}
//       <section
//         className="relative w-full h-[400px] md:h-[647px] bg-cover bg-center flex items-center"
//         style={{
//           backgroundImage: "url('/SecondOpinion/second-opinion-bg.png')", // put this in /public
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent"></div>
//         <div className="relative z-10 mx-auto w-full px-6 md:px-[120px]">
//           <nav className="text-xs md:text-sm mb-3 md:mb-5">
//             <Link href="/" className="text-gray-600 hover:text-gray-900">
//               Home
//             </Link>
//             <span className="mx-1 md:mx-2">›</span>
//             <span className="text-blue-600 font-medium">Second Opinion</span>
//           </nav>
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
//             IVF & Fertility Second Opinion
//           </h1>
//           <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-lg font-medium hover:bg-gray-800 transition">
//             Book Your Appointment
//           </button>
//         </div>
//       </section>

//       {/* ===== 2️⃣ Why Get a Second Opinion ===== */}
//       <section className="w-full flex justify-center px-6 md:px-[120px] py-[60px] md:py-[80px] bg-white">
//         <div className="max-w-[1200px] w-full flex flex-col gap-6 md:gap-8">
//           <span className="text-xs md:text-sm font-medium text-[#1656A5]">
//             Why Get a Second Opinion?
//           </span>
//           <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
//             Clearer Choices, Better Outcomes
//           </h2>
//           <hr className="border-gray-300" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
//             <h3 className="text-lg md:text-xl font-medium text-gray-900">
//               How It Works
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//               Fertility treatments can be emotionally and financially demanding. If
//               you’ve experienced unsuccessful cycles, have doubts about your
//               diagnosis, or simply want reassurance, a second opinion can give you
//               the clarity you need. Our specialists review your reports, evaluate
//               your options, and provide unbiased, evidence-based recommendations —
//               helping you make confident decisions and move closer to parenthood.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ===== 3️⃣ How a Second Opinion Helps ===== */}
//       <section className="w-full flex flex-col items-center px-6 md:px-[120px] py-[60px] md:py-[80px] bg-white">
//         <div className="max-w-[1200px] w-full flex flex-col gap-6 md:gap-8">
//           <span className="text-xs md:text-sm font-medium text-[#1656A5]">
//             How a Second Opinion Helps
//           </span>
//           <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
//             Clarity, Better Choices, Greater Confidence in Fertility Care
//           </h2>
//           <div className="w-full h-[2px] bg-pink-500 my-4"></div>

//           {/* Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Crosshair className="w-8 h-8 text-[#1656A5]" />,
//                 title: "Clarity & Confidence",
//                 desc: "Get an unbiased review of your diagnosis and plan to make informed, confident decisions.",
//               },
//               {
//                 icon: <Stethoscope className="w-8 h-8 text-[#1656A5]" />,
//                 title: "Accurate Diagnosis",
//                 desc: "Recheck tests, spot overlooked conditions, and confirm the right diagnosis.",
//               },
//               {
//                 icon: <Plus className="w-8 h-8 text-[#1656A5]" />,
//                 title: "Right Treatment Choices",
//                 desc: "See if your plan fits, compare success rates, and explore more options.",
//               },
//               {
//                 icon: <Expand className="w-8 h-8 text-[#1656A5]" />,
//                 title: "Access to Advanced Care",
//                 desc: "Discover new technologies and fertility solutions not available everywhere.",
//               },
//             ].map((card, i) => (
//               <div
//                 key={i}
//                 className="bg-[#F9FAFB] rounded-xl p-6 flex flex-col gap-4 justify-between shadow-sm"
//               >
//                 {card.icon}
//                 <h3 className="font-semibold text-gray-900">{card.title}</h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {card.desc}
//                 </p>
//                 <span className="mt-2 w-3 h-3 rounded-full bg-pink-500"></span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== 4️⃣ Doctor Quote + Values ===== */}
//       <section
//         className="w-full flex flex-col md:flex-row items-center justify-between bg-cover bg-center px-6 md:px-[120px] py-10 md:py-[80px]"
//         style={{
//           backgroundImage: "url('/doctor-quote-bg.png')",
//         }}
//       >
//         <div className="w-full md:w-1/2 flex justify-center md:justify-start">
//           <img
//             src="/dr-narhari.jpg"
//             alt="Dr Narhari Malgaonkar"
//             className="rounded-lg object-contain max-h-[300px] md:max-h-[500px]"
//           />
//         </div>
//         <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
//           <p className="text-lg md:text-2xl font-medium text-green-600 leading-relaxed">
//             According to Dr Narhari Malgaonkar, a second opinion always helps make
//             the best decisions for your health.
//           </p>
//         </div>
//       </section>

//       {/* ===== Values Section ===== */}
//       <section className="w-full bg-[#F3F6FA] flex justify-center items-center px-6 md:px-[120px] py-[60px] md:py-[80px]">
//         <div className="max-w-[1200px] w-full flex flex-col gap-8">
//           <span className="text-xs md:text-sm font-medium text-[#1656A5]">
//             We Take Care of You
//           </span>
//           <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
//             Grow personally, professionally, purposefully.
//           </h2>

//           {/* Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               {
//                 icon: <FileCheck className="w-6 h-6 text-[#1656A5]" />,
//                 title: "Proven Success with Ethical Care",
//                 desc: "We combine consistently high success rates with a strong commitment to ethical practices, ensuring patients feel supported and respected.",
//               },
//               {
//                 icon: <Users className="w-6 h-6 text-[#1656A5]" />,
//                 title: "Patient-Centered Approach",
//                 desc: "We provide a personalized journey where compassion, guidance, and comfort are at the core of every treatment experience.",
//               },
//               {
//                 icon: <FlaskConical className="w-6 h-6 text-[#1656A5]" />,
//                 title: "World-Class Laboratories & Technology",
//                 desc: "Our comprehensive ART labs deliver precision-driven treatments with advanced reproductive technology.",
//               },
//               {
//                 icon: <Sparkles className="w-6 h-6 text-[#1656A5]" />,
//                 title: "Uncompromising Quality Standards",
//                 desc: "Every process is backed by exceptional quality benchmarks, ensuring safety, transparency, and excellence.",
//               },
//             ].map((card, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-2xl p-6 flex flex-col gap-2 shadow-sm"
//               >
//                 {card.icon}
//                 <h3 className="font-semibold text-gray-900">{card.title}</h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {card.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <ConsultationForm />
//     </div>
//   );
// };

// export default SecondOpinion;

'use client';
import React from "react";
import OpenionMain from "@/page-components/second-op/OpenionMain";

const page = () => {
  return (
    <div>
      <OpenionMain />
    </div>
  );
}
export default page;