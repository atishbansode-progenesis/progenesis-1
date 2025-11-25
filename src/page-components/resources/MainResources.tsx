'use client'
import React, { Suspense } from "react";
import "../about/AboutMain.css";
import ResourceLanding from "./ResourceLanding";
import ResourceGrid from "./ResourceGrid";
import ResourceCta from "./ResourceCta";
import ResourceStories from "./ResourceStories";
import FaQ from "../about/FaQ";
import AppointmentForm from "../about/AppointmentForm";
import YouTubePlaylist from "./YouTubePlaylist";
import StoriesSection from "@/components/Home/StoriesSection";

const MainResources = ({ initialBlogs, totalCount }: any) => {
  return (
    <div>
      <ResourceLanding recentBlog={initialBlogs[0]}/>
      <ResourceGrid initialBlogs={initialBlogs} totalCount={totalCount} />
      {/* <ResourceStories /> */}
      <StoriesSection />
      <ResourceCta />
      {/* <FaQ /> */}
      <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
      <AppointmentForm />
      </Suspense>
    </div>
  );
};

export default MainResources;
