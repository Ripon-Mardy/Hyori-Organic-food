import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// images
import banana from "@/public/best-seller/apple.webp";
import freshMeat from "@/public/best-seller/fresh-meat.webp";
import orange from "@/public/best-seller/orange.webp";
import deliciusMeat from "@/public/best-seller/meat.webp";
import carrot from "@/public/best-seller/carrot.webp";
import redApple from "@/public/best-seller/red-apple.webp";

import leftSideImage from "@/public/best-seller/left-side-image.webp";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

// --------- best seller data ------------
const bestSellerData = [
  {
    id: 1,
    name: "Banana",
    image: banana,
    price: 169,
    oldPrice: null,
    rating: 4,
    reviews: 1,
    category: "Fruits",
  },
  {
    id: 2,
    name: "Fresh Meat",
    image: freshMeat,
    price: 158,
    oldPrice: null,
    rating: 4,
    reviews: 1,
    category: "Meat",
  },
  {
    id: 3,
    name: "Orange",
    image: orange,
    price: 120,
    oldPrice: null,
    rating: 3,
    reviews: 1,
    category: "Fruits",
  },
  {
    id: 4,
    name: "Delicious Meat",
    image: deliciusMeat,
    price: 150,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    category: "Meat",
  },
  {
    id: 5,
    name: "Carrot",
    image: carrot,
    price: 188,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Red Apple",
    image: redApple,
    price: 155,
    oldPrice: 167,
    rating: 3,
    reviews: 1,
    category: "Fruits",
  },
];

const BestSeller = () => {
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

            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-4 sm:gap-6 w-full">
              {bestSellerData?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-md flex items-center border border-gray-200 gap-2 w-full hover:border hover:border-(--text-green) transition-colors duration-150 cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-md overflow-hidden ">
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
                    <div className="flex items-center gap-2">
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
                        ({item.reviews})
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm text-(--text-green) font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
