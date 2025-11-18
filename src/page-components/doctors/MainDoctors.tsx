// page-components/doctors/MainDoctors.tsx
import React, { Suspense } from 'react';
import DoctorBanner from './DoctorsBanner';
import DoctorsInfo from './DoctorsInfo';
import AppointmentForm from '../about/AppointmentForm';
import { Doctor } from '@/data/doctors';

interface MainDoctorsProps {
  doctors: Doctor[];
}

const MainDoctors = ({ doctors }: MainDoctorsProps) => {
  return (
    <div className="w-full overflow-x-hidden">
      <DoctorBanner />
      <DoctorsInfo doctors={doctors} />
      <section className="relative overflow-hidden">
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

          <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
            <AppointmentForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default MainDoctors;