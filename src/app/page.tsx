"use client"; // add only if any of the imported components use hooks like useState/useEffect

import { Suspense, useEffect, useState } from "react";
import GradientBanner from "@/components/GradientBanner";
import AwardsSection from "@/components/Home/AwardsSection";
import DifferenceSection from "@/components/Home/DifferenceSection";
import DoctorsSection from "@/components/Home/DoctorsSection";
import FaqSection from "@/components/Home/FaqSection";
import HeroCarousel from "@/components/Home/HeroCarousel";
import LocationsSection from "@/components/Home/LocationsSection";
import StatsSection from "@/components/Home/StatsSection";
import StoriesSection from "@/components/Home/StoriesSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import TreatmentsSection from "@/components/Home/TreatmentsSection";
import VideoSection from "@/components/Home/VideoSection";
import AppointmentForm from "@/page-components/about/AppointmentForm";
import axios from "axios";

export default function Home() {
  const [rating, setRating] = useState(4.5);
  const [totalReviews, setTotalReviews] = useState(0);
  const [reviewsList, setReviewsList] = useState<{ author: string; text: string }[]>([]);

  useEffect(() => {
    getReviewData();
  }, []);

  const getReviewData = async () => {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/average-reviews/");

      const overall = response.data.results.overall;
      const reviewsData = overall.data;

      const formattedReviews = reviewsData.map((item: any) => ({
        author: item.reviewer.displayName,
        text: item.comment,
      }));

      setRating(overall.average_rating);
      setTotalReviews(overall.total_reviews);
      setReviewsList(formattedReviews);

    } catch (error) {
      console.log("Error fetching reviews:", error);
    }
  };
  return (
    <>
      <HeroCarousel />
      <StatsSection />
      <TreatmentsSection />
      <TestimonialsSection rating={rating} totalReviews={totalReviews} reviewsList={reviewsList} />
      <DifferenceSection />
      <LocationsSection />
      <DoctorsSection />
      <StoriesSection />
      <FaqSection />
      <AwardsSection />
      <VideoSection />
      <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
        <AppointmentForm  />
      </Suspense>
      <GradientBanner text="Striving to set a new standard for reproductive health care services."/>
    </>
  );
}
