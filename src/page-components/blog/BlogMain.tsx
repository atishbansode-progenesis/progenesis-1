"use client";
import React, { useState } from "react";
import BlogLanding from "./BlogLanding";
import BlogContent from "./BlogContent";
import "../about/AboutMain.css";
import BlogCtaBanner from "./BlogCtaBanner";
import AppointmentForm from "../about/AppointmentForm";

interface BlogMainProps {
  data?: any;
}

const BlogMain: React.FC<BlogMainProps> = ({ data }) => {
  return (
    <div>
      <BlogLanding
        title={data.title}
        author={data.author}
        created={data.created}
        image={data.image}
        metaDescription={data.meta_description}
      />
      <BlogContent
        description={data.description}
        contentHtml={data.content}
        author={data.author}
        created={data.created}
      />

      <BlogCtaBanner />
      <AppointmentForm />
    </div>
  );
};

export default BlogMain;
