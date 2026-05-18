import Image from "next/image";

// --------- best seller data ------------
const bestSellerData = [
  {
    id: 1,
    name: "Banana",
    image: "/products/banana.png",
    price: 169,
    oldPrice: null,
    rating: 4,
    reviews: 1,
    category: "Fruits",
  },
  {
    id: 2,
    name: "Fresh Meat",
    image: "/products/fresh-meat.png",
    price: 158,
    oldPrice: null,
    rating: 4,
    reviews: 1,
    category: "Meat",
  },
  {
    id: 3,
    name: "Orange",
    image: "/products/orange.png",
    price: 120,
    oldPrice: null,
    rating: 3,
    reviews: 1,
    category: "Fruits",
  },
  {
    id: 4,
    name: "Delicious Meat",
    image: "/products/delicious-meat.png",
    price: 150,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    category: "Meat",
  },
  {
    id: 5,
    name: "Carrot",
    image: "/products/carrot.png",
    price: 188,
    oldPrice: null,
    rating: 0,
    reviews: 0,
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Red Apple",
    image: "/products/red-apple.png",
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
        {/* -- left side image -- */}
        <div></div>
      </div>
    </section>
  );
};

export default BestSeller;
