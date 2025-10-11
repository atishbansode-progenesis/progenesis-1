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
        <h2 className="absolute top-[60px] right-[40px] text-[#1656A5]  text-right font-semibold text-[28px] md:text-[40px] leading-[1.2] tracking-[-0.02em] z-10">
          <span className="block">Book your appointment</span>
          <span className="block">with our experts today.</span>
        </h2>

        {/* Paragraph text */}
        <p className="absolute text-[14px] md:text-[16px] text-[#3B3B3B] text-center leading-[1.4] z-10
          w-full px-6 top-[180px] lg:top-auto lg:bottom-10 lg:left-[90px] lg:right-auto lg:text-start lg:w-auto"
        >
          <span className="block">Connect with the specialists who </span>
          <span className="block">combine world-class expertise with</span>
         <span className="block">genuine care, and take your first step </span> 
         <span className="block">toward parenthood.</span>
        </p>
      </div>
    </section>
  );
};

export default DoctorsPart;
