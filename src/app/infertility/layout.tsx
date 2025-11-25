import React from 'react';

export const metadata = {
  title: "Fertility Issues | Causes of Infertility",
  description: "Learn about common infertility causes, from hormonal imbalances to lifestyle factors. Get comprehensive solutions and expert guidance at Progenesis IVF.",
  alternates: {
    canonical: (process.env.NEXT_PUBLIC_SITE_URL || "https://progenesisivf.com") + "/infertility",
  },
}

export default function InfertilityLayout({
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
