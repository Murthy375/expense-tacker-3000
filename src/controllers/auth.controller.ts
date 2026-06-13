import type { Request, Response } from "express";

import { registerNewUser } from "../services/auth.service.js";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const validationResult = req.body;

    const newlyRegisterdUser = await registerNewUser(validationResult);

    return res.status(200).json({ success: true, data: newlyRegisterdUser });
  } catch (error: any) {
    return res.status(error.status ?? 500).json({
      success: false,
      message: error.message ?? "something went wrong",
    });
  }
};
