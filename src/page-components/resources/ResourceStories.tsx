'use client'
import React, { useState } from 'react'

export const resourceStoriesData = [
  { title: 'Because Dreams Do Come True | A Journey with Progenesis', videoUrl: 'https://www.youtube.com/embed/-TO7z5x2Qhs' },
  { title: 'Our IVF Journey | with Progenesis | Love Finds a Way', videoUrl: 'https://www.youtube.com/embed/OsCWCiUUg64' },
  { title: 'The Mehta Story | with Progenesis | New Beginnings', videoUrl: 'https://www.youtube.com/embed/nCLCqG-VsZc' },
  { title: 'Hope and Happiness | Progenesis Success', videoUrl: 'https://www.youtube.com/embed/9JHCfSD20Pk?si=ZyAMK1NoOkwvgZbE' },
  { title: 'A New Chapter | Progenesis Family', videoUrl: 'https://www.youtube.com/embed/W-SRo_zFe6M?si=pXC9m38X_diiAhrA' },
]

const ResourceStories = () => {
  const [showAll, setShowAll] = useState(false)

  const handleSeeAll = () => setShowAll(true)

  return (
    <section className="bg-white p-4 lg:p-[120px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-4">
        <div>
          <span className='w-fit rounded-[8px] bg-[#1656A50D] py-1 px-2 font-medium text-[12px] leading-[20px] text-[#1656A5]'>
            First Person. Real Stories.
          </span>
          <h3 className="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] max-w-[691px] font-normal">
            Inspiring stories of strength & Victories
          </h3>
        </div>
        {!showAll && (
          <button
            className="w-fit h-[32px] inline-flex items-center px-4 py-2 rounded-[8px] bg-[#1656A5] text-white text-sm shadow-sm mt-3 md:mt-0 md:ml-auto p-2"
            onClick={handleSeeAll}
          >
            See all
          </button>
        )}
      </div>

      <div className="mt-6">
        {!showAll ? (
          <div className="flex md:grid gap-4 overflow-x-auto md:overflow-visible scrollbar-hide md:grid-cols-3 px-2 md:px-0">
            {resourceStoriesData.slice(0, 3).map((s, i) => (
              <article
                key={i}
                className="rounded-2xl w-[287px] h-[340px]  overflow-hidden flex-none md:w-auto p-2 bg-[#FFFFFF]"
              >
                {/* Views */}
                <div className="px-3 pt-3">
                  <p className="text-[11px] md:text-[13px] text-gray-400 mb-2">
                    2k views • 1 month ago
                  </p>
                </div>

                {/* Video */}
                <div className="relative w-full sm:w-[280px] md:w-full h-[180px] sm:h-[200px]  bg-gray-100 rounded-2xl overflow-hidden">
                  <iframe
                    src={s.videoUrl}
                    title={s.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-[12px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <div className="">
                  <h4 className="mt-2 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[20px] xl:text-[20px] font-medium text-[#2C2C2C] leading-snug break-words">
                    {s.title}
                  </h4>

                </div>

              </article>
            ))}
          </div>

        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourceStoriesData.map((s, i) => (
              <article
                key={i}
                className="rounded-2xl border border-gray-200 overflow-hidden shadow-[0_1px_2px_RGBA(0,0,0,0.04)] p-2"
              >
                <div className="px-3 pt-3">
                  <p className="text-[11px] md:text-[13px] text-gray-400">2k views • 1 month ago</p>
                </div>
                <div className="relative w-full h-[260px] sm:h-[280px] md:aspect-[16/11] bg-gray-100 rounded-2xl overflow-hidden">
                  <iframe
                    src={s.videoUrl}
                    title={s.title}
                    className="w-full h-full rounded-[12px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h4 className="mt-1 text-[14px] md:text-[15px] font-medium text-gray-900 leading-snug">
                    {s.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ResourceStories
