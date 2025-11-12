"use client";
import React, { Suspense, useMemo, useState } from "react";
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
  const [showCopied, setShowCopied] = useState(false);

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

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const blogTitle = encodeURIComponent(data?.post_title || '');
  const blogDescription = encodeURIComponent(data?.seo_description_final || '');

  const handleShare = (platform: string) => {
    let shareUrl = '';
    
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${blogTitle}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${blogTitle}%20${encodeURIComponent(currentUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(currentUrl);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

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

            {/* Share Buttons */}
            <div className="flex items-center gap-3 py-4 border-y border-gray-200">
              <span className="text-[14px] font-medium text-[#606060]">SHARE:</span>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <button
                  onClick={() => handleShare('facebook')}
                  className="cursor-pointer w-9 h-9 rounded-full bg-[#1877F2] hover:bg-[#0d66d9] transition-colors flex items-center justify-center"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                {/* Twitter/X */}
                <button
                  onClick={() => handleShare('twitter')}
                  className="cursor-pointer w-9 h-9 rounded-full bg-[#000000] hover:bg-[#333333] transition-colors flex items-center justify-center"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>

                {/* LinkedIn */}
                <button
                  onClick={() => handleShare('linkedin')}
                  className="cursor-pointer w-9 h-9 rounded-full bg-[#0A66C2] hover:bg-[#004182] transition-colors flex items-center justify-center"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="cursor-pointer w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#1da851] transition-colors flex items-center justify-center"
                  aria-label="Share on WhatsApp"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </button>

                {/* Copy Link */}
                <button
                  onClick={() => handleShare('copy')}
                  className="cursor-pointer w-9 h-9 rounded-full bg-[#606060] hover:bg-[#404040] transition-colors flex items-center justify-center relative"
                  aria-label="Copy link"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {showCopied && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="text-[#606060] lg:space-y-2">
              <article
                className="text-[16px] leading-[24px] font-normal html-render_class"
                dangerouslySetInnerHTML={{ __html: cleanedContent }}
              />
            </div>
          </div>
          <p className="text-[14px] md:text-[22px] leading-[24px] text-[#606060] mb-4">
            ~ Verified by Progenesis Fertility Center's Expert Doctors
          </p>
        </div>
      </div>
      {/* <FaQ /> */}
      <ParenthoodBannerBlog />
      <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
        <AppointmentForm />
      </Suspense>
    </div>
  );
};

export default BlogMain;