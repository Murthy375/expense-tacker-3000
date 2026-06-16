import { pgTable, varchar, timestamp, numeric, text, uuid, } from "drizzle-orm/pg-core";
export const userTable = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    userName: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp()
        .defaultNow()
        .$onUpdate(() => new Date()),
});
export const categoryTable = pgTable("categories", {
    id: uuid().primaryKey().defaultRandom(),
    userId: uuid().references(() => userTable.id),
    categoryName: varchar({ length: 255 }).notNull().unique(),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp()
        .defaultNow()
        .$onUpdate(() => new Date()), // the .$onUpdate() updates the timestamp whenever the row is modified (uses the current date + time)
    // and the .defaultNow() sets the timestamp when the row is created
});
export const expenseTable = pgTable("expenses", {
    id: uuid().primaryKey().defaultRandom(),
    userId: uuid().references(() => userTable.id),
    categoryId: uuid().references(() => categoryTable.id),
    expenseName: varchar({ length: 255 }).notNull(),
    amount: numeric({ precision: 10, scale: 2 }).notNull(),
    description: text(),
    location: varchar({ length: 225 }), // optional
    date: timestamp().defaultNow(),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp()
        .defaultNow()
        .$onUpdate(() => new Date()), // the .$onUpdate() updates the timestamp whenever the row is modified (uses the currect date + time)
    // and the .defaultNow() sets the timestamp when the row is created
});
//# sourceMappingURL=schema.js.map