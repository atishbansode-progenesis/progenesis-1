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
  { slug: "dr-unnati-mamtora", image: "/images/doctors/Unnati.png" },
  { slug: "dr-prerna-khandelwal", image: "/images/doctors/Prerrna.png" },
  { slug: "dr-shradha-pol", image: "/images/doctors/Shradha.png" },
  { slug: "dr-bhavika-sane", image: "/images/doctors/Bhavika.png" },
  { slug: "dr-bhageshri", image: "/images/doctors/Bhageshri.png" },
  { slug: "dr-teena-desai", image: "/images/doctors/Teena.png" },
  { slug: "dr-priti-pardeshi", image: "/images/doctors/Priti.png" },
  { slug: "dr-darshna-wahane", image: "/images/doctors/Darshna.png" },
  { slug: "dr-rajashree-patil", image: "/images/doctors/Rajashree.png" },
  { slug: "dr-dinesh-wade", image: "/images/doctors/Dinesh.png" },
  { slug: "dr-shital-sonone", image: "/images/doctors/Shital.png" },
  { slug: "dr-ashwini-talpe", image: "/images/doctors/Ashwini.png" },
  { slug: "dr-suchitra-somkuwar", image: "/images/doctors/Suchitra.png" },
  { slug: "dr-sangita-ingle", image: "/images/doctors/Sangita.png" },
  { slug: "dr-tushar-zanjade", image: "/images/doctors/Tushar.png" },
  { slug: "dr-apurva-patni", image: "/images/doctors/Apurva.png" },
  { slug: "dr-vivek-bagul", image: "/images/doctors/Vivek.png" }
];

export async function getAllDoctors(): Promise<Doctor[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/doctor/`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch doctors");
    }
    const apiDoctors: Doctor[] = await response.json();
    return apiDoctors;

  } catch (error) {
    console.error("Doctors API Error:", error);
    return [];
  }
}
