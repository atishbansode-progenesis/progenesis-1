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
      <CareersBenefits />
      <CareersOpenings />
    </div>
  )
}

export default MainCareers 