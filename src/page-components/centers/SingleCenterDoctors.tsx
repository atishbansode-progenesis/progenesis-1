import React, { useEffect, useState, useRef, useCallback } from "react";
import '../about/AboutMain.css'

const CenterDoctorsSection = ({ centre }: any) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showDotors, setShowDoctors] = useState<any>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [winWidth, setWinWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const GAP = 24; 

  const calculateVisibleCards = useCallback(() => {
    return winWidth >= 768 ? 2 : 1;
  }, [winWidth]);

  const visibleCards = calculateVisibleCards();
  const isCarousel = showDotors.length > visibleCards;
  const totalSlides = Math.ceil(showDotors.length / visibleCards);

  useEffect(() => {
    setShowDoctors(centre.availableDoctors || []);
  }, [centre]);

  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isCarousel || showDotors.length === 0 || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isCarousel, showDotors.length, totalSlides]);

  useEffect(() => {
    if (!isCarousel || !scrollRef.current) return;

    const sc = scrollRef.current;
    const containerWidth = sc.offsetWidth;

    const totalGaps = GAP * (visibleCards - 1);
    const cardWidth = (containerWidth - totalGaps) / visibleCards;
    const scrollAmount = currentSlide * (cardWidth + GAP);

    sc.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }, [currentSlide, isCarousel, winWidth, showDotors.length, visibleCards]);

  const renderDoctorCards = (doctor: any, index: number) => {
    const cardStyle = isCarousel
      ? {
          width: `calc((100% - ${GAP * (visibleCards - 1)}px) / ${visibleCards})`,
          flexShrink: 0,
          scrollSnapAlign: 'start' as const,
        }
      : {};

    return (
      <div
        key={index}
        className={`doctor-card bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 flex flex-col min-h-[250px] w-full 
          ${isCarousel ? 'md:flex-row' : 'md:flex-row flex-1 max-w-[832px] mx-auto'}`
        }
        style={{ ...cardStyle }}
      >
        <div className="p-4 md:w-1/2 w-full h-full overflow-hidden">
          <img
            src={doctor.image || "/default-doctor.png"}
            alt={doctor.name}
            className="w-full h-full md:min-w-[240px] object-cover rounded-[16px]"
          />
        </div>

        <div className="flex flex-col justify-between md:min-w-[200px] flex-1 p-4">
          <div>
            <h3 className="text-[#1656A5] font-[Manrope] text-2xl md:text-[40px] font-normal leading-tight mb-4">
              {doctor.name}
            </h3>
            <p className="text-[#606060] font-[Manrope] text-base leading-[24px] tracking-tight mb-4">
              {doctor.specialty}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
          <div className="flex flex-wrap gap-3">
            {(Array.isArray(doctor.experience) ? doctor.experience : [doctor.experience]).map((exp: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-[16px] bg-[rgba(22,86,165,0.05)] text-[#1656A5] font-[Manrope] text-sm font-normal leading-[24px] tracking-tight"
              >
                {exp}
              </span>
            ))}
          </div>
            {[doctor.qualifications, doctor.fellowship].filter(Boolean).map((item: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-[16px] bg-[rgba(22,86,165,0.05)] text-[#1656A5] font-[Manrope] text-sm font-normal leading-[24px] tracking-tight"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#F9FAFB]">
      <div className=" p-4 csLg:px-[120px] csLg:py-[80px] ">
        <div className="hidden csLg:block mb-12 md:mb-24">
          <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/10 px-3 py-1 rounded-[8px] mb-6">
            The Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-normal leading-[56px] tracking-tight text-[#2C2C2C]">
            Know more about the <br /> doctors at this center
          </h2>
        </div>

        <div
          ref={scrollRef}
          className={`flex gap-6 ${isCarousel ? 'overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide' : 'flex-col md:flex-row justify-center'}`}
          style={{
            flexWrap: isCarousel ? 'nowrap' : 'wrap',
            scrollbarWidth: isCarousel ? 'none' : undefined,
            msOverflowStyle: isCarousel ? 'none' : undefined,
          }}
        >
          {showDotors.map((doctor: any, index: number) => renderDoctorCards(doctor, index))}
        </div>

        {isCarousel && totalSlides > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalSlides)].map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#1656A5] w-6' : 'bg-[#1656A5]/30'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default CenterDoctorsSection;
