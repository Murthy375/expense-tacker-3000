import { categoriesPostRequestBodySchema } from "../validations/categories.validation.js";
export const validateCreateCategoryRequest = (req, res, next) => {
    const validationResult = categoriesPostRequestBodySchema.safeParse(req.body);
    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error.format() });
    }
    req.body = validationResult.data;
    next();
};
//# sourceMappingURL=categories.middleware.js.map