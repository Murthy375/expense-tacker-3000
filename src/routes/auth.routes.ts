import express from "express";
const router = express.Router();
import { registerUserController } from "../controllers/auth.controller.js";

router.post("/register", registerUserController);

export default router;
