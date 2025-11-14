import React from "react";

export const Frame = () => {
  return (
    <div className="bg-white h-[950px] overflow-hidden w-[1920px] relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-bg-black opacity-25 w-full h-[950px]" />
      
      {/* Progress indicators */}
      <div className="absolute left-[120px] top-[891px] flex items-center gap-1 h-[3px]">
        <div className="bg-text-white rounded-[10px] h-0.5 w-20" />
        <div className="bg-text-white rounded-[10px] h-0.5 w-20 opacity-20" />
        <div className="bg-text-white rounded-[10px] h-0.5 w-20 opacity-20" />
        <div className="bg-text-white rounded-[10px] h-0.5 w-20 opacity-20" />
      </div>

      {/* Action buttons */}
      <div className="absolute left-[121px] top-[774px] flex items-center gap-2">
        {/* Book Your Appointment button */}
        <div className="backdrop-blur-[7.5px] bg-bg-white rounded-2xl p-2 flex flex-col gap-2">
          <div className="flex items-center rounded-[50px] w-full">
            <div className="flex items-center justify-center rounded-[50px] px-3 py-2">
              <span className="text-text-black font-manrope text-sm font-medium tracking-[-0.28px] leading-6 whitespace-nowrap">
                Book Your Appointment
              </span>
            </div>
          </div>
        </div>

        {/* Find My Right Treatment button */}
        <div className="backdrop-blur-[7.5px] border border-bg-white rounded-2xl p-2 flex flex-col gap-2">
          <div className="flex items-center rounded-[50px] w-full">
            <div className="flex items-center justify-center rounded-[50px] px-3 py-2">
              <span className="text-text-white font-manrope text-sm font-medium tracking-[-0.28px] leading-6 whitespace-nowrap">
                Find My Right Treatment
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main heading */}
      <h1 className="absolute left-[121px] top-[461px] w-[753px] text-bg-white font-manrope text-[80px] font-semibold tracking-[-1.60px] leading-[88px]">
        What would you like to know about your fertility journey?
      </h1>
    </div>
  );
};
