import SingleCenter from '@/page-components/centers/SingleCenter';
import { notFound } from "next/navigation";
import { Center, getCenterBySlug } from "@/data/centers";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const center = await getCenterBySlug(slug);

  if (!center) {
    return {
      title: 'Center Not Found | Progenesis IVF',
      description: 'The requested fertility center could not be found.',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://progenesisivf.com';
  const pageUrl = `${baseUrl}/our-center/${slug}`;
  const phoneNumber = center.phone || '+91 94239 71620';

  // Use predefined metadata if available
  if (center.metadata) {
    return {
      title: center.metadata.title,
      description: center.metadata.description,
      keywords: [
        `IVF center ${center.name}`,
        `fertility clinic ${center.name}`,
        `best IVF center ${center.city}`,
        `IVF treatment ${center.name}`,
        `fertility doctor ${center.city}`,
        `${center.name} IVF clinic`,
        `IVF hospital ${center.city}`,
        'reproductive medicine',
        'fertility treatment',
        'infertility specialist',
        'IVF success rates',
        ...center.services?.map(service => `${service} ${center.name}`) || [],
      ],
      authors: [{ name: 'Progenesis IVF' }],
      creator: 'Progenesis IVF',
      publisher: 'Progenesis IVF',
      formatDetection: {
        telephone: true,
        email: true,
        address: true,
      },
      openGraph: {
        type: 'website',
        url: pageUrl,
        siteName: 'Progenesis IVF',
        title: center.metadata.title,
        description: center.metadata.description,
        images: [
          {
            url: center.image,
            width: 1200,
            height: 630,
            alt: `Progenesis IVF Fertility Center ${center.name}`,
            type: 'image/jpeg',
          },
        ],
        locale: 'en_IN',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@ProgenesisIVF',
        creator: '@ProgenesisIVF',
        title: center.metadata.title,
        description: center.metadata.description,
        images: [center.image],
      },
      alternates: {
        canonical: pageUrl,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      },
      category: 'Healthcare',
      classification: 'Medical',
      other: {
        'geo.region': `IN-${center.state === 'MAHARASHTRA' ? 'MH' : center.state.substring(0, 2)}`,
        'geo.placename': center.city,
        ...(center.coordinates ? {
          'geo.position': `${center.coordinates.lat};${center.coordinates.lng}`,
          'ICBM': `${center.coordinates.lat}, ${center.coordinates.lng}`,
        } : {}),
      },
    };
  }

  // Fallback to dynamically generated metadata
  const title = `Best IVF Center in ${center.name}, ${center.city} | Progenesis Fertility Clinic`;
  const description = `Visit Progenesis IVF Fertility Center in ${center.name}, ${center.city}. Expert fertility treatments including ${center.services?.slice(0, 3).join(', ') || ''}. Call ${phoneNumber} to book your consultation.`;

  return {
    title,
    description,
    keywords: [
      `IVF center ${center.name}`,
      `fertility clinic ${center.name}`,
      `best IVF center ${center.city}`,
      `IVF treatment ${center.name}`,
      `fertility doctor ${center.city}`,
      `${center.name} IVF clinic`,
      `IVF hospital ${center.city}`,
      'reproductive medicine',
      'fertility treatment',
      'infertility specialist',
      'IVF success rates',
      ...center.services?.map(service => `${service} ${center.name}`) || [],
    ],
    authors: [{ name: 'Progenesis IVF' }],
    creator: 'Progenesis IVF',
    publisher: 'Progenesis IVF',
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    openGraph: {
      type: 'website',
      url: pageUrl,
      siteName: 'Progenesis IVF',
      title: `Progenesis IVF Fertility Center in ${center.name} | ${center.city}`,
      description: `Leading fertility center in ${center.name} offering advanced IVF treatments. ${center.services?.join(', ') || ''}. Book your appointment today.`,
      images: [
        {
          url: center.image,
          width: 1200,
          height: 630,
          alt: `Progenesis IVF Fertility Center ${center.name}`,
          type: 'image/jpeg',
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ProgenesisIVF',
      creator: '@ProgenesisIVF',
      title: `Progenesis IVF Center ${center.name} | Expert Fertility Care`,
      description: `Top-rated fertility clinic in ${center.name}. ${center.services?.slice(0, 2).join(' & ') || ''} treatments. Call ${phoneNumber}`,
      images: [center.image],
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    category: 'Healthcare',
    classification: 'Medical',
    other: {
      'geo.region': `IN-${center.state === 'MAHARASHTRA' ? 'MH' : center.state.substring(0, 2)}`,
      'geo.placename': center.city,
      ...(center.coordinates ? {
        'geo.position': `${center.coordinates.lat};${center.coordinates.lng}`,
        'ICBM': `${center.coordinates.lat}, ${center.coordinates.lng}`,
      } : {}),
    },
  };
}

type DynamicPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;

  const center = await getCenterBySlug(slug);

  if (!center) {
    notFound();
  }

  return <SingleCenter selectedSlug={slug} center={center} />;
}
