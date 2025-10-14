import React from "react";

export const GradientBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[475px] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-blue-50" />

      {/* Background Blur Gradients */}
      <div
        className="absolute left-[-50px] bottom-[-50px] w-[322px] h-[443px] rounded-full opacity-70"
        style={{
          background: "#94BA3D",
          filter: "blur(250px)",
          transform: "rotate(-2deg)",
        }}
      />

      <div
        className="absolute right-[-150px] top-[-200px] w-[350px] h-[350px] rounded-full opacity-90"
        style={{
          background: "#1656A5",
          filter: "blur(250px)",
          transform: "rotate(-2deg)",
        }}
      />

      {/* Text */}
      <h2 className="relative w-[90%] text-center font-[Manrope] text-[#94BA3D] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-normal leading-[40px] sm:leading-[44px] md:leading-[52px] lg:leading-[56px] tracking-[-0.96px] md;px-4 z-10 mx-auto">
        The road may be challenging, but with the{" "}
        <br className="hidden lg:block" /> right care, parenthood is within
        reach.
      </h2>
    </section>
  );
};
