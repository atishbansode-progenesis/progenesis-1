"use client";
import React from "react";
import { useRouter } from "next/navigation";

const VisionMission: React.FC = () => {
  const router = useRouter();

  return (
    <section id="our-vision" className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-12">
        <div className="pb-6">
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[13px] px-3 py-1 rounded-[8px] mb-4">
            Our Vision & Mission
          </span>

          <h2 className="font-[Manrope] text-[40px] leading-[56px] font-normal text-[#2C2C2C] mt-4">
            Guided by Purpose. <br /> Driven by Compassion.
          </h2>
        </div>

        <div className="border-t border-gray-200 pt-8 pb-8 md:flex md:gap-8">
          <div className="md:w-1/3">
            <h3 className="text-[36px] leading-[44px] font-normal text-[#2C2C2C] mb-4">Our Vision</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-[18px] leading-[30px] text-[#2C2C2C]">
              At Progenesis IVF, our vision is to become the benchmark for reproductive healthcare — a trusted name where hope meets expertise. We are committed to walking hand-in-hand with every couple on their path to parenthood, blending cutting-edge fertility science with deep empathy and ethical care.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6"></div>

        <div className="pt-8 pb-14 md:flex md:gap-8">
          <div className="md:w-1/3">
            <h3 className="text-[36px] leading-[44px] font-normal text-[#2C2C2C] mb-4">Our Mission</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-[18px] leading-[30px] text-[#2C2C2C]">
              Our mission is to provide comprehensive, personalized fertility solutions in a nurturing environment that values trust, transparency, and dignity. We strive to deliver the highest standards in reproductive medicine, guided by compassion, clinical excellence, and a relentless dedication to making parenthood possible, one family at a time.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/About-Progenesis-spclist-Phone.png"
          />
          <img
            src="/images/About-Progenesis-spclist.png"
            alt="Fertility Consultants illustration"
            className="w-full h-auto block"
            draggable={false}
          />
        </picture>

        <div className="absolute inset-0 flex md:items-center">
          <div className="w-full px-6 md:px-12 ">
            <div className="mx-auto md:ml-auto md:mr-0 max-w-[900px]">
              <div className="text-center md:text-left">
                <p className="text-[28px] csLg:max-w-[98%] md:text-[40px] mt-10   lg:text-[40px] text-[#94BA3D] font-normal leading-tight">
                  Connect with our expert fertility consultants to explore the best treatment plan tailored for you.
                </p>

                <div className="mt-8 flex justify-center md:justify-start">
                  <button
                    onClick={() => router.push("/about-progenesis/leadership-team/")}
                    className="px-5 py-3 border border-[#1656A5] rounded-[8px] lg:rounded-[16px] bg-white text-[#1656A5] text-[14px] cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#f4f4f4] transition"
                  >
                    Meet Our Specialists
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
