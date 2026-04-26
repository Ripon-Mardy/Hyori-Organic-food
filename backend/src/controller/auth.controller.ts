import { Request, Response } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import UserModel from "../modules/User.model";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { ApiResponse } from "../utils/ApiResponse";

// send token function
const sendTokenResponse = (user: any, statusCode: number, res: Response) => {
  // create token
  const token = jwt.sign(
    { _id: user._id },
    env.jwtSecret as string,
    {
      expiresIn: env.jwtExpiresIn,
    } as jwt.SignOptions,
  );

  //   create options
  const cookieOptios = {
    httpOnly: true,
    secure: env.isProduction,
    sameSite: "strict" as const,
    maxAge: 7 * 24 * 60 * 60,
  };

  //   user response
  const userResponse = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    avater: user.avater,
  };

  res
    .status(statusCode)
    .cookie("token", token, cookieOptios as object)
    .json(new ApiResponse(statusCode, "Login Sucessfully", userResponse));
};

// register
export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  //   if user already exists
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "Email already registerd");
  }

  const user = await UserModel.create({ name, email, password });

  sendTokenResponse(user, 201, res);
});

// login
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please provide email and password");
  }

  // find user
  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) {
    throw new ApiError(400, "Invalid email or password");
  }

  // check password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid email and password");
  }

  sendTokenResponse(user, 200, res);
});

// logout
export const logout = asyncHandler(async (req: Request, res: Response) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .json(new ApiResponse(200, "Logged out successfully"));
});

// get me
export const getMe = asyncHandler(async (req: Request, res: Response) => {
  const user = await UserModel.findById(req.user._id);
  res.json(new ApiResponse(200, "user fetched", user));
});
