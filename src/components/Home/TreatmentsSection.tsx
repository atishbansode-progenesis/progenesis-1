// import React, { useState, useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// const Letter = ({ char, index, total, scrollYProgress }) => {
//   // Each letter animates in its slice of scroll progress
//   const start = index / total;
//   const end = (index + 1) / total;

//   const color = useTransform(
//     scrollYProgress,
//     [start, end],
//     ["rgba(44,44,44,0.25)", "#2C2C2C"]
//   );

//   return (
//     <motion.span
//       style={{ color }}
//       className="text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal"
//     >
//       {char}
//     </motion.span>
//   );
// };

// const TreatmentsSection = () => {
//   const ref = useRef(null);

//   // Track scroll progress for this section
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "start start"],
//   });

//   const text =
//     "Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort.,";

//   const treatments = [
//     {
//       title: "In-Vitro Fertilization (IVF)",
//       description:
//         "We offer you more than a procedure. We offer a chance. A chance to hold, to cradle, to begin.",
//       image: "/TreatmentsSection/IVF.png",
//     },
//     {
//       title: "Egg Freezing and Preservation",
//       description:
//         "Your journey is uniquely yours. Whenever you feel ready, we’ll be right here waiting for you.",
//       image: "/TreatmentsSection/eggfreezing.png",
//     },
//     {
//       title: "Multiple IVF & IUI Failures",
//       description:
//         "Advanced care and tailored treatments to give fresh hope after repeated failed attempts.",
//       image: "/TreatmentsSection/multipleivf.png",
//     },
//     {
//       title: "Intrauterine Insemination (IUI)",
//       description:
//         "For some, the gentlest nudge is all it takes. We guide you with care and precision.",
//       image: "/TreatmentsSection/iui.png",
//     },
//     {
//       title: "Male Fertility Solutions",
//       description:
//         "Fertility is not just a woman’s story. We’re here for every partner, every question, every step.",
//       image: "/TreatmentsSection/malefertility.png",
//     },
//     {
//       title: "Pregnancy after Menopause",
//       description:
//         "Advanced techniques that make motherhood possible, even beyond menopause.",
//       image: "/TreatmentsSection/menopause.png",
//     },
//   ];

//   const [selected, setSelected] = useState(0);

//   return (
//     <section ref={ref} className="w-full bg-blue-50">
//       {/* Sticky Header + Animated Text */}
//       <div
//         className="px-4 md:px-[80px] lg:px-[120px] -pt-4"
//         style={{
//           position: "sticky",
//           top: 0,
//           height: "35vh",
//           overflow: "hidden",
//         }}
//       >
//         <motion.div
//           className="flex flex-col justify-center h-full"
//           style={{
//             y: useTransform(scrollYProgress, [0.5, 1], [30, -60]),
//             opacity: useTransform(scrollYProgress, [0.5, 1], [1, 0]),
//             scale: useTransform(scrollYProgress, [0.5, 1], [1, 0.9]),
//           }}
//           transition={{
//             ease: [0.25, 0.1, 0.25, 1],
//             duration: 1.2,
//           }}
//         >
//           <div className="flex flex-col xl:flex-row items-start justify-between gap-8">
//             {/* Left */}
//             <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
//               <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
//                 Our Expertise
//               </span>
//               <h2 className="text-[48px] md:text-5xl font-light text-[#2c2c2c] mb-6">
//                 Being India’s Best Fertility & IVF Center. We Specialize in:
//               </h2>
//               <button className="px-[14px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition">
//                 View all treatments
//               </button>
//             </div>

//             {/* Right (Animated Text) */}
//             <div className="flex-1">
//               {text.split("").map((char, i) => (
//                 <Letter
//                   key={i}
//                   char={char}
//                   index={i}
//                   total={text.length}
//                   scrollYProgress={scrollYProgress}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Treatments Cards */}
//       <div className="px-4 md:px-[80px] lg:px-[120px] pt-[60px] pb-[60px]">
//         <div className="flex flex-wrap gap-6 w-full">
//           {treatments.map((item, index) => {
//             const isSmall = index === 2 || index === 3;
//             const widthClass = isSmall
//               ? "xl:w-[26%] md:w-[47%] sm:w-[30%] min-w-[280px]"
//               : "xl:w-[35%] md:w-[47%] sm:w-[30%] min-w-[280px]";

