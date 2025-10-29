import CenterMain from '@/page-components/centers/CenterMain'
import { notFound } from 'next/navigation';
import React from 'react'
import { centersData as hardcodedCenters } from '@/data/centersData';

const apiUrl = process.env.NEXT_PUBLIC_API_URL


// api/centres/

// Fetch doctors data server-side from Django API
async function fetchCenters() {
  try {
    
    
    if (!apiUrl) {
      console.error('NEXT_PUBLIC_BASE_URL is not defined in environment variables');
      return null;
    }    
    const response = await fetch(`${apiUrl}/api/centres/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', 
    });

    if (!response.ok) {
      console.error('Failed to fetch centers:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response:', errorText);
      return null;
    }

    const result = await response.json();
    console.log('Centers API response:', result);
    
    if (result.success && result.data) {
      return result.data;
    } else if (Array.isArray(result)) {
      return result;
    } else if (result.results) {
      return result.results;
    }
    
    return result;
  } catch (error) {
    console.error('Error fetching centers from Django API:', error);
    return null;
  }
}


export default async function page() {
  const apiCentersData = await fetchCenters();
  console.log("centersData from API", apiCentersData);

  if (!apiCentersData) {
    notFound();
  }

  // Merge API data with hardcoded images
  const mergedCentersData = apiCentersData.map((apiCenter: any) => {
    // Find matching hardcoded center by slug
    const hardcodedCenter = hardcodedCenters.find(
      (hc) => hc.slug.toLowerCase() === apiCenter.slug.toLowerCase()
    );

    // Merge API data with hardcoded image and gallery
    return {
      ...apiCenter,
      // Use hardcoded image if available
      cover_image: hardcodedCenter?.image || apiCenter.cover_image,
      image: hardcodedCenter?.image || apiCenter.cover_image,
      // Use hardcoded gallery if available
      images: hardcodedCenter?.gallery || apiCenter.images,
      gallery: hardcodedCenter?.gallery || apiCenter.images,
    };
  });

  return (
        <CenterMain centersData={mergedCentersData} />
  )
}
