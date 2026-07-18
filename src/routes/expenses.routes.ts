import express from "express";

import { ensureUserAuth } from "../middlewares/auth.middleware.js";
// other imports

const router = express.Router();

// validations, auth middleware, controller
router.post("/expense", ensureUserAuth);