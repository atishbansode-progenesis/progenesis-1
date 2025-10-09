import React from "react";
import '../about/AboutMain.css'

const CentersLanding = () => {
  return (
    <section id="landing" className="relative w-full h-[60%] overflow-hidden bg-gradient-to-r from-green-100 via-white to-sky-200">
      {/* Background images: mobile and desktop */}
      <div className="section-spacing">
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Nasik.jpg')" }}
        aria-hidden
      />
        <div
        className="absolute inset-0 w-[100%] h-[100%] hidden md:block bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cenBanD.png')" }}
        aria-hidden
        />
      

        <div className='relative grid grid-cols-12 gap-4 min-h-[300px] md:min-h-[420px] lg:min-h-[500px]'>
        {/* Left: Content block */}
            <div className='col-span-12 csLg:col-span-9 flex items-center'>
                <div className='text-start'>
            {/* Title */}
                    <h1 className='font-manrope font-semibold lg:text-[80px] md:text-[48px] md:leading-[56px] text-[32px] lg:leading-[88px] leading-[48px] tracking-[-0.02em] text-[#2C2C2C]'>
                     Our Fertility Centers
                    </h1>
                </div>
            </div>

        {/* Right column removed; background image now covers entire section */}
          </div>
      </div>
    </section>
  );
};

export default CentersLanding;
