export type Doctor = {
  slug: string;
  name: string;
  bio: string;
  singlePageBio?: string;
  experience: string;
  qualifications: string;
  fellowship: string;
  hospital: string;
  specialty: string;
  languages?: string;
  image: string;
  uid?: string;
};

export const doctors = [
  { slug: "dr-narhari-s-malagaonkar", image: "/images/doctors/doctor-narhari.png" },
  { slug: "dr-sonali-malagaonkar", image: "/images/doctors/doctor-sonali.png" },
  { slug: "dr-unnati-mamtora", image: "/images/doctors/Unnati.webp" },
  { slug: "dr-prerna-khandelwal", image: "/images/doctors/Prerrna.webp" },
  { slug: "dr-shradha-pol", image: "/images/doctors/Shradha.webp" },
  { slug: "dr-bhavika-sane", image: "/images/doctors/Bhavika.webp" },
  { slug: "dr-bhageshri", image: "/images/doctors/Bhageshri.webp" },
  { slug: "dr-teena-desai", image: "/images/doctors/Teena.webp" },
  { slug: "dr-priti-pardeshi", image: "/images/doctors/Priti.webp" },
  { slug: "dr-darshna-wahane", image: "/images/doctors/Darshna.webp" },
  { slug: "dr-rajashree-patil", image: "/images/doctors/Rajashree.webp" },
  { slug: "dr-dinesh-wade", image: "/images/doctors/Dinesh.webp" },
  { slug: "dr-shital-sonone", image: "/images/doctors/Shital.webp" },
  { slug: "dr-ashwini-talpe", image: "/images/doctors/Ashwini.webp" },
  { slug: "dr-suchitra-somkuwar", image: "/images/doctors/Suchitra.webp" },
  { slug: "dr-sangita-ingle", image: "/images/doctors/Sangita.webp" },
  { slug: "dr-tushar-zanjade", image: "/images/doctors/Tushar.webp" },
  { slug: "dr-apurva-patni", image: "/images/doctors/Apurva.webp" },
  { slug: "dr-vivek-bagul", image: "/images/doctors/Vivek.webp" }
];

export async function getAllDoctors(): Promise<Doctor[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctor/`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch doctors");
    }

    // ✅ fetch JSON properly
    const apiDoctors: Doctor[] = await response.json();

    // ✅ merge images based on slug
    const mergedDoctors = apiDoctors.map((doc) => {
      const localMatch = doctors.find((d) => d.slug === doc.slug);
      return {
        ...doc,
        image: localMatch ? localMatch.image : doc.image, // fallback to API image
      };
    });

    return mergedDoctors;

  } catch (error) {
    console.error("Doctors API Error:", error);
    return [];
  }
}
