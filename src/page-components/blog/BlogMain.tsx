"use client";
import React from "react";
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
  return (
    <div>
      <div className="p-4 bg-white lg:px-[120px] lg:py-[80px] text-center space-y-2 font-manrope font-normal">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[32px] lg:gap-[80px]">
          <BlogLanding
            title={data.title}
            author={data.author}
            created={data.created}
            image={data.image}
            metaDescription={data.meta_description}
          />
          <img src={data.image} className="rounded-[16px] w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="text-[#606060] lg:space-y-2 max-w-[248px] mx-auto">
              <p className="text-[14px] leading-[24px] font-semibold uppercase">
                DATE
              </p>
              <p className="text-[16px] leading-[24px] font-normal text-center">
                Updated on <br />
                {formatDate(data.updated)}
              </p>
            </div>

            <div className="text-[#606060] lg:space-y-2 max-w-[248px] mx-auto">
              <p className="text-[14px] leading-[24px] font-semibold uppercase">
                AUTHOR
              </p>
              <p
                className="text-[16px] leading-[24px] font-normal"
                dangerouslySetInnerHTML={{ __html: data.author }}
              />
            </div>

            <div className="text-[#606060] lg:space-y-2 max-w-[248px] mx-auto">
              <p className="text-[14px] leading-[24px] font-semibold uppercase">
                READ
              </p>
              <p className="text-[16px] leading-[24px] font-normal">10 mins</p>
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
      <AppointmentForm />
    </div>
  );
};

export default BlogMain;
