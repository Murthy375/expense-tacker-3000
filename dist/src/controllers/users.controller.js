import { queryUserProfile } from "../services/users.service.js";
// ---------------------------------------------------------------- //
export const getUserProfile = async (req, res, next) => {
    try {
        const tokenData = req.user;
        const userId = tokenData.id;
        const userData = await queryUserProfile(userId);
        res.status(200).json({ data: userData, message: "success" });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=users.controller.js.map