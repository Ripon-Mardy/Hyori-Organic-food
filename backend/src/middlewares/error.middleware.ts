import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { env } from "../config/env";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ApiError) {
    return res
      .status(err.statusCode)
      .json(new ApiResponse(err.statusCode, err.message, null));
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res
      .status(409)
      .json(new ApiResponse(409, `${field} already exists`, null));
  }

  // MongoDB validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e: any) => e.message);
    return res.status(400).json(new ApiResponse(400, messages[0], null));
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    return res
      .status(401)
      .json(new ApiResponse(401, "Invalid token. Please login again", null));
  }

  if (err.name === "TokenExpiredError") {
    return res
      .status(401)
      .json(new ApiResponse(401, "Token expired. Please login again", null));
  }

  console.error("UNEXPECTED ERROR 🔴", err);
  return res
    .status(500)
    .json(
      new ApiResponse(
        500,
        env.isProduction ? "Internal server error" : err.message,
        null,
      ),
    );
};
