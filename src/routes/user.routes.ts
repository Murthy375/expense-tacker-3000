import express from "express";

import { authUser, ensureUserAuth } from "../middlewares/auth.middleware.js";
import { getUserProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", authUser, ensureUserAuth,getUserProfile);

export default router;
