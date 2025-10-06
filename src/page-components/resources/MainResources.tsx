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
      <AppointmentForm />
    </div>
  )
}

export default MainResources