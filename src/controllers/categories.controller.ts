import type { Request, Response, NextFunction } from "express";

import { createCategory } from "../services/categories.service.js";

export const createCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const validationResult = req.body;

    let userId;

    if (typeof req.user === "object") {
      userId = req.user.id;
    }

    const createdCategory = await createCategory(
      validationResult.categoryName,
      userId,
    );

    res.status(201).json({ success: true, data: createdCategory });
  } catch (error: unknown) {
    next(error);
  }
};
