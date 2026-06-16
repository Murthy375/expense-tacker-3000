interface RegisterUserData {
    email: string;
    userName: string;
    password: string;
}
export declare const registerNewUser: (data: RegisterUserData) => Promise<{
    userName: string;
}[]>;
interface LoginUserData {
    email: string;
    password: string;
}
export declare const loginUser: (data: LoginUserData) => Promise<{
    token: string;
    userExists: {
        id: string;
        userName: string;
        email: string;
        password: string;
        createdAt: Date;
        updatedAt: Date | null;
    };
}>;
export {};
//# sourceMappingURL=auth.service.d.ts.map