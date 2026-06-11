"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Table from "@/components/table/Table";

// product image
import productImage from "@/public/products/product1.webp";

// columns data
const columns = [
  {
    key: "image",
    label: "Image",
  },
  {
    key: "name",
    label: "Product name",
  },
  {
    key: "price",
    label: "Unit price",
  },
  {
    key: "status",
    label: "Stock Status",
  },
  {
    key: "action",
    label: "Action",
  },
];
// wishlist
const wishlist = [
  {
    id: 1,
    name: "Fresh Mango",
    price: 12.99,
    status: "In Stock",
    image: productImage,
  },
  {
    id: 2,
    name: "Organic Apple",
    price: 8.5,
    status: "In Stock",
    image: productImage,
  },
  {
    id: 3,
    name: "Banana Pack",
    price: 5.25,
    status: "Out of Stock",
    image: productImage,
  },
  {
    id: 4,
    name: "Orange Juice",
    price: 15,
    status: "Low Stock",
    image: productImage,
  },
  {
    id: 5,
    name: "Pineapple",
    price: 10.75,
    status: "In Stock",
    image: productImage,
  },
];

const page = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  return (
    <section>
      {/* ------- breadcrum ----------  */}
      <div className=" shop-breadcrum-banner py-8 sm:py-16 px-2">
        <div className="max-w-(--container-width) mx-auto">
          <h2 className="text-xl sm:text-4xl text-(--text-green) font-bold flex items-center justify-center">
            Wishlist
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

      {/* ========== wishlist ===============  */}
      <div className="max-w-(--container-width) mx-auto px-2 py-16">
        <h2 className="text-xl sm:text-4xl text-(--heading-color) font-semibold">
          My wishlist
        </h2>

        <div className="mt-8">
          <Table columns={columns} wishlist={wishlist} />
        </div>
      </div>
    </section>
  );
};

export default page;
