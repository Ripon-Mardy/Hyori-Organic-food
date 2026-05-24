"use client";
import { useState } from "react";
import Image from "next/image";

import { productCategories } from "@/src/data/ProductCategories";

import { products } from "@/src/data/Product";

import ProductCard from "@/components/ProductCard";
import NotFound from "@/components/shared/NotFound";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Fruits");

  // ------ filters products -------
  const filterdProducts = products.filter(
    (product) => product.category === activeCategory,
  );

  // -------- handle product click ----------
  const handleProductClick = (product: any) => {
    setActiveCategory(product);
  };

  return (
    <section>
      <div className="max-w-(--container-width) mx-auto px-2 py-16">
        {/* --- title ---  */}
        <div className="text-center">
          <h3 className="text-base text-(--text-green) font-medium">
            Our Products
          </h3>
          <h2 className="text-xl sm:text-3xl font-bold text-(--heading-color)">
            Shop By Category
          </h2>
        </div>

        {/* ----- products grid -----  */}
        <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-10 mt-10">
          {productCategories?.map((cate) => (
            <div
              key={cate?.id}
              onClick={() => setActiveCategory(cate.name)}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className="w-5">
                <Image
                  src={cate?.image}
                  width={20}
                  height={20}
                  alt={cate?.name}
                  className="text-gray-500 w-full"
                />
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold text-(--heading-color) group-hover:text-(--text-green) transition-all duration-200 ${cate.name === activeCategory ? "text-(--text-green)" : "text-(--heading-color)"}`}
              >
                {cate?.name}
              </span>
            </div>
          ))}
        </div>

        {/* --- products ---------  */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6 mt-10">
          {filterdProducts.length === 0 && (
            <div className="col-span-full">
              <NotFound
                title="No Products Found"
                message="There are no products available right now."
                buttonText="Continue Shopping"
                buttonLink="/shop"
              />
            </div>
          )}
          {filterdProducts?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
