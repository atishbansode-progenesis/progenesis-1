import React from "react";
import MainTreatmentsPage from "../page";

export default async function TreatmentsCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return <MainTreatmentsPage category={category} />;
}