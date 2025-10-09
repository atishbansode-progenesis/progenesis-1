import React from 'react'
import '../about/AboutMain.css'
import ResourceLanding from './ResourceLanding'
import ResourceGrid from './ResourceGrid'
import ResourceCta from './ResourceCta'
import ResourceStories from './ResourceStories'
import FaQ from '../about/FaQ'
import AppointmentForm from '../about/AppointmentForm'



const MainResources = () => {
  return (
    <div>
      <ResourceLanding />
      <ResourceGrid />
      <ResourceStories />
      <ResourceCta />
      <FaQ />
      <div className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="\video\babyvideo.mp4"   // 👈 apna video path yahaan do
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Overlay (optional dark shade for better readability) */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Foreground Content */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <AppointmentForm />
  </div>
</div>
    


    </div>
  )
}

export default MainResources