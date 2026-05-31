"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Range } from "react-range";
import ProductCard from "@/components/ProductCard";

// icons
import { Grid3x3, Grid2x2 } from "lucide-react";

// product category data
import { productCategories } from "@/src/data/ProductCategories";
// --- product data
import { products } from "@/src/data/Product";
import Pagination from "@/components/Pagination";

const Breadcrumb = () => {
  const [values, setValues] = useState([0, 0]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const pathname = usePathname();
  const productRef = useRef<HTMLDivElement>(null);

  // paginaiton state
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;
  const totalPages = Math.ceil(products.length / productPerPage);
  const startIndex = (currentPage - 1) * productPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productPerPage,
  );

  const paths = pathname.split("/").filter(Boolean);
  // get product min and max value
  useEffect(() => {
    const prices = products.map((product) => product.price);

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    setPriceRange({
      min: minPrice,
      max: maxPrice,
    });

    setValues([minPrice, maxPrice]);
  }, []);

  // --------- handle page change ---------
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    productRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section>
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

      {/* ---------- shop ------------  */}
      <div className="max-w-(--container-width) mx-auto pt-16 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* -- side bar ---  */}
          <div className="lg:col-span-2 space-y-5">
            {/* ---filter by category --  */}
            <div className="border border-gray-200 p-4 rounded-md shadow space-y-3">
              <div>
                <h2 className="text-base font-semibold pb-2 border-b-2 border-green-600 w-fit uppercase text-(--text-color)">
                  Categories
                </h2>
                <div className="w-full h-0.5 bg-gray-200/50"></div>
              </div>
              <div>
                {productCategories.length > 0 ? (
                  <div className="space-y-2 sm:space-y-3">
                    {productCategories.map((product) => (
                      <div key={product.id}>
                        <span className="text-xs sm:text-sm font-medium text-(--text-color) cursor-pointer hover:text-(--text-green) transition duration-150">
                          {product?.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>No category found</div>
                )}
              </div>
            </div>

            {/* --- filter by price ---  */}
            <div className="border border-gray-200 p-4 rounded-md shadow space-y-8">
              <div>
                <h2 className="text-sm sm:text-base font-semibold pb-2 border-b-2 border-green-600 w-fit uppercase text-(--text-color)">
                  Filter by price
                </h2>
                <div className="w-full h-0.5 bg-gray-200/50"></div>

                <div className="w-full mt-10">
                  {priceRange.max > priceRange.min && (
                    <Range
                      step={1}
                      min={priceRange.min}
                      max={priceRange.max}
                      values={values}
                      onChange={setValues}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          className="h-1 w-full rounded bg-(--bg-color)"
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => {
                        const { key, ...restProps } = props;

                        return (
                          <div
                            key={key}
                            {...restProps}
                            className="h-4 w-4 rounded-full bg-green-600"
                          />
                        );
                      }}
                    />
                  )}

                  <button className="bg-(--bg-color) hover:bg-(--bg-hover-color) transition duration-100 px-6 text-white py-1 rounded-md text-sm mt-8 cursor-pointer">
                    Filter
                  </button>

                  <div className="mt-4 flex justify-between">
                    <span className="text-sm text-(--text-color) font-medium">
                      ৳{values[0]}
                    </span>
                    <span className="text-sm text-(--text-color) font-medium">
                      ৳{values[1]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---- right side products -----  */}
          <div ref={productRef} className="lg:col-span-8">
            {/* ---  sorting -- */}
            <div className="flex items-center justify-between gap-3">
              <p className="text-(--text-color) text-sm">
                Showing 1–9 of 11 results
              </p>
              <div className="flex items-center justify-center gap-4">
                <select
                  name=""
                  id=""
                  className="text-sm text-(--text-color) px-2 py-2 rounded border border-gray-200 uppercase outline-none"
                >
                  <option value="Default Sorting">Default Sorting</option>
                  <option value="1">sort by popularity</option>
                  <option value="2">sort by avarage rating</option>
                  <option value="3">sort by latest</option>
                  <option value="4">sort by price : low to high</option>
                  <option value="5">sort by price : High to low</option>
                </select>

                {/* grid  */}
                <div className="flex items-center gap-4">
                  <Grid3x3 className="text-(--text-color) w-5 h-5 cursor-point items-center gap-4er" />
                  <Grid2x2 className="text-(--text-color) w-5 h-5 cursor-pointer" />
                </div>
              </div>
            </div>
            <hr className="opacity-10 my-5" />

            {/* --- product ---  */}
            <div>
              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-2 sm:gap-4">
                  {currentProducts.map((product) => (
                    <ProductCard key={product?.id} product={product} />
                  ))}
                </div>
              ) : (
                <div>product not found</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --------- pagination -----------  */}
      <div className="max-w-(--container-width) mx-auto my-10">
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
};

export default Breadcrumb;
