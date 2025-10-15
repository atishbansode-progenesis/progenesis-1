// components/InfertilityIssues/GradientBanner.tsx
import React from "react";

interface GradientBannerProps {
  text: string;
  textColor?: string;
  leftGradientColor?: string;
  rightGradientColor?: string;
}

export default function GradientBanner({ 
  text, 
  textColor = "#94BA3D",
  leftGradientColor = "#94BA3D",
  rightGradientColor = "#1656A5"
}: GradientBannerProps) {
  return (
    <section className="relative w-full h-[475px] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-blue-50" />

      {/* Background Blur Gradients */}
      <div
        className="absolute left-[-50px] bottom-[-50px] w-[322px] h-[443px] rounded-full opacity-70"
        style={{
          background: leftGradientColor,
          filter: "blur(250px)",
          transform: "rotate(-2deg)",
        }}
      />

      <div
        className="absolute right-[-150px] top-[-200px] w-[350px] h-[350px] rounded-full opacity-90"
        style={{
          background: rightGradientColor,
          filter: "blur(250px)",
          transform: "rotate(-2deg)",
        }}
      />

      <h2
        className="relative w-[90%] md:w-[70%] lg:w-[60%] text-center font-[Manrope] 
          text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] 
          font-normal leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[56px] 
          tracking-[-0.96px] px-4 z-10"
        style={{ color: textColor }}
      >
        {text}
      </h2>
    </section>
  );
}