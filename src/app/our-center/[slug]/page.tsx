import React from "react";
import SingleCenter from '@/page-components/centers/SingleCenter';

type DynamicPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = React.use(params);
  return <SingleCenter selectedSlug={slug} />;
}
