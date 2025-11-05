"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const PAGE_SIZE = 12;

interface ResourceGridProps {
  eyebrowLabel?: string;
  heading?: string;
  showEyebrow?: boolean;
  showHeading?: boolean;
  initialBlogs: any[];
  totalCount: number;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({
  eyebrowLabel = "Insights",
  heading = "Insights & Inspiration for Your Parenthood Journey",
  showEyebrow = true,
  showHeading = true,
  initialBlogs,
  totalCount,
}) => {
  const [cards, setCards] = useState(initialBlogs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${apiUrl}/api/post-seo-meta/?page=${currentPage}&page_size=${PAGE_SIZE}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setCards(data.results ?? []);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentPage === 1) {
      setCards(initialBlogs);
    } else {
      fetchBlogs();
    }
  }, [currentPage]);

  if (loading)
    return (
      <p className="text-center py-10 min-h-[200px] flex justify-center items-center">
        Loading...
      </p>
    );

  if (error)
    return (
      <p className="text-center py-10 text-red-500 min-h-[200px] flex justify-center items-center">
        {error}
      </p>
    );

  return (
    <section className="bg-[#FAFAFA] p-4 lg:px-[120px] lg:py-[80px]">
      <div className="space-y-4 lg:space-y-[80px]">
        {(showEyebrow || (showHeading && heading)) && (
          <div className="space-y-2">
            {showEyebrow && (
              <span className="w-fit rounded-[8px] bg-[#1656A50D] py-1 px-2 font-medium text-[12px] leading-[20px] text-[#1656A5]">
                {eyebrowLabel}
              </span>
            )}
            {showHeading && heading && (
              <h3 className="text-[32px] lg:text-[48px] leading-[40px] lg:leading-[56px] max-w-[691px] font-normal">
                {heading}
              </h3>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards?.map((card: any) => {
            const formattedDate = card.created
              ? new Intl.DateTimeFormat("en-IN", {
                  month: "long",
                  year: "numeric",
                }).format(new Date(card.created))
              : card.posted || "Recently";

            const previewImage =
              card.image || card.img || "/images/Rstory1.png";
            const previewDescription =
              card.description ||
              card.desc ||
              "Discover more about this story.";
            const views =
              typeof card.views === "number" ? `${card.views}` : card.views;

            return (
              <Link
                key={card.post_url || card.slug}
                href={`/${card.post_url}`}
                className="group flex h-full flex-col rounded-2xl border border-transparent transition-shadow"
              >
                <article className="flex h-full flex-col gap-2">
                  <p className="text-[12px] leading-[20px] font-normal text-[#606060]/50">
                    
                    {formattedDate}
                    {views ? ` • ${views} views` : ""}
                  </p>

                  <div className="relative w-full aspect-[16/11] overflow-hidden rounded-xl bg-gray-100 mt-2">
                    <img
                      src={card.image_url}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-[16px] leading-[22px] font-normal text-[#2C2C2C] line-clamp-1">
                      {card.post_title}
                    </h4>
                    <p className="text-[13px] text-[#606060]/50 leading-[19.29px] line-clamp-2">
                      {card.seo_description_final}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2">
          {(() => {
            const buttons = [];
            const showEllipsisStart = currentPage > 3;
            const showEllipsisEnd = currentPage < totalPages - 2;

            // Always show first page
            buttons.push(
              <button
                key={1}
                type="button"
                onClick={() => setCurrentPage(1)}
                className={`min-w-[40px] rounded-[8px] px-4 py-2 text-sm font-semibold ${
                  currentPage === 1
                    ? "bg-[#1656A5] text-white shadow-md"
                    : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition-colors"
                }`}
              >
                1
              </button>
            );

            // Show ellipsis after first page if needed
            if (showEllipsisStart) {
              buttons.push(
                <span key="ellipsis-start" className="px-2 text-[#606060]">
                  ...
                </span>
              );
            }

            // Show pages around current page
            const startPage = showEllipsisStart ? currentPage - 1 : 2;
            const endPage = showEllipsisEnd ? currentPage + 1 : totalPages - 1;

            for (let i = startPage; i <= endPage; i++) {
              if (i > 1 && i < totalPages) {
                buttons.push(
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentPage(i)}
                    className={`min-w-[40px] rounded-[8px] px-4 py-2 text-sm font-semibold ${
                      currentPage === i
                        ? "bg-[#1656A5] text-white shadow-md"
                        : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition-colors"
                    }`}
                  >
                    {i}
                  </button>
                );
              }
            }

            // Show ellipsis before last page if needed
            if (showEllipsisEnd) {
              buttons.push(
                <span key="ellipsis-end" className="px-2 text-[#606060]">
                  ...
                </span>
              );
            }

            // Always show last page if there's more than 1 page
            if (totalPages > 1) {
              buttons.push(
                <button
                  key={totalPages}
                  type="button"
                  onClick={() => setCurrentPage(totalPages)}
                  className={`min-w-[40px] rounded-[8px] px-4 py-2 text-sm font-semibold ${
                    currentPage === totalPages
                      ? "bg-[#1656A5] text-white shadow-md"
                      : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition-colors"
                  }`}
                >
                  {totalPages}
                </button>
              );
            }

            return buttons;
          })()}
        </div>
        )}
      </div>
    </section>
  );
};

export default ResourceGrid;
