import { registerPostRequestBodySchema, loginPostRequestBodySchema, } from "../validations/auth.validation.js";
export const validateRegisterRequest = (req, res, next) => {
    const validationResult = registerPostRequestBodySchema.safeParse(req.body);
    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error.format() });
    }
    req.body = validationResult.data;
    next();
};
export const validateLoginRequest = (req, res, next) => {
    const validationResult = loginPostRequestBodySchema.safeParse(req.body);
    if (validationResult.error) {
        return res.status(400).json({ error: validationResult.error.format() });
    }
    req.body = validationResult.data;
    next();
};
//# sourceMappingURL=auth.validate.middleware.js.map