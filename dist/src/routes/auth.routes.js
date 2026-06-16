import express from "express";
import { validateRegisterRequest, validateLoginRequest, } from "../middlewares/auth.validate.middleware.js";
import { registerUserController, loginUserController, } from "../controllers/auth.controller.js";
// services go in this line
const router = express.Router();
router.post("/register", validateRegisterRequest, registerUserController);
router.post("/login", validateLoginRequest, loginUserController);
export default router;
//# sourceMappingURL=auth.routes.js.map