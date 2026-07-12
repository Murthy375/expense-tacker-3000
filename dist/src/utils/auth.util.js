import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
export const hashPassword = (password) => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
};
export const comparePassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};
export const generateJwtToken = (payload) => {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
        throw new Error("JWT_SECRET_KEY not defined");
    }
    return jwt.sign(payload, secret);
};
//# sourceMappingURL=auth.util.js.map