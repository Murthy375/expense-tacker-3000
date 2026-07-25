import db from "../models/connect-orm-db.js";
import { categoryTable, userTable } from "../models/schema.js";
import { and, eq } from "drizzle-orm";
import { AppError } from "../utils/AppError.js";
export const createCategory = async (categoryName, userId) => {
    const categoryExists = await db
        .select()
        .from(categoryTable)
        .where(and(eq(categoryTable.categoryName, categoryName), eq(categoryTable.userId, userId)));
    if (categoryExists.length > 0) {
        throw new AppError(`category already exists`, 409);
    }
    const categoryCreated = await db
        .insert(categoryTable)
        .values({ categoryName: categoryName, userId: userId })
        .returning();
    return categoryCreated;
};
//# sourceMappingURL=categories.service.js.map