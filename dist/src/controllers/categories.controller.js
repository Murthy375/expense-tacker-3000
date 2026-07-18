import { createCategory } from "../services/categories.service.js";
export const createCategoryController = async (req, res, next) => {
    try {
        const validationResult = req.body;
        const createdCategory = await createCategory(validationResult.categoryName);
        res.status(201).json({ success: true, data: createdCategory });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=categories.controller.js.map