import Image from "next/image";

// images
import productCategory1 from "@/public/category/icon-tabs-01.webp";
import productCategory2 from "@/public/category/icon-tabs-02.webp";
import productCategory3 from "@/public/category/icon-tabs-03.webp";
import productCategory4 from "@/public/category/icon-tabs-04.webp";
import productCategory5 from "@/public/category/icon-tabs-05.webp";

// products category list
const productscategories = [
  {
    id: 1,
    name: "Fruits",
    image: productCategory1,
  },
  {
    id: 2,
    name: "Butter & Eggs",
    image: productCategory2,
  },
  {
    id: 3,
    name: "Vegetables",
    image: productCategory3,
  },
  {
    id: 4,
    name: "Milk & Cream",
    image: productCategory4,
  },
  {
    id: 5,
    name: "Meats",
    image: productCategory5,
  },
];

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
          {productscategories?.map((cate) => (
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
      </div>
    </section>
  );
};

export default Products;
