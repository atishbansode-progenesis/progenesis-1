import React from "react";

interface GradientBannerProps {
  text: string;
}

const GradientBanner: React.FC<GradientBannerProps> = ({ text }) => {
  return (
    <section className="relative w-full h-[350px] md:h-[475px] flex items-center justify-center overflow-hidden px-4 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-blue-50" ></div>

      <div
        className="absolute left-[-100px] bottom-[-100px] w-[250px] h-[300px] md:w-[322px] md:h-[443px] rounded-full opacity-70"
        style={{ background: "#94BA3D", filter: "blur(250px)" }}
      ></div>

      <div
        className="absolute right-[-150px] top-[-150px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full opacity-90"
        style={{ background: "#1656A5", filter: "blur(250px)" }}
      ></div>

      <h2
        className="
    text-center font-[Manrope] font-normal text-[#94BA3D]
    tracking-[-0.96px]
    px-4 z-10 relative
    w-[90%] md:w-[70%] mx-auto
    text-[28px] leading-[36px]   /* 📱 mobile base */
    sm:text-[34px] sm:leading-[42px]  /* 📱+ */
    md:text-[40px] md:leading-[50px]  /* 💻 tablets */
    lg:text-[48px] lg:leading-[56px]  /* 🖥️ desktops */
  "
      >
        {text}
      </h2>
    </section>
  );
};

export default GradientBanner;
