import React from "react";
import './render-html.css'

const RenderBlogContent = ({ data }: any) => {
  return (
    <article dangerouslySetInnerHTML={{ __html: data?.content ?? "" }} className="text-left space-y-2 html-render_class"/>
  );
};

export default RenderBlogContent;
