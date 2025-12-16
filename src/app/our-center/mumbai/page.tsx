import { Metadata } from 'next';
import MumbaiCenterPage from './MumbaiCenterPage';

export const metadata: Metadata = {
  title: "Best IVF Center in Mumbai | Top IVF Clinic in Mumbai",
  description:
    "Best fertility center in Mumbai, Progenesis provides fertility treatments with the highest success rates on fertility treatments. Click to know more.",
  alternates: {
    canonical: "https://progenesisivf.com/our-center/mumbai",
  },
};

const MumbaiJsonLd = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Progenesis IVF - Mumbai Center", // Changed to be location-specific
    "description": "Best IVF Center in Mumbai offering advanced fertility treatments and reproductive healthcare services",
    "medicalSpecialty": "Reproductive Medicine",
    "url": "https://www.progenesisivf.com/our-center/mumbai", // Changed to Mumbai page URL
    "image": "https://www.progenesisivf.com/images/progenesis-ivf-center.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16, First Floor, Dosti Imperia, Complex, Ghodbunder Rd, opp. R Mall, Manpada, Thane West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400601",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.2319173",
      "longitude": "72.97594"
    },
    "telephone": "+91-7030944041",
    "priceRange": "₹₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "IVF Treatment",
        "description": "In Vitro Fertilization treatment for infertility"
      },
      {
        "@type": "MedicalProcedure",
        "name": "IUI Treatment",
        "description": "Intrauterine Insemination fertility treatment"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Fertility Consultation",
        "description": "Comprehensive fertility assessment and consultation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Egg Freezing",
        "description": "Oocyte cryopreservation for fertility preservation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "ICSI Treatment",
        "description": "Intracytoplasmic Sperm Injection for male infertility"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "12000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/progenesisivf",
      "https://www.instagram.com/progenesisivf",
      "https://twitter.com/progenesisivf",
      "https://www.linkedin.com/company/progenesisivf"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default function Page() {
  return (
    <>
      <MumbaiJsonLd />
      <MumbaiCenterPage />
    </>
  );
}