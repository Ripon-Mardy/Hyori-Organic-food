"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// product category data
import { productCategories } from "@/src/data/ProductCategories";

const Breadcrumb = () => {
  const pathname = usePathname();

  const paths = pathname.split("/").filter(Boolean);

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
      <div className="max-w-(--container-width) mx-auto py-16 px-2">
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
              </div>
              <input type="range" min="0" max="1000" className="w-full" />
            </div>
          </div>

          {/* ---- right side products -----  */}
          <div className="lg:col-span-8"> products </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
