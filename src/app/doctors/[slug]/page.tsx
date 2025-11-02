import React from "react";
import SingleDoctor from "@/page-components/doctors/SingleDoctor";

export default function Page({ params }: { params: { locale: string; slug: string } }) {
  const { slug } = params;
  return <SingleDoctor selectedSlug={slug} />;
}