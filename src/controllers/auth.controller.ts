import type { Request, Response } from "express";

import { registerNewUser } from "../services/auth.service.js";
import { AppError } from "../utils/AppError.js";

export const registerUserController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const validationResult = req.body;

    const newlyRegisteredUser = await registerNewUser(validationResult);

    return res.status(201).json({ success: true, data: newlyRegisteredUser });
  } catch (error: unknown) {
    if (error instanceof AppError) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

// export const loginUserController = async (req: Request, res: Response): Promise<Response> => {

// }