//             return (
//               <div
//                 key={index}
//                 onClick={() => setSelected(index)}
//                 className={`
//                   relative cursor-pointer rounded-2xl p-6 h-[350px]
//                   flex flex-col md:flex-row items-center justify-between transition
//                   ${selected === index
//                     ? "border border-[#1656A5] bg-white"
//                     : "border border-transparent bg-white"}
//                   w-full ${widthClass}
//                 `}
//               >
//                 {/* Left Side (Text) */}
//                 <div className="flex flex-col w-[260px] md:w-[350px] pt-[50px] md:pt-[100px]">
//                   <h3 className="text-[#2c2c2c] font-semibold font-[Manrope] md:text-[32px] text-[20px] leading-[40px] tracking-[-0.64px] mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-[#606060] text-sm leading-6">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Right Side (Image with Next.js) */}
//                 <div className="flex-shrink-0 md:-mt-[150px]">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={150}
//                     height={180}
//                     className="object-contain"
//                   />
//                 </div>

//                 {/* Arrow Button */}
//                 <div
//                   className={`absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-lg ${
//                     selected === index ? "bg-[#1656A5]" : "bg-gray-100"
//                   }`}
//                 >
//                   <ArrowRight
//                     className={`w-4 h-4 ${
//                       selected === index ? "text-white" : "text-gray-600"
//                     }`}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };







// export default TreatmentsSection;

// import React, { useState, useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link"; // Import Next.js Link

// const Letter = ({ char, index, total, scrollYProgress }) => {
//   const start = index / total;
//   const end = (index + 1) / total;

//   const color = useTransform(
//     scrollYProgress,
//     [start, end],
//     ["rgba(44,44,44,0.25)", "#2C2C2C"]
//   );

//   return (
//     <motion.span
//       style={{ color }}
//       className="text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal"
//     >
//       {char}
//     </motion.span>
//   );
// };

// const TreatmentsSection = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "start start"],
//   });

//   const text =
//     "Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort.,";

//   const treatments = [
//     {
//       title: "In-Vitro Fertilization (IVF)",
//       description:
//         "We offer you more than a procedure. We offer a chance. A chance to hold, to cradle, to begin.",
//       image: "/TreatmentsSection/IVF.png",
//       link: "/treatments/ivf",
//     },
//     {
//       title: "Egg Freezing and Preservation",
//       description:
//         "Your journey is uniquely yours. Whenever you feel ready, we’ll be right here waiting for you.",
//       image: "/TreatmentsSection/eggfreezing.png",
//       link: "/treatments/egg-freezing",
//     },
//     {
//       title: "Multiple IVF & IUI Failures",
//       description:
//         "Advanced care and tailored treatments to give fresh hope after repeated failed attempts.",
//       image: "/TreatmentsSection/multipleivf.png",
//       link: "/treatments/multiple-failures",
//     },
//     {
//       title: "Intrauterine Insemination (IUI)",
//       description:
//         "For some, the gentlest nudge is all it takes. We guide you with care and precision.",
//       image: "/TreatmentsSection/iui.png",
//       link: "/treatments/iui",
//     },
//     {
//       title: "Male Fertility Solutions",
//       description:
//         "Fertility is not just a woman’s story. We’re here for every partner, every question, every step.",
//       image: "/TreatmentsSection/malefertility.png",
//       link: "/treatments/male-fertility",
//     },
//     {
//       title: "Pregnancy after Menopause",
//       description:
//         "Advanced techniques that make motherhood possible, even beyond menopause.",
//       image: "/TreatmentsSection/menopause.png",
//       link: "/treatments/pregnancy-after-menopause",
//     },
//   ];

//   const [selected, setSelected] = useState(null);

