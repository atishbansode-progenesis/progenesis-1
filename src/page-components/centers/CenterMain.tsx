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
      <AppointmentForm />
    </div>
  )
}

export default CenterMain