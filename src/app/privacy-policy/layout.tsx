import React from 'react';

export const metadata = {
  title: "Privacy Policy - Progenesis",
  description: "Progenesis Fertility Center, from the house of We Care Hospital Services. is Advanced Center for Reproductive Medicine (here onwards described as 'Progenesis",
  alternates: {
    canonical: "https://progenesisivf.com/privacy-policy",
  },
}

export default function PrivacyPolicyLayout({
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
