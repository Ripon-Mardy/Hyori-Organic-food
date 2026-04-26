import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/AsyncHandler";
import { ApiError } from "../utils/ApiError";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import UserModel from "../modules/User.model";
import { ApiResponse } from "../utils/ApiResponse";

// type
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.token;

    if (!token) {
      throw new ApiError(400, "Please login to access this route");
    }

    // verify token
    const decoded = jwt.verify(token, env.jwtSecret as string) as {
      id: string;
    };

    // find user by token
    const user = await UserModel.findById(decoded.id);
    if (!user) {
      throw new ApiResponse(401, "User no longer exists");
    }

    req.user = user;

    next();
  },
);
