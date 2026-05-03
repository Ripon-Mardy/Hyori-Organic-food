import { Request, Response } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import { bannerModel } from "../modules/Banner.model";
import { ApiResponse } from "../utils/ApiResponse";

import fs from "fs";
import path from "path";

// create banner
export const createBanner = asyncHandler(
  async (req: Request, res: Response) => {
    const { name } = req.body;

    // if no image
    if (!req.file) {
      throw new ApiError(400, "Banner image is required");
    }

    if (!name) {
      throw new ApiError(404, "Name & Link is required");
    }

    // exist Banner name
    const existBannerName = await bannerModel.findOne({ name });
    if (existBannerName) {
      const filePath = path.join("uploads", "banners", req.file.filename);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      throw new ApiError(401, "This Banner name is Exist");
    }

    // image upload
    const imagePath = `/uploads/banners${req.file?.filename}`;

    const banner = await bannerModel.create({
      name,
      image: imagePath,
    });

    res
      .status(200)
      .json(new ApiResponse(200, "Banner created Successfully", banner));
  },
);
