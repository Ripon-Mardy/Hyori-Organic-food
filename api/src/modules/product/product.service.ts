import { Product } from "./product.model";

export const createProduct = async (data: any) => {
  return await Product.create(data);
};

export const getProducts = async () => {
  return await Product.find();
};
