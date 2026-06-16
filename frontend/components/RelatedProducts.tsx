import React from "react";
import { products } from "@/src/data/Product";
import ProductCard from "@/components/ProductCard";

const RelatedProducts = () => {
  const hasProducts = products.length > 0;
  return (
    <div className="max-w-(--container-width) mx-auto px-2 py-10">
      <h2 className="text-xl sm:text-2xl text-(--heading-color) font-semibold">
        Related Products
      </h2>

      {/* === products ===  */}
      <div className="mt-10">
        {hasProducts ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div>Not Found Related Product</div>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
