// import BlogMain from '@/page-components/blog/BlogMain';
// import { notFound } from 'next/navigation';

// const revalidate = 60 * 60 * 24; 

// const fetchBlogBySlug = async (slug: string) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post-seo-meta/?post_name=${slug}`, {
//     next: { revalidate:0},
//   });

//   if (!res.ok) {
//     return null;
//   }

//   return res.json();
// };

// export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
//   const { slug } = await params;
//   const blog = await fetchBlogBySlug(slug);
//   console.log(blog);

//   if (!blog) {
//     return {};
//   }

//   return {
//     title: blog.meta_title || blog.title,
//     description: blog.meta_description || blog.description,
//     openGraph: {
//       title: blog.meta_title || blog.title,
//       description: blog.meta_description || blog.description,
//       images: blog.image ? [blog.image] : undefined,
//       url: blog.absolute_url,
//       type: 'article',
//     },
//   };
// };

// const Page = async ({ params }: { params: { slug: string } }) => {
//   const { slug } = await params;
//   const blogData = await fetchBlogBySlug(slug);

//   if (!blogData) {
//     notFound();
//   }

//   return <BlogMain data={blogData.results[0]} />;
// };

// export default Page;





import BlogMain from '@/page-components/blog/BlogMain';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import '../../../page-components/blog/render-html.css'


const revalidate = 60 * 60 * 24;

const fetchBlogBySlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/post-seo-meta/?post_name=${slug}`,
    {
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const { slug } = await params;
  const response = await fetchBlogBySlug(slug);

  if (!response || !response.results?.[0]) {
    return {};
  }

  const blog = response.results[0];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://progenesisivf.com';
  const fullUrl = `${siteUrl}/${blog.post_url}`;

  return {
    title: blog.seo_title_final || blog.post_title,
    description: blog.seo_description_final,
    keywords: blog.focus_keyword,
    authors: [{ name: blog.site_name }],
    creator: blog.site_name,
    publisher: blog.site_name,
    
    // Open Graph metadata
    openGraph: {
      title: blog.seo_title_final || blog.post_title,
      description: blog.seo_description_final,
      url: fullUrl,
      siteName: blog.og_site_name || blog.site_name,
      images: blog.image_url
        ? [
            {
              url: blog.image_url,
              width: 1200,
              height: 630,
              alt: blog.post_title,
            },
          ]
        : [],
      locale: blog.og_locale || 'en_US',
      type: 'article',
      publishedTime: blog.post_date,
      modifiedTime: blog.post_modified,
      authors: [blog.site_name],
    },

    // Twitter Card metadata
    twitter: {
      card: blog.twitter_card || 'summary_large_image',
      title: blog.twitter_title || blog.seo_title_final || blog.post_title,
      description: blog.twitter_description || blog.seo_description_final,
      images: blog.image_url ? [blog.image_url] : [],
      creator: `@${blog.site_name}`,
    },

    // Additional metadata
    robots: {
      index: blog.post_status === 'publish',
      follow: blog.post_status === 'publish',
      googleBot: {
        index: blog.post_status === 'publish',
        follow: blog.post_status === 'publish',
      },
    },

    alternates: {
      canonical: fullUrl,
    },

    category: blog.primary_category,
  };
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const response = await fetchBlogBySlug(slug);

  if (!response || !response.results?.[0]) {
    notFound();
  }

  const blogData = response.results[0];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://progenesisivf.com';
  const fullUrl = `${siteUrl}/${blogData.post_url}`;

  // Extract FAQ data from post_content
  const faqMatches = blogData.post_content.match(
    /"title":"([^"]+)","content":"([^"]+)"/g
  );
  const faqs = faqMatches
    ? faqMatches.map((match: string) => {
        const titleMatch = match.match(/"title":"([^"]+)"/);
        const contentMatch = match.match(/"content":"([^"]+)"/);
        return {
          question: titleMatch?.[1]?.replace(/\\"/g, '"') || '',
          answer: contentMatch?.[1]?.replace(/\\"/g, '"') || '',
        };
      })
    : [];

  // Generate JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Article Schema
      {
        '@type': 'Article',
        '@id': `${fullUrl}#article`,
        headline: blogData.post_title,
        description: blogData.seo_description_final,
        image: blogData.image_url
          ? {
              '@type': 'ImageObject',
              url: blogData.image_url,
              width: 1200,
              height: 630,
            }
          : undefined,
        datePublished: blogData.post_date,
        dateModified: blogData.post_modified,
        author: {
          '@type': 'Organization',
          name: blogData.site_name,
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: blogData.site_name,
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullUrl,
        },
        keywords: blogData.focus_keyword,
        articleSection: blogData.primary_category,
      },

      {
        '@type': 'WebPage',
        '@id': fullUrl,
        url: fullUrl,
        name: blogData.seo_title_final,
        description: blogData.seo_description_final,
        inLanguage: 'mr-IN',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${siteUrl}#website`,
          url: siteUrl,
          name: blogData.site_name,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          '@id': `${fullUrl}#primaryimage`,
          url: blogData.image_url,
        },
        datePublished: blogData.post_date,
        dateModified: blogData.post_modified,
      },

      // Medical Organization Schema (for IVF clinic)
      {
        '@type': 'MedicalOrganization',
        '@id': `${siteUrl}#organization`,
        name: blogData.site_name,
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`,
        },
        medicalSpecialty: ['Fertility', 'IVF', 'Reproductive Medicine'],
      },
    ],
  };

  return (
    <>
      {/* Inject JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogMain data={blogData} />
    </>
  );
};

export default Page;