'use client';
import React from 'react';

interface CenterCarouselProps {
  gallery?: string[];
  fallbackImage?: string;
}

const CenterCarousel: React.FC<CenterCarouselProps> = ({ gallery, fallbackImage }) => {
  const images = gallery && gallery.length > 0 ? gallery : fallbackImage ? [fallbackImage] : [];
  const [index, setIndex] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);

  React.useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

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

  if (images.length === 0) return null;

  // Calculate tab width dynamically based on actual container width
  const gap = 8; // px (Tailwind gap-2)
  const totalGapWidth = (images.length - 1) * gap;
  const dynamicTabWidth =
    containerWidth > 0
      ? Math.max((containerWidth - totalGapWidth) / images.length, 25)
      : 40; // fallback initial width

  return (
    <div className="relative w-full h-80 lg:h-[600px] overflow-hidden">
      {/* Carousel Images */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`center image ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={i !== index}
        />
      ))}

      {/* Tabs / Progress Indicators */}
      {images.length > 1 && (
        <div
          ref={containerRef}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[80%] flex items-center justify-center gap-2 px-2"
        >
          {images.map((_, i) => (
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
