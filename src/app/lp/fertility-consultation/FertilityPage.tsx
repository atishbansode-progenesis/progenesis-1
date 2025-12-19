"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AdHeroSection from "./AdHeroSection";
import AppointmentForm from "@/page-components/about/AppointmentForm";
import WhyChooseProgenesis from "./WhyChooseProgenesis";
import FertilityServices from "./FertilityServices";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import AdDoctorSection from "./AdDoctorSection";
import StoriesSection from "@/components/Home/StoriesSection";
import FaqSection from "./FaqSection";


// Add Review type
type Review = {
  author: string;
  text: string;
  create_time: string;
  star_rating: string;
};

export default function FertilityPage() {
  const [showForm, setShowForm] = useState(false);

  // Add review states
  const [rating, setRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [reviewsList, setReviewsList] = useState<Review[]>([]);

  // Fetch review data on mount
  useEffect(() => {
    const getReviewData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL || ""}/api/average-reviews/`
        );
        const overall = response?.data?.results?.overall;
        const reviewsData = overall?.data ?? [];

        if (!Array.isArray(reviewsData)) return;

        // Extract original review text from Google translation markers
        const extractOriginal = (comment: string): string => {
          if (typeof comment !== "string") return comment ?? "No Review Text";
          const translatedMarker = "(Translated by Google)";
          const originalMarker = "(Original)";
          const originalIdx = comment.indexOf(originalMarker);
          if (originalIdx !== -1) {
            const afterOriginal = comment
              .slice(originalIdx + originalMarker.length)
              .trim();
            return afterOriginal.replace(/^\s*[\r\n]*/, "");
          }
          const translatedIdx = comment
            .toLowerCase()
            .indexOf(translatedMarker.toLowerCase());
          if (translatedIdx !== -1) {
            const afterTranslated = comment
              .slice(translatedIdx + translatedMarker.length)
              .trim();
            return afterTranslated || "No Review Text";
          }
          return comment;
        };

        // Format reviews list
        const formattedReviews: Review[] = reviewsData
          .filter(
            (item: any) =>
              item?.reviewer &&
              item?.comment &&
              typeof item.comment === "string"
          )
          .map((item: any) => ({
            author: item.reviewer?.displayName || "Unknown Author",
            text: extractOriginal(item.comment),
            create_time: item.create_time,
            star_rating: item.star_rating,
          }));

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

    getReviewData();
  }, []);

  return (
    <div>
      {/* Introduction Section */}
      <AdHeroSection onBookAppointment={() => setShowForm(true)} />

      {/* Why Choose Section */}
      <WhyChooseProgenesis onOpenPopup={() => setShowForm(true)} />

      {/* Fertility Services Section */}
      <FertilityServices />

      {/* Testimonials Section */}
      <TestimonialsSection
        rating={rating}
        totalReviews={totalReviews}
        reviewsList={reviewsList}
      />

      <AdDoctorSection />

      <StoriesSection />
      <FaqSection />
      <AppointmentForm />

      {/* Appointment Form Modal */}
      {showForm && <AppointmentForm onClose={() => setShowForm(false)} />}
    </div>
  );
}