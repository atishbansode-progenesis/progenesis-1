import React from "react";

const JoinUs: React.FC = () => {
  return (
<div className="grid grid-cols-3  bg-gradient-to-r from-green-300 csLg:min-h-[500px] px-4 md:px-[120px]  ">

  {/* Doctor Image */}
  <div className="relative h-full csLg:max-w-[300px]  ">
    <img
      src="/images/doctor.png"
      alt="Doctor"
      className=" object-contain rounded-[12px] absolute bottom-0 "
    />
  </div>

  {/* Content */}
  <div className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white gap-6 ">
    <h2 className="text-[28px] md:text-[40px] lg:text-[48px] text-[#94BA3D] font-normal leading-tight">
      We’re looking for passionate people to help create life’s most precious journeys.
    </h2>

    <button className="w-[120px] h-[44px] csLg:w-[150px] csLg:h-[48px] py-2.5 border border-[#1656A5] rounded-[8px] lg:rounded-[16px] bg-white text-[#1656A5] text-[14px] cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#f4f4f4] transition">
      Join Our Team
    </button>
  </div>
</div>




  );
};

export default JoinUs;
