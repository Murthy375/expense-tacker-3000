import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userName: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({length: 255}).notNull(),
  salt: varchar({length: 225}),
});

export const categoryTable = pgTable("categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().references(() => userTable.id),
  categoryName: varchar({length:255}).notNull().unique(),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow().$onUpdate(() => new Date()), // the .$onUpdate() updates the timestamp whenever the row is modified (uses the currect date + time)
  // and the .defaultNow() sets the timestamp when the row is created
})