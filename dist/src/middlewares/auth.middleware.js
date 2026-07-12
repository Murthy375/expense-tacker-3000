import jwt from "jsonwebtoken";
export const authUser = (req, res, next) => {
    try {
        const token = req.cookies["token"];
        if (!token) {
            return next();
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decodedToken;
        next();
    }
    catch (error) {
        next();
    }
};
export const ensureUserAuth = (req, res, next) => {
    if (!req.user) {
        res.status(401).json({ message: `not authenticated, user not verified` });
    }
    next();
};
//# sourceMappingURL=auth.middleware.js.map