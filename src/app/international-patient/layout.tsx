import React from 'react';

export const metadata = {
  title: "Affordable IVF Treatment for International Patients | IVF Medical Tourism",
  description: "Progenesis Fertility Center is one of India's leading affordable IVF centers providing world-class treatments to international patients.",
  alternates: {
    canonical: "https://progenesisivf.com/international-patient",
  },
}

export default function InternationalPatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
