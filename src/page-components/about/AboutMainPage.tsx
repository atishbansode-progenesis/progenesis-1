"use client"
import React, { useEffect, useState } from "react";
import AboutMainBanner from './AboutMainBanner'
import OurStories from './OurStories'
import OurApproach from './OurAppoach'
import AboutNav from './AboutNav'
import WhyProgenesis from './WhyProgenesis'
import VisionMission from './VisionMission'
import FaQ from './FaQ'
import Impact from './Impact'
import JoinUs from './JoinUs'
import './AboutMain.css'


const AboutMainPage = () => {

   const [activeSection, setActiveSection] = useState("why-1");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
   <>
      <section id="why-1">
        <AboutMainBanner />
      </section>
      <AboutNav activeSection={activeSection} />
      <section id="our-stories">
        <OurStories />
      </section>
      <section id="our-approach">
        <OurApproach />
      </section>
      <section id="our-vision">
        <VisionMission />
      </section>
      <section id="why-choose-us">
        <WhyProgenesis />
      </section>
      <section id="impact-growth">
        <Impact />
      </section>
      <section id="join-us">
        <JoinUs />
      </section>
      <section id="faqs">
        <FaQ />
      </section>
    </>
  )
}

export default AboutMainPage