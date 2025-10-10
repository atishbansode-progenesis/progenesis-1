"use client";

import Link from "next/link";
import Image from "next/image";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeroSectionProps {
  breadcrumbs: Breadcrumb[];
  title: string | React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  showBlurredShape?: boolean;
  foregroundImage?: string;
  overlayImage?: string;
  overlayImageSmall?: string;
  contentClassName?: string;
}

export default function HeroSection({
  breadcrumbs,
  title,
  buttonText,
  buttonLink,
  backgroundImage,
  foregroundImage,
  overlayImage,
  overlayImageSmall,
  showBlurredShape = true,
  contentClassName = ''
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full min-h-[444px] lg:min-h-[647px] flex p-[16px] lg:p-[80px] overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? backgroundImage : "",
      }}
    >
      {/* Overlay Image (background layer) */}
      {overlayImage && (
        <Image
          src={window.innerWidth >= 1024 ? overlayImage : overlayImageSmall || overlayImage}
          alt="Overlay"
          fill
          priority
          className="absolute inset-0 object-cover -z-20"
        />
      )}

      {/* Blurred gradient shape */}
      {showBlurredShape && (
        <div
          className="absolute left-[-150px] top-[80px] w-[445px] h-[441px] rounded-full opacity-70 z-0"
          style={{
            background: "#94BA3D",
            filter: "blur(250px)",
            transform: "rotate(-2deg)",
          }}
        ></div>
      )}

      {/* Content (always above images) */}
      <div className={`relative z-10 w-full flex flex-col justify-end lg:justify-center items-start gap-6 lg:gap-[44px] pb-8 lg:pb-0 ${contentClassName}`}>
        {/* Breadcrumbs */}
        <p className="text-[12px] lg:text-[18px] leading-[20px] lg:leading-[40px] font-medium flex flex-wrap items-center gap-2 lg:gap-[12px] ">
          {breadcrumbs.map((crumb, idx) => (
            <>
              <span key={idx} className="flex items-center">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={`${idx === breadcrumbs.length - 1
                      ? "text-[#1656A5]"
                      : "text-[#606060]"
                      }`}
                  >
                    {crumb.label}
                  </Link>
                ) : null}
              </span>
              {idx < breadcrumbs.length - 1 && (
                <span>›</span>
              )}
            </>
          ))}
        </p>

        {/* Title */}
        <h1 className="text-[32px] lg:text-[80px] leading-[40px] lg:leading-[88px] font-semibold">
          {typeof title === "string" ? (
            title.split(/<br\s*\/?>(?:\s*)/gi).map((part, idx, arr) => (
              <span key={idx}>
                {part}
                {idx !== arr.length - 1 && <br />}
              </span>
            ))
          ) : (
            title
          )}
        </h1>

        {/* Button */}
        {buttonText && (
          <div>
            {buttonLink ? (
              <Link
                href={buttonLink}
                className="p-[10px] lg:p-[20px] bg-[#252525] text-white rounded-[8px] lg:rounded-[16px] text-[12px] lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium"
              >
                {buttonText}
              </Link>
            ) : (
              <button className="p-[10px] lg:p-[20px] bg-[#252525] text-white rounded-[8px] lg:rounded-[16px] text-[12px] lg:text-[14px] leading-[20px] lg:leading-[24px] font-medium">
                {buttonText}
              </button>
            )}
          </div>
        )}
      </div>

      {foregroundImage && (
        <div className="absolute right-0 lg:-right-[50px] xl:-right-[80px] 2xl:-right-[120px] bottom-0 top-[10%] z-0 pointer-events-none flex items-end justify-end">
          <div className="relative w-[85vw] sm:w-[500px] md:w-[650px] lg:w-[800px] xl:w-[1042px] h-[500px] md:h-[600px] flex-shrink-0">
            <Image
              src={foregroundImage}
              alt="Hero Foreground"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1042px"
              className="object-contain"
              style={{ objectPosition: "right bottom" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}