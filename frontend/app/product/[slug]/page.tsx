"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import productImage1 from "@/public/products/product1.webp";

import { Heart } from "lucide-react";

const page = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

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
          <div className="w-100 mx-auto">
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
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-lg tracking-widest text-(--text-green) font-semibold">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
