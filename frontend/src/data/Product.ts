import product1 from "../../public/products/product1.webp";
import product2 from "../../public/products/product2.webp";
import product3 from "../../public/products/product3.webp";
import product4 from "../../public/products/product4.webp";
import product5 from "../../public/products/product5.webp";

const images = [product1, product2, product3, product4, product5];

export const products = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  slug: `product-${index + 1}`,
  sku: `SKU-${String(index + 1).padStart(3, "0")}`,

  image: images[index % images.length],

  shortDescription: `Short description for Product ${index + 1}`,
  description: `This is a detailed description for Product ${index + 1}.`,

  category: ["Fruits", "Vegetables", "Milk", "Meat", "Bakery"][index % 5],

  brand: [
    "Organic Farm",
    "Fresh Valley",
    "Green Harvest",
    "Nature Dairy",
    "Daily Protein",
  ][index % 5],

  tags: ["fresh", "organic", "healthy"],

  price: Math.floor(Math.random() * 500) + 50,
  discountPrice: Math.floor(Math.random() * 300) + 30,
  discountPercentage: Math.floor(Math.random() * 30) + 5,

  stock: Math.floor(Math.random() * 100),
  sold: Math.floor(Math.random() * 500),

  unit: "1kg",

  rating: Number((Math.random() * 2 + 3).toFixed(1)),
  totalReviews: Math.floor(Math.random() * 500),

  featured: index % 2 === 0,
  bestSeller: index % 3 === 0,
  trending: index % 4 === 0,

  isNew: index % 5 === 0,
  isSale: true,
  isStock: Math.random() > 0.2,

  createdAt: "2026-05-20",
}));
