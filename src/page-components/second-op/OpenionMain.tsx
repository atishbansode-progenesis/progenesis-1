import React from "react";
import '../about/AboutMain.css'
import OpenionLanding from "./OpenionLanding";
import OpinionNav from "./OpinionNav";
import OpinionContent from "./OpinionContent";
import OpinionBenefits from "./OpinionBenefits";
import OpinionStats from "./OpinionStats";
import OpinionCare from "./OpinionCare";
import AppointmentForm from "../about/AppointmentForm";

const OpenionMain = () => {
      return (
        <div>
        <OpenionLanding />
        <OpinionNav />
        <OpinionContent />
        <OpinionBenefits />
        {/* <OpinionStats /> */}
        <OpinionCare />
        <section className="relative overflow-hidden">
          {/* Video Background */}

          <div className="relative z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/baby.mp4" type="video/mp4" />
          </video>
          
            <AppointmentForm />
          </div>
        </section>

        <section className="relative bg-center bg-cover flex justify-center items-center min-h-[360px] csLg:min-h-[312px]">
          {/* Mobile Background */}
          <div 
            className="absolute inset-0 md:hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/mob-bg-4.png')" }}
            aria-hidden
          />
          {/* Desktop Background */}
          <div 
            className="absolute inset-0 hidden md:block bg-cover bg-center"
            style={{ backgroundImage: "url('/images/bg-4.png')" }}
            aria-hidden
          />
          
          <p className="text-[#94BA3D] max-w-[90%] text-[28px] csLg:text-[48px] text-center font-normal font-[Manrope] relative z-10">
            Seeking a second opinion always helps you make more informed, confident, and well-considered decisions for your health and well-being.
          </p>
        </section>
        </div>
      )
}

export default OpenionMain