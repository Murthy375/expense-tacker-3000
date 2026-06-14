import bcrypt from "bcrypt";
export const hashPassword = (password) => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
};
//# sourceMappingURL=auth.util.js.map