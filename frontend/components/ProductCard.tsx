"use client";

import Image from "next/image";

import { Product } from "@/src/types/product.types";

import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl">
      {/* ===== TOP BADGES ===== */}
      <div className="absolute left-3 top-3 z-20 flex flex-col gap-2">
        {product.isSale && (
          <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
            -{product.discountPercentage}%
          </span>
        )}

        {product.isNew && (
          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
            New
          </span>
        )}

        {!product.isStock && (
          <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
            Sold Out
          </span>
        )}
      </div>

      {/* ===== ACTION BUTTONS ===== */}
      <div className="absolute right-3 top-3 z-20 flex translate-x-14 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-black hover:text-white cursor-pointer">
          <Heart size={18} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-black hover:text-white cursor-pointer">
          <Eye size={18} />
        </button>
      </div>

      {/* ===== IMAGE ===== */}
      <div className="relative overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          className="h-32 sm:h-44 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="space-y-2 p-5">
        {/* category */}
        <span className="text-xs font-medium text-green-600">
          {product.category}
        </span>

        {/* title */}
        <Link
          href={`/product/${product.slug}`}
          className="line-clamp-3 text-base font-semibold text-gray-900 transition hover:text-green-600 cursor-pointer"
        >
          {product.name}
        </Link>

        {/* short desc */}
        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {product.shortDescription}
        </p>

        {/* rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-xs sm:text-sm font-medium">
              {product.rating}
            </span>
          </div>

          <span className="text-xs sm:text-sm text-gray-400">
            ({product.totalReviews} reviews)
          </span>
        </div>

        {/* sold + stock */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Sold: {product.sold}</span>

          {product.isStock ? (
            <span className="font-medium text-xs sm:text-sm text-green-600">
              In Stock ({product.stock})
            </span>
          ) : (
            <span className="font-medium text-red-500">Out of Stock</span>
          )}
        </div>

        {/* price */}
        <div className="flex items-end gap-3">
          <span className="text-base font-bold text-gray-900">
            ৳{product.discountPrice}
          </span>

          {product.discountPrice && (
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              ৳{product.price}
            </span>
          )}
        </div>

        {/* button */}
        <button
          disabled={!product.isStock}
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-2 sm:py-3 text-xs font-semibold transition-all duration-300 cursor-pointer ${
            product.isStock
              ? "bg-green-600 text-white hover:bg-green-700"
              : "cursor-not-allowed bg-gray-200 text-gray-500"
          }`}
        >
          <ShoppingCart size={18} />
          {product.isStock ? "Add To Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
}
