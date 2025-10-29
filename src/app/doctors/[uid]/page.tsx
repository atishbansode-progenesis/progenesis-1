import React from "react";
import SingleDoctor from "@/page-components/doctors/SingleDoctor";

// Define the API response type
type DoctorAPIResponse = {
  uid: string;
  slug: string;
  name: string;
  bio: string;
  experience: string;
  qualifications: string;
  fellowship: string;
  hospital: string;
  specialty: string;
  languages?: string;
  image_url: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  sitemaps?: any;
  schemas?: any;
};

async function getDoctorBySlug(slug: string): Promise<DoctorAPIResponse | null> {
  try {
    const response = await fetch(`http://139.59.47.127/api/doctors/${slug}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch doctor: ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching doctor:", error);
    return null;
  }
}

export default async function Page({ 
  params 
}: { 
  params: { locale: string; uid: string } 
}) {
  const { uid } = params;
  
  const doctorData = await getDoctorBySlug(uid);
  
  if (!doctorData) {
    return (
      <div className="w-full px-6 md:px-12 lg:px-[90px] py-10">
        <p className="text-center text-red-500">Doctor not found</p>
      </div>
    );
  }
  
  return <SingleDoctor doctorData={doctorData} />;
}