import jwt from "jsonwebtoken";
export const authUser = (req, res, next) => {
    try {
        const tokenHeader = req.cookies["token"];
        if (!tokenHeader) {
            return next();
        }
        if (!tokenHeader?.startsWith("Bearer ")) {
            res.status(400).json({
                message: `authentication header does not start with "Bearer"`,
            });
            return;
        }
        const token = tokenHeader?.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decodedToken;
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=auth.middleware.js.map