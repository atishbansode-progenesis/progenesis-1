import React from 'react';

export const metadata = {
  title: "Progenesis IVF: Our Fertility Centers",
  description: "Progenesis Fertility Center's network of IVF clinics. Offering world-class fertility treatments with personalized care. Find a fertility centers near you.",
}

export default function CentersLayout({
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