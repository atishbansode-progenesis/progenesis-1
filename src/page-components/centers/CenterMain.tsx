import React from "react";
import '../about/AboutMain.css'
import CentersNav from './CentersNav'
import CentersLanding from "./CentersLanding";
import AppointmentForm from "../about/AppointmentForm";

const CenterMain = () => {
  return (
    <div className="w-full [&>*:not([class*='bg-'])]:bg-[#F6F6F6]">
      <CentersLanding />  
      <CentersNav />
     

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
    </div>
  )
}

export default CenterMain