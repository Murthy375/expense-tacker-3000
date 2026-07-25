import { createCategory } from "../services/categories.service.js";
export const createCategoryController = async (req, res, next) => {
    try {
        const validationResult = req.body;
        let userId;
        if (typeof req.user === "object") {
            userId = req.user.id;
        }
        const createdCategory = await createCategory(validationResult.categoryName, userId);
        res.status(201).json({ success: true, data: createdCategory });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=categories.controller.js.map