import React from 'react'
import MainCareers from '@/page-components/careers/MainCareers'

export const metadata = {
  title: "Progenesis IVF Jobs | Job Vacancies in Progenesis IVF",
  description: "Browse Job openings in Progenesis IVF. Apply now to build a successful career with Progenesis Fertility Clinics.",
  alternates: {
    canonical: "https://progenesisivf.com/careers",
  },
}

const page = () => {
  return (
	<div >
    <MainCareers />

	</div>
  )
}

export default page