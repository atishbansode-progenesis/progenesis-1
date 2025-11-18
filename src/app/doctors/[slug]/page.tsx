import SingleDoctor from "@/page-components/doctors/SingleDoctor";
import { notFound } from "next/navigation";
import { Doctor, doctors as localDoctors } from "@/data/doctors";

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

export default async function Page(props: {
  params: Promise<{ locale?: string; slug: string }>;
}) {
  const { slug } = await props.params;
  const apiDoctor = await getDoctorBySlug(slug);
  if (!apiDoctor) notFound();

  const localMatch = localDoctors.find((d) => d.slug === slug);
  const mergedDoctor: Doctor = {
    ...apiDoctor,
    image: localMatch?.image ?? apiDoctor.image,
  };

  return <SingleDoctor doctor={mergedDoctor} />;
}
