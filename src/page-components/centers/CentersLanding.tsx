import React from "react";
import Image from "next/image";
import "../about/AboutMain.css";

const CentersLanding = () => {
  return (
    <section
      id="landing"
      className="relative w-screen h-[60vh] overflow-hidden flex items-center justify-start"
    >
      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/center-banner-mob.png"
          alt="Fertility Centers Mobile Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Desktop Background */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/center-banner-web.png"
          alt="Fertility Centers Desktop Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10  csLg:w-full px-6 md:px-12 lg:px-24 flex items-center">
        <h1
          className="font-manrope font-semibold text-[32px] lg:text-[60px] 
                     leading-[40px] md:leading-[50px] lg:leading-[80px] 
                     tracking-[-0.02em] text-[#2C2C2C] text-left"
        >
         Find Our IVF Fertility<br/> Clinic Near You
        </h1>
      </div>
    </section>
  );
};

export default CentersLanding;
