"use client";
import React, { Suspense, useMemo } from "react";
import BlogLanding from "./BlogLanding";
import BlogContent from "./BlogContent";
import "../about/AboutMain.css";
import ParenthoodBannerBlog from "./ParenthoodBannerBlog";
import { formatDate } from "@/utils/format-date";
import AppointmentForm from "../about/AppointmentForm";
import FaQ from "../about/FaQ";

interface BlogMainProps {
  data?: any;
}

const BlogMain: React.FC<BlogMainProps> = ({ data }) => {
  // Clean the HTML content to remove "nnnn" and similar patterns
const cleanedContent = useMemo(() => {
  if (!data?.post_content) return "";

  return data.post_content
    // Remove repeated n patterns
    .replace(/nnnn/g, "")              // Remove "nnnn"
    .replace(/\bnnn\b/g, "")           // Remove standalone "nnn"
    .replace(/\bnn\b/g, "")            // Remove standalone "nn"
    .replace(/\bn\b(?=\s*<)/g, "")     // Remove "n" before tags

    // CRITICAL: Remove "rn" even when attached to the next word
    .replace(/rn(?=[A-Za-z])/g, "")    // Remove "rn" if followed by a letter

    // Optional: Also clean up any leftover "rn" in other contexts
    .replace(/\brn\b/g, "")

    // Remove actual line breaks
    .replace(/\r?\n/g, " ")            // Replace with space to avoid gluing words

    .trim();
}, [data?.post_content]);


  return (
    <div>
      <div className="p-4 bg-white lg:px-[120px] lg:py-[80px] space-y-2 font-manrope font-normal">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[32px] lg:gap-[80px]">
          <BlogLanding
            title={data.post_title}
            author={data.author}
            created={data.post_date}
            image={data.image_url}
            metaDescription={data.seo_description_final}
          />
          <img src={data.image_url} className="rounded-[16px] w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
            <div className="blog-metadata-header">
              <div className="blog-metadata-grid">
                {/* Updated Date */}
                <div className="metadata-item">
                  <span className="metadata-label">UPDATED ON</span>
                  <span className="metadata-value">
                    {formatDate(data.post_modified)}
                  </span>
                </div>

                {/* Author */}
                <div className="metadata-item">
                  <span className="metadata-label">WRITTEN BY</span>
                  <div className="author-badge">
                   <svg
                      className="verified-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    Team Progenesis
                  </div>
                </div>

                {/* Reading Time */}
                <div className="metadata-item">
                  <span className="metadata-label">READING TIME</span>
                  <span className="metadata-value">10 mins</span>
                </div>
              </div>
            </div>



            <div className="text-[#606060] lg:space-y-2">
              <p
                className="text-[16px] leading-[24px] font-normal html-render_class"
                dangerouslySetInnerHTML={{ __html: cleanedContent }}
              />
            </div>


          </div>

          <BlogContent data={data} />

          <p className="text-[14px] md:text-[22px] leading-[24px] text-[#606060] mb-4">
            ~ Verified by Progenesis Fertility Center's Expert Doctors
          </p>
        </div>
      </div>
      <FaQ />
      <ParenthoodBannerBlog />
      <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
        <AppointmentForm />
      </Suspense>
    </div>
  );
};

export default BlogMain;