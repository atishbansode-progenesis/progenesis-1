import React from 'react'
import '../about/AboutMain.css'
import CareersLanding from './CareersLanding'
import CareersValues from './CareersValues'
import CareersBenefits from './CareersBenefits'
import CareersOpenings from './CareersOpenings'

const MainCareers = () => {
  return (
    <div>
      <CareersLanding />
      <CareersValues />

      {/* Shift Benefits closer to Values */}
      <div className="-mt-12">
        <CareersBenefits />
      </div>

      {/* Add gap between Benefits and Openings */}
      {/* <div className="mt-12">
        <CareersOpenings />
      </div> */}
    </div>
  )
}

export default MainCareers
