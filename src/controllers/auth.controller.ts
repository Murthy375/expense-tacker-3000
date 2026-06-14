import type { Request, Response, NextFunction } from "express";

import { registerNewUser } from "../services/auth.service.js";

// ------------------------------------------------------------- //

export const registerUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const validationResult = req.body;

    const newlyRegisteredUser = await registerNewUser(validationResult);

    res.status(201).json({ success: true, data: newlyRegisteredUser });
  } catch (error: unknown) {
    next(error);
  }
};

// export const loginUserController = async (req: Request, res: Response): Promise<Response> => {

// }
