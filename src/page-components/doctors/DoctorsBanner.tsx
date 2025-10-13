import React from 'react'

const DoctorBanner: React.FC = () => {
  return (
    <section className="w-full ">
      <div
        className="relative w-full h-[340px] sm:h-[380px] md:h-[500px] lg:h-[567px] overflow-hidden bg-no-repeat bg-cover bg-center flex items-end md:items-center
                   bg-[url('/images/DoctorB-mobile.png')] sm:bg-[url('/images/DoctorB.png')]"
      >
        {/* Overlay for better text contrast on mobile + soft fade to white at bottom like the design */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white/70 md:from-white/0 md:via-white/10 md:to-white/0" aria-hidden="true" />

        {/* Content */}
        <div className="section-spacing relative w-full p-5 sm:p-6 md:p-10 lg:p-14 h-[340px] sm:h-[380px] md:h-[500px] lg:h-[567px] flex items-end md:items-center">
          <h1
            className="text-[#2C2C2C] font-[Manrope] font-semibold tracking-[-0.02em] text-left csLg:max-w-[70%]
                       text-[32px] leading-[40px]
csLg:text-[80px] csLg:leading-[88px]"
          >
            Because of Their Expertise & Care, Dreams Have Found Life.
          </h1>
        </div>
      </div>
    </section>
  )
}

export default DoctorBanner