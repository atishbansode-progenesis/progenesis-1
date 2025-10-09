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
}

export default function HeroSection({
  breadcrumbs,
  title,
  buttonText,
  buttonLink,
  backgroundImage,
  foregroundImage,
  overlayImage,
  showBlurredShape = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] flex px-4 lg:px-[50px] xl:px-[80px] 2xl:px-[120px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : "none",
      }}
    >
      {/* Overlay Image (background layer) */}
      {overlayImage && (
        <Image
          src={overlayImage}
          alt="Overlay"
          fill
          priority
          className="absolute inset-0 object-cover -z-20"
        />
      )}

      {/* Foreground Image (responsive, above overlay & background) */}
      {/* {foregroundImage && (
        <Image
          src={foregroundImage}
          alt="Foreground"
          // width={500}
          // height={500}
          fill
          priority
          className="absolute bottom-0 right-0 object-contain z-0 
                     w-[180px] md:w-[350px] lg:w-[500px] h-auto"
        />
      )} */}

      

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
      <div className="relative z-10 mt-2 md:mt-[85px] max-w-5xl">
        {/* Breadcrumbs */}
        <p className="text-[18px] text-gray-600 mb-2 md:mb-[44px] flex items-center flex-wrap">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className={`${
                    idx === breadcrumbs.length - 1
                      ? "text-[#1656A5] font-medium"
                      : "text-gray-600"
                  } px-[6px]`}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className={`${
                    idx === breadcrumbs.length - 1
                      ? "text-[#1656A5] font-medium"
                      : "text-gray-600"
                  } px-[6px]`}
                >
                  {crumb.label}
                </span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <span className="px-[6px]">›</span>
              )}
            </span>
          ))}
        </p>

        {/* Title */}
        <h1
          className="
    text-[var(--BG_Black,#252525)]
    font-[Manrope]
    font-semibold
    text-[32px]
    md:text-[40px]
    xl:text-[80px]
    leading-[40px]
    md:leading-[40px]
    xl:leading-[88px]
    tracking-[-0.02em]
    pb-[44px]
    md:pb-[44px]
    xl:pb-[80px]
    max-w-full
    sm:max-w-[500px]
    md:max-w-[700px]
    lg:max-w-[956px]
  "
        >
          {typeof title === "string" ? (
            // Allow passing a string with <br> or <br/> to force line breaks
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
                className="mt-6 inline-block px-[20px] py-[16px] bg-black text-white rounded-[16px]"
              >
                {buttonText}
              </Link>
            ) : (
              <button className="mt-6 px-[20px] py-[16px] bg-black text-white rounded-[16px]">
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