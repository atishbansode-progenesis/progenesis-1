import React from 'react'

const DoctorBanner: React.FC = () => {
  return (
    <section className="w-full">
      <div
        className="relative w-full overflow-hidden bg-no-repeat bg-cover bg-center flex items-end md:items-center
                   bg-[url('/images/Doctorss_b_mobile.png')] sm:bg-[url('/images/DoctorB.png')]"
      >
        {/* Overlay for better text contrast on mobile + soft fade to white at bottom like the design */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
        />

        {/* Content */}

        <div className="section-spacing relative w-full p-5 sm:p-6 md:p-10 lg:p-14 h-[340px] sm:h-[380px] md:h-[500px] lg:h-[567px] flex flex-col space-y-[14px] md:space-y-[44px] items-start md:items-start">
        <span className="flex text-[12px] lg:text-[18px]  font-medium flex flex-wrap items-start gap-2 lg:gap-[12px]">
          <p className='text-[#252525]'>Home</p>
          <p> {">"} </p>
          <p className='text-[#165685]'>Doctors</p>

          </span>
          <div className="w-full lg:max-w-[70%]"> {/* constrain width on large screens like design */}
            <h1
              className="text-[#2C2C2C] font-[Manrope] font-semibold tracking-[-0.02em] text-left
                         text-[32px] csLg:text-[60px] leading-[40px] csLg:leading-[65px]
                         "
            >
              Because of Their Expertise &amp; <br />
              Care, Dreams Have Found Life.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorBanner
