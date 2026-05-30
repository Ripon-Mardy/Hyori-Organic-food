import product1 from "../../public/products/product1.webp";
import product2 from "../../public/products/product2.webp";
import product3 from "../../public/products/product3.webp";
import product4 from "../../public/products/product4.webp";
import product5 from "../../public/products/product5.webp";

// product type
import { Product } from "@/src/types/product.types";

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Organic Apple",
    slug: "fresh-organic-apple",
    sku: "APL-001",

    image: product1,

    shortDescription: "Fresh organic apples directly from local farms.",
    description:
      "Sweet, crispy, and naturally grown organic apples packed with vitamins and freshness.",

    category: "Fruits",
    brand: "Organic Farm",
    tags: ["organic", "fresh", "healthy"],

    price: 150,
    discountPrice: 120,
    discountPercentage: 20,

    stock: 45,
    sold: 120,

    unit: "1kg",

    rating: 4.8,
    totalReviews: 245,

    featured: true,
    bestSeller: true,
    trending: true,

    isNew: true,
    isSale: true,
    isStock: true,

    createdAt: "2026-05-20",
  },

  {
    id: 2,
    name: "Fresh Orange",
    slug: "fresh-orange",
    sku: "ORG-002",

    image: product2,

    shortDescription: "Juicy and vitamin-rich fresh oranges.",
    description:
      "Naturally sweet oranges full of vitamin C and perfect for juice or healthy snacks.",

    category: "Fruits",
    brand: "Fresh Valley",
    tags: ["orange", "fruit", "juice"],

    price: 110,
    discountPrice: 90,
    discountPercentage: 18,

    stock: 32,
    sold: 90,

    unit: "1kg",

    rating: 4.6,
    totalReviews: 180,

    featured: true,
    bestSeller: false,
    trending: true,

    isNew: false,
    isSale: true,
    isStock: true,

    createdAt: "2026-05-15",
  },

  {
    id: 3,
    name: "Organic Carrot",
    slug: "organic-carrot",
    sku: "CRT-003",

    image: product3,

    shortDescription: "Healthy organic carrots for daily nutrition.",
    description:
      "Fresh and crunchy carrots sourced from trusted organic vegetable farms.",

    category: "Vegetables",
    brand: "Green Harvest",
    tags: ["vegetable", "organic", "healthy"],

    price: 80,
    discountPrice: 70,
    discountPercentage: 12,

    stock: 20,
    sold: 65,

    unit: "500g",

    rating: 4.5,
    totalReviews: 120,

    featured: false,
    bestSeller: false,
    trending: true,

    isNew: true,
    isSale: true,
    isStock: true,

    createdAt: "2026-05-18",
  },

  {
    id: 4,
    name: "Premium Fresh Meat",
    slug: "premium-fresh-meat",
    sku: "MET-004",

    image: product4,

    shortDescription: "Fresh premium quality meat.",
    description:
      "High-quality fresh meat processed hygienically and delivered chilled.",

    category: "Meat",
    brand: "Daily Protein",
    tags: ["meat", "protein", "fresh"],

    price: 320,
    discountPrice: 250,
    discountPercentage: 22,

    stock: 8,
    sold: 70,

    unit: "1kg",

    rating: 4.9,
    totalReviews: 310,

    featured: true,
    bestSeller: true,
    trending: true,

    isNew: false,
    isSale: true,
    isStock: true,

    createdAt: "2026-05-10",
  },

  {
    id: 5,
    name: "Pure Cow Milk",
    slug: "pure-cow-milk",
    sku: "MLK-005",

    image: product5,

    shortDescription: "100% pure and fresh cow milk.",
    description:
      "Farm-fresh cow milk rich in calcium and nutrients for a healthy lifestyle.",

    category: "Milk",
    brand: "Nature Dairy",
    tags: ["milk", "fresh", "healthy"],

    price: 130,
    discountPrice: 110,
    discountPercentage: 15,

    stock: 0,
    sold: 200,

    unit: "1L",

    rating: 4.7,
    totalReviews: 410,

    featured: true,
    bestSeller: true,
    trending: false,

    isNew: false,
    isSale: true,
    isStock: false,

    createdAt: "2026-05-01",
  },

  {
    id: 5,
    name: "Pure Cow Milk",
    slug: "pure-cow-milk",
    sku: "MLK-005",

    image: product5,

    shortDescription: "100% pure and fresh cow milk.",
    description:
      "Farm-fresh cow milk rich in calcium and nutrients for a healthy lifestyle.",

    category: "Milk",
    brand: "Nature Dairy",
    tags: ["milk", "fresh", "healthy"],

    price: 500,
    discountPrice: 110,
    discountPercentage: 15,

    stock: 0,
    sold: 200,

    unit: "1L",

    rating: 4.7,
    totalReviews: 410,

    featured: true,
    bestSeller: true,
    trending: false,

    isNew: false,
    isSale: true,
    isStock: false,

    createdAt: "2026-05-01",
  },
];
