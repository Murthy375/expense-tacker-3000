import db from "../models/connect-orm-db.js";
import { categoryTable } from "../models/schema.js";
import { eq } from "drizzle-orm";
import { AppError } from "../utils/AppError.js";
export const createCategory = async (categoryName) => {
    const categoryExists = await db
        .select()
        .from(categoryTable)
        .where(eq(categoryTable.categoryName, categoryName));
    if (categoryExists) {
        throw new AppError(`category already exists`, 409);
    }
    const categoryCreated = db
        .insert(categoryTable)
        .values({ categoryName: categoryName })
        .returning();
    return categoryCreated;
};
//# sourceMappingURL=categories.service.js.map