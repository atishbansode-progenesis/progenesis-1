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

      // Defensive checks
      const overall = response?.data?.results?.overall;
      const reviewsData = overall?.data ?? [];

      if (!Array.isArray(reviewsData)) {
        console.warn("Unexpected reviewsData format:", reviewsData);
        return;
      }

      // --------------------------------------------------------------
      // Helper: extract the *original* comment if a Google translation exists
      // --------------------------------------------------------------
      const extractOriginal = (comment: string): string => {
        if (typeof comment !== "string") return comment ?? "No Review Text";

        const translatedMarker = "(Translated by Google)";
        const originalMarker = "(Original)";

        // Case 1: both parts present -> return the text after "(Original)"
        const originalIdx = comment.indexOf(originalMarker);
        if (originalIdx !== -1) {
          const afterOriginal = comment.slice(originalIdx + originalMarker.length).trim();
          // Remove any leading newline / whitespace that often follows the marker
          return afterOriginal.replace(/^\s*[\r\n]*/, "");
        }

        // Case 2: only translation marker -> strip the translated part
        const translatedIdx = comment.toLowerCase().indexOf(translatedMarker.toLowerCase());
        if (translatedIdx !== -1) {
          // Everything after the marker is usually the original text
          const afterTranslated = comment.slice(translatedIdx + translatedMarker.length).trim();
          return afterTranslated || "No Review Text";
        }

        // No translation marker at all -> keep as-is
        return comment;
      };

      // --------------------------------------------------------------
      // Format reviews
      // --------------------------------------------------------------
      const formattedReviews: Review[] = reviewsData
        .filter(
          (item: any) =>
            item?.reviewer &&
            item?.comment &&
            typeof item.comment === "string"
        )
        .map((item: any) => {
          const cleanedComment = extractOriginal(item.comment);

          return {
            author: item.reviewer?.displayName || "Unknown Author",
            text: cleanedComment,
            create_time: item.create_time,
            star_rating: item.star_rating,
          };
        });

      setReviewsList(formattedReviews);
      setRating(overall?.average_rating ?? 0);
      setTotalReviews(overall?.total_reviews ?? 0);
    } catch (error) {
      console.error("Error fetching reviews:", error);
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
