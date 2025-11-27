'use client'
import React, { Suspense } from "react";
import "../about/AboutMain.css";
import ResourceLanding from "./ResourceLanding";
import ResourceGrid from "./ResourceGrid";
import ResourceCta from "./ResourceCta";
import AppointmentForm from "../about/AppointmentForm";
import StoriesSection from "@/components/Home/StoriesSection";

const MainResources = ({ initialBlogs, totalCount }: any) => {
  return (
    <div>
      <ResourceLanding recentBlog={initialBlogs[0]}/>
      <ResourceGrid initialBlogs={initialBlogs} totalCount={totalCount} />
      <StoriesSection />
      <ResourceCta />
      <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
      <AppointmentForm />
      </Suspense>
    </div>
  );
};

export default MainResources;
