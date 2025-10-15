import React from "react";

interface BlogLandingProps {
  title?: string;
  author?: string;
  created?: string;
  image?: string;
  metaDescription?: string;
}

const formatDate = (isoDate?: string) => {
  if (!isoDate) return null;

  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

const BlogLanding: React.FC<BlogLandingProps> = ({
  title,
  metaDescription,
  image,
}) => {
  const displayTitle = title || "Insights for Your Parenthood Journey";
  const description =
    metaDescription ||
    "Explore expert insights to inspire, guide, and support you through every step of your parenthood journey with confidence.";

  return (
    <div>
      <div className="inline-block mb-[20px] bg-[#1656A50D] text-[#1656A5] text-sm font-medium px-4 py-2 rounded-[8px]">
        Latest Blog
      </div>

      <div className="space-y-[20px]">
        <h1 className="max-w-[1200px] mx-auto text-[32px] leading-[40px] lg:text-[48px] lg:leading-[56px] tracking-[-2px]">
          {displayTitle}
        </h1>

        <p className="text-[12.86px] leading-[19.29px] text-center lg:text-[32px] lg:leading-[40px] max-w-[1200px] text-[#606060] mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogLanding;
