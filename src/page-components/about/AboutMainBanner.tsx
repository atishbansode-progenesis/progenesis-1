'use client'
import React, { useState } from 'react'
import AppointmentForm from './AppointmentForm';  // import form component
import HeroSection from '@/components/HeroSection/herosection';

const AboutMainBanner = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <HeroSection 
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
          ]}
          foregroundImage='/images/about-for.png'
          overlayImage='/images/abtt-bg.png'
          title="Your journey to <br /> parenthood begins here."
          />
    )
}

export default AboutMainBanner
