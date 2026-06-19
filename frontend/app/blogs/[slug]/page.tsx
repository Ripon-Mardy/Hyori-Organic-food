"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import blog1 from "@/public/blogs/blog-01.jpg";

import { blogsData } from "@/src/data/Blogs";

const page = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  return (
    <section>
      {/* ------- breadcrum ----------  */}
      <div className=" shop-breadcrum-banner py-8 sm:py-16 px-2">
        <div className="max-w-(--container-width) mx-auto">
          <h2 className="text-xl sm:text-4xl text-(--text-green) font-bold flex items-center justify-center">
            Blogs
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/"
              className="hover:text-(--text-green) text-sm font-medium"
            >
              Home
            </Link>

            {paths.map((path, index) => {
              const href = "/" + paths.slice(0, index + 1).join("/");

              return (
                <div key={path} className="flex items-center gap-2">
                  <span>{">"}</span>
                  <Link
                    href={href}
                    className="capitalize hover:text-(--text-green) text-sm font-medium"
                  >
                    {path.replaceAll("-", " ")}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==== single post ========  */}
      <div className="max-w-(--container-width) mx-auto px-2 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
          {/* === left side ==  */}
          <div className="col-span-2">
            <div className="w-full rounded overflow-hidden">
              <Image
                src={blog1}
                alt="blog"
                width={100}
                height={100}
                className="w-full object-cover"
                layout="responsive"
              />
            </div>
          </div>

          {/* === right side ===  */}
          <div className="col-span-1">
            {/* -- latest post --  */}
            <div className="border border-gray-300 rounded-xl p-5">
              <div>
                <h2 className="text-base sm:text-lg text-(--heading-color) font-semibold relative pb-3">
                  Latest Post
                  {/* Green Line */}
                  <span className="absolute left-0 bottom-0 w-24 h-0.5 bg-green-600"></span>
                  {/* Gray Line */}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-200 -z-10"></span>
                </h2>
              </div>

              {/* latest blogs data  */}
              <div className="mt-4 space-y-4">
                {blogsData.length > 0 ? (
                  blogsData.map((blog, index) => (
                    <Link
                      href={"#"}
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <div className="rounded overflow-hidden">
                        <Image
                          src={blog?.image}
                          width={0}
                          height={40}
                          alt={blog?.title}
                        />
                      </div>
                      <div>
                        <h2 className="text-base text-(--heading-color) font-semibold">
                          {blog.title}
                        </h2>
                        <span className="text-xs font-medium">
                          {" "}
                          {blog.createdAt}{" "}
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div>No Blogs Availabe</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
