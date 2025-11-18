import { Center } from "@/data/centers";

interface SchemaData {
  center: Center;
  baseUrl: string;
}

export function generateMedicalClinicSchema({ center, baseUrl }: SchemaData): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": `Progenesis Fertility Center - Best IVF Center in ${center.name}`,
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "name": "Progenesis IVF"
    },
    "telephone": center.phone,
    "url": `${baseUrl}/${center.slug}`,
    "description": `Progenesis IVF ${center.name} – reproductive medicine & IVF fertility solutions.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": center.address,
      "addressLocality": center.name,
      "addressRegion": center.state,
      "postalCode": center.pinCode,
      "addressCountry": "IN"
    }
  };

  return JSON.stringify(schema);
}

export function generateAllSchemas(center: Center, baseUrl: string): string[] {
  return [
    generateMedicalClinicSchema({ center, baseUrl })
  ];
}