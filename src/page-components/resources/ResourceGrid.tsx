"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
  eyebrowLabel = "Insights",
  heading = "Insights & Inspiration for Your Parenthood Journey",
  showEyebrow = true,
  showHeading = true,
}) => {
  const [cards, setCards] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${apiUrl}/api/blogs/?page=${currentPage}&page_size=${PAGE_SIZE}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const results: BlogCard[] = data.results ?? [];
      setCards(results);

      if (typeof data.count === "number") {
        const calculatedPages = Math.max(1, Math.ceil(data.count / PAGE_SIZE));
        setTotalPages(calculatedPages);
      } else {
        const hasMore = results.length === PAGE_SIZE;
        setTotalPages((prev) =>
          hasMore
            ? Math.max(prev, currentPage + 1)
            : Math.max(prev, currentPage)
        );
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  if (loading) return <p className="text-center py-10 min-h-[200px] flex justify-center items-center">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500 min-h-[200px] flex justify-center items-center">{error}</p>;

  return (
    <section className="bg-[#FAFAFA] p-4 lg:p-[120px]">
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
          {cards.map((card) => {
            const formattedDate = card.created
              ? new Intl.DateTimeFormat("en-IN", {
                  month: "long",
                  year: "numeric",
                }).format(new Date(card.created))
              : card.posted || "Recently";
            const previewImage = card.image || "/images/Rstory1.png";
            const previewDescription =
              card.description ||
              card.desc ||
              "Discover more about this story.";
            const views =
              typeof card.views === "number" ? `${card.views}` : card.views;

            return (
              <Link
                key={card.uid || card.slug}
                href={`/resources/${card.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-transparent transition-shadow"
              >
                <article className="flex h-full flex-col gap-2">
                  <p className="text-[12px] leading-[20px] font-normal text-[#606060]/50">
                    {card.author ? `${card.author} • ` : ""}
                    {formattedDate}
                    {views ? ` • ${views} views` : ""}
                  </p>
                  <div className="relative w-full aspect-[16/11] overflow-hidden rounded-xl bg-gray-100 mt-2">
                    <img
                      src={previewImage}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[16px] leading-[22px] font-normal text-[#2C2C2C] line-clamp-1">
                      {card.title}
                    </h4>
                    <p className="text-[13px] text-[#606060]/50 leading-[19.29px] line-clamp-2">
                      {previewDescription}
                    </p>
                  </div>
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
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`min-w-[40px] rounded-full px-4 py-2 text-sm font-semibold ${
                      currentPage === pageNumber
                        ? "bg-[#1656A5] text-white shadow-md"
                        : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition-colors"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
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
