import React from 'react';

export const metadata = {
  title: "Treatments for Infertility | Advanced Fertility Treatments",
  description: "Progenesis Fertility Center provides all advanced fertility treatments under one roof with its world-class labs and other technologies for all fertility problems.",
}

export default function TreatmentsLayout({
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
