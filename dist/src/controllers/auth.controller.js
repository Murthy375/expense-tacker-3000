import { registerNewUser, loginUser } from "../services/auth.service.js";
// ------------------------------------------------------------- //
export const registerUserController = async (req, res, next) => {
    try {
        const validationResult = req.body;
        const newlyRegisteredUser = await registerNewUser(validationResult);
        res.status(201).json({ success: true, data: newlyRegisteredUser });
    }
    catch (error) {
        next(error);
    }
};
export const loginUserController = async (req, res, next) => {
    try {
        const validationResult = req.body;
        const { token, userExists } = await loginUser(validationResult);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
        });
        const userData = {
            id: userExists.id,
            userName: userExists.userName,
            email: userExists.email,
            createdAt: userExists.createdAt,
            updatedAt: userExists.updatedAt,
        };
        res.status(200).json({ success: true, data: userData });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=auth.controller.js.map