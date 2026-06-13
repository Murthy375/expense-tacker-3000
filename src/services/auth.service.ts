import db from "../models/connect-orm-db.js";
import { userTable } from "../models/schema.js";
import { eq } from "drizzle-orm";

import { Redis } from "ioredis";

import { AppError } from "../utils/AppError.js";
import { hashPassword } from "../utils/auth.util.js";

const redisClient = new Redis();

// --------------------------------- //

async function getUserByEmail(email: string) {
  const [existingUser] = await db
    .select({
      id: userTable.id,
      userName: userTable.userName,
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

// check if user already existes in db - T -> return res
// then you make a db query to insert the new user

interface RegisterUserData {
  email: string;
  userName: string;
  password: string;
}

export const registerNewUser = async (data: RegisterUserData) => {
  const existingUser = await getUserByEmail(data.email);

  if (existingUser) {
    throw new AppError(`user ${existingUser.userName} already existes`, 409);
  }

  const newlyCreatedUser = await createUser(data);

  return newlyCreatedUser;
};
