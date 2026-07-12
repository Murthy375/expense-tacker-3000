import express from "express";
import cookieParser from "cookie-parser";
import { authUser } from "./middlewares/auth.middleware.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.route.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cookieParser());
app.use(authUser);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
