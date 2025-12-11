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




// 'use client';
// import React from 'react';

// interface CenterCarouselProps {
//   gallery?: string[];
//   fallbackImage?: string;
//   videoUrl?: string;
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
//   const totalSlides = (youtubeId ? 1 : 0) + images.length; // Video first, then images
  
//   const [index, setIndex] = React.useState(0);
//   const [containerWidth, setContainerWidth] = React.useState<number>(0);
//   const [isPlaying, setIsPlaying] = React.useState(false);
//   const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

//   // Auto-slide logic
//   React.useEffect(() => {
//     if (totalSlides <= 1 || isPlaying) return;
    
//     intervalRef.current = setInterval(() => {
//       setIndex((i) => (i + 1) % totalSlides);
//     }, 4000);

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [totalSlides, isPlaying]);

//   // Pause auto-slide when video is active
//   React.useEffect(() => {
//     if (youtubeId && index === 0) {
//       setIsPlaying(true);
//     } else {
//       setIsPlaying(false);
//     }
//   }, [index, youtubeId]);

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
//       {/* YouTube Video Embed - First Slide */}
//       {youtubeId && (
//         <div
//           className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
//             index === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
//           }`}
//           aria-hidden={index !== 0}
//         >
//           <iframe
//             src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${index === 0 ? 1 : 0}&mute=1&rel=0&enablejsapi=1`}
//             title="Center video"
//             className="w-full h-full"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>
//       )}

//       {/* Carousel Images - After Video */}
//       {images.map((src, i) => {
//         const imageIndex = (youtubeId ? 1 : 0) + i; // Offset by 1 if video exists
//         return (
//           <img
//             key={`img-${i}`}
//             src={src}
//             alt={`center image ${i + 1}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//               imageIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
//             }`}
//             aria-hidden={imageIndex !== index}
//           />
//         );
//       })}

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



// 'use client';
// import React from 'react';

// interface CenterCarouselProps {
//   gallery?: string[];
//   fallbackImage?: string;
//   videoUrl?: string;
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
//   const totalSlides = (youtubeId ? 1 : 0) + images.length;
  
//   const [index, setIndex] = React.useState(0);
//   const [containerWidth, setContainerWidth] = React.useState<number>(0);
//   const [playerReady, setPlayerReady] = React.useState(false);
//   const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
//   const playerRef = React.useRef<any>(null);

//   // Load YouTube IFrame API
//   React.useEffect(() => {
//     if (!youtubeId) return;

//     // Check if API is already loaded
//     if (window.YT && window.YT.Player) {
//       return;
//     }

//     // Check if script is already being loaded
//     if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
//       return;
//     }

//     // Load the API
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

//     // Set up callback for when API is ready
//     const originalCallback = window.onYouTubeIframeAPIReady;
//     window.onYouTubeIframeAPIReady = () => {
//       if (originalCallback) originalCallback();
//     };
//   }, [youtubeId]);

//   // Initialize YouTube Player
//   React.useEffect(() => {
//     if (!youtubeId) return;
//     if (playerRef.current) return; // Already initialized

//     const initPlayer = () => {
//       if (!window.YT || !window.YT.Player) {
//         // API not ready yet, try again
//         setTimeout(initPlayer, 100);
//         return;
//       }

//       try {
//         playerRef.current = new window.YT.Player(`youtube-player-${youtubeId}`, {
//           videoId: youtubeId,
//           playerVars: {
//             autoplay: 1,
//             mute: 1,
//             rel: 0,
//             enablejsapi: 1,
//             controls: 1,
//             modestbranding: 1,
//           },
//           events: {
//             onReady: (event: any) => {
//               setPlayerReady(true);
//               console.log('YouTube player ready');
//             },
//             onStateChange: (event: any) => {
//               // YT.PlayerState.ENDED = 0
//               if (event.data === 0) {
//                 console.log('Video ended, moving to next slide');
//                 // Video ended, move to next slide
//                 setIndex((i) => (i + 1) % totalSlides);
//               }
//             },
//           },
//         });
//       } catch (error) {
//         console.error('Error initializing YouTube player:', error);
//       }
//     };

