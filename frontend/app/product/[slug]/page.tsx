"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import productImage1 from "@/public/products/product1.webp";

import { Heart } from "lucide-react";

import RelatedProducts from "@/components/RelatedProducts";
import { reviews } from "@/src/data/Reviews";

const tabs = [
  {
    id: "description",
    label: "Description",
  },
  {
    id: "reviews",
    label: "Reviews",
  },
];

const page = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      {/* ------- breadcrum ----------  */}
      <div className=" shop-breadcrum-banner py-8 sm:py-16 px-2">
        <div className="max-w-(--container-width) mx-auto">
          <h2 className="text-xl sm:text-2xl text-(--text-green) font-bold flex items-center justify-center">
            Shop
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

      {/* ========= product details ============  */}
      <div className="max-w-(--container-width) mx-auto px-2 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* ==== image ===  */}
          <div className="w-100 mx-auto rounded-2xl overflow-hidden">
            <Image
              src={productImage1}
              width={100}
              height={100}
              className="w-full object-cover"
              layout="responsive"
              alt="product imge"
            />
          </div>
          {/* === product right side ===  */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-base tracking-widest text-(--text-green) font-semibold">
                Butter & Eggs
              </span>
              <Heart className="w-5 h-5 cursor-pointer" />
            </div>

            <h2 className="text-xl sm:text-3xl font-semibold text-(--heading-color)">
              Grouped Product
            </h2>

            <p className="text-(--text-color) text-sm sm:text-base leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia mollit anim id
              est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventor. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem
            </p>

            <span className="text-xl font-bold text-(--text-green)">
              $ 150.00
            </span>
            <div className="flex flex-col items-start gap-2 mt-2">
              <button className="bg-(--bg-color) px-8 py-3 rounded hover:bg-(--bg-hover-color) transition-colors duration-100 cursor-pointer min-w-56 text-white font-semibold text-sm">
                Add To Cart
              </button>
              <button className="bg-(--bg-color) px-8 py-3 rounded hover:bg-(--bg-hover-color) transition-colors duration-100 cursor-pointer min-w-56 text-white font-semibold text-sm">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* ===== Description and Reviews =====  */}
        <div className="py-15">
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-(--bg-color) text-white"
                    : "bg-white text-(--text-color) hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Product Description
                </h3>

                <div className="flex flex-col sm:flex-row items-start justify-center gap-4">
                  <div className="w-40 mx-auto sm:w-full">
                    <Image
                      src={productImage1}
                      alt="product image"
                      width={100}
                      height={100}
                      className="w-full object-cover"
                      layout="responsive"
                    />
                  </div>
                  <p className="text-(--text-color) leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae nulla cum debitis eaque tenetur, adipisci cupiditate
                    error expedita iste nam nisi dolorum? Ab minus voluptate
                    quos animi aliquam voluptates eaque corporis dignissimos
                    ipsum in dolores repellat hic dolorem perferendis nostrum ad
                    molestias debitis ex, vero magni recusandae. Nemo, cum
                    exercitationem laborum, illo nobis delectus quam ducimus,
                    fugit atque rem dolorum labore optio est. Placeat asperiores
                    accusantium tempora labore architecto, maxime mollitia
                    molestias, voluptatibus corrupti neque esse veniam,
                    voluptate voluptatum! Voluptatum hic debitis atque in
                    aperiam libero illo magnam. Tempore officia unde tempora.
                    Itaque sapiente at repellendus cupiditate. Illum, tempore
                    voluptate?
                  </p>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Customer Reviews</h3>

                {/* Reviews */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <h4 className="font-semibold">{review.userName}</h4>

                      <p className="text-sm text-(--text-color) mt-2">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>

                {/* === review box =  */}
                <div className="mt-10">
                  <form className="space-y-5">
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-base text-(--heading-color)"
                        htmlFor="name"
                      >
                        Name*
                      </label>
                      <input
                        className="py-3 px-2 text-sm text-(--text-color) w-full border border-gray-300 rounded outline-none"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        className="text-base text-(--heading-color)"
                        htmlFor="comments"
                      >
                        Comments*
                      </label>
                      <textarea
                        rows={4}
                        className="resize-none border border-gray-300 rounded w-full outline-none text-sm text-(--text-color) p-2"
                        id="comments"
                        placeholder="write commet..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-(--bg-color) hover:bg-(--bg-hover-color) transition-colors duration-100 py-3 px-6 rounded text-white font-semibold text-sm cursor-pointer"
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ============ Related Products ============  */}
      <RelatedProducts />
    </div>
  );
};

export default page;
