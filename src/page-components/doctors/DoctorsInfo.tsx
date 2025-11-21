"use client";

import React, { Suspense, useState } from "react";
import AppointmentForm from "../about/AppointmentForm";
import { Doctor } from "@/data/doctors";
import Link from "next/link";

interface DoctorsInfoProps {
  doctors: Doctor[];
}

const DoctorsInfo: React.FC<DoctorsInfoProps> = ({ doctors }) => {
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);

  return (
    <section className="section-spacing w-full bg-white px-6 md:px-12 lg:px-[90px] py-10 md:py-14">
      {/* Top breadcrumb tag */}
      <span className="inline-block bg-[#1656A50D] text-[#1656A5] lg:gap-[8px] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">
        Our Doctors
      </span>
      <h2 className="text-[32px] gap-[46px] md:text-[40px] font-normal leading-tight text-[#2C2C2C] mb-2 font-[Manrope]">
        Meet our Experts
      </h2>

      <div className="pb-4">
        {doctors.map((d, idx) => (
          <div
            key={d.slug || idx} // safe key
            className="w-full border-b border-gray-200 py-3 md:py-4 mb-2 md:mb-3 last:border-b-0 last:mb-0"
          >
            <Link 
              href={`/doctors/${d.slug}`}
              className="grid grid-cols-1 lg:grid-cols-[320px_1fr_260px] lg:gap-10 items-start lg:hover:bg-[#1656A50D] lg:p-4 rounded-[16px] cursor-pointer"
            >
              {/* Left: Image */}
              <div className="w-full h-full md:h-full lg:h-full overflow-hidden rounded-[16px] bg-gray-100">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

            </Link>


              {/* Middle: Content */}
              <div className="font-[Manrope]">
                <h3 className="text-[26px] csLg:text-[36px] text-[#1656A5] gap-[8px] mt-4 font-normal tracking-[-0.02em]">
                  {d.name}
                </h3>
                <p className="mt-2 text-[14px] csLg:text-[16px] text-[#606060] max-w-[780px]">
                  {d.bio}
                </p>

                {/* Desktop qualifications */}
                <div className="mt-4 hidden csLg:flex flex-col gap-[8px] text-[13px] md:text-[14px] font-normal text-[#1656A5]">
                  <span>{d.experience}</span>
                  <span>{d.qualifications}</span>
                  <span>{d.fellowship}</span>
                </div>

                {/* Mobile qualifications */}
                <div className="my-4 flex flex-wrap csLg:hidden gap-[px] text-[13px] md:text-[14px] font-normal text-[#1656A5]">
                  <span>{d.experience} | {d.qualifications} | {d.fellowship}</span>
                </div>
              </div>

              {/* Right: Hospital + Specialty + CTA */}
              <div className="flex flex-col items-start justify-end csLg:items-end gap-4 lg:gap-[60px] font-[Manrope] w-full">
                {/* Hospital | Specialty */}
                <div className="w-full grid grid-cols-2 csLg:flex flex-col justify-end lg:gap-[24px]">
                  <div className="min-w-[150px] csLg:flex flex-col justify-end items-end">
                    <div className="text-[14px] text-[#1656A5] font-normal">Hospital</div>
                    <div className="text-[16px] lg:text-[20px] text-[#606060] font-normal">
                      {d.hospital}
                    </div>
                  </div>

                  <div className="min-w-[190px] csLg:flex flex-col justify-end items-end">
                    <div className="text-[14px] text-[#1656A5] font-normal">Speciality</div>
                    <div className="text-[16px] lg:text-[20px] text-[#606060] font-normal text-start lg:text-end">
                      {d.specialty}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAppointmentFormOpen(true);
                  }}
                  className="cursor-pointer w-fit csLg:w-full sm:w-auto h-[48px] px-5 rounded-[12px] bg-[#1656A5] text-white text-sm font-normal shadow-sm hover:bg-[#1656A5]/90 transition"
                >
                  Book Your Appointment
                </button>
              </div>
          </div>
        ))}
      </div>

      {/* Appointment Form Modal */}
      {isAppointmentFormOpen && (
        <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
          <AppointmentForm onClose={() => setIsAppointmentFormOpen(false)} />
        </Suspense>
      )}
    </section>
  );
};

export default DoctorsInfo;