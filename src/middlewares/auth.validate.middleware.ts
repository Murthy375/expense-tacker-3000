import { registerPostRequestBodySchema } from "../validations/auth.validation.js";

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

export const validateRegisterRequest = async (
  req: any,
  res: any,
  next: any,
) => {
  const validationResult = await registerPostRequestBodySchema.safeParse(
    req.body,
  );

  if (!validationResult.success) {
    return res.status(400).json({ error: validationResult.error.format() });
  }

  req.validationResult = validationResult;
  next();
};
