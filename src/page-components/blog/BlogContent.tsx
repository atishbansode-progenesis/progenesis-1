import React from "react";
import RenderBlogContent from "./RenderBlogContent";

interface BlogContentProps {
  data: any;
}

const BlogContent: React.FC<BlogContentProps> = ({ data }) => {
  const hasHtml = Boolean(data?.content);

  return (
    <div>
      <div className="relative w-full md:flex md:items-start">
        <div className="flex-1">         
          {hasHtml && <RenderBlogContent data={data} />}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
