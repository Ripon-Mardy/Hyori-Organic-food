import Image from "next/image";

import { productCategories } from "@/src/data/ProductCategories";

import { products } from "@/src/data/Product";

import ProductCard from "@/components/ProductCard";

const Products = () => {
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
        <div className="flex items-center justify-center flex-wrap gap-10 mt-10">
          {productCategories?.map((cate) => (
            <div
              key={cate?.id}
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
              <span className="text-xs sm:text-sm font-semibold text-(--heading-color) group-hover:text-(--text-green) transition-all duration-200">
                {cate?.name}
              </span>
            </div>
          ))}
        </div>

        {/* --- products ---------  */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
