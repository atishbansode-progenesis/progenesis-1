import React from "react";
import "../about/AboutMain.css";

const ResourceLanding = ({ recentBlog }: any) => {
  console.log(recentBlog);
  return (
    <div>
      <section>
        <div
          className="relative  w-full h-[728px] md:h-[560px] lg:h-[620px] xl:h-[680px] bg-center bg-cover"
          style={{ backgroundImage: `url(${recentBlog?.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70" />

          <div className="section-spacing absolute inset-x-0 bottom-3 sm:bottom-0 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 pb-10 md:pb-14 lg:pb-16">
            <div className="max-w-6xl">
              <span className="inline-block text-[#F9F9F9] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px] p-2">
                Featured
              </span>

              <a href={`/resources/${recentBlog?.slug}`} className="flex justify-center items-center w-full relative cursor-pointer group">
                <h1 className="text-[#F9F9F9] font-semibold leading-tight md:leading-tight lg:leading-tight text-[28px] sm:text-[34px] md:text-[40px] lg:text-[52px] xl:text-[56px] line-clamp-2 group-hover:text-[#f1e8e8]">
                  <span>{recentBlog?.title}</span>
                  <img
                    src="\icons\resorcesrighter.svg"
                    alt="right"
                    className=" ml-4 h-10 inline-flex"
                  />
                </h1>
              </a>
              <p className="text-[#F9F9F9]/80 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] mt-4 max-w-3xl line-clamp-2">
                {recentBlog?.description}
              </p>
              {/* Mobile-only action button below description */}
              <div className="mt-4 md:hidden">
                <button
                  aria-label="Read more"
                  className="group inline-flex items-center justify-center "
                >
                  <img
                    src="\icons\resorcesrighter.svg"
                    alt="right"
                    className="w-8 h-8"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceLanding;
