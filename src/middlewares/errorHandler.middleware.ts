import type { ErrorRequestHandler } from "express";
import { AppError } from "../utils/AppError.js";

export const errorHandler: ErrorRequestHandler = (
  error: unknown,
  req,
  res,
  next,
) => {
  if (error instanceof AppError) {
    res.status(error.status).json({
      success: false,
      message: error.message,
    });
    return;
  }
  res.status(500).json({
    success: false,
    message: "something went wrong",
  });
};
