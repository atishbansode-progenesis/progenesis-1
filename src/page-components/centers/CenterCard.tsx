'use client';
import React, { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import AppointmentForm from '../about/AppointmentForm';
import { Center } from '@/data/centers';
import { Link as LinkIcon } from 'lucide-react';
import Link from "next/link"

interface CenterCardProps {
  name: string;
  address: string;
  image: string;
  data: Center[];
}

const CenterCard: React.FC<CenterCardProps> = ({ name, address, image, data }) => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);


  const centerData = React.useMemo(() => {
    const center = data.find(center => center.name === name);
    if (!center) {
      console.warn(`Center data not found for: ${name}`);
      return {
        id: 0,
        slug: (name || 'unknown-center')
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-'),
        name: name || 'Unknown Center',
        city: '',
        state: '',
        address: address || 'Address not available',
        image: image || '',
        timings: { weekdays: 'Not available', weekends: 'Not available' },
        services: [],
        coordinates: undefined,
        map_uri: undefined
      };
    }
    return center;
  }, [name, address, image]);

  return (
    <div onClick={() => {
        // Only allow routing if the appointment form is NOT open
        // This ensures that clicking the card immediately after closing the form
        // (which might involve the user quickly moving the mouse) does not navigate.
        if (!open) {
          router.push(`/our-center/${centerData.slug}`);
        }
      }}
      className="flex flex-col hover:cursor-pointer md:flex-row cslg:gap-4 bg-[#FFFFFF] hover:bg-[#1656A50D]  rounded-[16px] overflow-hidden transition-shadow">
      {/* Image Container */}
      <div className=" px-4 pt-4 csLg:p-4 relative w-full  h-[100%] md:h-[444px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between p-4 relative lg:p-4 md:p-6 w-full">
        {/* Center Name and Address */}
        <div className='w-auto lg:max-w-[400px] lg:h-[196px]'>
          <h3 className="text-[24px] md:text-[30px] font-normal font-manrope text-[#1656A5] mb-2">
            {name}
          </h3>
          <div className='max-w-[535px]'><p className="text-[#6B7280] text-[14px] lg:text-[24px] leading-[22px] lg:leading-[40px]  font-normal md:text-[32px] md:leading-[40px] tracking-tight mb-4">
            {address}
          </p></div>


          {/* Services */}
          {centerData.services && centerData.services.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">

            </div>
          )}
        </div>
        {/* Action Buttons */}
        <div className="flex items-start justify-between flex-col md:flex-row gap-3 -mt-5 lg:mt-7 ">
          <a href={`https://maps.app.goo.gl/${centerData.map_uri}`} target='_blank' rel='noreferrer'
            onClick={(e) => {
                        e.stopPropagation();
                      }}
            className="cursor-pointer flex items-center justify-start gap-2 h-10 lg:text-[16px] text-[14px] font-medium hover:text-[#1656A5] transition-colors whitespace-nowrap lg:mt-4"
          >
            <div className="flex items-center">
              Get Location
              <LinkIcon className='h-4 w-4 ml-2' />
            </div>
          </a>


          <button
            className="cursor-pointer flex items-center justify-center w-[121px] h-[40px] rounded-[8px] border border-[#1656A5] px-[10px] py-[10px] bg-white  transition-colors whitespace-nowrap
             lg:w-[158px] lg:h-[56px] lg:rounded-[16px] lg:px-2 lg:py-2"
            onClick={(e) => {e.stopPropagation(),setOpen(true)}}
          >
            <span className="font-manrope font-medium text-[12px] leading-[20px] text-[#1656A5] text-center lg:text-sm lg:leading-[24px]">
              Book Appointment
            </span>
          </button>
        </div>

        {open && (
          <Suspense
            fallback={
              <div className="w-full h-64 flex items-center justify-center">
                Loading...
              </div>
            }
          >
            <AppointmentForm onClose={() => setOpen(false)} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default CenterCard;
