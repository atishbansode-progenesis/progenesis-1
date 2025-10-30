"use client";

import React, { useMemo , useState } from "react";
import "../about/AboutMain.css";
import AppointmentForm from "../about/AppointmentForm";
import { doctors, Doctor } from "./DoctorsInfo";

export default function SingleDoctor({ selectedSlug }: { selectedSlug?: string }) {
  const selectedDoctor: Doctor | undefined = useMemo(() => {
    return selectedSlug ? doctors.find((d) => d.slug === selectedSlug) : undefined;
  }, [selectedSlug]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="section-spacing w-full bg-white px-6 md:px-12 lg:px-[90px] py-10 md:py-14">
      <div>
        {selectedDoctor && (
          <div className="w-full border-b border-gray-200 md:py-10 mb-8 md:mb-10 last:border-b-0 last:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-start">
              {/* Left: Image */}
              <div className="w-full h-full md:h-full lg:h-full overflow-hidden rounded-[16px] bg-gray-100">
                <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover" />
              </div>

              {/* Middle: Content */}
              <div className="font-[Manrope]">
                <h3 className="text-[26px] csLg:text-[40px] text-[#1656A5] font-normal tracking-[-0.02em]">
                  {selectedDoctor.name}
                </h3>
                <p className="mt-2 text-[14px] md:text-[16px] text-[#606060] max-w-[780px]">{selectedDoctor.singlePageBio}</p>

                {/* Meta row: Hospital | Specialty | Languages */}
                <div className="mt-6 flex flex-row items-start gap-8 lg:gap-[135px] pb-4">
                  <div className="min-w-[68px] lg:min-w-[90px]">
                    <div className="text-[16px] lg:text-[24px] font-semibold lg:font-normal text-[#1656A5]">Hospital</div>
                    <div className="text-[16px] text-[#2C2C2C] font-normal">{selectedDoctor.hospital}</div>
                  </div>
                  <div className="min-w-[98px] lg:min-w-[130px]">
                    <div className="text-[16px] lg:text-[24px] font-semibold lg:font-normal text-[#1656A5]">Specialty</div>
                    <div className="text-[16px] text-[#2C2C2C] font-normal max-w-[260px]">{selectedDoctor.specialty}</div>
                  </div>
                  {selectedDoctor.languages && (
                    <div className="min-w-[98px] lg:min-w-[160px]">
                      <div className="text-[16px] lg:text-[24px] font-semibold lg:font-normal text-[#1656A5]">Languages</div>
                      <div className="text-[16px] text-[#2C2C2C] font-normal max-w-[300px]">
                        {selectedDoctor.languages}
                      </div>
                    </div>
                  )}
                </div>
                {/* CTA buttons under meta: row on mobile, column on desktop */}
                <div className="mt-5 flex flex-row items-start gap-[16px]  justify-between md:justify-start">
                  <button
                    className="h-[56px]  rounded-[16px]  lg:w-[194px] bg-white text-[#606060] border border-[#606060] text-sm font-normal  hover:bg-white hover:text-[#1656A5] hover:border-[#1656A5] p-[10px]"
                  >
                    Call Our Team
                  </button>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="h-[56px] p-[10px]  lg:w-[194px] rounded-[16px] bg-[#1656A5] text-white text-sm  lg:text-[14px] font-normal  hover:bg-[#1656A5]/90"
                  >
                    Book Your Appointment
                  </button>
                  {/* Modal */}
            {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
