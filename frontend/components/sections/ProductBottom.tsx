import Image from "next/image";

// images
import productBottom1 from "@/public/Productbottom/icon-01-1.webp";
import productBottom2 from "@/public/Productbottom/icon-02-1.webp";
import productBottom3 from "@/public/Productbottom/icon-03-1.webp";

// product bottom data
const productBottomData = [
  {
    id: 1,
    image: productBottom1,
    name: "Choose fruits",
    description:
      "lorem ipsum is simply dummy text of the printing and type setting industry",
  },
  {
    id: 2,
    image: productBottom2,
    name: "Place your Address ",
    description:
      "lorem ipsum is simply dummy text of the printing and type setting industry",
  },
  {
    id: 3,
    image: productBottom3,
    name: "Payment & Delivery",
    description:
      "lorem ipsum is simply dummy text of the printing and type setting industry",
  },
];

const ProductBottom = () => {
  return (
    <div className="py-16 product-bottom-bg">
      <div className="max-w-(--container-width) mx-auto px-2">
        {/* ------ card ----------  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {productBottomData.map((product) => (
            <div
              key={product?.id}
              className="product-card flex items-center justify-center gap-4 flex-col bg-white p-1 md:p-5  md:py-10 rounded-md  "
            >
              {/* image  */}
              <div className="w-10 h-10 md:w-24 md:h-24 product-image">
                <Image
                  src={product?.image}
                  width={5}
                  height={5}
                  layout="responsive"
                  alt={product?.name}
                  className="w-full object-cover"
                />
              </div>

              <h2 className="text-(--heading-color) text-base font-semibold">
                {product?.name}
              </h2>
              <p className="text-center text-(--text-color) text-sm">
                {product?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBottom;
