"use client";

import AppointmentForm from "@/page-components/about/AppointmentForm";
import ConsultationForm from "../../components/Consultation/ConsultationForm";
import AwardsSection from "../../components/Home/AwardsSection";
import DifferenceSection from "../../components/Home/DifferenceSection";
import DoctorsSection from "../../components/Home/DoctorsSection";
import FaqSection from "../../components/Home/FaqSection";
import HealthCareBanner from "../../components/Home/HealthCareBanner";
import HeroCarousel from "../../components/Home/HeroCarousel";
import LocationsSection from "../../components/Home/LocationsSection";
import StatsSection from "../../components/Home/StatsSection";
import StoriesSection from "../../components/Home/StoriesSection";
import TestimonialsSection from "../../components/Home/TestimonialsSection";
import TreatmentsSection from "../../components/Home/TreatmentsSection";
import GradientBanner from "@/components/GradientBanner";
import VideoSection from "@/components/Home/VideoSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <StatsSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <DifferenceSection />
      <LocationsSection />
      <DoctorsSection />
      <StoriesSection />
      <FaqSection />
      <AwardsSection />
       <VideoSection />
      <AppointmentForm />
      <GradientBanner text="Striving to set a new standard for <br/> reproductive health care services." />
    </>
  );
}
