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
  console.log(data);
  const cleanedContent = useMemo(() => {
    if (!data?.post_content) return "";

    return data.post_content
      .replace(/nnnn/g, "") // Remove all "nnnn" occurrences
      .replace(/\bnnn\b/g, "") // Remove standalone "nnn"
      .replace(/\bnn\b/g, "") // Remove standalone "nn"
      .replace(/\bn\b(?=\s*<)/g, "") // Remove standalone "n" before tags
      .trim();
  }, [data?.post_content]);

  return (
    <div>
      <div className="p-4 bg-white lg:px-[120px] lg:py-[80px] text-center space-y-2 font-manrope font-normal">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[32px] lg:gap-[80px]">
          <BlogLanding
            title={data.post_title}
            author={data.author}
            created={data.post_date}
            image={data.image_url}
            metaDescription={data.meta_description}
          />
          <img src={data.image_url} className="rounded-[16px] w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="text-[#606060] lg:space-y-2 max-w-[248px] mx-auto">
              <p className="text-[14px] leading-[24px] font-semibold uppercase">
                DATE
              </p>
              <p className="text-[16px] leading-[24px] font-normal text-center">
                Updated on <br />
                {formatDate(data.post_date)}
              </p>
            </div>

            <div className="text-[#606060] lg:space-y-2 max-w-[248px] mx-auto">
              <p className="text-[14px] leading-[24px] font-semibold uppercase">
                AUTHOR
              </p>
              <p className="text-[16px] leading-[24px] font-normal">Dr. Priya Deshmukh, Senior Fertility Specialist at Progenesis IVF</p>
            </div>


            <div className="text-[#606060] lg:space-y-2 max-w-[248px] mx-auto">
              <p className="text-[14px] leading-[24px] font-semibold uppercase">
                READ
              </p>
              <p className="text-[16px] leading-[24px] font-normal">10 mins</p>
            </div>
          </div>

          <div className="text-[#606060] lg:space-y-2  grid-cols-1  flex md:grid-col-2">
            <div className=" md:flex flex-col gap-4 space-y-1 md:mr-6 pr-4">
              <a
                aria-label="Share on Facebook"
                href="https://www.facebook.com/progenesisivf"
                className="opacity-80 w-10 h-10 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M22 12.06C22 6.503 17.523 2 12 2S2 6.503 2 12.06C2 17.08 5.656 21.246 10.438 22v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.242 0-1.63.776-1.63 1.572v1.888h2.773l-.443 2.91h-2.33V22C18.344 21.246 22 17.08 22 12.06z" />
                </svg>
              </a>
              <a
                aria-label="Share on Instagram"
                href="https://www.instagram.com/progenesis_ivf_center"
                className="opacity-80 w-10 h-10 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.8 6.2a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
              <a
                aria-label="Share on YouTube"
                href="https://www.youtube.com/@ProgenesisFertilityCenter"
                className="opacity-80 w-10 h-10 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M21.8 8s-.2-1.5-.8-2.2c-.8-.9-1.7-.9-2.1-1C16.4 4.5 12 4.5 12 4.5h0s-4.4 0-6.9.3c-.4.1-1.3.1-2.1 1C2.2 6.5 2 8 2 8S1.8 9.6 1.8 11.1v1.8c0 1.5.2 3.1.2 3.1s.2 1.5.8 2.2c.8.9 1.8.9 2.3 1 1.7.2 7 .3 7 .3s4.4 0 6.9-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.2.8-2.2s.2-1.5.2-3.1v-1.8c0-1.5-.2-3.1-.2-3.1zM9.75 14.8V8.7l5.5 3.05-5.5 3.05z" />
                </svg>
              </a>

            </div>

            <p
              className="flex-1 text-[16px] text-left leading-[24px] font-normal"
              dangerouslySetInnerHTML={{ __html: cleanedContent }}
            />
          </div>

          <BlogContent data={data} />

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
