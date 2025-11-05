import MainResources from "@/page-components/resources/MainResources";
import React from "react";
import { notFound } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const revalidate = 60 * 60 * 24;

const CURRENT_PAGE = 1;
const PAGE_SIZE = 12;
const fetchBlogs = async () => {
  const res = await fetch(`${apiUrl}/api/post-seo-meta/?page_size=${PAGE_SIZE}&page=${CURRENT_PAGE}`, {
    next: { 
      revalidate: 0
    },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const page = async () => {
  const blogsData = await fetchBlogs();

  if (!blogsData) {
    notFound();
  }

  return <MainResources initialBlogs={blogsData.results} totalCount={blogsData.count} />;
};

export default page;
