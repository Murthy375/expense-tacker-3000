import db from "../models/connect-orm-db.js"; // connections
import { userTable } from "../models/schema.js";
import { eq } from "drizzle-orm";
import { redisClient } from "../models/connect-redis.js";
// ------------------------------------- //
export const queryUserProfile = async (userId) => {
    // check in redis
    const cachedUserData = await redisClient.hgetall(`user:${userId}:profile`);
    if (Object.keys(cachedUserData).length > 0) {
        return cachedUserData;
    }
    // check in db
    const dbUserData = await db
        .select({
        id: userTable.id,
        userName: userTable.userName,
        email: userTable.email,
        createdAt: userTable.createdAt,
        updatedAt: userTable.updatedAt,
    })
        .from(userTable)
        .where(eq(userTable.id, userId));
    if (dbUserData) {
        await redisClient.hset(`user:${userId}:profile`, dbUserData);
        await redisClient.expire(`user:${userId}:profile`, 30);
    }
    return dbUserData;
};
//# sourceMappingURL=users.service.js.map