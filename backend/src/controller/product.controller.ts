import { Request, Response } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { Product } from "../modules/Product.model";
import { slugify } from "../utils/slugify";
import { ApiResponse } from "../utils/ApiResponse";

// ============= create product =========== 
export const createProduct = asyncHandler(async (req: Request, res: Response) => {
    const { name, price, category } = req.body;

    if (!name || !price || !category) {
        throw new ApiError(404, 'Required fields missing')
    }

    // ======== create product ============ 
    const product = await Product.create({
        name,
        price,
        category
    })


    res.status(200).json(new ApiResponse(200, 'Created product', product))

})


// ========= get all product ========== 
export const getAllProducts = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.find();

    res.status(200).json(new ApiResponse(200, 'All products', product))
})