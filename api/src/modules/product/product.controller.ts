import { Request, Response } from "express";
import { createProduct, getProducts } from "./product.service";

export const addProduct = async (req: Request, res: Response) => {
  const product = await createProduct(req.body);

  res.status(201).json({
    success: true,
    data: product,
  });
};

// get all products
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await getProducts();

  res.status(200).json({
    success: true,
    data: products,
  });
};
