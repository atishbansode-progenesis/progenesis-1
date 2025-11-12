'use client'
import React, { useState, useEffect } from 'react'

interface Video {
  video_url: string;
  title: string;
}

const ResourceStories = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVideos(currentPage)
  }, [currentPage])

  const fetchVideos = async (page: number) => {
    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos/?page=${page}`)
      const data = await response.json()
      setVideos(data.results)
      setTotalPages(data.total_pages)
    } catch (error) {
      console.error('Error fetching videos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <section className="bg-white p-4 lg:px-[120px] lg:py-[80px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-4">
        <div>
          <span className='w-fit rounded-[8px] bg-[#1656A50D] py-1 px-2 font-medium text-[12px] leading-[20px] text-[#1656A5]'>
            Real Stories. Real Miracles.
          </span>
          <h3 className="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] max-w-[691px] font-normal">
            Inspiring stories of strength & Victories
          </h3>
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-[#1656A5] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">Loading videos...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((s, i) => (
              <article
                key={i}
                className="rounded-2xl border border-gray-200 overflow-hidden shadow-[0_1px_2px_RGBA(0,0,0,0.04)] p-2"
              >
                <div className="px-3 pt-3">
                  <p className="text-[11px] md:text-[13px] text-gray-400">2k views • 1 month ago</p>
                </div>
                <div className="relative w-full h-[260px] sm:h-[280px] md:aspect-[16/11] bg-gray-100 rounded-2xl overflow-hidden">
                  <iframe
                    src={s.video_url}
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

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="cursor-pointer px-4 py-2 rounded-lg bg-[#1656A5] text-white font-medium hover:bg-[#124583] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            aria-label="Previous page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <span className="text-gray-600 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="cursor-pointer px-4 py-2 rounded-lg bg-[#1656A5] text-white font-medium hover:bg-[#124583] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            aria-label="Next page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResourceStories




export const resourceStoriesData = [
  { title: 'Because Dreams Do Come True | A Journey with Progenesis', videoUrl: 'https://www.youtube.com/embed/-TO7z5x2Qhs' },
  { title: 'Our IVF Journey | with Progenesis | Love Finds a Way', videoUrl: 'https://www.youtube.com/embed/OsCWCiUUg64' },
  { title: 'The Mehta Story | with Progenesis | New Beginnings', videoUrl: 'https://www.youtube.com/embed/nCLCqG-VsZc' },
  { title: 'Hope and Happiness | Progenesis Success', videoUrl: 'https://www.youtube.com/embed/9JHCfSD20Pk?si=ZyAMK1NoOkwvgZbE' },
  { title: 'A New Chapter | Progenesis Family', videoUrl: 'https://www.youtube.com/embed/W-SRo_zFe6M?si=pXC9m38X_diiAhrA' },
]
