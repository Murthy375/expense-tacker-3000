// ---------------------------------------------------------------- //
export const getUserProfile = async (req, res, next) => {
    try {
        const tokenData = req.user;
        console.log(tokenData);
        res.status(200);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=user.controller.js.map