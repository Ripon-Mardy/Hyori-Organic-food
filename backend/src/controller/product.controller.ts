import { Request, Response } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { Product } from "../modules/Product.model";
import { slugify } from "../utils/slugify";
import { ApiResponse } from "../utils/ApiResponse";

// ============= create product =========== 
export const createProduct = asyncHandler(async (req: Request, res: Response) => {
    const { name, price, stock, description, category } = req.body;

    if (!name || !price || !category) {
        throw new ApiError(404, 'Missing required Field')
    }

    // image 
    let images: string[] = []

    if (Array.isArray(req.files)) {
        images = req.files?.map((f) => `/uploads/products/${f.filename}`)
    }

    // ======== create product ============ 
    const product = await Product.create({
        name,
        price,
        stock,
        category,
        image: images
    })

    res.status(200).json(new ApiResponse(200, 'Created product', product))

})


// ========= get all product ========== 
export const getAllProducts = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.find();

    res.status(200).json(new ApiResponse(200, 'All products', product))
})


// get single product 

export const getSingleProduct = asyncHandler(async (req: Request, res: Response) => {

})