// imags for product categories
import productCategory1 from "../../public/category/icon-tabs-01.webp";
import productCategory2 from "../../public/category/icon-tabs-02.webp";
import productCategory3 from "../../public/category/icon-tabs-03.webp";
import productCategory4 from "../../public/category/icon-tabs-04.webp";
import productCategory5 from "../../public/category/icon-tabs-05.webp";

// types
import { productCategory } from "@/src/types/productCategory.type";

export const productCategories: productCategory[] = [
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
