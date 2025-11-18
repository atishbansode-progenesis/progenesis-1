// src/app/ClientHome.tsx
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
  star_rating: string;
}

const JsonLd = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Progenesis IVF",
    alternateName: "Progenesis Fertility Center",
    url: "https://progenesisivf.com/",
    logo: "https://progenesisivf.com/logo1.png",
    description:
      "Progenesis IVF is India's leading fertility & IVF center offering world-class infertility treatments, advanced IVF, ICSI, IUI, egg freezing, PCOS care, fertility preservation, and male infertility services with high success rates.",
    telephone: "9423971620",
    email: "info@progenesisivf.com",
    sameAs: [
      "https://www.facebook.com/progenesisivf/",
      "https://www.instagram.com/progenesis_ivf_center/",
      "http://www.youtube.com/c/ProgenesisFertilityCenter",
      "https://www.linkedin.com/company/progenesis-ivf/",
      "https://progenesisivf.com/",
    ],
    medicalSpecialty: [
      "Infertility",
      "IVF",
      "Gynecology",
      "Reproductive Medicine",
    ],
    currenciesAccepted: "INR",
    paymentAccepted: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "UPI",
      "Net Banking",
    ],
    areaServed: ["Maharashtra", "India"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "18247",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "9423971620",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Progenesis IVF, Thane West",
      addressLocality: "Thane",
      addressRegion: "Maharashtra",
      postalCode: "400601",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default function ClientHome() {
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
      const overall = response?.data?.results?.overall;
      const reviewsData = overall?.data ?? [];

      if (!Array.isArray(reviewsData)) return;

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

      const formattedReviews: Review[] = reviewsData
        .filter(
          (item: any) =>
            item?.reviewer && item?.comment && typeof item.comment === "string"
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

  return (
    <>
      <JsonLd />
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
      <Suspense
        fallback={
          <div className="w-full h-64 flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <AppointmentForm />
      </Suspense>
      <GradientBanner text="Striving to set a new standard for reproductive health care services." />
    </>
  );
}