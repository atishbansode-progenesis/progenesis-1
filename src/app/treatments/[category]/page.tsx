"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainTreatmentsPage from "../page";

export default function TreatmentsCategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter();
  const category = (params?.category || "").toLowerCase();

  useEffect(() => {
    // Valid categories that should scroll within the main treatments page
    const map: Record<string, string> = {
      advanced: "advanced",
      infertility: "infertility",
      "fertility-preservation": "fertility-preservation",
      "fertility-evaluation": "fertility-evaluation",
      stories: "stories",
    };

    const targetId = map[category];

    // Defer scrolling until the main page has mounted and sections are present
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (el) {
        // Use native smooth scroll; sections have scroll-mt to account for sticky header
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [category, router]);

  // Render the same content as /treatments and let the effect scroll to the right section
  return <MainTreatmentsPage />;
}
