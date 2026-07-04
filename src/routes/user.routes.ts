import express from "express";

import { ensureUserAuth } from "../middlewares/auth.middleware.js";
import { getUserProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", ensureUserAuth, getUserProfile);

export default router;
