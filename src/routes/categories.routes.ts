import express from "express";

// validations, middlewares, controllers imports
import { ensureUserAuth } from "../middlewares/auth.middleware.js";

import { validateCreateCategoryRequest } from "../middlewares/categories.middleware.js";

import { createCategoryController } from "../controllers/categories.controller.js";

// --------------------------------------------- //

const router = express.Router();

router.post(
  "/",
  ensureUserAuth,
  validateCreateCategoryRequest,
  createCategoryController,
);

export default router;
