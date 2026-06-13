import express from "express";
import authRoutes from "./routes/auth.routes.js";
const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map