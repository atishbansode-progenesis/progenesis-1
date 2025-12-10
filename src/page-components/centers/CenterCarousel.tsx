// 'use client';
// import React from 'react';

// interface CenterCarouselProps {
//   gallery?: string[];
//   fallbackImage?: string;
// }

// const CenterCarousel: React.FC<CenterCarouselProps> = ({ gallery, fallbackImage }) => {
//   const images = gallery && gallery.length > 0 ? gallery : fallbackImage ? [fallbackImage] : [];
//   const [index, setIndex] = React.useState(0);
//   const [containerWidth, setContainerWidth] = React.useState<number>(0);

//   React.useEffect(() => {
//     if (images.length <= 1) return;
//     const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
//     return () => clearInterval(t);
//   }, [images.length]);

//   // Measure actual container width dynamically (for responsiveness)
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   React.useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
//     };
//     updateWidth();
//     window.addEventListener('resize', updateWidth);
//     return () => window.removeEventListener('resize', updateWidth);
//   }, []);

//   if (images.length === 0) return null;

//   // Calculate tab width dynamically based on actual container width
//   const gap = 8; // px (Tailwind gap-2)
//   const totalGapWidth = (images.length - 1) * gap;
//   const dynamicTabWidth =
//     containerWidth > 0
//       ? Math.max((containerWidth - totalGapWidth) / images.length, 25)
//       : 40; // fallback initial width

//   return (
//     <div className="relative w-full h-80 lg:h-[600px] overflow-hidden">
//       {/* Carousel Images */}
//       {images.map((src, i) => (
//         <img
//           key={i}
//           src={src}
//           alt={`center image ${i + 1}`}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//             i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}
//           aria-hidden={i !== index}
//         />
//       ))}

//       {/* Tabs / Progress Indicators */}
//       {images.length > 1 && (
//         <div
//           ref={containerRef}
//           className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[80%] flex items-center justify-center gap-2 px-2"
//         >
//           {images.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               aria-label={`Slide ${i + 1}`}
//               style={{ width: `${dynamicTabWidth}px` }}
//               className="h-1 rounded-full bg-white/30 overflow-hidden hover:cursor-pointer transition-all"
//             >
//               <span
//                 className={`block h-full bg-[#1656A5] transition-all duration-500 ${
//                   i === index ? 'w-full' : 'w-0'
//                 }`}
//               />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CenterCarousel;




// 'use client';
// import React from 'react';

// interface CenterCarouselProps {
//   gallery?: string[];
//   fallbackImage?: string;
//   videoUrl?: string; // YouTube video URL or embed ID
// }

// const CenterCarousel: React.FC<CenterCarouselProps> = ({ gallery, fallbackImage, videoUrl }) => {
//   // Extract YouTube video ID from URL
//   const getYouTubeId = (url: string) => {
//     if (!url) return null;
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return match && match[2].length === 11 ? match[2] : null;
//   };

//   const youtubeId = videoUrl ? getYouTubeId(videoUrl) : null;
//   const images = gallery && gallery.length > 0 ? gallery : fallbackImage ? [fallbackImage] : [];
//   const totalSlides = images.length + (youtubeId ? 1 : 0); // Images + optional video
  
//   const [index, setIndex] = React.useState(0);
//   const [containerWidth, setContainerWidth] = React.useState<number>(0);

//   React.useEffect(() => {
//     if (totalSlides <= 1) return;
//     const t = setInterval(() => setIndex((i) => (i + 1) % totalSlides), 4000);
//     return () => clearInterval(t);
//   }, [totalSlides]);

//   // Measure actual container width dynamically (for responsiveness)
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   React.useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
//     };
//     updateWidth();
//     window.addEventListener('resize', updateWidth);
//     return () => window.removeEventListener('resize', updateWidth);
//   }, []);

//   if (totalSlides === 0) return null;

