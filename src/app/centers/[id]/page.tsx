import React from 'react';
import SingleCenter from '@/page-components/centers/SingleCenter';
import { centersData } from '@/data/centersData';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Define the API response type based on your data structure
type CenterAPIResponse = {
  uid: string;
  category: string | null;
  location: string;
  slug: string;
  url: string;
  meta_title: string | null;
  meta_description: string | null;
  cover_image: string | null;
  images: string[];
  name: string;
  city: string;
  state: string;
  address: string;
  email: string;
  services: any[];
  sitemaps: any;
  coordinates: any;
  videos: any;
  content: any;
  alt_text: string | null;
  testimonial_text: string | null;
  faq: any;
  google_reviews: any;
  location_url: string | null;
  contact_number: string;
  description: string | null;
  doctors: any[];
  testimonials: any[];
  created_at: string;
  updated_at: string;
};

async function getCenterBySlug(slug: string): Promise<CenterAPIResponse | null> {
  try {
    if (!apiUrl) {
      console.error('NEXT_PUBLIC_API_URL is not defined in environment variables');
      return null;
    }

    const response = await fetch(`${apiUrl}/api/centres/${slug}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch center: ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    console.log('Center API response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching center:', error);
    return null;
  }
}

interface CenterPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CenterPage({ params }: CenterPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.id;
  
  const centerData = await getCenterBySlug(slug);
  
  if (!centerData) {
    return (
      <div className="w-full px-6 md:px-12 lg:px-[90px] py-10">
        <p className="text-center text-red-500">Center not found</p>
      </div>
    );
  }
  
  // Find matching center in hardcoded data to get the local image
  const hardcodedCenter = centersData.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );
  
  // Merge API data with hardcoded images
  const mergedCenterData = {
    ...centerData,
    // Use hardcoded image for cover, otherwise fall back to API data
    cover_image: hardcodedCenter?.image || centerData.cover_image,
    // Use hardcoded gallery images array, otherwise fall back to API data
    images: hardcodedCenter?.gallery || centerData.images,
  };
  
  return (
    <main className="min-h-screen bg-gray-50">
      <SingleCenter centerData={mergedCenterData} />
    </main>
  );
}
