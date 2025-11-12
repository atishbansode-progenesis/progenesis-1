// 'use client'
// import React, { useState, useEffect, useRef } from 'react'

// interface Video {
//   video_url: string;
//   title: string;
// }

// const SuccessStoriesPage = () => {
//   const [videos, setVideos] = useState<Video[]>([])
//   const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [totalPages, setTotalPages] = useState(1)
//   const [loading, setLoading] = useState(true)
//   const videoSectionRef = useRef<HTMLDivElement>(null)

//   // keep the *exact* iframe src that is already playing
//   const [playingSrc, setPlayingSrc] = useState<string>('')

//   useEffect(() => {
//     fetchVideos(currentPage)
//   }, [currentPage])

//   const fetchVideos = async (page: number) => {
//     setLoading(true)
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos/?page=${page}`)
//       const data = await response.json()
//       setVideos(data.results)
//       setTotalPages(data.total_pages)

//       // Only set the first video on *very first load*
//       if (!selectedVideo && data.results.length > 0 && page === 1) {
//         const first = data.results[0]
//         setSelectedVideo(first)
//         setPlayingSrc(`${first.video_url}${first.video_url.includes('?') ? '&' : '?'}autoplay=1`)
//       }
//     } catch (error) {
//       console.error('Error fetching videos:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleVideoSelect = (video: Video) => {
//     setSelectedVideo(video)
//     const src = `${video.video_url}${video.video_url.includes('?') ? '&' : '?'}autoplay=1`
//     setPlayingSrc(src)
//     if (videoSectionRef.current) {
//       videoSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
//     }
//   }

//   const handlePrevious = async () => {
//     if (currentPage > 1) {
//       setCurrentPage((c) => c - 1)
//     }
//   }

//   const handleNext = async () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((c) => c + 1)
//     }
//   }

//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero Section with Large Video Player */}
//       <section ref={videoSectionRef} className="bg-gradient-to-b from-gray-50 to-white p-4 lg:px-[120px] lg:pt-[80px] lg:pb-[60px]">
//         <div className="mb-8">
//           <span className='w-fit rounded-[8px] bg-[#1656A50D] py-1 px-2 font-medium text-[12px] leading-[20px] text-[#1656A5]'>
//             Real Stories. Real Miracles.
//           </span>
//           <h1 className="text-[36px] lg:text-[56px] leading-[44px] lg:leading-[64px] max-w-[800px] font-normal mt-3">
//             Inspiring Stories of Strength & Victories
//           </h1>
//           <p className="text-gray-600 text-[16px] lg:text-[18px] mt-4 max-w-[700px]">
//             Watch the incredible journeys of families who found hope and happiness with us.
//           </p>
//         </div>

//         {/* Large Video Player */}
//         {selectedVideo ? (
//           <div className="w-full max-w-[900px]">
//             <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
//               <iframe
//                 key={playingSrc} 
//                 src={playingSrc}
//                 title={selectedVideo.title}
//                 className="w-full h-full"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//             <div className="mt-6">
//               <h2 className="text-[24px] lg:text-[32px] font-medium text-gray-900 leading-tight">
//                 {selectedVideo.title}
//               </h2>
//               <p className="text-[14px] text-gray-400 mt-2">2k views • 1 month ago</p>
//             </div>
//           </div>
//         ) : loading ? (
//           <div className="flex justify-center items-center min-h-[400px] bg-gray-100 rounded-2xl">
//             <div className="flex flex-col items-center gap-3">
//               <div className="w-12 h-12 border-4 border-[#1656A5] border-t-transparent rounded-full animate-spin"></div>
//               <p className="text-gray-600 font-medium">Loading video...</p>
//             </div>
//           </div>
//         ) : null}
//       </section>

//       {/* Video Grid Section */}
//       <section className="bg-white p-4 lg:px-[120px] lg:py-[60px]">
//         <div className="mb-8">
//           <h3 className="text-[28px] lg:text-[36px] leading-[36px] lg:leading-[44px] font-normal text-gray-900">
//             More Success Stories
//           </h3>
//           <p className="text-gray-600 text-[14px] lg:text-[16px] mt-2">
//             Click on any video to watch it above
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center min-h-[400px]">
//             <div className="flex flex-col items-center gap-3">
//               <div className="w-12 h-12 border-4 border-[#1656A5] border-t-transparent rounded-full animate-spin"></div>
//               <p className="text-gray-600 font-medium">Loading videos...</p>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {videos.map((video, index) => (
//               <article
//                 key={index}
//                 onClick={() => handleVideoSelect(video)}
//                 className={`rounded-2xl overflow-hidden cursor-pointer transition-all ${
//                   selectedVideo?.video_url === video.video_url ? 'ring-2 ring-gray-300' : ''
//                 }`}
//               >
//                 <div className="px-3 pt-3">
//                   <p className="text-[11px] md:text-[13px] text-gray-400">2k views • 1 month ago</p>
//                 </div>
//                 <div className="relative w-full h-[260px] sm:h-[280px] md:aspect-[16/11] bg-gray-100 rounded-2xl overflow-hidden group">
//                   <iframe
//                     src={video.video_url}
//                     title={video.title}
//                     className="w-full h-full rounded-[12px] pointer-events-none"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 group-hover:bg-red-700 flex items-center justify-center transition-all shadow-lg">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
//                         <path d="M8 5v14l11-7z"/>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <h4 className="mt-1 text-[14px] md:text-[15px] font-medium text-gray-900 leading-snug">
//                     {video.title}
//                   </h4>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}

//         {/* Pagination Controls */}
//         <div className="flex justify-center items-center gap-4 mt-12">
//           <button
//             onClick={handlePrevious}
//             disabled={currentPage === 1}
//             className="cursor-pointer px-4 py-2 rounded-lg bg-[#1656A5] text-white font-medium hover:bg-[#124583] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
//             aria-label="Previous page"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M15 18l-6-6 6-6"/>
//             </svg>
//           </button>
//           <span className="text-gray-600 font-medium">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={handleNext}
//             disabled={currentPage === totalPages}
//             className="cursor-pointer px-4 py-2 rounded-lg bg-[#1656A5] text-white font-medium hover:bg-[#124583] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
//             aria-label="Next page"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M9 18l6-6-6-6"/>
//             </svg>
//           </button>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default SuccessStoriesPage





'use client'
import React, { useState, useEffect, useRef } from 'react'

interface Video {
  video_url: string;
  title: string;
}

const SuccessStoriesPage = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const videoSectionRef = useRef<HTMLDivElement>(null)

  // Keep the *exact* iframe src that is already playing
  const [playingSrc, setPlayingSrc] = useState<string>('')

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

      // Only set the first video (thumbnail only, not autoplay)
      if (!selectedVideo && data.results.length > 0 && page === 1) {
        const first = data.results[0]
        setSelectedVideo(first)
        // Don't add autoplay here
        setPlayingSrc(first.video_url)
      }
    } catch (error) {
      console.error('Error fetching videos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video)
    const src = `${video.video_url}${video.video_url.includes('?') ? '&' : '?'}autoplay=1`
    setPlayingSrc(src)
    if (videoSectionRef.current) {
      videoSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePrevious = async () => {
    if (currentPage > 1) {
      setCurrentPage((c) => c - 1)
    }
  }

  const handleNext = async () => {
    if (currentPage < totalPages) {
      setCurrentPage((c) => c + 1)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Large Video Player */}
      <section ref={videoSectionRef} className="bg-gradient-to-b from-gray-50 to-white p-4 lg:px-[120px] lg:pt-[80px] lg:pb-[60px]">
        <div className="mb-8">
          <span className='w-fit rounded-[8px] bg-[#1656A50D] py-1 px-2 font-medium text-[12px] leading-[20px] text-[#1656A5]'>
            Real Stories. Real Miracles.
          </span>
          <h1 className="text-[36px] lg:text-[56px] leading-[44px] lg:leading-[64px] max-w-[800px] font-normal mt-3">
            Inspiring Stories of Strength & Victories
          </h1>
          <p className="text-gray-600 text-[16px] lg:text-[18px] mt-4 max-w-[700px]">
            Watch the incredible journeys of families who found hope and happiness with us.
          </p>
        </div>

        {/* Large Video Player */}
        {selectedVideo ? (
          <div className="w-full max-w-[900px]">
            <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                key={playingSrc} 
                src={playingSrc}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              {/* Show overlay play button only if not autoplaying */}
              {playingSrc === selectedVideo.video_url && (
                <div
                  onClick={() => handleVideoSelect(selectedVideo)}
                  className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-all flex items-center justify-center cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white" className="ml-1">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-6">
              <h2 className="text-[24px] lg:text-[32px] font-medium text-gray-900 leading-tight">
                {selectedVideo.title}
              </h2>
              <p className="text-[14px] text-gray-400 mt-2">2k views • 1 month ago</p>
            </div>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center min-h-[400px] bg-gray-100 rounded-2xl">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-[#1656A5] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">Loading video...</p>
            </div>
          </div>
        ) : null}
      </section>

      {/* Video Grid Section */}
      <section className="bg-white p-4 lg:px-[120px] lg:py-[60px]">
        <div className="mb-8">
          <h3 className="text-[28px] lg:text-[36px] leading-[36px] lg:leading-[44px] font-normal text-gray-900">
            More Success Stories
          </h3>
          <p className="text-gray-600 text-[14px] lg:text-[16px] mt-2">
            Click on any video to watch it above
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-[#1656A5] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">Loading videos...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <article
                key={index}
                onClick={() => handleVideoSelect(video)}
                className={`rounded-2xl overflow-hidden cursor-pointer transition-all ${
                  selectedVideo?.video_url === video.video_url ? 'ring-2 ring-gray-300' : ''
                }`}
              >
                <div className="px-3 pt-3">
                  <p className="text-[11px] md:text-[13px] text-gray-400">2k views • 1 month ago</p>
                </div>
                <div className="relative w-full h-[260px] sm:h-[280px] md:aspect-[16/11] bg-gray-100 rounded-2xl overflow-hidden group">
                  <iframe
                    src={video.video_url}
                    title={video.title}
                    className="w-full h-full rounded-[12px] pointer-events-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 group-hover:bg-red-700 flex items-center justify-center transition-all shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="mt-1 text-[14px] md:text-[15px] font-medium text-gray-900 leading-snug">
                    {video.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-12">
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
      </section>
    </div>
  )
}

export default SuccessStoriesPage
