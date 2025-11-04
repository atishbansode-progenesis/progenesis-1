// DoctorsSection.jsx
import React from "react";
import '../about/AboutMain.css'

const doctors = [
  {
    name: "Dr. Narhari S. Malagaonkar",
    image: "/DoctorsSection/doctorimage.png",
    experience: [
      "15+ Years of Experience",
      "MD, DNB, DGO, FCPS, DFP (Mumbai)",
      "Fellowship in Reproductive Medicine (Singapore)",
    ],
    role: "Chief Fertility Consultant",
  },
  {
    name: "Dr. Sonali Malagaonkar",
    image: "/images/doctor-sonali.png",
    experience: [
      "14+ Years of Experience",
      "Fellowship in Reproductive Medicine",
      "M.S. Obstetrics and Gynecology (Mumbai)",
    ],
    role: "Sr. Fertility Consultant, Thane",
  },
];

const CenterDoctorsSection = () => {
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

        {/* Doctor Cards Container - Full width with centered content */}
       <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full ">
  {doctors.map((doctor, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[250px] flex-1 max-w-[832px] w-full"
    >
      {/* Image Section */}
      <div className="p-4 md:w-1/2 w-full overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full md:min-w-[240px] object-cover rounded-[16px]"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-between md:min-w-[200px] flex-1 p-4">
        <div>
          <h3 className="text-[#1656A5] font-[Manrope] text-2xl md:text-[40px] font-normal leading-tight mb-4">
            {doctor.name}
          </h3>
          <p className="text-[#606060] font-[Manrope] text-base leading-[24px] tracking-tight mb-4">
            {doctor.role}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {doctor.experience.map((exp, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-[16px] bg-[rgba(22,86,165,0.05)] text-[#1656A5] font-[Manrope] text-sm font-normal leading-[24px] tracking-tight"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default CenterDoctorsSection;