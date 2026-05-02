import { Request, Response } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { MenuModel } from "../modules/Menu.model";
import { ApiResponse } from "../utils/ApiResponse";

// create menu
export const createMenu = asyncHandler(async (req: Request, res: Response) => {
  const { name, path } = req.body;

  if (!name || !path) {
    throw new ApiError(400, "Name & Path is required");
  }

  //   menu exist
  const menuExist = await MenuModel.findOne({ name });
  if (menuExist) {
    throw new ApiError(402, "This menu is already exist");
  }

  const createMenu = await MenuModel.create({
    name,
    path,
  });

  res
    .status(200)
    .json(new ApiResponse(200, "Menu created successfully", createMenu));
});

// get all menus
export const getAllMenu = asyncHandler(async (req: Request, res: Response) => {
  const getMenu = await MenuModel.find({ isActive: true });

  res
    .status(200)
    .json(
      new ApiResponse(200, "all category is fetched successfully", getMenu),
    );
});

// update menu
export const updateMenu = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const menuUpdate = await MenuModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  console.log("menu update", menuUpdate?.path);

  if (!menuUpdate?.path) {
    throw new ApiError(401, "Path is required");
  }

  if (!menuUpdate) {
    throw new ApiError(400, "Menu not found");
  }

  res.status(200).json(new ApiResponse(200, "category updated", menuUpdate));
});

// Delete menu
export const deleteMenu = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteMenu = await MenuModel.findByIdAndDelete(id);

  if (!deleteMenu) {
    throw new ApiError(404, "Menu not Found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Menu Deleted successfully", deleteMenu));
});
