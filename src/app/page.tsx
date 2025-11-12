"use client";

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

interface Review {
  author: string;
  text: string;
  create_time: string;
  star_rating: string
}

export default function Home() {
  const [rating, setRating] = useState<number>(4.5);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [reviewsList, setReviewsList] = useState<Review[]>([]);

  useEffect(() => {
    getReviewData();
  }, []);

  const getReviewData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL || ""}/api/average-reviews/`
      );

      // ✅ Defensive checks for all nested properties
      const overall = response?.data?.results?.overall;
      const reviewsData = overall?.data ?? [];

      if (!Array.isArray(reviewsData)) {
        console.warn("Unexpected reviewsData format:", reviewsData);
        return;
      }

      const formattedReviews: Review[] = reviewsData
      .filter(
        (item: any) =>
          item?.reviewer &&
          item?.comment &&
          !item.comment.toLowerCase().includes("translated by google")
      )
      .map((item: any) => ({
        author: item.reviewer?.displayName || "Unknown Author",
        text: item.comment || "No Review Text",
        create_time: item.create_time,
        star_rating: item.star_rating
      }));


      setReviewsList(formattedReviews);
      setRating(overall?.average_rating ?? 0);
      setTotalReviews(overall?.total_reviews ?? 0);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      // Ensure state fallback to prevent SSR crash
      setReviewsList([]);
      setRating(0);
      setTotalReviews(0);
    }
  };

  return (
    <>
      <HeroCarousel />
      <StatsSection />
      <TreatmentsSection />
      <TestimonialsSection
        rating={rating}
        totalReviews={totalReviews}
        reviewsList={reviewsList}
      />
      <DifferenceSection />
      <LocationsSection />
      <DoctorsSection />
      <StoriesSection />
      <FaqSection />
      <AwardsSection />
      <VideoSection />
      <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
        <AppointmentForm />
      </Suspense>
      <GradientBanner text="Striving to set a new standard for reproductive health care services." />
    </>
  );
}
