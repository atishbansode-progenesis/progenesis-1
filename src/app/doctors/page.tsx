import React from "react";
import MainDoctors from "@/page-components/doctors/MainDoctors";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URL

// Fetch doctors data server-side from Django API
async function fetchDoctors() {
  try {
    
    
    if (!apiUrl) {
      console.error('NEXT_PUBLIC_BASE_URL is not defined in environment variables');
      return null;
    }    
    const response = await fetch(`${apiUrl}/api/doctors/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', 
    });

    if (!response.ok) {
      console.error('Failed to fetch doctors:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      return null;
    }

    const result = await response.json();
    console.log('Doctors API response:', result);
    
    if (result.success && result.data) {
      return result.data;
    } else if (Array.isArray(result)) {
      return result;
    } else if (result.results) {
      return result.results;
    }
    
    return result;
  } catch (error) {
    console.error('Error fetching doctors from Django API:', error);
    return null;
  }
}

const page = async () => {
  const doctorsData = await fetchDoctors();
  console.log("doctorsData", doctorsData);

  if (!doctorsData) {
    notFound();
  }

  return <MainDoctors doctors={doctorsData || []} />;
};  

export default page;