'use client';
import React, { useMemo, useState } from 'react';
import { centersData, type Center } from './CenterCard';
import { useRouter } from 'next/navigation';
import FaQ from '../about/FaQ';
import CenterDoctorsSection from './SingleCenterDoctors';
import TestimonialsCenters from './TestimonialCenters';
import AppointmentForm from '../about/AppointmentForm';

interface SingleCenterProps {
  selectedSlug?: string;
}

export default function SingleCenter({ selectedSlug }: SingleCenterProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const selectedCenter = useMemo(() => {
    if (!selectedSlug) {
      return undefined;
    }

    const normalizedSlug = selectedSlug.toLowerCase();
    return centersData.find((c) => c.slug === normalizedSlug);
  }, [selectedSlug]);

  if (!selectedCenter) {
    return null;
  }

  return (
    <div>
      {/* Hero Banner Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${selectedCenter.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="section-spacing max-w-7xl w-full">
          <h1 className="text-white text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] lg:text-[80px] lg:leading-[88px] font-[Manrope] tracking-tight font-semibold mb-4">
            Progenesis IVF,
          </h1>
          <h2 className="text-white text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] lg:text-[80px] lg:leading-[88px] font-semibold font-[Manrope] mb-6">
            {selectedCenter.name}
          </h2>
        </div>
      </section>

      {/* Center Details Section */}
      <section className="section-spacing w-full bg-white ">
        <div className=" lg:flex lg:flex-row">
          <div className="w-full ">
            <p className="w-fit rounded-[8px] py-[4px] px-[8px] text-sm text-[#1656A5] bg-[#1656A5]/10 mb-2">Our Centers</p>
            <h1 className="text-[#2C2C2C] text-[32px] md:text-[48px] font-[Manrope] leading-[40px] md:leading-[56px] tracking-tight font-semibold mb-6 lg:mb-12 md:pb-6">
              Progenesis IVF, {selectedCenter.name}
            </h1>
            {/* Right: Minimap with Marker */}
              {selectedCenter.coordinates && (
                <div  className="md:hidden block mb-6 lg:ml-10 w-full h-[400px] lg:h-[600px] overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${selectedCenter.coordinates.lat},${selectedCenter.coordinates.lng}&z=15&output=embed`}
                  ></iframe>
                </div>
              )}

            <div className="grid gap-8 items-start">
              {/* Left: Contact Information */}
              <div className="font-[Manrope] space-y-8 ">
                {/* Phone Section */}
                <div className='flex pb-4 md:pb-8'>
                  <div className="p-2 rounded-lg">
                      <svg className="md:w-15 w-10 md:h-15 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                  </div>
                  <div className="lg:ml-12  items-center gap-3 mb-3">
                    <div className='mb-3'>
                          <span className="text-base text-[#606060]">Reach Out to us at</span>
                    </div>
            
                    <p className="lg:text-[32px] text-base leading-5 font-medium md:leading-[40px] text-[#1656A5]">{selectedCenter.phone}</p>
                    
                  </div>
                </div>

                {/* Address Section */}
                <div className='flex'>
                  <div className="p-2 rounded-lg">
                      <svg className="md:w-15 w-10 md:h-15 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  
                  <div className="lg:ml-12 ml-2">
                    <div className=" lg:mb-3">
                    
                      <span className="text-base text-[#606060]">Visit the Center</span>
                    </div>
                    <p className="lg:text-[32px] text-base  text-[#1656A5] leading-6 tracking-tight font-medium lg:leading-[40px]">
                      {selectedCenter.address}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row flex-wrap gap-4 pt-4 pb-8">
                  <button
                    onClick={() => {
                      if (selectedCenter.mapUri) {
                        window.open(`https://maps.app.goo.gl/${selectedCenter.mapUri}`, '_blank');
                      }
                    }}
                    disabled={!selectedCenter.mapUri}
                    className="lg:px-8 lg:py-3 p-[10px] h-10 lg:h-14 w-fit rounded-lg border hover:cursor-pointer border-[#1656A5] text-white bg-[#1656A5] text-sm font-medium hover:bg-white hover:text-[#1656A5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Get Location
                  </button>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="lg:px-8 lg:py-3 p-[10px] h-10 lg:h-14 w-fit rounded-lg border hover:cursor-pointer border-[#1656A5] bg-white text-[#1656A5] text-sm font-medium hover:bg-[#1656A5] hover:text-white transition-colors"
                  >
                    Book an Appointment
                  </button>

                  {/* Modal */}
                  {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
                </div>
              </div>

             
            </div>
          </div>
           {/* Right: Minimap with Marker */}
              {selectedCenter.coordinates && (
                <div  className="hidden md:block lg:ml-10 w-full h-[400px] lg:h-[600px] overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${selectedCenter.coordinates.lat},${selectedCenter.coordinates.lng}&z=15&output=embed`}
                  ></iframe>
                </div>
              )}
        </div>
      </ section>

      <div className="w-fit h-fit">
        <img src="/images/CenterFixed.png" alt="fixed" className="max-w-full h-auto" />
      </div>


      <CenterDoctorsSection />
      <TestimonialsCenters />
      <FaQ />
    </div>
  );
}