//   return (
//     <section ref={ref} className="w-full bg-blue-50">
//       {/* Sticky Header + Animated Text */}
//       <div
//         className="px-4 md:px-[80px] lg:px-[120px] py-10"
//         style={{
//           position: "sticky",
//           top: 0,
//           overflow: "hidden",
//         }}
//       >
//         <motion.div
//           className="flex flex-col justify-center h-full"
//           style={{
//             y: useTransform(scrollYProgress, [0.5, 1], [30, -60]),
//             opacity: useTransform(scrollYProgress, [0.5, 1], [1, 0]),
//             scale: useTransform(scrollYProgress, [0.5, 1], [1, 0.9]),
//           }}
//           transition={{
//             ease: [0.25, 0.1, 0.25, 1],
//             duration: 1.2,
//           }}
//         >
//           <div className="flex flex-col xl:flex-row items-start justify-between gap-8">
//             <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
//               <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
//                 Our Expertise
//               </span>
//               <h2 className="text-[48px] md:text-5xl font-light text-[#2c2c2c] mb-6">
//                 Being India’s Best Fertility & IVF Center. We Specialize in:
//               </h2>
//               <button className="px-[14px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition">
//                 View all treatments
//               </button>
//             </div>
//             <div className="flex-1">
//               {text.split("").map((char, i) => (
//                 <Letter
//                   key={i}
//                   char={char}
//                   index={i}
//                   total={text.length}
//                   scrollYProgress={scrollYProgress}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Treatments Cards */}
//       <div className="px-4 md:px-[80px] lg:px-[120px] pt-[60px] pb-[60px]">
//         <div className="flex flex-wrap gap-6 w-full">
//           {treatments.map((item, index) => {
//             const isSmall = index === 2 || index === 3;
//             const widthClass = isSmall
//               ? "xl:w-[26%] md:w-[47%] sm:w-[30%] min-w-[280px]"
//               : "xl:w-[35%] md:w-[47%] sm:w-[30%] min-w-[280px]";

//             return (
//               <div
//                 key={index}
//                 onMouseEnter={() => setSelected(index)}
//                 onMouseLeave={() => setSelected(null)}
//                 className={`
//                   relative cursor-pointer rounded-2xl p-6 h-[350px]
//                   flex flex-col md:flex-row items-center justify-between transition-all duration-300
//                   ${
//                     selected === index
//                       ? "border border-[#1656A5] bg-white shadow-md"
//                       : "border border-transparent bg-white"
//                   }
//                   w-full ${widthClass}
//                 `}
//               >
//                 {/* Left Side (Text) */}
//                 <div className="flex flex-col w-[260px] md:w-[350px] pt-[20px] md:pt-[100px]">
//                   <h3 className="text-[#2c2c2c] font-semibold font-[Manrope] md:text-[32px] text-[20px] leading-[40px] tracking-[-0.64px] mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-[#606060] text-sm leading-6">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* Right Side (Image with Next.js) */}
//                 <div className="flex-shrink-0 md:-mt-[150px]">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={150}
//                     height={180}
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Arrow Button (Clickable Link) */}
//                 <Link href={item.link} passHref>
//                   <div
//                     className={`absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-lg transition ${
//                       selected === index
//                         ? "bg-[#1656A5]"
//                         : "bg-gray-100 hover:bg-[#1656A5]"
//                     }`}
//                   >
//                     <ArrowRight
//                       className={`w-4 h-4 ${
//                         selected === index
//                           ? "text-white"
//                           : "text-gray-600 hover:text-white"
//                       }`}
//                     />
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TreatmentsSection;







import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Letter = ({ char }) => (
  <span className="text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal text-[#2C2C2C]">
    {char}
  </span>
);

