import Image from "next/image";

import NotFound from "@/components/shared/NotFound";
import { blogsData } from "@/src/data/Blogs";

// icons
import { CalendarDays, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const Blogs = () => {
  return (
    <section className="max-w-(--container-width) mx-auto py-16 px-2">
      {/* title  */}
      <div className="flex items-center justify-center flex-col mb-8">
        <h4 className="text-sm text-(--text-green) font-semibold">Our Blogs</h4>
        <h2 className="text-2xl sm:text-4xl font-semibold text-(--heading-color)">
          Latest Blogs
        </h2>
      </div>

      {/* ------- blogs card -----------  */}
      <div>
        {blogsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-10">
            {blogsData.map((blog) => (
              <div
                key={blog.id}
                className=" border border-gray-300 rounded-md overflow-hidden"
              >
                {/* ---- image ----------  */}
                <div className="w-full ">
                  <Image
                    src={blog?.image}
                    width={10}
                    height={10}
                    className="w-full object-cover"
                    layout="responsive"
                    alt={blog?.title}
                  />
                </div>

                <div className="px-4 py-4 space-y-2 sm:space-y-3">
                  {/* == date and comments ===  */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <CalendarDays className="w-4 h-4 text-(--text-green)" />
                      <span className="text-xs sm:text-sm text-(--text-color)">
                        {blog?.createdAt}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4 text-(--text-green)" />
                      <span className="text-xs sm:text-sm text-(--text-color)">
                        {blog?.comments} comments
                      </span>
                    </div>
                  </div>

                  {/* ---- title ------  */}
                  <h2 className="text-(--heading-color) text-base sm:text-lg font-semibold">
                    {blog?.title}
                  </h2>
                  <p className="line-clamp-3 text-(--text-color) text-sm sm:text-base leading-6 sm:leading-7">
                    {blog?.description}
                  </p>

                  {/* --- button ------  */}
                  <div className="flex items-center justify-center">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="group flex items-center justify-center gap-1 bg-(--bg-color) px-6 py-2 text-xs sm:text-sm rounded cursor-pointer text-white font-semibold hover:bg-(--bg-hover-color) transition-all duration-100 ease-in-out"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-all duration-200 ease-in-out" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <NotFound
            title="Blogs Not found"
            message="Sorry, we could not find anything."
            buttonLink="/"
            buttonText="Home"
          />
        )}
      </div>
    </section>
  );
};

export default Blogs;
