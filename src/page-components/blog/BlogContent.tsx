import React from "react";

interface BlogContentProps {
  description?: string;
  contentHtml?: string;
  author?: string;
  created?: string;
}

const BlogContent: React.FC<BlogContentProps> = ({
  description,
  contentHtml,
  author,
  created,
}) => {
  const hasHtml = Boolean(contentHtml);

  return (
    <div className="section-spacing w-full px-6 md:px-8 lg:px-16 py-12 bg-white">
      <div className="relative w-full md:flex md:items-start">
        <div className="hidden md:flex flex-col gap-4 md:mr-6 pr-4">
          <a aria-label="Share on Facebook" href="#" className="w-10 h-10 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12.06C22 6.503 17.523 2 12 2S2 6.503 2 12.06C2 17.08 5.656 21.246 10.438 22v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.242 0-1.63.776-1.63 1.572v1.888h2.773l-.443 2.91h-2.33V22C18.344 21.246 22 17.08 22 12.06z"/></svg>
          </a>
          <a aria-label="Share on Instagram" href="#" className="w-10 h-10 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.8 6.2a1 1 0 100 2 1 1 0 000-2z"/></svg>
          </a>
          <a aria-label="Share on X" href="#" className="w-10 h-10 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.525 3H20l-6.54 7.47L21.5 21h-5.5l-4.3-5.2L6.7 21H4l7.01-8.01L3 3h5.5l3.9 4.7L17.525 3zm-1.93 16h1.53L8.49 5H6.96l8.635 14z"/></svg>
          </a>
        </div>
        <div className="flex-1">
          {!hasHtml && (
            <div className="prose prose-lg max-w-none text-justify pb-5">
              <p className="text-[#606060] leading-relaxed mb-6 text-lg">
                {description || 'Stay tuned for more insights on this topic.'}
              </p>
            </div>
          )}

          {hasHtml && (
            <article
              className="prose prose-lg max-w-none text-justify blog-content"
              dangerouslySetInnerHTML={{ __html: contentHtml ?? '' }}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default BlogContent;
