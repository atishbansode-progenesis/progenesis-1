import SingleDoctor from "@/page-components/doctors/SingleDoctor";
import { notFound } from "next/navigation";
import { Doctor } from "@/data/doctors";

async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/doctor/${slug}`,
      { next: { revalidate: 60 } }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch doctor:", err);
    return null;
  }
}

export async function generateMetadata(props: { params: Promise<{ locale?: string; slug: string }> }) {
  const { slug } = await props.params;
  const doctor = await getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: 'Doctor Not Found | Progenesis IVF',
      description: 'The requested doctor could not be found.',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://progenesisivf.com';
  const fullUrl = `${siteUrl}/doctors/${slug}`;

  return {
    title: `${doctor.name} | ${doctor.specialty} | Progenesis IVF`,
    description: doctor.bio ? doctor.bio.substring(0, 160) : `Meet Dr. ${doctor.name}, a leading ${doctor.specialty} at Progenesis IVF. Expert in fertility treatments.`,
    alternates: {
      canonical: fullUrl,
    },
  };
}

export default async function Page(props: {
  params: Promise<{ locale?: string; slug: string }>;
}) {
  const { slug } = await props.params;
  const apiDoctor = await getDoctorBySlug(slug);
  if (!apiDoctor) notFound();

  return <SingleDoctor doctor={apiDoctor} />;
}
