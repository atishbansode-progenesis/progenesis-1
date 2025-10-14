import React from 'react'
import DoctorBanner from './DoctorsBanner'
import '../about/AboutMain.css'
import DoctorsInfo from './DoctorsInfo'
import AppointmentForm from '../about/AppointmentForm'
import DoctorsPart from './DoctorsPart'
const MainDoctors = () => {
  return (
    <div className= "w-full overflow-x-hidden">
        <DoctorBanner/>
        <DoctorsInfo />
        <DoctorsPart />
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
export default MainDoctors 