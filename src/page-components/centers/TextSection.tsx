import React from 'react'

function TextSection({city}: {city: string}) {
  return (
    <section className="relative bg-center bg-cover flex justify-center items-center min-h-[360px] csLg:min-h-[312px] bg-gradient-to-tr from-[#94BA3D]/10 via-[#FAFAFA] to-[#1656A5]/10">
          <div 
            className="absolute inset-0 hidden md:block bg-cover bg-center"    
            aria-hidden
          />
          <p className="text-[#94BA3D] max-w-[90%] text-[28px] lg:text-[40px] lg:leading-[48px] tracking-tight text-center font-normal font-[Manrope] relative z-10">
            Our chain of fertility clinic is one of the most successful IVF center in {city}, having completed more than 18000+ successful IVFs. Our ART lab and IVF doctors, have more than 45 years of combined experience.
            </p>
        </section>
  )
}

export default TextSection