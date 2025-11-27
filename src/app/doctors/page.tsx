// app/doctors/page.tsx

import { Doctor, getAllDoctors } from "@/data/doctors";
import MainDoctors from "@/page-components/doctors/MainDoctors";

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

  return <MainDoctors doctors={apiDoctors} />;
}
