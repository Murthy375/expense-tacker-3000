import express from "express";
import { authUser } from "../middlewares/auth.middleware.js";
import { getUserProfile } from "../controllers/user.controller.js";
const router = express.Router();
router.get("/", authUser, getUserProfile);
export default router;
//# sourceMappingURL=user.routes.js.map