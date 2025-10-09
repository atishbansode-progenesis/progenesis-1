import React from "react";

interface GradientBannerProps {
  text: string;
}

const GradientBanner: React.FC<GradientBannerProps> = ({ text }) => {
  return (
    <section className="relative w-full h-[350px] md:h-[475px] flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* 🔹 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-blue-50" />

      {/* 🔹 Background Blur Gradients */}
      <div
        className="absolute left-[-100px] bottom-[-100px] w-[250px] h-[300px] md:w-[322px] md:h-[443px] rounded-full opacity-70"
        style={{
          background: "#94BA3D",
          filter: "blur(250px)",
          transform: "rotate(-2deg)",
        }}
      ></div>

      <div
        className="absolute right-[-150px] top-[-150px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full opacity-90"
        style={{
          background: "#1656A5",
          filter: "blur(250px)",
          transform: "rotate(-2deg)",
        }}
      ></div>

      {/* 🔹 Text */}
      <h2
        className="
          relative z-10 text-center font-[Manrope] text-[#94BA3D]
          font-normal tracking-[-0.64px]
          w-full md:w-[60%] px-4

          text-[32px] leading-[40px]   /* 📱 Mobile */
          sm:text-[36px] sm:leading-[44px]
          md:text-[42px] md:leading-[50px]
          lg:text-[48px] lg:leading-[56px]
        "
        className="relative w-[90%] md:w-[70%] lg:w-[50%] text-center font-[Manrope] 
             text-[#94BA3D] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] 
             font-normal leading-[36px] sm:leading-[44px] md:leading-[52px] lg:leading-[56px] 
             tracking-[-0.96px] px-4 z-10"
      >
        {text}
      </h2>
    </section>
  );
};

// Example usage
export default function App() {
  return (
    <GradientBanner text="Striving to set a new standard for reproductive health care services." />
  );
}