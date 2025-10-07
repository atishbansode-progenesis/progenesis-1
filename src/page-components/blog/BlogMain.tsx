'use client'
import React, {useState} from "react";
import BlogLanding from './BlogLanding';
import BlogContent from './BlogContent';
import '../about/AboutMain.css';
import BlogCtaBanner from './BlogCtaBanner';
import ResourceGrid from "../resources/ResourceGrid";
import AppointmentForm from "../about/AppointmentForm";

interface BlogMainProps {
  data?: any;
  showGridFirst?: boolean;
}

const BlogMain: React.FC<BlogMainProps> = ({ data, showGridFirst = false }) => {
  const hasBlogData = Boolean(data);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {showGridFirst && (
        <ResourceGrid
          eyebrowLabel="Latest Blog"
          heading="Discover expert-curated stories and insights"
          showHeading={false}
        />
      )}

      {hasBlogData && (
        <>
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
        </>
      )}

      <BlogCtaBanner />
      <AppointmentForm />
    </div>
  );
};

export default BlogMain;