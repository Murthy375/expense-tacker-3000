import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const hashPassword = (password: string): string => {
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  return hashedPassword;
};

export const comparePassword = (
  password: string,
  hashedPassword: string,
): boolean => {
  return bcrypt.compareSync(password, hashedPassword);
};

interface PayloadType {
  id: string;
  createdAt: Date;
}

export const generateJwtToken = (payload: PayloadType) => {
  const secret = process.env.JWT_SECRET_KEY;
  if (!secret) {
    throw new Error("JWT_SECRET_KEY not defined");
  }

  return jwt.sign(payload, secret);
};
