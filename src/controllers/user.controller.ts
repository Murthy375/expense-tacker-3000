import type { Request, Response, NextFunction } from "express";
import type { JwtPayload } from "jsonwebtoken";

import { queryUserProfile } from "../services/user.service.js";

// ---------------------------------------------------------------- //

export const getUserProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tokenData = req.user;
    const userId = (tokenData as JwtPayload).id;

    const userData = await queryUserProfile(userId);

    res.status(200).json({ data: userData, message: "success" });
  } catch (error: unknown) {
    next(error);
  }
};