//   // Calculate tab width dynamically based on actual container width
//   const gap = 8; // px (Tailwind gap-2)
//   const totalGapWidth = (totalSlides - 1) * gap;
//   const dynamicTabWidth =
//     containerWidth > 0
//       ? Math.max((containerWidth - totalGapWidth) / totalSlides, 25)
//       : 40; // fallback initial width

//   return (
//     <div className="relative w-full h-80 lg:h-[600px] overflow-hidden bg-gray-900">
//       {/* Carousel Images */}
//       {images.map((src, i) => (
//         <img
//           key={`img-${i}`}
//           src={src}
//           alt={`center image ${i + 1}`}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//             i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}
//           aria-hidden={i !== index}
//         />
//       ))}

//       {/* YouTube Video Embed */}
//       {youtubeId && (
//         <div
//           className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
//             index === images.length ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}
//           aria-hidden={index !== images.length}
//         >
//           <iframe
//             src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${index === images.length ? 1 : 0}&mute=1&rel=0`}
//             title="Center video"
//             className="w-full h-full"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>
//       )}

//       {/* Tabs / Progress Indicators */}
//       {totalSlides > 1 && (
//         <div
//           ref={containerRef}
//           className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[80%] flex items-center justify-center gap-2 px-2"
//         >
//           {Array.from({ length: totalSlides }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               aria-label={`Slide ${i + 1}`}
//               style={{ width: `${dynamicTabWidth}px` }}
//               className="h-1 rounded-full bg-white/30 overflow-hidden hover:cursor-pointer transition-all"
//             >
//               <span
//                 className={`block h-full bg-[#1656A5] transition-all duration-500 ${
//                   i === index ? 'w-full' : 'w-0'
//                 }`}
//               />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CenterCarousel;




'use client';
import React from 'react';

interface CenterCarouselProps {
  gallery?: string[];
  fallbackImage?: string;
  videoUrl?: string;
}

const CenterCarousel: React.FC<CenterCarouselProps> = ({ gallery, fallbackImage, videoUrl }) => {
  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = videoUrl ? getYouTubeId(videoUrl) : null;
  const images = gallery && gallery.length > 0 ? gallery : fallbackImage ? [fallbackImage] : [];
  const totalSlides = (youtubeId ? 1 : 0) + images.length; // Video first, then images
  
  const [index, setIndex] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Auto-slide logic
  React.useEffect(() => {
    if (totalSlides <= 1 || isPlaying) return;
    
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % totalSlides);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalSlides, isPlaying]);

  // Pause auto-slide when video is active
  React.useEffect(() => {
    if (youtubeId && index === 0) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [index, youtubeId]);

  // Measure actual container width dynamically (for responsiveness)
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (totalSlides === 0) return null;

  // Calculate tab width dynamically based on actual container width
  const gap = 8; // px (Tailwind gap-2)
  const totalGapWidth = (totalSlides - 1) * gap;
  const dynamicTabWidth =
    containerWidth > 0
      ? Math.max((containerWidth - totalGapWidth) / totalSlides, 25)
      : 40; // fallback initial width

  return (
    <div className="relative w-full h-80 lg:h-[600px] overflow-hidden bg-gray-900">
      {/* YouTube Video Embed - First Slide */}
      {youtubeId && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            index === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={index !== 0}
        >
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${index === 0 ? 1 : 0}&mute=1&rel=0&enablejsapi=1`}
            title="Center video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Carousel Images - After Video */}
      {images.map((src, i) => {
        const imageIndex = (youtubeId ? 1 : 0) + i; // Offset by 1 if video exists
        return (
          <img
            key={`img-${i}`}
            src={src}
            alt={`center image ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-hidden={imageIndex !== index}
          />
        );
      })}

      {totalSlides > 1 && (
        <div
          ref={containerRef}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[80%] flex items-center justify-center gap-2 px-2"
        >
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              style={{ width: `${dynamicTabWidth}px` }}
              className="h-1 rounded-full bg-white/30 overflow-hidden hover:cursor-pointer transition-all"
            >
              <span
                className={`block h-full bg-[#1656A5] transition-all duration-500 ${
                  i === index ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CenterCarousel;