import db from "../models/connect-orm-db.js";
import { userTable } from "../models/schema.js";
import { eq } from "drizzle-orm";
import { Redis } from "ioredis";
import { AppError } from "../utils/AppError.js";
import { hashPassword } from "../utils/auth.util.js";
const redisClient = new Redis();
// --------------------------------- //
async function getUserByEmail(email) {
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
        throw new AppError(`user ${existingUser.userName} already existes`, 409);
    }
    const newlyCreatedUser = await createUser(data);
    return newlyCreatedUser;
};
//# sourceMappingURL=auth.service.js.map