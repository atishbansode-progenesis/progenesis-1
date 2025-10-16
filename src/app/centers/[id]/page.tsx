'use client';

import React, { Suspense } from 'react';
import SingleCenter from '@/page-components/centers/SingleCenter';
import { centersData } from '@/page-components/centers/CenterCard';
import { useRouter } from 'next/navigation';

interface CenterPageProps {
  params: Promise<{
    id: string;
  }>;
}

function CenterContent({ slug }: { slug: string }) {
  const router = useRouter();
  const normalizedSlug = React.useMemo(() => slug.toLowerCase(), [slug]);

  const center = React.useMemo(() => {
    return centersData.find((c) => c.slug === normalizedSlug);
  }, [normalizedSlug]);

  React.useEffect(() => {
    if (!center) {
      router.push('/centers');
    }
  }, [center, router]);

  if (!center) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <SingleCenter selectedSlug={center.slug} />
    </main>
  );
}

export default function CenterPage({ params }: CenterPageProps) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.id;

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1656A5]"></div>
      </div>
    }>
      <CenterContent slug={slug} />
    </Suspense>
  );
}




// import React, { Suspense } from 'react';
// import { notFound, redirect } from 'next/navigation';
// import SingleCenter from '@/page-components/centers/SingleCenter';
// import { centersData } from '@/page-components/centers/CenterCard';

// interface CenterPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// // Server-side data fetching function
// async function fetchCentresData() {
//   try {
//     const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/centres/', {
//       cache: 'no-store', // or 'force-cache' for static data
//       // next: { revalidate: 3600 } // Optional: revalidate every hour
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('Server-side API Data from centres API:', data);
//     return data;
//   } catch (error) {
//     console.error('Error fetching centres data:', error);
//     return null;
//   }
// }

// async function CenterContent({ slug }: { slug: string }) {
//   const normalizedSlug = slug.toLowerCase();
  
//   // Fetch API data server-side
//   const apiData = await fetchCentresData();
//   console.log('API Data:', apiData);

//   const center = centersData.find((c) => c.slug === normalizedSlug);

//   if (!center) {
//     redirect('/centers');
//   }

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <SingleCenter selectedSlug={center.slug} />
//     </main>
//   );
// }

// export default async function CenterPage({ params }: CenterPageProps) {
//   const resolvedParams = await params;
//   const slug = resolvedParams.id;

//   return (
//     <Suspense fallback={
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1656A5]"></div>
//       </div>
//     }>
//       <CenterContent slug={slug} />
//     </Suspense>
//   );
// }


