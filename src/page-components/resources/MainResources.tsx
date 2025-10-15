'use client'
import React from "react";
import "../about/AboutMain.css";
import ResourceLanding from "./ResourceLanding";
import ResourceGrid from "./ResourceGrid";
import ResourceCta from "./ResourceCta";
import ResourceStories from "./ResourceStories";
import FaQ from "../about/FaQ";
import AppointmentForm from "../about/AppointmentForm";

const MainResources = async ({ initialBlogs, totalCount }: any) => {
  return (
    <div>
      <ResourceLanding recentBlog={initialBlogs[0]}/>
      <ResourceGrid initialBlogs={initialBlogs} totalCount={totalCount} />
      <ResourceStories />
      <ResourceCta />
      <FaQ />
      <AppointmentForm />
    </div>
  );
};

export default MainResources;
