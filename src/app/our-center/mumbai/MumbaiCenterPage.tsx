'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Users } from 'lucide-react';
import axios from 'axios';
import AppointmentForm from '@/page-components/about/AppointmentForm';
import IntroductionSection from './IntroductionSection';
import CentersGrid from './CentersGrid';
import OurExpertise from './OurExpertise';
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import MumbaiDoctorsSection from './MumbaiDoctorsSection';
import MumbaiFaqSection from './MumbaiFaqSection';

// Add the Review type
type Review = {
  author: string;
  text: string;
  create_time: string;
  star_rating: string;
};

export default function MumbaiCenterPage() {
  const [showForm, setShowForm] = useState(false);
  
  // Add review states
  const [rating, setRating] = useState<number>(4.5);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [reviewsList, setReviewsList] = useState<Review[]>([]);

  // Fetch review data on mount
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative text-white py-40 px-4 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/hero-mumbai.jpg")',
          minHeight: '500px'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-xl">
            Progenesis IVF, Mumbai
          </h1>
          <button 
            onClick={() => setShowForm(true)}
            className="text-white px-6 py-3 rounded-md font-medium transition duration-300"
            style={{ backgroundColor: '#1656A5' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d4078'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1656A5'}
          >
            Book Your Appointment
          </button>
        </div>
      </div>

      {/* Introduction Section with Map */}
      <IntroductionSection onBookAppointment={() => setShowForm(true)} />
      <CentersGrid onBookAppointment={() => setShowForm(true)} />
      <OurExpertise />
      
      {/* Pass fetched data to TestimonialsSection */}
      <TestimonialsSection 
        rating={rating}
        totalReviews={totalReviews}
        reviewsList={reviewsList}
      />
      <MumbaiDoctorsSection />
      <MumbaiFaqSection /> 

      {/* Appointment Form Modal */}
      {showForm && <AppointmentForm onClose={() => setShowForm(false)} />}
    </div>
  );
}