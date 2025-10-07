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