'use client'
import React, { useState } from 'react'
import AppointmentForm from '../about/AppointmentForm';  // import form component

const InfertilityHero = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-gradient-to-r grid bg-[url("/images/infertility-mob.png")] h-[520px] md:h-auto csLg:h-[80vh] csLg:bg-[url("/images/infertility-banner.png")] bg-cover overflow-hidden  bg-center '>
            <div className='section-spacing'>
                <div className='flex flex-col'>
                    <div className='lg:pb-[44px] pb-[16px]'>
                        <h2 className='font-manrope text-[12px] md:text-[16px] csLg:text-[18px] font-medium leading-[26px] tracking-[-0.02em]'>
                           <button onClick={() => window.location.href = '/'} className='hover:cursor-pointer'> Home </button><span className="px-[12px]">›</span> <span className="text-[#1656A5]"> Infertility </span>
                        </h2>
                    </div>

                    <div >
                        <h1 className='font-manrope w-auto font-semibold lg:text-[60px] md:text-[56px] text-[32px] lg:leading-[75px] leading-[40px] tracking-[-0.02em]'>
                                Understanding Infertility                        </h1>
                    </div>

                    <div className='lg:pt-11 pt-5'>
                        <button 
                            onClick={() => setIsOpen(true)} 
                            className='bg-[#1656A5] lg:p-[8px] p-[8px] h-[40px] w-[150px] lg:h-[56px] lg:w-[188px] text-[12px] lg:text-[14px]  text-[#F9F9F9] rounded-[8px] lg:rounded-[16px]  hover:cursor-pointer transition'
                        >
                            Book Your Appointment
                        </button>
                    </div>
                </div>
            </div>



            {/* Modal */}
            {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
        </div>
    )
}

export default InfertilityHero
