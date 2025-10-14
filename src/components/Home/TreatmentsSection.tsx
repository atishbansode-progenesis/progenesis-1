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
    <section className="w-full bg-blue-50 csLg:py-[80px] py-4">
      {/* Header Section (Static) */}
      <div className="csLg:px-[120px] px-4 mb-6 csLg:mb-[76px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="w-full max-w-full sm:max-w-xl md:max-w-xl flex flex-col gap-[24px] csLg:gap-[40px] ">
            <div className="flex flex-col gap-2">

              <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 w-fit py-1 rounded-full ">
                Our Expertise
              </span>
              <div>
                
              <h2 className="text-[32px] csLg:text-[48px] leading-[40px] font-light text-[#2c2c2c] leading-[56px] ">
                Being India’s Best Fertility & IVF Center. We Specialize in:
              </h2>
            </div>

            <button className="px-[14px] w-fit cursor-pointer md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition">
              View all treatments
            </button>
                          </div>

          </div>
          <div className="flex-1">
            {text.split("").map((char, i) => (
              <Letter key={i} char={char} />
            ))}
          </div>
        </div>
      </div>

      {/* Treatments Cards (Normal Flow, No Overlap) */}
      <div className="px-4 csLg:px-[120px]   csLg:mb-[76px] ">
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
                  relative cursor-pointer rounded-2xl p-6 csLg:h-[350px]
                  flex flex-col gap-[8px] csLg:gap-0 md:flex-row items-center justify-between transition-all duration-300
                  ${selected === index
                    ? "border border-[#1656A5] bg-white shadow-md"
                    : "border border-transparent bg-white"
                  }
                  w-full ${widthClass}
                `}
              >
                {/* Left Side (Text) */}
                <div className="flex flex-col  md:w-[350px]  md:pt-[100px] ">
                  <h3 className="text-[#2c2c2c] font-normal font-[Manrope] md:text-[32px] text-[20px] leading-[40px] tracking-[-0.64px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#606060] text-[16px] leading-6">
                    {item.description}
                  </p>
                </div>

                {/* Right Side (Image with Next.js) */}
                <div className="flex-shrink-0 csLg:-mt-[150px] ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={180}
                    className="object-cover"
                  />
                                   
                </div>
                <button onClick={() => window.open(item.link, "_blank")} className="bg-[#00000026] mt-2 block csLg:hidden px-4 w-full p-2 min-h-[56px] rounded-[16px] flex justify-between items-center text-[14px] font-[Manrope] font-regular text-[#252525]">Learn More <ArrowRight /></button>

                {/* Arrow Button (Clickable Link) */}
                <Link  href={item.link} passHref>
                  <div
                  className={`absolute top-4 csLg:flex hidden left-4 w-8 md:w-14 md:h-14 h-8 flex items-center justify-center rounded-lg transition ${selected === index
                        ? "bg-[#1656A5]"
                        : "bg-gray-100 hover:bg-[#1656A5]"
                      }`}
                  >
                    <ArrowRight
                      className={`w-4 h-4 md:w-5 md:h-5 ${selected === index
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
