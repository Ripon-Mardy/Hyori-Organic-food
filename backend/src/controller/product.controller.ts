import { Request, Response } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { Product } from "../modules/Product.model";
import { ApiResponse } from "../utils/ApiResponse";

import path from 'path'
import fs from 'fs'

// ============= create product ===========
export const createProduct = asyncHandler(
    async (req: Request, res: Response) => {

        const { name, price, stock, description, category } = req.body;

        // files
        const files = req.files as Express.Multer.File[];

        // helper function for deleting uploaded images
        const removeUploadedFiles = () => {

            if (files && files.length > 0) {

                files.forEach((file) => {

                    const filePath = path.resolve(
                        "uploads/products",
                        file.filename
                    );

                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                    }

                });

            }
        };

        // validation
        if (!name || !price || !category) {

            removeUploadedFiles();

            throw new ApiError(
                400,
                "Missing required fields"
            );
        }

        // check images
        if (!files || files.length === 0) {

            throw new ApiError(
                400,
                "Images are required"
            );
        }

        // image paths
        const images = files.map(
            (file) => `/uploads/products/${file.filename}`
        );

        // duplicate product check
        const existingProduct = await Product.findOne({
            name: {
                $regex: `^${name}$`,
                $options: "i",
            },
        });

        if (existingProduct) {

            removeUploadedFiles();

            throw new ApiError(
                409,
                "Product already exists"
            );
        }

        // duplicate image check
        const existingImage = await Product.findOne({
            image: { $in: images },
        });

        if (existingImage) {

            removeUploadedFiles();

            throw new ApiError(
                409,
                "Image already exists"
            );
        }

        // create product
        const product = await Product.create({
            name,
            price,
            stock,
            description,
            category,
            image: images,
        });

        res.status(201).json(
            new ApiResponse(
                201,
                "Created product",
                product
            )
        );
    }
);


// ========= get all product ========== 
export const getAllProducts = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.find();

    res.status(200).json(new ApiResponse(200, 'All products', product))
})


// =========== get single product

export const getSingleProduct = asyncHandler(async (req: Request, res: Response) => {

})