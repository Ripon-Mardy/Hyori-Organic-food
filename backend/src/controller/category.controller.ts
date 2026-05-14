import { Request, Response } from "express";

import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import CategoryModel from "../modules/Category.model";
import { ApiResponse } from "../utils/ApiResponse";

import fs from 'fs'
import path from 'path'

// create category
export const createCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, parent } = req.body;

    if (!name) {
      throw new ApiError(400, "Name Field is required");
    }

    if(!req.file) {
      throw new ApiError(400, 'Image is required');
    }


    const filePath = path.join('uploads', 'categories', req.file.filename);

    // check duplicate 
    const exist = await CategoryModel.findOne({name});
    if(exist) {
      if(fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
      }

      throw new ApiError(409, 'Category already exist');
    }
    
    const imagePath = `/uploads/categories/${req.file.filename}`

    const category = await CategoryModel.create({
      name,
      image : imagePath,
      parent: parent || null
    });

    res.status(200).json(new ApiResponse(200, "Category created", category));
  },
);

// get all categories
export const getAllCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const category = await CategoryModel.find();

    res.json(new ApiResponse(200, "Categories Fatched", category));
  },
);

// get single category
export const getSingleCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const category = await CategoryModel.findById(id);

    if (!category) {
      throw new ApiError(400, "Category not found");
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Category fetched successfully", category));
  },
);

// update category
export const updateCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const category = await CategoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
    );

    if (!category) {
      throw new ApiError(400, "Category not found");
    }

    res.status(200).json(new ApiResponse(200, "Category updated", category));
  },
);

// delete category
export const deleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const category = await CategoryModel.findByIdAndDelete({
      _id: req.params.id,
    });

    if (!category) {
      throw new ApiError(400, "Category not found");
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Category Delete Succssfully", null));
  },
);
