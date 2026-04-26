import { Request, Response } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import CategoryModel from "../modules/Category.model";
import { ApiResponse } from "../utils/ApiResponse";

// create category
export const createCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const { name } = req.body;

    if (!name) {
      throw new ApiError(400, "Category name is Required");
    }

    const exists = await CategoryModel.findOne({ name });
    if (exists) {
      throw new ApiError(400, "Category already exists");
    }

    // get image path

    // create
    const category = await CategoryModel.create({
      name,
    });

    res.status(201).json(new ApiResponse(201, "Category Created", category));
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
    const categoryId = await CategoryModel.findById(req.params.id);

    // if catgory not found
    if (!categoryId) {
      throw new ApiError(400, "Category not found");
    }
  },
);
