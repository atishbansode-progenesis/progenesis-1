"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { getAllDoctors, Doctor as ApiDoctor } from "@/data/doctors";

const DoctorsSection = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiDoctors: ApiDoctor[] = await getAllDoctors();
        // Transform API data to match component structure
        const transformedDoctors = apiDoctors.map((doc, idx) => ({
          id: idx,
          name: doc.name,
          image: doc.image,
          description: doc.bio,
          experience: [doc.experience, doc.qualifications, doc.fellowship].filter(Boolean),
          location: doc.hospital,
          role: doc.specialty,
        }));
        setDoctors(transformedDoctors);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while loading doctors');
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const prevDoctor = () => {
    setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  const nextDoctor = () => {
    setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.scrollWidth / doctors.length;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(index, doctors.length - 1));
    }
  };

  if (loading) {
    return (
      <section className="py-4 md:py-20 bg-[#FAFAFA] px-4 sm:px-6 lg:px-30 xl:px-30 2xl:px-32">
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600">Loading doctors...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-4 md:py-20 bg-[#FAFAFA] px-4 sm:px-6 lg:px-30 xl:px-30 2xl:px-32">
        <div className="flex justify-center items-center h-64">
          <p className="text-red-600">Error loading doctors: {error}</p>
        </div>
      </section>
    );
  }

  if (doctors.length === 0) {
    return (
      <section className="py-4 md:py-20 bg-[#FAFAFA] px-4 sm:px-6 lg:px-30 xl:px-30 2xl:px-32">
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-600">No doctors available.</p>
        </div>
      </section>
    );
  }

  const doctor = doctors[currentIndex];

  return (
    <section className="py-4 md:py-20 bg-[#FAFAFA] px-4 sm:px-6 lg:px-30 xl:px-30 2xl:px-32">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 mb-8 md:mb-20 lg:mb-32">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 lg:max-w-2xl">
          <span className="inline-block text-xs md:text-sm font-medium text-[#1656a5] bg-[#1656a50d] px-3 py-1 rounded-full mb-4 md:mb-6">
            The Experts
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 md:mb-6 leading-tight">
            Meet the Experts <br /> Behind the Magic
          </h2>
          <button aria-label="view all doctors" onClick={() => window.location.href = "/doctors"} className="px-6 cursor-pointer md:px-10 lg:px-12 py-2.5 md:py-3 rounded-lg md:rounded-2xl text-xs md:text-sm font-medium border border-[#1656a5] text-[#1656a5] hover:bg-[#1656a5] hover:text-white transition-all duration-300">
            View all Doctors
          </button>
        </div>

        {/* Right Side - Description */}
        <div className="w-full lg:w-1/2 flex items-center">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl leading-relaxed md:leading-relaxed lg:leading-10 tracking-tight font-normal">
            Our team of internationally trained fertility specialists, embryologists, and counselors provide medical expertise and emotional support throughout your journey — ensuring you feel cared for and confident every step of the way.          </p>
        </div>
      </div>

      {/* Doctor Card Carousel */}
      <div className="relative max-w-7xl mx-auto">
        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-hidden">
          {/* Counter - Mobile */}


          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pr-0"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            {doctors.map((doc, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[85%] snap-center"
              >
                <div className="rounded-lg bg-[#FFFFFF] h-[733px] overflow-hidden">
                  {/* Doctor Image */}
                  <div className="w-full p-2 flex items-center justify-center">
                    <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden h-[300px]">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        sizes="85vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4">
                    {/* Name and Description */}
                    <div className="mb-4">
                      <h3 className="text-[#1656A5] text-2xl font-normal leading-[40px] line-clamp-2 mb-2">
                        {doc.name}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {doc.description}
                      </p>
                    </div>

                    {/* Experience Tags */}
                    <div className="flex flex-col gap-2 mb-4">
                      {doc.experience.map((exp: string, expIdx: number) => (
                        <div
                          key={expIdx}
                          className="inline-flex w-fit px-3 py-2 text-[#1656A5] text-xs rounded-lg bg-blue-50"
                        >
                          {exp}
                        </div>
                      ))}
                    </div>

                    {/* Location and Role */}
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-[#2C2C2C] text-xl font-normal mb-1">
                        {doc.location}
                      </h4>
                      <span className="text-[#2C2C2C] text-sm opacity-50">
                        {doc.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 text-center">
            <p className="text-gray-600 text-xs font-semibold">
              {String(currentIndex + 1).padStart(2, "0")} of{" "}
              {String(doctors.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Desktop and Tablet View */}
        <div className="hidden md:block">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={prevDoctor}
            className="hidden xl:flex absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -translate-x-20 2xl:-translate-x-24 w-[56px] h-[56px] items-center justify-center rounded-[16px] border border-[#1656a5] text-[#1656a5] text-xl hover:bg-[rgba(22,86,165,0.05)] transition-all duration-300 z-10"
            aria-label="Previous doctor"
          >
            <img src="/icons/left.svg" alt="Previous" width={12} height={12} />
          </button>

          <button
            onClick={nextDoctor}
            className="hidden xl:flex absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 translate-x-20 2xl:translate-x-24 w-[56px] h-[56px] items-center justify-center rounded-[16px] border border-[#1656a5] text-[#1656a5] text-xl hover:bg-blue-50 transition-all duration-300 z-10"
            aria-label="Next doctor"
          >
            <img src="/icons/right.svg" alt="Next" width={12} height={12} />
          </button>

          {/* Doctor Card */}
          <div className=" bg-[#FFFFFF] rounded-2xl">
            {/* Counter */}
            <div className="relative ">
              <p className="absolute top-4 right-4 md:top-[-30px] md:right-6 text-gray-600 text-xs md:text-sm font-semibold z-10">
                {String(currentIndex + 1).padStart(2, "0")} of{" "}
                {String(doctors.length).padStart(2, "0")}
              </p>
            </div>

            {/* Card Content */}
            <div className="flex flex-col md:flex-row p-2 md:p-4 min-h-[450px] md:min-h-[420px] lg:min-h-[460px]">
              {/* Doctor Image */}
              <div className="w-full md:w-[40%] lg:w-[35%] p-2 md:p-3 flex items-center justify-center">
                <div className="w-full aspect-[390/444] relative rounded-[12px] overflow-hidden h-[430px] md:h-[400px] lg:h-[460px]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 35vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex flex-row gap-4 md:gap-6 p-2 md:p-4 flex-1">
                {/* Name and Description */}
                <div className="flex flex-col justify-between flex-1 min-h-full w-[60%] md:w-[65%]">
                  <div className="h-[250px] md:h-[270px] lg:h-[290px] overflow-hidden">
                    <h3 className="text-[#1656A5] text-[32px] mb-[8px] lg:text-[40px] md:text-[40px] lg:text-3xl font-normal leading-tight line-clamp-2">
                      {doctor.name}
                    </h3>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4">
                      {doctor.description}
                    </p>
                  </div>

                  {/* Experience Tags */}
                  <div className="flex flex-col gap-2.5 md:gap-3">
                    {doctor.experience.map((exp: string, idx: number) => (
                      <div
                        key={idx}
                        className="inline-flex w-fit px-3 text-[#1656A5] text-[14px] rounded-lg p-[12px] bg-blue-50"
                      >
                        {exp}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-end border-l h-full border-gray-200 pl-4 md:pl-6 min-h-full w-[40%] md:w-[35%]">
                  <div className="h-[80px] md:h-[100px] lg:h-[120px] flex flex-col justify-end">
                    <h4 className="text-[#2C2C2C] text-[32px]  mb-2 md:text-3xl lg:text-4xl font-normal leading-tight line-clamp-1">
                      {doctor.location}
                    </h4>
                    <span className="text-[#2C2C2C] text-[16px] opacity-50 whitespace-nowrap line-clamp-1">
                      {doctor.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Tablet */}
          <div className="flex xl:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevDoctor}
              className="w-[56px] h-[56px] rounded-[16px] flex items-center cursor-pointer justify-center border border-blue-600 text-[#1656a5] text-xl hover:bg-blue-50 transition-all duration-300"
              aria-label="Previous doctor"
            >
              <img src="/icons/left.svg" alt="Previous" width={12} height={12} />
            </button>
            <button
              onClick={nextDoctor}
              className="w-[56px] h-[56px] rounded-[16px] flex items-center cursor-pointer justify-center border border-blue-600 text-[#1656a5] text-xl hover:bg-blue-50 transition-all duration-300"
              aria-label="Next doctor"
            >
              <img src="/icons/right.svg" alt="Next" width={12} height={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;