"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import blog1 from "@/public/blogs/blog-01.jpg";

import { Calendar, MessageCircle, Bookmark } from "lucide-react";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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

            <div className="flex items-center justify-start gap-8 mt-5">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-(--text-green)" />
                <span className="text-xs font-medium text-(--text-color)">
                  April 8, 2021
                </span>
              </div>

              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4 text-(--text-green)" />
                <span className="text-xs font-medium text-(--text-color)">
                  April 8, 2021
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Bookmark className="w-4 h-4 text-(--text-green)" />
                <span className="text-xs font-medium text-(--text-color)">
                  April 8, 2021
                </span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-(--heading-color) mt-6">
              You Can Buy For Less Than A College Degree
            </h2>

            <p className="text-(--text-color) leading-8 mt-6 text-sm sm:text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              incidunt mollitia iste? Aliquam perspiciatis dignissimos debitis
              vitae sequi veniam quibusdam pariatur sed alias in deleniti illum
              voluptatem ea dolorum nobis corrupti, hic exercitationem, facilis
              similique corporis officia error. Vero qui cum ex sequi, ducimus
              illum mollitia accusantium ullam suscipit beatae maxime sint optio
              esse itaque, similique ipsum voluptatibus distinctio rerum aperiam
              explicabo. Animi quae asperiores voluptatibus a illo deserunt
              itaque distinctio aut facere expedita ipsam porro tempora quaerat
              quo, rem, laudantium voluptatum minus? Culpa quos molestias ab
              voluptatum in autem officiis nobis cumque totam architecto
              voluptate, iure est facilis. Nostrum!
            </p>

            {/* == share links ===  */}
            <div className="flex items-center justify-end gap-4 mt-6">
              <h2 className="text-base font-semibold text-(--heading-color)">
                Share Link:
              </h2>
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-lg text-(--text-color) hover:text-(--text-green) transition-colors duration-100 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-lg text-(--text-color) hover:text-(--text-green) transition-colors duration-100 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-lg text-(--text-color) hover:text-(--text-green) transition-colors duration-100 cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-lg text-(--text-color) hover:text-(--text-green) transition-colors duration-100 cursor-pointer"
                />
              </div>
            </div>

            {/* === leave a comment ===  */}
            <div>
              <div className="space-y-1">
                <h2 className="text-lg sm:text-2xl font-semibold text-(--heading-color)">
                  Leave a Comment
                </h2>
                <p className="text-sm sm:text-base text-(--text-color)">
                  Your email address will not be published.
                </p>
              </div>

              <form className="space-y-5 mt-5">
                <input
                  type="text"
                  className="border border-gray-300 p-4 text-sm w-full outline-none text-(--text-color) focus:border-gray-600 duration-200"
                  placeholder="Name*"
                  required
                />

                <input
                  type="email"
                  className="border border-gray-300 p-4 text-sm w-full outline-none text-(--text-color) focus:border-gray-600 duration-200"
                  placeholder="Email *"
                  required
                />

                <textarea
                  rows={6}
                  className="border border-gray-300 p-4 text-sm w-full outline-none text-(--text-color) focus:border-gray-600 duration-200 resize-none"
                ></textarea>

                <button
                  type="button"
                  className="bg-black text-white text-sm px-10 py-2 rounded cursor-pointer"
                >
                  Post Comment
                </button>
              </form>
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
                          {blog.createdAt}
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
