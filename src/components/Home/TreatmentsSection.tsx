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
      link: "/treatments/infertility/ivf",
    },
    {
      title: "Egg Freezing and Preservation",
      description:
        "Your journey is uniquely yours. Whenever you feel ready, we’ll be right here waiting for you.",
      image: "/TreatmentsSection/eggfreezing.png",
      link: "/treatments/preservation/female-fertility-preservation",
    },
    {
      title: "Multiple IVF & IUI Failures",
      description:
        "Advanced care and tailored treatments to give fresh hope after repeated failed attempts.",
      image: "/TreatmentsSection/multipleivf.png",
      link: "/infertility/female/repeated-ivf-failures",
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description:
        "For some, the gentlest nudge is all it takes. We guide you with care and precision.",
      image: "/TreatmentsSection/iui.png",
      link: "/treatments/infertility/iui",
    },
    {
      title: "Male Fertility Solutions",
      description:
        "Fertility is not just a woman’s story. We’re here for every partner, every question, every step.",
      image: "/TreatmentsSection/malefertility.png",
      link: "/treatments/evaluation/male-analysis",
    },
    {
      title: "Pregnancy after Menopause",
      description:
        "Advanced techniques that make motherhood possible, even beyond menopause.",
      image: "/TreatmentsSection/menopause.png",
      link: "/infertility/female/pregnancy-after-menopause",
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
            <button className="px-[14px] cursor-pointer md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition">
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
              ? "lg:w-[27.5%] sm:w-[30%] min-w-[280px]"
              : "lg:w-[34%] sm:w-[30%] min-w-[280px]";

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
