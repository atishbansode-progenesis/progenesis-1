"use client";

import React, { Suspense, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AppointmentForm from "../about/AppointmentForm";

export type Doctor = {
  slug: string;
  name: string;
  bio: string;
  singlePageBio?: string;
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
    slug: "dr-narhari-s-malagaonkar",
    name: "Dr. Narhari S. Malagaonkar",
    singlePageBio:
      "Dr. Narhari believes in combining advanced reproductive science with compassionate patient care. He takes time to understand every couple’s emotional and medical journey, ensuring each treatment plan is unique and backed by trust and transparency.",
    experience: "12+ Years of Experience",
    bio: "He emphasises a fully personalised fertility treatment plan and advanced laboratory technologies to address each couple’s unique infertility issues.",
    qualifications: "DNB/DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Mumbai",
    specialty: "Obstetrics and Gynaecology",
    languages: "Marathi, Hindi, English",
    image: "/images/doctor-narhari.png",
  },
  {
    slug: "dr-sonali-malagaonkar",
    name: "Dr. Sonali Malagaonkar",
    singlePageBio:
      "Dr. Sonali focuses on guiding patients through every step of their fertility journey with empathy and clarity. She believes emotional reassurance and education are just as vital as treatment, helping couples feel confident and understood throughout the process.",
    bio: "She combines fertility and gynaecological care with clear, empathetic communication, helping couples understand every step of their journey.",
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
    singlePageBio: "Dr. Unnati blends research-based medical practice with a personal touch, explaining procedures in detail and involving couples in every decision. Her calm and approachable nature helps patients feel comfortable even during challenging fertility treatments.",
    bio: "She combines fertility and gynaecological care with clear, empathetic communication, helping couples understand every step of their journey.",
    experience: "12+ Years of Experience",
    qualifications: "DNB DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Borivali, Mumbai",
    specialty: "Obstetrics and Gynaecology",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Unnati.png",
  },
  {
    slug: "dr-prerna-khandelwal",
    name: "Dr. Prerna Khandelwal",
    singlePageBio: "Dr. Prerna is dedicated to creating a calm, positive, and personalised fertility experience for every couple. Her transparent and optimistic approach helps patients stay hopeful and engaged through each stage of their treatment.",
    bio: "She focuses on personalising fertility care and supporting patients through each step with understanding and trust.",
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
    name: "Dr. Shraddha Pol",
    singlePageBio: "Dr. Shraddha approaches fertility care with empathy and evidence-based practice, guiding patients gently through sensitive decisions. She believes that informed and emotionally balanced patients have the best chance at success.",
    bio: "She applies research-based methods and clear guidance to help patients navigate IVF and infertility with confidence.",
    experience: "04+ Years of Experience",
    qualifications: "MS (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Thane, Mumbai",
    specialty: "MS (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Shradha.png",
  },
  {
    slug: "dr-bhavika-sane",
    name: "Dr. Bhavika Sane",
    singlePageBio: "Dr. Bhavika blends scientific precision with empathy, making complex fertility treatments easy to understand. She believes that success in fertility care comes from patience, reassurance, and treating each couple as a unique partnership.",
    bio: "Operating in Vashi, she is described as a fertility consultant with a strong clinical acumen backed by her past hospital work in Mumbai.",
    experience: "04+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Vashi, Mumbai",
    specialty: "Fertility consultant with general gynaecology background.",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Bhavika.png",
  },
  {
    slug: "dr-bhageshri",
    name: "Dr. Bhageshri",
    singlePageBio: "Dr. Bhageshri is a Fertility Consultant at Progenesis, Vashi, providing evaluation and treatment for infertility. She is trained in Ovulation Induction, IUI, IVF/ICSI, and offers individualized fertility treatment plans.",
    bio: "Dr. Bhageshri, Fertility Consultant at Progenesis Vashi, specializes in infertility evaluation and treatment, offering personalized care in Ovulation Induction, IUI, and IVF/ICSI.",
    experience: "08+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Vashi, Mumbai",
    specialty: "Fertility consultant with general gynaecology background.",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Bhageshri.png",

  },
  {
    slug: "dr-teena-desai",
    name: "Dr. Teena Desai",
    singlePageBio: "Dr. Teena takes a comprehensive approach by addressing both male and female fertility challenges together. She focuses on holistic wellbeing and open communication, ensuring that couples feel supported throughout their treatment.",
    bio: "She handles fertility consultations from the Andheri centre and is noted to have authored work on male sub-fertility as part of her research interests.",
    experience: "10+ Years of Experience",
    qualifications: "DNB DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Andheri, Mumbai",
    specialty: "DNB DGO (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Teena.png",
  },
  {
    slug: "dr-priti-pardeshi",
    name: "Dr. Priti Pardeshi",
    singlePageBio: "Dr. Priti is known for her approachable personality and clear guidance in fertility care. She focuses on understanding each patient’s story deeply and provides solutions that balance emotional and medical needs with compassion.",
    bio: "At the Kalyan location, she specialises in reproductive medicine and treats a broad range of fertility issues for couples.",
    experience: "12+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Kalyan, Mumbai",
    specialty: "DGO (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Priti.png",
  },
  {
    slug: "dr-darshna-wahane",
    name: "Dr. Darshna Wahane",
    singlePageBio: "Dr. Darshna promotes holistic health alongside fertility treatments, ensuring women understand their reproductive wellness fully. She believes in building long-term trust and creating a safe environment where patients feel heard and respected.",
    bio: "Serving at the Panvel centre, she combines general gynae-obstetric care with fertility consultation and enjoys teaching the importance of regular health-checkups.",
    experience: "10+ Years of Experience",
    qualifications: "MBBS DGO (OBST & GYNAE)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Panvel, Mumbai",
    specialty: "MBBS DGO (OBST & GYNAE)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Darshna.png",
  },
  {
    slug: "dr-rajashree-patil",
    name: "Dr. Rajashree Patil",
    singlePageBio: "Dr. Rajashree ensures that each couple feels emotionally supported and well-informed during their fertility journey. Her gentle communication style and ability to simplify complex medical terms make patients feel valued and secure.",
    bio: "Located in Virar, she focuses on endoscopic surgeries and advanced infertility treatments including managing patients with repeated IUI/IVF failures.",
    experience: "12+ Years of Experience",
    qualifications: "DNB DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Virar, Mumbai",
    specialty: "Obstetrics and Gynaecology",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Rajashree.png",
  },
  {
    slug: "dr-dinesh-wade",
    name: "Dr. Dinesh Wade",
    singlePageBio: "Dr. Dinesh follows a holistic and transparent approach to fertility care, focusing on creating an open dialogue with his patients. He believes that informed decisions lead to better outcomes, ensuring couples fully understand their options before proceeding.",
    bio: "Based in Pune, he brings together obstetrics-Gynaecology and reproductive medicine to support couples through their parenthood journey.",
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
    singlePageBio: "Dr. Shital is known for her patient-first mindset, especially when treating couples facing repeated IVF or IUI failures. She brings empathy and perseverance to her consultations, helping patients regain confidence and hope through tailored treatment plans.",
    bio: "Located in Nashik, she focuses on endoscopic surgeries and advanced infertility treatments including managing patients with repeated IUI/IVF failures.",
    experience: "09+ Years of Experience",
    qualifications: "MS (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Nashik",
    specialty: "MS (Obstetrics and Gynaecology)",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Shital.png",
  },
  {
    slug: "dr-ashwini-talpe",
    name: "Dr. Ashwini Talpe",
    singlePageBio: "Dr. Ashwini Talpe, Fertility Consultant at Progenesis Nagpur, holds an MS in Obstetrics & Gynaecology and a Fellowship in Reproductive Medicine, specializing in infertility and IVF/ICSI.",
    bio: "Dr. Ashwini Talpe, Fertility Consultant at Progenesis Nagpur, holds an MS in Obstetrics & Gynaecology and a Fellowship in Reproductive Medicine, specializing in infertility and IVF/ICSI.",
    experience: "04+ Years of Experience",
    qualifications: "MS (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Nagpur",
    specialty: "Fertility consultant with general gynaecology background.",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Ashwini.png",
  },
  {
    slug: "dr-suchitra-somkuwar",
    name: "Dr. Suchitra Somkuwar",
    singlePageBio: "Dr. Suchitra Somkuwar, Fertility Consultant at Progenesis Nagpur, specializes in reproductive health and infertility, offering Ovulation Induction, IUI, and IVF with a patient-focused approach.",
    bio: "Dr. Suchitra Somkuwar, Fertility Consultant at Progenesis Nagpur, specializes in reproductive health and infertility, offering Ovulation Induction, IUI, and IVF with a patient-focused approach.",
    experience: "05+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Nagpur",
    specialty: "Fertility consultant with general gynaecology background.",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Suchitra.png",
  },
  {
    slug: "dr-sangita-ingle",
    name: "Dr. Sangita Ingle",
    singlePageBio: "Dr. Sangita Ingle, Fertility Consultant at Progenesis Ahilyanagar, holds a DNB in Obstetrics & Gynaecology and a Fellowship in Reproductive Medicine, specializing in infertility and IVF/ICSI care.",
    bio: "Dr. Sangita Ingle, Fertility Consultant at Progenesis Ahilyanagar, holds a DNB in Obstetrics & Gynaecology and a Fellowship in Reproductive Medicine, specializing in infertility and IVF/ICSI care.",
    experience: "05+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Ahilyanagar",
    specialty: "Fertility Treatment",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Sangita.png",
  },
  {
    slug: "dr-tushar-zanjade",
    name: "Dr. Tushar Zanjade",
    singlePageBio: "Dr. Tushar Zanjade holds an MBBS degree, qualifying him to practice medicine and pursue further specialization. He is trained in clinical diagnosis and patient care, forming a solid foundation for his medical practice.",
    bio: "Dr. Tushar Zanjade holds an MBBS degree with training in clinical diagnosis and patient care, forming a strong foundation for his medical practice.",
    experience: "06+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Bachelor of Medicine, Bachelor of Surgery",
    hospital: "Amravati",
    specialty: "Fertility Treatment",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Tushar.png",
  },
  {
    slug: "dr-apurva-patni",
    name: "Dr. Apurva Patni",
    singlePageBio: "Dr. Apurva Patny, Fertility Consultant at Progenesis Solapur, specialises in IVF, ICSI, and advanced fertility care.",
    bio: "Dr. Apurva Patny, Fertility Consultant at Progenesis Solapur, specialises in IVF, ICSI, and advanced fertility care.",
    experience: "04+ Years of Experience",
    qualifications: "DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Solapur",
    specialty: "Fertility Treatment",
    languages: "Marathi, Hindi, English",
    image: "/images/doctors/Apurva.png",
  },
  {
    slug: "dr-vivek-bagul",
    name: "Dr. Vivek Bagul",
    singlePageBio: "Dr. Vivek is known for his composed and reassuring nature, ensuring that every patient feels comfortable discussing their concerns openly. His approach centres on providing clarity, emotional support, and precise fertility care.",
    bio: "Dr. Vivek’s calm and reassuring nature helps patients feel comfortable sharing their concerns. He focuses on clarity, emotional support, and precise fertility care.",
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
  const [isAppointmentFormOpen, setIsAppointmentFormOpen] = useState(false);

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

                <div className="my-4 flex flex-wrap csLg:hidden gap-[px] text-[13px] md:text-[14px] font-normal text-[#1656A5]">
                  <span>{d.experience} | {d.qualifications} | {d.fellowship}</span>
                </div>
              </div>

              {/* Right: Hospital + Specialty + CTA */}
              <div className=" flex flex-col items-start justify-end csLg:items-end gap-4 lg:gap-[60px] font-[Manrope] w-full">
                {/* Hospital | Specialty */}
                <div className="w-full grid grid-cols-2 csLg:flex flex-col   justify-end  lg:gap-[24px]">
                  <div className="min-w-[150px] csLg:flex flex-col justify-end items-end">
                    <div className="text-[14px] text-[#1656A5] font-normal">
                      Hospital
                    </div>
                    <div className="text-[16px] lg:text-[20px] text-[#606060] font-normal">
                      {d.hospital}
                    </div>
                  </div>

                  <div className="min-w-[190px] csLg:flex flex-col justify-end items-end">
                    <div className="text-[14px]  text-[#1656A5] font-normal">
                      Specialty
                    </div>
                    <div className="text-[16px] lg:text-[20px] text-[#606060] font-normal text-start lg:text-end">
                      {d.specialty}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button onClick={(e) => { e.stopPropagation(); setIsAppointmentFormOpen(true) }} className="cursor-pointer w-fit csLg:w-full sm:w-auto h-[48px] px-5 rounded-[12px] bg-[#1656A5] text-white text-sm font-normal shadow-sm hover:bg-[#1656A5]/90 transition">
                  Book Your Appointment
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
      {isAppointmentFormOpen && (
        <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
          <AppointmentForm onClose={() => setIsAppointmentFormOpen(false)} />
        </Suspense>
      )}
    </section>
  );
};

export default DoctorsInfo;