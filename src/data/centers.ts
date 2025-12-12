

export interface Doctor {
  id: number;
  uid: string;
  slug: string;
  email?: string;
  name: string;
  singlePageBio: string;
  experience: string;
  bio: string;
  qualifications: string;
  fellowship: string;
  hospital: string;
  specialty: string;
  languages: string;
  image?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface FAQ {
  uid: string;
  question: string;
  answer: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Center {
  id: number;
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  pinCode: string;
  image: string;
  phone?: string;
  email?: string;
  services?: string[];
  map_uri: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  gallery?: string[];
  availableDoctors: Doctor[];
  metadata?: {
    title: string;
    description: string;
  };
  icon?: string;
  desc?: string;
  order?: number;
  faqs?: FAQ[];
}


export async function getAllCenters(): Promise<Center[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/centers-data/`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error("Failed to fetch doctors");
    }
    const apiCenters: Center[] = await response.json();
    return apiCenters;

  } catch (error) {
    console.error("Doctors API Error:", error);
    return [];
  }
}

export async function getCenterBySlug(slug: string): Promise<Center | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/centers-data/${slug}/`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error("Failed to fetch center");
    }
    const center: Center = await response.json();
    return center;

  } catch (error) {
    console.error("Center API Error:", error);
    return null;
  }
}
