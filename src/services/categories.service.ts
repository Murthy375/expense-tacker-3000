import db from "../models/connect-orm-db.js";
import { categoryTable, userTable } from "../models/schema.js";
import { and, eq } from "drizzle-orm";

import { AppError } from "../utils/AppError.js";

interface categoryExistsInterface {
  id: string;
  userId: string | null;
  categoryName: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export const createCategory = async (categoryName: string, userId: string) => {
  const categoryExists: categoryExistsInterface[] = await db
    .select()
    .from(categoryTable)
    .where(
      and(
        eq(categoryTable.categoryName, categoryName),
        eq(categoryTable.userId, userId),
      ),
    );

  if (categoryExists.length > 0) {
    throw new AppError(`category already exists`, 409);
  }

  const categoryCreated = db
    .insert(categoryTable)
    .values({ categoryName: categoryName, userId: userId })
    .returning();

  return categoryCreated;
};
