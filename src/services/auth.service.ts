import db from "../models/connect-orm-db.js";
import { userTable } from "../models/schema.js";
import { eq } from "drizzle-orm";

import { redisClient } from "../models/connect-redis.js";

import { AppError } from "../utils/AppError.js";
import {
  hashPassword,
  comparePassword,
  generateJwtToken,
} from "../utils/auth.util.js";

// --------------------------------- //

async function getUserByEmail(email: string) {
  const [existingUser] = await db
    .select({
      id: userTable.id,
      userName: userTable.userName,
      email: userTable.email,
      password: userTable.password,
      createdAt: userTable.createdAt,
      updatedAt: userTable.updatedAt,
    })
    .from(userTable)
    .where(eq(userTable.email, email));

  if (!existingUser) {
    return;
  }

  return existingUser;
}

const createUser = async (data: RegisterUserData) => {
  const hashedPassword = hashPassword(data.password);

  const user = await db
    .insert(userTable)
    .values({
      userName: data.userName,
      email: data.email,
      password: hashedPassword,
    })
    .returning({
      userName: userTable.userName,
    });

  return user;
};

// check if user already existes in db -TRUE-> return res
// then you make a db query to insert the new user

interface RegisterUserData {
  email: string;
  userName: string;
  password: string;
}

export const registerNewUser = async (data: RegisterUserData) => {
  const existingUser = await getUserByEmail(data.email);

  if (existingUser) {
    throw new AppError(`user ${existingUser.userName} already exists`, 409);
  }

  const newlyCreatedUser = await createUser(data);

  return newlyCreatedUser;
};

interface LoginUserData {
  email: string;
  password: string;
}

// returns
// - user id
// - user name
// - email
// - created at
// - updated at

// interface LoginReturnType {
//   userId: string,
//   userName: string,
//   email: string,
//   createdAt: unknown,
//   updatedAt: unknown,
// }

interface PayloadType {
  id: string;
  createdAt: Date;
}

// you search by email found -TRUE-> you check the password matches -TRUE-> you give token and grant access || -FALSE-> password not match
//                           -FALSE-> you return a err msg (user 404)
//

export const loginUser = async (data: LoginUserData) => {
  const userExists = await getUserByEmail(data.email);

  if (!userExists) {
    throw new AppError(`user with email ${data.email} does not exist`, 404);
  }

  const isPasswordMatch = comparePassword(data.password, userExists.password);

  if (!isPasswordMatch) {
    throw new AppError("wrong password", 401);
  }

  const payload: PayloadType = {
    id: userExists.id,
    createdAt: userExists.createdAt,
  };

  const token = generateJwtToken(payload);

  // save user data in redis
  await redisClient.hset(`user:${userExists.id}:profile`, userExists)
  await redisClient.expire(`user:${userExists.id}:profile`, 3600)

  return { token, userExists };
};
