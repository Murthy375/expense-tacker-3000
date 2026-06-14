import { registerNewUser } from "../services/auth.service.js";
import { AppError } from "../utils/AppError.js";
export const registerUserController = async (req, res) => {
    try {
        const validationResult = req.body;
        const newlyRegisteredUser = await registerNewUser(validationResult);
        return res.status(200).json({ success: true, data: newlyRegisteredUser });
    }
    catch (error) {
        if (error instanceof AppError) {
            return res.status(error.status).json({
                success: false,
                message: error.message,
            });
        }
        return res.status(500).json({
            success: false,
            message: "something went wrong",
        });
    }
};
// export const loginUserController = async (req: Request, res: Response): Promise<Response> => {
// }
//# sourceMappingURL=auth.controller.js.map