import { Request, Response } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import UserModel from "../modules/User.model";

// register
export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  //   if user already exists
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "Email already registerd");
  }

  const user = await UserModel.create({ name, email, password });

  res.status(200).json({
    success: true,
    message: "User registerd successfully",
    data: user,
  });
});
