import { Center, getAllCenters } from '@/data/centers';
import CenterMain from '@/page-components/centers/CenterMain'
import React from 'react'


export default async function CentersPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let apiCenters: Center[] = [];
  
    try {
      apiCenters = await getAllCenters();
    } catch (error) {
      console.error("Error fetching centers:", error);
    }
  return (
    <CenterMain data={apiCenters} />
  );
}