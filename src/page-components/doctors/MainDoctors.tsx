import React from 'react'
import DoctorBanner from './DoctorsBanner'
import '../about/AboutMain.css'
import DoctorsInfo from './DoctorsInfo'
import AppointmentForm from '../about/AppointmentForm'
import DoctorsPart from './DoctorsPart'
const MainDoctors = () => {
  return (
    <div >
        <DoctorBanner/>
        <DoctorsInfo />
        <DoctorsPart />
        <AppointmentForm />
       
    </div>
  )
}
export default MainDoctors 