//     // Small delay to ensure DOM is ready
//     setTimeout(initPlayer, 500);

//     return () => {
//       if (playerRef.current && typeof playerRef.current.destroy === 'function') {
//         try {
//           playerRef.current.destroy();
//           playerRef.current = null;
//           setPlayerReady(false);
//         } catch (error) {
//           console.error('Error destroying player:', error);
//         }
//       }
//     };
//   }, [youtubeId, totalSlides]);

//   // Control video playback based on current slide
//   React.useEffect(() => {
//     if (!playerRef.current || !playerReady) return;
    
//     const isVideoSlide = youtubeId && index === 0;
    
//     try {
//       if (isVideoSlide) {
//         console.log('Returning to video slide - restarting video');
//         // Restart video from beginning when coming back to video slide
//         playerRef.current.seekTo(0, true);
//         playerRef.current.playVideo();
//       } else {
//         // Pause video when not on video slide
//         playerRef.current.pauseVideo();
//       }
//     } catch (error) {
//       console.error('Error controlling video playback:', error);
//     }
//   }, [index, youtubeId, playerReady]);

//   // Check if current slide is the video
//   const isVideoSlide = youtubeId && index === 0;

//   // Auto-slide logic for image slides only
//   React.useEffect(() => {
//     if (totalSlides <= 1) return;
    
//     // Clear any existing interval
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
    
//     // Don't start interval if on video slide (video will auto-advance on end)
//     if (isVideoSlide) return;
    
//     // Start new interval for image slides
//     intervalRef.current = setInterval(() => {
//       setIndex((i) => (i + 1) % totalSlides);
//     }, 4000);

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//       }
//     };
//   }, [totalSlides, isVideoSlide]);

//   // Measure container width for responsive tabs
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

//   // Calculate tab width dynamically
//   const gap = 8;
//   const totalGapWidth = (totalSlides - 1) * gap;
//   const dynamicTabWidth =
//     containerWidth > 0
//       ? Math.max((containerWidth - totalGapWidth) / totalSlides, 25)
//       : 40;

//   return (
//     <div className="relative w-full h-80 lg:h-[600px] overflow-hidden bg-gray-900">
//       {/* YouTube Video Embed - First Slide */}
//       {youtubeId && (
//         <div
//           className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
//             index === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
//           }`}
//           aria-hidden={index !== 0}
//         >
//           <div 
//             id={`youtube-player-${youtubeId}`}
//             className="w-full h-full"
//           />
//         </div>
//       )}

//       {/* Carousel Images - After Video */}
//       {images.map((src, i) => {
//         const imageIndex = (youtubeId ? 1 : 0) + i;
//         return (
//           <img
//             key={`img-${i}`}
//             src={src}
//             alt={`center image ${i + 1}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//               imageIndex === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
//             }`}
//             aria-hidden={imageIndex !== index}
//           />
//         );
//       })}

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

// // TypeScript declaration for YouTube API
// declare global {
//   interface Window {
//     YT: any;
//     onYouTubeIframeAPIReady: () => void;
//   }
// }

// export default CenterCarousel;
// 'use client';
// import React from 'react';

// interface CenterCarouselProps {
//   gallery?: string[];
//   fallbackImage?: string;
//   videoUrl?: string;
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
//   const totalSlides = (youtubeId ? 1 : 0) + images.length;
  
//   const [index, setIndex] = React.useState(0);
//   const [containerWidth, setContainerWidth] = React.useState<number>(0);
//   const [playerReady, setPlayerReady] = React.useState(false);
//   const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
//   const playerRef = React.useRef<any>(null);

//   // Load YouTube IFrame API
//   React.useEffect(() => {
//     if (!youtubeId) return;

//     // Check if API is already loaded
//     if (window.YT && window.YT.Player) {
//       return;
//     }

//     // Check if script is already being loaded
//     if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
//       return;
//     }

//     // Load the API
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

//     // Set up callback for when API is ready
//     const originalCallback = window.onYouTubeIframeAPIReady;
//     window.onYouTubeIframeAPIReady = () => {
//       if (originalCallback) originalCallback();
//     };
//   }, [youtubeId]);

