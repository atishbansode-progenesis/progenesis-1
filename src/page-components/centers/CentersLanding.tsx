import React from "react";
import Image from "next/image";
import '../about/AboutMain.css';
// C:\Users\vaibh\OneDrive\Desktop\prog\progenesis\public\images\center-banner-mob.png
// C:\Users\vaibh\OneDrive\Desktop\prog\progenesis\public\images\center-banner-web.png
const CentersLanding = () => {
  return (
    <section id="landing" className="relative w-screen h-[60vh] overflow-hidden">
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
      <div className="relative z-10 grid grid-cols-12 gap-4 min-h-[300px] md:min-h-[420px] lg:min-h-[500px] section-spacing">
        <div className="col-span-12 csLg:col-span-9 flex items-end lg:items-start justify-start min-h-[300px] lg:min-h-auto">
            <h1 className="font-manrope font-semibold text-[32px] lg:text-[60px] w-[288px] lg:w-auto h-[80px] 
                      leading-[48px] md:leading-[56px] lg:leading-[88px] tracking-[-0.02em] text-[#2C2C2C]">
              Our Fertility Centers
            </h1>
        </div>
      </div>
    </section>
  );
};

export default CentersLanding;
