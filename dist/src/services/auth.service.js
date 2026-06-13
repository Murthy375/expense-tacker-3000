import db from "../models/connect-orm-db.js";
import { userTable } from "../models/schema.js";
import { eq } from "drizzle-orm";
// idk why is redis needed here?
// import { Redis } from "ioredis";
// const redisClient = new Redis();
import { AppError } from "../utils/AppError.js";
import { hashPassword } from "../utils/auth.util.js";
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
    const user = await db.insert(userTable).values({
        userName: data.userName,
        email: data.email,
        password: data.password,
    });
};
const registerNewUser = async (data) => {
    const existingUser = await getUserByEmail(data.email);
    if (existingUser) {
        throw new AppError(`user ${existingUser}already existes`, 409);
    }
    const newlyCreatedUser = await createUser(data);
};
//# sourceMappingURL=auth.service.js.map