//   // Initialize YouTube Player
//   React.useEffect(() => {
//     if (!youtubeId) return;
//     if (playerRef.current) return; // Already initialized

//     const initPlayer = () => {
//       if (!window.YT || !window.YT.Player) {
//         // API not ready yet, try again
//         setTimeout(initPlayer, 100);
//         return;
//       }

//       try {
//         playerRef.current = new window.YT.Player(`youtube-player-${youtubeId}`, {
//           videoId: youtubeId,
//           playerVars: {
//             autoplay: 1,
//             mute: 1,
//             rel: 0,
//             enablejsapi: 1,
//             controls: 1,
//             modestbranding: 1,
//           },
//           events: {
//             onReady: (event: any) => {
//               setPlayerReady(true);
//               console.log('YouTube player ready');
//             },
//             onStateChange: (event: any) => {
//               // YT.PlayerState.ENDED = 0
//               if (event.data === 0) {
//                 console.log('Video ended, moving to next slide');
//                 // Video ended, move to next slide
//                 setIndex((i) => (i + 1) % totalSlides);
//               }
//             },
//           },
//         });
//       } catch (error) {
//         console.error('Error initializing YouTube player:', error);
//       }
//     };

//     // Small delay to ensure DOM is ready
//     setTimeout(initPlayer, 500);

//     return () => {
//       if (playerRef.current && typeof playerRef.current.destroy === 'function') {
//         try {
//           playerRef.current.destroy();
//           playerRef.current = null;
//           setPlayerReady(false);
//         } catch (error) {
//           console.error('Error destroying player:', error);
//         }
//       }
//     };
//   }, [youtubeId, totalSlides]);

//   // Control video playback based on current slide
//   React.useEffect(() => {
//     if (!playerRef.current || !playerReady) return;
    
//     const isVideoSlide = youtubeId && index === 0;
    
//     try {
//       if (isVideoSlide) {
//         console.log('Returning to video slide - restarting video');
//         // Restart video from beginning when coming back to video slide
//         playerRef.current.seekTo(0, true);
//         playerRef.current.playVideo();
//       } else {
//         // Pause video when not on video slide
//         playerRef.current.pauseVideo();
//       }
//     } catch (error) {
//       console.error('Error controlling video playback:', error);
//     }
//   }, [index, youtubeId, playerReady]);

//   // Check if current slide is the video
//   const isVideoSlide = youtubeId && index === 0;

//   // Auto-slide logic for image slides only
//   React.useEffect(() => {
//     if (totalSlides <= 1) return;
    
//     // Clear any existing interval
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
    
//     // Don't start interval if on video slide (video will auto-advance on end)
//     if (isVideoSlide) return;
    
//     // Start new interval for image slides
//     intervalRef.current = setInterval(() => {
//       setIndex((i) => (i + 1) % totalSlides);
//     }, 4000);

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//       }
//     };
//   }, [totalSlides, isVideoSlide]);

//   // Measure container width for responsive tabs
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

//   // Calculate tab width dynamically
//   const gap = 8;
//   const totalGapWidth = (totalSlides - 1) * gap;
//   const dynamicTabWidth =
//     containerWidth > 0
//       ? Math.max((containerWidth - totalGapWidth) / totalSlides, 25)
//       : 40;

//   return (
//     <div className="relative w-full h-80 lg:h-[600px] overflow-hidden bg-gray-900">
//       {/* YouTube Video Embed - First Slide */}
//       {youtubeId && (
//         <div
//           className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
//             index === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
//           }`}
//           aria-hidden={index !== 0}
//         >
//           <div 
//             id={`youtube-player-${youtubeId}`}
//             className="w-full h-full"
//           />
//         </div>
//       )}

//       {/* Carousel Images - After Video */}
//       {images.map((src, i) => {
//         const imageIndex = (youtubeId ? 1 : 0) + i;
//         return (
//           <img
//             key={`img-${i}`}
//             src={src}
//             alt={`center image ${i + 1}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
//               imageIndex === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
//             }`}
//             aria-hidden={imageIndex !== index}
//           />
//         );
//       })}

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

