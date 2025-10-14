"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

export type Doctor = {
  slug: string;
  name: string;
  bio: string;
  experience: string;
  qualifications: string;
  fellowship: string;
  hospital: string;
  specialty: string;
  languages?: string;
  image: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-narhari-s-malgaonkar",
    name: "Dr. Narhari S. Malgaonkar",
    bio:
      "Dr. Narhari S. Malagaonkar is the dedicated and exclusive chief fertility consultant. Dr. Narhari S. Malagaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: "12+ Years of Experience",
    qualifications: "DNB/DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Mumbai",
    specialty: "Obstetrics and Gynaecology",
    languages: "Marathi, Hindi, English",
    image: "/images/doctor-narhari.png",
  },
  {
    slug: "dr-sonali-malgaonkar",
    name: "Dr. Sonali Malgaonkar",
    bio:
      "Dr. Sonali Malagaonkar is the dedicated and exclusive chief fertility consultant. Dr. Sonali Malagaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: "12+ Years of Experience",
    qualifications: "DNB/DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Mumbai",
    specialty: "Obstetrics and Gynaecology",
    languages: "Marathi, Hindi, English",
    image: "/images/doctor-sonali.png",
  },
  {
    slug: "dr-unnati-mamtora",
    name: "Dr. Unnati Mamtora",
    bio: "Fertility Consultant, Borivali",
    experience: "12+ Years of Experience",
    qualifications: "DNB DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Borivali, Mumbai",
    specialty: "Obstetrics and Gynaecology",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Unnati.png",
  },
  {
    slug: "dr-dinesh-wade",
    name: "Dr. Dinesh Wade",
    bio: "Fertility Consultant, Pune",
    experience: "14+ Years of Experience",
    qualifications: "MBBS, MS, DNB (OBST & GYNAE), FNB, MRCOG (UK)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Aundh, Pune",
    specialty: "MBBS, MS, DNB (OBST & GYNAE), FNB, MRCOG (UK)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Dinesh.png",
  },
  // Add remaining doctors...
];

const DoctorsInfo: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";

  return (
    // FIX: Replaced max-w-[100vw] with max-w-full and added 'min-w-0' to enforce width constraint and prevent overflow.
    // The issue is likely a child element that is too wide. The parent container must enforce its width strictly.
    <section className="section-spacing relative w-full max-w-full overflow-x-hidden overflow-y-visible bg-white px-4 sm:px-6 md:px-12 lg:px-[90px] py-10 md:py-14 min-w-0">
      {/* Breadcrumb */}
      <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">
        Our Doctors
      </span>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#2C2C2C] mb-6 font-[Manrope]">
        Meet our Experts
      </h2>

      <div className="pb-4 space-y-6 w-full">
        {doctors.map((d, idx) => (
          <div
            key={idx}
            className="w-full border-b border-gray-200 pb-6 mb-4 last:border-b-0 last:mb-0"
          >
            <div
              onClick={() => router.push(`/doctors/${d.slug}`)}
              // Added min-w-0 to the grid item to help it contain its children and respect the 'w-full' constraint
              className="grid grid-cols-1 lg:grid-cols-[320px_1fr_260px] gap-6 items-start lg:hover:bg-[#1656A50D] lg:p-4 rounded-[16px] cursor-pointer transition-all duration-300 w-full max-w-full overflow-hidden min-w-0" 
            >
              {/* Left: Image */}
              <div className="w-full max-w-full overflow-hidden rounded-[16px] bg-gray-100">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Middle: Info */}
              <div className="font-[Manrope] w-full min-w-0">
                <h3 className="text-[22px] md:text-[28px] text-[#1656A5] font-semibold tracking-[-0.02em]">
                  {d.name}
                </h3>
                <p className="mt-2 text-[14px] md:text-[15px] text-[#606060] lg:max-w-[780px] w-auto">
                  {d.bio}
                </p>

                <div className="mt-4 hidden csLg:flex flex-col gap-[8px] text-[13px] md:text-[14px] font-medium text-[#1656A5]">
                  <span>{d.experience}</span>
                  <span>{d.qualifications}</span>
                  <span>{d.fellowship}</span>
                </div>
                
                <div className="mt-4 flex flex-wrap csLg:hidden gap-[8px] text-[13px] md:text-[14px] font-medium text-[#1656A5]">
                  <span>{d.experience} |</span>
                  <span>{d.qualifications} | </span>
                  <span>{d.fellowship}</span>
                </div>
              </div>

              {/* Right: Hospital + Specialty + CTA */}
              <div className=" flex flex-col items-start justify-end csLg:items-end gap-4 lg:gap-[60px] font-[Manrope] w-full">
                {/* Hospital | Specialty */}
                <div className="w-full grid grid-cols-2 csLg:flex flex-col   justify-end  lg:gap-[24px]">
                  <div className="min-w-[150px] csLg:flex flex-col justify-end items-end">
                    <div className="text-[16px] lg:text-[20px] text-[#1656A5] font-semibold">
                      Hospital
                    </div>
                    <div className="text-[14px] text-[#606060] font-medium">
                      {d.hospital}
                    </div>
                  </div>

                  <div className="min-w-[150px] csLg:flex flex-col justify-end items-end">
                    <div className="text-[16px] lg:text-[20px] text-[#1656A5] font-semibold">
                      Specialty
                    </div>
                    <div className="text-[14px] text-[#606060] font-medium">
                      {d.specialty}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className=" w-fit csLg:w-full sm:w-auto h-[48px] px-5 rounded-[12px] bg-[#252525] text-white text-sm font-semibold shadow-sm hover:bg-[#000000] transition">
                  Book Your Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsInfo;