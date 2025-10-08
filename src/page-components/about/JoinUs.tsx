import React from "react";

const JoinUs: React.FC = () => {
  return (
    <div className="section-spacing flex flex-col md:flex-row items-center bg-gradient-to-r  py-8 md:py-10 px-4 md:px-6 lg:px-8 gap-4 md:gap-6">
      {/* Left: Doctor Image (mobile: comes second) */}
      <div className="order-2 md:order-1 flex-shrink-0 w-full md:w-[300px] csLg:w-[350px] flex justify-center md:justify-end">
        <img
          src="/images/doctor.png"
          alt="Doctor"

          className="h-[260px] csLg:h-[340px] object-cover rounded-[12px] ]"

        />
      </div>

      {/* Right: Text and Button (mobile: text first, button last) */}
      <div className="order-1 csLg:order-2 flex-1 text-center lg:text-start csLg:pl-10 lg:max-w-[1024px] w-full flex flex-col">

        <div className="text-center lg:text-start text-[32px] lg:text-[48px] text-[#94BA3D] font-normal lg:leading-[56px] mb-4 csLg:mb-8">
          We’re looking for passionate people to help create life’s most precious journeys.
        </div>
        <div className="order-3 mt-2 csLg:order-2 justify-center text-center">
        <div className="order-3 csLg:order-2 text-center lg:text-start">
          <button className="w-[96px] h-[40px] csLg:w-[150px] csLg:h-[48px] py-2.5 border border-[#1656A5] rounded-[16px] bg-[#FFFFFF] text-[#1656A5] text-[12px] csLg:text-[14px] cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:bg-[#f4f4f4]">
              Join Our Team
          </button>
        </div>

      </div>
    </div>
    </div>
  );
};

export default JoinUs;
