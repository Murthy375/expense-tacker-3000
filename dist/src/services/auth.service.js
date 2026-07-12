import db from "../models/connect-orm-db.js";
import { userTable } from "../models/schema.js";
import { eq } from "drizzle-orm";
import { redisClient } from "../models/connect-redis.js";
import { AppError } from "../utils/AppError.js";
import { hashPassword, comparePassword, generateJwtToken, } from "../utils/auth.util.js";
// --------------------------------- //
async function getUserByEmail(email) {
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
const createUser = async (data) => {
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
export const registerNewUser = async (data) => {
    const existingUser = await getUserByEmail(data.email);
    if (existingUser) {
        throw new AppError(`user ${existingUser.userName} already exists`, 409);
    }
    const newlyCreatedUser = await createUser(data);
    return newlyCreatedUser;
};
// you search by email found -TRUE-> you check the password matches -TRUE-> you give token and grant access || -FALSE-> password not match
//                           -FALSE-> you return a err msg (user 404)
//
export const loginUser = async (data) => {
    const userExists = await getUserByEmail(data.email);
    if (!userExists) {
        throw new AppError(`user with email ${data.email} does not exist`, 404);
    }
    const isPasswordMatch = comparePassword(data.password, userExists.password);
    if (!isPasswordMatch) {
        throw new AppError("wrong password", 401);
    }
    const payload = {
        id: userExists.id,
        createdAt: userExists.createdAt,
    };
    const token = generateJwtToken(payload);
    // save user data in redis
    await redisClient.hset(`user:${userExists.id}:profile`, userExists);
    await redisClient.expire(`user:${userExists.id}:profile`, 3600);
    return { token, userExists };
};
//# sourceMappingURL=auth.service.js.map