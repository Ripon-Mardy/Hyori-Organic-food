import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import leftSideImage from "@/public/best-seller/left-side-image.webp";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

import { products } from "@/src/data/Product";

const BestSeller = () => {
  const bestSeller = products.filter((prodcut) => prodcut.bestSeller);
  const hasBestSeller = bestSeller.length > 0;
  return (
    <section className="py-16 best-seller-bg">
      <div className="max-w-(--container-width) mx-auto px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* -- left side image -- */}
          <div>
            <div className="w-full hover:scale-110 hover:rotate-6 transition-all duration-200">
              <Image
                src={leftSideImage}
                width={200}
                height={200}
                className="w-full object-cover"
                layout="responsive"
                alt="food"
              />
            </div>
          </div>

          {/* -------- right side content ----------  */}
          <div>
            <div className="text-center mb-8">
              <h4 className="text-sm text-(--text-green) font-semibold">
                Our Products
              </h4>
              <h2 className="text-2xl sm:text-4xl font-semibold text-(--heading-color)">
                Best Seller
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 items-center justify-center gap-2 sm:gap-6 w-full">
              {hasBestSeller ? (
                bestSeller?.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-2 sm:p-4 rounded-md flex items-center border border-gray-200 gap-2 w-full hover:border hover:border-(--text-green) transition-colors duration-150 cursor-pointer"
                  >
                    <div className="w-12 sm:w-20 h-12 sm:h-20 rounded-md overflow-hidden ">
                      <Image
                        src={item.image}
                        width={30}
                        height={30}
                        className="w-full object-cover"
                        alt={item.name}
                        title={item.name}
                        layout="responsive"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-sm sm:text-base text-(--heading-color) font-semibold">
                        {item.name}
                      </h2>
                      {/* rating  */}
                      <div className="flex items-center gap-3">
                        {/* stars */}
                        <div className="flex items-center">
                          {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon
                              key={index}
                              icon={faStar}
                              className={`text-xs ${
                                index < item.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>

                        {/* review count */}
                        <span className="text-xs text-gray-500">
                          ({item.totalReviews})
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-(--text-green) font-bold">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-base text-(--text-color) font-semibold">
                  No Best Products Available
                </div>
              )}
            </div>
            {bestSeller.length > 6 && (
              <div className="text-center mt-8">
                <Link
                  href="/shop"
                  className="bg-(--bg-color) hover:bg-(--bg-hover-color) transition-colors duration-100 cursor-pointer text-sm px-6 py-2 text-white font-semibold rounded"
                >
                  See more
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
