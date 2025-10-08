'use client'
import React, { useRef } from 'react'

const CareersLanding = () => {
    const scrollerRef = useRef<HTMLDivElement | null>(null)

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="section-spacing bg-gradient-to-r from-green-100 via-white to-sky-200 relative w-full h-[340px] sm:h-[380px] md:h-[500px] lg:h-[567px] overflow-hidden bg-no-repeat bg-cover bg-center flex items-start
                  bg-[url('/images/Carrer-mobile.png')] h-[444px] csLg:h-full sm:bg-[url('/images/Carrer.png')]">
                <div className="container md:pr-0 grid grid-cols-12 gap-6 items-start">
                    <div className="col-span-12 csLg:col-span-8 flex flex-col gap-10">
                        <p className="font-manrope csLg:text-[18px] text-[12px] leading-[26px] tracking-[-0.02em] text-gray-700">
                            <button onClick={() => window.location.href = '/'} className='hover:cursor-pointer'> Home </button><span className="px-[12px]">›</span> <span className="text-[#1656A5]"> Careers</span>
                        </p>
                        <h1 className="font-manrope font-semibold csLg:text-[64px] text-[32px] csLg:leading-[72px] leading-[40px] tracking-[-0.02em] text-[#111827]">
                            What We Offer: Care,
                            <br className="hidden csLg:block" />
                            Growth & Purpose
                        </h1>
                        <div>
                            <button className="bg-[#252525] h-[40px] text-[#F9F9F9] font-manrope csLg:text-[18px] text-[14px] rounded-xl p-2">
                                See Open Positions
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            <section className="section-spacing">
                {/* Mobile: horizontal scroller; Desktop: 3-column grid */}
                <div
                    className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory md:flex-nowrap md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
                    aria-label="Careers gallery"
                    ref={scrollerRef}
                >
                    <img
                        src="/images/ReBanner1.png"
                        alt="Clinic 1"
                        className="w-[834px] sm:w-full csLg:h-[560px] h-[260px] flex-none object-cover rounded-xl snap-start"
                    />
                    <img
                        src="/images/ReBanner2.png"
                        alt="Clinic 2"
                        className="w-[834px] sm:w-full csLg:h-[560px] h-[260px] flex-none object-cover rounded-xl snap-start"
                    />
                    <img
                        src="/images/Rebanner3.png"
                        alt="Clinic 3"
                        className="w-[834px] sm:w-full csLg:h-[560px] h-[260px]  flex-none object-cover rounded-xl snap-start"
                    />
                </div>
                <div className="flex items-center justify-center gap-2 mt-6 md:mt-8 pt-4">
                    <button
                        aria-label="Previous"
                        onClick={() => {
                        const el = scrollerRef.current
                        if (!el) return
                        const delta = Math.round(el.clientWidth * 0.8)
                        el.scrollBy({ left: -delta, behavior: 'smooth' })
                    }}
                    className="h-[56px] w-[56px] rounded-[16px] font-bold border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100"
                >
                    <img src="/icons/left.svg" alt="right" width={12} height={12} />
                </button>
                    <button
                        aria-label="Next"
                        onClick={() => {
                        const el = scrollerRef.current
                        if (!el) return
                        const delta = Math.round(el.clientWidth * 0.8)
                        el.scrollBy({ left: delta, behavior: 'smooth' })
                            }}
                        className="h-[56px] w-[56px] font-bold rounded-[16px] border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100"
                            >
                                <img src="/icons/right.svg" alt="right" width={12} height={12} />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default CareersLanding

