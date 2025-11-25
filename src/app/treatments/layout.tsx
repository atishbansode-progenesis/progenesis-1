import React from 'react';

export const metadata = {
  title: "Treatments for Infertility | Advanced Fertility Treatments",
  description: "Progenesis IVF offers comprehensive fertility treatments including IVF, ICSI, IUI, and advanced procedures. Get expert care in one location.",
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SITE_URL || "https://progenesisivf.com") + "/treatments",
  },
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