// // TypeScript declaration for YouTube API
// declare global {
//   interface Window {
//     YT: any;
//     onYouTubeIframeAPIReady: () => void;
//   }
// }

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
  const totalSlides = (youtubeId ? 1 : 0) + images.length;
  
  const [index, setIndex] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const [playerReady, setPlayerReady] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const playerRef = React.useRef<any>(null);

  // Load YouTube IFrame API
  React.useEffect(() => {
    if (!youtubeId) return;

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      return;
    }

    // Check if script is already being loaded
    if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      return;
    }

    // Load the API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Set up callback for when API is ready
    const originalCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (originalCallback) originalCallback();
    };
  }, [youtubeId]);

  // Initialize YouTube Player
  React.useEffect(() => {
    if (!youtubeId) return;
    if (playerRef.current) return; // Already initialized

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) {
        // API not ready yet, try again
        setTimeout(initPlayer, 100);
        return;
      }

      try {
        playerRef.current = new window.YT.Player(`youtube-player-${youtubeId}`, {
          videoId: youtubeId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            rel: 0,
            enablejsapi: 1,
            controls: 0,
            modestbranding: 1,
            showinfo: 0,
            fs: 0,
            iv_load_policy: 3,
            disablekb: 1,
          },
          events: {
            onReady: (event: any) => {
              setPlayerReady(true);
              console.log('YouTube player ready');
            },
            onStateChange: (event: any) => {
              // YT.PlayerState.ENDED = 0
              if (event.data === 0) {
                console.log('Video ended, moving to next slide');
                // Video ended, move to next slide
                setIndex((i) => (i + 1) % totalSlides);
              }
            },
          },
        });
      } catch (error) {
        console.error('Error initializing YouTube player:', error);
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(initPlayer, 500);

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
          playerRef.current = null;
          setPlayerReady(false);
        } catch (error) {
          console.error('Error destroying player:', error);
        }
      }
    };
  }, [youtubeId, totalSlides]);

  // Control video playback based on current slide
  React.useEffect(() => {
    if (!playerRef.current || !playerReady) return;
    
    const isVideoSlide = youtubeId && index === 0;
    
    try {
      if (isVideoSlide) {
        console.log('Returning to video slide - restarting video');
        // Restart video from beginning when coming back to video slide
        playerRef.current.seekTo(0, true);
        playerRef.current.playVideo();
      } else {
        // Pause video when not on video slide
        playerRef.current.pauseVideo();
      }
    } catch (error) {
      console.error('Error controlling video playback:', error);
    }
  }, [index, youtubeId, playerReady]);

  // Check if current slide is the video
  const isVideoSlide = youtubeId && index === 0;

  // Auto-slide logic for image slides only
  React.useEffect(() => {
    if (totalSlides <= 1) return;
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Don't start interval if on video slide (video will auto-advance on end)
    if (isVideoSlide) return;
    
    // Start new interval for image slides
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % totalSlides);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [totalSlides, isVideoSlide]);

  // Measure container width for responsive tabs
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

  // Calculate tab width dynamically
  const gap = 8;
  const totalGapWidth = (totalSlides - 1) * gap;
  const dynamicTabWidth =
    containerWidth > 0
      ? Math.max((containerWidth - totalGapWidth) / totalSlides, 25)
      : 40;

  return (
    <div className="relative w-full h-80 lg:h-[600px] overflow-hidden bg-gray-900">
      {/* YouTube Video Embed - First Slide */}
      {youtubeId && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            index === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
          aria-hidden={index !== 0}
        >
          <div 
            id={`youtube-player-${youtubeId}`}
            className="w-full h-full"
          />
        </div>
      )}

      {/* Carousel Images - After Video */}
      {images.map((src, i) => {
        const imageIndex = (youtubeId ? 1 : 0) + i;
        return (
          <img
            key={`img-${i}`}
            src={src}
            alt={`center image ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageIndex === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
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

// TypeScript declaration for YouTube API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default CenterCarousel;