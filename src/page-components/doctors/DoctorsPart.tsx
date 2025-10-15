import React from "react";

const DoctorsPart = () => {
  return (
    <section>
      <div
        className="section-spacing relative flex w-full h-[605px] px-10 md:px-12 lg:px-[90px] py-10 md:py-14 bg-cover bg-center"
        style={{
          backgroundImage: "url('/DoctorsSection/Doctors banner mobile.png')",
        }}
      >
        {/* Large screen background */}
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/DoctorsSection/Doctors banner 2.png')",
          }}
        ></div>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-20 lg:opacity-0"></div>

        {/* Top-right heading */}
        <div className="absolute top-[60px] right-0 lg:right-[90px] w-full lg:w-auto text-center lg:text-right z-10">
          <h2 className="text-[#1656A5] font-semibold text-[28px] md:text-[40px] lg:text-[46px] leading-[1.2] tracking-[-0.02em]">
            <span className="block">Book your appointment</span>
            <span className="block">with our experts today.</span>
          </h2>
        </div>

        {/* Paragraph text */}
        <div className="absolute  w-full px-6 text-center lg:text-left lg:w-auto lg:bottom-10 lg:left-[90px] top-[180px] lg:top-auto left-0 lg:right-auto z-10">
          <p className="text-[14px] md:text-[16px] text-[#3B3B3B] leading-[1.4]">
            <span className="block">Connect with the specialists who</span>
            <span className="block">combine world-class expertise with</span>
            <span className="block">genuine care, and take your first step</span>
            <span className="block">toward parenthood.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorsPart;