const TreatmentsSection = () => {
  const text =
    "Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort.,";

  const treatments = [
    {
      title: "In-Vitro Fertilization (IVF)",
      description:
        "We offer you more than a procedure. We offer a chance. A chance to hold, to cradle, to begin.",
      image: "/TreatmentsSection/IVF.png",
      link: "/treatments/ivf",
    },
    {
      title: "Egg Freezing and Preservation",
      description:
        "Your journey is uniquely yours. Whenever you feel ready, we’ll be right here waiting for you.",
      image: "/TreatmentsSection/eggfreezing.png",
      link: "/treatments/egg-freezing",
    },
    {
      title: "Multiple IVF & IUI Failures",
      description:
        "Advanced care and tailored treatments to give fresh hope after repeated failed attempts.",
      image: "/TreatmentsSection/multipleivf.png",
      link: "/treatments/multiple-failures",
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description:
        "For some, the gentlest nudge is all it takes. We guide you with care and precision.",
      image: "/TreatmentsSection/iui.png",
      link: "/treatments/iui",
    },
    {
      title: "Male Fertility Solutions",
      description:
        "Fertility is not just a woman’s story. We’re here for every partner, every question, every step.",
      image: "/TreatmentsSection/malefertility.png",
      link: "/treatments/male-fertility",
    },
    {
      title: "Pregnancy after Menopause",
      description:
        "Advanced techniques that make motherhood possible, even beyond menopause.",
      image: "/TreatmentsSection/menopause.png",
      link: "/treatments/pregnancy-after-menopause",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section className="w-full bg-blue-50 py-[80px]">
      {/* Header Section (Static) */}
      <div className="px-6 lg:px-[50px]  xl:px-[80px] 2xl:px-[120px]  mb-[60px]">
        <div className="flex flex-col xl:flex-row items-start justify-between gap-8">
          <div className="w-full max-w-full sm:max-w-xl md:max-w-xl   lg:max-w-lg xl:max-w-3xl">
            <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
              Our Expertise
            </span>
            <h2 className="text-[48px] md:text-5xl font-light text-[#2c2c2c] mb-6">
              Being India’s Best Fertility & IVF Center. We Specialize in:
            </h2>
            <button className="px-[14px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition">
              View all treatments
            </button>
          </div>
          <div className="flex-1">
            {text.split("").map((char, i) => (
              <Letter key={i} char={char} />
            ))}
          </div>
        </div>
      </div>

      {/* Treatments Cards (Normal Flow, No Overlap) */}
      <div className="px-6 lg:px-[50px]  xl:px-[80px] 2xl:px-[120px] ">
        <div className="flex flex-wrap gap-6 w-full justify-start">
          {treatments.map((item, index) => {
            const isSmall = index === 2 || index === 3;
            const widthClass = isSmall
              ? "2xl:w-[31%] lg:w-[48.5%] sm:w-[30%] min-w-[280px]"
              : "2xl:w-[32%] lg:w-[48.5%] sm:w-[30%] min-w-[280px]";

            return (
              <div
                key={index}
                onMouseEnter={() => setSelected(index)}
                onMouseLeave={() => setSelected(null)}
                className={`
                  relative cursor-pointer rounded-2xl p-6 h-[350px]
                  flex flex-col md:flex-row items-center justify-between transition-all duration-300
                  ${
                    selected === index
                      ? "border border-[#1656A5] bg-white shadow-md"
                      : "border border-transparent bg-white"
                  }
                  w-full ${widthClass}
                `}
              >
                {/* Left Side (Text) */}
                <div className="flex flex-col w-[260px] md:w-[350px] pt-[20px] md:pt-[100px]">
                  <h3 className="text-[#2c2c2c] font-semibold font-[Manrope] md:text-[32px] text-[20px] leading-[40px] tracking-[-0.64px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#606060] text-sm leading-6">
                    {item.description}
                  </p>
                </div>

                {/* Right Side (Image with Next.js) */}
                <div className="flex-shrink-0 md:-mt-[150px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={180}
                    className="object-cover"
                  />
                </div>

                {/* Arrow Button (Clickable Link) */}
                <Link href={item.link} passHref>
                  <div
                    className={`absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-lg transition ${
                      selected === index
                        ? "bg-[#1656A5]"
                        : "bg-gray-100 hover:bg-[#1656A5]"
                    }`}
                  >
                    <ArrowRight
                      className={`w-4 h-4 ${
                        selected === index
                          ? "text-white"
                          : "text-gray-600 hover:text-white"
                      }`}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
