import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";


const TreatmentsSection = () => {
    const text =
        "Comprehensive fertility care designed for every journey, from diagnosis to treatment and beyond. Our extensive network of centers ensures you receive expert guidance, advanced technology, and compassionate support every step of the way, bringing world-class care close to your home and even closer to comfort.";

    const treatments = [
        {
            title: "Artificial Insemination",
            title2: "- IUI Treatment",
            description:
                "Boost conception by placing healthy sperm directly into the uterus for better pregnancy chances.",
            image: "/TreatmentsSection/TS1.png",
            link: "/treatments/infertility/ivf-comprehensive-in-vitro-fertilization-treatment/",
        },
        {
            title: "In Vitro Fertilization",
            title2: "- IVF Treatment",
            description:
                "Advanced egg-sperm fertilization in a lab to create healthy embryos and improve pregnancy success.",
            image: "/TreatmentsSection/TS2.png",
            link: "/treatments/preservation/female-fertility-preservation/",
        },
        {
            title: "Male Infertility",
            title2: "Causes",
            description:
                "Expert diagnosis and treatment for low sperm count, motility issues, and hormonal imbalance.",
            image: "/TreatmentsSection/TS3.png",
            link: "/infertility/female/repeated-iui-failures/",
        },
        {
            title: "Multiple IUI",
            title2: "Failures",
            description:
                "Specialized evaluation and next-step treatments for couples not conceiving after repeated IUI cycles.",
            image: "/TreatmentsSection/TS4.png",
            link: "/treatments/infertility/artificial-insemination-iui-treatment/",
        },
        {
            title: "Multiple IVF",
            title2: "Failures",
            description:
                "Advanced testing and tailored fertility plans to improve success after unsuccessful IVF attempts.",
            image: "/TreatmentsSection/TS5.png",
            link: "/treatments/preservation/male-fertility-preservation/",
        },
        {
            title: "Egg / Embryo",
            title2: "Freezing",
            description:
                "Freeze and preserve healthy eggs or embryos today for future family planning and fertility security.",
            image: "/TreatmentsSection/TS6.png",
            link: "/infertility/female/pregnancy-after-menopause/",
        },
    ];


    const [selected, setSelected] = useState<number | null>(null);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"], // triggers while scrolling through the section
  });


  const words = text.split(" "); // from gray-400 to near black
  

    return (
        <section className="w-full bg-blue-50 xl:py-[80px] py-4 px-4 csLg:px-[90px]">
            {/* Header Section (Static) */}
            <div className=" mb-6 xl:mb-[76px]  ">
                <div className="grid grid-cols-1  csLg:grid-cols-2 items-start gap-8 justify-between ">
                    <div className="w-full  flex flex-col gap-[24px] xl:gap-[40px] ">
                        <div className="flex flex-col gap-2">

                            <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 w-fit py-1 rounded-full ">
                                Our Expertise
                            </span>
                            <div>

                                <h2 className="text-[32px] xl:text-[40px]  font-normal text-[#2c2c2c]  ">
                                    Being India’s Best Fertility & IVF <br /> Center. We Specialize in:
                                </h2>
                            </div>

                            <button onClick={() => window.open("/treatments", "_blank")} className="px-[14px] xl:mt-[40px] w-fit cursor-pointer xl:px-12 py-[12px] xl:py-3 xl:rounded-[16px] rounded-[8px] text-[12px] xl:text-sm font-medium border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition">
                                View all treatments
                            </button>
                        </div>

                    </div>
                      <div
      ref={ref}
      className="flex flex-wrap gap-x-2 text-[24px] ] font-[Manrope] font-normal"
    >
      {words.map((word, i) => {
        // each word fades slightly later than the previous one
        const start = i / words.length;
        const end = start + 0.15;

        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#2C2C2C ", "#2C2C2C"] // gray → black
        );
        const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);

        return (
          <motion.span key={i} style={{ color, opacity }}>
            {word}&nbsp;
          </motion.span>
        );
      })}
    </div>
                </div>
            </div>

            {/* Treatments Cards (Normal Flow, No Overlap) */}
            <div className=" xl:mb-[76px] flex flex-col gap-2">
                {/* First 3 cards */}
                <div className="grid  grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-[35%_35%_30%]  w-full justify-start">
                    {treatments.slice(0, 3).map((item, index) => {
                        const widthClass = index === 0
                            ? " w-full sm:w-auto md:w-auto min-w-[280px]"
                            : "w-full sm:w-auto md:w-auto min-w-[280px]";

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setSelected(index)}
                                onMouseLeave={() => setSelected(null)}
                                className={`
                  relative cursor-pointer rounded-2xl p-6 xl:min-h-[350px]
                  flex flex-col gap-[8px] items-start justify-end transition-all duration-300 bg-cover bg-center h-[400px]
                  ${selected === index
                                        ? "border border-[#1656A5] shadow-md"
                                        : ""
                                    }
                  w-full ${widthClass}
                `}
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="relative w-full h-full flex flex-col  justify-end">
                                    <div className="xl:max-w-[90%] flex flex-col justify-between ">
                                        <h3 className="text-[#2c2c2c] font-normal font-[Manrope] xl:text-[32px] text-[20px] csLg:leading-[40px] tracking-[-0.64px] " >

                                            {item.title}

                                        </h3>
                                        <h3 className="text-[#2c2c2c] font-normal font-[Manrope] xl:text-[32px] text-[20px] csLg:leading-[40px] tracking-[-0.64px] mb-2 " >

                                            {item.title2}

                                        </h3>
                                        <p className="text-[#606060] text-[16px] leading-6">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => window.open(item.link, "_blank")} className="bg-[#f3f6fa] mt-2 block xl:hidden px-4 w-full p-2 min-h-[56px] rounded-[16px] flex justify-between items-center text-[14px] font-[Manrope] font-regular text-[#252525]">Learn More <ArrowRight /></button>

                                {/* Arrow Button (Clickable Link) */}
                                <Link href={item.link} passHref>
                                    <div
                                        className={`absolute top-4 xl:flex hidden left-4 w-8 xl:w-14 xl:h-14 h-8 flex items-center justify-center rounded-lg transition ${selected === index
                                            ? "bg-[#1656A5]"
                                            : "bg-[#1656A5]/20 hover:bg-[#1656A5]"
                                            }`}
                                    >
                                        <ArrowRight
                                            className={`w-4 h-4 xl:w-5 xl:h-5 ${selected === index
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

                {/* Last 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[30%_35%_35%] gap-2 w-full justify-start">
                    {treatments.slice(3, 6).map((item, index) => {
                        const actualIndex = index + 3;
                        const widthClass = "w-full sm:w-auto md:w-auto min-w-[280px]";

                        return (
                            <div
                                key={actualIndex}
                                onMouseEnter={() => setSelected(actualIndex)}
                                onMouseLeave={() => setSelected(null)}
                                className={`
                  relative cursor-pointer rounded-2xl p-6 xl:min-h-[350px]
                  flex flex-col gap-[8px] items-start justify-end transition-all duration-300 bg-cover bg-center h-[400px]
                  ${selected === actualIndex
                                        ? "border border-[#1656A5] shadow-md"
                                        : "border border-transparent"
                                    }
                  w-full ${widthClass}
                `}
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                {/* overlay to soften bg for readability */}
                                <div className="absolute inset-0 " />

                                {/* Text */}
                                <div className="relative w-full h-full flex flex-col justify-end">
                                    <div className="xl:max-w-[95%] flex flex-col justify-between ">
                                        <h3 className="text-[#2c2c2c] font-normal font-[Manrope] xl:text-[32px] text-[20px] csLg:leading-[40px] tracking-[-0.64px] csLg:mb-2 " >
                                            {item.title}
                                        </h3>
                                        <h3 className="text-[#2c2c2c] font-normal font-[Manrope] xl:text-[32px] text-[20px] csLg:leading-[40px] tracking-[-0.64px] mb-2 " >
                                            {item.title2}
                                        </h3>
                                        <p className="text-[#606060] text-[16px] leading-6">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => window.open(item.link, "_blank")} className="bg-[#f3f6fa] mt-2 block xl:hidden px-4 w-full p-2 min-h-[56px] rounded-[16px] flex justify-between items-center text-[14px] font-[Manrope] font-regular text-[#252525]">Learn More <ArrowRight /></button>

                                {/* Arrow Button (Clickable Link) */}
                                <Link href={item.link} passHref>
                                    <div
                                        className={`absolute top-4 xl:flex hidden left-4 w-8 xl:w-14 xl:h-14 h-8 flex items-center justify-center rounded-lg transition ${selected === actualIndex
                                            ? "bg-[#1656A5]"
                                            : "bg-[#1656A5]/20 hover:bg-[#1656A5]"
                                            }`}
                                    >
                                        <ArrowRight
                                            className={`w-4 h-4 xl:w-5 xl:h-5 ${selected === actualIndex
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


