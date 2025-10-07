import React from 'react'
import '../about/AboutMain.css'


const ResourceLanding = () => {
  return (
    <div>
      <section className="relative w-full section-spa">
        <div
          className="relative  w-full h-[520px] md:h-[560px] lg:h-[620px] xl:h-[680px] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/Rbanner.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70" />

          <div className="section-spacing absolute inset-x-0 bottom-0 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 pb-10 md:pb-14 lg:pb-16">
            <div className="max-w-6xl">
              <span className="inline-block text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px] p-2">Featured</span>

              <h1 className="text-white font-semibold leading-tight md:leading-tight lg:leading-tight text-[28px] sm:text-[34px] md:text-[40px] lg:text-[52px] xl:text-[58px]">
                Our Complete Guide to Parenthood
              </h1>
              <h2 className="text-white font-semibold leading-tight md:leading-tight lg:leading-tight text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] xl:text-[54px] mt-1">
                Inspiring & Supportive Story to Guide You.
              </h2>

              <p className="text-white/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] mt-4 max-w-3xl">
                See our expert insight to inspire, guide, and support you through every step of your unique parenthood
                journey with confidence.
              </p>
              {/* Mobile-only action button below description */}
              <div className="mt-4 md:hidden">
                <button
                  aria-label="Read more"
                  className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/40 text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  <img src="/icons/right.svg" alt="right" width={12} height={12} />
                </button>
              </div>

            </div>

            <div className="hidden md:block absolute right-4 sm:right-6 md:right-10 lg:right-14 xl:right-20 bottom-10 md:bottom-14 lg:bottom-16">
              <button
                aria-label="Read more"
                className="group inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/40 text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                <img src="/icons/right.svg" alt="right" width={12} height={12} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default ResourceLanding