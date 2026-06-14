import express from "express";
import { validateRegisterRequest } from "../middlewares/auth.validate.middleware.js";
import { registerUserController } from "../controllers/auth.controller.js";
// services go in this line

const router = express.Router();

router.post("/register", validateRegisterRequest, registerUserController);
router.post("/login", /* validator */ /* controller */)

export default router;
