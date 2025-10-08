'use client'
import { API_DOMAIN } from '@/utils/constent/constent';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface BlogCard {
  uid?: string;
  title: string;
  slug: string;
  description?: string;
  desc?: string;
  image?: string;
  img?: string;
  author?: string;
  created?: string;
  posted?: string;
  views?: number | string;
}

const PAGE_SIZE = 6;

interface ResourceGridProps {
  eyebrowLabel?: string;
  heading?: string;
  showEyebrow?: boolean;
  showHeading?: boolean;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({
  eyebrowLabel = 'Insights',
  heading = 'Insights & Inspiration for Your Parenthood Journey',
  showEyebrow = true,
  showHeading = true,
}) => {
  const [cards, setCards] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${API_DOMAIN}/api/blogs/?page=${currentPage}&page_size=${PAGE_SIZE}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const results: BlogCard[] = data.results ?? [];
        setCards(results);

        if (typeof data.count === 'number') {
          const calculatedPages = Math.max(1, Math.ceil(data.count / PAGE_SIZE));
          setTotalPages(calculatedPages);
        } else {
          const hasMore = results.length === PAGE_SIZE;
          setTotalPages((prev) => (hasMore ? Math.max(prev, currentPage + 1) : Math.max(prev, currentPage)));
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
    return () => controller.abort();
  }, [currentPage]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <section className="section-spacing bg-white px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">
        {(showEyebrow || (showHeading && heading)) && (
          <div className="space-y-3">
            {showEyebrow && (
              <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">
                {eyebrowLabel}
              </span>
            )}
            {showHeading && heading && (
              <h3 className="text-[22px] sm:text-[26px] md:text-[34px] lg:text-[38px] font-semibold text-gray-900 leading-snug max-w-3xl">
                {heading}
              </h3>
            )}
          </div>
        )}

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {cards.map((card) => {
            const formattedDate = card.created
              ? new Intl.DateTimeFormat('en-IN', {
                  month: 'long',
                  year: 'numeric',
                }).format(new Date(card.created))
              : card.posted || 'Recently';
            const previewImage = card.image || card.img || '/images/Rstory1.png';
            const previewDescription = card.description || card.desc || 'Discover more about this story.';
            const views = typeof card.views === 'number' ? `${card.views}` : card.views;

            return (
              <Link
                key={card.uid || card.slug}
                href={`/blog/${card.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-transparent bg-white p-2 transition-shadow hover:border-[#1656A5]/20 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1656A5]"
              >
                <article className="flex h-full flex-col">
                  <p className="text-gray-400 text-[12px] md:text-[13px] mb-2">
                    {card.author ? `${card.author} • ` : ''}{formattedDate}
                    {views ? ` • ${views} views` : ''}
                  </p>
                  <div className="relative w-full aspect-[16/11] overflow-hidden rounded-xl bg-gray-100 mt-2">
                    <img
                      src={previewImage}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="mt-3 md:mt-4 text-[16px] md:text-[18px] font-semibold text-gray-900">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-[12px] md:text-[13px] text-gray-600 leading-relaxed line-clamp-2">
                    {previewDescription}
                  </p>
                </article>
              </Link>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className="rounded-full border border-[#1656A5] px-4 py-2 text-sm font-medium text-[#1656A5] transition-colors hover:bg-[#1656A5] hover:text-white disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400"
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`min-w-[40px] rounded-full px-4 py-2 text-sm font-semibold ${
                    currentPage === pageNumber
                      ? 'bg-[#1656A5] text-white shadow-md'
                      : 'border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition-colors'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              className="rounded-full border border-[#1656A5] px-4 py-2 text-sm font-medium text-[#1656A5] transition-colors hover:bg-[#1656A5] hover:text-white disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceGrid;
