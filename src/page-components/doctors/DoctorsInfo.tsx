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
{
    slug: "dr-shital-sonone",
    name: "Dr. Shital Sonone",
    bio: "Fertility Consultant, Nashik.",
    experience: "09+ Years of Experience",
    qualifications: "MS (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Nashik",
    specialty: "MS (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Shital.png",
},
{
    slug: "dr-rajashree-patil",
    name: "Dr. Rajashree Patil",
    bio: "Fertility Consultant, Virar.",
    experience: "12+ Years of Experience",
    qualifications: "DNB DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Virar, Mumbai",
    specialty: "Obstetrics and Gynaecology",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Rajashree.png",
},
{
    slug: "dr-darshna-wahane",
    name: "Dr. Darshna Wahane",
    bio: "Fertility Consultant, Panvel",
    experience: "10+ Years of Experience",
    qualifications: "MBBS DGO (OBST & GYNAE)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Panvel, Mumbai",
    specialty: "MBBS DGO (OBST & GYNAE)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Darshna.png",
},
{
    slug: "dr-priti-pardeshi",
    name: "Dr. Priti Pardeshi",
    bio: "Fertility Consultant, Kalyan",
    experience: "12+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Kalyan, Mumbai",
    specialty: "DGO (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Priti.png",
},
{
    slug: "dr-teena-desai",
    name: "Dr. Teena Desai",
    bio: "Fertility Consultant, Andheri.",
    experience: "10+ Years of Experience",
    qualifications: "DNB DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Andheri, Mumbai",
    specialty: "DNB DGO (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Teena.png",
},
{
    slug: "dr-bhavika-sane",
    name: "Dr. Bhavika Sane",
    bio: "Fertility Consultant, Vashi.",
    experience: "04+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Andheri, Mumbai",
    specialty: "DGO (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Bhavika.png",
},
{
    slug: "dr-prerna-khandelwal",
    name: "Dr. Prerna Khandelwal",
    bio: "Fertility Consultant, Thane.",
    experience: "04+ Years of Experience",
    qualifications: "MS (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Thane, Mumbai",
    specialty: "MS (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Prerna.png",
},
{
    slug: "dr-shradha-pol",
    name: "Dr. Shradha Pol",
    bio: "Fertility Consultant, Thane.",
    experience: "04+ Years of Experience",
    qualifications: "MS (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Thane, Mumbai",
    specialty: "MS (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Shradha.png",
},
{
    slug: "dr-vivek-bagul",
    name: "Dr. Vivek Bagul",
    bio: "Fertility Consultant, Jalgaon.",
    experience: "04+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Jalgaon",
    specialty: "DGO (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Vivek.png",
}
];

const DoctorsInfo: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";
  return (
    <section className="section-spacing w-full bg-white px-6 md:px-12  lg:px-[90px] py-10 md:py-14">
      {/* Top breadcrumb tag */}
      <span className="inline-block bg-[#1656A50D] text-[#1656A5] lg:gap-[8px] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" >Our Doctors</span>
      <h2 className="text-[32px] gap-[46px] md:text-[40px] font-normal leading-tight text-[#2C2C2C] mb-2 font-[Manrope]" >
        Meet our Experts
      </h2>

      <div className="pb-4">
        {doctors.map((d, idx) => (
         <div

  key={idx}
  className="w-full border-b border-gray-200 py-3 md:py-4 mb-2 md:mb-3 last:border-b-0 last:mb-0"
>


            <div onClick={() => router.push(`/doctors/${d.slug}`)} className="grid  grid-cols-1 lg:grid-cols-[320px_1fr_260px] lg:gap-10 items-start lg:hover:bg-[#1656A50D] lg:p-4 rounded-[16px] cursor-pointer">
              {/* Left: Image */}
              <div className="w-full h-full md:h-full lg:h-full overflow-hidden rounded-[16px] bg-gray-100">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle: Content */}
              <div className="font-[Manrope]" >
                <h3 className="text-[26px] csLg:text-[36px] text-[#1656A5] gap-[8px] mt-4 font-normal tracking-[-0.02em]">
                  {d.name}
                </h3>
                <p className="mt-2 text-[14px] csLg:text-[16px] text-[#606060]  max-w-[780px]">
                  {d.bio}
                </p>

                <div className="mt-4 hidden csLg:flex flex-col gap-[8px] text-[13px] md:text-[14px] font-normal text-[#1656A5]">
                  <span>{d.experience}</span>
                  <span>{d.qualifications}</span>
                  <span>{d.fellowship}</span>
                </div>
                
                <div className="mt-4 flex flex-wrap csLg:hidden gap-[8px] text-[13px] md:text-[14px] font-normal text-[#1656A5]">
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
                    <div className="text-[16px] lg:text-[20px] text-[#1656A5] font-normal">
                      Hospital
                    </div>
                    <div className="text-[14px] text-[#606060] font-normal">
                      {d.hospital}
                    </div>
                  </div>

                  <div className="min-w-[150px] csLg:flex flex-col justify-end items-end">
                    <div className="text-[16px] lg:text-[20px] text-[#1656A5] font-normal">
                      Specialty
                    </div>
                    <div className="text-[14px] text-[#606060] font-normal text-start lg:text-end">
                      {d.specialty}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className=" w-fit csLg:w-full sm:w-auto h-[48px] px-5 rounded-[12px] bg-[#1656A5] text-white text-sm font-normal shadow-sm hover:bg-[#1656A5]/90 transition">
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