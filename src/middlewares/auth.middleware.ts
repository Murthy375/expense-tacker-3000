import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authUser = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const token = req.cookies["token"];

    if (!token) {
      res
        .status(401)
        .json({ message: `un-authorized, token must be provided` });
      return;
    }

    const decodedToken = jwt.verify(token!, process.env.JWT_SECRET_KEY!);

    req.user = decodedToken;

    next();
  } catch (error) {
    next();
  }
};

export const ensureUserAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!req.user) {
    res.status(401).json({ message: `not authenticated, user not verified` });
  }
  next()
};
