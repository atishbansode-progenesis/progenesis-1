// app/doctors/page.tsx

import { Doctor, getAllDoctors } from "@/data/doctors";
import MainDoctors from "@/page-components/doctors/MainDoctors";
import { doctors as oldDoctors } from "@/data/doctors"; // ⬅️ IMPORT OLD LOCAL DOCTOR DATA

export const metadata = {
  title: "Best IVF Doctors in India | Fertility Specialist in India",
  description:
    "Best fertility doctors in India, Progenesis team of fertility specialists provides the highest success rates on fertility treatments. Click to know more.",
  alternates: {
    canonical: "https://progenesisivf.com/doctors",
  },
};


export default async function DoctorsPage() {
  let apiDoctors: Doctor[] = [];

  try {
    apiDoctors = await getAllDoctors();
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }

  const mergedDoctors = apiDoctors.map((doc) => {
    const localMatch = oldDoctors.find((d) => d.slug === doc.slug);

    return {
      ...doc,
      image: localMatch ? localMatch.image : doc.image,
    };
  });

  return <MainDoctors doctors={mergedDoctors} />;
}
