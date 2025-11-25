import React from "react";
import MainInfertilityPage from "../page";

export default async function InfertilityCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  return <MainInfertilityPage category={category} />;
}