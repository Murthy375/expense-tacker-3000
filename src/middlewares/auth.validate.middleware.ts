import { registerPostRequestBodySchema } from "../validations/auth.validation.js";

import type { Request, Response, NextFunction } from "express";

export const validateRegisterRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const validationResult = registerPostRequestBodySchema.safeParse(
    req.body,
  );

  if (!validationResult.success) {
    return res.status(400).json({ error: validationResult.error.format() });
  }

  req.body = validationResult.data;
  next();
};
