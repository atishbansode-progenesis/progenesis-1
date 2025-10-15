import React from "react";

const JoinUs: React.FC = () => {
  return (
<div className="flex bg-[url('/images/gradient-mob-bg.png')] csLg:bg-[url('/images/gradient-banner.png')] bg-cover bg-center flex-col pt-[40px] csLg:flex-row justify-between csLg:justify-end w-full relative csLg:min-h-[500px] min-h-[515px]   ">

  {/* Doctor Image */}
    <img
      src="/images/doctor.png"
      alt="Doctor"
      className=" object-contain h-[300px] rounded-[12px] absolute bottom-0 csLg:left-[120px] csLg:h-[80%] hidden csLg:block"
    />

  {/* Content */}
  <div className="csLg:max-w-[70%] flex flex-col justify-center items-center csLg:items-start text-center csLg:text-left text-white gap-6 ">
    <h2 className="text-[28px] csLg:max-w-[90%] md:text-[40px] lg:text-[40px] text-[#94BA3D] font-normal leading-tight">
    We’re always looking for passionate people to join us in creating life’s most precious journeys. </h2>

    <button className="w-[120px] h-[44px] csLg:w-[150px] csLg:h-[48px] py-2.5 border border-[#1656A5] rounded-[8px] lg:rounded-[16px] bg-white text-[#1656A5] text-[14px] cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#f4f4f4] transition">
      Join Our Team
    </button>
  </div>

  <img
      src="/images/doctor.png"
      alt="Doctor"
      className=" object-contain h-[300px] block csLg:hidden"
    />

</div>




  );
};

export default JoinUs;
